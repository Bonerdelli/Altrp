(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{398:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.text;return a.a.createElement("div",{className:"spinner-container"},a.a.createElement("div",{className:"spinner-container__text"},t||"Нет данных"))}},399:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(9),a=n.n(r),c=n(12),l=n.n(c),i=n(103),o=n.n(i),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).reduce((function(t,n,r){return[t,0===r?"?":"&",n=encodeURIComponent(n),"=",encodeURIComponent(e[n])].join("")}),"")},s=function(){var e=l()(a.a.mark((function e(t,n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u(n),e.prev=1,e.next=4,o()(t+r);case 4:return e.abrupt("return",e.sent);case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",{status:500});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}()},403:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(){return a.a.createElement("div",{className:"spinner-container"},a.a.createElement("div",{className:"spinner-border",style:{width:"3rem",height:"3rem"},role:"status"},a.a.createElement("span",{className:"sr-only"},"Loading...")))}},446:function(e,t,n){"use strict";var r=n(9),a=n.n(r),c=n(12),l=n.n(c),i=n(34),o=n.n(i),u=n(0),s=n.n(u),d=n(402),m=n(403),p=n(398),f=n(399);t.a=function(e){var t,n=e.widget,r=e.width,c=void 0===r?300:r,i=e.height,b=void 0===i?300:i,E=Object(u.useState)(!1),g=o()(E,2),O=g[0],v=g[1],h=Object(u.useState)([]),y=o()(h,2),w=y[0],j=y[1],k=Object(u.useCallback)(l()(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,Object(f.a)(n.source,n.filter);case 3:200===(t=e.sent).status&&(j(t.data.data),v(!1));case 5:case"end":return e.stop()}}),e)}))),[n]);if(Object(u.useEffect)((function(){k()}),[k]),O)return s.a.createElement(m.a,null);if(0===w.length)return s.a.createElement(p.a,null);var P=w.map((function(e,t){return s.a.createElement(d.DiscreteLegendEntry,{key:t,className:"discrete__legend-item",label:"".concat(e.key," (").concat(e.data,")")})}));return s.a.createElement(s.a.Fragment,null,s.a.createElement(d.BarChart,{height:b,width:c,data:w,series:s.a.createElement(d.BarSeries,{colorScheme:n.options.colorScheme,bar:s.a.createElement(d.Bar,{gradient:s.a.createElement(d.Gradient,{stops:[s.a.createElement(d.GradientStop,{stopOpacity:1})]})})})}),(null===(t=n.options)||void 0===t?void 0:t.legend)&&s.a.createElement(d.DiscreteLegend,{className:"discrete__legend",orientation:n.options.legend,entries:P}))}},459:function(e,t,n){"use strict";var r=n(9),a=n.n(r),c=n(12),l=n.n(c),i=n(34),o=n.n(i),u=n(0),s=n.n(u),d=n(402),m=n(403),p=n(398),f=n(399);t.a=function(e){var t,n=e.widget,r=e.width,c=void 0===r?300:r,i=e.height,b=void 0===i?300:i,E=Object(u.useState)(!1),g=o()(E,2),O=g[0],v=g[1],h=Object(u.useState)([]),y=o()(h,2),w=y[0],j=y[1],k=Object(u.useCallback)(l()(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,Object(f.a)(n.source,n.filter);case 3:200===(t=e.sent).status&&(j(t.data.data||[]),v(!1));case 5:case"end":return e.stop()}}),e)}))),[n]);if(Object(u.useEffect)((function(){k()}),[k]),O)return s.a.createElement(m.a,null);if(!w||0===w.length)return s.a.createElement(p.a,null);var P=w.map((function(e,t){return s.a.createElement(d.DiscreteLegendEntry,{key:t,className:"discrete__legend-item",label:"".concat(e.key," (").concat(e.data,")")})}));return s.a.createElement(s.a.Fragment,null,s.a.createElement(d.PieChart,{height:b,width:c,data:w||[],series:s.a.createElement(d.PieArcSeries,{explode:n.options.explode,colorScheme:n.options.colorScheme,label:s.a.createElement(d.PieArcLabel,{fontSize:12,fontFill:"#000000"})})}),(null===(t=n.options)||void 0===t?void 0:t.legend)&&s.a.createElement(d.DiscreteLegend,{className:"discrete__legend",orientation:n.options.legend,entries:P}))}},460:function(e,t,n){"use strict";var r=n(9),a=n.n(r),c=n(12),l=n.n(c),i=n(34),o=n.n(i),u=n(0),s=n.n(u),d=n(402),m=n(435),p=n(438),f=n(437),b=n(403),E=n(398),g=n(399);t.a=function(e){var t=e.widget,n=e.width,r=void 0===n?300:n,c=e.height,i=void 0===c?300:c,O=e.strokeWidth,v=void 0===O?3:O,h=Object(u.useState)(!1),y=o()(h,2),w=y[0],j=y[1],k=Object(u.useState)([]),P=o()(k,2),S=P[0],x=P[1],D=Object(u.useCallback)(l()(a.a.mark((function e(){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,Object(g.a)(t.source,t.filter);case 3:200===(n=e.sent).status&&(r=n.data.data.map((function(e){var t=new Date(e.key);if(t)return{key:t,data:e.data}})),x(r),j(!1));case 5:case"end":return e.stop()}}),e)}))),[t]);return Object(u.useEffect)((function(){D()}),[D]),w?s.a.createElement(b.a,null):0===S.length?s.a.createElement(E.a,null):s.a.createElement(s.a.Fragment,null,s.a.createElement(d.LineChart,{height:i,width:r,data:S,xAxis:s.a.createElement(d.LinearXAxis,{type:"time",tickSeries:s.a.createElement(d.LinearXAxisTickSeries,{label:s.a.createElement(d.LinearXAxisTickLabel,{format:function(e){var t=S.slice().shift(),n=S.slice().pop(),r=parseInt(Object(p.a)(t.key,n.key,{unit:"month"}));return r>=0&&r<=12?Object(m.a)(e,"d MMM",{locale:f.a}):Object(m.a)(e,"d MMM yy",{locale:f.a})}})})}),series:s.a.createElement(d.LineSeries,{line:s.a.createElement(d.Line,{strokeWidth:v}),colorScheme:t.colorScheme})}))}},461:function(e,t,n){"use strict";var r=n(9),a=n.n(r),c=n(12),l=n.n(c),i=n(34),o=n.n(i),u=n(0),s=n.n(u),d=n(403),m=n(398),p=n(399),f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"desc";return function(n,r){if(!n.hasOwnProperty(e)||!r.hasOwnProperty(e))return 0;var a="string"==typeof n[e]?n[e].toUpperCase():n[e],c="string"==typeof r[e]?r[e].toUpperCase():r[e],l=0;return a>c?l=1:a<c&&(l=-1),"desc"===t?-1*l:l}};t.a=function(e){var t=e.widget,n=Object(u.useState)([]),r=o()(n,2),c=r[0],i=r[1],b=Object(u.useState)(!1),E=o()(b,2),g=E[0],O=E[1],v=Object(u.useCallback)(l()(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,Object(p.a)(t.source,t.filter);case 3:200===(n=e.sent).status&&(i(n.data.data.sort(f("data"))),O(!1));case 5:case"end":return e.stop()}}),e)}))),[t]),h=Object(u.useMemo)((function(){return c.reduce((function(e,t){return e+t.data}),0)}),[c]);return Object(u.useEffect)((function(){v()}),[v]),g?s.a.createElement(d.a,null):0===c.length?s.a.createElement(m.a,null):t.options.isVertical?s.a.createElement("div",{className:"widget-table"},s.a.createElement("table",{className:"vertical-table"},s.a.createElement("tbody",null,c.map((function(e,t){return s.a.createElement("tr",{key:t},s.a.createElement("td",null,e.key),s.a.createElement("td",null,e.data))})),s.a.createElement("tr",null,s.a.createElement("td",null,"ИТОГО"),s.a.createElement("td",null,h))))):s.a.createElement("div",{className:"widget-table"},s.a.createElement("table",null,s.a.createElement("thead",null,s.a.createElement("tr",null,c.map((function(e,t){return s.a.createElement("th",{key:t},e.key)})),s.a.createElement("th",null,"ИТОГО"))),s.a.createElement("tbody",null,s.a.createElement("tr",null,c.map((function(e,t){return s.a.createElement("td",{key:t},e.data)})),s.a.createElement("td",null,h)))))}},462:function(e,t,n){"use strict";var r=n(9),a=n.n(r),c=n(12),l=n.n(c),i=n(34),o=n.n(i),u=n(0),s=n.n(u),d=n(402),m=n(403),p=n(398),f=n(399);t.a=function(e){var t,n=e.widget,r=e.width,c=void 0===r?300:r,i=e.height,b=void 0===i?300:i,E=Object(u.useState)([]),g=o()(E,2),O=g[0],v=g[1],h=Object(u.useState)(!1),y=o()(h,2),w=y[0],j=y[1],k=Object(u.useCallback)(l()(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,Object(f.a)(n.source,n.filter);case 3:200===(t=e.sent).status&&(v(t.data.data),j(!1));case 5:case"end":return e.stop()}}),e)}))),[n]);if(Object(u.useEffect)((function(){k()}),[k]),w)return s.a.createElement(m.a,null);if(0===O.length)return s.a.createElement(p.a,null);var P=O.map((function(e,t){return s.a.createElement(d.DiscreteLegendEntry,{key:t,className:"discrete__legend-item",label:"".concat(e.key," (").concat(e.data,")")})}));return s.a.createElement(s.a.Fragment,null,s.a.createElement(d.PieChart,{height:b,width:c,data:O,series:s.a.createElement(d.PieArcSeries,{doughnut:!0,colorScheme:n.options.colorScheme,label:s.a.createElement(d.PieArcLabel,{fontSize:12,fontFill:"#000000"})})}),(null===(t=n.options)||void 0===t?void 0:t.legend)&&s.a.createElement(d.DiscreteLegend,{className:"discrete__legend",orientation:n.options.legend,entries:P}))}},467:function(e,t,n){"use strict";var r=n(9),a=n.n(r),c=n(12),l=n.n(c),i=n(34),o=n.n(i),u=n(0),s=n.n(u),d=n(402),m=n(435),p=n(438),f=n(437),b=function(){return s.a.createElement("div",{className:"spinner-container"},s.a.createElement("div",{className:"spinner-border",style:{width:"3rem",height:"3rem"},role:"status"},s.a.createElement("span",{className:"sr-only"},"Loading...")))},E=n(398),g=n(399);t.a=function(e){var t=e.widget,n=e.width,r=void 0===n?300:n,c=e.height,i=void 0===c?300:c,O=e.color,v=void 0===O?"#FFD51F":O,h=Object(u.useState)([]),y=o()(h,2),w=y[0],j=y[1],k=Object(u.useState)(!1),P=o()(k,2),S=P[0],x=P[1],D=Object(u.useCallback)(l()(a.a.mark((function e(){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,Object(g.a)(t.source,t.filter);case 3:200===(n=e.sent).status&&"string"!=typeof n.data&&(r=n.data.data.map((function(e){var t=new Date(e.key);if(t)return{key:t,data:e.data}})),j(r),x(!1));case 5:case"end":return e.stop()}}),e)}))),[t]);return Object(u.useEffect)((function(){D()}),[D]),S?s.a.createElement(b,null):Array.isArray(w)&&0!==w.length?s.a.createElement(s.a.Fragment,null,s.a.createElement(d.AreaChart,{height:i,width:r,data:w,xAxis:s.a.createElement(d.LinearXAxis,{type:"time",tickSeries:s.a.createElement(d.LinearXAxisTickSeries,{label:s.a.createElement(d.LinearXAxisTickLabel,{format:function(e){var t=w.slice().shift(),n=w.slice().pop(),r=parseInt(Object(p.a)(t.key,n.key,{unit:"month"}));return r>=0&&r<=12?Object(m.a)(e,"d LLL",{locale:f.a}):Object(m.a)(e,"d MMM yy",{locale:f.a})}})})}),series:s.a.createElement(d.AreaSeries,{type:t.options.type||"standard",markLine:s.a.createElement(d.MarkLine,{strokeWidth:0}),line:s.a.createElement(d.Line,{strokeWidth:0}),area:s.a.createElement(d.Area,{gradient:s.a.createElement(d.Gradient,{color:v,stops:[s.a.createElement(d.GradientStop,{color:v})]})})})})):s.a.createElement(E.a,null)}},607:function(e,t,n){"use strict";n.r(t);var r=n(33),a=n.n(r),c=n(9),l=n.n(c),i=n(7),o=n.n(i),u=n(12),s=n.n(u),d=n(34),m=n.n(d),p=n(0),f=n.n(p),b=n(103),E=n.n(b),g=n(416),O=n(465),v=n(499),h=n(104),y=n(446),w=n(459),j=n(467),k=n(460),P=n(461),S=n(462),x=function(e){var t=e.widget,n=e.width,r=void 0===n?360:n,a=e.height,c=void 0===a?300:a;switch(t.type){case h.b:return f.a.createElement(y.a,{width:r,height:c,widget:t});case h.e:return f.a.createElement(w.a,{width:r,height:c,widget:t});case h.c:return f.a.createElement(S.a,{width:r,height:c,widget:t});case h.d:return f.a.createElement(k.a,{width:r,height:c,widget:t});case h.f:return f.a.createElement(P.a,{width:r,height:c,widget:t});case h.a:return f.a.createElement(j.a,{width:r,height:c,widget:t});default:return f.a.createElement(f.a.Fragment,null)}};function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var L=function(e){var t=e.widget,n=e.setWidget,r=e.allowedTypes;return f.a.createElement(g.a.Group,null,f.a.createElement(g.a.Label,null,"Тип виджета"),f.a.createElement(g.a.Control,{as:"select",custom:!0,value:t.type,onChange:function(e){return n(C(C({},t),{},{type:e.target.value}))}},r.map((function(e,t){return f.a.createElement("option",{key:t,value:e},Object(h.g)(e))}))))};function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=function(e){var t=e.widget,n=e.setWidget;return f.a.createElement(g.a.Group,null,f.a.createElement(g.a.Label,null,"Легенда"),f.a.createElement(g.a.Control,{as:"select",custom:!0,value:t.options.legend,onChange:function(e){return n(A(A({},t),{},{options:A(A({},t.options),{},{legend:e.target.value})}))},required:!0},f.a.createElement("option",{value:""},"Не показывать"),f.a.createElement("option",{value:"horizontal"},"Горизонтальная"),f.a.createElement("option",{value:"vertical"},"Вертикальная")))};function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var q=function(e){var t=e.widget,n=e.setWidget,r=e.sources;return f.a.createElement(g.a.Group,null,f.a.createElement(g.a.Label,null,"Источник данных"),f.a.createElement(g.a.Control,{as:"select",custom:!0,value:t.source,onChange:function(e){return n(F(F({},t),{},{source:e.target.value}))},required:!0},f.a.createElement("option",{value:""},"-"),r.map((function(e){var t=e.url,n=e.name;return f.a.createElement("option",{key:t,value:t},n)}))))},M=n(402);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var I=function(e){var t=e.widget,n=e.setWidget,r=Object.keys(M.schemes).map((function(e){return{label:e,value:e}}));return f.a.createElement(g.a.Group,null,f.a.createElement(g.a.Label,null,"Цветовая схема"),f.a.createElement(g.a.Control,{as:"select",custom:!0,value:t.options.colorScheme,onChange:function(e){return n(G(G({},t),{},{options:G(G({},t.options),{},{colorScheme:e.target.value})}))},required:!0},r.map((function(e){var t=e.label,n=e.value;return f.a.createElement("option",{key:n,value:n},t)}))))};function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var X=function(e){var t,n,r,a=e.id,c=e.onAdd,i=e.setIsShow,o=e.sources,u=Object(p.useState)({type:h.f,source:"",options:{isVertical:!1,legend:""}}),d=m()(u,2),b=d[0],y=d[1],w=Object(p.useRef)(""),j=function(){var e=s()(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=B(B({},b),{},{title:w.current.value,options:JSON.stringify(b.options),filter:JSON.stringify({})}),e.next=3,E.a.post("/ajax/dashboards/".concat(a),t);case 3:200===(n=e.sent).status&&(c(n.data),i(!1));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return f.a.createElement(O.a,null,f.a.createElement(O.a.Header,null,f.a.createElement(O.a.Title,null,"Добавить виджет")),f.a.createElement(O.a.Body,null,f.a.createElement(g.a,null,f.a.createElement(g.a.Group,null,f.a.createElement(g.a.Label,null,"Название виджета"),f.a.createElement(g.a.Control,{type:"text",ref:w,onFocus:function(e){"Новый виджет"===e.target.value&&(w.current.value="")},onBlur:function(e){""===e.target.value&&(w.current.value="Новый виджет")},defaultValue:"Новый виджет",required:!0})),f.a.createElement(q,{widget:b,setWidget:y,sources:o.map((function(e){return{name:e.label,url:"/ajax/models/queries/".concat(e.model,"/").concat(e.value)}}))}),f.a.createElement(L,{widget:b,setWidget:y,allowedTypes:(t=b.source,r=o.find((function(e){return t==="/ajax/models/queries/".concat(e.model,"/").concat(e.value)})),(null==r||null===(n=r.types)||void 0===n?void 0:n.map((function(e){return e.value})))||[])}),f.a.createElement(I,{widget:b,setWidget:y}),f.a.createElement(_,{widget:b,setWidget:y})),f.a.createElement("div",{className:"widget-placeholder"},b.source&&f.a.createElement(x,{widget:b,width:360,height:360}))),f.a.createElement(O.a.Footer,null,f.a.createElement(v.a,{variant:"secondary",onClick:function(){return i(!1)}},"Закрыть"),f.a.createElement(v.a,{variant:"warning",onClick:j,disabled:""===b.source},"Сохранить изменения")))},R=f.a.memo(X),U=n(593),V=n(594);function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var K=function(e){var t,n,r,a=e.data,c=e.onEdited,i=e.setIsEdit,o=e.sources,u=Object(p.useState)(a),d=m()(u,2),b=d[0],E=d[1],h=Object(p.useRef)(b.title),y=function(){var e=s()(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(H(H({},b),{},{title:h.current.value})),i(!1);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return f.a.createElement(O.a,null,f.a.createElement(O.a.Header,null,f.a.createElement(O.a.Title,null,"Редактировать виджет")),f.a.createElement(O.a.Body,null,f.a.createElement(g.a,null,f.a.createElement(g.a.Group,null,f.a.createElement(g.a.Label,null,"Название виджета"),f.a.createElement(g.a.Control,{type:"text",ref:h,defaultValue:b.title,required:!0})),f.a.createElement(q,{widget:b,setWidget:E,sources:o.map((function(e){return{name:e.label,url:"/ajax/models/queries/".concat(e.model,"/").concat(e.value)}}))}),f.a.createElement(L,{widget:b,setWidget:E,allowedTypes:(t=b.source,r=o.find((function(e){return t==="/ajax/models/queries/".concat(e.model,"/").concat(e.value)})),(null==r||null===(n=r.types)||void 0===n?void 0:n.map((function(e){return e.value})))||[])}),f.a.createElement(I,{widget:b,setWidget:E}),f.a.createElement(_,{widget:b,setWidget:E})),f.a.createElement("div",{className:"widget-placeholder"},b.source&&f.a.createElement(x,{widget:b,width:360,height:360}))),f.a.createElement(O.a.Footer,null,f.a.createElement(v.a,{variant:"secondary",onClick:function(){return i(!1)}},"Закрыть"),f.a.createElement(v.a,{variant:"warning",onClick:y,disabled:""===b.source},"Сохранить изменения")))},Q=f.a.memo(K);var Y=function(e){var t=e.widget,n=e.onDeleted,r=e.onEdited,a=e.sources,c=Object(p.useState)(!1),l=m()(c,2),i=l[0],o=l[1];return f.a.createElement(O.a,{key:t.id},f.a.createElement(O.a.Header,null,f.a.createElement(O.a.Title,null,t.title),f.a.createElement(O.a.Title,null,f.a.createElement("button",{type:"button",title:"Настроить виджет",onClick:function(){return o(!i)}},f.a.createElement(U.a,null)),f.a.createElement("button",{type:"button",title:"Удалить виджет",onClick:function(){return n(t)}},f.a.createElement(V.a,null)))),f.a.createElement(O.a.Body,null,i?f.a.createElement(Q,{sources:a,data:t,onEdited:r,setIsEdit:o}):f.a.createElement(x,{widget:t,width:360,height:300})))};function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e){var t=e.id,n=e.settings,r=Object(p.useState)([]),c=m()(r,2),i=c[0],o=c[1],u=Object(p.useState)(!1),d=m()(u,2),b=d[0],g=d[1];console.log("settings :>> ",n);var O=Object(p.useCallback)(function(){var e=s()(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E()("/ajax/dashboards/".concat(t));case 3:200===(n=e.sent).status&&o(n.data.map((function(e){return $($({},e),{},{options:JSON.parse(e.options),filter:JSON.parse(e.filter)})}))),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),[t]),v=function(e){o(i.filter((function(t){return t.id!==e.id}))),E.a.delete("/ajax/dashboards/".concat(e.id))},h=function(e){o(i.map((function(t){return t.id===e.id?e:t}))),E.a.put("/ajax/dashboards/".concat(e.id),$($({},e),{},{options:JSON.stringify(e.options),filter:JSON.stringify(e.filter)}))};return Object(p.useEffect)((function(){O(t)}),[t]),f.a.createElement("div",{className:"altrp-dashboard"},f.a.createElement("div",{className:"altrp-dashboard__controls"},f.a.createElement("button",{onClick:function(){return g(!0)}},"Добавить виджет")),f.a.createElement("div",{className:"altrp-dashboard__widgets"},b&&f.a.createElement(R,{sources:n.sql,id:t,setIsShow:g,onAdd:function(e){o([e].concat(a()(i)))}}),i.map((function(e){return f.a.createElement(Y,{sources:n.sql,key:e.id,widget:e,onDeleted:v,onEdited:h})}))))}}}]);
//# sourceMappingURL=f215f5d11297cb9a140d.bundle.js.map