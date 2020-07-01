import React, {Component} from "react";

class InputWidget extends Component {

  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      settings: props.element.getSettings(),
      value: props.element.getSettings().content_default_value || '',
    };
    props.element.component = this;
    if(window.elementDecorator){
      window.elementDecorator(this);
    }
  }

  onChange(e){
    let value = e.target.value;
    this.setState(state=>({
      ...state,
      value
    }));
  }

  render(){
    let label = null;

    if(this.state.settings.content_label != null) {
      label = <div className="altrp-field-label-container"><label className="altrp-field-label">{this.state.settings.content_label}</label></div>
    } else {
      label = null
    }

    let required = null;
    if(this.state.settings.content_required) {
      required = <div className="altrp-field-label-container"><label className="altrp-field-required">*</label></div>
    } else {
      required = null
    }

    let autocomplete = "off";
    if(this.state.settings.content_autocomplete) {
      autocomplete = "on";
    } else {
      autocomplete = "off";
    }

    return <div className="altrp-field-container">
      <div className="altrp-field-container-label">
        {
          label
        }
        {
          required 
        }
      </div>
      <input type={this.state.settings.content_type}
             value={this.state.value}
             autoComplete={autocomplete}
             placeholder={this.state.settings.content_placeholder}
             className={"altrp-field " + this.state.settings.position_css_classes}
             onChange={this.onChange}
             id={this.state.settings.position_css_id}
      />
    </div>
  }
}

export default InputWidget