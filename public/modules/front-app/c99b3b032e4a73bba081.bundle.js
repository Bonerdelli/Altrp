(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{105:function(e,t,r){"use strict";r.r(t);var s=r(1),n=r.n(s),i=r(2),a=r.n(i),o=r(10),u=r.n(o),l=r(14),h=r.n(l),c=r(18),f=function(){function e(t,r){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"POST";n()(this,e),this.formId=t,this.fields=[],this.method=s,this.modelName=r;var i="/ajax/models/".concat(r);this.resource=new c.a({route:i})}var t;return a()(e,[{key:"setFields",value:function(e){this.fields=e}},{key:"addField",value:function(e){return this.fields.push(e),!0}},{key:"submit",value:(t=h()(u.a.mark((function e(t){var s,n,i=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=!0,this.fields.forEach((function(e){e.fieldValidate()||(s=!1)})),!s){e.next=23;break}e.t0=this.method,e.next="POST"===e.t0?6:"PUT"===e.t0?9:"DELETE"===e.t0?16:21;break;case 6:return e.next=8,this.resource.post(this.getData());case 8:return e.abrupt("return",e.sent);case 9:if(!t){e.next=15;break}return e.next=12,this.resource.put(t,this.getData());case 12:return n=e.sent,Promise.resolve().then(r.bind(null,27)).then((function(e){e.default.updateModelWithData(i.modelName,t,n[i.modelName])})),e.abrupt("return",n);case 15:console.error("Не удалось получить ИД модели для удаления!");case 16:if(!t){e.next=20;break}return e.next=19,this.resource.delete(t);case 19:return e.abrupt("return",e.sent);case 20:console.error("Не удалось получить ИД модели для удаления!");case 21:e.next=26;break;case 23:return e.next=25,alert("Валидация не прошла");case 25:return e.abrupt("return",e.sent);case 26:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"getData",value:function(){var e={};return this.fields.forEach((function(t){null!==t.getValue()&&(e[t.getSettings("field_id")]=t.getValue())})),console.log(e),e}}]),e}(),d=new(function(){function e(){n()(this,e),this.forms=[],this.formIds=[],this.fieldsStorage={}}return a()(e,[{key:"registerForm",value:function(e,t,r){var s=this.getForm(e);return s||(s=new f(e,t,r),this.fieldsStorage[e]&&this.fieldsStorage[e].length&&(s.setFields(this.fieldsStorage[e]),delete this.fieldsStorage[e]),this.forms.push(s)),s}},{key:"addField",value:function(e,t){var r=this.getForm(e);return r?r.addField(t):(this.fieldsStorage[e]=this.fieldsStorage[e]||[],this.fieldsStorage[e].push(t),!0)}},{key:"submitForm",value:function(e,t){return this.getForm(e)?this.getForm(e).submit(t):(console.error("Форма не найдена"),!1)}},{key:"getForm",value:function(e){var t=null;return this.forms.forEach((function(r){r.formId===e&&(t=r)})),t}}]),e}());t.default=d}}]);
//# sourceMappingURL=c99b3b032e4a73bba081.bundle.js.map