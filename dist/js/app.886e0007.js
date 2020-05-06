(function(t){function e(e){for(var o,r,i=e[0],c=e[1],u=e[2],l=0,f=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);p&&p(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,r=1;r<n.length;r++){var i=n[r];0!==a[i]&&(o=!1)}o&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},r={app:0},a={app:0},s=[];function i(t){return c.p+"js/"+({Portfolio:"Portfolio",Stocks:"Stocks"}[t]||t)+"."+{Portfolio:"91be8017",Stocks:"2ad43514"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={Portfolio:1,Stocks:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var o="css/"+({Portfolio:"Portfolio",Stocks:"Stocks"}[t]||t)+"."+{Portfolio:"f11a8fa8",Stocks:"c608396d"}[t]+".css",a=c.p+o,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===a))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],l=u.getAttribute("data-href");if(l===o||l===a)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var o=e&&e.target&&e.target.src||a,s=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=o,delete r[t],p.parentNode.removeChild(p),n(s)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){r[t]=0})));var o=a[t];if(0!==o)if(o)e.push(o[2]);else{var s=new Promise((function(e,n){o=a[t]=[e,n]}));e.push(o[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",f.name="ChunkLoadError",f.type=o,f.request=r,n[1](f)}a[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var p=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2395:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"header"},[n("router-link",{staticClass:"logo",attrs:{to:"/"}},[n("span",{staticClass:"icon"},[t._v("👑")]),n("span",{staticClass:"name"},[n("span",{staticClass:"first"},[t._v("Stock")]),n("br"),n("span",{staticClass:"last"},[t._v("Trader")])])]),n("span",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:{name:"Stocks"}}},[t._v("🐄 Stocks")]),n("span",{staticClass:"line"},[t._v("||")]),n("router-link",{attrs:{to:{name:"Portfolio"}}},[t._v("💼 Portfolio")])],1),n("button",{on:{click:t.endDay}},[t._v("🎬 End day")]),n("span",{staticClass:"dropdown",class:{open:t.toggleOpen}},[n("button",{on:{click:function(e){t.toggleOpen=!t.toggleOpen}}},[t._v(" 🔥 Dropdown "),n("span",{staticClass:"arrow"},[t._v("▾")])]),n("ul",[n("li",[n("button",{on:{click:t.save}},[t._v("💾 Save")])]),n("li",[n("button",{on:{click:t.load}},[t._v("🪐 Load")])])])]),n("span",[t._v("💰 Funds: $"+t._s(t.getFunds.toLocaleString())+" ")])],1),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view",{key:t.$route.path,staticClass:"content"})],1)],1)},a=[],s=(n("d3b7"),n("5530")),i=n("2f62"),c={computed:Object(s["a"])({},Object(i["b"])(["getFunds","getStocks"])),data:function(){return{toggleOpen:!1,endpoint:"https://crudpi.io/31f660/stocktrader"}},methods:{endDay:function(){this.$store.dispatch("endDay")},save:function(){console.log("Saving...");var t={funds:this.getFunds,stocks:this.getStocks};t=JSON.stringify(t),fetch(this.endpoint,{method:"POST",headers:{"Content-Type":"application/json"},body:t}).then((function(t){200==t.status&&console.log("Saved...")})).catch((function(t){console.warn(t)}))},load:function(){var t=this;console.log("Loading..."),fetch(this.endpoint).then((function(t){return t.json()})).then((function(e){e=e[e.length-1],t.$store.commit("setFunds",e.funds),t.$store.commit("setStocks",e.stocks)}))}}},u=c,l=(n("7c55"),n("2877")),f=Object(l["a"])(u,r,a,!1,null,null,null),p=f.exports,d=n("8c4f"),m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"card"},[n("p",{staticClass:"icon"},[t._v("👑")]),n("h1",[t._v("Trade & view your portfolio")]),n("p",[t._v(' Click "🎬 End day"'),n("br"),t._v(" to start a new day ")])])])}],h=(n("7551"),{}),g=Object(l["a"])(h,m,v,!1,null,"4841386e",null),b=g.exports;o["a"].use(d["a"]);var k=[{path:"/",name:"Home",component:b},{path:"/portfolio",name:"Portfolio",component:function(){return n.e("Portfolio").then(n.bind(null,"c9e5"))}},{path:"/stocks",name:"Stocks",component:function(){return n.e("Stocks").then(n.bind(null,"5b05"))}}],y=new d["a"]({mode:"history",base:"/",routes:k}),S=y,_=(n("7db0"),n("d81d"),n("b0c0"),n("a9e3"),n("35b3"),n("f167"));o["a"].use(i["a"]);var w=new i["a"].Store({state:{funds:1e4,stocks:_,portfolio:[{name:"🍏 Apple",amount:10}]},getters:{getFunds:function(t){return t.funds},getStocks:function(t){return t.stocks},getPortfolio:function(t){return t.portfolio}},mutations:{replaceStocks:function(t,e){t.stocks=e},buyStock:function(t,e){var n=e.name,o=e.amount,r=e.price,a=t.portfolio.find((function(t){return t.name==n}));a?a.amount+=o:t.portfolio.push({name:n,amount:o}),t.funds-=r*o},setStocks:function(t,e){t.stocks=e},mutateFunds:function(t,e){t.funds+=e},setFunds:function(t,e){t.funds=e},sellStock:function(t,e){var n=e.name,o=e.amount,r=e.price;t.portfolio.find((function(t){return t.name==n})).amount-=o,t.funds+=r}},actions:{endDay:function(t){var e=t.commit,n=t.getters,o=n.getStocks.map((function(t){return t.price=t.price+=O(t.price),t}));e("replaceStocks",o)}},modules:{}});function O(t){var e=-.1*t,n=.1*t,o=Math.random()*(n-e)+e;return Math.round(100*(o+Number.EPSILON))/100}o["a"].config.productionTip=!1,new o["a"]({router:S,store:w,render:function(t){return t(p)}}).$mount("#app")},7551:function(t,e,n){"use strict";var o=n("bf5e"),r=n.n(o);r.a},"7c55":function(t,e,n){"use strict";var o=n("2395"),r=n.n(o);r.a},bf5e:function(t,e,n){},f167:function(t){t.exports=JSON.parse('[{"name":"🛺 BMW","price":110},{"name":"🍏 Apple","price":250},{"name":"🕵🏽‍♀️ Google","price":200},{"name":"🦆 Twitter","price":8}]')}});
//# sourceMappingURL=app.886e0007.js.map