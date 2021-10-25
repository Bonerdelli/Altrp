import * as React from "react";
import Scrollbars from "react-custom-scrollbars";
import Chevron from "../../../../../../editor/src/svgs/chevron.svg";
import store from "../../../store/store";
import {setCurrentCustomizer} from "../../../store/current-customizer/actions";
import AltrpSelect from "../../../../../../admin/src/components/altrp-select/AltrpSelect";
import Resource from "../../../../../../editor/src/js/classes/Resource";


export default class CustomizerSettingsPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSources: []
    };
    this.toggleChevron = this.toggleChevron.bind(this);
    this.toggle = this.toggle.bind(this);
    this.dataSources = new Resource({ route: "/admin/ajax/data_source_options" });
  }

  async componentDidMount() {
    const dataSources = await this.dataSources.getAll();
    this.setState(s =>({...s, dataSources: dataSources?.options ?? []}));
  }

  toggleChevron(type) {
    console.log(type);
  }

  // Изменение положения переключателя
  toggle() {
    let customizer = this.props.customizer;
    customizer.enabled = customizer.enabled ? 0 : 1 ;
    store.dispatch(setCurrentCustomizer(customizer));
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

  getCustomizer() {
    let elements = store.getState()?.customizerSettingsData;
    elements = _.filter(elements, item => item.type === "customizer");
    return elements;
  }

  getSources() {
    const sources = this.props.sources;
    let result = [];
    sources.map(item => {
      result.push(item.id);
    });
    return result;
  }

  render() {
    const {dataSources} = this.state;
    const customizer = this.getCustomizer();
    const sources = this.getSources();
    const sourcesData = this.props.sources ?? [];

    let value = this.props.customizer?.enabled ?? false;
    let switcherClasses = `control-switcher control-switcher_${value ? 'on' : 'off'}`;

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
                    <div className="customizer_switcher">
                      <div className="customizer_switcher__label">
                        Customizer enable
                      </div>
                      <div className={switcherClasses} onClick={this.toggle}>
                        <div className="control-switcher__on-text">ON</div>
                        <div className="control-switcher__caret" />
                        <div className="control-switcher__off-text">OFF</div>
                      </div>
                    </div>
                    <div className="controller-container controller-container_select2">
                      <button className={"btn font_montserrat font_500 btn_grey"} style={{margin: '10px'}} onClick={() => this.props.onLayout('TB')}>vertical</button>
                      <button className={"btn font_montserrat font_500 btn_grey"} style={{margin: '10px'}} onClick={() => this.props.onLayout('LR')}>horizontal</button>
                    </div>

                    <div className="controller-container controller-container_select2" style={{fontSize: '13px'}}>
                      <div className="controller-container__label control-select__label controller-label">Sources</div>
                      <AltrpSelect id="crud-fields"
                                   className="controller-field"
                                   isMulti={true}
                                   value={_.filter(dataSources, s => sources.indexOf(s.value) >= 0)}
                                   onChange={e => {this.changeSelect(e)}}
                                   options={dataSources}
                      />

                      {sourcesData.map((item, index) =>
                        <div className="controller-container-input" key={index}>
                          <div className="controller-container controller-container_textarea" >
                            <div className="controller-container__label textcontroller-responsive">{item?.name ? item.name + ' params' : ''}</div>
                            <textarea
                              className="control-field"
                              type="text"
                              id={item?.id}
                              name={item?.name}
                              value={item?.parameters ?? ''}
                              onChange={(e) => { this.changeInput(e, item, sourcesData) }}
                            />
                          </div>
                        </div> /* ./controller-container-input */
                      )}
                    </div>
                      <div className="controller-container controller-container_select" >
                        <div className="controller-container__label control-select__label controller-label">Customizer:</div>
                        <div className="control-container_select-wrapper controller-field">
                          {customizer.map((item, index) =>
                          <div className="controller-container__label control-select__label controller-label" key={index}>
                            <a href={(item.data?.props?.nodeData?.id) ? `customizer-editor?customizer_id=${item.data?.props?.nodeData?.id}` : ""}>{item?.data?.label ?? ''}</a>
                          </div>
                          )}
                          {(customizer.length === 0) && <div className="controller-container__label control-select__label controller-label">
                            Роботы не используются
                          </div>}
                        </div>
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
}
