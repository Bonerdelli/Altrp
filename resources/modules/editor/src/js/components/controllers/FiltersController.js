import React, {Component} from "react";
import {connect} from "react-redux";
import { SketchPicker } from "react-color"
import DynamicIcon from '../../../svgs/dynamic.svg'
import ContentIcon from '../../../svgs/content.svg'
import HistoryIcon from '../../../svgs/history.svg'
import controllerDecorate from "../../decorators/controller";

class FiltersController extends Component {
  constructor(props){
    super(props);
    this.openShadow = this.openShadow.bind(this);
    this.inputBlurUpdate = this.inputBlurUpdate.bind(this);
    this.blurChange = this.blurChange.bind(this);
    this.inputBrightnessUpdate = this.inputBrightnessUpdate.bind(this);
    this.brightnessChange = this.brightnessChange.bind(this);
    this.contrastChange = this.contrastChange.bind(this);
    this.inputContrastUpdate = this.inputContrastUpdate.bind(this)
    this.inputSaturationUpdate = this.inputSaturationUpdate.bind(this)
		this.saturationChange = this.saturationChange.bind(this)
		this.inputHueUpdate = this.inputHueUpdate.bind(this)
		this.hueChange = this.hueChange.bind(this)
    let value = this.props.currentElement.getSettings(this.props.controlId);
    if(value === null && this.props.default){
      value = this.props.default ;
    }
    value = value || false;
    this.state = {
      value,
    };
    controllerDecorate(this);
  }

  getDefaultValue(){
    return {
    };
	}
	
  openShadow(){
    let shadowContainer = document.getElementById("shadowContainer")
    let shadowContentIcon = document.getElementById("shadowContentIcon");

    shadowContainer.classList.toggle("control-shadow-active");
    
    if(shadowContentIcon.getAttribute("fill") == "#8E94AA") {
      shadowContentIcon.removeAttribute("fill");
      shadowContentIcon.setAttribute("fill", "#5bc0de");
    } else {
      shadowContentIcon.removeAttribute("fill");
      shadowContentIcon.setAttribute("fill", "#8E94AA");
    }
	}
	
  inputBlurUpdate (e) {
    this._changeValue({
      ...this.state.value,
      blur:e.target.value
    });
  }

  blurChange(e) {
    this._changeValue({
      ...this.state.value,
      blur:e.target.value
    });
    // console.log(this.state.value)
	};
	
  inputBrightnessUpdate (e) {
    this._changeValue({
      ...this.state.value,
      brightness:e.target.value
    });
  }

  brightnessChange(e) {
    this._changeValue({
      ...this.state.value,
      brightness:e.target.value
    });
    // console.log(this.state.value)
	};
	
  inputContrastUpdate(e) {
    this._changeValue({
      ...this.state.value,
      contrast:e.target.value
    });
  }

  contrastChange(e) {
    this._changeValue({
      ...this.state.value,
      contrast:e.target.value
    });
    // console.log(this.state.value)
	};
	
  inputSaturationUpdate(e) {
    this._changeValue({
      ...this.state.value,
      saturation:e.target.value
    });
  }

  saturationChange(e) {
    this._changeValue({
      ...this.state.value,
      saturation:e.target.value
    });
	}
	
	inputHueUpdate(e) {
    this._changeValue({
      ...this.state.value,
      hue:e.target.value
    });
  }

  hueChange(e) {
    this._changeValue({
      ...this.state.value,
      hue:e.target.value
    });
  }

