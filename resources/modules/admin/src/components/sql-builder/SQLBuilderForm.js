import React, { Component, Fragment } from "react";
import moment from "moment";
import Resource from "../../../../editor/src/js/classes/Resource";
import { titleToName } from "../../js/helpers";
import AggregateComponent from "./AggregateComponent";
import ConditionComponent from "./ConditionComponent";
import OrderByComponent from "./OrderByComponent";
import { cloneDeep } from "lodash";

const mockedModels = [
  { value: 1, label: "Model title 1" },
  { value: 2, label: "Model title 2" },
  { value: 3, label: "Model title 3" },
];
const mockedRelations = [
  { value: 1, label: "Relation title 1" },
  { value: 2, label: "Relation title 2" },
  { value: 3, label: "Relation title 3" },
];
const mockedColumns = [
  { value: 1, label: "Coolumn title 1" },
  { value: 2, label: "Coolumn title 2" },
  { value: 3, label: "Coolumn title 3" },
];

const conditionInitState = {
  conditionType: '',
  column: '',
  operator: '',
  value: '',
  or: false,
  not: false,
  value1: '',
  value2: '',
  values: '',
  type: '',
  first_column: '',
  second_column: '',
  date: new Date(),
  id: 0
};

/** @function getDateFormat
  * Функция схожа с объявленой в файле ConditionComponent.js, с тем различием
  что moment запрашивает дату в формате DD - заглавные буквы
  * @param {string} type - тип поля where_date
  * @return {string | undefined} формат строки, получаемой из объекта Date
 */
function getDateFormat(type) {
  switch (type) {
    case 'datetime':
      return "yyyy/MM/DD h:mm:ss";
    case 'date':
      return "yyyy/MM/DD";
    case 'time':
      return "h:mm:ss";
    case 'day':
      return "DD";
    case 'month':
      return "MM";
    case 'year':
      return "yyyy";

    default:
      break;
  }
}

class SQLBuilderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      name: '',
      modelId: '',
      relations: [],
      columns: [],
      roles: [],
      permissions: [],
      aggregates: [{ type: '', column: '', alias: '', id: 0 }],
      conditions: [conditionInitState],
      orderBy: [{ type: '', column: '', id: 0 }],
      group_by: [],
      // modelsOptions: [],   TODO: заменить замоканые данные
      // relationsOptions: [],
      // columnsOptions: [],
      modelsOptions: mockedModels,
      relationsOptions: mockedRelations,
      columnsOptions: mockedColumns,
      rolesOptions: [],
      permissionsOptions: [],

    };
    this.counter = 0;
    this.rolesOptions = new Resource({ route: '/admin/ajax/role_options' });
    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.multipleSelectChangeHandler = this.multipleSelectChangeHandler.bind(this);
    this.aggregateChangeHandler = this.aggregateChangeHandler.bind(this);
    this.aggregateAddHandler = this.aggregateAddHandler.bind(this);
    this.aggregateDeleteHandler = this.aggregateDeleteHandler.bind(this);
    this.conditionChangeHandler = this.conditionChangeHandler.bind(this);
    this.conditionAddHandler = this.conditionAddHandler.bind(this);
    this.conditionDeleteHandler = this.conditionDeleteHandler.bind(this);
    this.conditionDeleteHandler = this.conditionDeleteHandler.bind(this);
    this.orderByChangeHandler = this.orderByChangeHandler.bind(this);
    this.orderByAddHandler = this.orderByAddHandler.bind(this);
    this.orderByDeleteHandler = this.orderByDeleteHandler.bind(this);
    this.titleChangeHandler = this.titleChangeHandler.bind(this);
  }
// запросы опций для селектов
  async componentDidMount() {
    const rolesOptions = await this.rolesOptions.getAll();
    this.setState(state => ({ ...state, rolesOptions }))
    // TODO: GET
    // modelsOptions
    // relationsOptions
    // columnsOptions
    // permissionsOptions
  }

  changeHandler({ target: { value, name } }) {
    this.setState(_state => ({ [name]: value }));
  }
// обработчик изменения поля title, изменяющий значение поля name
  titleChangeHandler(e) {
    e.persist();
    this.setState(state => ({
      ...state,
      title: e.target.value,
      name: titleToName(e.target.value)
    }))
  }
// обработчики событий для массива aggregates
  aggregateChangeHandler({ target: { value, name } }, index) {
    this.setState(state => {
      const aggregates = [...state.aggregates];
      aggregates[index] = { ...state.aggregates[index], [name]: value };
      return { ...state, aggregates };
    });
  }

  aggregateAddHandler() {
    this.counter++;

    this.setState(state => {
      const aggregates = [...state.aggregates];
      aggregates.push({ type: '', column: '', alias: '', id: this.counter });
      return { ...state, aggregates };
    });
  }

  aggregateDeleteHandler(index) {
    this.setState(state => {
      const aggregates = [...state.aggregates];
      aggregates.splice(index, 1);
      return { ...state, aggregates };
    });
  }
