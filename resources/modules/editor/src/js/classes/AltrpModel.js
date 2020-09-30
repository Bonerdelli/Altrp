/**
 * Имеет интерфейс для доступы к свойствам data (любой вложенности)
 * @class AltrpModel
 */
import {cloneDeep, get, set, has, unset} from "lodash";

class AltrpModel {
  constructor(data = {}) {
    this.data = cloneDeep(data);
  }

  /**
   * Возваращает объект данных
   * @params {boolean} clone - клонировать или ссылку на данные
   * @return {*}
   */
  getData(clone = true) {
    if(clone){
      return _.cloneDeep(this.data);
    }
    return this.data;
  }

  /**
   * Возврашает значение свойства name
   * @params {string} name
   * @params {*} defaultValue
   * @return {*}
   */
  getProperty(name, defaultValue = '') {
    return get(this.data, name, defaultValue);
  }
  /**
   * Возврашает значение свойства name
   * @params {string} name
   * @params {*} defaultValue
   * @return {*}
   */
  hasProperty(name, defaultValue = '') {
    return has(this.data, name);
  }
  /**
   * Возврашает значение свойства name
   * @params {string} name
   * @params {*} defaultValue
   * @return {*}
   */
  setProperty(name, value = '') {
    return set(this.data, name, value);
  }
  /**
   * Возврашает значение свойства name
   * @params {string} name
   * @params {*} defaultValue
   * @return {*}
   */
  unsetProperty(name, value = '') {
    return unset(this.data, name);
  }
}

export default AltrpModel