"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[669],{6669:function(e,n,r){r.r(n);var t=r(5861),a=r(9439),u=r(4687),c=r.n(u),s=r(2791),i=r(7689),o=r(9178),f=r(724),p=r(184);n.default=function(){var e=(0,s.useState)([]),n=(0,a.Z)(e,2),r=n[0],u=n[1],v=(0,s.useState)(!1),h=(0,a.Z)(v,2),l=h[0],d=h[1],x=(0,s.useState)(null),m=(0,a.Z)(x,2),g=m[0],w=m[1],b=(0,s.useState)(!1),k=(0,a.Z)(b,2),Z=k[0],j=k[1],y=(0,i.UO)().movieId;(0,s.useEffect)((function(){var e=function(){var e=(0,t.Z)(c().mark((function e(){var n,r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.bz)(y);case 3:n=e.sent,r=n.results,console.log(r),r.length||j(!0),u(r),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),t=e.t0.response,w(t.data.message),console.log(t.data.message);case 15:return e.prev=15,d(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,10,15,18]])})));return function(){return e.apply(this,arguments)}}();e()}),[y]),console.log(r);var _=r.map((function(e){var n=e.id,r=e.author,t=e.content;return(0,p.jsx)("ul",{children:(0,p.jsxs)("li",{children:[(0,p.jsx)("h1",{children:r}),(0,p.jsx)("p",{children:t})]},n)})}));return(0,p.jsxs)(p.Fragment,{children:[l&&(0,p.jsx)(o.Z,{}),g&&(0,p.jsx)("p",{children:"Oops. Something goes wrong. Please try again."}),Z&&(0,p.jsx)("p",{children:"There is no information about review for this movie."}),!Z&&(0,p.jsx)("ul",{children:_})]})}},9178:function(e,n,r){var t=r(6286),a=r(184);n.Z=function(){return(0,a.jsx)(t.B7,{})}},724:function(e,n,r){r.d(n,{Df:function(){return s},Pg:function(){return i},Pt:function(){return p},bz:function(){return f},iA:function(){return o}});var t=r(5861),a=r(4687),u=r.n(a),c=r(1912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"e6316174af6222f390b70a86dd33c4fc"}}),s=function(){var e=(0,t.Z)(u().mark((function e(){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/trending/all/week",{});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(n),{});case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(n,"/credits"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(n,"/reviews"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/search/movie?query=".concat(n),{});case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=669.305b26d6.chunk.js.map