// обработчики событий для массива conditions
  conditionChangeHandler({ target: { value, name, checked } }, index) {
    this.setState(state => {
      const conditions = [...state.conditions];
      conditions[index] = {
        ...state.conditions[index],
        [name]: ['or', 'not'].includes(name) ? checked : value
      };
      return { ...state, conditions };
    });
  }

  conditionAddHandler() {
    this.counter++;
    this.setState(state => {
      return { ...state, conditions: [...state.conditions, { ...conditionInitState, id: this.counter }] };
    });
  }

  conditionDeleteHandler(index) {
    this.setState(state => {
      const conditions = [...state.conditions];
      conditions.splice(index, 1);
      return { ...state, conditions };
    })
  }
// обработчики событий для массива orderBy
  orderByChangeHandler({ target: { value, name } }, index) {
    this.setState(state => {
      const orderBy = [...state.orderBy];
      orderBy[index] = { ...state.orderBy[index], [name]: value };
      return { ...state, orderBy };
    });
  }

  orderByAddHandler() {
    this.counter++;

    this.setState(state => {
      const orderBy = [...state.orderBy];
      orderBy.push({ type: '', column: '', id: this.counter });
      return { ...state, orderBy };
    });
  }

  orderByDeleteHandler(index) {
    this.setState(state => {
      const orderBy = [...state.orderBy];
      orderBy.splice(index, 1);
      return { ...state, orderBy };
    })
  }
