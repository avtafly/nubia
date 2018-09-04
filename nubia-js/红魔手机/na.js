(function(e){function n(e){delete installedChunks[e]}function t(e){var n=document.getElementsByTagName("head")[0],t=document.createElement("script");t.type="text/javascript",t.charset="utf-8",t.src=d.p+""+e+"."+_+".hot-update.js",n.appendChild(t)}function r(e){return e=e||1e4,new Promise(function(n,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,o=d.p+""+_+".hot-update.json";r.open("GET",o,!0),r.timeout=e,r.send(null)}catch(e){return t(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)n();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void t(e)}n(e)}}})}function o(e){var n=N[e];if(!n)return d;var t=function(t){return n.hot.active?(N[t]?N[t].parents.indexOf(e)<0&&N[t].parents.push(e):(j=[e],v=t),n.children.indexOf(t)<0&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),j=[]),d(t)};for(var r in d)Object.prototype.hasOwnProperty.call(d,r)&&"e"!==r&&Object.defineProperty(t,r,function(e){return{configurable:!0,enumerable:!0,get:function(){return d[e]},set:function(n){d[e]=n}}}(r));return t.e=function(e){function n(){A--,"prepare"===O&&(C[e]||l(e),0===A&&0===S&&s())}return"ready"===O&&c("prepare"),A++,d.e(e).then(n,function(e){throw n(),e})},t}function i(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:v!==e,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:u,apply:p,status:function(e){if(!e)return O;x.push(e)},addStatusHandler:function(e){x.push(e)},removeStatusHandler:function(e){var n=x.indexOf(e);n>=0&&x.splice(n,1)},data:k[e]};return v=void 0,n}function c(e){O=e;for(var n=0;n<x.length;n++)x[n].call(null,e)}function a(e){return+e+""===e?+e:e}function u(e){if("idle"!==O)throw new Error("check() is only allowed in idle status");return b=e,c("check"),r(w).then(function(e){if(!e)return c("idle"),null;D={},C={},T=e.c,y=e.h,c("prepare");var n=new Promise(function(e,n){g={resolve:e,reject:n}});m={};return l(0),"prepare"===O&&0===A&&0===S&&s(),n})}function f(e,n){if(T[e]&&D[e]){D[e]=!1;for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(m[t]=n[t]);0==--S&&0===A&&s()}}function l(e){T[e]?(D[e]=!0,S++,t(e)):C[e]=!0}function s(){c("ready");var e=g;if(g=null,e)if(b)Promise.resolve().then(function(){return p(b)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var t in m)Object.prototype.hasOwnProperty.call(m,t)&&n.push(a(t));e.resolve(n)}}function p(t){function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];e.indexOf(r)<0&&e.push(r)}}if("ready"!==O)throw new Error("apply() is only allowed in ready status");t=t||{};var o,i,u,f,l,s={},p=[],h={},v=function(){console.warn("[HMR] unexpected require("+b.moduleId+") to disposed module")};for(var g in m)if(Object.prototype.hasOwnProperty.call(m,g)){l=a(g);var b;b=m[g]?function(e){for(var n=[e],t={},o=n.slice().map(function(e){return{chain:[e],id:e}});o.length>0;){var i=o.pop(),c=i.id,a=i.chain;if((f=N[c])&&!f.hot._selfAccepted){if(f.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:c};if(f.hot._main)return{type:"unaccepted",chain:a,moduleId:c};for(var u=0;u<f.parents.length;u++){var l=f.parents[u],s=N[l];if(s){if(s.hot._declinedDependencies[c])return{type:"declined",chain:a.concat([l]),moduleId:c,parentId:l};n.indexOf(l)>=0||(s.hot._acceptedDependencies[c]?(t[l]||(t[l]=[]),r(t[l],[c])):(delete t[l],n.push(l),o.push({chain:a.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}(l):{type:"disposed",moduleId:g};var w=!1,E=!1,x=!1,S="";switch(b.chain&&(S="\nUpdate propagation: "+b.chain.join(" -> ")),b.type){case"self-declined":t.onDeclined&&t.onDeclined(b),t.ignoreDeclined||(w=new Error("Aborted because of self decline: "+b.moduleId+S));break;case"declined":t.onDeclined&&t.onDeclined(b),t.ignoreDeclined||(w=new Error("Aborted because of declined dependency: "+b.moduleId+" in "+b.parentId+S));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(b),t.ignoreUnaccepted||(w=new Error("Aborted because "+l+" is not accepted"+S));break;case"accepted":t.onAccepted&&t.onAccepted(b),E=!0;break;case"disposed":t.onDisposed&&t.onDisposed(b),x=!0;break;default:throw new Error("Unexception type "+b.type)}if(w)return c("abort"),Promise.reject(w);if(E){h[l]=m[l],r(p,b.outdatedModules);for(l in b.outdatedDependencies)Object.prototype.hasOwnProperty.call(b.outdatedDependencies,l)&&(s[l]||(s[l]=[]),r(s[l],b.outdatedDependencies[l]))}x&&(r(p,[b.moduleId]),h[l]=v)}var A=[];for(i=0;i<p.length;i++)l=p[i],N[l]&&N[l].hot._selfAccepted&&A.push({module:l,errorHandler:N[l].hot._selfAccepted});c("dispose"),Object.keys(T).forEach(function(e){!1===T[e]&&n(e)});for(var C,D=p.slice();D.length>0;)if(l=D.pop(),f=N[l]){var P={},I=f.hot._disposeHandlers;for(u=0;u<I.length;u++)(o=I[u])(P);for(k[l]=P,f.hot.active=!1,delete N[l],delete s[l],u=0;u<f.children.length;u++){var R=N[f.children[u]];R&&((C=R.parents.indexOf(l))>=0&&R.parents.splice(C,1))}}var H,L;for(l in s)if(Object.prototype.hasOwnProperty.call(s,l)&&(f=N[l]))for(L=s[l],u=0;u<L.length;u++)H=L[u],(C=f.children.indexOf(H))>=0&&f.children.splice(C,1);c("apply"),_=y;for(l in h)Object.prototype.hasOwnProperty.call(h,l)&&(e[l]=h[l]);var B=null;for(l in s)if(Object.prototype.hasOwnProperty.call(s,l)&&(f=N[l])){L=s[l];var U=[];for(i=0;i<L.length;i++)if(H=L[i],o=f.hot._acceptedDependencies[H]){if(U.indexOf(o)>=0)continue;U.push(o)}for(i=0;i<U.length;i++){o=U[i];try{o(L)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:l,dependencyId:L[i],error:e}),t.ignoreErrored||B||(B=e)}}}for(i=0;i<A.length;i++){var M=A[i];l=M.module,j=[l];try{d(l)}catch(e){if("function"==typeof M.errorHandler)try{M.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:n,orginalError:e,originalError:e}),t.ignoreErrored||B||(B=n),B||(B=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:l,error:e}),t.ignoreErrored||B||(B=e)}}return B?(c("fail"),Promise.reject(B)):(c("idle"),new Promise(function(e){e(p)}))}function d(n){if(N[n])return N[n].exports;var t=N[n]={i:n,l:!1,exports:{},hot:i(n),parents:(E=j,j=[],E),children:[]};return e[n].call(t.exports,t,t.exports,o(n)),t.l=!0,t.exports}var h=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){f(e,n),h&&h(e,n)};var v,g,m,y,b=!0,_="feea4e4a427d91a69567",w=1e4,k={},j=[],E=[],x=[],O="idle",S=0,A=0,C={},D={},T={},N={};d.m=e,d.c=N,d.d=function(e,n,t){d.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},d.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return d.d(n,"a",n),n},d.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},d.p="",d.h=function(){return _},o(2)(d.s=2)})([function(e,n,t){(function(){var e=n;e.warn=function(e){"undefined"!=typeof console&&console.warn("Snowplow: "+e)},e.fromQuerystring=function(e,n){var t=new RegExp("^[^#]*[?&]"+e+"=([^&#]*)").exec(n);return t?decodeURIComponent(t[1].replace(/\+/g," ")):null},e.getHostName=function(e){var n=new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),t=n.exec(e);return t?t[1]:e},e.getReferrer=function(){return document.referrer},e.addEventListener=function(e,n,t,r){return e.addEventListener?(e.addEventListener(n,t,r),!0):e.attachEvent?e.attachEvent("on"+n,t):void(e["on"+n]=t)},e.getStorageCookie=function(n,t){return"cookie"==n?e.cookieRead(t):"localstorage"==n?e.localStorageRead(t):void 0},e.setStorageCookie=function(n,t,r){"cookie"==n?(console.log("设置cookie值",r),console.log(null===r),null===r?(e.cookieRemove(t),e.cookieWrite(t,"")):(e.cookieRemove(t),e.cookieWrite(t,r))):"localstorage"==n&&(null===r?(e.localStorageRemove(t),e.localStorageWrite(t,"")):(e.localStorageRemove(t),e.localStorageWrite(t,r)))},e.getStorageStragy=function(e){return function(e){try{document.cookie="cookietest=1"+(e?";domain="+e:"");var n=-1!=document.cookie.indexOf("cookietest=");return document.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT"+(e?"; domain="+e:""),n}catch(e){return!1}}(e)?"cookie":"localstorage"},e.cookieWrite=function(e,n,t,r,o){var i=new Date;t=t||730,o=o||"/",i.setTime(i.getTime()+24*t*60*60*1e3);var c="; expires="+i.toGMTString(),a=e+"="+n+c+"; path="+o;r&&(a+="; domain="+r),document.cookie=a},e.cookieRead=function(e){var n="; "+document.cookie,t=n.split("; "+e+"=");if(2==t.length)return t.pop().split(";").shift()},e.cookieRemove=function(n){e.cookieRead(n)&&e.cookieWrite(n,"",-1,"/")},e.localStorageRead=function(e){try{localStorage.getItem(e)}catch(e){}},e.localStorageWrite=function(e,n){try{localStorage.setItem(e,n)}catch(e){}},e.localStorageRemove=function(e){try{localStorage.removeItem(e)}catch(e){}},e.base64Encode=function(e){var n,t,r,o,i,c,a,u,f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",l=0,s=0,p="",d=[];if(!e)return e;e=function(e){e=(e+"").replace(/\r\n/g,"\n").replace(/\r/g,"\n");var n,t,r,o="",i=0;for(n=t=0,i=e.length,r=0;r<i;r++){var c=e.charCodeAt(r),a=null;c<128?t++:a=c>127&&c<2048?String.fromCharCode(c>>6|192,63&c|128):String.fromCharCode(c>>12|224,c>>6&63|128,63&c|128),null!==a&&(t>n&&(o+=e.substring(n,t)),o+=a,n=t=r+1)}return t>n&&(o+=e.substring(n,e.length)),o}(e);do{n=e.charCodeAt(l++),t=e.charCodeAt(l++),r=e.charCodeAt(l++),u=n<<16|t<<8|r,o=u>>18&63,i=u>>12&63,c=u>>6&63,a=63&u,d[s++]=f.charAt(o)+f.charAt(i)+f.charAt(c)+f.charAt(a)}while(l<e.length);switch(p=d.join(""),e.length%3){case 1:p=p.slice(0,-2)+"==";break;case 2:p=p.slice(0,-1)+"="}return p},e.uuid=function(e){return e?(e^16*Math.random()>>e/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,this.uuid)},e.addReadyListener=function(e){"loading"!=document.readyState?e():window.addEventListener?window.addEventListener("DOMContentLoaded",e):window.attachEvent("onreadystatechange",function(){"loading"!=document.readyState&&e()})},e._extend=function(e,n){for(var t in n)void 0!==n[t]&&(e[t]=n[t]);return e},e._trim=function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},e._filterEmptyProperties=function(e){var n={};for(var t in e)null!=e[t]&&(n[t]=e[t]);return n},e.hex_sha1=function(e){function n(e){var n,t,r,o;for(n="",r=e.length,t=0;t<r;t++)o=e.charCodeAt(t),o>=1&&o<=127?n+=e.charAt(t):o>2047?(n+=String.fromCharCode(224|o>>12&15),n+=String.fromCharCode(128|o>>6&63),n+=String.fromCharCode(128|o>>0&63)):(n+=String.fromCharCode(192|o>>6&31),n+=String.fromCharCode(128|o>>0&63));return n}function t(e,n,t,r){return e<20?n&t|~n&r:e<40?n^t^r:e<60?n&t|n&r|t&r:n^t^r}function r(e){return e<20?1518500249:e<40?1859775393:e<60?-1894007588:-899497514}function o(e,n){var t=(65535&e)+(65535&n);return(e>>16)+(n>>16)+(t>>16)<<16|65535&t}function i(e,n){return e<<n|e>>>32-n}var c=0;return function(e){for(var n=c?"0123456789ABCDEF":"0123456789abcdef",t="",r=0;r<4*e.length;r++)t+=n.charAt(e[r>>2]>>8*(3-r%4)+4&15)+n.charAt(e[r>>2]>>8*(3-r%4)&15);return t}(function(e){for(var n=e,c=Array(80),a=1732584193,u=-271733879,f=-1732584194,l=271733878,s=-1009589776,p=0;p<n.length;p+=16){for(var d=a,h=u,v=f,g=l,m=s,y=0;y<80;y++){c[y]=y<16?n[p+y]:i(c[y-3]^c[y-8]^c[y-14]^c[y-16],1);var b=o(o(i(a,5),t(y,u,f,l)),o(o(s,c[y]),r(y)));s=l,l=f,f=i(u,30),u=a,a=b}a=o(a,d),u=o(u,h),f=o(f,v),l=o(l,g),s=o(s,m)}return new Array(a,u,f,l,s)}(function(e){for(var t=n(e),r=1+(t.length+8>>6),o=new Array(16*r),i=0;i<16*r;i++)o[i]=0;for(i=0;i<t.length;i++)o[i>>2]|=t.charCodeAt(i)<<24-8*(3&i);return o[i>>2]|=128<<24-8*(3&i),o[16*r-1]=8*t.length,o}(e)))},e.strTimeToNumber=function(e){return void 0===e?0:parseInt(e)}})()},function(e,n,t){(function(){var e=n;e.deviceidUrl="https://api-data.nubia.com/js_api/deviceid",e.collectUrl="https://api-data.nubia.com/js_api/collect",e.checkServerTimeUrl="https://api-data.nubia.com/js_api/getServerTime"})()},function(e,n,t){var r,o,i=t(3),c=window;c.GlobalNubiaNamespace&&c.GlobalNubiaNamespace.length>0?(r=c.GlobalNubiaNamespace.shift(),o=c[r],o.q=new i.NubiaBee(o.q,r)):(c._snaq=c._snaq||[],c._snaq=new i.NubiaBee(c._snaq,"_snaq"))},function(e,n,t){(function(){var e=t(0),r=t(4),o=t(6),i=t(1);n.NubiaBee=function(n,t){function c(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=p+"?callback=NubiaBee.checkServerTime";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)}function a(){var n=e.getReferrer();n&&n.split("/")[2]===l||(e.setStorageCookie(s,"btTime",0),c())}function u(){try{d.pageCloseEvent()}catch(e){console.log(e)}}var f=window,l=document.domain,s=e.getStorageStragy(l),p=i.checkServerTimeUrl,d={expireDateTime:null,hasLoaded:!1,registeredOnLoadHandlers:[],pageViewId:null,clientTime:new Date,getServiceTime:null,pageCloseEvent:null};return f.NubiaBee={checkServerTime:function(n){e.setStorageCookie(s,"btTime",n-new Date)}},e.addEventListener(f,"beforeunload",u,!1),e.addReadyListener(a),new o.InQueueManager(r.Tracker,"Nubiabee-V1.0.1",d,n,t)}})()},function(e,n,t){(function(){var e=t(5).trackerCore,r=t(0),o=t(1);n.Tracker=function(n,t,i,c,a){function u(){var e={clickEvents:function(e){var n={};n.trackType="autoTrack";var t=e.target,o=t.tagName.toLowerCase();if(-1!==" button a input ".indexOf(" "+o+" ")){if("input"===o){if("button"!==t.getAttribute("type")&&"submit"!==t.getAttribute("type"))return!1;n.element_content=t.value}r._extend(n,l({target:t})),w.trackCustomEvent("webClick","count",1,n)}}};f(document,"click",function(n){e.clickEvents(n)})}function f(){function e(n){return n&&(n.preventDefault=e.preventDefault,n.stopPropagation=e.stopPropagation,n._getPath=e._getPath),n}function n(n,t,r){return function(o){if(o=o||e(window.event)){o.target=o.srcElement;var i,c,a=!0;return"function"==typeof r&&(i=r(o)),c=t.call(n,o),!1!==i&&!1!==c||(a=!1),a}}}e._getPath=function(){var e=this;return this.path||this.composedPath&&this.composedPath()||function(){try{var n=e.target,t=[n];if(null===n||null===n.parentElement)return[];for(;null!==n.parentElement;)n=n.parentElement,t.unshift(n);return t}catch(e){return[]}}()},e.preventDefault=function(){this.returnValue=!1},e.stopPropagation=function(){this.cancelBubble=!0},function(t,r,o){if(t&&t.addEventListener)t.addEventListener(r,function(n){n._getPath=e._getPath,o.call(this,n)},!1);else{var i="on"+r,c=t[i];t[i]=n(t,o,c)}}.apply(null,arguments)}function l(e){if(!e.target)return!1;var n=e.target,t=n.tagName.toLowerCase(),o={};if(o.element_type=t,o.element_name=n.getAttribute("name"),o.element_id=n.getAttribute("id"),o.element_class_name="string"==typeof n.className?n.className:null,o.element_target_url=n.getAttribute("href"),n.textContent){var i=r._trim(n.textContent);i&&(i=i.replace(/[\r\n]/g," ").replace(/[ ]+/g," ").substring(0,255)),o.element_content=i||""}return o=r._filterEmptyProperties(o),o.url=location.href,o.url_path=location.pathname,o.title=document.title,o}function s(e,n){var t=r.getStorageCookie(S,"btTime"),o=Date.parse(new Date)+(void 0==t?0:parseInt(t)),i=JSON.stringify(n),c="body="+i+"up_time="+o,a=r.hex_sha1(c);return e+"body="+encodeURIComponent(i)+"&up_time="+o+"&checksum="+a}function p(e){var n=D+"?",t=s(n,e),r=new Image(1,1);r.onload=function(){},r.onerror=function(){},r.src=t}function d(){a.sdkversion=i,w.setTrackerVersion(a),w.setStrategy(S)}function h(){var e=navigator.language;return e||(e=navigator.browserLanguage),e}function v(){return 6e4*(new Date).getTimezoneOffset()}function g(){var e={},n=navigator.userAgent.toLowerCase(),t=/(msie|firefox|chrome|opera|version).*?([\d.]+)/,r=n.match(t);return e.browser=r[1].replace(/version/,"'safari"),e.ver=r[2],e}function m(){w.trackProfile(null)}function y(){var e={};e.pageurl=x,e.pagetitle=k.title,w.trackStartUp(e)}function b(){var e={},n=g();e.js_info_br_name=navigator.appName,e.js_info_br_code=navigator.appCodeName,e.js_info_br_type=n.browser,e.js_info_br_version=n.ver,e.js_info_cookie_use=navigator.cookieEnabled,e.js_info_platform=navigator.platform,e.js_info_agent=navigator.userAgent,e.js_info_scr_height=window.screen.height,e.js_info_scr_width=window.screen.width,e.js_info_scr_depth=window.screen.colorDepth,e.js_info_scr_XDPI=window.screen.deviceXDPI,e.js_info_referr_url=O,e.js_info_lang=h(),e.js_info_host=E,e.js_info_port=window.location.port,e.js_info_protocol=window.location.protocol,e.js_info_tzone=v(),w.trackProfile(e)}var _,w=e(function(e){p(e)}),k=document,j=window,E=document.domain,x=j.location.href,O=r.getReferrer(),S=r.getStorageStragy(E),A=a.autoTrack||!1,C=a.plMaxTime,D=o.collectUrl;return c.pageCloseEvent=function(){var e={},n=Date.parse(new Date)+r.strTimeToNumber(r.getStorageCookie(S,"btTime")),t=_+r.strTimeToNumber(r.getStorageCookie(S,"btTime"));e.starttime=t,e.endtime=n;var o=n-t;C=!C||C-18e5<0?18e5:C,e.duration=o>C?C:o,w.trackCustomEvent("pl","count",1,e)},function(){d(),_=Date.parse(new Date)+r.strTimeToNumber(r.getStorageCookie(S,"btTime")),O&&O.split("/")[2]===E||(b(),y()),A&&r.addReadyListener(u)}(),{trackLogin:function(e){r.setStorageCookie(S,"uid",e),m()},trackStructEvent:function(e,n,t,r){w.trackCustomEvent(e,n,t,r)}}}})()},function(e,n,t){function r(e){function n(n){return"function"==typeof e&&e(n),n}function r(e){var n=f.getStorageCookie(a,"btTime"),t=Date.parse(new Date),r={context:{}};return r.when=t+(void 0==n?0:parseInt(n)),r.appid=c.appId,r.appkey=c.appkey,null!==e&&void 0!==e&&(r.context=e),r.context.channelid=c.chanelId,r.context.deviceid=u,r.context.sdkversion=c.sdkversion,r.context.version=c.version,r.context.timestamp=r.when,r.context.localtime=t,r.context.nstat_src="js",r}function o(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=l.deviceidUrl+"?callback=NubiaBee.getDeviceid";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)}function i(e,t){function i(){var n=f.getStorageCookie(a,"uid"),o=r(t);return o.what=e,n?(o.who=n,o.context.isvistor=!1):(o.who=u,o.context.isvistor=!0),o}var c=f.getStorageCookie(a,"na_did");if(void 0===c)return o(),void s.push(i());u=c,n(i())}var c,a,u,f=t(0),l=t(1),s=[];return window.NubiaBee.getDeviceid=function(e){f.setStorageCookie(a,"na_did",e),u=e,s.length>0&&s.forEach(function(t){t.who=e,t.deviceid=e,n(t)})},{setStrategy:function(e){a=e},setTrackerVersion:function(e){c=e},trackPageView:function(e,n,t,r,o){},trackCustomEvent:function(e,n,t,r){r=r||{},r.type=n,r.value=t,i(e,r)},trackProfile:function(e){i("profile",e)},trackStartUp:function(e){i("startup",e)}}}n.trackerCore=r},function(e,n,t){(function(){var e=t(7),r=t(0);n.InQueueManager=function(n,t,o,i,c){function a(n){var t=[];if(n&&0!==n.length)for(var o=0;o<n.length;o++)s.hasOwnProperty(n[o])?t.push(s[n[o]]):r.warn('Warning: Tracker namespace "'+n[o]+'" not configured');else t=e.map(s);return 0===t.length&&r.warn("Warning: No tracker configured"),t}function u(e,i){i=i||{},s.hasOwnProperty(e)?r.warn("Tracker namespace "+e+" already exists."):s[e]=new n(c,e,t,o,i)}function f(e){var n=e.split(":");return[n[0],n.length>1?n[1].split(";"):[]]}function l(){var n,t,r,o,i,c,l,p;for(n=0;n<arguments.length;n+=1)if(o=arguments[n],i=Array.prototype.shift.call(o),e.isFunction(i))i.apply(s,o);else if(c=f(i),r=c[0],l=c[1],"newTracker"!==r)for(p=a(l),t=0;t<p.length;t++)p[t][r].apply(p[t],o);else u("na",o[0])}for(var s={},p=0;p<i.length;p++)l(i[p]);return{push:l}}})()},function(e,n,t){(function(e,r){var o;(function(){function i(e){return Y(e)&&de.call(e,"callee")&&!ye.call(e,"callee")}function c(e,n){return e.push.apply(e,n),e}function a(e){return function(n){return null==n?ie:n[e]}}function u(e,n,t,r,o){return o(e,function(e,o,i){t=r?(r=!1,e):n(t,e,o,i)}),t}function f(e,n){return E(n,function(n){return e[n]})}function l(e){return e instanceof s?e:new s(e)}function s(e,n){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!n}function p(e,n,t){if("function"!=typeof e)throw new TypeError("Expected a function");return setTimeout(function(){e.apply(ie,t)},n)}function d(e,n){var t=!0;return je(e,function(e,r,o){return t=!!n(e,r,o)}),t}function h(e,n,t){for(var r=-1,o=e.length;++r<o;){var i=e[r],c=n(i);if(null!=c&&(a===ie?c===c:t(c,a)))var a=c,u=i}return u}function v(e,n){var t=[];return je(e,function(e,r,o){n(e,r,o)&&t.push(e)}),t}function g(e,n,t,r,o){var i=-1,a=e.length;for(t||(t=U),o||(o=[]);++i<a;){var u=e[i];0<n&&t(u)?1<n?g(u,n-1,t,r,o):c(o,u):r||(o[o.length]=u)}return o}function m(e,n){return e&&Ee(e,n,Le)}function y(e,n){return v(n,function(n){return $(e[n])})}function b(e,n){return e>n}function _(e,n,t,r,o){return e===n||(null==e||null==n||!Y(e)&&!Y(n)?e!==e&&n!==n:w(e,n,t,r,_,o))}function w(e,n,t,r,o,i){var c=De(e),a=De(n),u=c?"[object Array]":ve.call(e),f=a?"[object Array]":ve.call(n),u="[object Arguments]"==u?"[object Object]":u,f="[object Arguments]"==f?"[object Object]":f,l="[object Object]"==u,a="[object Object]"==f,f=u==f;i||(i=[]);var s=Oe(i,function(n){return n[0]==e}),p=Oe(i,function(e){return e[0]==n});if(s&&p)return s[1]==n;if(i.push([e,n]),i.push([n,e]),f&&!l){if(c)t=L(e,n,t,r,o,i);else e:{switch(u){case"[object Boolean]":case"[object Date]":case"[object Number]":t=z(+e,+n);break e;case"[object Error]":t=e.name==n.name&&e.message==n.message;break e;case"[object RegExp]":case"[object String]":t=e==n+"";break e}t=!1}return i.pop(),t}return 1&t||(c=l&&de.call(e,"__wrapped__"),u=a&&de.call(n,"__wrapped__"),!c&&!u)?!!f&&(t=B(e,n,t,r,o,i),i.pop(),t):(c=c?e.value():e,u=u?n.value():n,t=o(c,u,t,r,i),i.pop(),t)}function k(e){return"function"==typeof e?e:null==e?re:("object"==typeof e?x:a)(e)}function j(e,n){return e<n}function E(e,n){var t=-1,r=Q(e)?Array(e.length):[];return je(e,function(e,o,i){r[++t]=n(e,o,i)}),r}function x(e){var n=_e(e);return function(t){var r=n.length;if(null==t)return!r;for(t=Object(t);r--;){var o=n[r];if(!(o in t&&_(e[o],t[o],3)))return!1}return!0}}function O(e,n){return e=Object(e),J(n,function(n,t){return t in e&&(n[t]=e[t]),n},{})}function S(e){return xe(q(e,void 0,re),e+"")}function A(e,n,t){var r=-1,o=e.length;for(0>n&&(n=-n>o?0:o+n),t=t>o?o:t,0>t&&(t+=o),o=n>t?0:t-n>>>0,n>>>=0,t=Array(o);++r<o;)t[r]=e[r+n];return t}function C(e){return A(e,0,e.length)}function D(e,n){var t;return je(e,function(e,r,o){return!(t=n(e,r,o))}),!!t}function T(e,n){return J(n,function(e,n){return n.func.apply(n.thisArg,c([e],n.args))},e)}function N(e,n,t,r){var o=!t;t||(t={});for(var i=-1,c=n.length;++i<c;){var a=n[i],u=r?r(t[a],e[a],a,t,e):ie;if(u===ie&&(u=e[a]),o)t[a]=u;else{var f=t,l=f[a];de.call(f,a)&&z(l,u)&&(u!==ie||a in f)||(f[a]=u)}}return t}function P(e){return S(function(n,t){var r=-1,o=t.length,i=1<o?t[o-1]:ie,i=3<e.length&&"function"==typeof i?(o--,i):ie;for(n=Object(n);++r<o;){var c=t[r];c&&e(n,c,r,i)}return n})}function I(e){return function(){var n=arguments,t=ke(e.prototype),n=e.apply(t,n);return K(n)?n:t}}function R(e,n,t){function r(){for(var i=-1,c=arguments.length,a=-1,u=t.length,f=Array(u+c),l=this&&this!==fe&&this instanceof r?o:e;++a<u;)f[a]=t[a];for(;c--;)f[a++]=arguments[++i];return l.apply(n,f)}if("function"!=typeof e)throw new TypeError("Expected a function");var o=I(e);return r}function H(e,n,t,r){return e===ie||z(e,pe[t])&&!de.call(r,t)?n:e}function L(e,n,t,r,o,i){var c=e.length,a=n.length;if(c!=a&&!(1&t&&a>c))return!1;for(var a=-1,u=!0,f=2&t?[]:ie;++a<c;){var l=e[a],s=n[a];if(void 0!==ie){u=!1;break}if(f){if(!D(n,function(e,n){if(!G(f,n)&&(l===e||o(l,e,t,r,i)))return f.push(n)})){u=!1;break}}else if(l!==s&&!o(l,s,t,r,i)){u=!1;break}}return u}function B(e,n,t,r,o,i){var c=1&t,a=Le(e),u=a.length,f=Le(n).length;if(u!=f&&!c)return!1;for(var l=u;l--;){var s=a[l];if(!(c?s in n:de.call(n,s)))return!1}for(f=!0;++l<u;){var s=a[l],p=e[s],d=n[s];if(void 0!==ie||p!==d&&!o(p,d,t,r,i)){f=!1;break}c||(c="constructor"==s)}return f&&!c&&(t=e.constructor,r=n.constructor,t!=r&&"constructor"in e&&"constructor"in n&&!("function"==typeof t&&t instanceof t&&"function"==typeof r&&r instanceof r)&&(f=!1)),f}function U(e){return De(e)||i(e)}function M(e){var n=[];if(null!=e)for(var t in Object(e))n.push(t);return n}function q(e,n,t){return n=we(n===ie?e.length-1:n,0),function(){for(var r=arguments,o=-1,i=we(r.length-n,0),c=Array(i);++o<i;)c[o]=r[n+o];for(o=-1,i=Array(n+1);++o<n;)i[o]=r[o];return i[n]=t(c),e.apply(this,i)}}function F(e){return(null==e?0:e.length)?g(e,1):[]}function W(e){return e&&e.length?e[0]:ie}function G(e,n,t){var r=null==e?0:e.length;t="number"==typeof t?0>t?we(r+t,0):t:0,t=(t||0)-1;for(var o=n===n;++t<r;){var i=e[t];if(o?i===n:i!==i)return t}return-1}function V(e,n){return je(e,k(n))}function J(e,n,t){return u(e,k(n),t,3>arguments.length,je)}function X(e,n){var t;if("function"!=typeof n)throw new TypeError("Expected a function");return e=Te(e),function(){return 0<--e&&(t=n.apply(this,arguments)),1>=e&&(n=ie),t}}function z(e,n){return e===n||e!==e&&n!==n}function Q(e){var n;return(n=null!=e)&&(n=e.length,n="number"==typeof n&&-1<n&&0==n%1&&9007199254740991>=n),n&&!$(e)}function $(e){return!!K(e)&&("[object Function]"==(e=ve.call(e))||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e)}function K(e){var n=typeof e;return null!=e&&("object"==n||"function"==n)}function Y(e){return null!=e&&"object"==typeof e}function Z(e){return"number"==typeof e||Y(e)&&"[object Number]"==ve.call(e)}function ee(e){return"string"==typeof e||!De(e)&&Y(e)&&"[object String]"==ve.call(e)}function ne(e){return"string"==typeof e?e:null==e?"":e+""}function te(e){return null==e?[]:f(e,Le(e))}function re(e){return e}function oe(e,n,t){var r=Le(n),o=y(n,r);null!=t||K(n)&&(o.length||!r.length)||(t=n,n=e,e=this,o=y(n,Le(n)));var i=!(K(t)&&"chain"in t&&!t.chain),a=$(e);return je(o,function(t){var r=n[t];e[t]=r,a&&(e.prototype[t]=function(){var n=this.__chain__;if(i||n){var t=e(this.__wrapped__);return(t.__actions__=C(this.__actions__)).push({func:r,args:arguments,thisArg:e}),t.__chain__=n,t}return r.apply(e,c([this.value()],arguments))})}),e}var ie,ce=/[&<>"']/g,ae=RegExp(ce.source),ue="object"==typeof self&&self&&self.Object===Object&&self,fe="object"==typeof e&&e&&e.Object===Object&&e||ue||Function("return this")(),le=((ue="object"==typeof n&&n&&!n.nodeType&&n)&&"object"==typeof r&&r&&r.nodeType,function(e){return function(n){return null==e?ie:e[n]}}({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})),se=Array.prototype,pe=Object.prototype,de=pe.hasOwnProperty,he=0,ve=pe.toString,ge=fe._,me=Object.create,ye=pe.propertyIsEnumerable,be=fe.isFinite,_e=function(e,n){return function(t){return e(n(t))}}(Object.keys,Object),we=Math.max,ke=function(){function e(){}return function(n){return K(n)?me?me(n):(e.prototype=n,n=new e,e.prototype=ie,n):{}}}();s.prototype=ke(l.prototype),s.prototype.constructor=s;var je=function(e,n){return function(n,t){if(null==n)return n;if(!Q(n))return e(n,t);for(var r=n.length,o=-1,i=Object(n);++o<r&&!1!==t(i[o],o,i););return n}}(m),Ee=function(e){return function(e,n,t){var r=-1,o=Object(e);t=t(e);for(var i=t.length;i--;){var c=t[++r];if(!1===n(o[c],c,o))break}return e}}(),xe=re,Oe=function(e){return function(n,t,r){var o=Object(n);if(!Q(n)){var i=k(t);n=Le(n),t=function(e){return i(o[e],e,o)}}return t=e(n,t,r),-1<t?o[i?n[t]:t]:ie}}(function(e,n,t){var r=null==e?0:e.length;if(!r)return-1;0>(t=null==t?0:Te(t))&&(t=we(r+t,0));e:{for(n=k(n),r=e.length,t+=-1;++t<r;)if(n(e[t],t,e)){e=t;break e}e=-1}return e}),Se=S(function(e,n,t){return R(e,n,t)}),Ae=S(function(e,n){return p(e,1,n)}),Ce=S(function(e,n,t){return p(e,Ne(n)||0,t)}),De=Array.isArray,Te=Number,Ne=Number,Pe=P(function(e,n){N(n,_e(n),e)}),Ie=P(function(e,n){N(n,M(n),e)}),Re=P(function(e,n,t,r){N(n,Be(n),e,r)}),He=S(function(e){return e.push(ie,H),Re.apply(ie,e)}),Le=_e,Be=M,Ue=function(e){return xe(q(e,ie,F),e+"")}(function(e,n){return null==e?{}:O(e,n)});l.assignIn=Ie,l.before=X,l.bind=Se,l.chain=function(e){return e=l(e),e.__chain__=!0,e},l.compact=function(e){return v(e,Boolean)},l.concat=function(){var e=arguments.length;if(!e)return[];for(var n=Array(e-1),t=arguments[0];e--;)n[e-1]=arguments[e];return c(De(t)?C(t):[t],g(n,1))},l.create=function(e,n){var t=ke(e);return null==n?t:Pe(t,n)},l.defaults=He,l.defer=Ae,l.delay=Ce,l.filter=function(e,n){return v(e,k(n))},l.flatten=F,l.flattenDeep=function(e){return(null==e?0:e.length)?g(e,1/0):[]},l.iteratee=k,l.keys=Le,l.map=function(e,n){return E(e,k(n))},l.matches=function(e){return x(Pe({},e))},l.mixin=oe,l.negate=function(e){if("function"!=typeof e)throw new TypeError("Expected a function");return function(){return!e.apply(this,arguments)}},l.once=function(e){return X(2,e)},l.pick=Ue,l.slice=function(e,n,t){var r=null==e?0:e.length;return t=t===ie?r:+t,r?A(e,null==n?0:+n,t):[]},l.sortBy=function(e,n){var t=0;return n=k(n),E(E(e,function(e,r,o){return{value:e,index:t++,criteria:n(e,r,o)}}).sort(function(e,n){var t;e:{t=e.criteria;var r=n.criteria;if(t!==r){var o=t!==ie,i=null===t,c=t===t,a=r!==ie,u=null===r,f=r===r;if(!u&&t>r||i&&a&&f||!o&&f||!c){t=1;break e}if(!i&&t<r||u&&o&&c||!a&&c||!f){t=-1;break e}}t=0}return t||e.index-n.index}),a("value"))},l.tap=function(e,n){return n(e),e},l.thru=function(e,n){return n(e)},l.toArray=function(e){return Q(e)?e.length?C(e):[]:te(e)},l.values=te,l.extend=Ie,oe(l,l),l.clone=function(e){return K(e)?De(e)?C(e):N(e,_e(e)):e},l.escape=function(e){return(e=ne(e))&&ae.test(e)?e.replace(ce,le):e},l.every=function(e,n,t){return n=t?ie:n,d(e,k(n))},l.find=Oe,l.forEach=V,l.has=function(e,n){return null!=e&&de.call(e,n)},l.head=W,l.identity=re,l.indexOf=G,l.isArguments=i,l.isArray=De,l.isBoolean=function(e){return!0===e||!1===e||Y(e)&&"[object Boolean]"==ve.call(e)},l.isDate=function(e){return Y(e)&&"[object Date]"==ve.call(e)},l.isEmpty=function(e){return Q(e)&&(De(e)||ee(e)||$(e.splice)||i(e))?!e.length:!_e(e).length},l.isEqual=function(e,n){return _(e,n)},l.isFinite=function(e){return"number"==typeof e&&be(e)},l.isFunction=$,l.isNaN=function(e){return Z(e)&&e!=+e},l.isNull=function(e){return null===e},l.isNumber=Z,l.isObject=K,l.isRegExp=function(e){return Y(e)&&"[object RegExp]"==ve.call(e)},l.isString=ee,l.isUndefined=function(e){return e===ie},l.last=function(e){var n=null==e?0:e.length;return n?e[n-1]:ie},l.max=function(e){return e&&e.length?h(e,re,b):ie},l.min=function(e){return e&&e.length?h(e,re,j):ie},l.noConflict=function(){return fe._===this&&(fe._=ge),this},l.noop=function(){},l.reduce=J,l.result=function(e,n,t){return n=null==e?ie:e[n],n===ie&&(n=t),$(n)?n.call(e):n},l.size=function(e){return null==e?0:(e=Q(e)?e:_e(e),e.length)},l.some=function(e,n,t){return n=t?ie:n,D(e,k(n))},l.uniqueId=function(e){var n=++he;return ne(e)+n},l.each=V,l.first=W,oe(l,function(){var e={};return m(l,function(n,t){de.call(l.prototype,t)||(e[t]=n)}),e}(),{chain:!1}),l.VERSION="4.17.4",je("pop join replace reverse split push shift sort splice unshift".split(" "),function(e){var n=(/^(?:replace|split)$/.test(e)?String.prototype:se)[e],t=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",r=/^(?:pop|join|replace|shift)$/.test(e);l.prototype[e]=function(){var e=arguments;if(r&&!this.__chain__){var o=this.value();return n.apply(De(o)?o:[],e)}return this[t](function(t){return n.apply(De(t)?t:[],e)})}}),l.prototype.toJSON=l.prototype.valueOf=l.prototype.value=function(){return T(this.__wrapped__,this.__actions__)},fe._=l,void 0!==(o=function(){return l}.call(n,t,n,r))&&(r.exports=o)}).call(this)}).call(n,t(8),t(9)(e))},function(e,n){var t;t=function(){return this}();try{t=t||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(t=window)}e.exports=t},function(e,n){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}}]);