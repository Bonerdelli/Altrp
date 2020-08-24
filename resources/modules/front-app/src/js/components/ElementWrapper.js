import React, {Component} from "react";
import { withRouter } from "react-router-dom";

class ElementWrapper extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { 
      hide_on_wide_screen,
      hide_on_desktop,
      hide_on_laptop,
      hide_on_tablet,
      hide_on_big_phone,
      hide_on_small_phone 
    } = this.props.element.settings;

    let classes = `altrp-element altrp-element${this.props.element.getId()} altrp-element_${this.props.element.getType()}`;
    classes += this.props.element.getPrefixClasses() + " ";
    if(this.props.element.getType() === 'widget'){
      classes += ` altrp-widget_${this.props.element.getName()}`;
    }
    if (hide_on_wide_screen) {
      classes += ' hide_on_wide_screen';
    }
    if (hide_on_desktop) {
      classes += ' hide_on_desktop';
    }
    if (hide_on_laptop) {
      classes += ' hide_on_laptop';
    }
    if (hide_on_tablet) {
      classes += ' hide_on_tablet';
    }
    if (hide_on_big_phone) {
      classes += ' hide_on_big_phone';
    }
    if (hide_on_small_phone) {
      classes += ' hide_on_small_phone';
    }
    
    return <div className={classes}>
      {
        React.createElement(this.props.component, {
          element: this.props.element,
          children: this.props.element.getChildren(),
          match: this.props.match,
        })
      }
    </div>
  }
}

export default withRouter(ElementWrapper);
