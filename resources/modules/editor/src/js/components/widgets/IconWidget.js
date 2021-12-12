const {
  renderAsset,
} = window.altrpHelpers;

class IconWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: props.element.getSettings(),
      pending: false
    };
    props.element.component = this;
    if (window.elementDecorator) {
      window.elementDecorator(this);
    }
    if(props.baseRender){
      this.render = props.baseRender(this);
    }
  }

  async _componentWillUnmount() {
    const actionsManager = (
      await import(/* webpackChunkName: 'ActionsManager' */
        "../../../../../front-app/src/js/classes/modules/ActionsManager.js"
      )
    ).default;
    actionsManager.unregisterWidgetActions(this.props.element.getId());
  }

  render() {
    console.log({title: this.state.settings.title_text});

    return (
      <div className='icon-widget-wrapper'>
        <span className="widget-icon">{renderAsset(this.state.settings.icon)}</span>
        <div className="content">
          <h3 className="title">{this.state.settings.title_text === undefined && 'Title'}</h3>
          <div className="description">{this.state.settings.description === undefined && 'Icon description'}</div>
        </div>
      </div>
    )
  }
}


export default IconWidget;