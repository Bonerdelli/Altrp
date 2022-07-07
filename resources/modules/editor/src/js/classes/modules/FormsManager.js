import AltrpForm from "../AltrpForm";


const {Resource} = window.altrpHelpers
/**
 * Класс менеджер форм для фронтенда/редактора
 */
class FormsManager {
  constructor(){
    /**
     *
     * @type {AltrpForm[]}
     */
    this.forms = [];
    /**
     *
     * @type {string[]}
     */
    this.formIds = [];
    this.fieldsStorage = {};
  }

  /**
   * Регистрирует новую форму.
   * @param {string} formId
   * @param {string} modelName
   * @param {string} method
   * @param {{}} options
   * @return {AltrpForm}
   */
  registerForm(formId, modelName, method, options = null){
    let form = this.getForm(formId);
    if(! form){
      form = new AltrpForm(formId, modelName, method, options || {});
      this.forms.push(form);
    } else if (options && options.dynamicURL && options.customRoute !== form.options.customRoute){
      // Re-create form in case when URL changes
      form = new AltrpForm(formId, modelName, method, options);
      const index = this.forms.findIndex(item => item.formId === formId);
      this.forms[index] = form;
    }
    if(this.fieldsStorage[formId] && this.fieldsStorage[formId].length){
      form.setFields(this.fieldsStorage[formId]);
    }

    if (options.customRoute && form.resource.route !== options.customRoute) {
      form.resource = new Resource({ route: options.customRoute })
    }

    return form;
  }

  /**
   * Удаляем форму по ID
   */
  deleteFormById(formId){
    this.forms = this.forms.filter(form => form.formId !== formId);
  }
  /**
   * Добавляет поле к форме
   * сохраняет поле в fieldsStorage если форма еще не добавлена
   * @param {string} formId
   * @param {FrontElement} field
   * @return {boolean}
   */
  addField(formId, field){
    let form = this.getForm(formId);
    if(! form){
      this.fieldsStorage[formId] = this.fieldsStorage[formId] || [];
      this.fieldsStorage[formId].push(field);
      return true;
    }
    return form.addField(field)
  }

  /**
   * После смену страницы нужно почистить хранилище полей
   */
  clearFieldsStorage(){
    this.fieldsStorage = {};
  }
  /**
   * Отправляет форму
   * @param {string} formId
   * @param {int | null} modelID
   * @return {boolean}
   */
  submitForm(formId, modelID){
    if(! this.getForm(formId)){
      console.error('Форма не найдена');
      return false;
    }
    return this.getForm(formId).submit(modelID);
  }
  /**
   * Получить форму по id
   * @param {string} formId
   * @return {AltrpForm | null}
   */
  getForm(formId){
    let _form = null;
    this.forms.forEach(form=>{
      /**
       * @member {AltrpForm}form
       */
      if(form.formId === formId){
        _form = form;
      }
    });
    return _form;
  }

  /**
   * Очищает все формы
   */
  clearFormsStore(){
    this.forms = [];
  }
  removeField(frontElement) {
    for(let storageKey in this.fieldsStorage){
      if(this.fieldsStorage.hasOwnProperty(storageKey) && _.isArray(this.fieldsStorage[storageKey])){
        this.fieldsStorage[storageKey] = this.fieldsStorage[storageKey].filter(field => field !== frontElement)
      }
    }
    this.forms?.forEach(form=>{
      form.fields = form.fields.filter(field=>field !==frontElement)
    })
  }
}
window.formsManager = new FormsManager();

export default window.formsManager;
