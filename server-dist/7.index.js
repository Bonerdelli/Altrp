exports.ids=[7,16,17,27],exports.modules={162:function(e,t,n){(e.exports=n(61)(!1)).push([e.i,".altrp-post{width:100%;position:relative;overflow:hidden}.altrp-post.overflow-visible{overflow:visible}.altrp-post>.sections-wrapper{width:auto}.altrp-post>.sections-wrapper .altrp-section{width:100%}.altrp-posts .altrp-post .altrp-section--boxed{padding-left:0;padding-right:0}.altrp-posts .altrp-post .altrp-section--boxed>.altrp-element.altrp-element_column{width:100%}.altrp-post.altrp-post--hover{position:absolute;top:0;transition:transform 0.5s ease-out, opacity 0.5s ease-out}.altrp-post.altrp-post--hover--left{transform:translate(-100%, 0)}.altrp-post.altrp-post--hover--right{transform:translate(100%, 0)}.altrp-post.altrp-post--hover--top{transform:translate(0, -100%)}.altrp-post.altrp-post--hover--bottom{transform:translate(0, 100%)}.altrp-post.altrp-post--hover--fade{opacity:0}.altrp-post.altrp-post--hover--zoom{transform:scale(0)}.altrp-post:hover .altrp-post.altrp-post--hover{transform:scale(1) translate(0, 0);opacity:1}.altrp-widget_posts>.altrp-pagination-pages{justify-content:center}\n",""])},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r=n(16),a=n.n(r),o=n(6);function s(e){var t=e.index,n=e.pageIndex,r=e.gotoPage;return React.createElement("button",{className:"altrp-pagination-pages__item ".concat(t===n?"active":""),onClick:function(){return r(t)}},t+1)}var i,p=n(151),l=n(38),c=n.n(l),u=n(37),d=n.n(u).a.div(i||(i=c()(["\n& .altrp-pagination-pages__item{\n","\n}\n"])),(function(e){var t=e.settings,n="",r=Object(o.s)(t,"width_count_item"),a=Object(o.s)(t,"height_count_item");return r?r.size&&r.unit&&(n+="width: ".concat(r.size).concat(r.unit,";"),n+="padding-left: 0;",n+="padding-right: 0;"):(n+="width: 35px;",n+="padding-left: 0;",n+="padding-right: 0;"),a?a.size&&a.unit&&(n+="height: ".concat(a.size).concat(a.unit,";"),n+="padding-top: 0;",n+="padding-bottom: 0;"):(n+="height: 35px;",n+="padding-top: 0;",n+="padding-bottom: 0;"),n}));function g(e){var t=e.settings,n=e.nextPage,r=e.previousPage,i=e.setPageSize,l=e.pageIndex,c=e.pageCount,u=e.pageSize,g=e.widgetId,h=e.gotoPage,m=t.inner_page_count_options,f=t.inner_page_type,v=t.current_page_text,S=t.inner_page_count,b=t.next_icon,y=t.prev_icon,w=t.first_last_buttons_count,k=t.middle_buttons_count,x=t.posts_pagination_type,E=t.is_with_ellipsis,D=React.useMemo((function(){var e=null;return m&&(e=(e=m.split("\n")).map((function(e){return{value:Number(e),label:Number(e)}}))),e}),[m]),O=React.useMemo((function(){var e=v||"Current Page: {{page}}";return e=e.replace("{{page}}",l+1).replace("{{page_count}}",c),"pages"===f||"pages"===x?React.createElement("div",{className:"altrp-pagination-pages"},c>2*w+k&&w&&k?Object(o.m)(l,c,w,k).map((function(e,t){return"ellipsis"===e?E?React.createElement("div",{key:e+t,className:"altrp-pagination__ellipsis"},"..."):React.createElement("span",null," "):React.createElement(s,{key:e,index:e,pageIndex:l,gotoPage:h})})):a()(Array(c)).map((function(e,t){return React.createElement(s,{key:t,index:t,pageIndex:l,gotoPage:h})}))):e}),[v,l,c,f,S,t]);return"none"===f?null:React.createElement(d,{className:"altrp-pagination",settings:t},!t.hide_pre_page_button&&React.createElement("button",{className:"altrp-pagination__previous",onClick:function(){r()},disabled:0===l},React.createElement("span",{dangerouslySetInnerHTML:{__html:_.isString(t.prev_text)?t.prev_text:"Previous Page"}}),Object(o.K)(y)),!t.hide_pages_buttons_button&&React.createElement("div",{className:"altrp-pagination__count"},O),!t.hide_next_page_button&&React.createElement("button",{className:"altrp-pagination__next",onClick:function(){n()},disabled:c===l+1},React.createElement("span",{dangerouslySetInnerHTML:{__html:_.isString(t.next_text)?t.next_text:"Next Page"}}),Object(o.K)(b)),!t.hide_page_input&&React.createElement("input",{className:"altrp-pagination__goto-page",type:"number",defaultValue:l+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;h(t)}}),!t.hide_pagination_select&&D&&React.createElement(p.a,{className:"altrp-pagination__select-size",options:D,classNamePrefix:g+" altrp-field-select2",value:D.find((function(e){return e.value===u})),isSearchable:!1,onChange:function(e){i(e.value)}}))}},78:function(e,t,n){"use strict";n.r(t);var r=n(9),a=n.n(r),o=n(4),s=n.n(o),i=n(5),p=n.n(i),l=n(2),c=n.n(l),u=n(10),d=n(3),g=n(77),h=function(){function e(){s()(this,e),this.resource=new u.a({route:"/ajax/templates"}),this.templatesCache=new d.a({})}var t,n;return p()(e,[{key:"loadTemplate",value:(n=a()(c.a.mark((function t(n){var r,a,o,s=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=s.length>1&&void 0!==s[1]&&s[1],a=r,n=Number(n)?Number(n):n,a||(a=!this.templatesCache.hasProperty(n)),"loading"!==_.get(e,"statuses.".concat(n))){t.next=6;break}return t.abrupt("return",new Promise((function(t,r){e.pendingCallbacks[n]=e.pendingCallbacks[n]||[],e.pendingCallbacks[n].push(t)})));case 6:if(e.statuses[n]="loading",t.prev=7,o=null,!a){t.next=16;break}return t.next=12,this.resource.get(n);case 12:o=t.sent,this.templatesCache.setProperty(n,o),t.next=17;break;case 16:o=this.templatesCache.getProperty(n);case 17:return _.isArray(e.pendingCallbacks[n])&&e.pendingCallbacks[n].forEach((function(e){e(o)})),e.statuses[n]="loaded",e.pendingCallbacks[n]=[],t.abrupt("return",o);case 23:return t.prev=23,t.t0=t.catch(7),_.isArray(e.pendingCallbacks[n])&&e.pendingCallbacks[n].forEach((function(e){e(null)})),e.statuses[n]="loaded",e.pendingCallbacks[n]=[],t.abrupt("return",null);case 29:case"end":return t.stop()}}),t,this,[[7,23]])}))),function(e){return n.apply(this,arguments)})},{key:"loadParsedTemplate",value:(t=a()(c.a.mark((function e(t){var n,r,a=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.length>1&&void 0!==a[1]&&a[1],t){e.next=3;break}return e.abrupt("return",null);case 3:return t=Number(t)?Number(t):t,e.t0=_,e.next=7,this.loadTemplate(t,n);case 7:return e.t1=e.sent,r=e.t0.get.call(e.t0,e.t1,"data"),r=JSON.parse(r),e.abrupt("return",g.default.parseData(r));case 11:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})}]),e}();h.statuses={},h.pendingCallbacks={},window.templateLoader=new h,t.default=window.templateLoader},80:function(e,t,n){"use strict";n.r(t);var r=n(12),a=n.n(r),o=n(4),s=n.n(o),i=n(5),p=n.n(i),l=n(11),c=n.n(l),u=n(7),d=n.n(u),g=n(8),h=n.n(g),m=n(1),f=n.n(m),v=n(0),S=n.n(v),b=n(24),y=n(19),w=n(6),k=n(32);var x=function(e){return S.a.createElement("div",{className:"altrp-tooltip altrp-tooltip--".concat(e.position)},e.children)},E=n(30);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f()(e);if(t){var a=f()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h()(this,n)}}var R=function(e){d()(n,e);var t=P(n);function n(e){var r;return s()(this,n),(r=t.call(this,e)).updateStore=function(){r.state.currentModel!==appStore.getState().currentModel&&r.setState((function(e){return O(O({},e),{},{currentModel:appStore.getState().currentModel})})),r.state.currentUser!==appStore.getState().currentUser&&r.setState((function(e){return O(O({},e),{},{currentModel:appStore.getState().currentUser})})),r.state.currentDataStorage!==appStore.getState().currentDataStorage&&r.setState((function(e){return O(O({},e),{},{currentDataStorage:appStore.getState().currentDataStorage})}))},r.state={elementDisplay:!r.props.element.getSettings("default_hidden")},r.elementWrapperRef=S.a.createRef(),r.elementRef=S.a.createRef(),appStore.dispatch(Object(k.c)(c()(r))),r}return p()(n,[{key:"componentDidCatch",value:function(e,t){this.setState((function(n){return O(O({},n),{},{error:e,errorInfo:t})}))}},{key:"componentDidMount",value:function(){_.isFunction(this.props.element.update)&&(this.props.element.update(),this.props.element.updateFonts()),this.checkElementDisplay()}},{key:"getStylesHTMLElement",value:function(){return _.get(window,"stylesModule.stylesContainer.current")&&window.stylesModule.stylesContainer.current.getElementsByClassName("altrp-styles".concat(this.props.element.getId()))[0]||null}},{key:"componentDidUpdate",value:function(e,t){if(this.checkElementDisplay(),appStore.getState().currentModel.getProperty("altrpModelUpdated")&&appStore.getState().currentDataStorage.getProperty("currentDataStorageLoaded")&&!Object(w.x)()&&"section"===this.props.element.getName()){var n=appStore.getState().currentTitle;n=Object(w.N)(n),appStore.getState().altrpPage.getProperty("title")!==n&&appStore.dispatch(Object(E.c)("title",n)),Object(w.S)(n)}}},{key:"updateElement",value:function(){this.setState((function(e){return O(O({},e),{},{updateToken:Object(w.d)()})}))}},{key:"checkElementDisplay",value:function(e,t){var n=this.props.element;if(n.getSettings("conditional_other")){var r=n.getSettings("conditions",[]);r=r.map((function(e){return{modelField:e.conditional_model_field,operator:e.conditional_other_operator,value:e.conditional_other_condition_value}}));var a=Object(w.e)(r,"AND"===n.getSettings("conditional_other_display"),this.props.element.getCurrentModel(),!0);this.state.elementDisplay!==a&&this.setState((function(e){return O(O({},e),{},{elementDisplay:a})}))}}},{key:"toggleElementDisplay",value:function(){this.setState((function(e){return O(O({},e),{},{elementDisplay:!e.elementDisplay})}))}},{key:"inputIsDisplay",value:function(){var e=this.state.formsStore,t=this.props.element.getSettings("form_id",""),n=this.props.element.getSettings("form_condition_display_on","AND"),r=this.props.element.getSettings("form_conditions",[]),a=!0;return r.forEach((function(r){"AND"===n?a*=Object(w.a)(_.get(e,"".concat(t,".").concat(r.field_id)),r.value,r.operator):a+=Object(w.a)(_.get(e,"".concat(t,".").concat(r.field_id)),r.value,r.operator)})),a}},{key:"render",value:function(){var e=this.props.element.settings,t=e.hide_on_wide_screen,n=e.hide_on_desktop,r=e.hide_on_laptop,a=e.hide_on_tablet,o=e.hide_on_big_phone,s=e.hide_on_small_phone,i=e.hide_on_trigger,p=e.isFixed,l=e.tooltip_text,c=e.tooltip_position,u="altrp-element altrp-element".concat(this.props.element.getId()," altrp-element_").concat(this.props.element.getType());if(u+=this.props.element.getPrefixClasses()+" ","widget"===this.props.element.getType()&&(u+=" altrp-widget_".concat(this.props.element.getName())),t&&(u+=" hide_on_wide_screen"),n&&(u+=" hide_on_desktop"),r&&(u+=" hide_on_laptop"),a&&(u+=" hide_on_tablet"),o&&(u+=" hide_on_big_phone"),s&&(u+=" hide_on_small_phone"),p&&(u+=" fixed-section"),this.state.errorInfo)return S.a.createElement("div",{className:"altrp-error","data-eltype":this.props.element.getType()},S.a.createElement("h2",null,"Something went wrong."),S.a.createElement("details",{style:{whiteSpace:"pre-wrap"}},this.state.error&&this.state.error.toString(),S.a.createElement("br",null),this.state.errorInfo.componentStack));var d={};this.props.element.getResponsiveSetting("layout_column_width")&&(Number(this.props.element.getResponsiveSetting("layout_column_width"))?d.width=this.props.element.getResponsiveSetting("layout_column_width")+"%":d.width=this.props.element.getResponsiveSetting("layout_column_width")),this.state.elementDisplay||(d.display="none");var g=this.props.element.getSettings("advanced_element_id","");g=Object(w.N)(g,this.props.element.getCurrentModel().getData()),this.CSSId!==g&&(this.CSSId=g);var h=S.a.createElement(this.props.component,{ref:this.elementRef,rootElement:this.props.rootElement,ElementWrapper:this.props.ElementWrapper,element:this.props.element,children:this.props.element.getChildren(),match:this.props.match,currentModel:this.props.currentModel,currentUser:this.props.currentUser,currentDataStorage:this.props.currentDataStorage,altrpresponses:this.props.altrpresponses,formsStore:this.props.formsStore,elementDisplay:this.state.elementDisplay,altrpPageState:this.props.altrpPageState,altrpMeta:this.props.altrpMeta,updateToken:this.state.updateToken,currentScreen:this.props.currentScreen,baseRender:this.props.baseRender,appStore:appStore});return"email"===this.props.element.getTemplateType()?this.state.elementDisplay?S.a.createElement(S.a.Fragment,null,h):null:this.props.hideTriggers.includes(i)?null:S.a.createElement("div",{className:u,ref:this.elementWrapperRef,style:d,id:this.CSSId},h,l&&S.a.createElement(x,{position:c},l))}}]),n}(v.Component);t.default=Object(y.connect)((function(e){return{hideTriggers:e.hideTriggers,altrpresponses:e.altrpresponses,formsStore:e.formsStore,currentDataStorage:e.currentDataStorage,currentModel:e.currentModel,currentUser:e.currentUser,altrpMeta:e.altrpMeta,altrpPageState:e.altrpPageState,currentScreen:e.currentScreen}}),null,null,{forwardRef:!0})(Object(b.withRouter)(R))}};