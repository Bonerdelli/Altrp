import React, { Component, useState } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import controllerDecorate from "../../decorators/controller";
import Resource from "../../classes/Resource";
// в rootElement при создании массива select, value никогда не должно повторятся
class Select2Controller extends Component {
  constructor(props) {
    super(props);
    controllerDecorate(this);
    this.change = this.change.bind(this);
    this.loadOptions = this.loadOptions.bind(this);
    let value = this.getSettings(this.props.controlId);
    if (value === null && this.props.default) {
      value = this.props.default;
    }
    value = value || '';
    this.state = {
      value,
      options: this.props.options || [],
      show: true
    };
    // if (this.props.options_resource) {
    //   this.resource = new Resource({ route: this.props.options_resource });
    // }
  };

  getDefaultValue() {
    return '';
  }

  /**
   * Загрузим опцию, если есть значение
   * @return {Promise<string>}
   */
  async _componentDidMount(){
    if(this.state.value && this.getRoute()){
      let resource = new Resource({route: this.getRoute()});
      let options = await resource.search(this.props.currentElement.getSettings(this.props.controlId));
      if(this.props.nullable){
        options = _.union([{label:'None',value:'',}], options);
      }

      this.setState(state => ({
        ...state,
        options
      }));
    } else if(this.props.nullable){
      this.setState(state => ({
        ...state,
        options: [{label:'None',value:'',}],
      }));
    }
    if(this.props.prefetch_options){
      let resource = new Resource({route: this.getRoute()});
      let options = await resource.getAll();
      this.setState(state => ({
        ...state,
        options
      }));
    }
  }
  /**
   * Получить роут для запросов опций
   * если this.props.options_resource содержит строку с шаблоном,
   * то нужно вставить необходимое значение свзятое из текущего элемента
   */
  getRoute(){
    let route = this.props.options_resource;
    if((route === undefined) || (! route.match(/{{([^}]*)}}/))){
      return route;
    }
    let settingName = route.match(/{{([^}]*)}}/)[1];
    let match = route.match(/{{([^}]*)}}/)[0];
    let value = this.props.currentElement.getSettings(settingName);
    return route.replace(match, value)
  }
  /**
   * Обновляет опции при помощи ajax
   * @param searchString
   * @param callback
   * @return {Promise<*>}
   */
  async loadOptions(searchString, callback) {
    if (!searchString) {
      return callback([]);
    }
    let resource = new Resource({route: this.getRoute()});
    let options = await resource.search(searchString);
    if(this.props.nullable){
      options = _.union([{label:'None',value:'',}], options);
    }
    this.setState(state => ({
      ...state,
      options
    }));
    return callback(options);
  }

  change(value, action) {
    if (action.action === 'select-option') {
      if(this.props.isMulti){
        let _v = value.map(v=>{
          return v.value;
        });
        console.log(value);
        console.log(_v);
        this._changeValue(
          _v
        );
      } else {
        this._changeValue(
          value.value
        );
      }
    }
    if(action.action === 'clear'){
      if(this.props.isMulti){
        this._changeValue(
            value
        );
      }
    }
    if(action.action === 'remove-value') {
      if(this.props.isMulti){
        value = this.state.value.filter(v=>{
          return v !== action.removedValue.value;
        });

        this._changeValue(
            value
        );
      }
    }
  }


  render() {
    if (this.state.show === false) {
      return '';
    }

    let value = this.getSettings(this.props.controlId) || this.getDefaultValue();

    const customStyles = {
      option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? "#FFF" : "#8E94AA",
        backgroundColor: state.isSelected ? "#5897fb" : "#FFF",
        fontSize: 13,
        padding: 5,
        height: 20
      }),

      menu: () => ({
        margin: 0,
        padding: 0,
        width: "100%",
        height: '150px',
        overflow: 'auto',
        borderRadius: "0px 0px 3px 3px",
        borderWidth: "0px 1px 1px 1px",
        borderStyle: "solid",
        borderColor: "#E5E6EA",
        position: 'absolute',
        zIndex: '1000'
      }),

      menuList: () => ({
        margin: 0,
        padding: 0,
      }),

      control: (state) => ({
        display: "flex",
        // height: 28,
        borderRadius: 3,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#E5E6EA",
        color: "#8E94AA",
        fontSize: 13,
      }),

      placeholder: () => ({
        color: "#8E94AA",
        fontSize: 13,
        opacity: 1
      }),

      indicatorSeparator: () => ({
        display: "none !important"
      }),

      singleValue: () => ({
        color: "#8E94AA",
      })
    };

    // let value = {};
    if(this.props.isMulti){
      if(_.isArray(value)){
        let _value = _.cloneDeep(value);
        value = [];
        _value.forEach(v=>{
          this.state.options.forEach(option => {
            if (option.value === v) {
              value.push({ ...option });
            }
            if(_.isArray(option.options)){
              option.options.forEach(option => {
                if (option.value === v) {
                  value.push({ ...option });
                }
              })
            }
          });
        });
      }
    } else {
      this.state.options.forEach(option => {
        if (option.value === value) {
          value = { ...option };
        }
        if(_.isArray(option.options)){
          option.options.forEach(option => {
            if (option.value === value) {
              value = { ...option };
            }
          })
        }
      });
    }
    let selectProps = {
      onChange: this.change,
      onInputChange: this.change,
      options: this.state.options,
      styles: customStyles,
      placeholder: this.props.placeholder,
      loadOptions: this.loadOptions,
      noOptionsMessage: () => "no found",
      value,
      isMulti: this.props.isMulti,
      closeMenuOnSelect: ! this.props.isMulti,
      isClearable: this.props.isClearable,
      // menuIsOpen: true,
    };

    let SelectComponent = Select;
    if (this.props.options_resource && ! this.props.prefetch_options) {
      SelectComponent = AsyncSelect;
      selectProps.loadOptions = this.loadOptions;
    }
    return <div className="controller-container controller-container_select2">
      <div className="control-select2-header">
        <div className="control-select2__label">{this.props.label}</div>
      </div>
      <div className="control-container_select2-wrapper">
        <SelectComponent {...selectProps} />
      </div>
    </div>

  }
}

function mapStateToProps(state) {
  return {
    currentElement: state.currentElement.currentElement,
    currentState: state.currentState,
    currentScreen: state.currentScreen,
    controllerValue: state.controllerValue,
  };
}
export default connect(mapStateToProps)(Select2Controller);
