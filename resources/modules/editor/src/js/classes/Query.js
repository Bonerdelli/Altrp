import Resource from "./Resource";
import modelManager from "../../../../editor/src/js/classes/modules/ModelsManager";
// import

class Query {

  constructor(data, component){
    this.component = component;
    this.modelName = data.modelName || '';
    this.dataSource = data.dataSource;
    if(data.dataSource&& data.dataSource.type === 'model_query'){
      this.modelName = data.dataSource.value || '';
    }
    this.pageSize = data.pageSize || 10;
    this.paginationType = data.paginationType || 'pages';
    this.orderingField = data.orderingField || 'name';
    this.order = data.order || 'ASC';
  }
  /**
   *
   * @return {Resource}
   */
  getResource(){
    return new Resource({route: `/ajax/models/${this.modelName}`});
  }


  /**
   * Поулчить данные с модели, которая хранится в компоненте
   * @param {{}} modelData
   * @return {[]}
   */
  getFromModel(modelData){
    if(! modelData){
      return [];
    }
    if(_.isObject && _.isArray(modelData[this.dataSource.value])){
      return [...modelData[this.dataSource.value]];
    }
  }
  /**
   * Делает запрос с параметрами
   * @param params
   * @return {Promise}
   */
  async getQueried(params){
    if(this.dataSource && (this.dataSource.type === 'has_many_relation')){
      if(!this.modelUpdater){
        this.modelUpdater = modelManager.subscribeToModelUpdates(this.dataSource.model_name, this.component.getModelId(), this.component);
      } else {
        console.log(this.modelUpdater);
      }
    } else {
      return await this.getResource().getQueried(this.getParams(params))
    }
  }

  /**
   * Сливает параметры с параметрами по умолчанию
   * @param {object} params
   * @return {object}
   */
  getParams(params) {
    params = {..._.assign({pageSize:this.pageSize}, params)};
    params.page = params.page || 1;
    return params;
  }
}

export default Query