(this["webpackJsonpreact-movie-searcher"]=this["webpackJsonpreact-movie-searcher"]||[]).push([[0],{11:function(e,t,c){e.exports={items:"Movie_items__3ajfD",input:"Movie_input__3ZI-K",pages:"Movie_pages__39u8f",flex:"Movie_flex__1EVK4",paginationContainerItem:"Movie_paginationContainerItem__2GcCX",paginationItem:"Movie_paginationItem__1Kba1",paginationItemActive:"Movie_paginationItemActive__1jRL1",paginationBtn:"Movie_paginationBtn__34EmZ"}},13:function(e,t,c){e.exports={mt10:"ShowCard_mt10__202lB",img:"ShowCard_img__1zu_c",bg:"ShowCard_bg__3RE1D",bg1:"ShowCard_bg1__1NCLR",imgBg:"ShowCard_imgBg__1AnCN",main:"ShowCard_main__3hHVD",poster:"ShowCard_poster__1DxWX"}},16:function(e,t,c){e.exports={header:"Header_header___AbcZ",wrapper:"Header_wrapper__35Sya",active:"Header_active__7XzYf"}},37:function(e,t,c){e.exports={card:"Card_card__qacYO"}},47:function(e,t,c){},48:function(e,t,c){},72:function(e,t,c){e.exports={items:"Trending_items__1UW4W"}},73:function(e,t){},74:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),i=c(19),r=c.n(i),s=(c(47),c(48),c(12)),o=c(16),j=c.n(o),l=function(e){return Object(a.jsx)("header",{className:j.a.header,children:Object(a.jsxs)("div",{className:j.a.wrapper,children:[Object(a.jsx)(s.b,{to:"/trending",activeClassName:j.a.active,children:"Trending"}),Object(a.jsx)(s.b,{to:"/movie",activeClassName:j.a.active,children:"Movie"}),Object(a.jsx)(s.b,{to:"/tvshow",activeClassName:j.a.active,children:"TV show"})]})})},d=c(3),u=c(40),b=c(37),h=c.n(b),g=c.p+"static/media/photo_2020-12-28_16-51-34.c89219cf.jpg",p=function(e){var t=e.poster?"https://image.tmdb.org/t/p/original".concat(e.poster):g;return Object(a.jsxs)("div",{className:h.a.card,children:[Object(a.jsx)(s.b,{to:"/".concat(e.path),children:Object(a.jsx)("img",{src:t})}),Object(a.jsx)("div",{children:e.title}),Object(a.jsx)("div",{children:e.date?e.date.replace(/-/g,"/"):""})]})},O=c(11),v=c.n(O),_=c(5),m=c(41),x=c(4),f=c(22),N="SET_NEW_RESULT",C="SET_TOTAL_PAGE",w="CHANGE_VALUE_MOVIE",S="NOT_FOUND",y="SET_CURRENT_PAGE",G="SET_IS_FETCHING",E={query:"",sought:"",textForPagination:"",currentPage:1,totalPage:"",result:[],noResult:"You can find something",isFetching:!1,url:"https://api.themoviedb.org/3/search/movie?api_key=7f3d862c78d7078a1d152442970fcce6&language=en-US"},T=function(){return{type:G}},I=function(e,t){return{type:N,result:e,query:t}},P=function(e){return{type:C,page:e}},F=function(){return{type:S}},R=function(e){return{type:y,page:e}},k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return function(a){a(T());var n=t.length>0?"&query=".concat(t):"";f.get(e+"&page="+c+n).then((function(e){0===e.data.results.length?(a(F()),a(P("")),a(I([],t)),a(T())):(a(R(c)),a(I(e.data.results,t)),a(P(e.data.total_pages)),a(T()))}))}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(x.a)(Object(x.a)({},e),{},{result:Object(m.a)(t.result),sought:t.query,query:""});case C:return Object(x.a)(Object(x.a)({},e),{},{totalPage:t.page});case w:return Object(x.a)(Object(x.a)({},e),{},{query:t.value});case S:return Object(x.a)(Object(x.a)({},e),{},{noResult:"I couldn't find it. Try again"});case y:return Object(x.a)(Object(x.a)({},e),{},{currentPage:t.page});case G:return Object(x.a)(Object(x.a)({},e),{},{isFetching:!e.isFetching});default:return e}},B=function(){return Object(a.jsx)("div",{className:"preloader",children:Object(a.jsx)("div",{className:"preloaderWrapper",children:Object(a.jsxs)("div",{id:"floatingCirclesG",children:[Object(a.jsx)("div",{className:"f_circleG",id:"frotateG_01"}),Object(a.jsx)("div",{className:"f_circleG",id:"frotateG_02"}),Object(a.jsx)("div",{className:"f_circleG",id:"frotateG_03"}),Object(a.jsx)("div",{className:"f_circleG",id:"frotateG_04"}),Object(a.jsx)("div",{className:"f_circleG",id:"frotateG_05"}),Object(a.jsx)("div",{className:"f_circleG",id:"frotateG_06"}),Object(a.jsx)("div",{className:"f_circleG",id:"frotateG_07"}),Object(a.jsx)("div",{className:"f_circleG",id:"frotateG_08"})]})})})},M=function(e){var t=Object(_.b)(),c=Object(_.c)((function(e){return e.moviePage.query})),i=Object(_.c)((function(e){return e.moviePage.result})),r=Object(_.c)((function(e){return e.moviePage.noResult})),s=Object(_.c)((function(e){return e.moviePage.url})),o=Object(_.c)((function(e){return e.moviePage.totalPage})),j=Object(_.c)((function(e){return e.moviePage.sought})),l=Object(_.c)((function(e){return e.moviePage.currentPage})),d=Object(_.c)((function(e){return e.moviePage.isFetching})),b=i.map((function(e){return Object(a.jsx)(p,{date:e.release_date,title:e.title,id:e.id,poster:e.poster_path,path:"movie/movie-".concat(e.id)})}));console.log(l);for(var h=[],g=1;g<=o;g++)h.push(g);var O=function(e){var c=e.totalPage/10,i=Object(n.useState)(1),r=Object(u.a)(i,2),o=r[0],d=r[1],b=10*(o-1)+1,g=10*o;return Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{className:v.a.paginationBtn,disabled:1===o,onClick:function(){return d(o-1)},children:"<<"}),Object(a.jsx)("div",{className:v.a.paginationContainerItem,children:h.filter((function(e){return e>=b&&e<g+1})).map((function(e){return Object(a.jsx)("span",{className:l===e?v.a.paginationItemActive:v.a.paginationItem,onClick:function(){return t(k(s,j,e))},children:e})}))}),Object(a.jsx)("button",{className:v.a.paginationBtn,disabled:c<o,onClick:function(){d(o+1)},children:">>"})]})};return Object(a.jsxs)(a.Fragment,{children:[d&&Object(a.jsx)(B,{}),Object(a.jsxs)("div",{className:v.a.flex,children:[Object(a.jsx)("div",{className:v.a.pages,children:j.length>0?"Results on request: ".concat(j):""}),Object(a.jsxs)("div",{className:v.a.input,children:[Object(a.jsx)("input",{placeholder:"Type here...",type:"text",value:c,onChange:function(e){return t((c=e.currentTarget.value,{type:w,value:c}));var c}}),Object(a.jsx)("button",{onClick:function(){return t(k(s,c))},children:"Search"})]})]}),Object(a.jsx)("div",{className:v.a.pages,children:o>0?Object(a.jsx)(O,{totalPage:o}):""}),Object(a.jsx)("div",{className:v.a.items,children:0!==b.length?b:Object(a.jsx)("p",{children:r})})]})},q=c(13),U=c.n(q),L="SET_RESULT",D="SET_FETCHING",H={result:{},isFetching:!1},V=function(){return{type:D}},W=function(e,t){return function(c){c(V()),f.get("https://api.themoviedb.org/3/".concat(e,"/").concat(t,"?api_key=7f3d862c78d7078a1d152442970fcce6&language=en-US")).then((function(e){var t;c((t=e.data,{type:L,result:t})),c(V())}))}},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(x.a)(Object(x.a)({},e),{},{result:t.result});case D:return Object(x.a)(Object(x.a)({},e),{},{isFetching:!e.isFetching});default:return e}},K=Object(d.e)((function(e){var t=Object(_.b)(),c=Object(_.c)((function(e){return e.showInfo.result})),i=Object(_.c)((function(e){return e.showInfo.isFetching})),r=e.match.params.path.split("-")[0],s=parseInt(e.match.params.path.split("-")[1]);Object(n.useEffect)((function(){t(W(r,s))}),[]);var o="https://image.tmdb.org/t/p/original"+c.poster_path;return Object(a.jsxs)(a.Fragment,{children:[i&&Object(a.jsx)(B,{}),Object(a.jsxs)("div",{className:U.a.mt10,children:[Object(a.jsxs)("div",{className:U.a.main,children:[Object(a.jsx)("img",{src:c.poster_path?o:g,alt:"",className:U.a.poster}),Object(a.jsxs)("div",{className:U.a.description,children:[Object(a.jsx)("h2",{children:c.title}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Tagline:"})," ",c.tagline]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Overview:"}),"  ",c.overview]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Genres:"})," ",c.genres&&c.genres.map((function(e){return e.name})).join(", ")]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Runtime:"})," ",c.runtime]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Release date:"})," ",c.release_date&&c.release_date.replace(/-/g,".")]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Status:"})," ",c.status]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"For adult:"})," ",c.adult?"YES":"NO"]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Original language:"})," ",c.original_language&&c.original_language.toUpperCase()]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Budget:"})," $ ",c.budget," "]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Revenue:"})," $ ",c.revenue]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Vote average:"})," ",c.vote_average]})]})]}),c.backdrop_path&&Object(a.jsxs)("div",{className:U.a.bg1,children:[Object(a.jsx)("div",{className:U.a.bg}),Object(a.jsx)("img",{className:U.a.img,src:"https://image.tmdb.org/t/p/original".concat(c.backdrop_path),alt:""})]})]},Date.now())]})})),X=(c(72),function(e){return Object(a.jsx)("div",{children:"In developing"})});var Z=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(l,{}),Object(a.jsxs)("div",{className:"block",children:[Object(a.jsx)(d.a,{path:"/trending/:path?",render:function(){return Object(a.jsx)(X,{})}}),Object(a.jsx)(d.a,{exact:!0,path:"/tvshow/:path?",render:function(){return Object(a.jsx)(X,{})}}),Object(a.jsx)(d.a,{exact:!0,path:"/movie",render:function(){return Object(a.jsx)(M,{})}}),Object(a.jsx)(d.a,{exact:!0,path:"/movie/:path",render:function(){return Object(a.jsx)(K,{})}})]})]})},z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,75)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),i(e),r(e)}))},J=c(15),$=c(39),Q=(c(73),Object(J.c)({moviePage:A,showInfo:Y})),ee=Object(J.d)(Q,Object(J.a)($.a));window.store=ee;var te=ee;te.getState(),r.a.render(Object(a.jsx)(s.a,{children:Object(a.jsx)(_.a,{store:te,children:Object(a.jsx)(Z,{})})}),document.getElementById("root")),z()}},[[74,1,2]]]);
//# sourceMappingURL=main.267ec62e.chunk.js.map