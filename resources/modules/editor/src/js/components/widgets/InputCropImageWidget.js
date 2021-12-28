import AltrpFile from "../../../../../front-app/src/js/classes/AltrpFile";

const {
  isEditor,
  parseOptionsFromSettings,
  replaceContentWithData,
  getDataFromLocalStorage
} = window.altrpHelpers;
const {ImageCrop} = window.altrpLibs
import {changeFormFieldValue} from "../../../../../front-app/src/js/store/forms-data-storage/actions";

(window.globalDefaults = window.globalDefaults || []).push(`
  .image-to-crop-container {
    cursor: pointer;
    position: relative;
  }

  .image-crop-container {
    cursor: pointer;
    display: flex;
    justify-content: center;
  }

  .crop-image-background {
    width: 100%;
    height: 100%;
  }
  .crop-image-text {
    pointer-events: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .ReactCrop__image {
    height: 100%;
  }

  .ReactCrop > * {
    height: 100%;
  }
`)


const getCroppedImg = (image, crop, fileName) => {
  const canvas = document.createElement("canvas");
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  canvas.width = crop.width;
  canvas.height = crop.height;
  const ctx = canvas.getContext("2d");

  // New lines to be added
  const pixelRatio = window.devicePixelRatio;
  canvas.width = crop.width * pixelRatio;
  canvas.height = crop.height * pixelRatio;
  ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  ctx.imageSmoothingQuality = "high";

  ctx.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width * scaleX,
    crop.height * scaleY,
    0,
    0,
    crop.width,
    crop.height
  );
 
  // As Base64 string
  // const base64Image = canvas.toDataURL('image/jpeg');
 
  // As a blob
  return new Promise((resolve, reject) => {
    canvas.toBlob(file => {
      resolve(new File([file], fileName, {type: 'image/jpeg'}));
    }, 'image/jpeg');
  });
}

class InputCropImageWidget extends Component {

  constructor(props) {
    super(props);
    props.element.component = this;
    if (window.elementDecorator) {
      window.elementDecorator(this);
    }
    this.wrapperRef = React.createRef()

    this.state = {
      settings: {...props.element.getSettings()},
      crop: {}
    };
    this.altrpSelectRef = React.createRef();
    this.imageToCrop = React.createRef()
    this.selectOtherInput = React.createRef()
  }

  /**
   * @returns {string | []}
   */
  getValue = () => {
    let value;
    let formId = this.props.element.getFormId();
    let fieldName = this.props.element.getFieldId();
    if (isEditor()) {
      value = this.state.value;
    } else {
      value = _.get(appStore.getState(), `formsStore.${formId}.${fieldName}`, '')
    }
    return value;
  }

  /**
   * Загрузка виджета
   * @param {{}} prevProps
   * @param {{}} prevState
   */
  async _componentDidMount(prevProps, prevState) {
    if (this.props.element.getSettings("content_options")) {
      let options = parseOptionsFromSettings(
        this.props.element.getSettings("content_options")
      );

      this.setState(state => ({...state, options}));
    }

    let value = this.state.value;

    /**
     * Если динамическое значение загрузилось,
     * то используем this.getContent для получение этого динамического значения
     * старые динамические данные
     * */
    if (
      _.get(value, "dynamic") &&
      this.props.currentModel.getProperty("altrpModelUpdated")
    ) {
      value = this.getContent("content_default_value");
    }

    /**
     * Если модель обновилась при смене URL
     */
    if (
      prevProps &&
      !prevProps.currentModel.getProperty("altrpModelUpdated") &&
      this.props.currentModel.getProperty("altrpModelUpdated")
    ) {
      value = this.getContent("content_default_value");
      this.setState(
        state => ({...state, value, contentLoaded: true}),
        () => {
          this.dispatchFieldValueToStore(value);
        }
      );
      return;
    }

    if (
      this.props.currentModel.getProperty("altrpModelUpdated") &&
      this.props.currentDataStorage.getProperty("currentDataStorageLoaded") &&
      !this.state.contentLoaded
    ) {
      value = this.getContent("content_default_value");
      this.setState(
        state => ({...state, value, contentLoaded: true}),
        () => {
          this.dispatchFieldValueToStore(value);
        }
      );
      return;
    }

    if (this.state.value !== value) {
      this.setState(
        state => ({...state, value}),
        () => {
          this.dispatchFieldValueToStore(value);
        }
      );
    }
  }

  /**
   * Обновление виджета
   */
  async _componentDidUpdate(prevProps, prevState) {
    const {content_options, model_for_options} = this.state.settings;
    if (
      prevProps &&
      !prevProps.currentDataStorage.getProperty("currentDataStorageLoaded") &&
      this.props.currentDataStorage.getProperty("currentDataStorageLoaded")
    ) {
      let value = this.getContent(
        "content_default_value",
        this.props.element.getSettings("select2_multiple")
      );
      this.setState(
        state => ({...state, value, contentLoaded: true}),
        () => {
          this.dispatchFieldValueToStore(value);
        }
      );
    }

    /**
     * Если обновилась модель, то пробрасываем в стор новое значение (старый источник диамических данных)
     */
    if (
      !_.isEqual(this.props.currentModel, prevProps.currentModel) &&
      this.state.value &&
      this.state.value.dynamic
    ) {
      this.dispatchFieldValueToStore(this.getContent("content_default_value"));
    }

    if (content_options && !model_for_options) {
      let options = parseOptionsFromSettings(content_options);
      if (!_.isEqual(options, this.state.options)) {
        this.setState(state => ({...state, options}));
      }
    }
    this.updateValue(prevProps);
  }

