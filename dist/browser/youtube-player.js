!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="/",e(0)}([function(t,e,n){(function(t){"use strict";function e(t){return t&&t.__esModule?t:{"default":t}}var r=n(1),o=e(r);t.gajus=t.gajus||{},t.gajus.YouTubePlayer=o["default"]}).call(e,function(){return this}())},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var o=n(2),i=r(o),u=n(28),s=r(u);Object.defineProperty(e,"__esModule",{value:!0});var a=n(30),c=r(a),f=n(31),l=n(36),p=r(l),v=n(37),d=r(v),h=n(38),y=r(h),_=void 0,g=void 0;_={},g=y["default"](),_.proxyEvents=function(t){var e=void 0;return e={},i["default"](d["default"],function(n){var r=void 0;r="on"+s["default"](n),e[r]=function(e){t.emit(n,e)}}),e},_.promisifyPlayer=function(t){var e=void 0;return e={},i["default"](p["default"],function(n){e[n]=function(){for(var e=arguments.length,r=Array(e),o=0;e>o;o++)r[o]=arguments[o];return t.then(function(t){return t[n].apply(t,r)})}}),e},e["default"]=function(t){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n=void 0,r=void 0,o=void 0;if(r={},n=new c["default"],e.events)throw new Error("Event handlers cannot be overwritten.");if("string"==typeof t&&!document.getElementById(t))throw new Error('Element "#'+t+'" does not exist.');return e.events=_.proxyEvents(n),o=new f.Promise(function(r){g.then(function(n){return new n.Player(t,e)}).then(function(t){n.on("ready",function(){r(t)})})}),r=_.promisifyPlayer(o),r.on=function(t,e,r){n.on(t,e,r)},r},t.exports=e["default"]},function(t,e,n){var r=n(3),o=n(4),i=n(25),u=i(r,o);t.exports=u},function(t,e){function n(t,e){for(var n=-1,r=t.length;++n<r&&e(t[n],n,t)!==!1;);return t}t.exports=n},function(t,e,n){var r=n(5),o=n(24),i=o(r);t.exports=i},function(t,e,n){function r(t,e){return o(t,e,i)}var o=n(6),i=n(10);t.exports=r},function(t,e,n){var r=n(7),o=r();t.exports=o},function(t,e,n){function r(t){return function(e,n,r){for(var i=o(e),u=r(e),s=u.length,a=t?s:-1;t?a--:++a<s;){var c=u[a];if(n(i[c],c,i)===!1)break}return e}}var o=n(8);t.exports=r},function(t,e,n){function r(t){return o(t)?t:Object(t)}var o=n(9);t.exports=r},function(t,e){function n(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}t.exports=n},function(t,e,n){var r=n(11),o=n(15),i=n(9),u=n(19),s=r(Object,"keys"),a=s?function(t){var e=null==t?void 0:t.constructor;return"function"==typeof e&&e.prototype===t||"function"!=typeof t&&o(t)?u(t):i(t)?s(t):[]}:u;t.exports=a},function(t,e,n){function r(t,e){var n=null==t?void 0:t[e];return o(n)?n:void 0}var o=n(12);t.exports=r},function(t,e,n){function r(t){return null==t?!1:o(t)?f.test(a.call(t)):i(t)&&u.test(t)}var o=n(13),i=n(14),u=/^\[object .+?Constructor\]$/,s=Object.prototype,a=Function.prototype.toString,c=s.hasOwnProperty,f=RegExp("^"+a.call(c).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=r},function(t,e,n){function r(t){return o(t)&&s.call(t)==i}var o=n(9),i="[object Function]",u=Object.prototype,s=u.toString;t.exports=r},function(t,e){function n(t){return!!t&&"object"==typeof t}t.exports=n},function(t,e,n){function r(t){return null!=t&&i(o(t))}var o=n(16),i=n(18);t.exports=r},function(t,e,n){var r=n(17),o=r("length");t.exports=o},function(t,e){function n(t){return function(e){return null==e?void 0:e[t]}}t.exports=n},function(t,e){function n(t){return"number"==typeof t&&t>-1&&t%1==0&&r>=t}var r=9007199254740991;t.exports=n},function(t,e,n){function r(t){for(var e=a(t),n=e.length,r=n&&t.length,c=!!r&&s(r)&&(i(t)||o(t)),l=-1,p=[];++l<n;){var v=e[l];(c&&u(v,r)||f.call(t,v))&&p.push(v)}return p}var o=n(20),i=n(21),u=n(22),s=n(18),a=n(23),c=Object.prototype,f=c.hasOwnProperty;t.exports=r},function(t,e,n){function r(t){return i(t)&&o(t)&&s.call(t,"callee")&&!a.call(t,"callee")}var o=n(15),i=n(14),u=Object.prototype,s=u.hasOwnProperty,a=u.propertyIsEnumerable;t.exports=r},function(t,e,n){var r=n(11),o=n(18),i=n(14),u="[object Array]",s=Object.prototype,a=s.toString,c=r(Array,"isArray"),f=c||function(t){return i(t)&&o(t.length)&&a.call(t)==u};t.exports=f},function(t,e){function n(t,e){return t="number"==typeof t||r.test(t)?+t:-1,e=null==e?o:e,t>-1&&t%1==0&&e>t}var r=/^\d+$/,o=9007199254740991;t.exports=n},function(t,e,n){function r(t){if(null==t)return[];a(t)||(t=Object(t));var e=t.length;e=e&&s(e)&&(i(t)||o(t))&&e||0;for(var n=t.constructor,r=-1,c="function"==typeof n&&n.prototype===t,l=Array(e),p=e>0;++r<e;)l[r]=r+"";for(var v in t)p&&u(v,e)||"constructor"==v&&(c||!f.call(t,v))||l.push(v);return l}var o=n(20),i=n(21),u=n(22),s=n(18),a=n(9),c=Object.prototype,f=c.hasOwnProperty;t.exports=r},function(t,e,n){function r(t,e){return function(n,r){var s=n?o(n):0;if(!i(s))return t(n,r);for(var a=e?s:-1,c=u(n);(e?a--:++a<s)&&r(c[a],a,c)!==!1;);return n}}var o=n(16),i=n(18),u=n(8);t.exports=r},function(t,e,n){function r(t,e){return function(n,r,u){return"function"==typeof r&&void 0===u&&i(n)?t(n,r):e(n,o(r,u,3))}}var o=n(26),i=n(21);t.exports=r},function(t,e,n){function r(t,e,n){if("function"!=typeof t)return o;if(void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 3:return function(n,r,o){return t.call(e,n,r,o)};case 4:return function(n,r,o,i){return t.call(e,n,r,o,i)};case 5:return function(n,r,o,i,u){return t.call(e,n,r,o,i,u)}}return function(){return t.apply(e,arguments)}}var o=n(27);t.exports=r},function(t,e){function n(t){return t}t.exports=n},function(t,e,n){function r(t){return t=o(t),t&&t.charAt(0).toUpperCase()+t.slice(1)}var o=n(29);t.exports=r},function(t,e){function n(t){return null==t?"":t+""}t.exports=n},function(t,e,n){"use strict";function r(t,e,n){this.fn=t,this.context=e,this.once=n||!1}function o(){}var i="function"!=typeof Object.create?"~":!1;o.prototype._events=void 0,o.prototype.listeners=function(t,e){var n=i?i+t:t,r=this._events&&this._events[n];if(e)return!!r;if(!r)return[];if(r.fn)return[r.fn];for(var o=0,u=r.length,s=new Array(u);u>o;o++)s[o]=r[o].fn;return s},o.prototype.emit=function(t,e,n,r,o,u){var s=i?i+t:t;if(!this._events||!this._events[s])return!1;var a,c,f=this._events[s],l=arguments.length;if("function"==typeof f.fn){switch(f.once&&this.removeListener(t,f.fn,void 0,!0),l){case 1:return f.fn.call(f.context),!0;case 2:return f.fn.call(f.context,e),!0;case 3:return f.fn.call(f.context,e,n),!0;case 4:return f.fn.call(f.context,e,n,r),!0;case 5:return f.fn.call(f.context,e,n,r,o),!0;case 6:return f.fn.call(f.context,e,n,r,o,u),!0}for(c=1,a=new Array(l-1);l>c;c++)a[c-1]=arguments[c];f.fn.apply(f.context,a)}else{var p,v=f.length;for(c=0;v>c;c++)switch(f[c].once&&this.removeListener(t,f[c].fn,void 0,!0),l){case 1:f[c].fn.call(f[c].context);break;case 2:f[c].fn.call(f[c].context,e);break;case 3:f[c].fn.call(f[c].context,e,n);break;default:if(!a)for(p=1,a=new Array(l-1);l>p;p++)a[p-1]=arguments[p];f[c].fn.apply(f[c].context,a)}}return!0},o.prototype.on=function(t,e,n){var o=new r(e,n||this),u=i?i+t:t;return this._events||(this._events=i?{}:Object.create(null)),this._events[u]?this._events[u].fn?this._events[u]=[this._events[u],o]:this._events[u].push(o):this._events[u]=o,this},o.prototype.once=function(t,e,n){var o=new r(e,n||this,!0),u=i?i+t:t;return this._events||(this._events=i?{}:Object.create(null)),this._events[u]?this._events[u].fn?this._events[u]=[this._events[u],o]:this._events[u].push(o):this._events[u]=o,this},o.prototype.removeListener=function(t,e,n,r){var o=i?i+t:t;if(!this._events||!this._events[o])return this;var u=this._events[o],s=[];if(e)if(u.fn)(u.fn!==e||r&&!u.once||n&&u.context!==n)&&s.push(u);else for(var a=0,c=u.length;c>a;a++)(u[a].fn!==e||r&&!u[a].once||n&&u[a].context!==n)&&s.push(u[a]);return s.length?this._events[o]=1===s.length?s[0]:s:delete this._events[o],this},o.prototype.removeAllListeners=function(t){return this._events?(t?delete this._events[i?i+t:t]:this._events=i?{}:Object.create(null),this):this},o.prototype.off=o.prototype.removeListener,o.prototype.addListener=o.prototype.on,o.prototype.setMaxListeners=function(){return this},o.prefixed=i,t.exports=o},function(t,e,n){var r;(function(t,o,i){/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
	 * @version   3.0.2
	 */
(function(){"use strict";function u(t){return"function"==typeof t||"object"==typeof t&&null!==t}function s(t){return"function"==typeof t}function a(t){return"object"==typeof t&&null!==t}function c(t){J=t}function f(t){Z=t}function l(){return function(){t.nextTick(y)}}function p(){return function(){G(y)}}function v(){var t=0,e=new tt(y),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function d(){var t=new MessageChannel;return t.port1.onmessage=y,function(){t.port2.postMessage(0)}}function h(){return function(){setTimeout(y,1)}}function y(){for(var t=0;X>t;t+=2){var e=rt[t],n=rt[t+1];e(n),rt[t]=void 0,rt[t+1]=void 0}X=0}function _(){try{var t=n(34);return G=t.runOnLoop||t.runOnContext,p()}catch(e){return h()}}function g(){}function m(){return new TypeError("You cannot resolve a promise with itself")}function b(){return new TypeError("A promises callback cannot return that same promise.")}function x(t){try{return t.then}catch(e){return st.error=e,st}}function w(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function A(t,e,n){Z(function(t){var r=!1,o=w(n,e,function(n){r||(r=!0,e!==n?O(t,n):V(t,n))},function(e){r||(r=!0,T(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,T(t,o))},t)}function P(t,e){e._state===it?V(t,e._result):e._state===ut?T(t,e._result):k(e,void 0,function(e){O(t,e)},function(e){T(t,e)})}function j(t,e){if(e.constructor===t.constructor)P(t,e);else{var n=x(e);n===st?T(t,st.error):void 0===n?V(t,e):s(n)?A(t,e,n):V(t,e)}}function O(t,e){t===e?T(t,m()):u(e)?j(t,e):V(t,e)}function E(t){t._onerror&&t._onerror(t._result),S(t)}function V(t,e){t._state===ot&&(t._result=e,t._state=it,0!==t._subscribers.length&&Z(S,t))}function T(t,e){t._state===ot&&(t._state=ut,t._result=e,Z(E,t))}function k(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+it]=n,o[i+ut]=r,0===i&&t._state&&Z(S,t)}function S(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r,o,i=t._result,u=0;u<e.length;u+=3)r=e[u],o=e[u+n],r?L(n,r,o,i):o(i);t._subscribers.length=0}}function C(){this.error=null}function M(t,e){try{return t(e)}catch(n){return at.error=n,at}}function L(t,e,n,r){var o,i,u,a,c=s(n);if(c){if(o=M(n,r),o===at?(a=!0,i=o.error,o=null):u=!0,e===o)return void T(e,b())}else o=r,u=!0;e._state!==ot||(c&&u?O(e,o):a?T(e,i):t===it?V(e,o):t===ut&&T(e,o))}function I(t,e){try{e(function(e){O(t,e)},function(e){T(t,e)})}catch(n){T(t,n)}}function R(t,e){var n=this;n._instanceConstructor=t,n.promise=new t(g),n._validateInput(e)?(n._input=e,n.length=e.length,n._remaining=e.length,n._init(),0===n.length?V(n.promise,n._result):(n.length=n.length||0,n._enumerate(),0===n._remaining&&V(n.promise,n._result))):T(n.promise,n._validationError())}function B(t){return new ct(this,t).promise}function Y(t){function e(t){O(o,t)}function n(t){T(o,t)}var r=this,o=new r(g);if(!W(t))return T(o,new TypeError("You must pass an array to race.")),o;for(var i=t.length,u=0;o._state===ot&&i>u;u++)k(r.resolve(t[u]),void 0,e,n);return o}function $(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(g);return O(n,t),n}function F(t){var e=this,n=new e(g);return T(n,t),n}function U(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function D(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function Q(t){this._id=dt++,this._state=void 0,this._result=void 0,this._subscribers=[],g!==t&&(s(t)||U(),this instanceof Q||D(),I(this,t))}function N(){var t;if("undefined"!=typeof o)t=o;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;(!n||"[object Promise]"!==Object.prototype.toString.call(n.resolve())||n.cast)&&(t.Promise=ht)}var z;z=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var G,J,K,W=z,X=0,Z=({}.toString,function(t,e){rt[X]=t,rt[X+1]=e,X+=2,2===X&&(J?J(y):K())}),q="undefined"!=typeof window?window:void 0,H=q||{},tt=H.MutationObserver||H.WebKitMutationObserver,et="undefined"!=typeof t&&"[object process]"==={}.toString.call(t),nt="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,rt=new Array(1e3);K=et?l():tt?v():nt?d():void 0===q?_():h();var ot=void 0,it=1,ut=2,st=new C,at=new C;R.prototype._validateInput=function(t){return W(t)},R.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")},R.prototype._init=function(){this._result=new Array(this.length)};var ct=R;R.prototype._enumerate=function(){for(var t=this,e=t.length,n=t.promise,r=t._input,o=0;n._state===ot&&e>o;o++)t._eachEntry(r[o],o)},R.prototype._eachEntry=function(t,e){var n=this,r=n._instanceConstructor;a(t)?t.constructor===r&&t._state!==ot?(t._onerror=null,n._settledAt(t._state,e,t._result)):n._willSettleAt(r.resolve(t),e):(n._remaining--,n._result[e]=t)},R.prototype._settledAt=function(t,e,n){var r=this,o=r.promise;o._state===ot&&(r._remaining--,t===ut?T(o,n):r._result[e]=n),0===r._remaining&&V(o,r._result)},R.prototype._willSettleAt=function(t,e){var n=this;k(t,void 0,function(t){n._settledAt(it,e,t)},function(t){n._settledAt(ut,e,t)})};var ft=B,lt=Y,pt=$,vt=F,dt=0,ht=Q;Q.all=ft,Q.race=lt,Q.resolve=pt,Q.reject=vt,Q._setScheduler=c,Q._setAsap=f,Q._asap=Z,Q.prototype={constructor:Q,then:function(t,e){var n=this,r=n._state;if(r===it&&!t||r===ut&&!e)return this;var o=new this.constructor(g),i=n._result;if(r){var u=arguments[r-1];Z(function(){L(r,o,u,i)})}else k(n,o,t,e);return o},"catch":function(t){return this.then(null,t)}};var yt=N,_t={Promise:ht,polyfill:yt};n(35).amd?(r=function(){return _t}.call(e,n,e,i),!(void 0!==r&&(i.exports=r))):"undefined"!=typeof i&&i.exports?i.exports=_t:"undefined"!=typeof this&&(this.ES6Promise=_t),yt()}).call(this)}).call(e,n(32),function(){return this}(),n(33)(t))},function(t,e){function n(){c=!1,u.length?a=u.concat(a):f=-1,a.length&&r()}function r(){if(!c){var t=setTimeout(n);c=!0;for(var e=a.length;e;){for(u=a,a=[];++f<e;)u&&u[f].run();f=-1,e=a.length}u=null,c=!1,clearTimeout(t)}}function o(t,e){this.fun=t,this.array=e}function i(){}var u,s=t.exports={},a=[],c=!1,f=-1;s.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];a.push(new o(t,e)),1!==a.length||c||setTimeout(r,0)},o.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=i,s.addListener=i,s.once=i,s.off=i,s.removeListener=i,s.removeAllListeners=i,s.emit=i,s.binding=function(t){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(t){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},function(t,e){},function(t,e){t.exports=function(){throw new Error("define cannot be used indirect")}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","clearVideo","getVideoBytesLoaded","getVideoBytesTotal","getVideoLoadedFraction","getVideoStartBytes","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","getPlaylistId","loadModule","unloadModule","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getDebugText","getVideoData","addCueRange","removeCueRange","getApiInterface","showVideoInfo","hideVideoInfo","G","C","R","aa","$","Z","getVideoEmbedCode","getOptions","getOption","Y","X","addEventListener","destroy","A","P","J","setSize","getIframe"],t.exports=e["default"]},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange"],t.exports=e["default"]},function(t,e,n){(function(r){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(31),u=n(39),s=o(u);e["default"]=function(){var t=void 0;return t=new i.Promise(function(t){var e=void 0;e=r.onYouTubeIframeAPIReady,r.onYouTubeIframeAPIReady=function(){e&&e(),t(r.YT)}}),s["default"]("https://www.youtube.com/iframe_api"),t},t.exports=e["default"]}).call(e,function(){return this}())},function(t,e){function n(t,e){for(var n in e)t.setAttribute(n,e[n])}function r(t,e){t.onload=function(){this.onerror=this.onload=null,e(null,t)},t.onerror=function(){this.onerror=this.onload=null,e(new Error("Failed to load "+this.src),t)}}function o(t,e){t.onreadystatechange=function(){("complete"==this.readyState||"loaded"==this.readyState)&&(this.onreadystatechange=null,e(null,t))}}t.exports=function(t,e,i){var u=document.head||document.getElementsByTagName("head")[0],s=document.createElement("script");"function"==typeof e&&(i=e,e={}),e=e||{},i=i||function(){},s.type=e.type||"text/javascript",s.charset=e.charset||"utf8",s.async="async"in e?!!e.async:!0,s.src=t,e.attrs&&n(s,e.attrs),e.text&&(s.text=""+e.text);var a="onload"in s?r:o;a(s,i),s.onload||r(s,i),u.appendChild(s)}}]);
//# sourceMappingURL=youtube-player.js.map