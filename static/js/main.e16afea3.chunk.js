(this.webpackJsonpnewsapp=this.webpackJsonpnewsapp||[]).push([[0],{74:function(e,t,n){},93:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(16),s=n.n(c),i=(n(74),n(41)),o=n.n(i),u=n(57),p=n(68),l=n(101),b=n(103),j=n(58),d=n.n(j),f=(n(93),n(19)),h=l.a.Meta;var g=function(){var e=Object(r.useState)([]),t=Object(p.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3da128da75bb4e819bb876090635ca8f");case 2:t=e.sent,a(t.data.articles);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),console.log("news",n),Object(f.jsxs)("div",{className:"App",children:["\xa0\xa0\xa0\xa0",n&&n.map((function(e,t){return Object(f.jsxs)(l.a,{hoverable:!0,style:{width:"70%"},cover:Object(f.jsx)("img",{alt:"image",src:e.urlToImage}),children:[Object(f.jsx)(h,{title:e.title,description:e.content}),Object(f.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:Object(f.jsx)(b.a,{type:"primary",style:{marginTop:"10px"},children:"Read More"})})]},t)}))]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,104)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};n(97);s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(g,{})}),document.getElementById("root")),O()}},[[98,1,2]]]);
//# sourceMappingURL=main.e16afea3.chunk.js.map