exports.ids=[25],exports.modules={206:function(e,t,n){"use strict";n.r(t);var r=n(4),o=n.n(r),i=n(5),a=n.n(i),u=n(7),l=n.n(u),s=n(8),c=n.n(s),d=n(1),f=n.n(d),p=n(0),h=n.n(p),g=n(109),m=n(110),y=n.n(m),b=n(10),x=function(){function e(t){o()(this,e),this.loader=t,this.resource=new b.a({route:"/admin/ajax/media"})}return a()(e,[{key:"upload",value:function(){var e=this;return new Promise((function(t,n){e.loader.file.then((function(n){e.resource.postFiles([n]).then((function(e){t({default:e[0].url})}))}))}))}}]),e}();function v(e){e.plugins.get("FileRepository").createUploadAdapter=function(e){return new x(e)}}function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f()(e);if(t){var o=f()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c()(this,n)}}var C=["heading","undo","redo","bold","italic","blockQuote","indent","outdent","link","numberedList","bulletedList","imageTextAlternative","imageUpload","mediaEmbed","insertTable","tableColumn","tableRow","mergeTableCells"],E=function(e){l()(n,e);var t=R(n);function n(e){return o()(this,n),t.call(this,e)}return a()(n,[{key:"render",value:function(){var e=this;return this.props.textWidget?h.a.createElement(h.a.Fragment,null,h.a.createElement(g.CKEditor,{config:{extraPlugins:[v],toolbar:C},editor:y.a,disabled:!this.props.readOnly,data:this.props.text||"Type text here",onReady:function(e){console.log("Editor is ready to use!",e)},onChange:function(t,n){return e.props.changeText(n.getData())}})):h.a.createElement(g.CKEditor,{config:{extraPlugins:[v],toolbar:C},editor:y.a,data:this.props.text||"Type text here",disabled:this.props.readOnly,onReady:function(e){console.log("Editor is ready to use!",e)},onChange:function(t,n){return e.props.onChange(t,n)},onBlur:function(t,n){return e.props.onBlur(t,n)}})}}]),n}(p.Component);t.default=E}};