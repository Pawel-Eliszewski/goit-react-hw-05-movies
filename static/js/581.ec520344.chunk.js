"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[581],{510:function(e,t,n){n.d(t,{e:function(){return c}});var r=n(87),o=n(984),i={form:"MovieList_form__LHsxO",list:"MovieList_list__yjDCC"},u=n(184),c=function(e){var t=e.movies,n=e.fromPage;return(0,u.jsx)("ul",{className:i.list,children:t.map((function(e){return(0,u.jsx)("li",{id:e.id,className:i.item,children:(0,u.jsx)(r.rU,{to:"/movies/".concat(e.id),state:{from:n},children:e.title||e.name})},(0,o.x0)())}))})}},581:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(439),o=n(791),i=n(87),u=n(984),c=n(861),s=n(757),a=n.n(s),f=function(){var e=(0,c.Z)(a().mark((function e(t){var n,r,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query,r=t.setQueryMovies,o={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Mzk2OTczODNhODEzMDA1YmUxNTBlN2Q4ZGU0ZDMxOSIsInN1YiI6IjY0OTE5ZGYxYzJmZjNkMDBlMmUyMWJmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IbO3a4f3FNpftElFUbgd3_z8DfrptFKWxvdZo4ijCfs"}},e.next=4,fetch("https://api.themoviedb.org/3/search/movie?query="+encodeURIComponent(n.trim())+"&page=1",o).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(e){r(e.results)})).catch((function(e){console.error(e)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=n(689),m=n(510),h="Movies_form__4ow+Z",v=n(184);function d(){var e=(0,i.lr)(),t=(0,r.Z)(e,2),n=t[0],c=t[1],s=(0,o.useState)([]),a=(0,r.Z)(s,2),d=a[0],p=a[1];return(0,o.useEffect)((function(){var e=n.toString().slice(6);f({query:e,setQueryMovies:p})}),[n]),(0,v.jsxs)("div",{children:[(0,v.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget;c({query:t.elements.query.value}),t.reset()},className:h,children:[(0,v.jsx)("input",{type:"text",name:"query",id:(0,u.x0)(),autoComplete:"off",placeholder:"Movie title",required:!0}),(0,v.jsx)("button",{type:"submit",children:"Search"})]}),(0,v.jsx)(l.j3,{}),d.length>0?(0,v.jsx)(m.e,{movies:d,fromPage:"movies"}):null]})}},861:function(e,t,n){function r(e,t,n,r,o,i,u){try{var c=e[i](u),s=c.value}catch(a){return void n(a)}c.done?t(s):Promise.resolve(s).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var u=e.apply(t,n);function c(e){r(u,o,i,c,s,"next",e)}function s(e){r(u,o,i,c,s,"throw",e)}c(void 0)}))}}n.d(t,{Z:function(){return o}})},984:function(e,t,n){n.d(t,{x0:function(){return r}});var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=581.ec520344.chunk.js.map