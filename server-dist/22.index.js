exports.ids=[22],exports.modules={208:function(t,e,r){"use strict";r.r(e);var n=r(12),a=r.n(n),o=r(9),i=r.n(o),u=r(18),c=r.n(u),l=r(2),s=r.n(l),f=r(0),p=r.n(f),d=r(75),v=r.n(d),g=r(172);function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function O(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(Object(r),!0).forEach((function(e){a()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var b={fillColor:"#3388ff",fillOpacity:.5,color:"#3388ff"};e.default=function(t){var e=t.settings,r=Object(f.useState)(!1),n=c()(r,2),a=n[0],o=n[1],u=Object(f.useState)({}),l=c()(u,2),d=l[0],y=l[1],m=e.query,j=e.handler,h=e.canvas,w=e.zoom,P=e.lat,S=e.lng,C=e.style_height,E=void 0===C?{}:C,k=e.style_margin,x=void 0===k?{}:k;console.log("settings :>> ",e);var D=Object(f.useCallback)(function(){var t=i()(s.a.mark((function t(e){var r,n,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o(!0),t.next=3,v()(e);case 3:r=t.sent,n=r.data,200===r.status&&n.data?(a={type:"FeatureCollection",features:n.data.map((function(t){return{id:t.id,type:"Feature",properties:O(O({tooltip:t.name},b),t.options),geometry:{type:"Polygon",coordinates:JSON.parse(t.polygon)}}}))},y(a),o(!1)):(o(!1),y({type:"FeatureCollection",features:[]}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[]);return Object(f.useEffect)((function(){var t;if(null!=m&&null!==(t=m.dataSource)&&void 0!==t&&t.value){var e,r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!t)return"";var e=t.split("\n"),r=e.map((function(t){return t.replace("|","=")})).join("&");return"?".concat(r)}(null==m?void 0:m.defaultParams);D((null==m||null===(e=m.dataSource)||void 0===e?void 0:e.value)+r)}}),[m]),p.a.createElement(g.default,{isTransformLatLng:!0,data:d,onTap:function(t){var e=t.target.feature.id,r=j.params.replace("{{id}}",e);"goto"===j.evt?window.open(r,"_blank"):"load"===j.evt&&D(r)},isLoading:a,style:{height:E.size+E.unit,marginTop:x.top+x.unit,marginBottom:x.bottom+x.unit,marginLeft:x.left+x.unit,marginRight:x.right+x.unit},isEditable:!1,preferCanvas:h,zoom:+w,center:[P,S]})}}};