// обработчик изменения для multiple-селектов
  multipleSelectChangeHandler({ target: { value, name } }) {
    this.setState(state => {
      const array = [...state[name]];

      if (array.includes(value)) {
        const index = array.indexOf(value);
        array.splice(index, 1);
      } else {
        array.push(value);
      }

      return { ...state, [name]: array };
    })
  }

  submitHandler(e) {
    e.preventDefault();
    const { title, name, relations, columns, roles, permissions, aggregates,
      conditions: stateConditions, orderBy, group_by } = cloneDeep(this.state);
    // удаляю свойства id не нужные на сервере
    aggregates.forEach(item => delete item.id);
    stateConditions.forEach(item => delete item.id);
    orderBy.forEach(item => delete item.id);
    // формирую объект conditions на основе state  
    const where = stateConditions
      .filter(({ conditionType }) => conditionType === "where")
      .map(({ column, operator, value }) => ({ column, operator, value }));

    const or_where = stateConditions
      .filter(({ conditionType }) => conditionType === "or_where")
      .map(({ column, operator, value }) => ({ column, operator, value }));

    const where_between = stateConditions
      .filter(({ conditionType }) => conditionType === "where_between")
      .map(({ or, not, column, value1, value2 }) => ({ or, not, column, values: [value1, value2] }));

    const where_in = stateConditions
      .filter(({ conditionType }) => conditionType === "where_in")
      .map(({ or, not, column, values }) =>
        ({ or, not, column, values: values.split(",").map(item => item.trim()) })
      );

    const where_date = stateConditions
      .filter(({ conditionType }) => conditionType === "where_date")
      .map(({ type, column, operator, date }) => {
        const value = moment(date).format(getDateFormat(type));
        return { type, column, operator, value };
      });

    const where_column = stateConditions
      .filter(({ conditionType, or }) => conditionType === "where_column" && !or)
      .map(({ first_column, operator, second_column }) => ({ first_column, operator, second_column }));

    const where_column_or = stateConditions
      .filter(({ conditionType, or }) => conditionType === "where_column" && or)
      .map(({ first_column, operator, second_column }) => ({ first_column, operator, second_column }));

    const conditions = {
      where,
      or_where,
      where_between,
      where_in,
      where_date,
      where_column: [
        { or: false, data: where_column },
        { or: true, data: where_column_or }
      ]
    };
    const access = { roles, permissions };
    const data = { title, name, columns, aggregates, conditions, relations, orderBy, access, group_by }
    console.log(data);
  }

  render() {
    const { title, name, modelId, relations, columns, roles, permissions,
      aggregates, conditions, orderBy, group_by, modelsOptions,
      permissionsOptions, relationsOptions, columnsOptions, rolesOptions } = this.state;

    return <form className="admin-form" onSubmit={this.submitHandler}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" required name="title"
          value={title}
          onChange={this.titleChangeHandler}
          className="form-control" />
      </div>

      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" required name="name"
          value={name}
          onChange={this.changeHandler}
          className="form-control" />
      </div>

      <div className="form-group__inline-wrapper">
        <div className="form-group form-group_width47">
          <label htmlFor="modelId">Model</label>
          <select id="modelId" required name="modelId"
            value={modelId}
            onChange={this.changeHandler}
            className="form-control"
          >
            <option disabled value="" />
            {modelsOptions.map(({ value, label }) =>
              <option key={value} value={value}>
                {label}
              </option>)}
          </select>
        </div>

        <div className="form-group form-group_width47">
          <label htmlFor="relations">With</label>
          <select id="relations" required name="relations" multiple
            value={relations}
            onChange={this.multipleSelectChangeHandler}
            className="form-control"
          >
            <option disabled value="" />
            {relationsOptions.map(({ value, label }) =>
              <option key={value} value={label}>
                {label}
              </option>)}
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="columns">Fields</label>
        <select id="columns" required name="columns" multiple
          value={columns}
          onChange={this.multipleSelectChangeHandler}
          className="form-control"
        >
          <option disabled value="" />
          {columnsOptions.map(({ value, label }) =>
            <option key={value} value={label}>
              {label}
            </option>)}
        </select>
      </div>

      <h2 className="admin-form__subheader centred">Access</h2>

      <div className="form-group__inline-wrapper">
        <div className="form-group form-group_width47">
          <label htmlFor="roles">Roles</label>
          <select id="roles" /* required */ name="roles" multiple //TODO: раскоментировать required
            value={roles}
            onChange={this.changeHandler}
            className="form-control"
          >
            <option disabled value="" />
            {rolesOptions.map(({ value, label }) =>
              <option key={value} value={value}>
                {label}
              </option>)}
          </select>
        </div>

        <div className="form-group form-group_width47">
          <label htmlFor="permissions">Permissions</label>
          <select id="permissions" /* required */ name="permissions" multiple //TODO: раскоментировать required
            value={permissions}
            onChange={this.multipleSelectChangeHandler}
            className="form-control"
          >
            <option disabled value="" />
            {permissionsOptions.map(({ value, label }) =>
              <option key={value} value={label}>
                {label}
              </option>)}
          </select>
        </div>
      </div>

      <h2 className="admin-form__subheader centred">Aggregates</h2>
      {aggregates.map((item, index) => <Fragment key={item.id}>
        {index !== 0 && <hr />}
        <AggregateComponent item={item}
          columnsOptions={columnsOptions}
          changeHandler={e => this.aggregateChangeHandler(e, index)}
          deleteHandler={() => this.aggregateDeleteHandler(index)} />
        <button className="btn btn_failure" type="button"
          onClick={() => this.aggregateDeleteHandler(index)}
        >
          Delete
        </button>
      </Fragment>)}
      <div className="centred">
        <button className="btn btn_success" type="button" onClick={this.aggregateAddHandler}>
          + New
        </button>
      </div>

      <h2 className="admin-form__subheader centred">Conditions</h2>

      {conditions.map((condition, index) => <Fragment key={condition.id}>
        {index !== 0 && <hr />}
        <ConditionComponent
          item={condition}
          columnsOptions={columnsOptions}
          changeHandler={e => this.conditionChangeHandler(e, index)}
        />
        <button className="btn btn_failure" type="button"
          onClick={() => this.conditionDeleteHandler(index)}
        >
          Delete
        </button>
      </Fragment>)}
      <div className="centred">
        <button className="btn btn_success" type="button" onClick={this.conditionAddHandler}>
          + New
        </button>
      </div>

      <h2 className="admin-form__subheader centred">Order By</h2>

      {orderBy.map((item, index) => <Fragment key={item.id}>
        {index !== 0 && <hr />}
        <OrderByComponent
          item={item}
          columnsOptions={columnsOptions}
          changeHandler={e => this.orderByChangeHandler(e, index)}
        />
        <button className="btn btn_failure" type="button"
          onClick={() => this.orderByDeleteHandler(index)}
        >
          Delete
        </button>
      </Fragment>)}
      <div className="centred">
        <button className="btn btn_success" type="button" onClick={this.orderByAddHandler}>
          + New
        </button>
      </div>

      <h2 className="admin-form__subheader centred">Group By</h2>

      <div className="form-group">
        <label htmlFor="group_by">Fields</label>
        <select id="group_by" required name="group_by" multiple
          value={group_by}
          onChange={this.multipleSelectChangeHandler}
          className="form-control"
        >
          <option disabled value="" />
          {columnsOptions.map(({ value, label }) =>
            <option key={value} value={label}>
              {label}
            </option>)}
        </select>
      </div>

      <div className="btn__wrapper btn_add centred">
        <button className="btn btn_success" type="submit">Save</button>
        {/* <Link className="btn" to="/admin/tables/models">Cancel</Link> */}
      </div>
    </form>
  }
}

export default SQLBuilderForm;
