(this["webpackJsonpkarem-omary-09-01-2020"]=this["webpackJsonpkarem-omary-09-01-2020"]||[]).push([[0],{19:function(e,t,n){e.exports=n(35)},24:function(e,t,n){},25:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},26:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(14),c=n.n(r),l=(n(24),n(25),n(26),n(15)),i=n(5),u=n(18),m=(n(27),"");m="http://dataservice.accuweather.com";var s=function(){var e=o.a.useState({}),t=Object(u.a)(e,2),n=t[0],a=t[1];return o.a.useEffect((function(){fetch("".concat(m,"/currentconditions/v1/").concat("215854","?apikey=").concat("qH9VxSiDgmUiTgPybDWjZLiAj2b7Fo7G")).then((function(e){return e.json()})).then((function(e){return a(e[0])})).catch((function(e){return console.log(e)}))}),[]),console.log(n),o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"LandingPage"),o.a.createElement("p",null,JSON.stringify(n)))},f=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"FavoritesPage"))},h=function(){return o.a.createElement("div",null,o.a.createElement("a",{href:"/"},"home"),o.a.createElement("a",{href:"/favorites"},"favorites"))};var p=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(h,null),o.a.createElement(l.a,null,o.a.createElement(i.c,null,o.a.createElement(i.a,{exact:!0,path:"/",component:s}),o.a.createElement(i.a,{path:"/favorites",component:f}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.83c8ba4e.chunk.js.map