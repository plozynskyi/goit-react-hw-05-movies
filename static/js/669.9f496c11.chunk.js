"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[669],{6669:function(e,t,r){r.r(t);var n=r(5861),a=r(9439),u=r(4687),c=r.n(u),s=r(2791),i=r(7689),o=r(9178),f=r(724),p=r(184);t.default=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),r=t[0],u=t[1],v=(0,s.useState)(!1),l=(0,a.Z)(v,2),h=l[0],d=l[1],x=(0,s.useState)(null),m=(0,a.Z)(x,2),w=m[0],g=m[1],b=(0,s.useState)(!1),k=(0,a.Z)(b,2),Z=k[0],j=k[1],y=(0,i.UO)().movieId;(0,s.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t,r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.next=4,(0,f.bz)(y);case 4:t=e.sent,(r=t.results).length||j(!0),u(r),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),n=e.t0.response,g(n.data.message),console.log(n.data.message);case 15:return e.prev=15,d(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,10,15,18]])})));return function(){return e.apply(this,arguments)}}();e()}),[y]),console.log(r);var _=r.map((function(e){var t=e.id,r=e.author,n=e.content;return(0,p.jsx)("ul",{children:(0,p.jsxs)("li",{children:[(0,p.jsx)("h1",{children:r}),(0,p.jsx)("p",{children:n})]},t)})}));return(0,p.jsxs)(p.Fragment,{children:[h&&(0,p.jsx)(o.Z,{}),w&&(0,p.jsx)("p",{children:"Oops. Something goes wrong. Please try again."}),Z&&(0,p.jsx)("p",{children:"There is no information about review for this movie."}),!Z&&(0,p.jsx)("ul",{children:_})]})}},9178:function(e,t,r){var n=r(6286),a=r(184);t.Z=function(){return(0,a.jsx)(n.B7,{colors:["#51E5FF","#7DE2D1","#FF7E6B"],wrapperStyle:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}})}},724:function(e,t,r){r.d(t,{Df:function(){return s},Pg:function(){return i},Pt:function(){return p},bz:function(){return f},iA:function(){return o}});var n=r(5861),a=r(4687),u=r.n(a),c=r(1912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"e6316174af6222f390b70a86dd33c4fc"}}),s=function(){var e=(0,n.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/trending/all/week",{});case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t),{});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/search/movie?query=".concat(t),{});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=669.9f496c11.chunk.js.map