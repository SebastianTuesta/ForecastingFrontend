(function(e){function t(t){for(var r,i,l=t[0],u=t[1],c=t[2],p=0,f=[];p<l.length;p++)i=l[p],o[i]&&f.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);s&&s(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var u=n[l];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/ForecastingFrontend/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var s=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=n("bc3a"),a=n.n(o),i={},l=a.a.create(i);l.interceptors.request.use(function(e){return e},function(e){return Promise.reject(e)}),l.interceptors.response.use(function(e){return e},function(e){return Promise.reject(e)}),Plugin.install=function(e,t){e.axios=l,window.axios=l,Object.defineProperties(e.prototype,{axios:{get:function(){return l}},$axios:{get:function(){return l}}})},r["a"].use(Plugin);Plugin;var u=n("bb71");n("da64");r["a"].use(u["a"],{iconfont:"md"});var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("Header"),n("Login"),n("News")],1)},s=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-toolbar",{attrs:{app:""}},[n("v-toolbar-title",{staticClass:"headline text-uppercase"},[n("span",{staticClass:"font-weight-light"},[e._v("FINANCIAL FORECASTING APP")])])],1)},f=[],d={name:"Header",components:{},data:function(){return{}},methods:{}},v=d,b=n("2877"),g=n("6544"),m=n.n(g),h=n("71d9"),x=n("2a7f"),y=Object(b["a"])(v,p,f,!1,null,null,null),w=y.exports;m()(y,{VToolbar:h["a"],VToolbarTitle:x["a"]});var j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-content",{style:{backgroundImage:"url("+n("62c0")+")"}},[r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[r("v-card",{staticClass:"elevation-12"},[r("v-toolbar",{attrs:{dark:"",color:"primary"}},[r("v-toolbar-title",[e._v("Login form")]),r("v-spacer")],1),r("v-card-text",[r("v-form",[r("v-text-field",{attrs:{"prepend-icon":"person",name:"login",label:"Login",type:"text"}}),r("v-text-field",{attrs:{"prepend-icon":"lock",name:"password",label:"Password",id:"password",type:"password"}})],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"primary"}},[e._v("Login")])],1)],1)],1)],1)],1)],1)},V=[],P={name:"Login",components:{},data:function(){return{}},methods:{}},_=P,O=n("8336"),T=n("b0af"),C=n("99d9"),L=n("a523"),k=n("549c"),A=n("0e8f"),F=n("4bd4"),S=n("a722"),$=n("9910"),E=n("2677"),I=Object(b["a"])(_,j,V,!1,null,null,null),M=I.exports;m()(I,{VBtn:O["a"],VCard:T["a"],VCardActions:C["a"],VCardText:C["b"],VContainer:L["a"],VContent:k["a"],VFlex:A["a"],VForm:F["a"],VLayout:S["a"],VSpacer:$["a"],VTextField:E["a"],VToolbar:h["a"],VToolbarTitle:x["a"]});var N={name:"App",components:{Header:w,Login:M},data:function(){return{}}},H=N,B=n("7496"),J=Object(b["a"])(H,c,s,!1,null,null,null),q=J.exports;m()(J,{VApp:B["a"]}),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(q)}}).$mount("#app")},"62c0":function(e,t,n){e.exports=n.p+"img/Background.41abe44e.jpg"}});
//# sourceMappingURL=app.49ccb292.js.map