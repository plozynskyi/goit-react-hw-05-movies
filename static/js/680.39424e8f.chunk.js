"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[680],{6718:function(t,e,n){n.d(e,{Z:function(){return h}});var r,a,u=n(1087),c=n(7689),s=n(6249),i=n(168),o=n(7402),f=o.Z.li(r||(r=(0,i.Z)(["\n  padding: 5px 0;\n"]))),p=n(184),v=function(t){var e=t.title,n=t.name,r=t.id,a=(0,c.TH)(),i=a.pathname===s._.HOME?s._.MOVIES:a.pathname;return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(f,{children:(0,p.jsx)(u.rU,{to:"".concat(i,"/").concat(r),state:{from:a},children:e||n})})})},l=o.Z.ul(a||(a=(0,i.Z)(["\n  margin-top: 0;\n  margin-bottom: 0;\n"]))),d=function(t){var e=t.movies;return(0,p.jsx)(l,{children:e.map((function(t){var e=t.id,n=t.title,r=t.name;return(0,p.jsx)(v,{title:n,name:r,id:e},e)}))})},h=d;d.defaultProps={movies:[]}},680:function(t,e,n){n.r(e);var r=n(5861),a=n(9439),u=n(4687),c=n.n(u),s=n(2791),i=n(9178),o=n(6718),f=n(724),p=n(184);e.default=function(){var t=(0,s.useState)(),e=(0,a.Z)(t,2),n=e[0],u=e[1],v=(0,s.useState)(!1),l=(0,a.Z)(v,2),d=l[0],h=l[1],m=(0,s.useState)(null),x=(0,a.Z)(m,2),g=x[0],w=x[1],Z=(0,s.useState)(!1),b=(0,a.Z)(Z,2),k=b[0],j=b[1];return(0,s.useEffect)((function(){var t=function(){var t=(0,r.Z)(c().mark((function t(){var e,n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,h(!0),t.next=4,(0,f.Df)();case 4:e=t.sent,(n=e.results)||j(!0),u(n),t.next=15;break;case 10:t.prev=10,t.t0=t.catch(0),r=t.t0.response,w(r.data.message),console.log(r.data.message);case 15:return t.prev=15,h(!1),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[0,10,15,18]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,p.jsxs)(p.Fragment,{children:[d&&(0,p.jsx)(i.Z,{}),g&&(0,p.jsx)("p",{children:"Oops. Something goes wrong. Please try refresh page."}),k&&(0,p.jsx)("p",{children:"There is no information about trending movie. Please try refresh page."}),!k&&(0,p.jsx)(o.Z,{movies:n})]})}},9178:function(t,e,n){var r=n(6286),a=n(184);e.Z=function(){return(0,a.jsx)(r.B7,{colors:["#51E5FF","#7DE2D1","#FF7E6B"],wrapperStyle:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}})}},724:function(t,e,n){n.d(e,{Df:function(){return s},Pg:function(){return i},Pt:function(){return p},bz:function(){return f},iA:function(){return o}});var r=n(5861),a=n(4687),u=n.n(a),c=n(1912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"e6316174af6222f390b70a86dd33c4fc"}}),s=function(){var t=(0,r.Z)(u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/trending/all/week",{});case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(e),{});case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(e,"/credits"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(e,"/reviews"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/search/movie?query=".concat(e),{});case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=680.39424e8f.chunk.js.map