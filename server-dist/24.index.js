exports.ids=[24],exports.modules={215:function(e,t,n){"use strict";n.r(t),n.d(t,"settingsToColumns",(function(){return be}));var r,a,l,c=n(50),o=n.n(c),i=n(12),s=n.n(i),u=n(20),d=n.n(u),p=n(15),m=n.n(p),g=n(9),f=n.n(g),b=n(18),v=n.n(b),h=n(2),w=n.n(h),y=(n(161),n(111)),O=n.n(y),E=(n(148),n(6)),x=n(24),j=n(201),P=n(83),R=n(145),S=n(150),k=n(155),N=n(112),M=n(0),C=n.n(M),I=n(77),z=n(76),T=n(3),F=n(79),D=n(162),A=n(38),B=n.n(A),G=n(37),H=n.n(G),L=H.a.div(r||(r=B()([""]))),V=n(31),q=H.a.div(a||(a=B()(["",""])),(function(e){var t=e.settings,n=e.column;if(!t.table_transpose)return"";var r=n.column_cell_vertical_alignment,a=n.header_full_width,l=n.header_bg,c=Object(E.s)(t,"table_style_main_width"),o=Object(E.s)(t,"table_style_other_width"),i="&.altrp-table-th.altrp-table-cell{",s=Object(E.s)(t,"cell_vertical_alignment");return s=Object(V.d)(s),r&&(s=Object(V.d)(r)),s&&(i+="\n    display: flex;\n    align-items: ".concat(s,";\n    > span{\n      display: block;\n      width: 100%;\n    }\n    ")),l&&(i+="background-color:".concat(l.color,";")),a&&(i+="\n      grid-column-start: 1;\n      grid-column-end: ".concat(n.filteredRows.length+2,";\n      width: calc(").concat(_.get(c,"size")+(_.get(c,"unit")||"px")," + (").concat(_.get(o,"size")+(_.get(o,"unit")||"px"),") * ").concat(n.filteredRows.length,")\n    ")),i+="\n      width: ".concat(_.get(c,"size")+(_.get(c,"unit")||"px"),"\n    "),i+="}"})),W=n(113),U=n(56),K=H.a.div(l||(l=B()(["",""])),(function(e){var t=e.settings,n=e.column;if(!t.table_transpose)return"";var r=n.column_cell_vertical_alignment,a=n.body_bg,l=n.header_full_width,c=Object(E.s)(t,"table_style_other_width"),o=Object(E.s)(t,"cell_vertical_alignment");o=Object(V.d)(o),r&&(o=Object(V.d)(r));var i="&.altrp-table-td.altrp-table-cell{";return o&&(i+="\n    display: flex;\n    align-items: ".concat(o,";\n    .altrp-table-td__default-content{\n      display: block;\n      width: 100%;\n    }\n    ")),l?"&.altrp-table-td{display:none;}":(a&&(i+="background-color:".concat(a.color,";")),i+="\n  width: ".concat(_.get(c,"size")+(_.get(c,"unit")||"px"),";\n  "),i+="}")}));function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var $=function(e){var t=e.cell,n=e.settings,r=t.row,a=t.column,l=n.resize_columns,c=n.replace_rows,o=n.virtualized_rows,i=n.hide_expanded_row_icon,u=n.expanded_row_icon,p=n.hide_not_expanded_row_icon,m=n.not_expanded_row_icon,g=t.render("Cell");"##"===t.column.id&&(g=t.row.index+1),t.isGrouped?g=React.createElement(React.Fragment,null,React.createElement("span",r.getToggleRowExpandedProps(),r.isExpanded?Object(E.M)(i,u,"👇","expanded-row"):Object(E.M)(p,m,"👉","not-expanded-row"))," ",t.render("Cell")," (",Object(E.H)(r,"subRows"),")"):t.isAggregated?g=t.render("Aggregated"):t.isPlaceholder&&(g=t.render("Cell"));var f=["altrp-table-td","altrp-table-cell"];t.isAggregated&&f.push("altrp-table-td_aggregated"),t.isPlaceholder&&f.push("altrp-table-td_placeholder"),t.isGrouped&&f.push("altrp-table-td_grouped");var b=React.useMemo((function(){var e=t.getCellProps();if(l||o||delete e.style,_.get(t,"column.column_styles_field")){var n=_.get(t,"column.column_styles_field");n=_.get(r.original,n,""),n=Object(E.A)(n,{}),e.style=_.assign(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n),e.style)}return e}),[l,c,o,t.getCellProps().style.width,_.get(t,"column.column_styles_field")]);n.table_hover_row||f.join("altrp-table-background");var v=t.column.column_body_alignment?{textAlign:t.column.column_body_alignment}:{};return v=_.assign(v,b.style||{}),t.column.column_cell_vertical_alignment&&"inherit"!==t.column.column_cell_vertical_alignment&&(v.verticalAlign=t.column.column_cell_vertical_alignment),React.createElement(K,d()({},b,{settings:n,column:a,style:v,className:f.join(" ")}),g)};function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Y,Z=function(e){var t=e.row,n=e.index,r=e.moveRow,a=e.style,l=e.visibleColumns,c=e.cardTemplate,o=e.settings,i=React.useRef(null),s=React.useRef(null),u=X({},t.getRowProps());delete u.role,delete u.style;var p=null,m=o.resize_columns,g=o.replace_rows,f=o.row_expand,_=o.virtualized_rows,b=o.card_template,h=o.replace_text,w=o.replace_image,y=o.replace_width;if(c){var O=z.default.cloneElement(c);O.setCardModel(new T.a(t.original||{})),p=React.createElement(O.componentClass,{element:O,ElementWrapper:F.default,children:O.children})}var E=React.useMemo((function(){var e=t.getRowProps();return m||_||(delete e.style,a={}),g&&(e.ref=i),e}),[m,g,_]),x=Object(U.useDrop)({accept:"row",hover:function(e,t){if(i.current){var a=e.index,l=n;if(a!==l){var c=i.current.getBoundingClientRect(),o=(c.bottom-c.top)/2,s=t.getClientOffset().y-c.top;a<l&&s<o||a>l&&s>o||(r(a,l),e.index=l)}}}}),j=v()(x,2)[1],P=Object(U.useDrag)({item:{type:"row",index:n},collect:function(e){return{isDragging:e.isDragging()}}}),R=v()(P,3),S=R[0].isDragging,k=R[1],N=S?0:1;(0,R[2])(j(i)),k(s);var M=React.useMemo((function(){return m||_?a:{}}),[m,_,t.getRowProps().style.width]);return React.createElement(React.Fragment,u,React.createElement("div",d()({},E,{className:"altrp-table-tr ".concat(S?"altrp-table-tr__dragging":""),style:X(X({},M),{},{opacity:N})}),g&&React.createElement("div",{className:"altrp-table-td replace-text",ref:s,style:{width:y}},h,w&&w.url&&React.createElement("img",{src:w.url,className:"replace-picture"})),t.cells.map((function(e,t){return React.createElement($,{cell:e,key:t,settings:o})}))),t.isExpanded&&f&&b&&c&&React.createElement("div",{className:"altrp-table-tr altrp-posts"},React.createElement("td",{colSpan:l.length+g,className:"altrp-table-td altrp-post"},p)))},ee=H.a.div(Y||(Y=B()(["\n",""])),(function(e){var t,n=e.settings,r=e.groupIndex,a=Object(E.s)(n,"tables_groups"),l=Object(E.s)(n,"tables_settings_for_subheading"),c=_.get(l,r-1,{}).transition;if(!_.isArray(a)||!r)return"";if(!(t=r>a.length?a[a.length-1]:a[r-1]))return"";if(!_.isObject(t))return"";var o=t,i=o.cell_alignment,s=o.padding,u=o.color,d=o.bg_color,p=o.typographic,m="&.altrp-table-tr .altrp-table-td{";null!=c&&c.size&&(m+="transition-duration: ".concat(c.size,"s;")),_.isObject(s)&&(m+=Object(V.a)(s)),_.isObject(p)&&(m+=Object(V.c)(p)),i&&(m+="text-align: ".concat(i,";")),null!=u&&u.color&&(m+="color: ".concat(u.color,";")),null!=d&&d.color&&(m+="background-color: ".concat(d.color,";")),m+="}&.altrp-table-tr .altrp-table-td:hover{";var g=t["cell_alignment_:hover_"],f=t["padding_:hover_"],b=t["color_:hover_"],v=t["bg_color_:hover_"],h=t["typographic_:hover_"];return _.isObject(f)&&(m+=Object(V.a)(f)),_.isObject(h)&&(m+=Object(V.c)(h)),g&&(m+="text-align: ".concat(g,";")),null!=b&&b.color&&(m+="color: ".concat(b.color,";")),null!=v&&v.color&&(m+="background-color: ".concat(v.color,";")),m+="}"}));function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var ne=function e(t){var n=t.prepareRow,r=t.rows,a=t.visibleColumns,l=t.totalColumnsWidth,c=t.moveRow,o=t.settings,i=t.cardTemplate,u=t.groupIndex,p=t.page,m=C.a.useMemo((function(){return Object(E.P)()}),[]),g=o.virtualized_rows,f=o.virtualized_height,b=o.item_size,h=o.tables_settings_for_subheading,w=(o.table_style_table_striple_style,C.a.useCallback((function(e){var t=e.index,l=e.style,s=p?p[t]:r[t];return n(s),C.a.createElement(Z,d()({index:t,row:s,visibleColumns:a,moveRow:c,settings:o,cardTemplate:i},s.getRowProps({style:l})))}),[p,r,a,o,i,c,n])),y=C.a.useMemo((function(){return p?p.length:r.length}),[p,r]),O=C.a.useMemo((function(){var e;if(_.isEmpty(h))return null;var t,n,a=null===(e=h[u])||void 0===e?void 0:e.name;if(!a)return null;if(-1!==a.indexOf("?")&&-1!==a.indexOf(":")){var l=a.split("?")[1].split(":"),c=v()(l,2);t=c[0],n=c[1],t=t.trim(),n=n.trim(),cell.value=cell.value?t:n,a=a.split("?")[0].trim()}var o=[];return(p||r).forEach((function(e){var r,l=o.find((function(t){return t.columnValue===e.original[a]}));r=t||n?e.original[a]?t:n:e.original[a],l||(l={columnValue:r,rows:[]},o.push(l)),l.rows.push(e)})),o}),[h,p,r]);return _.isEmpty(O)?g?C.a.createElement(C.a.Fragment,null,C.a.createElement(W.FixedSizeList,{height:Number(f)||0,itemCount:y,itemSize:Number(b)||0,width:l+m},w)):C.a.createElement(C.a.Fragment,null,(p||r).map((function(e,t){return n(e),C.a.createElement(Z,d()({index:t,row:e,visibleColumns:a,moveRow:c,settings:o,cardTemplate:i},e.getRowProps()))}))):O.map((function(n,r){var l=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t);return l.page=n.rows,l.rows=n.rows,l.groupIndex=u+1,l.key=n.columnValue+r,C.a.createElement(C.a.Fragment,{key:l.key},C.a.createElement(ee,{className:"altrp-table-tr altrp-table-tr_group-subheading",groupIndex:l.groupIndex,settings:o},C.a.createElement("td",{colSpan:a.length||1,className:"altrp-table-td",dangerouslySetInnerHTML:{__html:n.columnValue||"&nbsp;"}})),C.a.createElement(e,l))}))};function re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var ae=function(e){var t=e.settings,n=t.tables_settings_for_subheading,r=t.table_style_table_striple_style,a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?re(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):re(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e);return a.rows=C.a.useMemo((function(){if(_.isEmpty(n))return e.rows;var t=[],r=[];n.forEach((function(e){e.name&&(t.push(e.name),r.push(e.order||"asc"))}))}),[n]),a.groupIndex=0,C.a.createElement("div",d()({},e.getTableBodyProps(),{className:"altrp-table-tbody ".concat(r?"altrp-table-tbody--striped":"")}),C.a.createElement(ne,a))},le=n(173);function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ie(e,t,n){return e.filter((function(e){return t.some((function(t){var r=e.values[t];return n.some((function(e){return!e&&!r||(_.isString(r)||(r+=""),r.includes(e))}))}))}))}function se(e,t,n){return t=t?t[0]:void 0,Object(N.matchSorter)(e,n,{keys:[function(e){var n=e.values[t];return"##"===t&&(n=e.index+1),n}]})}function ue(e,t,n){return t=t?t[0]:void 0,e.filter((function(e){return _.get(e,"values.".concat(t))===n}))}function de(e,t,n){return t=t?t[0]:void 0,e.filter((function(e){return n=n.replace(/\s/g,""),-1!==_.get(e,"values.".concat(t),"").replace(/\s/g,"").indexOf(n)}))}function pe(e){var t=e.settings,n=e.currentScreen,r=e.widgetId,a=(e.query,e.data),l=(e.currentModel,e._status),c=(e._error,e.setSortSettings,e.setFilterSettings,e.filterSetting,e._latestData,e.widgetState);e.sortSetting;function o(e){var t=e.row,n=e.data,r=e.cell,a=e.value,l=e.updateData,c=r.column,o=C.a.useState(a),i=v()(o,2),s=i[0],u=i[1];C.a.useEffect((function(){u(a)}),[a,r]);var d,p,m=c.column_template,g=c.column_is_editable,b=c.column_edit_url,h=c.column_external_link,y=c.column_blank_link,O=c.edit_disabled,P=c.column_cell_content_type,R=c._accessor;if((R=R.trim())&&-1!==R.indexOf("?")&&-1!==R.indexOf(":")){var S=R.split("?")[1].split(":"),k=v()(S,2);d=k[0],p=k[1],d=d.trim(),p=p.trim(),r.value=r.value?d:p}0===R.indexOf('"')&&'"'===R[R.length-1]&&(r.value=R.substring(1,R.length-1));var N=C.a.useState(null),M=v()(N,2),A=M[0],B=M[1],G=C.a.useMemo((function(){return g&&b?Object(E.E)(b,t.original):null}),[b,g,t]);C.a.useEffect((function(){m&&f()(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.default.loadParsedTemplate(m);case 2:t=e.sent,B(t);case 4:case"end":return e.stop()}}),e)})))()}),[m]);var H=r.value,L=Object(E.x)()?"a":x.Link;h&&!Object(E.x)()&&(L="a"),_.isObject(r.value)&&(H="");switch(P){case"email":H=C.a.createElement("a",{href:"mailto:".concat(r.value),className:"altrp-inherit altrp-table-td__default-content",dangerouslySetInnerHTML:{__html:r.value||"&nbsp;"}});break;case"phone":H=C.a.createElement("a",{href:"tel:".concat(r.value),className:"altrp-inherit altrp-table-td__default-content",dangerouslySetInnerHTML:{__html:r.value||"&nbsp;"}});break;default:H=c.column_link?C.a.createElement(L,{to:Object(E.E)(c.column_link,t.original),href:Object(E.E)(c.column_link,t.original),target:y?"_blank":"",className:"altrp-inherit altrp-table-td__default-content",dangerouslySetInnerHTML:{__html:r.value||"&nbsp;"}}):C.a.createElement("span",{href:null,className:"altrp-inherit altrp-table-td__default-content",dangerouslySetInnerHTML:{__html:r.value||"&nbsp;"}})}var V=C.a.useMemo((function(){if(!A)return null;var e=z.default.cloneElement(A);return e.setCardModel(new T.a(t.original||{})),C.a.createElement(e.componentClass,{element:e,ElementWrapper:F.default,children:e.children})}),[A,t.original,n]);return V?C.a.createElement("div",{className:"altrp-posts"},C.a.createElement("div",{className:"altrp-post overflow-visible"},V)):G&&!O?C.a.createElement(D.a,{className:"altrp-inherit",route:G,resourceid:"",changevalue:function(e){u(e)},onBlur:function(e){l(t.index,R,e)},value:s}):_.get(r,"column.actions.length")?Object(j.renderCellActions)(r,t):_.isString(H)?H:C.a.createElement(C.a.Fragment,null,H)}var i=C.a.useRef(c),u=t.inner_page_size,p=t.global_filter,g=t.card_template,b=t.row_expand,h=t.selected_storage,y=t.row_select,R=t.row_select_width,S=t.store_state,N=t.loading_text,M=t.row_select_all,A=t.hide_columns,B=t.resize_columns,G=t.table_transpose,H=t.virtualized_rows,V=t.replace_rows,W=t.tables_settings_for_subheading,U=t.replace_width,K=t.ids_storage,Q=t.hide_grouped_column_icon,$=t.grouped_column_icon,J=t.hide_not_grouped_column_icon,X=t.not_grouped_column_icon,Y=t.checkbox_checked_icon,Z=void 0===Y?{}:Y,ee=t.checkbox_unchecked_icon,te=void 0===ee?{}:ee,ne=t.checkbox_indeterminate_icon,re=void 0===ne?{}:ne,ce=C.a.useState(null),pe=v()(ce,2),ge=pe[0],fe=pe[1],_e=C.a.useState(a),we=v()(_e,2),ye=we[0],Oe=we[1];C.a.useEffect((function(){Oe(a)}),[a]);var Ee=C.a.useMemo((function(){return{fuzzyText:se,fullMatchText:ue,partialMatchText:de,text:function(e,t,n){return t=t?t[0]:void 0,e.filter((function(e){var r=e.values[t];return"##"===t&&(r=e.index+1),void 0===r||String(r).toLowerCase().startsWith(String(n).toLowerCase())}))},between:function(e,t,n){var r=n||[],a=r[0],l=r[1];if((a="number"==typeof a?a:-1/0)>(l="number"==typeof l?l:1/0)){var c=a;a=l,l=c}return e.filter((function(e){return t.some((function(t){var n=e.values[t];return"##"===t&&(n=e.index+1),n>=a&&n<=l}))}))},equals:function(e,t,n){return e.filter((function(e){return t.some((function(t){var r=e.values[t];return"##"===t&&(r=e.index+1),r==n}))}))},includesSome:ie}}),[]),xe=C.a.useMemo((function(){return{Filter:me,width:150,Cell:o}}),[]);C.a.useEffect((function(){a?_.isArray(a)||(a=[a]):a=[]}),[a]);var je=C.a.useMemo((function(){return be(t,r)}),[t,r]);C.a.useEffect((function(){g&&b&&f()(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.default.loadParsedTemplate(g);case 2:t=e.sent,fe(t);case 4:case"end":return e.stop()}}),e)})))()}),[b,g]);var Pe=[P.useFilters,P.useGlobalFilter,P.useGroupBy,P.useSortBy,P.useExpanded,P.usePagination,P.useRowSelect,P.useResizeColumns,P.useBlockLayout];y&&Pe.push((function(e){e.visibleColumns.push((function(e){return[{id:"selection",column_width:R||0,column_name:function(e){var n=e.getToggleAllRowsSelectedProps,r=e.getToggleAllPageRowsSelectedProps;return!t.inner_page_size||t.inner_page_size<0||M?C.a.createElement("div",{className:"altrp-toggle-row"},C.a.createElement(ve,d()({},n(),{icons:{checkedIcon:Z,uncheckedIcon:te,indeterminateIcon:re}}))):C.a.createElement("div",{className:"altrp-toggle-row"},C.a.createElement(ve,d()({},r(),{icons:{checkedIcon:Z,uncheckedIcon:te,indeterminateIcon:re}})))},Cell:function(e){var t=e.row;return C.a.createElement("div",{className:"altrp-toggle-row"},C.a.createElement(ve,d()({},t.getToggleRowSelectedProps(),{icons:{checkedIcon:Z,uncheckedIcon:te,indeterminateIcon:re}})))}}].concat(m()(e))}))}));var Re=C.a.useState(!1),Se=v()(Re,2),ke=Se[0],Ne=Se[1],Me=function(e,t,n){Ne(!0),Oe((function(r){return r.map((function(a,l){return l===e?oe(oe({},r[e]),{},s()({},t,n)):a}))}))},Ce=C.a.useCallback((function(e){return e.id}),[]),Ie=C.a.useMemo((function(){var e={columns:je,data:ye,filterTypes:Ee,autoResetPage:!ke,defaultColumn:xe,updateData:Me};if(V&&(e.getRowId=Ce),Object(E.x)()&&(e.initialState=u>=1?{pageSize:Number(u)}:{pageSize:a.length}),_.isArray(e.data)||(_.isObject(e.data)?e.data=[e.data]:e.data=[]),!_.isEmpty(W)){var t=W.map((function(e){return{id:e.name,desc:"DESC"===e.order}}));_.set(e,"initialState.sortBy",t)}return e}),[u,a,je,i,ye,V,ke,W]);C.a.useEffect((function(){_.isObject(i.current)&&(Ie.initialState=i.current)}),[i,a]);var ze=P.useTable.apply(void 0,[Ie].concat(Pe)),Te=ze.getTableProps,Fe=ze.getTableBodyProps,De=ze.headerGroups,Ae=ze.prepareRow,Be=ze.page,Ge=(ze.canPreviousPage,ze.canNextPage,ze.pageOptions,ze.pageCount),He=ze.gotoPage,Le=ze.nextPage,Ve=ze.previousPage,qe=ze.getToggleHideAllColumnsProps,We=ze.allColumns,Ue=ze.rows,Ke=ze.visibleColumns,Qe=ze.preGlobalFilteredRows,$e=ze.setGlobalFilter,Je=ze.setPageSize,Xe=ze.selectedFlatRows,Ye=ze.totalColumnsWidth,Ze=ze.state,et=Ze.pageIndex,tt=Ze.globalFilter,nt=(Ze.groupBy,Ze.selectedRowIds,Ze.expanded,Ze.pageSize);function rt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=[];return _.isEmpty(e)||e.forEach((function(e){e.original&&(t?n.push(_.get(e.original,t)):n.push(e.original)),e.subRows&&(n=_.concat(n,rt(e.subRows)))})),n}C.a.useEffect((function(){S&&Object(E.U)(r,Ze)})),C.a.useEffect((function(){Je&&(Number(u)&&!Number(u<1)||Je(a.length||10),Je(Number(u)||a.length||10))}),[u,a]);var at=C.a.useMemo((function(){return rt(Xe)}),[Xe]),lt=C.a.useMemo((function(){return rt(Xe,"id")}),[Xe]);C.a.useEffect((function(){!h||_.isEqual(altrpHelpers.getDataByPath(h),at)||Object(E.x)()||Object(E.R)(h,at)}),[Xe]),C.a.useEffect((function(){!K||_.isEqual(altrpHelpers.getDataByPath(K),lt)||Object(E.x)()||Object(E.R)(K,lt)}),[Xe]);var ct=C.a.useMemo((function(){var e=null;return u&&u>=1&&(e={settings:t,nextPage:Le,previousPage:Ve,pageIndex:et,pageCount:Ge,pageSize:nt,setPageSize:Je,widgetId:r,gotoPage:He}),e}),[u,nt,Ge,et,t]),ot=C.a.useRef(null);return C.a.createElement(C.a.Fragment,null,A&&C.a.createElement("div",{className:"altrp-table-hidden"},C.a.createElement("div",{className:"altrp-table-hidden__all"},C.a.createElement(ve,qe())," Toggle All"),We.map((function(e){return["expander","selection"].indexOf(e.id)>=0?null:C.a.createElement("div",{key:e.id,className:"altrp-table-hidden__column"},C.a.createElement("label",null,C.a.createElement("input",d()({type:"checkbox"},e.getToggleHiddenProps()))," ",e.column_name||e.id,e.id))})),C.a.createElement("br",null)),C.a.createElement(L,d()({className:"altrp-table altrp-table_columns-"+je.length,ReactTable:ze,currentScreen:n,settings:t,table:ot,ref:ot},Te()),C.a.createElement("div",{className:"altrp-table-head"},Object(j.renderAdditionalRows)(t),De.map((function(e){var n=e.getHeaderGroupProps();return B||H||delete n.style,C.a.createElement("div",d()({},n,{className:"altrp-table-tr"}),V&&C.a.createElement("div",{className:"altrp-table-th altrp-table-cell",style:{width:U}}),e.headers.map((function(e,n){var r=e.column_width,a=e.column_header_alignment,l=e.getHeaderProps(e.getSortByToggleProps());l.settings=t;var c=oe(oe({},e.getResizerProps()),{},{onClick:function(e){e.stopPropagation()}});B||H||(l.style={},r&&(l.style.width=r+"%"),a&&(l.style.textAlign=a));var o=e.render("column_name");return _.isString(o)&&(o=C.a.createElement("span",{dangerouslySetInnerHTML:{__html:e.render("column_name")||"&nbsp;"}})),G&&_.unset(l,"style.width"),C.a.createElement(q,d()({},l,{column:e,className:"altrp-table-th altrp-table-cell",key:n}),o,e.canGroupBy?C.a.createElement("span",d()({},e.getGroupByToggleProps(),{className:"altrp-table-th__group-toggle"}),e.isGrouped?Object(E.M)(J,X," 🛑 ","not-grouped-column"):Object(E.M)(Q,$," 👊 ","grouped-column")):null,e.isSorted?e.isSortedDesc?Object(k.a)().renderIcon("chevron",{className:"rotate-180 sort-icon "}):Object(k.a)().renderIcon("chevron",{className:"sort-icon"}):"",e.column_is_filtered&&C.a.createElement("label",{className:"altrp-label altrp-label_".concat(e.column_filter_type),onClick:function(e){e.stopPropagation()}},e.render("Filter")),B&&C.a.createElement("div",d()({},c,{className:"altrp-table__resizer ".concat(e.isResizing?"altrp-table__resizer_resizing":"")})))})))})),p&&C.a.createElement("div",{className:"altrp-table-tr"},C.a.createElement("th",{className:"altrp-table-th altrp-table-th_global-filter altrp-table-cell",role:"cell",colSpan:Ke.length+V,style:{textAlign:"left"}},C.a.createElement(he,{widgetId:r,preGlobalFilteredRows:Qe,globalFilter:tt,setGlobalFilter:$e,settings:t})))),"success"===l?C.a.createElement(ae,{getTableBodyProps:Fe,prepareRow:Ae,totalColumnsWidth:Ye,rows:Ue,visibleColumns:Ke,moveRow:function(e,t){var n=ye[e];Oe(O()(ye,{$splice:[[e,1],[t,0,n]]}))},settings:t,page:Be,cardTemplate:ge}):C.a.createElement("div",null,C.a.createElement("div",{className:"altrp-table-tr altrp-table-tr_loading"},C.a.createElement("div",{className:"altrp-table-td altrp-table-td_loading",colSpan:Ke.length+V},"loading"===l&&N||null)))),ct&&C.a.createElement(le.a,ct))}function me(e,t){var n=e.column,r=n.filterValue,a=n.preFilteredRows,l=n.setFilter,c=n.filter_placeholder,o=(n.column_filter_type,n.column_is_filtered,a.length);return c=c?c.replace("{{count}}",o):"Search ".concat(o," records..."),C.a.createElement("input",{value:r||"",className:"altrp-field",onChange:function(e){l(e.target.value||void 0)},placeholder:c})}function ge(e){var t=e.column,n=(t.filterValue,t.setFilter),r=t.preFilteredRows,a=t.id,l=t.filter_placeholder,c=e.widgetId,o=C.a.useMemo((function(){var e=new Set;return r.forEach((function(t){e.add(t.values[a])})),m()(e.values()).map((function(e){return{value:e,label:e+""}}))}),[a,r]);return C.a.createElement(S.a,{options:o,isMulti:!0,placeholder:l||"Select some...",className:"altrp-table__filter-select",classNamePrefix:c+" altrp-field-select2",onChange:function(e){_.isArray(e)||(e=[]);var t=e.map((function(e){return e.value}));n(t)}})}function fe(e){var t=e.column,n=t.filterValue,r=t.setFilter,a=t.preFilteredRows,l=t.id,c=t.filter_button_text,o=C.a.useMemo((function(){var e=a.length?a[0].values[l]:0;"##"===l&&a.length&&(e=a[0].index);var t=e,n=e;return a.forEach((function(e){var r=e.values[l];"##"===l&&(r=e.index),t=Math.min(r,t),n=Math.max(r,n)})),[t,n]}),[l,a]),i=v()(o,2),s=i[0],u=i[1],d=c||"Off";return C.a.createElement(C.a.Fragment,null,C.a.createElement("input",{type:"range",className:"altrp-field",min:s,max:u,value:n||s,onChange:function(e){r(parseInt(e.target.value,10))}}),C.a.createElement("button",{className:"altrp-btn ".concat(void 0!==n?"active":""),onClick:function(){return r(void 0)}},d))}function _e(e){var t=e.column,n=t.filterValue,r=void 0===n?[]:n,a=t.preFilteredRows,l=t.setFilter,c=t.filter_max_placeholder,o=t.filter_min_placeholder,i=t.id,s=C.a.useMemo((function(){var e=a.length?a[0].values[i]:0;"##"===i&&a.length&&(e=a[0].index);var t=e,n=e;return a.forEach((function(e){var r=e.values[i];"##"===i&&(r=e.index),t=Math.min(r,t),n=Math.max(r,n)})),[t,n]}),[i,a]),u=v()(s,2),d=u[0],p=u[1],m=o||"Min (".concat(d,")"),g=c||"Max (".concat(p,")");return C.a.createElement("div",{className:"altrp-filter-group",style:{display:"flex"}},C.a.createElement("input",{value:r[0]||"",type:"number",className:"altrp-field",onChange:function(e){var t=e.target.value;l((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[t?parseInt(t,10):void 0,e[1]]}))},placeholder:m,style:{width:"70px",marginRight:"0.5rem"}}),"to",C.a.createElement("input",{value:r[1]||"",type:"number",className:"altrp-field",onChange:function(e){var t=e.target.value;l((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[e[0],t?parseInt(t,10):void 0]}))},placeholder:g,style:{width:"70px",marginLeft:"0.5rem"}}))}function be(e,t){var n=[],r=e.tables_columns,a=e.card_template,l=e.row_expand,c=e.virtualized_rows,o=e.resize_columns,i=e.hide_expanded_row_icon,s=e.expanded_row_icon,u=e.hide_not_expanded_row_icon,p=e.edit_disabled,m=e.not_expanded_row_icon;r=r||[];var g=(Object(E.s)(e,"columns_order")||"").trim();if(g=g?g.split(","):[],r.forEach((function(e){if(e.actions&&e.actions.length||e.accessor){if(e.edit_disabled=p,e._accessor=e.accessor,e.accessor&&-1!==e.accessor.indexOf("?")&&-1!==e.accessor.indexOf(":")&&(e.accessor=e.accessor.split("?")[0].trim()),e.column_name=e.column_name||"&nbsp;",e.column_is_filtered)switch(e.filter="fuzzyText",e.column_filter_type){case"min_max":e.filter="between",e.Filter=_e;break;case"slider":e.filter="equals",e.Filter=fe;break;case"select":e.filter="includesSome",e.Filter=function(e){var n=e.column;return C.a.createElement(ge,{column:n,widgetId:t})};break;case"text":switch(e.column_text_filter_type){case"full_match":e.filter="fullMatchText";break;case"partial_match":e.filter="partialMatchText"}}if(e.canGroupBy=!!e.group_by,e.disableSortBy=!e.column_is_sorted,e.aggregate){var r=e.aggregate_template||"{{value}} Unique Names";e.Aggregated=function(e){var t=e.value;return r.replace(/{{value}}/g,t)}}(c||o)&&(e.width=Number(e.column_width)||150),n.push(e)}})),e.row_expand&&n.unshift({id:"expander",column_name:function(e){var t=e.getToggleAllRowsExpandedProps,n=e.isAllRowsExpanded;return C.a.createElement("span",d()({},t(),{className:"altrp-table__all-row-expander"}),n?Object(E.M)(i,s,"👇","expanded-row"):Object(E.M)(u,m,"👉","not-expanded-row"))},Cell:function(e){var t=e.row;return a&&l||t.canExpand?C.a.createElement("span",d()({className:"altrp-table__row-expander"},t.getToggleRowExpandedProps({style:{paddingLeft:"".concat(2*t.depth,"rem")}})),t.isExpanded?Object(E.M)(i,s,"👇","expanded-row"):Object(E.M)(u,m,"👉","not-expanded-row")):null}}),g.length){var f=[];g.forEach((function(e){e=parseInt(e)-1,n[e]&&-1===f.indexOf(n[e])&&f.push(n[e])})),n=f}return n}ie.autoRemove=function(e){return!e||!e.length},se.autoRemove=function(e){return!e},ue.autoRemove=function(e){return!e},de.autoRemove=function(e){return!e};var ve=C.a.forwardRef((function(e,t){var n=e.indeterminate,r=e.icons,a=o()(e,["indeterminate","icons"]),l=C.a.useRef(),c=t||l;C.a.useEffect((function(){c.current.indeterminate=n}),[c,n]);var i=r.checkedIcon.name?a.checked?r.checkedIcon:n?r.indeterminateIcon:r.uncheckedIcon:null;return C.a.createElement("label",{className:"check-icon--"+(a.checked?"checked":n?"indeterminate":"unchecked")},i&&Object(E.K)(i),C.a.createElement("input",d()({type:"checkbox",ref:c},a,{className:i?"hidden":""})))}));function he(e){var t=e.preGlobalFilteredRows,n=e.globalFilter,r=e.setGlobalFilter,a=e.widgetId,l=e.settings,c=l.global_filter_placeholder,o=l.global_filter_label,i=t.length,s=C.a.useState(n),u=v()(s,2),d=u[0],p=u[1],m=Object(P.useAsyncDebounce)((function(e){r(e||void 0)}),200),g=o||"Search:".concat(" "),f=c||"".concat(i," records...");return f=f.replace(/{{count}}/g,i),C.a.createElement("div",{className:"altrp-table-global-filter"},C.a.createElement("label",{htmlFor:"altrp-table-global-filter".concat(a),dangerouslySetInnerHTML:{__html:g}}),C.a.createElement("input",{id:"altrp-table-global-filter".concat(a),value:d||"",onChange:function(e){p(e.target.value),m(e.target.value)},placeholder:f}))}t.default=function(e){if("datasource"===(e=oe({},e)).settings.choose_datasource){var t=C.a.useMemo((function(){return e.settings.inner_page_size>0?100:10}),[e.settings.inner_page_size]);return e._status="success",Object(E.x)()&&((e=oe({},e)).settings=oe({},e.settings),e.data=Array.from({length:t},(function(){return{}})),Object(E.Q)(e.data)),C.a.createElement(pe,e)}return C.a.createElement(R.a,e,C.a.createElement(pe,null))}}};