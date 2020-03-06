import React, {Component} from "react";
import decorate from "../decorators/element-component";
import ElementWrapper from "./ElementWrapper";

class SectionComponent extends Component {
  constructor(props){
    super(props);
    if(!props.children.length){
      throw `Section Component Must Contain at Least One Column as Child`;
    }
    this.state={
      children: props.children,
    };
    props.element.component = this;
    decorate(this);
  }
  render(){

    return <div className="altrp-section">
      {this.state.children.map(
          column => <ElementWrapper key={column.getId()} component={column.componentClass} element={column}/>
      )}
    </div>
  }
}

export default SectionComponent