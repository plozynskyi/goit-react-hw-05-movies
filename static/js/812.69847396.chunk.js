(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[812],{6718:function(n,e,t){"use strict";t.d(e,{Z:function(){return w}});var r,a,i,o,c,s=t(7689),u=t(6249),p=t(168),f=t(1087),l=t(7402),d=(0,l.Z)(f.rU)(r||(r=(0,p.Z)(["\n  text-decoration: none;\n"]))),h=l.Z.li(a||(a=(0,p.Z)(["\n  transition: scale 250ms linear;\n  list-style: none;\n  width: 250px;\n  &:hover h3 {\n    color: coral;\n  }\n  &:hover {\n    font-weight: 600;\n    scale: 1.05;\n  }\n"]))),m=l.Z.img(i||(i=(0,p.Z)(["\n  margin-bottom: 15px;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n"]))),v=l.Z.h3(o||(o=(0,p.Z)(["\n  text-align: center;\n  color: #000;\n  font-weight: bold;\n  transition: scale 250ms linear;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n"]))),x=t(184),g=function(n){var e=n.title,t=n.name,r=n.id,a=n.poster,i=(0,s.TH)(),o=i.pathname===u._.HOME?u._.MOVIES:i.pathname;return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(h,{children:(0,x.jsxs)(d,{to:"".concat(o,"/").concat(r),state:{from:i},children:[(0,x.jsx)(m,{src:a?"".concat("https://image.tmdb.org/t/p/original/").concat(a):"https://upload.wikimedia.org/wikipedia/commons/f/f9/No-image-available.jpg",alt:e||t}),(0,x.jsx)(v,{children:e||t})]})})})},b=g;g.defaultProps={};var Z=l.Z.ul(c||(c=(0,p.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 0;\n  margin-bottom: 0;\n"]))),y=function(n){var e=n.movies;return(0,x.jsx)(Z,{children:e.map((function(n){var e=n.id,t=n.title,r=n.name,a=n.poster_path;return(0,x.jsx)(b,{title:t,name:r,id:e,poster:a},e)}))})},w=y;y.defaultProps={movies:[]}},2940:function(n,e,t){"use strict";t.d(e,{Z:function(){return p}});var r,a,i=t(168),o=t(7402),c=o.Z.section(r||(r=(0,i.Z)(["\n  padding: 15px;\n"]))),s=o.Z.div(a||(a=(0,i.Z)([""]))),u=t(184),p=function(n){var e=n.children;return(0,u.jsx)(c,{children:(0,u.jsx)(s,{children:e})})}},1812:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return y}});var r,a,i=t(3433),o=t(5861),c=t(9439),s=t(4687),u=t.n(s),p=t(2791),f=t(2940),l=t(9178),d=t(6718),h=t(6850),m=t(724),v=t(168),x=t(7402),g=x.Z.div(r||(r=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 15px;\n"]))),b=x.Z.h1(a||(a=(0,v.Z)(["\n  margin: 0 0 5px;\n"]))),Z=t(184),y=function(){var n=(0,p.useState)(),e=(0,c.Z)(n,2),t=e[0],r=e[1],a=(0,p.useState)(1),s=(0,c.Z)(a,2),v=s[0],x=s[1],y=(0,p.useState)(!1),w=(0,c.Z)(y,2),k=w[0],j=w[1],_=(0,p.useState)(null),O=(0,c.Z)(_,2),P=O[0],S=O[1],T=(0,p.useState)(!1),E=(0,c.Z)(T,2),C=E[0],R=E[1],z=(0,p.useState)(!1),D=(0,c.Z)(z,2),F=D[0],H=D[1];(0,p.useEffect)((function(){var n=function(){var n=(0,o.Z)(u().mark((function n(){var e,t,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,j(!0),n.next=4,(0,m.Df)(v);case 4:if(e=n.sent,t=e.results,H(!0),1!==v){n.next=9;break}return n.abrupt("return",r((0,i.Z)(t)));case 9:r((function(n){return[].concat((0,i.Z)(n),(0,i.Z)(t))})),t||R(!0),n.next=19;break;case 13:n.prev=13,n.t0=n.catch(0),a=n.t0.response,S(a.data.message),console.log(a.data.message),H(!1);case 19:return n.prev=19,j(!1),n.finish(19);case 22:case"end":return n.stop()}}),n,null,[[0,13,19,22]])})));return function(){return n.apply(this,arguments)}}();n()}),[v]);return(0,Z.jsx)(f.Z,{children:(0,Z.jsxs)(g,{children:[(0,Z.jsx)(b,{children:"Trending today"}),k&&(0,Z.jsx)(l.Z,{}),P&&(0,Z.jsx)("p",{children:"Oops. Something goes wrong. Please try refresh page."}),C&&(0,Z.jsx)("p",{children:"There is no information about trending movie. Please try refresh page."}),!C&&(0,Z.jsx)(d.Z,{movies:t}),F&&(0,Z.jsx)(h.Z,{onClick:function(){H(!1),x((function(n){return n+1}))},type:"button",children:"loadMore"})]})})}},6850:function(n,e,t){"use strict";t.d(e,{Z:function(){return p}});var r,a=t(2007),i=t.n(a),o=t(168),c=t(7402).Z.button(r||(r=(0,o.Z)(["\n  display: inline-block;\n  padding: 10px 15px;\n  background-color: #fff;\n  border: 2px solid #000;\n  border-radius: 5px;\n  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;\n  cursor: pointer;\n  width: 100px;\n  font-size: 14px;\n  font-weight: bold;\n  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  :hover {\n    color: coral;\n    border: 2px solid coral;\n  }\n"]))),s=t(184),u=function(n){var e=n.children,t=n.onClick,r=n.type;return(0,s.jsx)(c,{onClick:t,type:r,children:e})},p=u;u.defaultProps={type:"submit"},u.prototypes={onClick:i().func.isRequired,type:i().oneOf(["submit","button","reset"]),children:i().element.isRequired}},9178:function(n,e,t){"use strict";var r=t(6286),a=t(184);e.Z=function(){return(0,a.jsx)(r.B7,{colors:["#51E5FF","#7DE2D1","#FF7E6B"],wrapperStyle:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}})}},724:function(n,e,t){"use strict";t.d(e,{Df:function(){return c},Pg:function(){return s},Pt:function(){return f},bz:function(){return p},iA:function(){return u}});var r=t(5861),a=t(4687),i=t.n(a),o=t(1912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"e6316174af6222f390b70a86dd33c4fc"}}),c=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/trending/all/week",{params:{page:e}});case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/movie/".concat(e),{});case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/movie/".concat(e,"/credits"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/movie/".concat(e,"/reviews"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/search/movie?",{params:{query:e,page:t}});case 2:return r=n.sent,a=r.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},888:function(n,e,t){"use strict";var r=t(9047);function a(){}function i(){}i.resetWarningCache=a,n.exports=function(){function n(n,e,t,a,i,o){if(o!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:a};return t.PropTypes=t,t}},2007:function(n,e,t){n.exports=t(888)()},9047:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=812.69847396.chunk.js.map