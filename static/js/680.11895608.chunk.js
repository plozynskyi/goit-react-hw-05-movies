"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[680],{6718:function(e,n,t){t.d(n,{Z:function(){return m}});var r,a,u=t(1087),c=t(7689),s=t(6249),i=t(168),o=t(7402),f=o.Z.li(r||(r=(0,i.Z)(["\n  padding: 5px 0;\n"]))),p=t(184),v=function(e){var n=e.title,t=e.name,r=e.id,a=(0,c.TH)(),i=a.pathname===s._.HOME?s._.MOVIES:a.pathname;return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(f,{children:(0,p.jsx)(u.rU,{to:"".concat(i,"/").concat(r),state:{from:a},children:n||t})})})},d=o.Z.ul(a||(a=(0,i.Z)(["\n  margin-top: 0;\n  margin-bottom: 0;\n"]))),h=function(e){var n=e.movies;return(0,p.jsx)(d,{children:n.map((function(e){var n=e.id,t=e.title,r=e.name;return(0,p.jsx)(v,{title:t,name:r,id:n},n)}))})},m=h;h.defaultProps={movies:[]}},680:function(e,n,t){t.r(n);var r=t(5861),a=t(9439),u=t(4687),c=t.n(u),s=t(2791),i=t(9178),o=t(6718),f=t(724),p=t(184);n.default=function(){var e=(0,s.useState)(),n=(0,a.Z)(e,2),t=n[0],u=n[1],v=(0,s.useState)(!1),d=(0,a.Z)(v,2),h=d[0],m=d[1],l=(0,s.useState)(null),x=(0,a.Z)(l,2),g=x[0],w=x[1],Z=(0,s.useState)(!1),b=(0,a.Z)(Z,2),k=b[0],j=b[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var n,t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,(0,f.Df)();case 4:n=e.sent,(t=n.results)||j(!0),u(t),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),r=e.t0.response,w(r.data.message),console.log(r.data.message);case 15:return e.prev=15,m(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,10,15,18]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,p.jsxs)(p.Fragment,{children:[h&&(0,p.jsx)(i.Z,{}),g&&(0,p.jsx)("p",{children:"Oops. Something goes wrong. Please try refresh page."}),k&&(0,p.jsx)("p",{children:"There is no information about trending movie. Please try refresh page."}),!k&&(0,p.jsx)(o.Z,{movies:t})]})}},9178:function(e,n,t){var r=t(6286),a=t(184);n.Z=function(){return(0,a.jsx)(r.B7,{})}},724:function(e,n,t){t.d(n,{Df:function(){return s},Pg:function(){return i},Pt:function(){return p},bz:function(){return f},iA:function(){return o}});var r=t(5861),a=t(4687),u=t.n(a),c=t(1912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"e6316174af6222f390b70a86dd33c4fc"}}),s=function(){var e=(0,r.Z)(u().mark((function e(){var n,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/trending/all/week",{});case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(n),{});case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(n,"/credits"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(n,"/reviews"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/search/movie?query=".concat(n),{});case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=680.11895608.chunk.js.map