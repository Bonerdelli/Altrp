import * as React from "react";
import Scrollbars from "react-custom-scrollbars";
import Chevron from "../../../../../../editor/src/svgs/chevron.svg";
import {setCurrentCustomizer} from "../../../store/current-customizer/actions";
import AltrpSelect from "../../../../../../admin/src/components/altrp-select/AltrpSelect";
import Resource from "../../../../../../editor/src/js/classes/Resource";
import mutate from "dot-prop-immutable";
import {connect} from "react-redux";
import {InputGroup} from "@blueprintjs/core";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {AutoCopyText} from "../../../../../../admin/src/js/helpers";


class CustomizerSettingsPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSources: [],
      modelsOptions: [],
      customizer: {
        ...this.props.customizer
      },
      copy: false,
      copyText: false
    };
    this.modelsResource = new Resource({ route: "/admin/ajax/models_options?with_names=0&not_plural=1&with_sql_queries=0" });
    this.resource = new Resource({ route: "/admin/ajax/customizers" });
  }

  async componentDidMount() {
    const modelsOptions = await this.modelsResource.getAll();
    this.setState(s =>({...s, modelsOptions: modelsOptions ?? []}));
  }



  // Запись значений select в store
  changeSelect(e) {
    const sources = this.props.sources;
    let newSources = [];

    if(_.isArray(e)) {
      e.map(itemE => {
        let check = true;

        if (_.isArray(sources)) {
          sources.forEach(itemS => {
            if (itemE.value == itemS.id) {
              newSources.push(itemS);
              check = false;
            }
          });
        }
        if(check) {
          newSources.push({
            id: itemE.value,
            name: itemE.label,
            parameters: "",
          });
        }
      });
    }
    this.props.setSources(newSources);
  }

  // Запись значений input в store
  changeInput(e, source, sourcesData) {
    if(_.isArray(sourcesData)) {
      sourcesData.map(item =>{
        if(item.id == source.id) item.parameters = e.target.value;
        return item;
      });
    }
    this.props.setSources(sourcesData);
  }

  EditTitleForm = async (e) => {
    e.preventDefault();
    if (confirm("Are you sure?")) {
      await this.resource.put(this.state.customizer.id, this.state.customizer)
      this.props.updateCustomizer()
    }
  }

  EditTitle = (e) => {
    this.setState(state => ({
      ...state,
      customizer: {
        ...state.customizer,
        title: e.target.value
      }
    }))
  }

  UrlCopy = () => {
    const { pathname, search } = this.props.location
    const Copy = AutoCopyText(`${pathname + search}`)
    this.setState(state => ({
      ...state,
      copy: true,
      copyText: Copy
    }))
    setTimeout(() => {
      this.setState(state => ({
        ...state,
        copy: false
      }))
    }, 2000)
  }

  render() {
    const {modelsOptions} = this.state;
    const {customizer} = this.props;
    const {type, model_id} = customizer
    const { pathname, search } = this.props.location

    return (
      <div className="panel settings-panel d-flex">
        <div className="settings-controllers">
          <Scrollbars autoHide autoHideTimeout={500} autoHideDuration={200}>
            <div id="settingsControllers">
              <div>

                <div className="settings-section open">
                  <div className="settings-section__title d-flex">
                    <div className="settings-section__icon d-flex">
                      <Chevron />
                    </div>
                    <div className="settings-section__label">Settings Customizer</div>
                  </div>

                  <div className="controllers-wrapper">
                    <div className="controller-container controller-container_select2">
                      <button className={"btn font_montserrat font_500 btn_grey"} style={{margin: '10px'}} onClick={() => this.props.onLayout('TB')}>vertical</button>
                      <button className={"btn font_montserrat font_500 btn_grey"} style={{margin: '10px'}} onClick={() => this.props.onLayout('LR')}>horizontal</button>
                    </div>

                    <div className="controller-container controller-container_select2" style={{fontSize: '13px'}}>
                      <div className="controller-container__label control-select__label controller-label">Type:</div>
                      <AltrpSelect id="crud-fields"
                                   className="controller-field"
                                   isMulti={false}
                                   value={type}
                                   onChange={this.changeType}
                                   options={[
                                     {
                                       value: '',
                                       label: 'None',
                                     },
                                     {
                                       value: 'api',
                                       label: 'Api',
                                     },
                                     // {
                                     //   value: 'method',
                                     //   label: 'Model Custom Method',
                                     // },
                                     // {
                                     //   value: 'before',
                                     //   label: 'Before Page Load',
                                     // },
                                   ]}
                      />
                    </div>
                    <div className="controller-container controller-container_select2" style={{fontSize: '13px'}}>
                      <div className="controller-container__label control-select__label controller-label">Model:</div>
                      <AltrpSelect id="crud-fields"
                                   className="controller-field"
                                   isMulti={false}
                                   value={modelsOptions.find(o=>o.value == model_id) || {}}
                                   onChange={this.changeModel}
                                   options={modelsOptions.filter(item => item.value >= 5)}
                      />
                    </div>
                    <form className="Customizer-title" onSubmit={this.EditTitleForm}>
                      <div className="controller-container__label control-select__label controller-label">Title:</div>
                      <div className="customizer-block__title">
                        <InputGroup className="form-control-blueprint"
                                    type="text"
                                    id="customizer-title"
                                    value={this.state.customizer.title}
                                    onChange={this.EditTitle}
                        />
                        <button className="btn btn_success" type="submit">Save</button>
                      </div>
                    </form>
                    <div className="Customizer-url">
                      <div className="controller-container__label control-select__label controller-label">Url:</div>
                      <div className="Customizer-url__block">
                        <button onClick={this.UrlCopy} className="btn btn_success">Copy url</button>
                        {this.state.copyText ? (
                          <div className={this.state.copy ? "text-copy__url on" : "text-copy__url"}>url copied successfully!</div>
                        ) : (
                          <div className={this.state.copy ? "error-copy__url on" : "error-copy__url"}>Copying is impossible without https!</div>
                        )}
                      </div>
                      <div className="url-text">{`${pathname + search}`}</div>
                    </div>
                  </div> {/* ./controllers-wrapper */}
                </div> {/* ./settings-section */}

              </div>
            </div>
          </Scrollbars>
        </div>
      </div>
    );
  }

  changeType = (e)=> {
    let {customizer} = this.props;
    customizer = mutate.set(customizer, 'type', e.value||'')
    window.customizerEditorStore.dispatch(setCurrentCustomizer(customizer))
  }
  changeModel = (e)=>{
    let {customizer} = this.props;
    customizer = mutate.set(customizer, 'model_id', e.value||'')
    window.customizerEditorStore.dispatch(setCurrentCustomizer(customizer))
  };

}
function  mapStateToProps(state) {
  return {
    customizer: state.currentCustomizer
  }
}

export const CustomizerSettingsPanelCompose = compose(
  connect(mapStateToProps),
  withRouter
)(CustomizerSettingsPanel);
