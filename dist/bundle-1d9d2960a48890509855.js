/*! wxx专用！https://github.com/wangzongming */
!function(e){function t(e){delete installedChunks[e]}function n(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.type="text/javascript",n.charset="utf-8",n.src=p.p+""+e+"."+w+".hot-update.js",t.appendChild(n)}function r(e){return e=e||1e4,new Promise(function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=p.p+""+w+".hot-update.json";r.open("GET",o,!0),r.timeout=e,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)t();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void n(e)}t(e)}}})}function o(e){var t=j[e];if(!t)return p;var n=function(n){return t.hot.active?(j[n]?j[n].parents.indexOf(e)<0&&j[n].parents.push(e):(k=[e],v=n),t.children.indexOf(n)<0&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),k=[]),p(n)};for(var r in p)Object.prototype.hasOwnProperty.call(p,r)&&"e"!==r&&Object.defineProperty(n,r,function(e){return{configurable:!0,enumerable:!0,get:function(){return p[e]},set:function(t){p[e]=t}}}(r));return n.e=function(e){function t(){O--,"prepare"===S&&(M[e]||u(e),0===O&&0===I&&d())}return"ready"===S&&a("prepare"),O++,p.e(e).then(t,function(e){throw t(),e})},n}function i(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:v!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:l,apply:f,status:function(e){if(!e)return S;R.push(e)},addStatusHandler:function(e){R.push(e)},removeStatusHandler:function(e){var t=R.indexOf(e);t>=0&&R.splice(t,1)},data:P[e]};return v=void 0,t}function a(e){S=e;for(var t=0;t<R.length;t++)R[t].call(null,e)}function c(e){return+e+""===e?+e:e}function l(e){if("idle"!==S)throw new Error("check() is only allowed in idle status");return b=e,a("check"),r(x).then(function(e){if(!e)return a("idle"),null;D={},M={},C=e.c,m=e.h,a("prepare");var t=new Promise(function(e,t){y={resolve:e,reject:t}});g={};return u(0),"prepare"===S&&0===O&&0===I&&d(),t})}function s(e,t){if(C[e]&&D[e]){D[e]=!1;for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(g[n]=t[n]);0==--I&&0===O&&d()}}function u(e){C[e]?(D[e]=!0,I++,n(e)):M[e]=!0}function d(){a("ready");var e=y;if(y=null,e)if(b)Promise.resolve().then(function(){return f(b)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in g)Object.prototype.hasOwnProperty.call(g,n)&&t.push(c(n));e.resolve(t)}}function f(n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];e.indexOf(r)<0&&e.push(r)}}if("ready"!==S)throw new Error("apply() is only allowed in ready status");n=n||{};var o,i,l,s,u,d={},f=[],h={},v=function(){console.warn("[HMR] unexpected require("+b.moduleId+") to disposed module")};for(var y in g)if(Object.prototype.hasOwnProperty.call(g,y)){u=c(y);var b;b=g[y]?function(e){for(var t=[e],n={},o=t.slice().map(function(e){return{chain:[e],id:e}});o.length>0;){var i=o.pop(),a=i.id,c=i.chain;if((s=j[a])&&!s.hot._selfAccepted){if(s.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:a};if(s.hot._main)return{type:"unaccepted",chain:c,moduleId:a};for(var l=0;l<s.parents.length;l++){var u=s.parents[l],d=j[u];if(d){if(d.hot._declinedDependencies[a])return{type:"declined",chain:c.concat([u]),moduleId:a,parentId:u};t.indexOf(u)>=0||(d.hot._acceptedDependencies[a]?(n[u]||(n[u]=[]),r(n[u],[a])):(delete n[u],t.push(u),o.push({chain:c.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}(u):{type:"disposed",moduleId:y};var x=!1,E=!1,R=!1,I="";switch(b.chain&&(I="\nUpdate propagation: "+b.chain.join(" -> ")),b.type){case"self-declined":n.onDeclined&&n.onDeclined(b),n.ignoreDeclined||(x=new Error("Aborted because of self decline: "+b.moduleId+I));break;case"declined":n.onDeclined&&n.onDeclined(b),n.ignoreDeclined||(x=new Error("Aborted because of declined dependency: "+b.moduleId+" in "+b.parentId+I));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(b),n.ignoreUnaccepted||(x=new Error("Aborted because "+u+" is not accepted"+I));break;case"accepted":n.onAccepted&&n.onAccepted(b),E=!0;break;case"disposed":n.onDisposed&&n.onDisposed(b),R=!0;break;default:throw new Error("Unexception type "+b.type)}if(x)return a("abort"),Promise.reject(x);if(E){h[u]=g[u],r(f,b.outdatedModules);for(u in b.outdatedDependencies)Object.prototype.hasOwnProperty.call(b.outdatedDependencies,u)&&(d[u]||(d[u]=[]),r(d[u],b.outdatedDependencies[u]))}R&&(r(f,[b.moduleId]),h[u]=v)}var O=[];for(i=0;i<f.length;i++)u=f[i],j[u]&&j[u].hot._selfAccepted&&O.push({module:u,errorHandler:j[u].hot._selfAccepted});a("dispose"),Object.keys(C).forEach(function(e){!1===C[e]&&t(e)});for(var M,D=f.slice();D.length>0;)if(u=D.pop(),s=j[u]){var _={},T=s.hot._disposeHandlers;for(l=0;l<T.length;l++)(o=T[l])(_);for(P[u]=_,s.hot.active=!1,delete j[u],delete d[u],l=0;l<s.children.length;l++){var A=j[s.children[l]];A&&((M=A.parents.indexOf(u))>=0&&A.parents.splice(M,1))}}var B,U;for(u in d)if(Object.prototype.hasOwnProperty.call(d,u)&&(s=j[u]))for(U=d[u],l=0;l<U.length;l++)B=U[l],(M=s.children.indexOf(B))>=0&&s.children.splice(M,1);a("apply"),w=m;for(u in h)Object.prototype.hasOwnProperty.call(h,u)&&(e[u]=h[u]);var H=null;for(u in d)if(Object.prototype.hasOwnProperty.call(d,u)&&(s=j[u])){U=d[u];var L=[];for(i=0;i<U.length;i++)if(B=U[i],o=s.hot._acceptedDependencies[B]){if(L.indexOf(o)>=0)continue;L.push(o)}for(i=0;i<L.length;i++){o=L[i];try{o(U)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:u,dependencyId:U[i],error:e}),n.ignoreErrored||H||(H=e)}}}for(i=0;i<O.length;i++){var q=O[i];u=q.module,k=[u];try{p(u)}catch(e){if("function"==typeof q.errorHandler)try{q.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:u,error:t,orginalError:e,originalError:e}),n.ignoreErrored||H||(H=t),H||(H=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:u,error:e}),n.ignoreErrored||H||(H=e)}}return H?(a("fail"),Promise.reject(H)):(a("idle"),new Promise(function(e){e(f)}))}function p(t){if(j[t])return j[t].exports;var n=j[t]={i:t,l:!1,exports:{},hot:i(t),parents:(E=k,k=[],E),children:[]};return e[t].call(n.exports,n,n.exports,o(t)),n.l=!0,n.exports}var h=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){s(e,t),h&&h(e,t)};var v,y,g,m,b=!0,w="1d9d2960a48890509855",x=1e4,P={},k=[],E=[],R=[],S="idle",I=0,O=0,M={},D={},C={},j={};p.m=e,p.c=j,p.d=function(e,t,n){p.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},p.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return p.d(t,"a",t),t},p.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},p.p="",p.h=function(){return w},o(1)(p.s=1)}([function(e,t,n){t=e.exports=n(7)(void 0),t.push([e.i,"* {\n  margin: 0;\n  padding: 0;\n}\nbody {\n  background: black;\n}\n._1AQIoDQTnVzMDX1NeptKzw {\n  color: #ccc;\n  font-size: .5rem;\n  text-align: center;\n  font-weight: 100;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n}\n._1KZKgxDHqTqXhEZzQgFkfe {\n  color: white;\n  position: absolute;\n  bottom: .5rem;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n._1KZKgxDHqTqXhEZzQgFkfe a {\n  color: white;\n}\ncanvas {\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n",""]),t.locals={root:"_1AQIoDQTnVzMDX1NeptKzw",subtit:"_1KZKgxDHqTqXhEZzQgFkfe"}},function(e,t,n){"use strict";n(2),n(3);var r=n(4);if((new r.Wang).createDom){var o=(new r.Wang).createDom(),i=(new r.Wang).createDom1();document.querySelector("#root").appendChild(o),document.querySelector("#root").appendChild(i)}},function(e,t,n){"use strict";!function(e,t){function n(){t.body?t.body.style.fontSize=12*i+"px":t.addEventListener("DOMContentLoaded",n)}function r(){var e=o.clientWidth/10;o.style.fontSize=e+"px"}var o=t.documentElement,i=e.devicePixelRatio||1;if(n(),r(),e.addEventListener("resize",r),e.addEventListener("pageshow",function(e){e.persisted&&r()}),i>=2){var a=t.createElement("body"),c=t.createElement("div");c.style.border=".5px solid transparent",a.appendChild(c),o.appendChild(a),1===c.offsetHeight&&o.classList.add("hairlines"),o.removeChild(a)}}(window,document)},function(e,t,n){"use strict";var r={getEle:function(e){return document.querySelector(e)},getEleAll:function(e){return document.querySelectorAll(e)},getEleById:function(e){return document.getElementById(e)},getEleByClass:function(e){return document.getElementsByClassName(e)},$:function(e){if(e){var t=e.slice(0,1);if(/^\#$/i.test(t)){return r.getEleById(e.replace(t,""))}if(/^\.$/i.test(t)){return r.getEleByClass(e.replace(t,""))}return r.getEleAll(e)}}};window.$=r.$},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.Wang=void 0;var i=n(5),a=(r(i),n(6)),c=(r(a),n(10)),l=r(c),s=function e(){o(this,e),(new l.default).init({ele:"#root"})};t.Wang=s},function(e,t){e.exports={greetText:"hello world"}},function(e,t,n){var r=n(0);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0};o.transform=void 0;var i=n(8)(r,o);r.locals&&(e.exports=r.locals),r.locals||e.hot.accept(0,function(){var t=n(0);"string"==typeof t&&(t=[[e.i,t,""]]),i(t)}),e.hot.dispose(function(){i()})},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=h[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(u(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(u(r.parts[i],t));h[r.id]={id:r.id,refs:1,parts:a}}}}function o(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],c=i[1],l=i[2],s=i[3],u={css:c,media:l,sourceMap:s};r[a]?r[a].parts.push(u):n.push(r[a]={id:a,parts:[u]})}return n}function i(e,t){var n=y(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=b[b.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),b.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=y(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function a(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function c(e){var t=document.createElement("style");return e.attrs.type="text/css",s(t,e.attrs),i(e,t),t}function l(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",s(t,e.attrs),i(e,t),t}function s(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function u(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var s=m++;n=g||(g=c(t)),r=d.bind(null,n,s,!1),o=d.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),r=p.bind(null,n,t),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=c(t),r=f.bind(null,n),o=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function d(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=w(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),c=e.href;e.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}var h={},v=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),y=function(e){var t={};return function(n){if(void 0===t[n]){var r=e.call(this,n);if(r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[n]=r}return t[n]}}(function(e){return document.querySelector(e)}),g=null,m=0,b=[],w=n(9);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=v()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=o(e,t);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var c=n[a],l=h[c.id];l.refs--,i.push(l)}if(e){r(o(e,t),t)}for(var a=0;a<i.length;a++){var l=i[a];if(0===l.refs){for(var s=0;s<l.parts.length;s++)l.parts[s]();delete h[l.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return e;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(11);var i=function(){function e(){r(this,e),this.getPixelRatio=function(e){var t=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/t}}return o(e,[{key:"canvasRem",value:function(e){if(e){var t=parseInt(e);return window.innerWidth/10*t}}},{key:"getPos",value:function(e,t,n,r){var o=e*Math.PI;return{x:t+r*Math.sin(o),y:n-r*Math.cos(o),deg:180/Math.PI*o}}},{key:"init",value:function(e){var t=this.canvasRem,n=$(e.ele);this.canvas=document.createElement("canvas"),this.canvas.className="canvas",this.canvas.width=t("10rem"),this.canvas.height=t("8rem"),n.appendChild(this.canvas);var r=this.canvas.getContext("2d");this.ratio=this.getPixelRatio(r),r.strokeStyle="#0090D2",r.fillStyle="#0090D2",r.beginPath(),r.lineWidth=4,r.beginPath(),r.lineCap="round",r.arc(150,150,100,.2*Math.PI,.8*Math.PI,!0),r.stroke();var o=180/Math.PI*Math.PI*.2,i=180/Math.PI*Math.PI*.8;r.beginPath(),r.lineWidth=1,r.lineCap="round",r.moveTo(20,210),r.lineTo(280,210),console.log(o,i);for(var a=0;a<360;a+=5){var c=this.getPos(2*a/360,150,150,100);r.beginPath(),r.lineWidth=2,r.moveTo(150,150),r.lineTo(c.x,c.y),r.stroke()}r.beginPath(),r.fillStyle="black",r.arc(150,150,105,Math.PI/180*o,Math.PI/180*i),r.fill(),r.beginPath(),r.fillStyle="black",r.lineCap="round",r.arc(150,150,95,0*Math.PI,2*Math.PI,!0),r.fill();for(var a=0;a<360;a+=10){var c=this.getPos(2*a/360,150,150,100);r.beginPath(),r.lineCap="",r.strokeStyle="orange",r.lineJoin="round",r.lineWidth=3,r.moveTo(150,150),r.lineTo(c.x,c.y),r.stroke()}r.beginPath(),r.fillStyle="black",r.arc(150,140,115,Math.PI/180*o,Math.PI/180*i),r.fill(),r.beginPath(),r.fillStyle="black",r.lineCap="round",r.lineJoin="round",r.arc(150,150,92,0*Math.PI,2*Math.PI,!0),r.fill(),r.beginPath(),r.strokeStyle="#0090D2",r.lineWidth=4,r.beginPath(),r.lineCap="round",r.arc(150,150,100,.2*Math.PI,.8*Math.PI,!0),r.stroke(),r.beginPath(),r.strokeStyle="#0090D2",r.arc(150,150,10,0,2*Math.PI),r.fill(),r.beginPath(),r.fillStyle="red",r.arc(150,150,3,0,2*Math.PI),r.fill(),r.beginPath(),r.strokeStyle="red",r.lineWidth=2,r.moveTo(150,150);var c=this.getPos(1.5,150,150,100);r.lineTo(c.x+20,c.y),r.stroke()}}]),e}();t.default=i},function(e,t,n){"use strict";!function(e){var t=function(){var e=document.createElement("canvas"),t=e.getContext("2d"),n=t.backingStorePixelRatio||t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/n}(),n={fillRect:"all",clearRect:"all",strokeRect:"all",moveTo:"all",lineTo:"all",arc:[0,1,2],arcTo:"all",bezierCurveTo:"all",isPointinPath:"all",isPointinStroke:"all",quadraticCurveTo:"all",rect:"all",translate:"all",createRadialGradient:"all",createLinearGradient:"all"};1!==t&&(!function(e,t){for(var n in e)e.hasOwnProperty(n)&&t(e[n],n)}(n,function(n,r){e[r]=function(e){return function(){var r,o,i=Array.prototype.slice.call(arguments);if("all"===n)i=i.map(function(e){return e*t});else if(Array.isArray(n))for(r=0,o=n.length;r<o;r++)i[n[r]]*=t;return e.apply(this,i)}}(e[r])}),e.stroke=function(e){return function(){this.lineWidth*=t,e.apply(this,arguments),this.lineWidth/=t}}(e.stroke),e.fillText=function(e){return function(){var n=Array.prototype.slice.call(arguments);n[1]*=t,n[2]*=t,this.font=this.font.replace(/(\d+)(px|em|rem|pt)/g,function(e,n,r){return n*t+r}),e.apply(this,n),this.font=this.font.replace(/(\d+)(px|em|rem|pt)/g,function(e,n,r){return n/t+r})}}(e.fillText),e.strokeText=function(e){return function(){var n=Array.prototype.slice.call(arguments);n[1]*=t,n[2]*=t,this.font=this.font.replace(/(\d+)(px|em|rem|pt)/g,function(e,n,r){return n*t+r}),e.apply(this,n),this.font=this.font.replace(/(\d+)(px|em|rem|pt)/g,function(e,n,r){return n/t+r})}}(e.strokeText))}(CanvasRenderingContext2D.prototype),function(e){e.getContext=function(e){return function(t){var n,r,o=e.call(this,t);return"2d"===t&&(n=o.backingStorePixelRatio||o.webkitBackingStorePixelRatio||o.mozBackingStorePixelRatio||o.msBackingStorePixelRatio||o.oBackingStorePixelRatio||o.backingStorePixelRatio||1,(r=(window.devicePixelRatio||1)/n)>1&&(this.style.height=this.height+"px",this.style.width=this.width+"px",this.width*=r,this.height*=r)),o}}(e.getContext)}(HTMLCanvasElement.prototype)}]);