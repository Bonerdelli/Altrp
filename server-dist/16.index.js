exports.ids=[16,17],exports.modules={79:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a.n(n),s=a(4),u=a.n(s),l=a(5),c=a.n(l),i=a(2),p=a.n(i),o=a(10),d=a(3),h=a(78),b=function(){function e(){u()(this,e),this.resource=new o.a({route:"/ajax/templates"}),this.templatesCache=new d.a({})}var t,a;return c()(e,[{key:"loadTemplate",value:(a=r()(p.a.mark((function t(a){var n,r,s,u=arguments;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=u.length>1&&void 0!==u[1]&&u[1],r=n,a=Number(a)?Number(a):a,r||(r=!this.templatesCache.hasProperty(a)),"loading"!==_.get(e,"statuses.".concat(a))){t.next=6;break}return t.abrupt("return",new Promise((function(t,n){e.pendingCallbacks[a]=e.pendingCallbacks[a]||[],e.pendingCallbacks[a].push(t)})));case 6:if(e.statuses[a]="loading",t.prev=7,s=null,!r){t.next=16;break}return t.next=12,this.resource.get(a);case 12:s=t.sent,this.templatesCache.setProperty(a,s),t.next=17;break;case 16:s=this.templatesCache.getProperty(a);case 17:return _.isArray(e.pendingCallbacks[a])&&e.pendingCallbacks[a].forEach((function(e){e(s)})),e.statuses[a]="loaded",e.pendingCallbacks[a]=[],t.abrupt("return",s);case 23:return t.prev=23,t.t0=t.catch(7),_.isArray(e.pendingCallbacks[a])&&e.pendingCallbacks[a].forEach((function(e){e(null)})),e.statuses[a]="loaded",e.pendingCallbacks[a]=[],t.abrupt("return",null);case 29:case"end":return t.stop()}}),t,this,[[7,23]])}))),function(e){return a.apply(this,arguments)})},{key:"loadParsedTemplate",value:(t=r()(p.a.mark((function e(t){var a,n,r=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=r.length>1&&void 0!==r[1]&&r[1],t){e.next=3;break}return e.abrupt("return",null);case 3:return t=Number(t)?Number(t):t,e.t0=_,e.next=7,this.loadTemplate(t,a);case 7:return e.t1=e.sent,n=e.t0.get.call(e.t0,e.t1,"data"),n=JSON.parse(n),e.abrupt("return",h.default.parseData(n));case 11:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})}]),e}();b.statuses={},b.pendingCallbacks={},window.templateLoader=new b,t.default=window.templateLoader}};