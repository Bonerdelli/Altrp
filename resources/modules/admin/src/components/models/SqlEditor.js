import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";
import Resource from "../../../../editor/src/js/classes/Resource";
import {titleToName} from "../../js/helpers";
import store from '../../js/store/store';

import AdminTable from "../AdminTable";
import AltrpSelect from "../altrp-select/AltrpSelect";
import AdminModal2 from "../AdminModal2";
import SQLsRemoteFieldForm from "./RemoteFieldForms/SQLsRemoteFieldForm";

const remoteFieldsColumns = [
  {
    name: 'name',
    title: 'Name'
  },
  {
    name: 'remote_find_column',
    title: 'Remote Find Column'
  },
  {
    name: 'remote_need_column',
    title: 'Remote Need Column'
  }
]

class SqlEditor extends Component {
  constructor(props) {
    super(props);
    let storeState = store.getState();
    this.state = {
      modelTitle: 'Model Title',
      value: {
        paged: false,
        is_object: false,
        auth: false,
      },
      modelsOptions: [],
      AceEditor: storeState.aceEditorReducer.AceEditor,
      AceEditorResponse: storeState.aceEditorReducer.AceEditor,
      remoteFields: [],
      editingRemoteField: null,
      isFieldRemoteModalOpened: false,
      testResponse: '',
      testParams: {}
    };
    this.sqlEditorResource = new Resource({route: `/admin/ajax/sql_editors`});
    this.sqlEditorTest = new Resource({route: `/admin/ajax/sql_editors/test`});
    this.modelsResource = new Resource({ route: '/admin/ajax/model_options' });
    this.remoteFieldsResource = new Resource({ route: `/admin/ajax/remote_data/sql_editor/${this.props.match.params.id}` });
    this.onTest = this.onTest.bind(this);
    store.subscribe(this.aceEditorObserver);
  }

  /**
   * AceEditor загрузился
   */
  aceEditorObserver = () => {
    let storeState = store.getState();
    this.setState(state=>({
        ...state,
      AceEditor: storeState.aceEditorReducer.AceEditor
    }))
  };
  /**
   * Компонент загрузился
   * @return {Promise<void>}
   */
  async componentDidMount() {
    const {id} = this.props.match.params;
    if(id){
      this.remoteFieldsResource.getAll()
        .then(remoteFields => this.setState({ remoteFields }));

      let value = await this.sqlEditorResource.get(id);
      this.editor = null;
      this.setState(state=>({
          ...state,
        value,
      }))
    }
    let { options } = await this.modelsResource.getAll();
    options = options.filter(option => (option.label !== 'User'));
    this.setState({ modelsOptions: options });
  }

  updateRemoteFields = async () => {
    let remoteFields = await this.remoteFieldsResource.getAll();
    this.setState(state => ({ ...state, remoteFields, isFieldRemoteModalOpened: false, editingRemoteField: null }));
  }

  /**
   * Имзенить поле
   * @param {*} value
   * @param {string} field
   */
  changeValue(value, field) {
    this.setState(state => {
      state = { ...state };
      if(field === 'name'){
        state.value[field] = titleToName(value);
      }else{
        state.value[field] = value;
      }
      if(field === 'title') {
        state.value.name = titleToName(value);
      }
      if(field === 'test') {
        state.value.test = value;
        let res = {};
        const arr = value.split('&');
        if (arr.length > 0) {
          for(let item of arr) {
            const a = item.split('=');
            if (a[0]) {
              res[a[0]] = a[1];
            }
          }
        }
        state.testParams = res;
        state.testParams.sql = state.value.sql;
      }
      return state
    })
  }
  /**
   * отправка данных
   * @return {*}
   */
  onSubmit = async e => {
    const {id} = this.props.match.params;
    e.preventDefault();
    let res;
    if(! this.state.value.sql){
      return alert('Заполните SQL Query');
    }
    if(id){
      res = await this.sqlEditorResource.put(id, this.state.value);
    } else {
      res = await this.sqlEditorResource.post(this.state.value);
    }
    if(res.success){
      this.props.history.push('/admin/tables/sql_editors');
    } else {
      alert(res.message);
    }
  };

