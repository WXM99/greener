(function(e){function a(a){for(var n,r,u=a[0],o=a[1],s=a[2],d=0,c=[];d<u.length;d++)r=u[d],Object.prototype.hasOwnProperty.call(v,r)&&v[r]&&c.push(v[r][0]),v[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);p&&p(a);while(c.length)c.shift()();return i.push.apply(i,s||[]),t()}function t(){for(var e,a=0;a<i.length;a++){for(var t=i[a],n=!0,r=1;r<t.length;r++){var u=t[r];0!==v[u]&&(n=!1)}n&&(i.splice(a--,1),e=o(o.s=t[0]))}return e}var n={},r={app:0},v={app:0},i=[];function u(e){return o.p+"js/"+({"view-HelloWorld-vue":"view-HelloWorld-vue","view-TabbarFrame-vue":"view-TabbarFrame-vue","view-account-index-vue":"view-account-index-vue","view-account-register-vue":"view-account-register-vue","view-dashboard-answer_paper-vue":"view-dashboard-answer_paper-vue","view-dashboard-index-vue":"view-dashboard-index-vue","view-dashboard-papers-vue":"view-dashboard-papers-vue","view-dashboard-review_paper-vue":"view-dashboard-review_paper-vue","view-events-events_details-vue":"view-events-events_details-vue","view-events-events_list-vue":"view-events-events_list-vue","view-events-index-vue":"view-events-index-vue","view-matching-index-vue":"view-matching-index-vue"}[e]||e)+"."+{"view-HelloWorld-vue":"891e0899","view-TabbarFrame-vue":"f90a31b2","view-account-index-vue":"bdfd9217","view-account-register-vue":"eb48582c","view-dashboard-answer_paper-vue":"f4b7dead","view-dashboard-index-vue":"3b23f70b","view-dashboard-papers-vue":"477e7223","view-dashboard-review_paper-vue":"0b3ee538","view-events-events_details-vue":"a751dd4a","view-events-events_list-vue":"41e06913","view-events-index-vue":"55c9c991","view-matching-index-vue":"a58b8c1f"}[e]+".js"}function o(a){if(n[a])return n[a].exports;var t=n[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.e=function(e){var a=[],t={"view-HelloWorld-vue":1,"view-TabbarFrame-vue":1,"view-account-index-vue":1,"view-account-register-vue":1,"view-dashboard-answer_paper-vue":1,"view-dashboard-index-vue":1,"view-dashboard-papers-vue":1,"view-dashboard-review_paper-vue":1,"view-events-events_details-vue":1,"view-events-events_list-vue":1,"view-events-index-vue":1,"view-matching-index-vue":1};r[e]?a.push(r[e]):0!==r[e]&&t[e]&&a.push(r[e]=new Promise((function(a,t){for(var n="css/"+({"view-HelloWorld-vue":"view-HelloWorld-vue","view-TabbarFrame-vue":"view-TabbarFrame-vue","view-account-index-vue":"view-account-index-vue","view-account-register-vue":"view-account-register-vue","view-dashboard-answer_paper-vue":"view-dashboard-answer_paper-vue","view-dashboard-index-vue":"view-dashboard-index-vue","view-dashboard-papers-vue":"view-dashboard-papers-vue","view-dashboard-review_paper-vue":"view-dashboard-review_paper-vue","view-events-events_details-vue":"view-events-events_details-vue","view-events-events_list-vue":"view-events-events_list-vue","view-events-index-vue":"view-events-index-vue","view-matching-index-vue":"view-matching-index-vue"}[e]||e)+"."+{"view-HelloWorld-vue":"3fe51d8b","view-TabbarFrame-vue":"f42b8172","view-account-index-vue":"4353696b","view-account-register-vue":"a489c87c","view-dashboard-answer_paper-vue":"5af43943","view-dashboard-index-vue":"de527dff","view-dashboard-papers-vue":"835a93d4","view-dashboard-review_paper-vue":"1b85c66c","view-events-events_details-vue":"9a4580bc","view-events-events_list-vue":"62ec5076","view-events-index-vue":"e0a9c8f5","view-matching-index-vue":"0c7ce95c"}[e]+".css",v=o.p+n,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=i[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===n||d===v))return a()}var c=document.getElementsByTagName("style");for(u=0;u<c.length;u++){s=c[u],d=s.getAttribute("data-href");if(d===n||d===v)return a()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=a,p.onerror=function(a){var n=a&&a.target&&a.target.src||v,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[e],p.parentNode.removeChild(p),t(i)},p.href=v;var l=document.getElementsByTagName("head")[0];l.appendChild(p)})).then((function(){r[e]=0})));var n=v[e];if(0!==n)if(n)a.push(n[2]);else{var i=new Promise((function(a,t){n=v[e]=[a,t]}));a.push(n[2]=i);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.src=u(e);var c=new Error;s=function(a){d.onerror=d.onload=null,clearTimeout(p);var t=v[e];if(0!==t){if(t){var n=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",c.name="ChunkLoadError",c.type=n,c.request=r,t[1](c)}v[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(a)},o.m=e,o.c=n,o.d=function(e,a,t){o.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,a){if(1&a&&(e=o(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)o.d(t,n,function(a){return e[a]}.bind(null,n));return t},o.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(a,"a",a),a},o.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},o.p="",o.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=a,s=s.slice();for(var c=0;c<s.length;c++)a(s[c]);var p=d;i.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"034f":function(e,a,t){"use strict";var n=t("85ec"),r=t.n(n);r.a},"0f13":function(e,a,t){var n={"./HelloWorld.vue":["fdab","view-HelloWorld-vue"],"./TabbarFrame.vue":["6524","view-TabbarFrame-vue"],"./account/index.vue":["e422","view-account-index-vue"],"./account/register.vue":["ded9","view-account-register-vue"],"./dashboard/answer_paper.vue":["3cb1","view-dashboard-answer_paper-vue"],"./dashboard/index.vue":["0a93","view-dashboard-index-vue"],"./dashboard/papers.vue":["b2ea","view-dashboard-papers-vue"],"./dashboard/review_paper.vue":["265f","view-dashboard-review_paper-vue"],"./events/events_details.vue":["775d","view-events-events_details-vue"],"./events/events_list.vue":["68b8","view-events-events_list-vue"],"./events/index.vue":["f19f","view-events-index-vue"],"./matching/index.vue":["cda7","view-matching-index-vue"]};function r(e){if(!t.o(n,e))return Promise.resolve().then((function(){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=n[e],r=a[0];return t.e(a[1]).then((function(){return t(r)}))}r.keys=function(){return Object.keys(n)},r.id="0f13",e.exports=r},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},v=[],i={name:"App"},u=i,o=(t("034f"),t("2877")),s=Object(o["a"])(u,r,v,!1,null,null,null),d=s.exports,c=t("a18c"),p=t("2f62"),l=t("bc3a"),w=t.n(l),f=(t("157a"),t("b970")),h=t("343b"),b=t("d399"),m=t("5f5b");t("2dd8"),t("f9e3");n["default"].use(f["a"]),n["default"].use(h["a"]),n["default"].use(b["a"]),n["default"].use(m["a"]),w.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",w.a.defaults.withCredentials=!0,n["default"].prototype.$axios=w.a,n["default"].prototype.$ajax=w.a,w.a.defaults.baseURL="http://localhost:8080",n["default"].config.productionTip=!1,n["default"].use(p["a"]);var _={login:!1,username:""};a["default"]=_;new n["default"]({render:function(e){return e(d)},router:c["a"],axios:w.a,store:_,components:{App:d}}).$mount("#app")},"85ec":function(e,a,t){},a18c:function(e,a,t){"use strict";t("d3b7");var n=t("2b0e"),r=t("8c4f");function v(e){return function(){return t("0f13")("./".concat(e,".vue"))}}n["default"].use(r["a"]),n["default"].use(r["a"]);var i=new r["a"]({routes:[{path:"/",component:v("TabbarFrame"),children:[{path:"events",name:"events",component:v("events/index")},{path:"positions",name:"positions",component:v("HelloWorld")},{path:"",name:"dashboard",component:v("dashboard/index")},{path:"matching",name:"matching",component:v("matching/index")},{path:"paper_list/:type",name:"paper_list",component:v("dashboard/papers")},{path:"ans_paper/:id",name:"ans_paper",component:v("dashboard/answer_paper")},{path:"view_paper/:id",name:"view_paper",component:v("dashboard/review_paper")},{path:"events/list",name:"events_list",component:v("events/events_list")},{path:"events/view/:id",name:"events_details",component:v("events/events_details")}]},{path:"/login",name:"login",component:v("account/index")},{path:"register"}]});a["a"]=i}});
//# sourceMappingURL=app.b355369b.js.map