(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{138:function(e,t,r){(e.exports=r(21)(!1)).push([e.i,"",""])},225:function(e,t,r){var n=r(138);"string"==typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=r(22)(n,a);n.locals&&(e.exports=n.locals),e.hot.accept(138,(function(){var t=r(138);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,n=0;for(r in e){if(!t||e[r]!==t[r])return!1;n++}for(r in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},324:function(e,t,r){"use strict";r.r(t);var n=r(100),a=r.n(n),o=r(7),c=r.n(o),l=r(9),i=r.n(l),s=r(12),u=r.n(s),p=r(48),d=r.n(p),f=r(0),m=r.n(f),b=r(223),h=r(161),g=(r(225),r(23)),v=r(8),y=(r(37),r(317)),w=r(17);r(32);function O(){return window.iconsManager||(window.iconsManager=new y.default),window.iconsManager}var j=r(3),E=r.n(j),S=r(4),P=r.n(S),k=r(2),N=r.n(k),C=r(5),D=r.n(C),x=r(6),M=r.n(x),A=r(1),R=r.n(A);function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function K(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=R()(e);if(t){var a=R()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return M()(this,r)}}var V=function(e){D()(o,e);var t,r,n=K(o);function o(e){var t;return E()(this,o),(t=n.call(this,e)).resource=new w.a({route:t.props.route}),t.state={value:t.props.value||"",disabled:!t.props.value},t.changeValue=t.changeValue.bind(N()(t)),t.onChange=t.onChange.bind(N()(t)),t.onKeyDown=t.onKeyDown.bind(N()(t)),t}return P()(o,[{key:"componentDidMount",value:(r=u()(i.a.mark((function e(){var t,r=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===this.props.value){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,this.resource.get(this.props.resourceid);case 4:t=e.sent,this.setState((function(e){return H(H({},e),{},{value:t[r.props.resourceid]||"",disabled:!1})}));case 6:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"onKeyDown",value:function(e){13===e.keyCode&&this.changeValue(e)}},{key:"onChange",value:function(e){var t=e.target.value;this.setState((function(e){return H(H({},e),{},{value:t})})),_.isFunction(this.props.changevalue)&&this.props.changevalue(t)}},{key:"changeValue",value:(t=u()(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.target.value,this.setState((function(e){return H(H({},e),{},{disabled:!0})})),e.next=4,this.resource.put(this.props.resourceid,{value:r,column_value:r});case 4:e.sent,this.setState((function(e){return H(H({},e),{},{disabled:!1})}));case 6:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"render",value:function(){var e=this.props.className;this.state.disabled&&(e+=" pointer-event-none");var t=H({},this.props);return delete t.changevalue,m.a.createElement("input",a()({},t,{className:e,onBlur:this.changeValue,onKeyDown:this.onKeyDown,onChange:this.onChange,value:this.state.value}))}}]),o}(f.Component);function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(e){var t=e.settings,r=e.query,n=e.data;e.currentModel;if(!t.tables_columns||!t.tables_columns.length)return m.a.createElement("div",{children:"Please Add Column"});var o={forceFetchOnMount:!0,refetchOnWindowFocus:!0},c={};t.tables_columns.forEach((function(e){e.column_is_default_sorted&&!c.order_by&&(c.order_by=e.accessor,c.order=_.get(e,"column_is_default_sorted_direction","ASC"))}));var l,s,p,y=Object(f.useState)(1),w=d()(y,2),j=w[0],E=w[1],S=r.getCounterStart(j),P=[],k=Object(f.useState)({}),N=d()(k,2),C=N[0],D=N[1],x=Object(f.useState)(c),M=d()(x,2),A=M[0],R=M[1],I=Object(f.useState)({}),H=d()(I,2),K=H[0],F=H[1],T=Object(f.useState)({}),Q=d()(T,2),z=Q[0],B=Q[1],G=JSON.stringify(K),q=Object(f.useCallback)(function(){var e=u()(i.a.mark((function e(t){var n,a,o,c,l,s=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:1,a=s.length>2?s[2]:void 0,o=s.length>3?s[3]:void 0,c={page:n},l=JSON.stringify(o),a&&(c=_.assign(a,c)),l.length>2&&(c.filters=l),console.log(c),e.abrupt("return",r.getQueried(c));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());if(r.pageSize){var L=Object(h.b)([r.dataSourceName,j,A,K,r.getParams()],q,o),W=L.status,U=L.resolvedData,X=L.latestData,Y=L.error;P=U||P,l=W,s=Y,p=X,Object(f.useEffect)((function(){(null==X?void 0:X.hasMore)&&h.a.prefetchQuery([r.dataSourceName,j+1],q)}),[X,q,j,A,K])}else{var Z=Object(h.c)([r.dataSourceName,r.getParams()],(function(){return r.getResource().getQueried(J(J({},A),{},{filters:G}))}),o),$=Z.status,ee=Z.data,te=Z.error;P=ee,l=$,s=te}var re;re=function(e){var t=[],r=e.tables_columns;return(r=r||[]).forEach((function(e){e.column_name&&e.accessor&&(e._accessor=e.accessor,t.push(e))})),t}(t),P.length||(P=n),_.isArray(P)||(P=[P]),P=P.map((function(e){return e.id===C.rowId?(e[C.column]=C.value,J({},e)):e}));var ne=Object(b.useTable)({columns:m.a.useMemo((function(){return re||[]}),[t.tables_columns]),data:m.a.useMemo((function(){return P||[]}),[P])}),ae=ne.getTableProps,oe=ne.getTableBodyProps,ce=ne.headerGroups,le=ne.rows,ie=ne.prepareRow,se=function(e){R({order_by:e,order:A&&A.order_by===e?"DESC"===A.order?"ASC":"DESC":"ASC"})},ue=function(e,t){E(1);var r=J({},K);t?r[e]=t:delete r[e],F(r)};return m.a.createElement(m.a.Fragment,null,m.a.createElement("table",a()({className:"altrp-table"},ae()),m.a.createElement("thead",{className:"altrp-table-head"},function(e){var t=e.additional_rows;if(!_.isArray(t))return"";return t.map((function(e){return e.additional_cells=e.additional_cells||[],m.a.createElement("tr",{key:"additional-row-".concat(e.id)},e.additional_cells.map((function(t){return t.rowspan=t.rowspan||1,t.colspan=t.colspan||1,m.a.createElement("th",{key:"additional-cell-".concat(e.id,"-").concat(t.id),role:"columnheader",className:"altrp-table-th",colSpan:t.colspan,rowSpan:t.rowspan},t.title)})))}))}(t),ce.map((function(e){return m.a.createElement("tr",a()({},e.getHeaderGroupProps(),{className:"altrp-table-tr"}),e.headers.map((function(e){return function(e){var t=e.column,r=e.sortSetting,n=e.sortingHandler,o=e.filterSetting,c=e.filterHandler,l=t.column_width,i=t.column_header_alignment,s=J({},t.getHeaderProps()),u={};l&&(u.width=l);i&&(u.textAlign=i);s.className="altrp-table-th",t.column_is_sorted&&(s.onClick=function(){return n(t._accessor)},s.className+=" clickable");t.column_width&&(s.width=t.column_width+"%");var p=t.render("column_name");return m.a.createElement("th",a()({},s,{style:u}),p,r&&t.column_is_sorted&&r.order_by===t._accessor&&("DESC"===r.order?O().renderIcon("chevron",{className:"rotate-180 sort-icon "}):O().renderIcon("chevron",{className:"sort-icon"})),t.column_is_filtered&&m.a.createElement("label",{className:"altrp-label"},m.a.createElement("input",{type:"text",onClick:function(e){e.stopPropagation()},onChange:function(e){e.stopPropagation();var r=e.target.value;c(t._accessor,r)},value:o[t._accessor]||"",className:"altrp-field"})))}({column:e,sortSetting:A,sortingHandler:se,filterSetting:K,filterHandler:ue})})))}))),m.a.createElement("tbody",a()({},oe(),{className:"altrp-table-tbody ".concat(t.table_style_table_striple_style?" altrp-table-tbody--striped":"")}),"error"===l?m.a.createElement("tr",null,m.a.createElement("td",null,s.message)):"loading"===l?m.a.createElement("tr",null,m.a.createElement("td",null,"Loading")):le.map((function(e,r){return ie(e),m.a.createElement("tr",a()({},e.getRowProps(),{className:"altrp-table-tr ".concat(t.table_hover_row?"altrp-table-background":"")}),e.cells.map((function(r,n){var o=r.render("Cell"),c=Object(v.b)()?"a":g.b,l=r.column.column_body_alignment?{textAlign:r.column.column_body_alignment}:{},i=J({},r.getCellProps()),s=r.value,u="";if(re[n].column_is_editable&&re[n].column_edit_url){var p=Object(v.e)(re[n].column_edit_url,e.original);u=m.a.createElement(V,{className:"altrp-inherit altrp-table-td__double-click-content",route:p,resourceid:"",changevalue:function(t){D({value:t,rowId:e.original.id,column:re[n]._accessor})},value:s}),i.onDoubleClick=function(){z.column===re[n]._accessor&&z.rowId===e.original.id?B({}):B({column:re[n]._accessor,rowId:e.original.id})}}var d="altrp-table-td";return z.column===re[n]._accessor&&e.original.id===z.rowId&&(d+=" altrp-table-td_double-clicked"),t.table_hover_row||(d+=" altrp-table-background"),_.isObject(r.value)&&(o=""),o=re[n].column_link&&e.original.id?m.a.createElement(c,{to:Object(v.e)(re[n].column_link,e.original),className:"altrp-inherit altrp-table-td__default-content"},o):m.a.createElement("span",{className:"altrp-inherit altrp-table-td__default-content"},o),"##"===r.column._accessor.trim()&&(o=S++),m.a.createElement("td",a()({},i,{className:d,style:l}),o,u)})))})))),"prev-next"===r.paginationType&&r.pageSize?m.a.createElement("div",{className:"altrp-pagination"},m.a.createElement("button",{className:"altrp-pagination__previous",onClick:function(){E((function(e){return Math.max(e-1,0)})),B({}),D({})},disabled:1===j},t.prev_text||"Previous Page"),m.a.createElement("div",{className:"altrp-pagination__count"},t.current_page_text||"Current Page:",j),m.a.createElement("button",{className:"altrp-pagination__next",onClick:function(){D({}),B({}),E((function(e){return p&&p.hasMore?e+1:e}))},disabled:!p||!p.hasMore},t.next_text||"Next Page")):"")}}}]);
//# sourceMappingURL=5e043117086a0a427c3d.bundle.js.map