  onTest = async () => {
    this.state.testParams.sql = this.state.value.sql;
    let testResponse = await this.sqlEditorTest.post(this.state.testParams);
    if (testResponse.success)
      testResponse = JSON.stringify(testResponse.success);
    if (testResponse.error)
      testResponse = JSON.stringify(testResponse.error);
    this.setState(state => ({
      ...state,
      testResponse
    }))
  }

  render() {
    const {id} = this.props.match.params;
    const { isFieldRemoteModalOpened, remoteFields, editingRemoteField } = this.state;
    return <div className="admin-pages admin-page">
      <div className="admin-heading">
        <div className="admin-breadcrumbs">
          <Link className="admin-breadcrumbs__link" to="/admin/tables/sql_editors">All  SQL Editors</Link>
          <span className="admin-breadcrumbs__separator">/</span>

          <span className="admin-breadcrumbs__current">Add SQL Query</span>
        </div>
      </div>
      <div className="admin-content">
        <form className="admin-form field-form" onSubmit={this.onSubmit}>
          <div className="row">
            <div className="form-group col-6">
              <label htmlFor="field-title">Title</label>
              <input type="text" id="field-title" required
                     value={this.state.value.title || ''}
                     onChange={e => {
                       this.changeValue(e.target.value, 'title')
                     }}
                     className="form-control"/>
            </div>
            <div className="form-group col-6">
              <label htmlFor="field-name">Name</label>
              <input type="text" id="field-name" required readOnly={id}
                     value={this.state.value.name || ''}
                     onChange={e => {
                       this.changeValue(e.target.value, 'name')
                     }}
                     className="form-control"/>
            </div>
            <div className="form-group col-12">
              <label htmlFor="field-name">Description</label>
              <input type="text" id="field-description"
                     value={this.state.value.description || ''}
                     onChange={e => {
                       this.changeValue(e.target.value, 'description')
                     }}
                     className="form-control"/>
            </div>
            {/*<div className="form-group col-12">*/}
              {/*<input type="checkbox" id="relation-paged"*/}
                     {/*checked={this.state.value.paged}*/}
                     {/*onChange={e => { this.changeValue(e.target.checked, 'paged') }}*/}
              {/*/>*/}
              {/*<label className="checkbox-label" htmlFor="relation-paged">Paged</label>*/}
            {/*</div>*/}
            <div className="form-group col-12">
              <label htmlFor="relation-model_id">Model</label>
              <select id="relation-model_id" required disabled={id}
                      value={this.state.value.model_id || ''}
                      onChange={e => { this.changeValue(e.target.value, 'model_id') }}
                      className="form-control"
              >
                <option disabled value="" />
                {this.state.modelsOptions.map(({ value, label }) =>
                    <option key={value} value={value}>
                      {label}
                    </option>)}
              </select>
            </div>
            <div className="form-group col-12">
              <input type="checkbox" id="field-auth"
                     checked={this.state.value.auth} value={this.state.value.auth}
                     onChange={e => { this.changeValue(e.target.checked, 'auth') }}
              />
              <label className="checkbox-label" htmlFor="field-auth">Auth</label>
            </div>
            <div className="form-group col-12">
              <input type="checkbox" id="field-is_object"
                     checked={this.state.value.is_object}
                     value={this.state.value.is_object}
                     onChange={e => { this.changeValue(e.target.checked, 'is_object') }}
              />
              <label className="checkbox-label" htmlFor="field-is_object">As Object</label>
            </div>
            {!this.state.value.auth ? '' : <><div className="form-group col-4">
              <label htmlFor="field-roles">Roles</label>
              <AltrpSelect id="field-roles"
                           isMulti={true}
                           optionsRoute="/admin/ajax/role_options"
                           placeholder="All"
                           defaultOptions={[
                             {
                               value: null,
                               label: 'All',
                             }
                           ]}
                           value={this.state.value.roles}
                           onChange={value => {this.changeValue(value, 'roles')}}
              />
            </div>
            <div className="form-group col-4">
              <label htmlFor="field-permissions">Permissions</label>
              <AltrpSelect id="field-permissions"
                           isMulti={true}
                           optionsRoute="/admin/ajax/permissions_options"
                           placeholder="All"
                           defaultOptions={[
                             {
                               value: null,
                               label: 'All',
                             }
                           ]}
                           value={this.state.value.permissions}
                           onChange={value => {this.changeValue(value, 'permissions')}}
              />
            </div></>}
            <div className="form-group col-12">
              <label htmlFor="field-name">SQL Query</label>
              {this.state.AceEditor && (this.editor = (this.editor || <this.state.AceEditor
                  mode="sql"
                  theme="textmate"
                  onChange={value => {
                    this.changeValue(value, 'sql')
                  }}
                  className="field-ace"
                  name="aceEditor"
                  height="15em"
                  setOptions={{
                    value: this.state.value.sql || ''
                  }}
                  showPrintMargin={false}
                  style={{
                    width: '100%'
                  }}
                  enableLiveAutocompletion={true} />))}
            </div>
            <div className="row col-12">
              <div className="form-group col-11">
                <input type="text" id="field-test"
                       value={this.state.value.test  || ''}
                       placeholder='Parametr for test (task_id=3&id=1)'
                       onChange={e => {
                         this.changeValue(e.target.value, 'test')
                       }}
                       className="form-control"
                />
              </div>
              <div className="form-group col-1">
                <button className="btn btn_success" type="button" onClick={this.onTest}>Test</button>
              </div>
            </div>
            <div className="form-group col-12">
              <label htmlFor="field-name">Test Result</label>
              <this.state.AceEditorResponse
                mode="javascript"
                theme="textmate"
                onChange={value => {
                  //this.changeValue(value, 'test')
                }}
                className="field-ace"
                name="aceEditorResponse"
                height="15em"
                wrapEnabled={true}
                // value={this.state.testResponse || ''}
                showPrintMargin={false}
                setOptions={{
                  value: this.state.testResponsel || ''
                }}
                style={{
                  width: '100%'
                }}
                enableLiveAutocompletion={false} />
            </div>
          </div>

          <div className="btn__wrapper btn_add">
            <button className="btn btn_success" type="submit">Add</button>
            <Link className="btn" to={`/admin/tables/sql_editors`}>Cancel</Link>


            {/* TODO: отображать кнопку если в форме редактируются данные
          повесить обработчик удаления
        <button className="btn btn_failure">Delete</button> */}
          </div>
        </form>
        {id && <>
          <h2 className="sub-header">Remote Fields</h2>
          <AdminTable
            columns={remoteFieldsColumns}
            quickActions={[{
              callBack: field => this.setState({ isFieldRemoteModalOpened: true, editingRemoteField: field }),
              title: 'Edit'
            }, {
              tag: 'button',
              route: `/admin/ajax/remote_data/:id`,
              method: 'delete',
              confirm: 'Are You Sure?',
              after: () => this.updateRemoteFields(),
              className: 'quick-action-menu__item_danger',
              title: 'Trash'
            }]}
            rows={remoteFields}
          />
          <button onClick={() => this.setState({ isFieldRemoteModalOpened: true, editingRemoteField: null })} className="btn btn_add">
            Add Remote Field
          </button>
        </>}
      </div>
      {isFieldRemoteModalOpened && <AdminModal2 closeHandler={() => this.setState({ isFieldRemoteModalOpened: false, editingRemoteField: null })}>
        <SQLsRemoteFieldForm
          remoteFieldsResource={this.remoteFieldsResource}
          updateRemoteFields={this.updateRemoteFields}
          field={editingRemoteField}
        />
      </AdminModal2>}
    </div>;
  }
}

export default withRouter(SqlEditor);
