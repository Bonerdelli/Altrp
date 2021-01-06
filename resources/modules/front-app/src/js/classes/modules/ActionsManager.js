/**
 * @class ActionsManager
 * Класс хранит действия для виджетов и вызывает их последовательно в порядке полученного списка
 * @member {} data - где хранятся действия виджета сгруппированные по типу события {
 *  widgetId:{
 *    eventName: []
 *  }
 * }
 */
import AltrpAction from "../AltrpAction";
import AltrpModel from "../../../../../editor/src/js/classes/AltrpModel";

class ActionsManager extends AltrpModel{
  /**
   * Регистрирует действия для определенного виджета
   * @param {string} widgetId
   * @param {array} actions
   * @param {string} eventName
   * @param {FrontElement | null} element
   * @param {{} | null} context
   */
  registerWidgetActions(widgetId, actions = [], eventName = 'click', element = null, context = null ){
    if((! actions) || ! actions.length){
      return null;
    }
    actions = actions.filter(a=>a.type).map(a=>{
      return new AltrpAction(a, widgetId, element);
    });
    return this.setProperty(`actions.${widgetId}.${eventName}`, actions);
  }

  /**
   * удаляет все действия виджета
   * @param {string} widgetId
   */
  unregisterWidgetActions(widgetId){
    return this.unsetProperty(`actions.${widgetId}`)
  }

  /**
   * Вызывает все зарегистрированные действия определенного типа для виджета
   * @return {Promise<void>}
   */
  async callAllWidgetActions(widgetId, eventName = 'click'){
    const actions = this.getProperty(`actions.${widgetId}.${eventName}`, []);
    const errors = [];
    for (let action of actions){
      try {
        let res = await action.doAction();
      } catch(error){
        errors.push(error);
        console.error(error);
      }
    }
    if (errors.length){
      return {
        success: false,
        errors
      }
    }
    return {success: true};
  }
}
window.actionsManager = new ActionsManager;
export default window.actionsManager