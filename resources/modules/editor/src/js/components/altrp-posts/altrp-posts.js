import React from "react";
import ('../../../sass/altrp-pagination.scss');
import ('./altrp-posts.scss');
import AltrpQueryComponent from "../altrp-query-component/altrp-query-component";
import templateLoader from "../../classes/modules/TemplateLoader"
import frontElementsFabric from "../../../../../front-app/src/js/classes/FrontElementsFabric"
import AltrpModel from "../../classes/AltrpModel";
import ElementWrapper from "../../../../../front-app/src/js/components/ElementWrapper";
import {getResponsiveSetting, isEditor, renderAssetIcon, setAltrpIndex} from "../../../../../front-app/src/js/helpers";
import PostsWrapper from "./components/PostsWrapper";
import Pagination from "../altrp-table/components/Pagination";

class AltrpPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpleTemplate: '',
      simpleTemplateId : null,
      currentPage: 1,
    }
  }

  /**
   * Компонент загрузился
   */
  async componentDidMount() {
    const{settings} = this.props;
    let simpleTemplateId = _.get(settings, 'posts_card_template');
    if(simpleTemplateId){
      if(! simpleTemplateId){
        return;
      }
      this.setState(state=>({...state, simpleTemplateId}), async()=>{
        let template = await templateLoader.loadParsedTemplate(simpleTemplateId);
        this.setState(state=>({...state, simpleTemplate:template}))
      });
    }
  }

  /**
   * Когда нужно обновлять компонент
   * @param {{}} nextProps
   * @param {{}} nextState
   */
  shouldComponentUpdate(nextProps, nextState){
    if(! isEditor()){
      return true;
    }
    if(this.props.settings !== nextProps.settings){
      return true;
    }
    if(! _.isEqual(this.state.simpleTemplate, nextState.simpleTemplate)){
      return true;
    }
    if(! _.isEqual(this.state.simpleTemplateId, nextState.simpleTemplateId)){
      return true;
    }
    // if(this.props.data !== nextProps.data){
    if(! _.isEqual(this.props.data, nextProps.data)){
      return true;
    }
    if(this.state.currentPage !== nextState.currentPage){
      return true;
    }
    return false;
  }
  /**
   * Компонент обновился
   * @param {{}} prevProps
   */
  async componentDidUpdate(prevProps) {
    const{settings} = this.props;
    const{simpleTemplateId} = this.state;
    const newSimpleTemplateId = _.get(settings, 'posts_card_template', simpleTemplateId);
    // if(prevProps.posts !== this.state.posts)
    if(! _.isEqual(prevProps.data, this.props.data)){
      this.setState(state =>({...state, posts: this.props.data}));
    }
    if(newSimpleTemplateId !== simpleTemplateId){
      if(! newSimpleTemplateId){
        return;
      }
      this.setState(state=>({...state, simpleTemplateId: newSimpleTemplateId}),async ()=>{
        let template = await templateLoader.loadParsedTemplate(newSimpleTemplateId);
        this.setState(state=>({...state, simpleTemplate:template}));
      });
    }
  }

  /**
   * Отрисовывает отдельную карточку
   * @param {integer} idx - индекс в массиве записей
   */
  renderPost = (idx) => {
    const hoverTemplateId = _.get(this.props.settings, 'posts_card_hover_template', null);
    const transitionType = _.get(this.props.settings, 'posts_transition_type', null);
    let post = _.cloneDeep(this.props.data[idx] || this.props.data);
    let PostContentComponent = post.component || <h2>{post.title || post.id || ''}</h2>;
    if(this.state.simpleTemplate){
      let template = frontElementsFabric.cloneElement(this.state.simpleTemplate);
      template.setCardModel(new AltrpModel(post), idx);
      PostContentComponent = React.createElement(template.componentClass,
        {
          element: template,
          ElementWrapper: ElementWrapper,
          children: template.children
        });
    }
    return <React.Fragment key={(post.id || post.altrpIndex) + Math.random()}>
      <div className="altrp-post">{PostContentComponent}
        {hoverTemplateId && <div className={`altrp-post altrp-post--hover altrp-post--hover--${transitionType}`}>{PostContentComponent}</div>}
      </div>

    </React.Fragment>
  };

  /**
   * Получаем количество страниц
   * @return {int}
   */

  getPageCount(){
    let {data: posts} = this.props;
    const posts_per_page = Number(getResponsiveSetting(this.props.settings,'posts_per_page')) || 12;
    if(! posts_per_page || ! _.get(posts, 'length')){
      return 1;
    }
    return Math.ceil(posts.length / posts_per_page);
  }

  /**
   * поменяем страницу
   * @param {number} page
   */
  setPage(page){
    page = Number(page);
    if(! page){
      page = 1;
    }
    if(page < 0){
      page = 0;
    }
    if(page > this.getPageCount()){
      page = this.getPageCount();
    }
    if(this.state.currentPage === page){
      return;
    }
    this.setState(state =>({...state, currentPage: page}))
  }

  /**
   * Выводим пагинацию
   * @return {*}
   */
  renderPagination(){
    const settings = {...this.props.settings};
    let {data: posts} = this.props;
    if(! posts.length && ! isEditor()){
      return null;
    }
    let posts_pagination_type = getResponsiveSetting(this.props.settings, 'posts_pagination_type') || '';
    if(posts_pagination_type){
      const {currentPage} = this.state;
      const pageCount = this.getPageCount();
      if(posts_pagination_type === 'pages'){
        settings.hide_pagination_select = true;
        settings.hide_page_input = true;
        const paginationProps = {
          settings,
          pageCount,
          pageIndex: this.state.currentPage - 1,
          nextPage: ()=>{
            this.setPage(this.state.currentPage + 1);
          },
          previousPage: ()=>{
            this.setPage(this.state.currentPage - 1);
          },
          gotoPage: (page)=>{
            this.setPage(page + 1);
          },
          pageSize: this.props.element.getResponsiveSetting('posts_per_page'),
          widgetId: this.props.element.getId(),
        };

        return <Pagination {...paginationProps} />
      }
      return posts_pagination_type === "prev_next" ? <div className="altrp-pagination-pages">
        <button className={"altrp-pagination__previous " + (currentPage <= 1 ? 'state-disabled' : '')}
                disabled={currentPage <= 1}
                onClick={()=>{this.setPage(currentPage - 1)}}>
          <span>{settings.posts_prev_text || ''}</span>
          {renderAssetIcon(settings.prev_icon)}
        </button>

        <button className={"altrp-pagination__next " + (currentPage === pageCount ? 'state-disabled' : '')}
                disabled={currentPage === pageCount}
                onClick={()=>{this.setPage(currentPage + 1)}}>
          <span>{settings.posts_next_text || ''}</span>
          {renderAssetIcon(settings.next_icon)}
        </button>
      </div> :
      <div className="altrp-pagination">
        {! settings.hide_pre_page_button && <button className={"altrp-pagination__previous"}
          onClick={() => this.setPage(currentPage - 1)}
          disabled={currentPage <= 1}
        >
          <span dangerouslySetInnerHTML={{ __html: settings.prev_text || 'Previous Page' }} />
            {renderAssetIcon(settings.prev_icon)}
        </button>}
        {! settings.hide_pages_buttons_button && <div className="altrp-pagination__count">
          {settings.pageText}
        </div>}
        {!settings.hide_next_page_button && <button className="altrp-pagination__next"
            onClick={() => this.setPage(currentPage + 1)}
            disabled={currentPage === pageCount}
          >
            <span dangerouslySetInnerHTML={{ __html: settings.next_text || 'Next Page' }} />
            {renderAssetIcon(settings.next_icon)}
          </button>}
        {/* {!settings.hide_page_input && <input className="altrp-pagination__goto-page"
          type="number"
          defaultValue={pageIndex + 1}
          onChange={e => this.setPage(+e.target.value)}
        />}
        {!settings.hide_pagination_select && countOptions && <AltrpSelect className="altrp-pagination__select-size"
          options={countOptions}
          classNamePrefix={widgetId + ' altrp-field-select2'}
          value={countOptions.find(o => o.value === pageSize)}
          isSearchable={false}
          onChange={value => {
            setPageSize(value.value)
          }} />} */}
      </div>
    }
    return null;
  }

  render() {
    const {currentPage} = this.state;
    const posts_per_page = Number(getResponsiveSetting(this.props.settings,'posts_per_page')) || 12;
    let {data: posts} = this.props;
    if((! _.isArray(posts)) && _.isObject(posts)){
      posts = [posts];
    }
    if(! _.isArray(posts)){
      posts = [];
    }
    let postsStart = 0;
    if(posts_per_page && Number(posts_per_page)){
      if(currentPage > 1){
        postsStart = (currentPage - 1) * posts_per_page
      }
      posts = posts.slice(postsStart, postsStart + posts_per_page);
    }
    let columnsCount = Number(getResponsiveSetting(this.props.settings,'posts_columns')) || 1;
    let posts_columns_gap = getResponsiveSetting(this.props.settings,'posts_columns_gap') || '';
    let posts_rows_gap = getResponsiveSetting(this.props.settings,'posts_rows_gap') || '';


    return<React.Fragment>
      <PostsWrapper columnsCount={columnsCount}
                                        posts_columns_gap={posts_columns_gap}
                                        posts_rows_gap={posts_rows_gap}
                                        className="altrp-posts">
        {posts.map((p, idx)=>{
          return this.renderPost(postsStart + idx);
        })}
      </PostsWrapper>
      {this.renderPagination()}
    </React.Fragment>
  }
}

export default (props) => {
  if(props.settings.choose_datasource === 'datasource'){
    if(isEditor()){
      props = {...props};
      props.settings = {...props.settings};
      props.data = Array.from({length: 100}, () => ({}));
      setAltrpIndex(props.data);
    }
    return<AltrpPosts {...props}/>
  }
  return <AltrpQueryComponent {...props}><AltrpPosts/></AltrpQueryComponent>
}
