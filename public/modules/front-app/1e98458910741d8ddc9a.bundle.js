(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{58:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),i=n(2),u=n.n(i),a=n(18),c=function e(){o()(this,e)},f=function(){function e(){o()(this,e)}return u()(e,null,[{key:"areaFabric",value:function(t){var n=new e;return n.settings=t.settings,n.id=t.id,n.template=new c,n.template.data=JSON.parse(t.template.data),n.template.id=t.template.id,n}}]),e}();function s(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,a=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return u=e.done,e},e:function(e){a=!0,i=e},f:function(){try{u||null==n.return||n.return()}finally{if(a)throw i}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var d=function(){function e(t){o()(this,e),this.id=t.id,this.path=t.path,this.model=t.model,this.models=t.models,this.title=t.title||""}return u()(e,null,[{key:"routeFabric",value:function(t){var n=new e(t);n.areas=[];var r,o=s(t.areas);try{for(o.s();!(r=o.n()).done;){var i=r.value;n.areas.push(f.areaFabric(i))}}catch(e){o.e(e)}finally{o.f()}return n}}]),e}(),h=n(70),p=n(62);function y(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,a=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return u=e.done,e},e:function(e){a=!0,i=e},f:function(){try{u||null==n.return||n.return()}finally{if(a)throw i}}}}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var v=function(){function e(){o()(this,e),this.resource=new a.a({route:"/ajax/routes"}),this.loadRoutes()}return u()(e,[{key:"loadRoutes",value:function(){this.resource.getAll().then((function(e){var t,n=[],r=y(e.pages);try{for(r.s();!(t=r.n()).done;){var o=t.value;n.push(d.routeFabric(o))}}catch(e){r.e(e)}finally{r.f()}h.a.dispatch(Object(p.b)(n))})).catch((function(e){console.error(e)}))}}]),e}();t.default=new v},61:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return a}));var r=n(65),o=function(){return Math.random().toString(36).substring(7).split("").join(".")},i={INIT:"@@redux/INIT"+o(),REPLACE:"@@redux/REPLACE"+o(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+o()}};function u(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function a(e,t,n){var o;if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(a)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var c=e,f=t,s=[],l=s,d=!1;function h(){l===s&&(l=s.slice())}function p(){if(d)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return f}function y(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(d)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var t=!0;return h(),l.push(e),function(){if(t){if(d)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");t=!1,h();var n=l.indexOf(e);l.splice(n,1),s=null}}}function b(e){if(!u(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(d)throw new Error("Reducers may not dispatch actions.");try{d=!0,f=c(f,e)}finally{d=!1}for(var t=s=l,n=0;n<t.length;n++){(0,t[n])()}return e}function v(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");c=e,b({type:i.REPLACE})}function w(){var e,t=y;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(p())}return n(),{unsubscribe:t(n)}}})[r.a]=function(){return this},e}return b({type:i.INIT}),(o={dispatch:b,subscribe:y,getState:p,replaceReducer:v})[r.a]=w,o}function c(e,t){var n=t&&t.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function f(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];0,"function"==typeof e[o]&&(n[o]=e[o])}var u,a=Object.keys(n);try{!function(e){Object.keys(e).forEach((function(t){var n=e[t];if(void 0===n(void 0,{type:i.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:i.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+i.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(n)}catch(e){u=e}return function(e,t){if(void 0===e&&(e={}),u)throw u;for(var r=!1,o={},i=0;i<a.length;i++){var f=a[i],s=n[f],l=e[f],d=s(l,t);if(void 0===d){var h=c(f,t);throw new Error(h)}o[f]=d,r=r||d!==l}return(r=r||a.length!==Object.keys(e).length)?o:e}}function s(e,t){return function(){return t(e.apply(this,arguments))}}function l(e,t){if("function"==typeof e)return s(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');var n={};for(var r in e){var o=e[r];"function"==typeof o&&(n[r]=s(o,t))}return n}},62:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var r="CHANGE_APP_ROUTES";function o(e){return{type:r,routes:e}}},65:function(e,t,n){"use strict";(function(e,r){var o,i=n(67);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:r;var u=Object(i.a)(o);t.a=u}).call(this,n(30),n(66)(e))},66:function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},67:function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",(function(){return r}))},70:function(e,t,n){"use strict";var r=n(61),o=n(62),i={routes:[]};var u=Object(r.b)({appRoutes:function(e,t){switch(e=e||i,t.type){case o.a:e={routes:t.routes}}return e}}),a=Object(r.c)(u);t.a=a}}]);
//# sourceMappingURL=1e98458910741d8ddc9a.bundle.js.map