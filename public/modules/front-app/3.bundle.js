(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{33:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r="CHANGE_APP_ROUTES";function o(t){return{type:r,routes:t}}},37:function(t,e,n){"use strict";var r=n(29),o=n(33),u={routes:[]};var i=Object(r.b)({appRoutes:function(t,e){switch(t=t||u,e.type){case o.a:t={routes:e.routes}}return t}}),c=Object(r.c)(i);e.a=c},53:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r);var u=n(37),i=n(46),c=n(22),a=n(36);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var m=function(t){function e(){return l(this,e),s(this,y(e).apply(this,arguments))}var n,r,u;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(e,t),n=e,(r=[{key:"render",value:function(){var t=window.frontElementsFabric.parseData(this.props.template.data);return o.a.createElement("div",{className:"app-area"},o.a.createElement(t.componentClass,{element:t,children:t.children}))}}])&&p(n.prototype,r),u&&p(n,u),e}(r.Component);function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function O(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function w(t,e){return!e||"object"!==h(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function j(t,e){return(j=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var _=function(t){function e(){return O(this,e),w(this,d(e).apply(this,arguments))}var n,r,u;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&j(t,e)}(e,t),n=e,(r=[{key:"render",value:function(){return o.a.createElement("div",{className:"route-content"},this.props.areas.map((function(t){return o.a.createElement(m,{template:t.template,key:"appArea_"+t.id})})))}}])&&v(n.prototype,r),u&&v(n,u),e}(r.Component);function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function S(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function E(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function P(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function T(t){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function C(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function R(t,e){return(R=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var A=function(t){function e(t){var n,r,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,(n=!(o=T(e).call(this,t))||"object"!==g(o)&&"function"!=typeof o?C(r):o).state={elementStyles:[]},window.stylesModule=C(n),window.stylesModuleResolve(C(n)),n}var n,r,u;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&R(t,e)}(e,t),n=e,(r=[{key:"addElementStyles",value:function(t,e){if(e){var n=!1,r=P(this.state.elementStyles);r.forEach((function(r){r.elementId===t&&(n=!0,r.styles=e)})),n||r.push({elementId:t,styles:e}),this.setState(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?S(Object(n),!0).forEach((function(e){E(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},this.state,{elementStyles:r}))}}},{key:"render",value:function(){return o.a.createElement("div",{className:"styles-container"},this.state.elementStyles.map((function(t){return o.a.createElement("style",{"data-styles-id":t.elementId,key:t.elementId},t.styles)})))}}])&&k(n.prototype,r),u&&k(n,u),e}(r.Component);function x(t){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function D(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function N(t,e){return!e||"object"!==x(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function J(t){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function M(t,e){return(M=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var F=function(t){function e(){return D(this,e),N(this,J(e).apply(this,arguments))}var n,r,u;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&M(t,e)}(e,t),n=e,(r=[{key:"render",value:function(){return o.a.createElement("div",{className:"front-app-content"},o.a.createElement(i.a,null,o.a.createElement(c.c,null,this.props.routes.map((function(t){return o.a.createElement(c.a,{key:"appRoute_"+t.id,path:t.path},o.a.createElement(_,{areas:t.areas}))})))),o.a.createElement(A,null))}}])&&I(n.prototype,r),u&&I(n,u),e}(r.Component);var G,H=Object(a.b)((function(t){return{routes:t.appRoutes.routes}}))(F);function U(t){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function z(t){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function B(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function K(t,e){return(K=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}G=function(t){function e(t){var n,r,o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,n=!(o=z(e).call(this,t))||"object"!==U(o)&&"function"!=typeof o?B(r):o,window.frontApp=B(n),n.getTemplates(),n.getRoutes(),n}var r,i,c;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&K(t,e)}(e,t),r=e,(i=[{key:"getTemplates",value:function(){var t=this;return n.e(5).then(n.bind(null,51)).then((function(e){t.templates=e.default}))}},{key:"getRoutes",value:function(){var t=this;return n.e(4).then(n.bind(null,54)).then((function(e){t.routes=e.default}))}},{key:"onClick",value:function(){var t=this;this.getTemplates().then((function(e){console.log(t.templates===e.default)}))}},{key:"render",value:function(){return o.a.createElement(a.a,{store:u.a},o.a.createElement(H,null))}}])&&q(r.prototype,i),c&&q(r,c),e}(r.Component);e.default=G}}]);
//# sourceMappingURL=3.bundle.js.map