  render(){
    let colorPickedStyle = {
      backgroundColor: this.state.value.color
    };

    return <div className="controller-container controller-container_shadow">
      <div className="controller-container__label control-shadow-label">
        {this.props.label}
      </div>
      <div className="control-group control-group-shadow">
          <div className="control-shadow-toggle control-shadow-toggle-active" onClick={this.openShadow} fill="#8E94AA">
              <ContentIcon id="shadowContentIcon" className="control-shadow-svg-content" fill="#8E94AA" width="16" height="16"/>
          </div>
          <div id="shadowContainer" className="control-shadow-wrapper control-shadow-wrapper-none">
          {/* начало slider blur */}
          <div className="control-slider-header control-shadow-blur-header">
            <div className="control-slider-label">
              blur
            </div>
          </div>
          <div className="control-slider-input-wrapper control-shadow-blur">
            <input type="range"
              min={this.state.blur || 0}
							max={this.state.blur || 10}
							step="0.1"
              className="control-slider" value={this.state.value.blur || 0} onChange={this.inputBlurUpdate} onInput={this.blurChange}/>
            <div className="control-slider-input-box">
            <input className="control-slider-input" type="number"
                   min={this.state.blur || 0}
									 max={this.state.blur || 10}
									 step="0.1"
                   value={this.state.value.blur || 0} onChange={this.inputBlurUpdate} onInput={this.blurChange}/>
            </div>
          </div>
          {/* конец slider blur */}
          {/* начало slider brightness */}
          <div className="control-slider-header">
            <div className="control-slider-label">
							brightness
            </div>
          </div>
          <div className="control-slider-input-wrapper">
            <input type="range"
              min={this.state.brightness || 0}
              max={this.state.brightness || 200}
              className="control-slider" value={this.state.value.brightness || 100} onChange={this.inputBrightnessUpdate} name="brightness"/>
            <div className="control-slider-input-box">
            <input className="control-slider-input" type="number"
                   min={this.state.brightness || 0 }
                   max={this.state.brightness || 200}
                   value={this.state.value.brightness || 100} name="brightnessNumber" onChange={this.brightnessChange}/>
            </div>
          </div>
          {/* конец slider brightness */}
          {/* начало slider contrast */}
          <div className="control-slider-header">
            <div className="control-slider-label">
              contrast
            </div>
          </div>
          <div className="control-slider-input-wrapper">
            <input type="range"
              min={this.state.contrast || 0}
              max={this.state.contrast || 200}
              className="control-slider" value={this.state.value.contrast || 100} onChange={this.inputContrastUpdate} name="contrast"/>
            <div className="control-slider-input-box">
            <input className="control-slider-input" type="number"
                   min={this.state.contrast || 0}
                   max={this.state.contrast || 200}
                   value={this.state.value.contrast || 100} name="contrastNumber" onChange={this.contrastChange}/>
            </div>
          </div>
          {/* конец slider contrast */}
          {/* начало slider saturation */}
          <div className="control-slider-header">
            <div className="control-slider-label">
                saturation
            </div>
          </div>
          <div className="control-slider-input-wrapper">
            <input type="range"
              min={this.state.saturation || 0}
              max={this.state.saturation || 200}
              className="control-slider" value={this.state.value.saturation || 100} onChange={this.inputSaturationUpdate} name="saturation"/>
            <div className="control-slider-input-box">
            <input className="control-slider-input" type="number"
                   min={this.state.saturation || 0}
                   max={this.state.saturation || 200}
                   value={this.state.value.saturation || 100} name="saturationNumber" onChange={this.saturationChange}/>
            </div>
          </div>
          {/* конец slider vertical displacement */}
					{/* начало slider hue */}
          <div className="control-slider-header">
            <div className="control-slider-label">
							Hue
            </div>
          </div>
          <div className="control-slider-input-wrapper">
            <input type="range"
              min={this.state.hue || 0}
              max={this.state.hue || 360}
              className="control-slider" value={this.state.value.hue || 0} onChange={this.inputHueUpdate} name="hue"/>
            <div className="control-slider-input-box">
            <input className="control-slider-input" type="number"
                   min={this.state.hue || 0}
                   max={this.state.hue || 360}
                   value={this.state.value.hue || 0} name="hueNumber" onChange={this.hueChange}/>
            </div>
          </div>
          {/* конец slider hue */}
        </div>
      </div>
    </div>
  }
}

function mapStateToProps(state) {
  return{
    currentElement:state.currentElement.currentElement,
  };
}
export default connect(mapStateToProps)(FiltersController);
