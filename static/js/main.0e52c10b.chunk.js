(this["webpackJsonpmovies-website"]=this["webpackJsonpmovies-website"]||[]).push([[0],{127:function(e,t,n){},128:function(e,t,n){"use strict";n.r(t);var r,a,i,o,c=n(0),s=n(56),u=n.n(s),d=n(3),l=n.n(d),p=n(6),v=n(28),b=n(47),j=n(13),m=n(14),h=n(38),O=n(12),_=n(21),f=n(48),g=n(164),x=n(2),y=Object(m.c)(g.a)(r||(r=Object(j.a)(["\n  padding: 1rem 1rem 0 1rem;\n"]))),w=[],A=m.c.div(a||(a=Object(j.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  height: auto;\n  overflow: hidden;\n  overflow-x: auto;\n"]))),T=m.c.div(i||(i=Object(j.a)(["\n  width: 300px;\n  min-width: 300px;\n  max-width: 300px;\n  overflow: hidden;\n  display: grid;\n  margin: 0 1rem 0 0;\n  padding: 0;\n\n  &:last-child {\n    margin: 0;\n  }\n"]))),C=m.c.div(o||(o=Object(j.a)(["\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: auto auto;\n  grid-gap: 1rem;\n"])));function E(e){var t=e.title,n=void 0===t?"":t,r=e.error,a=void 0===r?"":r,i=e.data,o=void 0===i?w:i,c=e.isLoading,s=void 0===c||c,u=e.posterHeight,d=void 0===u?300:u,v=e.posterWidth,b=void 0===v?300:v,j=e.onClick,m=void 0===j?Object(p.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",void 0);case 1:case"end":return e.stop()}}),e)}))):j,h=Object(x.jsxs)(C,{className:"horizontal_movie_list__no_scroll",children:[Object(x.jsx)(y,{variant:"h4",className:"horizontal_movie_list__title",children:n}),Object(x.jsx)(A,{className:"horizontal_movie_list",children:Array.isArray(o)&&o.map((function(e){return Object(x.jsx)(T,{className:"horizontal_movie_list_item",children:Object(x.jsx)(q,{data:e,posterWidth:b,posterHeight:d,onClick:m})},Object(f.a)())}))})]});return s&&(h=Object(x.jsx)("h1",{className:"horizontal_movies_list__loading_text",children:"...Loading data"})),a&&(h=Object(x.jsx)("h1",{className:"horizontal_movies_list__error_text",children:"Was a error"})),h}var k,N,F,H,D,I,L,P=n(157),S="https://api.themoviedb.org",M="https://image.tmdb.org/t/p/original",W="e359e1ad0420182dea68eadd2515248c",R=Object(m.c)(P.a)(k||(k=Object(j.a)(["\n  margin: 0;\n  padding: 0;\n  display: grid;\n"]))),B=m.c.div(N||(N=Object(j.a)(["\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: ","px;\n  grid-template-rows: ","px auto;\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n\n  &:hover {\n    .movie_card_cover__movie {\n      visibility: visible;\n    }\n  }\n"])),(function(e){return e.posterWidth}),(function(e){return e.posterHeight})),V=m.c.div(F||(F=Object(j.a)(["\n  transition: all linear 100ms;\n  visibility: hidden;\n  //  background: var(--movie-card-content-container-hover-background-color);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 10;\n"]))),U=m.c.img(H||(H=Object(j.a)(["\n  display: block;\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n"]))),z=m.c.div(D||(D=Object(j.a)(["\n  position: relative;\n  overflow: hidden;\n"]))),G=m.c.div(I||(I=Object(j.a)(["\n  width: 100%;\n  padding: 0.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: var(--movie-card-content-container-background-color);\n  transition: all linear 125ms;\n"]))),X=Object(m.c)(g.a)(L||(L=Object(j.a)(["\n  text-align: center;\n  color: var(--movie-card-content-text-color);\n"])));function q(e){var t=e.data,n=e.posterHeight,r=void 0===n?450:n,a=e.posterWidth,i=void 0===a?300:a,o=e.onClick,c=void 0===o?Object(p.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",void 0);case 1:case"end":return e.stop()}}),e)}))):o;return Object(x.jsx)(R,{focusRipple:!0,onClick:function(){var e=Object(p.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c(n,t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:Object(x.jsxs)(B,{posterWidth:i,posterHeight:r,className:"movie_card",children:[Object(x.jsxs)(z,{className:"movie_card_cover__image_container",children:[Object(x.jsx)(U,{alt:t.original_title,src:"".concat(M,"/").concat(t.poster_path),className:"movie_card_cover__image_container__image"}),Object(x.jsx)(V,{className:"movie_card_cover__movie"})]}),Object(x.jsx)(G,{className:"movie_card__content_container",children:Object(x.jsx)(X,{variant:"body1",className:"movie_card__content_container__title",children:t.original_title})})]})})}var Y,J,Q,$,K=n(165),Z=n(158),ee=n(166),te=n(167),ne=n(162),re=Object(m.c)(K.a)(Y||(Y=Object(j.a)(["\n  display: grid;\n  display: flex;\n  alignitems: center;\n  margin: 1rem;\n  flex: 1;\n"]))),ae=Object(m.c)(Z.a)(J||(J=Object(j.a)(["\n  margin: 0 0 0 1rem;\n  width: 100%;\n  flex: 1;\n"]))),ie=Object(m.c)(ee.a)(Q||(Q=Object(j.a)(["\n  padding: 10px;\n"]))),oe=Object(m.c)(te.a)($||($=Object(j.a)(["\n  height: 28px;\n  margin: 4px;\n"])));function ce(e){var t=e.placeholder,n=void 0===t?"Search":t,r=e.query,a=void 0===r?"":r,i=e.setQuery;return Object(x.jsxs)(re,{component:"form",children:[Object(x.jsx)(ae,{placeholder:n,value:a,onChange:function(){var e=Object(p.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target,e.abrupt("return",i(null===n||void 0===n?void 0:n.value));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),inputProps:{"aria-label":"search movies"}}),Object(x.jsx)(oe,{orientation:"vertical"}),Object(x.jsx)(ie,{type:"submit","aria-label":"search",children:Object(x.jsx)(ne.a,{})})]})}var se,ue,de,le,pe,ve,be,je=n(7),me=n(160),he=n(149),Oe=n(163),_e=m.c.header(se||(se=Object(j.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background: var(--hero-item-background-color);\n"]))),fe=Object(m.c)(g.a)(ue||(ue=Object(j.a)(["\n  color: white;\n"]))),ge=Object(m.c)(g.a)(de||(de=Object(j.a)(["\n  width: 100%;\n  padding: 0 0 0 1rem;\n"]))),xe={dynamicBullets:!0},ye=m.c.div(le||(le=Object(j.a)([""]))),we=Object(m.c)(me.a)(pe||(pe=Object(j.a)(["\n  height: ",";\n"])),(function(e){var t=e.height,n=void 0===t?"100vh":t;return Object(O.isNumber)(n)?"".concat(n,"px"):n})),Ae=m.c.img(ve||(ve=Object(j.a)(["\n  display: block;\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n"])));function Te(e){var t=e.height,n=void 0===t?"100vh":t,r=e.setting,a=void 0===r?xe:r,i=e.data;return Object(x.jsxs)(ye,{children:[Object(x.jsx)(we,Object(je.a)(Object(je.a)({height:n,className:"hero"},a),{},{children:Object(x.jsxs)(he.a,{className:"hero__container",children:[Object(x.jsx)(Ae,{alt:i.original_title,src:"".concat(M,"/").concat(i.poster_path),className:"hero__container__cover_image"}),Object(x.jsx)(_e,{className:"hero__container__header",children:Object(x.jsx)(fe,{variant:"h1",className:"hero__container__header__title",children:i.original_title})})]})})),Object(x.jsx)("br",{}),Object(x.jsxs)(Oe.a,{container:!0,spacing:4,children:[Object(x.jsx)(Oe.a,{item:!0,xs:12,children:Object(x.jsx)(ge,{variant:"body1",className:"hero__container__header__title",children:i.overview})}),Object(x.jsx)(Oe.a,{item:!0,xs:12,children:Object(x.jsx)(ge,{variant:"body1",className:"hero__container__header__title",children:i.tagline})})]}),Object(x.jsx)("br",{})]})}!function(e){e.FETCH_INITIAL_DATA="@DASHBOARD -> FETCH: initial Data",e.FETCH_POPULAR_MOVIES_DATA="@DASHBOARD -> FETCH: popular movies Data",e.FETCH_NOW_PLAYING_MOVIES_DATA="@DASHBOARD -> FETCH: now playing movies Data",e.FETCH_LATEST_MOVIES_DATA="@DASHBOARD -> FETCH: latest movies Data",e.FETCH_RECOMMENDATIONS_MOVIES_DATA="@DASHBOARD -> FETCH: recommendations movies Data",e.FETCH_UPCOMING_MOVIES_DATA="@DASHBOARD -> FETCH: upcoming movies Data",e.FETCH_SEARCH_MOVIES_DATA="@DASHBOARD -> FETCH: searching movies Data"}(be||(be={}));var Ce=be;var Ee,ke={error:"",isLoading:!0,data:[]},Ne={movies:{popular:ke,nowPlaying:ke,upcoming:ke,latest:Object(je.a)(Object(je.a)({},ke),{},{isLoading:!1}),recommendations:Object(je.a)(Object(je.a)({},ke),{},{isLoading:!1}),search:Object(je.a)(Object(je.a)({},ke),{},{isLoading:!1})}},Fe=n(91),He=n.n(Fe).a.create({baseURL:"".concat(S,"/3/"),timeout:1e3});function De(){return(De=Object(p.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(p.a)(l.a.mark((function e(n,r){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,He.get("movie/now_playing",{params:{page:t,api_key:W}});case 2:if(a=e.sent,Object(O.isEmpty)(a)){e.next=5;break}return e.abrupt("return",n(a));case 5:return e.abrupt("return",r(a));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ie(){return(Ie=Object(p.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(p.a)(l.a.mark((function e(n,r){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,He.get("movie/popular",{params:{page:t,api_key:W}});case 2:if(a=e.sent,Object(O.isEmpty)(a)){e.next=5;break}return e.abrupt("return",n(a));case 5:return e.abrupt("return",r(a));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Le(){return(Le=Object(p.a)(l.a.mark((function e(t,n){var r,a=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>2&&void 0!==a[2]&&a[2],e.abrupt("return",new Promise(function(){var e=Object(p.a)(l.a.mark((function e(a,i){var o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,He.get("search/movie",{params:{query:t,page:n,include_adult:r,api_key:W}});case 4:if(o=e.sent,Object(O.isEmpty)(o)){e.next=7;break}return e.abrupt("return",a(o));case 7:return e.abrupt("return",i(o));case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Pe(){return(Pe=Object(p.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(p.a)(l.a.mark((function e(n,r){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,He.get("movie/upcoming",{params:{page:t,api_key:W}});case 2:if(a=e.sent,Object(O.isEmpty)(a)){e.next=5;break}return e.abrupt("return",n(a));case 5:return e.abrupt("return",r(a));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Se=m.c.main(Ee||(Ee=Object(j.a)(["\n  width: 100%;\n  max-width: 100%;\n  min-width: 100%;\n"])));var Me,We={path:"/",name:"Dashboard",component:function(e){var t;Object(b.a)(e);var n=Object(_.f)(),r=Object(h.b)(),a=Object(c.useState)(""),i=Object(v.a)(a,2),o=i[0],s=i[1],u=Object(h.c)((function(e){return e.theme})).current,d=Object(h.c)((function(e){return e.dashboard})).movies;Object(c.useEffect)((function(){o&&function(e,t){return Le.apply(this,arguments)}(o).then((function(e){var t=e.data;r(function(e){var t=e.movies,n=void 0===t?[]:t,r=e.isLoading,a=void 0!==r&&r,i=e.error,o=void 0===i?"":i;return function(){var e=Object(p.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t({type:Ce.FETCH_SEARCH_MOVIES_DATA,payload:{isLoading:a,error:o,data:n||[]}}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}({error:Object(O.isEmpty)(t.results)?"Not found Movies":"",isLoading:!1,movies:t.results}))}))}),[o]),Object(c.useEffect)((function(){(function(e){return Ie.apply(this,arguments)})().then((function(e){var t=e.data;r(function(e){var t=e.movies,n=void 0===t?[]:t,r=e.isLoading,a=void 0===r||r,i=e.error,o=void 0===i?"":i;return function(){var e=Object(p.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t({type:Ce.FETCH_POPULAR_MOVIES_DATA,payload:{isLoading:a,error:o,data:n||[]}}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}({error:Object(O.isEmpty)(t.results)?"Not found Popular Movies":"",isLoading:!1,movies:t.results}))})),function(e){return Pe.apply(this,arguments)}().then((function(e){var t=e.data;r(function(e){var t=e.movies,n=void 0===t?[]:t,r=e.isLoading,a=void 0===r||r,i=e.error,o=void 0===i?"":i;return function(){var e=Object(p.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t({type:Ce.FETCH_UPCOMING_MOVIES_DATA,payload:{isLoading:a,error:o,data:n||[]}}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}({error:Object(O.isEmpty)(t.results)?"Not found Upcoming Movies":"",isLoading:!1,movies:t.results}))})),function(e){return De.apply(this,arguments)}().then((function(e){var t=e.data;r(function(e){var t=e.movies,n=void 0===t?[]:t,r=e.isLoading,a=void 0===r||r,i=e.error,o=void 0===i?"":i;return function(){var e=Object(p.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t({type:Ce.FETCH_NOW_PLAYING_MOVIES_DATA,payload:{isLoading:a,error:o,data:n||[]}}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}({error:Object(O.isEmpty)(t.results)?"Not found NowPlaying Movies":"",isLoading:!1,movies:t.results}))}))}),[]);var j=!!o&&!!d&&!!(null===d||void 0===d?void 0:d.search)&&!!(null===d||void 0===d||null===(t=d.search)||void 0===t?void 0:t.data),m=function(){var e=Object(p.a)(l.a.mark((function e(t,r){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r&&(a="/movie/".concat(r.id),null===t||void 0===t||t.preventDefault(),null===n||void 0===n||n.push(a,r));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(x.jsxs)(Se,{className:"dashboard_screen",children:[Object(x.jsx)(ce,{query:o,setQuery:s}),j&&Object(x.jsx)(E,{title:"Results",posterHeight:(null===u||void 0===u?void 0:u.movieCardPosterHeight)||450,posterWidth:(null===u||void 0===u?void 0:u.movieCardPosterWidth)||300,error:d.search.error,data:d.search.data,isLoading:d.search.isLoading,onClick:m}),!j&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(E,{title:"Top Popular",posterHeight:(null===u||void 0===u?void 0:u.movieCardPosterHeight)||450,posterWidth:(null===u||void 0===u?void 0:u.movieCardPosterWidth)||300,error:d.popular.error,data:d.popular.data,isLoading:d.popular.isLoading,onClick:m}),Object(x.jsx)(E,{title:"Now Playing",posterHeight:(null===u||void 0===u?void 0:u.movieCardPosterHeight)||450,posterWidth:(null===u||void 0===u?void 0:u.movieCardPosterWidth)||300,error:d.nowPlaying.error,data:d.nowPlaying.data,isLoading:d.nowPlaying.isLoading,onClick:m}),Object(x.jsx)(E,{title:"Upcoming",posterHeight:(null===u||void 0===u?void 0:u.movieCardPosterHeight)||450,posterWidth:(null===u||void 0===u?void 0:u.movieCardPosterWidth)||300,error:d.upcoming.error,data:d.upcoming.data,isLoading:d.upcoming.isLoading,onClick:m})]})]})},exact:!0,strict:!1,sensitive:!1};function Re(){return(Re=Object(p.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(p.a)(l.a.mark((function e(n,r){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,He.get("movie/".concat(t),{params:{api_key:W}});case 2:if(a=e.sent,Object(O.isEmpty)(a)){e.next=5;break}return e.abrupt("return",n(a));case 5:return e.abrupt("return",r(a));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(e){e.FETCH_INITIAL_DATA="@DETAILS -> FETCH: initial Data"}(Me||(Me={}));var Be=Me;var Ve,Ue={details:{adult:!1,backdrop_path:"",belongs_to_collection:{id:0,name:"",poster_path:"",backdrop_path:""},budget:0,genres:[],homepage:"",id:0,imdb_id:"",original_language:"",original_title:"",overview:"",popularity:0,poster_path:"",production_companies:[],production_countries:[{iso_3166_1:"",name:""}],release_date:"",revenue:0,runtime:0,spoken_languages:[],status:"",tagline:"",title:"",video:!1,vote_average:0,vote_count:0}},ze=m.c.main(Ve||(Ve=Object(j.a)([""])));var Ge,Xe,qe,Ye,Je,Qe=[We,{path:"/movie/:id",name:"Movie",component:function(e){Object(b.a)(e);var t=Object(h.b)(),n=Object(_.g)().id,r=Object(h.c)((function(e){return e.movie})).details;return Object(c.useEffect)((function(){(function(e){return Re.apply(this,arguments)})(Number(n)).then((function(e){var n=e.data;t(function(e){var t=e.payload;return function(e){return e({type:Be.FETCH_INITIAL_DATA,payload:t})}}({payload:n}))}))}),[]),Object(x.jsx)(ze,{className:"movie_screen",children:Object(x.jsx)(Te,{data:r,height:"80vh"})})},exact:!1,strict:!1,sensitive:!1},{name:"Page 404",component:function(e){return Object(b.a)(e),Object(x.jsx)("main",{className:"not_fount_screen",children:Object(x.jsx)("header",{className:"not_fount_screen__header",children:Object(x.jsx)("h1",{className:"not_fount_screen__header__title",children:"NotFount Screen"})})})},exact:!1,strict:!1,sensitive:!1,showInAppBar:!1}],$e=n(42),Ke=m.c.nav(Ge||(Ge=Object(j.a)(["\n  display: grid;\n  background: var(--menu-container-background-color);\n"]))),Ze=m.c.ul(Xe||(Xe=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n"]))),et=m.c.li(qe||(qe=Object(j.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n\n  &:last-child {\n    margin: 0;\n  }\n"]))),tt=Object(m.c)($e.b)(Ye||(Ye=Object(j.a)(["\n  display: flex;\n  text-decoration: none;\n  color: var(--menu-item-text-color);\n  padding: 1rem;\n  transition: all linear 150ms;\n  cursor: pointer;\n  margin: 0 0 0.5rem 0;\n\n  &:hover {\n    background: var(--menu-item-hover-background-color);\n  }\n"]))),nt=Object(m.c)(g.a)(Je||(Je=Object(j.a)([""])));function rt(e){var t=e.blackList,n=void 0===t?[]:t;return Object(x.jsx)(Ke,{className:"navigation_menu",children:Object(x.jsx)(Ze,{className:"navigation_menu__list",children:Qe.filter((function(e){return!!e.path&&!Object(O.find)(n,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return new RegExp(t,"gi").test((null===e||void 0===e?void 0:e.name)||"")}))})).map((function(e){return Object(x.jsx)(et,{className:"navigation_menu__list__item",children:Object(x.jsx)(tt,{to:e.path||"/",className:"navigation_menu__list__item__link",children:Object(x.jsx)(nt,{className:"navigation_menu__list__item__link__text",variant:"body1",children:e.name})})},Object(f.a)())}))})})}function at(e){var t=e.routes;return Object(x.jsx)(_.c,{children:t.map((function(e){return Object(x.jsx)(_.a,Object(je.a)({},e),Object(f.a)())}))})}var it,ot=n(50);!function(e){e.FETCH_INITIAL_DATA="@NOT_FOUNT -> FETCH: initial Data"}(it||(it={}));var ct=it;function st(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:dt,t=arguments.length>1?arguments[1]:void 0;return Object(je.a)(Object(je.a)({},e),{},{data:t.payload})}var ut,dt={data:{}};!function(e){e.FETCH_INITIAL_DATA="@DASHBOARD -> FETCH: initial Data"}(ut||(ut={}));var lt=ut;function pt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vt,t=arguments.length>1?arguments[1]:void 0;return Object(je.a)(Object(je.a)({},e),{},{current:t.payload})}var vt={darkMode:!0,current:{mainContainerBackgroundColor:"#2F313A",menuWidth:275,menuContainerBackgroundColor:"#1C1F2A",menuItemHoverBackgroundColor:"#2F313A",menuItemHoverTextColor:"#FFFFFF",menuItemTextColor:"#FFFFFF",heroItemBackgroundColor:"rgba(0, 0, 0, 0.4)",movieCardContentContainerBackgroundColor:"#2F313A",movieCardContentContainerHoverBackgroundColor:"rgba(96, 98, 105, 0.7)",movieCardContentTextColor:"#FFFFFF",movieCardPosterHeight:450,movieCardPosterWidth:300,h1:96,h2:60,h3:48,h4:34,h5:24,h6:20,subTitle1:16,subTitle2:14,body1:16,body2:14,buttonText:14,captionText:12,overlineText:12}};var bt=Object(ot.b)({dashboard:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ce.FETCH_POPULAR_MOVIES_DATA:return Object(je.a)(Object(je.a)({},e),{},{movies:Object(je.a)(Object(je.a)({},e.movies),{},{popular:Object(je.a)(Object(je.a)({},e.movies.popular),t.payload)})});case Ce.FETCH_RECOMMENDATIONS_MOVIES_DATA:return Object(je.a)(Object(je.a)({},e),{},{movies:Object(je.a)(Object(je.a)({},e.movies),{},{recommendations:Object(je.a)(Object(je.a)({},e.movies.recommendations),t.payload)})});case Ce.FETCH_UPCOMING_MOVIES_DATA:return Object(je.a)(Object(je.a)({},e),{},{movies:Object(je.a)(Object(je.a)({},e.movies),{},{upcoming:Object(je.a)(Object(je.a)({},e.movies.upcoming),t.payload)})});case Ce.FETCH_SEARCH_MOVIES_DATA:return Object(je.a)(Object(je.a)({},e),{},{movies:Object(je.a)(Object(je.a)({},e.movies),{},{search:Object(je.a)(Object(je.a)({},e.movies.search),t.payload)})});case Ce.FETCH_LATEST_MOVIES_DATA:return Object(je.a)(Object(je.a)({},e),{},{movies:Object(je.a)(Object(je.a)({},e.movies),{},{latest:Object(je.a)(Object(je.a)({},e.movies.latest),t.payload)})});case Ce.FETCH_NOW_PLAYING_MOVIES_DATA:return Object(je.a)(Object(je.a)({},e),{},{movies:Object(je.a)(Object(je.a)({},e.movies),{},{nowPlaying:Object(je.a)(Object(je.a)({},e.movies.nowPlaying),t.payload)})});case Ce.FETCH_INITIAL_DATA:return Object(je.a)(Object(je.a)({},e),{},{movies:Object(je.a)(Object(je.a)({},e.movies),{},{popular:Object(je.a)({},e.movies.popular)})});default:return e}},movie:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Be.FETCH_INITIAL_DATA:return Object(je.a)(Object(je.a)({},e),{},{details:Object(je.a)(Object(je.a)({},e.details),t.payload)});default:return e}},notFount:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:dt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ct.FETCH_INITIAL_DATA:return st(e,t);default:return e}},theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case lt.FETCH_INITIAL_DATA:return pt(e,t);default:return e}}}),jt=n(92),mt="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,ht=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}),Ot=Object(ot.a)(jt.a),_t=(mt?ht:ot.c)(Ot),ft=Object(ot.d)(bt,_t),gt=n(154),xt=n(156),yt=n(150),wt=n(151),At=n(152),Tt=n(153),Ct=n(93);xt.a.use([yt.a,wt.a,At.a,Tt.a]);var Et=Object(Ct.a)();function kt(e){var t=e.children;return Object(x.jsx)(_.b,{history:Et,children:Object(x.jsx)(gt.a,{client:Ht,children:Object(x.jsx)(h.a,{store:ft,children:Object(x.jsx)(Lt,{children:t})})})})}var Nt,Ft,Ht=new(n(159).a),Dt=Object(m.b)(Nt||(Nt=Object(j.a)(["\n  :root {\n    ",";\n  }\n  \n  *,\n  *::after,\n  *::before {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n\n  html, body {\n    display: grid;\n  }\n  \n  body {\n    background: $mainContainerBackgroundColor;\n  }\n\n  html,\n  body,\n  #root {\n    width: 100%;\n    height: 100%;\n  }\n"])),(function(e){var t=e.theme;return Object.entries((null===t||void 0===t?void 0:t.current)||{}).map((function(e){var t=Object(v.a)(e,2),n=t[0],r=t[1];return"--".concat(Object(O.kebabCase)(n),": ").concat(Object(O.isNumber)(r)?"".concat(r,"px"):r,";")})).join(" ")})),It=n(155);function Lt(e){var t=e.children,n=Object(h.c)((function(e){return e.theme}));return Object(x.jsxs)(m.a,{theme:n,children:[Object(x.jsx)(It.a,{}),Object(x.jsx)(Dt,{}),t]})}var Pt=m.c.div(Ft||(Ft=Object(j.a)(["\n  width: 100%;\n  height: 100vh;\n  min-height: 100vh;\n  max-height: 100vh;\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-template-columns: ","px 1fr;\n"])),(function(e){var t,n=e.menuWidth,r=void 0===n?275:n,a=e.theme;return(null===a||void 0===a||null===(t=a.current)||void 0===t?void 0:t.menuWidth)||r}));function St(e){var t=e.children,n=e.menuWidth;return Object(x.jsx)(Pt,{className:"imax_layout_container",menuWidth:n,children:t})}n(127);function Mt(){var e=Qe;return Object(x.jsx)(kt,{children:Object(x.jsx)($e.a,{children:Object(x.jsxs)(St,{children:[Object(x.jsx)(rt,{blackList:["Movie"]}),Object(x.jsx)(at,{routes:e})]})})})}var Wt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,168)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),i(e),o(e)}))},Rt=document.getElementById("root");u.a.render(Object(x.jsx)(Mt,{}),Rt),Wt()}},[[128,1,2]]]);
//# sourceMappingURL=main.0e52c10b.chunk.js.map