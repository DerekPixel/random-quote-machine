(this["webpackJsonprandom-quote-machine"]=this["webpackJsonprandom-quote-machine"]||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var o=n(1),c=n.n(o),r=n(4),i=n.n(r),u=(n(9),n(3)),a=(n(10),n(0)),s=function(t){var e=t.onClick;return Object(a.jsx)("button",{id:"new-quote",onClick:e,children:"New Quote!"})},j=function(){return Object(a.jsx)("button",{children:Object(a.jsx)("a",{id:"tweet-quote",href:"https://twitter.com/intent/tweet",target:"_blank",children:"Tweet Quote!"})})},d=function(t){var e=t.onClick;return Object(a.jsxs)("div",{className:"buttons",children:[Object(a.jsx)(s,{onClick:e}),Object(a.jsx)(j,{})]})},h=function(t){var e=t.author;return Object(a.jsx)("div",{id:"author",children:e})},b=function(t){var e=t.text;return Object(a.jsx)("div",{id:"text",children:e})},l=function(t){var e=t.text,n=t.author;return Object(a.jsxs)("div",{className:"textandauthor",children:[Object(a.jsx)(b,{text:e}),Object(a.jsx)(h,{author:n})]})};var x=function(){var t=Object(o.useState)("Quote API is Broken :("),e=Object(u.a)(t,2),n=e[0],c=e[1],r=Object(o.useState)(""),i=Object(u.a)(r,2),s=i[0],j=i[1],h=function(){var t=new XMLHttpRequest;t.open("GET","https://type.fit/api/quotes",!0),t.send(),t.onload=function(){var e=JSON.parse(t.response),o=Math.floor(Math.random()*e.length);c(n=e[o].text),j(s=e[o].author)}};return window.onload=function(){h()},Object(a.jsxs)("div",{id:"quote-box",children:[Object(a.jsx)(l,{text:n,author:s}),Object(a.jsx)(d,{onClick:h})]})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),o(t),c(t),r(t),i(t)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root")),O()},9:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.f865f057.chunk.js.map