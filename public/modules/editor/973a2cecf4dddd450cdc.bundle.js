(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{393:function(e,t,n){(e.exports=n(87)(!1)).push([e.i,"",""])},415:function(e,t,n){var r=n(393);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},l=n(88)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(393,(function(){var t=n(393);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");l(t)})),e.hot.dispose((function(){l()}))},424:function(e,t,n){"use strict";n.r(t);var r=n(4),o=n.n(r),l=n(5),c=n.n(l),a=n(2),i=n.n(a),s=n(6),u=n.n(s),m=n(7),f=n.n(m),p=n(3),d=n.n(p),h=n(0),y=n.n(h),v=n(175),E=n(171),w=n(14),g=n(17);n(42);function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d()(e);if(t){var o=d()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f()(this,n)}}var S=function(e){u()(n,e);var t=b(n);function n(){return o()(this,n),t.apply(this,arguments)}return c()(n,[{key:"onDragOver",value:function(e){return e.preventDefault(),e.stopPropagation(),!1}},{key:"onDragEnter",value:function(e){return e.preventDefault(),e.stopPropagation(),!1}},{key:"onDrop",value:function(e){var t=e.dataTransfer.getData("text/plain");return e.preventDefault(),e.stopPropagation(),Object(w.c)().modules.templateDataStorage.addWidgetInSection(t),!1}},{key:"render",value:function(){return y.a.createElement("div",{className:"new-section",onDragOver:this.onDragOver,onDragEnter:this.onDragEnter,onDrop:this.onDrop,"data-element-type":"new-section"},y.a.createElement("div",{className:"new-section-buttons d-flex"},y.a.createElement("button",{draggable:"true",className:"new-section__button new-section__button_add d-flex "},y.a.createElement(v.a,null)),y.a.createElement("button",{className:"new-section__button new-section__button_library d-flex"},y.a.createElement(E.a,null))),y.a.createElement("div",{className:"new-section__text"},"Drag widget here"))}}]),n}(h.Component),k=n(11),D=n(69),C=n(10),I=n.n(C),R=n(49),O=n.n(R);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){I()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d()(e);if(t){var o=d()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f()(this,n)}}var x=function(e){u()(n,e);var t=j(n);function n(e){var r;return o()(this,n),(r=t.call(this,e)).state={elementStyles:[]},window.stylesModule=i()(r),window.stylesModuleResolve(i()(r)),r}return c()(n,[{key:"addElementStyles",value:function(e,t){if(t){var n=!1,r=O()(this.state.elementStyles);r.forEach((function(r){r.elementId===e&&(n=!0,r.styles=t)})),n||r.push({elementId:e,styles:t}),this.setState(N(N({},this.state),{},{elementStyles:r}))}}},{key:"render",value:function(){return y.a.createElement("div",{className:"styles-container"},this.state.elementStyles.map((function(e){return y.a.createElement("style",{"data-styles-id":e.elementId,key:e.elementId},e.styles)})))}}]),n}(h.Component),_=n(89),T=(n(415),n(48));function A(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d()(e);if(t){var o=d()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f()(this,n)}}var M=function(e){u()(n,e);var t=A(n);function n(e){var r;return o()(this,n),(r=t.call(this,e)).onSelectItem=r.onSelectItem.bind(i()(r)),r.deleteElement=r.deleteElement.bind(i()(r)),r.duplicateElement=r.duplicateElement.bind(i()(r)),r.addNewColumn=r.addNewColumn.bind(i()(r)),r}return c()(n,[{key:"onSelectItem",value:function(e){console.log(e)}},{key:"deleteElement",value:function(){this.props.element.deleteThisElement()}},{key:"addNewColumn",value:function(){this.props.element.insertSiblingAfter(new T.a)}},{key:"duplicateElement",value:function(){this.props.element.duplicate()}},{key:"showDeleteItem",value:function(){return!this.props.element.getType||"column"!==this.props.element.getType()||this.props.element.canDeleteThis()}},{key:"showAddNewColumnItem",value:function(){return!this.props.element.getType||"column"===this.props.element.getType()}},{key:"render",value:function(){var e=this.props.element.getTitle?this.props.element.getTitle():"";return y.a.createElement(_.Menu,{id:"element-menu"},y.a.createElement(_.Item,{onClick:this.onSelectItem},"Edit ",e),y.a.createElement(_.Separator,null),y.a.createElement(_.Item,{onClick:this.onSelectItem},"Copy"),y.a.createElement(_.Item,{onClick:this.duplicateElement},"Duplicate ",e),y.a.createElement(_.Item,{onClick:this.onSelectItem},"Paste"),y.a.createElement(_.Separator,null),y.a.createElement(_.Item,{onClick:this.onSelectItem},"Reset Styles"),y.a.createElement(_.Item,{onClick:this.onSelectItem},"Copy Styles"),y.a.createElement(_.Item,{disabled:!0,onClick:this.onSelectItem},"Paste Styles"),this.showAddNewColumnItem()?y.a.createElement(_.Separator,null):"",this.showAddNewColumnItem()?y.a.createElement(_.Item,{onClick:this.addNewColumn},"Add New Column"):"",y.a.createElement(_.Separator,null),y.a.createElement(_.Item,{onClick:this.onSelectItem},"Navigator"),this.showDeleteItem()?y.a.createElement(_.Item,{onClick:this.deleteElement},"Delete ",e):"")}}]),n}(h.Component);var W=Object(k.b)((function(e){return{element:e.currentContextElement.currentElement}}))(M);function J(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d()(e);if(t){var o=d()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f()(this,n)}}var L=function(e){u()(n,e);var t=J(n);function n(e){var r;return o()(this,n),(r=t.call(this,e)).state={},r.editorWindow=y.a.createRef(),g.a.subscribe(r.currentElementListener.bind(i()(r))),window.altrpEditorContent=i()(r),r}return c()(n,[{key:"currentElementListener",value:function(e){var t=g.a.getState().currentElement.currentElement;t instanceof D.a&&t!==this.state.rootElement&&this.setState({rootElement:t})}},{key:"componentDidMount",value:function(){var e=Object(w.c)().modules.templateDataStorage.getRootElement();this.setState({rootElement:e})}},{key:"onClick",value:function(){_.contextMenu.hideAll()}},{key:"render",value:function(){return y.a.createElement(k.a,{store:g.a},y.a.createElement("div",{className:"editor-content d-flex flex-column justify-center align-content-center",onClick:this.onClick,ref:this.editorWindow},this.state.rootElement?y.a.createElement(this.state.rootElement.componentClass,{children:this.state.rootElement.children,element:this.state.rootElement}):"",y.a.createElement(S,null)),y.a.createElement(x,null),y.a.createElement(W,null))}}]),n}(h.Component);t.default=L}}]);
//# sourceMappingURL=973a2cecf4dddd450cdc.bundle.js.map