"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[785],{7480:function(n,t,r){r.d(t,{B:function(){return i}});var e,u=r(168),a=r(5706),c=r(184),o=a.Z.div(e||(e=(0,u.Z)(["\n  font-size: 20px;\n  margin-top: 40px;\n  color: red;\n"]))),i=function(n){var t=n.children;return(0,c.jsxs)(o,{children:[" ",t]})}},3469:function(n,t,r){r.d(t,{a:function(){return a}});var e,u=r(168),a=r(5706).Z.div(e||(e=(0,u.Z)(["\n  display: flex;\n  justify-content: center;\n"])))},6785:function(n,t,r){r.r(t);var e=r(9439),u=r(2791),a=r(7689),c=r(3469),o=r(8966),i=r(7480),s=r(3647),f=r(184);t.default=function(){var n=(0,u.useState)({}),t=(0,e.Z)(n,2),r=t[0],p=t[1],l=(0,u.useState)(!1),d=(0,e.Z)(l,2),h=d[0],v=d[1],x=(0,u.useState)(null),g=(0,e.Z)(x,2),w=g[0],Z=g[1],m=(0,a.UO)().id;return(0,u.useEffect)((function(){v(!0),Z(null),(0,s.Xj)(m).then((function(n){0===n.results.length&&Z("No reviews found..."),p(n.results)})).catch((function(n){return Z("Oops! Something went wrong! Try reloading the page!")})).finally((function(){return v(!1)}))}),[m]),(0,f.jsxs)("section",{children:[h&&(0,f.jsx)(c.a,{children:(0,f.jsx)(o.g4,{color:"lightslategrey"})}),(0,f.jsx)("ul",{children:r.length>0&&r.map((function(n){var t=n.id,r=n.author,e=n.content;return(0,f.jsxs)("li",{children:[(0,f.jsx)("h4",{children:"Author: ".concat(r)}),(0,f.jsx)("p",{children:e})]},t)}))}),w&&(0,f.jsx)(i.B,{children:w})]})}},3647:function(n,t,r){r.d(t,{$w:function(){return l},Pg:function(){return p},V0:function(){return f},Xj:function(){return d},rj:function(){return s}});var e=r(5861),u=r(4687),a=r.n(u),c=r(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"80849c20aa63241eb028c4e7b7d0f3a8"};var o="/trending/movie/day",i="/movie/",s=function(){var n=(0,e.Z)(a().mark((function n(){var t,r,e=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.length>0&&void 0!==e[0]?e[0]:1,n.next=3,c.Z.get(o);case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(a().mark((function n(t){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat("/search/movie","?query=").concat(t));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(a().mark((function n(t){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i).concat(t));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(a().mark((function n(t){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i).concat(t,"/credits"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(a().mark((function n(t){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i).concat(t,"/reviews"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=785.0d50eea0.chunk.js.map