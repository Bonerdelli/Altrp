import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addElement } from "../store/elements-storage/actions";
import AltrpTooltip from "../../../../editor/src/js/components/altrp-tooltip/AltrpTooltip";
import { changeCurrentPageProperty } from "../store/current-page/actions";
import { ElementWrapperDivComponent } from "../../../../editor/src/js/components/widgets/styled-components/ElementWrapperComponent";
import ImageComponent from "../../../../editor/src/js/components/widgets/styled-components/ImageComponent";
import NavComponent from "../../../../editor/src/js/components/widgets/styled-components/NavComponent";
import TabsComponent from "../../../../editor/src/js/components/widgets/styled-components/TabsComponent";
import MenuComponent from "../../../../editor/src/js/components/widgets/styled-components/MenuComponent";
import BreadcrumbsComponent from "../../../../editor/src/js/components/widgets/styled-components/BreadcrumbsComponent";
import MapConstructorComponent
  from "../../../../editor/src/js/components/widgets/styled-components/MapConstructorComponent";
import MapComponent from "../../../../editor/src/js/components/widgets/styled-components/MapComponent";
import DiagramComponent from "../../../../editor/src/js/components/widgets/styled-components/DiagramComponent";
import DEFAULT_REACT_ELEMENTS from "../constants/DEFAULT_REACT_ELEMENTS";
const { altrpCompare, altrpRandomId, conditionsChecker, isEditor, replaceContentWithData, setTitle } = window.altrpHelpers;
import DashboardComponent from "../../../../editor/src/js/components/widgets/styled-components/DashboardComponent";

class ElementWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      elementDisplay: !this.props.element.getSettings("default_hidden"),
    };
    this.reactElement = this.props.element.getSettings("react_element");
    this.elementId = this.props.element.getId();
    this.settings = this.props.element.getSettings();
    props.element.wrapper = this;
    this.elementWrapperRef = React.createRef();
    this.elementRef = React.createRef();
    appStore.dispatch(addElement(this));
  }

  /**
   * Отлавливаем ошибки
   * @param error
   * @param errorInfo
   */
  componentDidCatch(error, errorInfo) {
    this.setState(state => ({
      ...state,
      error: error,
      errorInfo: errorInfo
    }));
  }

  /**
   * Иногда надо обновить элемент (FrontElement)
   */
  componentDidMount() {
    ! isEditor() && window?.frontApp?.onWidgetMount();
    if (_.isFunction(this.props.element.update)) {
      this.props.element.update();
      this.props.element.updateFonts();
    }
    this.checkElementDisplay();
  }
  /**
   * Подписываемся на обновление store редакса
   */
  updateStore = () => {
    if (this.state.currentModel !== appStore.getState().currentModel) {
      this.setState(state => ({
        ...state,
        currentModel: appStore.getState().currentModel
      }));
    }
    /**
     * Обновляем пользователя
     */
    if (this.state.currentUser !== appStore.getState().currentUser) {
      this.setState(state => ({
        ...state,
        currentModel: appStore.getState().currentUser
      }));
    }

    /**
     * Обновляем currentDataStorage
     */
    if (
      this.state.currentDataStorage !== appStore.getState().currentDataStorage
    ) {
      this.setState(state => ({
        ...state,
        currentDataStorage: appStore.getState().currentDataStorage
      }));
    }
  };

  /**
   * Вернет HTMLElement, в котором записаны css стили текущего компонента
   * @return {null | HTMLElement}
   */
  getStylesHTMLElement() {
    if (!_.get(window, "stylesModule.stylesContainer.current")) {
      return null;
    }

    return (
      window.stylesModule.stylesContainer.current.getElementsByClassName(
        `altrp-styles${this.props.element.getId()}`
      )[0] || null
    );
  }

  /**
   * Нужно ли обновить отображение обертки элементов
   * @param {{}} prevProps
   * @param {{}} prevState
   */
  componentDidUpdate(prevProps, prevState) {
    this.checkElementDisplay();
    if (appStore.getState().currentModel.getProperty('altrpModelUpdated') &&
      appStore.getState().currentDataStorage.getProperty('currentDataStorageLoaded') &&
      !isEditor() &&
      this.props.element.getName() === 'section') {
      let title = appStore.getState().currentTitle;
      title = replaceContentWithData(title);
      if (appStore.getState().altrpPage.getProperty('title') !== title) {
        appStore.dispatch(changeCurrentPageProperty('title', title));
      }
      setTitle(title);
    }
  }

  /**
   * Обновить элемент изменив this.state.updateToken
   */
  updateElement() {
    this.setState(state => ({ ...state, updateToken: altrpRandomId() }))
  }

  /**
   * Проверка видимости элемента
   * @param {{}} prevProps
   * @param {{}} prevState
   */
  checkElementDisplay(prevProps, prevState) {
    /**
     * @member {FrontElement} element
     */
    const { element } = this.props;
    if (!element.getSettings("conditional_other")) {
      return;
    }
    let conditions = element.getSettings("conditions", []);
    conditions = conditions.map(c => {
      const {
        conditional_model_field: modelField,
        conditional_other_operator: operator,
        conditional_other_condition_value: value
      } = c;
      return {
        modelField,
        operator,
        value
      };
    });
    let elementDisplay = conditionsChecker(
      conditions,
      element.getSettings("conditional_other_display") === "AND",
      this.props.element.getCurrentModel(),
      true
    );

    if (this.state.elementDisplay === elementDisplay) {
      return;
    }

    this.setState(state => ({
      ...state,
      elementDisplay
    }));
  }

  /**
   * Переключает видимость элемента
   */
  toggleElementDisplay() {
    this.setState(state => ({
      ...state,
      elementDisplay: !state.elementDisplay
    }));
  }
  /**
   * Метод для проверки видимости поля формы
   * @return {boolean}
   */
  inputIsDisplay() {
    const { formsStore } = this.state;
    const formId = this.props.element.getSettings("form_id", "");
    const logic = this.props.element.getSettings(
      "form_condition_display_on",
      "AND"
    );
    const formConditions = this.props.element.getSettings(
      "form_conditions",
      []
    );
    let display = true;
    formConditions.forEach(c => {
      if (logic === "AND") {
        display *= altrpCompare(
          _.get(formsStore, `${formId}.${c.field_id}`),
          c.value,
          c.operator
        );
      } else {
        display += altrpCompare(
          _.get(formsStore, `${formId}.${c.field_id}`),
          c.value,
          c.operator
        );
      }
    });
    return display;
  }

  render() {
    const {
      hide_on_wide_screen,
      hide_on_desktop,
      hide_on_laptop,
      hide_on_tablet,
      hide_on_big_phone,
      hide_on_small_phone,
      hide_on_trigger,
      isFixed,
      tooltip_position
    } = this.props.element.settings;
    let {
      tooltip_text,
    } = this.props.element.settings
    let classes = `altrp-element altrp-element${this.props.element.getId()} altrp-element_${this.props.element.getType()}`;
    classes += this.props.element.getPrefixClasses() + " ";
    if (this.props.element.getType() === "widget") {
      classes += ` altrp-widget_${this.props.element.getName()}`;
    }
    if (hide_on_wide_screen) {
      classes += " hide_on_wide_screen";
    }
    if (hide_on_desktop) {
      classes += " hide_on_desktop";
    }
    if (hide_on_laptop) {
      classes += " hide_on_laptop";
    }
    if (hide_on_tablet) {
      classes += " hide_on_tablet";
    }
    if (hide_on_big_phone) {
      classes += " hide_on_big_phone";
    }
    if (hide_on_small_phone) {
      classes += " hide_on_small_phone";
    }
    if (isFixed) {
      classes += " fixed-section";
    }
    if (this.state.errorInfo) {
      return (
        <div className="altrp-error" data-eltype={this.props.element.getType()}>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    const styles = {};

    if (this.props.element.getResponsiveSetting('layout_column_width')) {
      if (Number(this.props.element.getResponsiveSetting('layout_column_width'))) {
        styles.width = this.props.element.getResponsiveSetting('layout_column_width') + '%';
      } else {
        styles.width = this.props.element.getResponsiveSetting('layout_column_width');
      }
    }
    if (!this.state.elementDisplay) {
      styles.display = "none";
    }
    let CSSId = this.props.element.getSettings("advanced_element_id", "");
    CSSId = replaceContentWithData(CSSId, this.props.element.getCurrentModel().getData());
    if (this.CSSId !== CSSId) {
      this.CSSId = CSSId;
    }
    let ContentComponent = frontElementsManager.getComponentClass(this.props.element.getName());
    const content = React.createElement(ContentComponent, {
      ref: this.elementRef,
      rootElement: this.props.rootElement,
      ElementWrapper: this.props.ElementWrapper,
      element: this.props.element,
      children: this.props.element.getChildren(),
      match: this.props.match,
      currentModel: this.props.currentModel,
      currentUser: this.props.currentUser,
      currentDataStorage: this.props.currentDataStorage,
      altrpresponses: this.props.altrpresponses,
      formsStore: this.props.formsStore,
      elementDisplay: this.state.elementDisplay,
      altrpPageState: this.props.altrpPageState,
      altrpMeta: this.props.altrpMeta,
      updateToken: this.state.updateToken,
      currentScreen: this.props.currentScreen,
      baseRender: this.props.baseRender,
      history: this.props.history,
      appStore
    });
    if (this.props.element.getTemplateType() === 'email') {
      if (!this.state.elementDisplay) {
        return null;
      }
      return <>
        {content}
      </>
    }

    let WrapperComponent = ElementWrapperDivComponent;
    switch (this.props.element.getName()) {
      case "image":
        WrapperComponent = ImageComponent;
        break;
      case "menu":
        WrapperComponent = MenuComponent;
        break;
      case "breadcrumbs":
        WrapperComponent = BreadcrumbsComponent;
        break;
      case "map_builder":
        WrapperComponent = MapConstructorComponent;
        break;
      case "map":
        WrapperComponent = MapComponent;
        break;
      case "diagram":
        WrapperComponent = DiagramComponent;
        break;
      case "dashboards":
        WrapperComponent = DashboardComponent;
        break;
      case "nav":
        WrapperComponent = NavComponent;
        break;
      case "tabs":
        WrapperComponent = TabsComponent;
        break;
    }

    tooltip_text = replaceContentWithData(tooltip_text, this.props.element.getCurrentModel().getData())
    const wrapperProps = {
      className: classes,
      ref: this.elementWrapperRef,
      elementId: this.elementId,
      settings: this.settings,
      style: styles,
      id: this.CSSId
    };

    if(this.reactElement || DEFAULT_REACT_ELEMENTS.indexOf(this.props.element.getName()) !== -1){
      wrapperProps['data-react-element'] = this.props.element.getId();
    }
    return this.props.hideTriggers.includes(hide_on_trigger) ? null : (
      <WrapperComponent
        {...wrapperProps}
        element={this.props.element.getId()}
      >
        {content}
        {tooltip_text && <AltrpTooltip position={tooltip_position}>{tooltip_text}</AltrpTooltip>}
      </WrapperComponent>
    );
  }
}

function mapStateToProps(state) {
  return {
    hideTriggers: state.hideTriggers,
    altrpresponses: state.altrpresponses,
    formsStore: state.formsStore,
    currentDataStorage: state.currentDataStorage,
    currentModel: state.currentModel,
    currentUser: state.currentUser,
    altrpMeta: state.altrpMeta,
    altrpPageState: state.altrpPageState,
    currentScreen: state.currentScreen,
  };
}

export default connect(mapStateToProps, null, null, {
  forwardRef: true
})(withRouter(ElementWrapper));
