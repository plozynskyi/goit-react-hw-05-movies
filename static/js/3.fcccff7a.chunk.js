(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[3],{6718:function(n,e,t){"use strict";t.d(e,{Z:function(){return y}});var r,i,o,a,c,s=t(7689),u=t(168),p=t(1087),l=t(7402),f=(0,l.Z)(p.rU)(r||(r=(0,u.Z)(["\n  text-decoration: none;\n"]))),d=l.Z.li(i||(i=(0,u.Z)(["\n  transition: scale 250ms linear;\n  list-style: none;\n  width: 250px;\n  &:hover h3 {\n    color: coral;\n  }\n  &:hover {\n    font-weight: 600;\n    scale: 1.05;\n  }\n"]))),h=l.Z.img(o||(o=(0,u.Z)(["\n  margin-bottom: 15px;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n"]))),m=l.Z.h3(a||(a=(0,u.Z)(["\n  text-align: center;\n  color: #000;\n  font-weight: bold;\n  transition: scale 250ms linear;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n"]))),x=t(184),v=function(n){var e=n.title,t=n.name,r=n.id,i=n.poster,o=(0,s.TH)();console.log(o);return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(d,{children:(0,x.jsxs)(f,{to:"/movies/".concat(r),state:{from:o},children:[(0,x.jsx)(h,{src:i?"".concat("https://image.tmdb.org/t/p/original/").concat(i):"https://upload.wikimedia.org/wikipedia/commons/f/f9/No-image-available.jpg",alt:e||t}),(0,x.jsx)(m,{children:e||t})]})})})},b=v;v.defaultProps={};var g=l.Z.ul(c||(c=(0,u.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 0;\n  margin-bottom: 0;\n"]))),Z=function(n){var e=n.movies;return(0,x.jsx)(g,{children:e.map((function(n){var e=n.id,t=n.title,r=n.name,i=n.poster_path;return(0,x.jsx)(b,{title:t,name:r,id:e,poster:i},e)}))})},y=Z;Z.defaultProps={movies:[]}},2940:function(n,e,t){"use strict";t.d(e,{Z:function(){return p}});var r,i,o=t(168),a=t(7402),c=a.Z.section(r||(r=(0,o.Z)(["\n  padding: 15px;\n"]))),s=a.Z.div(i||(i=(0,o.Z)([""]))),u=t(184),p=function(n){var e=n.children;return(0,u.jsx)(c,{children:(0,u.jsx)(s,{children:e})})}},9003:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return C}});var r,i,o,a,c=t(3433),s=t(5861),u=t(9439),p=t(4687),l=t.n(p),f=t(2791),d=t(1087),h=t(7596),m=t(9178),x=t(2940),v=t(168),b=t(7402),g=b.Z.form(r||(r=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 15px;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border: 2px solid coral;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),Z=b.Z.button(i||(i=(0,v.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://cdn-icons-png.flaticon.com/512/954/954591.png');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  :hover {\n    opacity: 1;\n  }\n"]))),y=b.Z.input(o||(o=(0,v.Z)(["\n  display: inline-block;\n  width: 100%;\n  margin-left: 10px;\n  font: inherit;\n  font-size: 18px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  ::placeholder {\n    font: inherit;\n    font-size: 16px;\n  }\n"]))),w=t(184),k=function(n){var e=n.handleFormSubmit,t=(0,f.useState)(""),r=(0,u.Z)(t,2),i=r[0],o=r[1];return(0,w.jsxs)(g,{onSubmit:function(n){n.preventDefault(),e(i)},children:[(0,w.jsx)(y,{value:i,onChange:function(n){return o(n.target.value)},placeholder:"Enter name of movie..."}),(0,w.jsx)(Z,{type:"submit"})]})},j=t(6850),_=t(724),S=t(6718),P=b.Z.div(a||(a=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 15px;\n"]))),C=(t(5462),function(){var n=(0,f.useState)([]),e=(0,u.Z)(n,2),t=e[0],r=e[1],i=(0,f.useState)(1),o=(0,u.Z)(i,2),a=o[0],p=o[1],v=(0,f.useState)(!1),b=(0,u.Z)(v,2),g=b[0],Z=b[1],y=(0,d.lr)(),C=(0,u.Z)(y,2),O=C[0],T=C[1],z=(0,f.useState)(null),E=(0,u.Z)(z,2),F=E[0],R=E[1],q=(0,f.useState)(!1),D=(0,u.Z)(q,2),A=D[0],H=D[1],I=(0,f.useState)(!1),N=(0,u.Z)(I,2),U=N[0],B=N[1],L=O.get("query");(0,f.useEffect)((function(){if(L){var n=function(){var n=(0,s.Z)(l().mark((function n(){var e,t;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,Z(!0),n.next=4,(0,_.Pt)(L,a);case 4:if(e=n.sent,t=e.results,1===a?(H(!1),r((0,c.Z)(t))):r((function(n){return[].concat((0,c.Z)(n),(0,c.Z)(t))})),20===t.length?B(!0):B(!1),t.length){n.next=13;break}return r([]),H(!0),Z(!1),n.abrupt("return",h.Am.warn("No movies for ".concat(L,". Please try something else")));case 13:n.next=18;break;case 15:n.prev=15,n.t0=n.catch(0),R(n.t0.data.message);case 18:return n.prev=18,Z(!1),n.finish(18);case 21:case"end":return n.stop()}}),n,null,[[0,15,18,21]])})));return function(){return n.apply(this,arguments)}}();n()}}),[a,L,A]);return(0,w.jsx)(x.Z,{children:(0,w.jsxs)(P,{children:[(0,w.jsx)(k,{handleFormSubmit:function(n){T({query:n}),r([]),p(1)}}),g&&(0,w.jsx)(m.Z,{}),F&&(0,w.jsx)("p",{children:"Oops. Something goes wrong. Please try again."}),!A&&(0,w.jsx)(S.Z,{movies:t}),U&&(0,w.jsx)(j.Z,{onClick:function(){B(!1),p((function(n){return n+1}))},type:"button",children:"loadMore"})]})})})},6850:function(n,e,t){"use strict";t.d(e,{Z:function(){return p}});var r,i=t(2007),o=t.n(i),a=t(168),c=t(7402).Z.button(r||(r=(0,a.Z)(["\n  display: inline-block;\n  padding: 10px 15px;\n  background-color: #fff;\n  border: 2px solid #000;\n  border-radius: 5px;\n  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;\n  cursor: pointer;\n  width: 100px;\n  font-size: 14px;\n  font-weight: bold;\n  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  :hover {\n    color: coral;\n    border: 2px solid coral;\n  }\n"]))),s=t(184),u=function(n){var e=n.children,t=n.onClick,r=n.type;return(0,s.jsx)(c,{onClick:t,type:r,children:e})},p=u;u.defaultProps={type:"submit"},u.prototypes={onClick:o().func.isRequired,type:o().oneOf(["submit","button","reset"]),children:o().element.isRequired}},9178:function(n,e,t){"use strict";var r=t(6286),i=t(184);e.Z=function(){return(0,i.jsx)(r.B7,{colors:["#51E5FF","#7DE2D1","#FF7E6B"],wrapperStyle:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}})}},724:function(n,e,t){"use strict";t.d(e,{Df:function(){return c},Pg:function(){return s},Pt:function(){return l},bz:function(){return p},iA:function(){return u}});var r=t(5861),i=t(4687),o=t.n(i),a=t(1912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"e6316174af6222f390b70a86dd33c4fc"}}),c=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.get("/trending/all/week",{params:{page:e}});case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.get("/movie/".concat(e),{});case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.get("/movie/".concat(e,"/credits"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.get("/movie/".concat(e,"/reviews"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(e,t){var r,i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.get("/search/movie?",{params:{query:e,page:t}});case 2:return r=n.sent,i=r.data,n.abrupt("return",i);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},888:function(n,e,t){"use strict";var r=t(9047);function i(){}function o(){}o.resetWarningCache=i,n.exports=function(){function n(n,e,t,i,o,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:i};return t.PropTypes=t,t}},2007:function(n,e,t){n.exports=t(888)()},9047:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=3.fcccff7a.chunk.js.map