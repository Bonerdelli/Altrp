import {controllerMapStateToProps} from "../../decorators/controller";
import React, { Component } from "react";
import { connect } from "react-redux";
import controllerDecorate from "../../decorators/controller";
import { iconsManager } from "../../helpers";
import Controller from "../../classes/Controller";
import update from "immutability-helper";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

/**
 * @method _changeValue
 * @see {@link controller.js#_changeValue}
 * @member {object] props
 * @property {BaseElement} props.currentElement
 * @property {string} props.controlId
 */
class RepeaterController extends Component {
  constructor(props) {
    super(props);
    controllerDecorate(this);
    let items = props.default || [];
    items = this.getSettings(this.props.controlId) || items;
    items = items.map(item => {
      if (item.length === 0) {
        return {};
      }
      return item;
    });
    this.state = {
      items,
      show: true,
      activeItem: 0,
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.duplicateItem = this.duplicateItem.bind(this);
    this.moveItem = this.moveItem.bind(this);
    this.setActiveItem = this.setActiveItem.bind(this);
    this.changeValue = this.changeValue.bind(this);
  }

  /**
   * Получить итем по ИД
   * @param {int} id
   */
  getItem(id) {
    return this.state.items[Number(id)] || null;
  }
  /**
   * Значение по умолчанию для @see {../../decorators/controller.js}
   * @return {array}
   */
  getDefaultValue() {
    return [];
  }
  /**
   * Изменяем значение в итеме и передаем в текущий элемент
   */
  changeValue(itemIndex, controlId, value) {
    let newValue = [...this.state.items];
    newValue[itemIndex][controlId] = value;
    this._changeValue(newValue);
  }
  /**
   * Удаляет итем в повторителе
   */
  deleteItem(e) {
    let index = parseInt(e.currentTarget.dataset.itemindex);
    let items = [...this.state.items];
    items.splice(index, 1);
    this.setState(state => {
      return { ...state, items }
    }
    );
    this._changeValue(items);
  }
  /**
   * Копируем итем в повторителе
   */
  duplicateItem(e) {
    let index = parseInt(e.currentTarget.dataset.itemindex);
    let copyItem = this.state.items[index];
    
    let items = update(this.state.items, {
      $splice: [
        [index, 0, copyItem]
      ]
    });
    items = items.map((item, index) => {
      return {...item, id: index}
    });
    this.setState(state => {
      return { ...state, items }
    });
    console.log(items);
    this._changeValue(items);
  }
  /**
   * Перетаскиваем итем в повторителе
   */
  moveItem(dragIndex, hoverIndex) {
    const dragItem = this.state.items[dragIndex];
    let items = update(this.state.items, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, dragItem],
      ],
    });
    this.setState(state => {
      return { ...state, items }
    });
    this._changeValue(items);
  }
  /**
   * Задает активный итем в повторителе
   */
  setActiveItem(e) {
    if(e) {
      let activeItem = parseInt(e.currentTarget.dataset.itemindex);
      this.setState(state => {
        return { ...state, activeItem }
      });
    } else {
      this.setState(state => {
        return { ...state, activeItem: undefined }
      });
    }
  }

  /**
   * Добавляет новый пустой итем для повторителя
   */
  addItem() {
    let items = [...this.state.items];
    items.push({ id: this.state.items.length });
    this.setState(state => {
      return {
        ...state,
        activeItem: items.length - 1,
        items
      }
    });
    this._changeValue(items);
  }

  /**
   * При смене элемента, нужно заново взять значение репитера
   * @param {Object} prevProps
   */
  _componentDidUpdate(prevProps){
    /**
     *  если элемент другой обновим items
     */
    if(prevProps.currentElement.getId() !== this.props.currentElement.getId()){
      let items = prevProps.default || [];
      items = this.getSettings(this.props.controlId) || items;
      this.setState(state => ({...state, items}))
    }
  }

  render() {
    if (this.state.show === false) {
      return '';
    }
    return <div className='controller-container controller-container_repeater repeater'>
      <div className="control-header">
        <div className="controller-container__label">{this.props.label}</div>
      </div>

      <div className="repeater-fields">
        <DndProvider backend={HTML5Backend}>
          {
            this.state.items.map((item, idx) => {
              let itemClasses = ['repeater-item'];
              if (this.state.activeItem === idx) {
                itemClasses.push('repeater-item_open');
              }
              return <RepeaterItem 
                itemClasses={itemClasses}
                thisController={this}
                itemController={item} 
                idx={idx}   
                key={idx} 
              />
            })
          }
        </DndProvider>
      </div>

      <div className="d-flex justify-center repeater-bottom">
        <button className="altrp-btn altrp-btn_gray d-flex align-items-center" onClick={this.addItem}>
          {iconsManager().renderIcon('plus', {
            className: 'altrp-btn__icon',
          })}
            Add Item
          </button>
      </div>
    </div>
  }
}

const RepeaterItem = ({thisController, itemClasses, idx, itemController}) => {
  const {setActiveItem, duplicateItem, deleteItem, moveItem} = thisController;
  const propsController = thisController.props;
  const ref=React.useRef(null);

  const [, drop] = useDrop({
    accept: "item",
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.idx;
      const hoverIndex = idx;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveItem(dragIndex, hoverIndex);
      item.idx = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    item: { type: "item", idx },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <div className={itemClasses.join(' ')} ref={ref} style={{opacity}}>
      <div className="repeater-item-tools">
        <div className="repeater-item__caption"
          data-itemindex={idx}
          onClick={setActiveItem}
          onDoubleClick={() => setActiveItem()}
        >Item #{idx + 1}</div>
        <button className="repeater-item__icon"
          data-itemindex={idx}
          onClick={duplicateItem}>{iconsManager().renderIcon('duplicate')}</button>
        <button className="repeater-item__icon"
          data-itemindex={idx}
          onClick={deleteItem}>{iconsManager().renderIcon('times')}</button>
      </div>
      <div className="repeater-item-content">
        {
          propsController.fields.map(field => {
            let ControllerComponent = controllersManager.getController(field.type);
            let controller = new Controller({ ...field, repeater: thisController, itemIndex: idx });
            let value = itemController[field.controlId] || '';
            return <ControllerComponent {...field}
              repeater={thisController}
              itemindex={idx}
              key={field.controlId}
              default={value}
              controller={controller} />
          })
        }
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    currentElement: state.currentElement.currentElement,
    currentState: state.currentState,
    currentScreen: state.currentScreen
  };
}

export default connect(controllerMapStateToProps)(RepeaterController);
