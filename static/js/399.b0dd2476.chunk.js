"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[399],{399:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var i=t(439),r=t(791),s=t(689),o=t(87),c=t(861),a=t(757),l=t.n(a),d=function(){var e=(0,c.Z)(l().mark((function e(n){var t,i,r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.movieId,i=n.setMovie,r={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Mzk2OTczODNhODEzMDA1YmUxNTBlN2Q4ZGU0ZDMxOSIsInN1YiI6IjY0OTE5ZGYxYzJmZjNkMDBlMmUyMWJmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IbO3a4f3FNpftElFUbgd3_z8DfrptFKWxvdZo4ijCfs"}},e.next=4,fetch("https://api.themoviedb.org/3/movie/"+encodeURIComponent(t),r).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(e){i(e)})).catch((function(e){console.error(e)}));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(e){return e.release_date?e.release_date.slice(0,4):e.first_air_date?e.first_air_date.slice(0,4):void 0},u=function(e){return Math.round(10*e.vote_average)},f=function(e){if(e.genres)return e.genres.map((function(e){return e.name})).join(", ")},v={btn:"MovieDetails_btn__7L5IF",main:"MovieDetails_main__Q9jrF",div:"MovieDetails_div__-27Pl",desc:"MovieDetails_desc__nunY6",info:"MovieDetails_info__qv2SI"},m=t(184);function j(){var e=(0,r.useState)(""),n=(0,i.Z)(e,2),t=n[0],c=n[1],a=(0,s.s0)(),l=(0,s.TH)(),j=(0,s.UO)().movieId;(0,r.useEffect)((function(){d({movieId:j,setMovie:c})}),[j]);return(0,m.jsxs)("main",{className:v.main,children:[(0,m.jsx)("button",{onClick:function(){"home"===l.state?a("/"):a(-1)},className:v.btn,children:"\u2190 Go back"}),(0,m.jsxs)("div",{className:v.div,children:[(0,m.jsx)("img",{className:v.img,src:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/".concat(t.poster_path),width:"200",height:"300",alt:t.name||t.title}),(0,m.jsxs)("div",{className:v.desc,children:[(0,m.jsxs)("h1",{children:[t.name||t.title," (",h(t),")"]}),(0,m.jsxs)("p",{children:["User score: ",u(t),"%"]}),(0,m.jsx)("h3",{children:"Overview"}),(0,m.jsx)("p",{children:t.overview}),(0,m.jsx)("h4",{children:"Genres"}),(0,m.jsx)("p",{children:f(t)})]})]}),(0,m.jsxs)("div",{className:v.info,children:[(0,m.jsx)("h6",{children:"Additional information"}),(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:(0,m.jsx)(o.rU,{to:"cast",children:"Cast"})}),(0,m.jsx)("li",{children:(0,m.jsx)(o.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,m.jsx)(r.Suspense,{fallback:(0,m.jsx)("div",{children:"Loading..."}),children:(0,m.jsx)(s.j3,{})})]})}},861:function(e,n,t){function i(e,n,t,i,r,s,o){try{var c=e[s](o),a=c.value}catch(l){return void t(l)}c.done?n(a):Promise.resolve(a).then(i,r)}function r(e){return function(){var n=this,t=arguments;return new Promise((function(r,s){var o=e.apply(n,t);function c(e){i(o,r,s,c,a,"next",e)}function a(e){i(o,r,s,c,a,"throw",e)}c(void 0)}))}}t.d(n,{Z:function(){return r}})}}]);
//# sourceMappingURL=399.b0dd2476.chunk.js.map