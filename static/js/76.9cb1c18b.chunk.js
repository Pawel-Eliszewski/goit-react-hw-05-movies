"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{76:function(e,t,r){r.r(t),r.d(t,{default:function(){return l}});var n=r(439),a=r(791),c=r(689),s=r(984),u=r(390),o="Cast_list__GlWio",i="Cast_item__a0CDL",p="Cast_name__6UbFm",h=r(184);function l(){var e=(0,a.useState)([]),t=(0,n.Z)(e,2),l=t[0],f=t[1],v=(0,c.UO)().movieId;return(0,a.useEffect)((function(){u.Z.fetchMovieCast(v,f)}),[v]),(0,h.jsx)(h.Fragment,{children:0!==l.length?(0,h.jsx)("ul",{className:o,children:l.map((function(e){return(0,h.jsxs)("li",{id:e.id,className:i,children:[e.profile_path?(0,h.jsx)("img",{src:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/".concat(e.profile_path),width:"100",height:"150",alt:e.name}):(0,h.jsx)("img",{src:r(490),width:"100",height:"150",alt:e.name}),(0,h.jsx)("p",{className:p,children:e.name}),(0,h.jsxs)("p",{children:["Character: ",e.character]})]},(0,s.x0)())}))}):(0,h.jsx)("p",{children:"We don`t have any cast for this movie."})})}},390:function(e,t,r){var n=r(861),a=r(757),c=r.n(a),s=r(243),u="https://api.themoviedb.org/3",o="839697383a813005be150e7d8de4d319",i=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(u,"/trending/movie/day"),{params:{api_key:o}});case 3:return r=e.sent,e.next=6,t(r.data.results);case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t,r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(u,"/search/movie"),{params:{api_key:o,query:t}});case 3:return n=e.sent,e.next=6,r(n.data.results);case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,r){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(c().mark((function e(t,r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(u,"/movie/").concat(t),{params:{api_key:o}});case 3:return n=e.sent,e.next=6,r(n.data);case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t,r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(u,"/movie/").concat(t,"/credits"),{params:{api_key:o}});case 3:return n=e.sent,e.next=6,r(n.data.cast);case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t,r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(u,"/movie/").concat(t,"/reviews"),{params:{api_key:o}});case 3:return n=e.sent,e.next=6,r(n.data.results);case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,r){return e.apply(this,arguments)}}(),v={fetchTrendingMovies:i,fetchQueryMovies:p,fetchMovieDetails:h,fetchMovieCast:l,fetchMovieReviews:f};t.Z=v},490:function(e,t,r){e.exports=r.p+"static/media/noImgPlaceholder.438889959e8817a9033d.jpg"},984:function(e,t,r){r.d(t,{x0:function(){return n}});var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=76.9cb1c18b.chunk.js.map