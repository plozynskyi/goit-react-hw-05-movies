(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[659],{2940:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var r,a,i=t(168),s=t(7402),o=s.Z.section(r||(r=(0,i.Z)(["\n  padding: 15px;\n"]))),c=s.Z.div(a||(a=(0,i.Z)([""]))),u=t(184),p=function(e){var n=e.children;return(0,u.jsx)(o,{children:(0,u.jsx)(c,{children:n})})}},659:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return F}});var r,a,i,s,o,c,u=t(5861),p=t(9439),l=t(4687),f=t.n(l),d=t(2791),h=t(1087),v=t(7689),x=t(168),g=t(7402),m=g.Z.div(r||(r=(0,x.Z)(["\n  display: flex;\n  flex-direction: row;\n  gap: 15px;\n"]))),b=g.Z.a(a||(a=(0,x.Z)(["\n  font-size: 24px;\n  font-weight: bold;\n"]))),y=g.Z.img(i||(i=(0,x.Z)(["\n  width: 300px;\n  height: auto;\n"]))),j=g.Z.div(s||(s=(0,x.Z)(["\n  width: 500px;\n"]))),w=g.Z.span(o||(o=(0,x.Z)(["\n  font-weight: bold;\n"]))),Z=t(184),k=function(e){var n=e.movie,t=n.poster_path,r=n.original_title,a=n.release_date,i=n.vote_average,s=n.overview,o=n.genres,c=n.homepage,u=n.status,p="";return Object.keys(n).length&&(p=o.map((function(e,n){var t=e.name;return n===o.length-1?"".concat(t,"."):"".concat(t,", ")}))),(0,Z.jsxs)(m,{children:[(0,Z.jsx)(y,{src:"https://image.tmdb.org/t/p/original/".concat(t),alt:r}),(0,Z.jsxs)(j,{children:[(0,Z.jsx)(b,{href:c,target:"_blank",rel:"noopener noreferrer",children:r}),(0,Z.jsxs)("p",{children:[(0,Z.jsx)(w,{children:"User Score"})," - ",Number(i).toFixed(2)," ","%"]}),(0,Z.jsxs)("p",{children:[(0,Z.jsx)(w,{children:"Overview:"})," ",s]}),(0,Z.jsxs)("p",{children:[(0,Z.jsx)(w,{children:"Genres:"})," ",p]}),(0,Z.jsxs)("p",{children:[(0,Z.jsx)(w,{children:"Status:"})," ",u]}),(0,Z.jsxs)("p",{children:[(0,Z.jsx)(w,{children:"Release date:"})," ",a]})]})]})},_=t(9178),O=t(724),C=t(2940),P=t(2007),S=t.n(P),T=g.Z.button(c||(c=(0,x.Z)(["\n  display: inline-block;\n  padding: 10px 15px;\n  background-color: #fff;\n  border: 2px solid #000;\n  border-radius: 5px;\n  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;\n  cursor: pointer;\n  width: 100px;\n  margin-bottom: 10px;\n  font-size: 14px;\n  font-weight: bold;\n  :hover {\n    color: coral;\n    border: 2px solid coral;\n  }\n"]))),R=function(e){var n=e.children,t=e.onClick,r=e.type;return(0,Z.jsx)(T,{onClick:t,type:r,children:n})},E=R;R.defaultProps={type:"submit"},R.prototypes={onClick:S().func.isRequired,type:S().oneOf(["submit","button","reset"]),children:S().element.isRequired};var F=function(){var e,n=(0,d.useState)({}),t=(0,p.Z)(n,2),r=t[0],a=t[1],i=(0,d.useState)(!1),s=(0,p.Z)(i,2),o=s[0],c=s[1],l=(0,d.useState)(null),x=(0,p.Z)(l,2),g=x[0],m=x[1],b=(0,d.useState)(!1),y=(0,p.Z)(b,2),j=y[0],w=y[1],P=(0,v.s0)(),S=(null===(e=(0,v.TH)().state)||void 0===e?void 0:e.from)||"/",T=(0,v.UO)().movieId;(0,d.useEffect)((function(){var e=function(){var e=(0,u.Z)(f().mark((function e(){var n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(!0),e.next=4,(0,O.Pg)(T);case 4:(n=e.sent).length||w(!0),a(n),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),m(e.t0.data.message),console.log(e.t0.data.message);case 13:return e.prev=13,c(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,9,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[T]);var R=(0,d.useCallback)((function(){return P(S)}),[S,P]);return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(C.Z,{children:[Boolean(o)&&(0,Z.jsx)(_.Z,{}),(0,Z.jsx)(E,{onClick:R,type:"button",children:"Go back"}),g&&(0,Z.jsx)("p",{children:"Oops. Something goes wrong. Please try again."}),!j&&(0,Z.jsx)("p",{children:"There is no information. Please try again."}),(0,Z.jsx)(k,{movie:r}),(0,Z.jsxs)("ul",{children:[(0,Z.jsx)("li",{children:(0,Z.jsx)(h.rU,{to:"cast",state:{from:S},children:"Cast"})}),(0,Z.jsx)("li",{children:(0,Z.jsx)(h.rU,{to:"reviews",state:{from:S},children:"Reviews"})})]}),(0,Z.jsx)(v.j3,{})]})})}},9178:function(e,n,t){"use strict";var r=t(6286),a=t(184);n.Z=function(){return(0,a.jsx)(r.B7,{colors:["#51E5FF","#7DE2D1","#FF7E6B"],wrapperStyle:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}})}},724:function(e,n,t){"use strict";t.d(n,{Df:function(){return o},Pg:function(){return c},Pt:function(){return l},bz:function(){return p},iA:function(){return u}});var r=t(5861),a=t(4687),i=t.n(a),s=t(1912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"e6316174af6222f390b70a86dd33c4fc"}}),o=function(){var e=(0,r.Z)(i().mark((function e(){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/trending/all/week",{});case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(n),{});case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(n,"/credits"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(n,"/reviews"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/search/movie?query=".concat(n),{});case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},888:function(e,n,t){"use strict";var r=t(9047);function a(){}function i(){}i.resetWarningCache=a,e.exports=function(){function e(e,n,t,a,i,s){if(s!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:i,resetWarningCache:a};return t.PropTypes=t,t}},2007:function(e,n,t){e.exports=t(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=659.dedbabe1.chunk.js.map