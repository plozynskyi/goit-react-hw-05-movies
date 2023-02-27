(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[658],{6718:function(n,e,t){"use strict";t.d(e,{Z:function(){return w}});var r,i,o,a,c,s=t(7689),u=t(6249),p=t(168),f=t(1087),l=t(7402),d=(0,l.Z)(f.rU)(r||(r=(0,p.Z)(["\n  text-decoration: none;\n"]))),h=l.Z.li(i||(i=(0,p.Z)(["\n  transition: scale 250ms linear;\n  list-style: none;\n  width: 250px;\n  &:hover h3 {\n    color: coral;\n  }\n  &:hover {\n    font-weight: 600;\n    scale: 1.05;\n  }\n"]))),m=l.Z.img(o||(o=(0,p.Z)(["\n  margin-bottom: 15px;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n"]))),x=l.Z.h3(a||(a=(0,p.Z)(["\n  text-align: center;\n  color: #000;\n  font-weight: bold;\n  transition: scale 250ms linear;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n"]))),b=t(184),g=function(n){var e=n.title,t=n.name,r=n.id,i=n.poster,o=(0,s.TH)(),a=o.pathname===u._.HOME?u._.MOVIES:o.pathname;return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(h,{children:(0,b.jsxs)(d,{to:"".concat(a,"/").concat(r),state:{from:o},children:[(0,b.jsx)(m,{src:i?"".concat("https://image.tmdb.org/t/p/original/").concat(i):"../../shared/image/no-image.jpg",alt:e||t}),(0,b.jsx)(x,{children:e||t})]})})})},v=g;g.defaultProps={};var Z=l.Z.ul(c||(c=(0,p.Z)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 0;\n  margin-bottom: 0;\n"]))),y=function(n){var e=n.movies;return(0,b.jsx)(Z,{children:e.map((function(n){var e=n.id,t=n.title,r=n.name,i=n.poster_path;return(0,b.jsx)(v,{title:t,name:r,id:e,poster:i},e)}))})},w=y;y.defaultProps={movies:[],poster:"../../shared/image/no-image.jpg"}},2940:function(n,e,t){"use strict";t.d(e,{Z:function(){return p}});var r,i,o=t(168),a=t(7402),c=a.Z.section(r||(r=(0,o.Z)(["\n  padding: 15px;\n"]))),s=a.Z.div(i||(i=(0,o.Z)([""]))),u=t(184),p=function(n){var e=n.children;return(0,u.jsx)(c,{children:(0,u.jsx)(s,{children:e})})}},3658:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return S}});var r,i,o,a=t(3433),c=t(5861),s=t(9439),u=t(4687),p=t.n(u),f=t(2791),l=t(1087),d=t(7596),h=t(9178),m=t(2940),x=t(168),b=t(7402),g=b.Z.form(r||(r=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 15px;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border: 2px solid coral;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),v=b.Z.button(i||(i=(0,x.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://cdn-icons-png.flaticon.com/512/954/954591.png');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  :hover {\n    opacity: 1;\n  }\n"]))),Z=b.Z.input(o||(o=(0,x.Z)(["\n  display: inline-block;\n  width: 100%;\n  margin-left: 10px;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  ::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),y=t(184),w=function(n){var e=n.handleFormSubmit,t=(0,f.useState)(""),r=(0,s.Z)(t,2),i=r[0],o=r[1];return(0,y.jsxs)(g,{onSubmit:function(n){n.preventDefault(),e(i)},children:[(0,y.jsx)(Z,{value:i,onChange:function(n){return o(n.target.value.trim())},type:"text",placeholder:"Enter name of movie..."}),(0,y.jsx)(v,{type:"submit"})]})},k=t(6850),j=t(724),_=t(6718),S=(t(5462),function(){var n=(0,f.useState)([]),e=(0,s.Z)(n,2),t=e[0],r=e[1],i=(0,f.useState)(1),o=(0,s.Z)(i,2),u=o[0],x=o[1],b=(0,f.useState)(!1),g=(0,s.Z)(b,2),v=g[0],Z=g[1],S=(0,l.lr)(),P=(0,s.Z)(S,2),O=P[0],E=P[1],C=(0,f.useState)(null),T=(0,s.Z)(C,2),z=T[0],F=T[1],R=(0,f.useState)(!1),q=(0,s.Z)(R,2),D=q[0],H=q[1],I=(0,f.useState)(!1),A=(0,s.Z)(I,2),U=A[0],B=A[1],L=O.get("query");(0,f.useEffect)((function(){if(L){var n=function(){var n=(0,c.Z)(p().mark((function n(){var e,t;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,Z(!0),n.next=4,(0,j.Pt)(L,u);case 4:if(e=n.sent,(t=e.results).length){n.next=11;break}return H(!0),r([]),Z(!1),n.abrupt("return",d.Am.warn("No movies for ".concat(L,". Please try something else")));case 11:if(20===t.length?B(!0):B(!1),1!==u){n.next=16;break}return n.abrupt("return",r((0,a.Z)(t)));case 16:r((function(n){return[].concat((0,a.Z)(n),(0,a.Z)(t))}));case 17:n.next=22;break;case 19:n.prev=19,n.t0=n.catch(0),F(n.t0.data.message);case 22:return n.prev=22,Z(!1),n.finish(22);case 25:case"end":return n.stop()}}),n,null,[[0,19,22,25]])})));return function(){return n.apply(this,arguments)}}();n()}}),[u,L]);return(0,y.jsxs)(m.Z,{children:[(0,y.jsx)(w,{handleFormSubmit:function(n){E({query:n})}}),v&&(0,y.jsx)(h.Z,{}),z&&(0,y.jsx)("p",{children:"Oops. Something goes wrong. Please try again."}),!D&&(0,y.jsx)(_.Z,{movies:t}),U&&(0,y.jsx)(k.Z,{onClick:function(){B(!1),x((function(n){return n+1}))},type:"button",children:"loadMore"})]})})},6850:function(n,e,t){"use strict";t.d(e,{Z:function(){return p}});var r,i=t(2007),o=t.n(i),a=t(168),c=t(7402).Z.button(r||(r=(0,a.Z)(["\n  display: inline-block;\n  padding: 10px 15px;\n  background-color: #fff;\n  border: 2px solid #000;\n  border-radius: 5px;\n  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;\n  cursor: pointer;\n  width: 100px;\n  font-size: 14px;\n  font-weight: bold;\n  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  :hover {\n    color: coral;\n    border: 2px solid coral;\n  }\n"]))),s=t(184),u=function(n){var e=n.children,t=n.onClick,r=n.type;return(0,s.jsx)(c,{onClick:t,type:r,children:e})},p=u;u.defaultProps={type:"submit"},u.prototypes={onClick:o().func.isRequired,type:o().oneOf(["submit","button","reset"]),children:o().element.isRequired}},9178:function(n,e,t){"use strict";var r=t(6286),i=t(184);e.Z=function(){return(0,i.jsx)(r.B7,{colors:["#51E5FF","#7DE2D1","#FF7E6B"],wrapperStyle:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}})}},724:function(n,e,t){"use strict";t.d(e,{Df:function(){return c},Pg:function(){return s},Pt:function(){return f},bz:function(){return p},iA:function(){return u}});var r=t(5861),i=t(4687),o=t.n(i),a=t(1912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"e6316174af6222f390b70a86dd33c4fc"}}),c=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.get("/trending/all/week",{params:{page:e}});case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.get("/movie/".concat(e),{});case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.get("/movie/".concat(e,"/credits"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.get("/movie/".concat(e,"/reviews"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(e,t){var r,i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.get("/search/movie?",{params:{query:e,page:t}});case 2:return r=n.sent,i=r.data,n.abrupt("return",i);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},888:function(n,e,t){"use strict";var r=t(9047);function i(){}function o(){}o.resetWarningCache=i,n.exports=function(){function n(n,e,t,i,o,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:i};return t.PropTypes=t,t}},2007:function(n,e,t){n.exports=t(888)()},9047:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=658.541bba2c.chunk.js.map