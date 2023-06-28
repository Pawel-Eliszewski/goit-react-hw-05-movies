"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[868],{868:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var n=r(439),a=r(791),s=r(689),c=r(87),i=function(e){return e.release_date?e.release_date.slice(0,4):e.first_air_date?e.first_air_date.slice(0,4):void 0},o=function(e){return Math.round(10*e.vote_average)},u=function(e){if(e.genres)return e.genres.map((function(e){return e.name})).join(", ")},l=r(809),p=r(390),v={btn:"MovieDetails_btn__7L5IF",main:"MovieDetails_main__Q9jrF",div:"MovieDetails_div__-27Pl",desc:"MovieDetails_desc__nunY6",info:"MovieDetails_info__qv2SI"},h=r(184);function d(){var e=(0,a.useState)(""),t=(0,n.Z)(e,2),d=t[0],f=t[1],m=(0,s.s0)(),x=(0,s.TH)(),_=(0,s.UO)().movieId;(0,a.useEffect)((function(){p.Z.fetchMovieDetails(_,f)}),[_]);return(0,h.jsxs)("main",{className:v.main,children:[(0,h.jsx)("button",{onClick:function(){"home"===x.state.from?m("/"):m("/movies?".concat(x.state.query))},className:v.btn,children:"\u2190 Go back"}),(0,h.jsxs)("div",{className:v.div,children:[d.poster_path?(0,h.jsx)("img",{className:v.img,src:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/".concat(d.poster_path),width:"200",height:"300",alt:d.name||d.title}):(0,h.jsx)("img",{src:r(490),width:"200",height:"300",alt:d.name||d.title}),(0,h.jsxs)("div",{className:v.desc,children:[(0,h.jsxs)("h1",{children:[d.name||d.title," (",i(d),")"]}),(0,h.jsxs)("p",{children:["User score: ",o(d),"%"]}),(0,h.jsx)("h3",{children:"Overview"}),(0,h.jsx)("p",{children:d.overview}),(0,h.jsx)("h4",{children:"Genres"}),(0,h.jsx)("p",{children:u(d)})]})]}),(0,h.jsxs)("div",{className:v.info,children:[(0,h.jsx)("h6",{children:"Additional information"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(c.rU,{to:"cast",state:x.state,children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(c.rU,{to:"reviews",state:x.state,children:"Reviews"})})]})]}),(0,h.jsx)(a.Suspense,{fallback:(0,h.jsx)(l.a,{}),children:(0,h.jsx)(s.j3,{})})]})}},390:function(e,t,r){var n=r(861),a=r(757),s=r.n(a),c=r(243),i="https://api.themoviedb.org/3",o="839697383a813005be150e7d8de4d319",u=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(i,"/trending/movie/day"),{params:{api_key:o}});case 3:return r=e.sent,e.next=6,t(r.data.results);case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t,r){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(i,"/search/movie"),{params:{api_key:o,query:t}});case 3:return n=e.sent,e.next=6,r(n.data.results);case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(t,r){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(i,"/movie/").concat(t),{params:{api_key:o}});case 3:return n=e.sent,e.next=6,r(n.data);case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(s().mark((function e(t,r){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(i,"/movie/").concat(t,"/credits"),{params:{api_key:o}});case 3:return n=e.sent,e.next=6,r(n.data.cast);case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,r){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(s().mark((function e(t,r){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(i,"/movie/").concat(t,"/reviews"),{params:{api_key:o}});case 3:return n=e.sent,e.next=6,r(n.data.results);case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,r){return e.apply(this,arguments)}}(),d={fetchTrendingMovies:u,fetchQueryMovies:l,fetchMovieDetails:p,fetchMovieCast:v,fetchMovieReviews:h};t.Z=d},490:function(e,t,r){e.exports=r.p+"static/media/noImgPlaceholder.438889959e8817a9033d.jpg"}}]);
//# sourceMappingURL=868.3d5cdf40.chunk.js.map