exports.ids=[6],exports.modules={146:function(e,t,r){"use strict";var a=r(12),n=r.n(a),l=r(9),o=r.n(l),c=r(17),s=r.n(c),i=r(2),u=r.n(i),p=r(0),E=r.n(p),d=(r(145),r(49)),O=r(6);function f(e,_){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);_&&(r=r.filter((function(_){return Object.getOwnPropertyDescriptor(e,_).enumerable}))),t.push.apply(t,r)}return t}function b(e){for(var _=1;_<arguments.length;_++){var t=null!=arguments[_]?arguments[_]:{};_%2?f(Object(t),!0).forEach((function(_){n()(e,_,t[_])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(_){Object.defineProperty(e,_,Object.getOwnPropertyDescriptor(t,_))}))}return e}t.a=function(e){var t,r,a,n=[],l={forceFetchOnMount:!0,refetchOnWindowFocus:!0},c=e.children,i=void 0===c?[]:c,f=e.query,P=e.data,m=e.settings,D=e.updateToken,g={};m.tables_columns&&m.tables_columns.forEach((function(e){e.column_is_default_sorted&&!g.order_by&&(g.order_by=e.accessor,g.order=_.get(e,"column_is_default_sorted_direction","ASC"))}));var M=Object(p.useState)(1),h=s()(M,2),C=h[0],y=h[1],A=Object(p.useState)(g),T=s()(A,2),v=T[0],R=T[1],I=Object(p.useState)({}),B=s()(I,2),L=B[0],K=B[1],U=Object(p.useCallback)(function(){var e=o()(u.a.mark((function e(t){var r,a,n,l,o,c,s,i=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=i.length>1&&void 0!==i[1]?i[1]:1,a=i.length>2?i[2]:void 0,n=i.length>3?i[3]:void 0,i.length>4?i[4]:void 0,l=i.length>5?i[5]:void 0,o=i.length>6?i[6]:void 0,"datasource"!==m.choose_datasource){e.next=8;break}return e.abrupt("return",P);case 8:return c={page:r},s=JSON.stringify(n),a&&(c=_.assign(a,c)),l&&(c.altrpUdateToken=l),o&&(c.order="ASC",c.order_by=o),s.length>2&&(c.filters=s),e.next=16,f.getQueried(c);case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(_){return e.apply(this,arguments)}}());if(f.pageSize){var W=Object(d.usePaginatedQuery)([f.dataSourceName,C,v,L,f.getParams(),D],U,l),w=W.status,j=W.resolvedData,k=W.latestData;n=j||n,t=w,r=W.error,a=k,Object(p.useEffect)((function(){null!=k&&k.hasMore&&d.queryCache.prefetchQuery([f.dataSourceName,C+1],U)}),[k,U,C,v,L,D])}else{var x=Object(d.useQuery)([f.dataSourceName,f.getParams(),D],(function(e){return f.getResource().getQueried(b(b({},v),{},{filters:filterSettingJSON,groupBy:groupBy}))}),l),S=x.status;n=x.data,t=S,r=x.error}_.isObject(n)&&!_.isArray(n)&&(n=[n]),n.length||(n=P),_.isArray(i)||(i=[i]),_.isEmpty(P)&&(P=n),E.a.useEffect((function(){Object(O.Q)(P)}),[P]);var N=E.a.useMemo((function(){return _.isArray(P)?P:_.isObject(P)?[P]:[]}),[P]),q=b(b({},e),{},{data:N,_status:t,setFilterSettings:K,setSortSettings:R,filterSetting:L,sortSetting:v,_latestData:a,setPage:y,page:C,_error:r});return i.map((function(e){return E.a.cloneElement(e,b(b({},q),{},{key:e.key}))}))}},149:function(e,_,t){(e.exports=t(61)(!1)).push([e.i,".altrp-pagination{display:flex;align-items:center;justify-content:center}.altrp-pagination-pages{display:flex}.altrp-pagination__goto-page{margin-left:10px;height:32px;border:solid #8e94aa 2px}.altrp-pagination__select-size{margin-left:10px}.altrp-pagination__select-size .altrp-field-select2__single-value{font-size:14px}.altrp-pagination__select-size .altrp-field-select2__indicator-separator{display:none}.altrp-pagination__select-size .altrp-field-select2__indicator{align-items:center}.altrp-pagination__select-size .altrp-field-select2__control{width:100px;min-height:32px;padding:0;border-radius:0;outline:none;border-color:#8e94aa;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}.altrp-pagination__select-size .altrp-field-select2__control input{border:none}.altrp-pagination__ellipsis{align-self:center;margin:0 5px}#editor-content .altrp-pagination__select-size,#editor-content .altrp-table-th .altrp-label_select,#editor-content .altrp-table__filter-select{pointer-events:none}\n",""])},163:function(e,t,r){"use strict";var a=r(21),n=r.n(a),l=r(9),o=r.n(l),c=r(12),s=r.n(c),i=r(4),u=r.n(i),p=r(5),E=r.n(p),d=r(11),O=r.n(d),f=r(7),b=r.n(f),P=r(8),m=r.n(P),D=r(1),g=r.n(D),M=r(2),h=r.n(M),C=r(0),y=r.n(C),A=r(10);function T(e,_){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);_&&(r=r.filter((function(_){return Object.getOwnPropertyDescriptor(e,_).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var _=1;_<arguments.length;_++){var t=null!=arguments[_]?arguments[_]:{};_%2?T(Object(t),!0).forEach((function(_){s()(e,_,t[_])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach((function(_){Object.defineProperty(e,_,Object.getOwnPropertyDescriptor(t,_))}))}return e}function R(e){var _=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=g()(e);if(_){var a=g()(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return m()(this,t)}}var I=function(e){b()(l,e);var t,r,a=R(l);function l(e){var _;return u()(this,l),(_=a.call(this,e)).resource=new A.a({route:_.props.route}),_.state={value:_.props.value||"",disabled:!_.props.value},_.changeValue=_.changeValue.bind(O()(_)),_.onChange=_.onChange.bind(O()(_)),_.onKeyDown=_.onKeyDown.bind(O()(_)),_}return E()(l,[{key:"componentDidUpdate",value:function(e,_){var t=this;e.route!==this.props.route&&(this.resource=new A.a({route:this.props.route}),console.log(this.resource)),e.value!==this.props.value&&this.props.value!==this.state.value&&this.setState((function(e){return v(v({},e),{},{value:t.props.value})}))}},{key:"componentDidMount",value:(r=o()(h.a.mark((function e(){var _,t=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===this.props.value&&this.props.resourceid){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,this.resource.get(this.props.resourceid);case 4:_=e.sent,this.setState((function(e){return v(v({},e),{},{value:_[t.props.resourceid]||"",disabled:!1})}));case 6:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"onKeyDown",value:function(e){13===e.keyCode&&this.changeValue(e)}},{key:"onChange",value:function(e){var t=e.target.value;this.setState((function(e){return v(v({},e),{},{value:t})})),_.isFunction(this.props.changevalue)&&this.props.changevalue(t)}},{key:"changeValue",value:(t=o()(h.a.mark((function e(t){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.target.value,this.setState((function(e){return v(v({},e),{},{disabled:!0})})),_.isFunction(this.props.onBlur)&&this.props.onBlur(r),e.next=5,this.resource.put(this.props.resourceid,{value:r,column_value:r});case 5:e.sent,this.setState((function(e){return v(v({},e),{},{disabled:!1})}));case 7:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"render",value:function(){var e=this.props.className;this.state.disabled&&(e+=" pointer-event-none");var _=v({},this.props);return delete _.changevalue,y.a.createElement("input",n()({},_,{className:e,onBlur:this.changeValue,onKeyDown:this.onKeyDown,onChange:this.onChange,value:this.state.value}))}}]),l}(C.Component);t.a=I},202:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"settingsToColumns",(function(){return settingsToColumns})),__webpack_require__.d(__webpack_exports__,"renderAdditionalRows",(function(){return renderAdditionalRows})),__webpack_require__.d(__webpack_exports__,"renderCellActions",(function(){return renderCellActions}));var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(16),_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(21),_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(12),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(17),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),react_table__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(84),react_table__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_5__),react_query__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(49),react_query__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_6__),_sass_altrp_pagination_scss__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(149),_sass_altrp_pagination_scss__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_sass_altrp_pagination_scss__WEBPACK_IMPORTED_MODULE_7__),react_router_dom__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(24),react_router_dom__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_8__),_front_app_src_js_helpers__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(6),_admin_src_js_helpers__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(156),_admin_src_components_AutoUpdateInput__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(163),_altrp_query_component_altrp_query_component__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(146);function ownKeys(e,_){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);_&&(r=r.filter((function(_){return Object.getOwnPropertyDescriptor(e,_).enumerable}))),t.push.apply(t,r)}return t}function _objectSpread(e){for(var _=1;_<arguments.length;_++){var t=null!=arguments[_]?arguments[_]:{};_%2?ownKeys(Object(t),!0).forEach((function(_){_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(e,_,t[_])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(_){Object.defineProperty(e,_,Object.getOwnPropertyDescriptor(t,_))}))}return e}var AltrpTable=function(e){var t=e.settings,r=e.query,a=e.data,n=(e.currentModel,e._status),l=e._error,o=e.setSortSettings,c=e.setFilterSettings,s=e.filterSetting,i=e.setPage,u=e._latestData,p=e.page,E=e.sortSetting;if(!t.tables_columns||!t.tables_columns.length)return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{children:"Please Add Column"});var d={};t.tables_columns.forEach((function(e){e.column_is_default_sorted&&!d.order_by&&(d.order_by=e.accessor,d.order=_.get(e,"column_is_default_sorted_direction","ASC"))}));var O=react__WEBPACK_IMPORTED_MODULE_4___default.a.useMemo((function(){return _.get(t,"group_by_column_name")?_.get(t,"group_by_column_name"):getGroupBy(t.tables_columns)}),[t]);react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect((function(){O&&o({order:"ASC",order_by:O})}),[O]);var f,b=r.getCounterStart(p),P=react__WEBPACK_IMPORTED_MODULE_4___default.a.useMemo((function(){return t.group_collapsing})),m=react__WEBPACK_IMPORTED_MODULE_4___default.a.useState([]),D=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(m,2),g=D[0],M=D[1],h=Object(react__WEBPACK_IMPORTED_MODULE_4__.useState)({}),C=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(h,2),y=C[0],A=C[1],T=Object(react__WEBPACK_IMPORTED_MODULE_4__.useState)({}),v=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(T,2),R=v[0],I=v[1],B=[];f=settingsToColumns(t),a=a.map((function(e){return e.id===y.rowId?(e[y.column]=y.value,_objectSpread({},e)):e}));var L=Object(react_table__WEBPACK_IMPORTED_MODULE_5__.useTable)({columns:react__WEBPACK_IMPORTED_MODULE_4___default.a.useMemo((function(){return f||[]}),[t.tables_columns]),data:react__WEBPACK_IMPORTED_MODULE_4___default.a.useMemo((function(){return a||[]}),[a])}),K=L.getTableProps,U=L.getTableBodyProps,W=L.headerGroups,w=L.rows,j=L.prepareRow,k=function(e){o({order_by:e,order:E&&E.order_by===e?"DESC"===E.order?"ASC":"DESC":"ASC"})},x=function(e,_){i(1);var t=_objectSpread({},s);_?t[e]=_:delete t[e],c(t)};return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("table",_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({className:"altrp-table altrp-table_columns-"+f.length},K()),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("thead",{className:"altrp-table-head"},renderAdditionalRows(t),W.map((function(e){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr",_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({},e.getHeaderGroupProps(),{className:"altrp-table-tr"}),e.headers.map((function(e){return renderTh({column:e,sortSetting:E,sortingHandler:k,filterSetting:s,filterHandler:x})})))}))),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tbody",_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({},U(),{className:"altrp-table-tbody ".concat(t.table_style_table_striple_style?" altrp-table-tbody--striped":"")}),"error"===n?react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr",null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",null,l.message)):"loading"===n?react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr",null,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",null,"Loading")):w.map((function(e,r){j(e);var a=_.get(t,"field_name_for_row_styling");return a=_.get(e.original,a,""),a=Object(_front_app_src_js_helpers__WEBPACK_IMPORTED_MODULE_9__.A)(a,{}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment,{key:e.id},renderGroupingTr(e,O,B,t,P,M,g),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr",_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({},e.getRowProps(),{style:a,className:"altrp-table-tr ".concat(t.table_hover_row?"altrp-table-background":""," ").concat(P&&-1!==g.indexOf(_.last(B))?"altrp-d-none":"")}),e.cells.map((function(r,a){var n=r.render("Cell"),l=Object(_front_app_src_js_helpers__WEBPACK_IMPORTED_MODULE_9__.x)()?"a":react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link;f[a].column_external_link&&!Object(_front_app_src_js_helpers__WEBPACK_IMPORTED_MODULE_9__.x)()&&(l="a");var o=r.column.column_body_alignment?{textAlign:r.column.column_body_alignment}:{},c=_objectSpread({},r.getCellProps()),s=r.value,i="";if(f[a].column_is_editable&&f[a].column_edit_url){var u=Object(_front_app_src_js_helpers__WEBPACK_IMPORTED_MODULE_9__.E)(f[a].column_edit_url,e.original);i=react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_admin_src_components_AutoUpdateInput__WEBPACK_IMPORTED_MODULE_11__.a,{className:"altrp-inherit altrp-table-td__double-click-content",route:u,resourceid:"",changevalue:function(_){A({value:_,rowId:e.original.id,column:f[a]._accessor})},value:s}),c.onDoubleClick=function(){R.column===f[a]._accessor&&R.rowId===e.original.id?I({}):I({column:f[a]._accessor,rowId:e.original.id})}}var p="altrp-table-td ".concat(r.column.column_body_alignment?"altrp-table-td_alignment-".concat(r.column.column_body_alignment):""," ");R.column===f[a]._accessor&&e.original.id===R.rowId&&(p+=" altrp-table-td_double-clicked"),t.table_hover_row||(p+=" altrp-table-background"),_.isObject(r.value)&&(n=""),n=f[a].column_link?react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(l,{to:Object(_front_app_src_js_helpers__WEBPACK_IMPORTED_MODULE_9__.E)(f[a].column_link,e.original),href:Object(_front_app_src_js_helpers__WEBPACK_IMPORTED_MODULE_9__.E)(f[a].column_link,e.original),target:f[a].column_blank_link?"_blank":"",className:"altrp-inherit altrp-table-td__default-content",dangerouslySetInnerHTML:{__html:r.value}}):react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span",{className:"altrp-inherit altrp-table-td__default-content",dangerouslySetInnerHTML:{__html:r.value}}),r.column._accessor&&"##"===r.column._accessor.trim()&&(n=b+++"");var E=_.get(r,"column.column_styles_field");return E=_.get(e.original,E,""),E=Object(_front_app_src_js_helpers__WEBPACK_IMPORTED_MODULE_9__.A)(E,{}),o=_.assign(o,E),_.get(r,"column.actions.length")?react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({},c,{className:p,style:o}),renderCellActions(r,e)):_.isString(n)&&!i?react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({},c,{className:p,dangerouslySetInnerHTML:{__html:n+""},style:o})):react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({},c,{className:p,style:o}),n,i)}))))}))),renderFooter(t,a)),"prev-next"===r.paginationType&&r.pageSize?react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"altrp-pagination"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button",{className:"altrp-pagination__previous",onClick:function(){i((function(e){return Math.max(e-1,0)})),I({}),A({})},disabled:1===p},t.prev_text||""),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"altrp-pagination__count"},t.current_page_text||"Current Page:",p),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button",{className:"altrp-pagination__next",onClick:function(){A({}),I({}),i((function(e){return u&&u.hasMore?e+1:e}))},disabled:!u||!u.hasMore},t.next_text||"")):"")};function settingsToColumns(e){var _=[],t=e.tables_columns;return(t=t||[]).forEach((function(e){e.column_name&&(e.actions&&e.actions.length||e.accessor)&&(e._accessor=e.accessor,_.push(e))})),_}function renderAdditionalRows(e){var t=e.additional_rows;return _.isArray(t)?t.map((function(e){return e.additional_cells=e.additional_cells||[],react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr",{key:"additional-row-".concat(e.id)},e.additional_cells.map((function(_){return _.rowspan=_.rowspan||1,_.colspan=_.colspan||1,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th",{key:"additional-cell-".concat(e.id,"-").concat(_.id),role:"columnheader",className:"altrp-table-th altrp-table-cell",colSpan:_.colspan,rowSpan:_.rowspan},_.title)})))})):""}function renderTh(e){var _=e.column,t=e.sortSetting,r=e.sortingHandler,a=e.filterSetting,n=e.filterHandler,l=_.column_width,o=_.column_header_alignment,c=_objectSpread({},_.getHeaderProps()),s={};l&&(s.width=l),o&&(s.textAlign=o),c.className="altrp-table-th",_.column_is_sorted&&(c.onClick=function(){return r(_._accessor)},c.className+=" clickable"),_.column_width&&(c.width=_.column_width+"%");var i=_.render("column_name");return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("th",_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({},c,{style:s}),i,t&&_.column_is_sorted&&t.order_by===_._accessor&&("DESC"===t.order?Object(_admin_src_js_helpers__WEBPACK_IMPORTED_MODULE_10__.a)().renderIcon("chevron",{className:"rotate-180 sort-icon "}):Object(_admin_src_js_helpers__WEBPACK_IMPORTED_MODULE_10__.a)().renderIcon("chevron",{className:"sort-icon"})),_.column_is_filtered&&react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label",{className:"altrp-label"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input",{type:"text",onClick:function(e){e.stopPropagation()},onChange:function(e){e.stopPropagation();var t=e.target.value;n(_._accessor,t)},value:a[_._accessor]||"",className:"altrp-field"})))}function getGroupBy(e){var _=null;return e.forEach((function(e){e.group_by&&(_=e.accessor)})),_}function renderGroupingTr(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4?arguments[4]:void 0,l=arguments.length>5?arguments[5]:void 0,o=arguments.length>6?arguments[6]:void 0;if(!t)return null;var c=_.get(e,"original."+t,"");if(c||(c=_.get(a,"group_default_text","")),r.indexOf(c)>=0)return null;r.push(c);var s=-1!==o.indexOf(c),i=a.collapsed_icon,u=a.expanded_icon;return _.isArray(i)&&(i=null),_.isArray(u)&&(u=null),c?react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr",{className:"altrp-table-tr"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{colSpan:_.get(e,"cells.length",1),onClick:function(){n&&toggleGroup(c,l,o)},className:"altrp-table-td__grouping altrp-table-td altrp-table-background ".concat(n?s?"altrp-pointer":"altrp-pointer active":""," ")},n?react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span",{className:"altrp-table__collapse-icon ".concat(s?"altrp-table__collapse-icon_collapsed":"")},s?Object(_front_app_src_js_helpers__WEBPACK_IMPORTED_MODULE_9__.J)(i||{assetType:"icon",name:"add"}):Object(_front_app_src_js_helpers__WEBPACK_IMPORTED_MODULE_9__.J)(u||{assetType:"icon",name:"minus"})):null,c)):null}function toggleGroup(e,t,r){-1===r.indexOf(e)?(r.push(e),t(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(r))):t(r=_.filter(r,(function(_){return _!==e})))}function renderFooter(settings,data){var footerColumns=settings.footer_columns||[];return 0===footerColumns.length?null:react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tfoot",{className:"altrp-table-foot"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("tr",{className:"altrp-table-tr"},footerColumns.map((function(footerColumn){var style={textAlign:footerColumn.column_footer_alignment||"left"},content=footerColumn.content;if(-1!==content.indexOf("{{altrphelpers.")){window.altrphelpers.context=data,content=content.replace(/{{/g,"").replace(/}}/g,"");try{content=eval(content)}catch(e){console.log(content),console.error(e),content=""}}else content=Object(_front_app_src_js_helpers__WEBPACK_IMPORTED_MODULE_9__.N)(content);return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("td",{className:"altrp-table-td",key:footerColumn.id,style:style,colSpan:footerColumn.colspan||1},content)}))))}function renderCellActions(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=_.get(e,"column.actions",[]);return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div",{className:"altrp-actions"},r.map((function(e){var r=e.type||"Link",a=Object(_front_app_src_js_helpers__WEBPACK_IMPORTED_MODULE_9__.N)(e.text||""),n=Object(_front_app_src_js_helpers__WEBPACK_IMPORTED_MODULE_9__.E)(e.link,t.original),l={className:"altrp-actions-item altrp-link "+(e.classes||""),style:{},key:(e.id||"")+(t.id||""),title:e.text||""};if(l.style.marginLeft=_.get(e,"spacing.left")?_.get(e,"spacing.left")+_.get(e,"spacing.unit"):null,l.style.marginRight=_.get(e,"spacing.right")?_.get(e,"spacing.right")+_.get(e,"spacing.unit"):null,l.style.marginTop=_.get(e,"spacing.top")?_.get(e,"spacing.top")+_.get(e,"spacing.unit"):null,l.style.marginBottom=_.get(e,"spacing.bottom")?_.get(e,"spacing.bottom")+_.get(e,"spacing.unit"):null,"Link"===r&&(r=react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link,l.to=n),"a"===r&&e.target_blank&&(l.target="_blank"),"a"===r&&(l.href=Object(_front_app_src_js_helpers__WEBPACK_IMPORTED_MODULE_9__.E)(e.link,t.original)),_.get(e,"icon.assetType")){var o=_.get(e,"size.size")?_.get(e,"size.size")+_.get(e,"size.unit","px"):null,c={className:"altrp-actions-item__icon",style:{}};o&&(c.style.width=o,c.style.height=o),a=Object(_front_app_src_js_helpers__WEBPACK_IMPORTED_MODULE_9__.J)(e.icon,c)}return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(r,l,a)})))}__webpack_exports__.default=function(e){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_altrp_query_component_altrp_query_component__WEBPACK_IMPORTED_MODULE_12__.a,e,react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(AltrpTable,null))}}};