exports.ids=[15],exports.modules={199:function(e,t,n){(e.exports=n(60)(!1)).push([e.i,'.altrp-field{border-style:solid}.altrp-field-file{display:flex;justify-content:center;flex-wrap:wrap}.altrp-field-file__field{display:none}.altrp-field-file__placeholder{display:none}.altrp-field-file_empty .altrp-field-file__placeholder{display:block;padding:10px 20px;border:none;cursor:pointer;background-color:#343b4c;color:#fff}.input-clear-btn{background:transparent;padding:0;position:absolute;bottom:calc(50% - 7px);right:15px;display:none}.input-clear-btn:hover{font-weight:bold}.altrp-field:hover+.input-clear-btn,.input-clear-btn:hover{display:block}.altrp-input-wrapper,.altrp-field-select2{position:relative;flex-grow:1}.altrp-field-label--required::after{content:"*";color:red;font-size:inherit;padding-left:10px}\n',""])},205:function(e,t,n){"use strict";n.r(t);var r=n(12),a=n.n(r),i=n(4),l=n.n(i),s=n(5),o=n.n(s),c=n(11),p=n.n(c),f=n(7),u=n.n(f),m=n(8),d=n.n(m),h=n(1),g=n.n(h),y=n(0),b=n.n(y),v=(n(199),n(18)),O=n.n(v),j=n(154),k=n(6);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g()(e);if(t){var a=g()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return d()(this,n)}}var P=function(e){u()(n,e);var t=D(n);function n(e){var r;return l()(this,n),(r=t.call(this,e)).labelClick=function(e){Object(k.x)()&&e.preventDefault()},r.deleteItem=function(e,t){e.preventDefault();var n=r.state.files;n.splice(t,1);var a=[];n.length||r.setState((function(e){return E(E({},e),{},{filesForDisplay:a,files:n})})),console.log(n),_.each(n,(function(e){var t=new FileReader;t.readAsDataURL(e),t.onload=function(){a.push({src:t.result,alt:e.name||""}),a.length===n.length&&r.setState((function(e){return E(E({},e),{},{filesForDisplay:a,files:n})}))}})),_.isFunction(r.props.onChange)&&r.props.onChange(n)},r.onChange=function(e){if(!(!e.target.files instanceof FileList)){var t=[],n=r.props.settings.content_accept?r.props.settings.content_accept.split(","):[];_.each(e.target.files,(function(e){n.forEach((function(n){n=(n=n.trim()).replace("*",""),0===e.type.indexOf(n)&&t.push(e)}))}));var a=[];t.length||r.setState((function(e){return E(E({},e),{},{filesForDisplay:a,files:t})})),_.each(t,(function(e){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){a.push({src:n.result,alt:e.name||""}),a.length===t.length&&(console.log(a),r.setState((function(e){return E(E({},e),{},{filesForDisplay:a,files:t})})))}})),_.isFunction(r.props.onChange)&&r.props.onChange(t)}},r.state={filesForDisplay:[],files:[]},r}return o()(n,[{key:"render",value:function(){var e=this,t=this.props.settings.select2_multiple,n=this.props.settings.content_placeholder||"",r=this.state.filesForDisplay,a=this.props.settings.content_accept||"",i=["altrp-field-file"];return r.length||i.push("altrp-field-file_empty"),b.a.createElement("label",{className:i.join(" "),onClick:this.labelClick},b.a.createElement("span",{className:"altrp-field-file__placeholder"},n),b.a.createElement("input",{type:"file",className:"altrp-field-file__field",multiple:t,accept:a,onChange:this.onChange}),b.a.createElement("span",{className:"altrp-field-file-media-list media-list"},Object(k.x)()?b.a.createElement("span",{className:"media-list-item"},Object(j.a)().renderIcon("times",{className:"media-list-item__remove"}),Object(k.J)({},{className:"media-list-item__img"})):r.map((function(t,n){return b.a.createElement("span",{key:n,className:"media-list-item"},Object(j.a)().renderIcon("times",{className:"media-list-item__remove",onClick:function(t){e.deleteItem(t,n)}}),b.a.createElement("img",O()({className:"media-list-item__img"},t)))}))))}}]),n}(y.Component);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g()(e);if(t){var a=g()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return d()(this,n)}}var S=b.a.lazy((function(){return Promise.resolve().then(n.t.bind(null,140,7))})),V=function(e){u()(n,e);var t=R(n);function n(){var e;l()(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={isValid:!0},e.checkValidity=function(t){if(t){var n=e.props.value.replace(/_/g,""),r=!(!n.length||!Object(k.z)(n,t));e.setState((function(e){return x(x({},e),{},{isValid:r})})),_.set(p()(e),"props.element.maskIsValid",r)}},e}return o()(n,[{key:"componentDidUpdate",value:function(e,t){!this.props.value&&this.props.settings.content_mask&&this.state.isValid&&(this.setState((function(e){return x(x({},e),{},{isValid:!1})})),_.set(this,"props.element.maskIsValid",!1))}},{key:"render",value:function(){var e=this,t=this.state.isValid,n=this.props.settings,r=n.content_type,a=n.content_mask,i=n.mask_mismatch_message,l=x({},this.props);switch(r){case"file":return b.a.createElement(P,l)}if(a){var s=a.split("");return s=s.map((function(e){switch(e){case"_":return/\d/;case"*":return/\S/;default:return e}})),l.mask=s,l.guide=!0,l.onBlur=function(t){e.props.onBlur(t),e.checkValidity(s)},l.onChange=function(n){e.props.onChange(n),t||e.checkValidity(s)},b.a.createElement(b.a.Suspense,{fallback:b.a.createElement("input",this.props)},b.a.createElement(S,l),!t&&i&&b.a.createElement("p",{className:"mask-mismatch-message"},i))}return"email"===r&&i&&(l.onBlur=function(t){e.props.onBlur(t),e.setState({isValid:Object(k.V)(t.target.value)})},t||(l.onChange=function(t){e.props.onChange(t),e.setState({isValid:Object(k.V)(t.target.value)})})),b.a.createElement(b.a.Fragment,null,b.a.createElement("input",l),!t&&"email"===r&&i&&b.a.createElement("p",{className:"mask-mismatch-message"},i))}}]),n}(y.Component);t.default=V}};