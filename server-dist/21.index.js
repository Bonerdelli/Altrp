exports.ids=[21],exports.modules={217:function(t,e,r){"use strict";r.r(e);var o=r(4),n=r.n(o),s=r(5),i=r.n(s),a=r(11),p=r.n(a),c=r(7),l=r.n(c),h=r(8),d=r.n(h),u=r(1),f=r.n(u),b=r(0),g=r.n(b),m=r(12),y=r.n(m),w=r(18),_=r.n(w),v=r(51),O=r.n(v),S=r(111),j=r(6);function E(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function P(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?E(Object(r),!0).forEach((function(e){y()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function z(t){var e=Object(b.useRef)(),r=Object(b.useState)(t.settings.updateSettings||{}),o=_()(r,2),n=o[0],s=o[1],i=Object(b.useState)(!1),a=_()(i,2),p=a[0],c=a[1],l=document.body;t.editor||(l=Object(b.useMemo)((function(){return Object(j.x)()?document.getElementById("editorContent").contentWindow.document.body:document.body})));var h=t.settings.placement,d=["bottom-start","bottom","bottom-end","top-start","top","top-end","left-start","left","left-end","right-start","right","right-end"];-1===d.indexOf(h)&&(console.log(h),h=d[0]);var u=Object(S.usePopper)(t.target.current,e.current,{placement:h,modifiers:[{name:"offset",options:{offset:t.settings.offset}}]}),f=u.styles,m=u.attributes,y=u.forceUpdate;u.update;return Object(b.useEffect)((function(){0!==Object.keys(n).length&&JSON.stringify(n)!==JSON.stringify(t.settings.updateSettings)&&(s(t.settings.updateSettings),y()),!p&&t.target.current&&(console.log("aann"),c(!0))}),[t.children,h,t.target]),t.portal?O.a.createPortal(g.a.cloneElement(t.children,P({ref:e,style:f.popper},m.popper)),l):g.a.cloneElement(t.children,P({ref:e,style:f.popper},m.popper))}var k=r(61);function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,o=f()(t);if(e){var n=f()(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return d()(this,r)}}var N=function(t){l()(r,t);var e=x(r);function r(t){var o;return n()(this,r),(o=e.call(this,t)).state={show:!1},o.show=o.show.bind(p()(o)),o.leaveHide=o.leaveHide.bind(p()(o)),o.enterShow=o.enterShow.bind(p()(o)),o.children=g.a.createRef(),o}return i()(r,[{key:"show",value:function(){var t=this;this.props.settings.show_delay_dropbar_options.size||this.props.settings.hide_delay_dropbar_options.size?this.state.show?setTimeout((function(){t.setState((function(t){return{show:!t.show}}))}),this.props.settings.hide_delay_dropbar_options.size):setTimeout((function(){t.setState((function(t){return{show:!t.show}}))}),this.props.settings.show_delay_dropbar_options.size):this.setState((function(t){return{show:!t.show}}))}},{key:"leaveHide",value:function(){var t=this;this.props.settings.hide_delay_dropbar_options.size?setTimeout((function(){t.setState({show:!1})}),this.props.settings.hide_delay_dropbar_options.size):this.setState({show:!1})}},{key:"enterShow",value:function(t){var e=this;t.currentTarget;this.props.showDelay.size&&!this.state.show?setTimeout((function(){e.setState({show:!0})}),this.props.showDelay.size):this.setState((function(t){return{show:!t.show}}))}},{key:"render",value:function(){var t=g.a.Children.only(this.props.children),e="altrp-dropbar-"+this.props.className,r=this.props.settings.type_dropbar_section||"text",o=this.props.getContent("content_dropbar_section");return g.a.createElement("div",{className:"altrp-dropbar altrp-dropbar-"+e},g.a.createElement("span",{className:"altrp-dropbar-children-wrapper "+e+"-wrapper",onMouseEnter:"hover"===this.props.settings.mode_dropbar_options?this.enterShow:null,onMouseLeave:"hover"===this.props.settings.mode_dropbar_options?this.leaveHide:null},g.a.cloneElement(t,{ref:this.children,onClick:"click"===this.props.settings.mode_dropbar_options?this.show:null}),g.a.createElement(z,{target:this.children,portal:!0,settings:{placement:this.props.settings.position_dropbar_options,offset:[0,this.props.settings.offset_dropbar_options.size],updateSettings:{width:this.props.settings.width_dropbar_options}}},g.a.createElement("div",{className:"altrp-dropbar-container "+" ".concat(this.props.elemenentId,"-altrp-dropbar ")+e+"-containter"+(this.state.show?" altrp-dropbar-container-show":" altrp-dropbar-container-hide")},"text"===r?g.a.createElement("div",{className:"altrp-dropbar-content "+e+"-content",dangerouslySetInnerHTML:{__html:o||""}}):g.a.createElement(k.a,{templateId:this.props.settings.template_dropbar_section,cardModel:this.props.element.getCurrentModel()})))))}}]),r}(b.Component);e.default=N}};