  /**
   * Обновить значение если нужно
   * @param {{}} prevProps
   */
  updateValue(prevProps) {

    if (isEditor()) {
      return;
    }

    let content_calculation = this.props.element.getSettings(
      "content_calculation"
    );
    const altrpforms = this.props.formsStore;
    const fieldName = this.props.element.getFieldId();
    const formId = this.props.element.getFormId();

    if (!content_calculation) {
      /**
       * Обновить значение, если formsStore изменилось из другого компонента
       */
      const path = `${formId}.${fieldName}`;
      if (
        this.props.formsStore !== prevProps.formsStore &&
        _.get(altrpforms, path) !== this.state.value
      ) {
        this.setState(state => ({
          ...state,
          value: _.get(altrpforms, path)
        }));
      }
      return;
    }

    const prevContext = {};
    const altrpdata = this.props.currentDataStorage.getData();
    const altrpmodel = this.props.currentModel.getData();
    const altrpuser = this.props.currentUser.getData();
    const altrppagestate = this.props.altrpPageState.getData();
    const altrpresponses = this.props.altrpresponses.getData();
    const altrpmeta = this.props.altrpMeta.getData();
    const context = this.props.element.getCurrentModel().getData();

    if (content_calculation.indexOf("altrpdata") !== -1) {
      context.altrpdata = altrpdata;
      if (!altrpdata.currentDataStorageLoaded) {
        prevContext.altrpdata = altrpdata;
      } else {
        prevContext.altrpdata = prevProps.currentDataStorage.getData();
      }
    }

    if (content_calculation.indexOf("altrpforms") !== -1) {
      context.altrpforms = altrpforms;
      /**
       * Не производим вычисления, если изменилось текущее поле
       */
      if (`${formId}.${fieldName}` === altrpforms.changedField) {
        prevContext.altrpforms = altrpforms;
      } else {
        prevContext.altrpforms = prevProps.formsStore;
      }
    }

    if (content_calculation.indexOf("altrpmodel") !== -1) {
      context.altrpmodel = altrpmodel;
      prevContext.altrpmodel = prevProps.currentModel.getData();
    }

    if (content_calculation.indexOf("altrpuser") !== -1) {
      context.altrpuser = altrpuser;
      prevContext.altrpuser = prevProps.currentUser.getData();
    }

    if (content_calculation.indexOf("altrpuser") !== -1) {
      context.altrpuser = altrpuser;
      prevContext.altrpuser = prevProps.currentUser.getData();
    }

    if (content_calculation.indexOf("altrppagestate") !== -1) {
      context.altrppagestate = altrppagestate;
      prevContext.altrppagestate = prevProps.altrpPageState.getData();
    }

    if (content_calculation.indexOf("altrpmeta") !== -1) {
      context.altrpmeta = altrpmeta;
      prevContext.altrpmeta = prevProps.altrpMeta.getData();
    }

    if (content_calculation.indexOf("altrpresponses") !== -1) {
      context.altrpresponses = altrpresponses;
      prevContext.altrpresponses = prevProps.altrpresponses.getData();
    }

    if (content_calculation.indexOf("altrpstorage") !== -1) {
      context.altrpstorage = getDataFromLocalStorage("altrpstorage", {});
    }

    if (
      _.isEqual(prevProps.currentDataStorage, this.props.currentDataStorage) &&
      _.isEqual(prevProps.currentUser, this.props.currentUser) &&
      _.isEqual(prevProps.formsStore, this.props.formsStore) &&
      _.isEqual(prevProps.altrpPageState, this.props.altrpPageState) &&
      _.isEqual(prevProps.altrpMeta, this.props.altrpMeta) &&
      _.isEqual(prevProps.altrpresponses, this.props.altrpresponses) &&
      _.isEqual(prevProps.currentModel, this.props.currentModel)
    ) {
      return;
    }

    if (
      !_.isEqual(prevProps.formsStore, this.props.formsStore) &&
      `${formId}.${fieldName}` === altrpforms.changedField
    ) {
      return;
    }

    let value = "";

    try {
      content_calculation = content_calculation
        .replace(/}}/g, "')")
        .replace(/{{/g, "_.get(context, '");
      value = eval(content_calculation);
      if (value === this.state.value) {
        return;
      }
      this.setState(
        state => ({...state, value}),
        () => {
          this.dispatchFieldValueToStore(value);
        }
      );
    } catch (e) {
      console.error(
        "Evaluate error in Input " + e.message,
        this.props.element.getId()
      );
    }
  }

