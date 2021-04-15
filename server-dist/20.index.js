exports.ids=[20],exports.modules={210:function(e,l,o){"use strict";o.r(l);var a=o(15),r=o.n(a),t=o(12),i=o.n(t),n=o(0),u=o.n(n),d=o(28),c=o.n(d),s=o(163),v=o(165),k=o(167),p=o(169),b=o(170),m=o(142),y=o(6),M=o(17),x=o.n(M);l.default=function(e){var l,o,a,t,n,d,M,h,g=e.settings,C=e.id,S=null==g?void 0:g.isCustomColor,f=null==g||null===(l=g.customScheme)||void 0===l?void 0:l.map((function(e){return x.a.get(e,"color.colorPickedHex")})),L=null==g?void 0:g.yScaleMax,w=null==g?void 0:g.axisY,D=null==g||null===(o=g.repTooltips)||void 0===o?void 0:o.map((function(e){var l;return{label:x.a.get(e,"label"),field:x.a.get(e,"value"),color:null===(l=x.a.get(e,"color"))||void 0===l?void 0:l.colorPickedHex}})),V=null==g?void 0:g.customTooltip,Y=(null==w?void 0:w.map((function(e){var l=Object(y.q)(e.yMarkerValue);return{axis:"y",value:Number(null!==l?l:e.yMarkerValue),lineStyle:{stroke:null!=e.yMarkerColor?e.yMarkerColor.colorPickedHex:"#000000",strokeWidth:e.yMarkerWidth},textStyle:{fill:null!=e.yMarkerLabelColor?e.yMarkerLabelColor.colorPickedHex:"#000000"},legend:e.yMarkerLabel,legendOrientation:e.yMarkerOrientation}})))||[],R=null==g?void 0:g.axisX,A=(null==R?void 0:R.map((function(e){var l=Object(y.q)(e.xMarkerValue);return{axis:"x",value:null!==l?l:e.xMarkerIsDate?c()(e.xMarkerValue).format("DD.MM.YYYY"):e.xMarkerValue,lineStyle:{stroke:null!=e.xMarkerColor?e.xMarkerColor.colorPickedHex:"#000000",strokeWidth:e.xMarkerWidth},textStyle:{fill:null!=e.xMarkerLabelColor?e.xMarkerLabelColor.colorPickedHex:"#000000"},legend:e.xMarkerLabel,legendOrientation:e.xMarkerOrientation}})))||[],G=[];A.length>0&&(G.push(A),G=G.flat()),Y.length>0&&(G.push(Y),G=G.flat());var O,W=null===(a=g.query)||void 0===a||null===(t=a.dataSource)||void 0===t?void 0:t.value,P=g.isMultiple,_=g.isCustomColors,T=g.key_is_date,q=null==g?void 0:g.sort,E=null==g?void 0:g.tickRotation,H=null==g?void 0:g.bottomAxis,I=null==g?void 0:g.enableGridX,X=null==g?void 0:g.enableGridY,z=(null==g?void 0:g.xScaleType)||"point",N=(null==g?void 0:g.precision)||"month",j=(null==g?void 0:g.curve)||"line",B=null==g?void 0:g.lineWidth,F=null==g?void 0:g.colorScheme,J=null==g?void 0:g.enableArea,K=null==g?void 0:g.enablePoints,Q=null==g?void 0:g.pointSize,U=null==g?void 0:g.pointColor,Z=null==g?void 0:g.yMarker,$=null==g?void 0:g.yMarkerValue,ee=null==g?void 0:g.yMarkerOrientation,le=null==g?void 0:g.yMarkerColor,oe=null==g?void 0:g.yMarkerWidth,ae=null==g?void 0:g.yMarkerLabel,re=null==g?void 0:g.yMarkerLabelColor,te=null==g?void 0:g.xMarker,ie=T?c()(null==g?void 0:g.xMarkerValueDate).toDate():null==g?void 0:g.xMarkerValue,ne=null==g?void 0:g.xMarkerOrientation,ue=null==g?void 0:g.xMarkerColor,de=null==g?void 0:g.xMarkerWidth,ce=null==g?void 0:g.xMarkerLabel,se=null==g?void 0:g.xMarkerLabelColor,ve=null==g?void 0:g.layout,ke=null==g?void 0:g.groupMode,pe=null==g?void 0:g.reverse,be=null==g?void 0:g.borderRadius,me=null==g?void 0:g.borderWidth,ye=null==g?void 0:g.enableLabel,Me=null==g?void 0:g.padding,xe=null==g?void 0:g.innerRadius,he=null==g?void 0:g.enableSliceLabels,ge=null==g?void 0:g.padAngle,Ce=null==g?void 0:g.cornerRadius,Se=null==g?void 0:g.sortByValue,fe=null==g?void 0:g.enableRadialLabels,Le=[],we=function(e,l){return e.map((function(e){var o,a=x.a.get(e,l.key),r=c()(a).isValid()?c()(a).format("DD.MM.YYYY"):a,t=void 0!==D?null==D?void 0:D.map((function(l){return{label:null==l?void 0:l.label,value:x.a.get(e,l.field),color:null==l?void 0:l.color}})):[];switch(g.type){case m.b:case m.e:case m.d:return{y:Number(x.a.get(e,l.data)),x:T?r:a,tooltip:t};case m.a:var n=T?r:a;return o={},i()(o,n,Number(x.a.get(e,l.data))),i()(o,"key",n),i()(o,"value",Number(x.a.get(e,l.data))),i()(o,"tooltip",t),o;case m.c:return{value:Number(x.a.get(e,l.data)),id:T?r:a,tooltip:t}}}))};if(P)Le=x.a.cloneDeep(g.rep,[]).map((function(e){var l=Object(y.q)(e.path,[]);return l.length>0&&(g.type!==m.b&&g.type!==m.c||(l=x.a.uniqBy(l,e.key)),l=we(l,e)),g.type===m.c||g.type===m.a?l:{id:e.title||e.path,data:l}})),(g.type===m.c||g.type===m.a)&&(Le=(O=[]).concat.apply(O,r()(Le)));else if(null!=g.datasource_path)try{Le=Object(y.q)(g.datasource_path,[]),console.log("===================================="),console.log(Le),console.log("===================================="),g.type===m.b&&(Le=x.a.uniqBy(Le,g.key_name));var De={key:g.key_name,data:g.data_name};Le=g.type===m.c||g.type===m.a?we(Le,De):[{id:g.datasource_title||g.datasource_path,data:we(Le,De)}]}catch(e){console.log("===================================="),console.log(e),console.log("===================================="),Le=[{id:g.datasource_title||g.datasource_path,data:[]}]}if(_)var Ve=x.a.cloneDeep(g.repcolor,[]).map((function(e){return e.color.colorPickedHex}));if(!W&&0===Le.length)return u.a.createElement("div",{className:"altrp-chart ".concat(g.legendPosition)},"Идет загрузка данных...");var Ye={source:W+function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!e)return"";var l=e.split("\n"),o=l.map((function(e){return e.replace("|","=")})).join("&");return"?".concat(o)}(null===(n=g.query)||void 0===n?void 0:n.defaultParams),options:{colorScheme:g.colorScheme,legend:g.legend,animated:g.animated,isVertical:g.isVertical},filter:{}};switch(g.type){case m.b:return u.a.createElement(k.a,{widgetID:C,useCustomTooltips:V,yScaleMax:L,customColorSchemeChecker:S,customColors:f,widget:Ye,dataSource:Le,keyIsDate:T,xScaleType:z,precision:N,curve:j,colorScheme:F,enableArea:J,enablePoints:K,lineWidth:B,pointColor:U,pointSize:Q,yMarker:Z,yMarkerValue:$,yMarkerOrientation:ee,yMarkerColor:le,yMarkerWidth:oe,yMarkerLabel:ae,xMarker:te,xMarkerValue:ie,xMarkerOrientation:ne,xMarkerColor:ue,xMarkerWidth:de,xMarkerLabel:ce,yMarkerLabelColor:re,xMarkerLabelColor:se,constantsAxises:G,sort:q,tickRotation:E,bottomAxis:H,enableGridX:I,enableGridY:X});case m.d:return u.a.createElement(b.a,{widgetID:C,useCustomTooltips:V,yScaleMax:L,customColorSchemeChecker:S,customColors:f,dataSource:Le,constantsAxises:G,colorScheme:F,widget:Ye,nodeSize:Q,xScaleType:z,precision:N,sort:q,tickRotation:E,bottomAxis:H,enableGridX:I,enableGridY:X});case m.a:return u.a.createElement(s.a,{widgetID:C,useCustomTooltips:V,yScaleMax:L,customColorSchemeChecker:S,customColors:f,isMultiple:P,colorScheme:F,dataSource:Le,widget:Ye,enableLabel:ye,width:null===(d=g.width)||void 0===d?void 0:d.size,layout:ve,groupMode:ke,reverse:pe,borderRadius:be,borderWidth:me,padding:Me,sort:q,tickRotation:E,bottomAxis:H,enableGridX:I,enableGridY:X});case m.c:return u.a.createElement(v.a,{widgetID:C,useCustomTooltips:V,yScaleMax:L,customColorSchemeChecker:S,customColors:f,isMultiple:P,dataSource:Le,colorScheme:F,widget:Ye,width:null===(M=g.width)||void 0===M?void 0:M.size,innerRadius:xe,enableSliceLabels:he,padAngle:ge,cornerRadius:Ce,sortByValue:Se,enableRadialLabels:fe,sort:q,tickRotation:E,bottomAxis:H,enableGridX:I,enableGridY:X});case m.e:return u.a.createElement(p.a,{widgetID:C,useCustomTooltips:V,isCustomColor:_,colorArray:Ve,isMultiple:P,dataSource:Le,widget:Ye,width:null===(h=g.width)||void 0===h?void 0:h.size,sort:q,tickRotation:E,bottomAxis:H,enableGridX:I,enableGridY:X});default:return u.a.createElement(u.a.Fragment,null)}}}};