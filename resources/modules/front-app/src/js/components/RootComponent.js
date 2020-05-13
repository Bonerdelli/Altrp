import React, {Component} from "react";
import ElementWrapper from "./ElementWrapper";
import {iconsManager} from "../helpers";

class RootComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      children: props.children,
      settings: props.element.getSettings()
    };
    props.element.component = this;
  }


  render(){
    let classes = `sections-wrapper ${this.props.element.getSelector()}`;
    return<div className={classes}>{
      this.state.settings.slider.size }<br/>{
      this.state.settings.slider.unit + ''
    }<br/>{
      (this.state.settings.color && (this.state.settings.color.assetType === 'icon')) ?
          iconsManager().renderIcon(this.state.settings.color.name) : ''
    }<br/>
      {this.state.children.map(
          section => <ElementWrapper key={section.getId()} component={section.componentClass} element={section}/>
      )}
    </div>
  }
  // render(){
  //   let classes = `sections-wrapper altrp-template-root${this.props.element.getId()}`;
  //   return<div className={classes}>{
  //     this.state.settings.number
  //   }
  //     {this.state.children.map(
  //         section => <ElementWrapper key={section.getId()} component={section.componentClass} element={section}/>
  //     )}
  //   </div>
  // }
}

export default RootComponent;