  /**
   * Изменение значения в виджете
   * @param e
   */
  onChange = async (e) => {

    this.setState(state => ({...state, notActive: true}))
    const {filesStorage} = this.state;
    try {
      if (_.isArray(filesStorage))
      {
        await Promise.all(filesStorage.map(async file=>(await file.deleteFileFromStorage())))
      }
    } catch (e) {
      console.error(e);
    }

    if (!e?.target?.files) {

      this.setState(state => ({
        ...state,
        filesStorage: [],
        imageUrl: null,
        croppedImageUrl: null,
        value: null
      }))

      return
    }

    const files = e.target.files;
    let value = new AltrpFile(files[0])

    this.setState(state=>({...state, filesStorage: [value]}))
    try {
      const storedFile = await value.storeFile()

      value = storedFile.getProperty('media.id')
    }catch (e) {
      console.error(e);
    }

    if (isEditor()) {
      this.setState(state => ({...state, value}))
    } else {
      this.dispatchFieldValueToStore(value, true)
    }
    this.setState(state => ({...state, key: Math.random()}))
    try {
      _.forEach(files, (file, idx) => {
        const reader = new FileReader
        reader.readAsDataURL(file)
        reader.onload = () => {
          this.setState(state => ({
              ...state,
              imageUrl: reader.result,
            })
          )
        }
      })
    } catch (e) {
      console.error(e);
    }
    this.setState(state => ({...state, notActive: false}))
  }

  /**
   * Передадим значение в хранилище формы
   * @param {*} value
   * @param {boolean} userInput true - имзенилось пользователем
   */
  dispatchFieldValueToStore = async (value, userInput = false) => {
    let formId = this.props.element.getFormId();
    let fieldName = this.props.element.getFieldId();

    if (fieldName.indexOf("{{") !== -1) {
      fieldName = replaceContentWithData(fieldName);
    }
    if (_.isObject(this.props.appStore) && fieldName && formId) {
      this.props.appStore.dispatch(
        changeFormFieldValue(fieldName, value, formId, userInput)
      );

      if (userInput) {
        const change_actions = this.props.element.getSettings("change_actions");

        if (change_actions && !isEditor()) {
          const actionsManager = (
            await import(
              /* webpackChunkName: 'ActionsManager' */
              "../../../../../front-app/src/js/classes/modules/ActionsManager.js"
              )
          ).default;
          await actionsManager.callAllWidgetActions(
            this.props.element.getIdForAction(),
            "change",
            change_actions,
            this.props.element
          );
        }
      }
    }
  }

  /**
   * Clear image
   */
  clear() {
    this.onChange(null);
    this.dispatchFieldValueToStore(null, true);
  }

  /**
   * Clear image and open choose file window for choose other image
   */
  selectOther = async () => {
    const {filesStorage} = this.state;
    try {
      await filesStorage[0].deleteFileFromStorage()
    } catch (e) {
      console.error(e);
    }
    
    this.selectOtherInput.current.click();
  }

  /**
   * Upload choosen image
   */
  upload = async (crop) => {
    const img = await getCroppedImg(this.imageToCrop.current, crop, 'img.jpg')

    let value = new AltrpFile(img)
    
    try {
      const storedFile = await value.storeFile()

      value = storedFile.getProperty('media.id')
    }catch (e) {
      console.error(e);
    }

    if (isEditor()) {
      this.setState(state => ({...state, value}))
    } else {
      this.dispatchFieldValueToStore(value, true)
    }

    this.setState(state => ({...state, key: Math.random()}))

    try {
      const reader = new FileReader()
      reader.readAsDataURL(img)
      reader.onload = () => {
        this.setState(state => ({
            ...state,
            croppedImageUrl: reader.result,
          })
        )
      }
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * Взовращает имя для атрибута name
   * @return {string}
   */
  getName() {
    return `${this.props.element.getFormId()}[${this.props.element.getFieldId()}]`;
  }

  render() {
    const {element} = this.props
    const text = element.getResponsiveSetting('text')
    const required = element.getResponsiveSetting('reequired')

    const renderComponent = <img src={this.state.imageUrl} ref={this.imageToCrop} className="ReactCrop__image" />

    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        {!this.state.imageUrl 
          ?
          <div className="image-to-crop-container">
            {!isEditor() && <input type="file" accept="image/*" className="hidden" id={this.getName()} onChange={this.onChange} required={required} />}
            <label htmlFor={this.getName()}>
              <div className="crop-image-text">{text}</div>
              <div className="crop-image-background" />
            </label>
          </div>
          :
          <div className="image-crop-container">
            <input type="file" accept="image/*" className="hidden" onChange={this.onChange} ref={this.selectOtherInput} />
            <ImageCrop
              crop={this.state.crop}
              onChange={newCrop => this.setState(state => ({...state, crop: newCrop}))}
              renderComponent={renderComponent}
            />
          </div>
        }
      </div>
    );

  }

}

export default InputCropImageWidget;
