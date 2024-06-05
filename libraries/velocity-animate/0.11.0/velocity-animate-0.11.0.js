/*!
* Velocity.js: Accelerated JavaScript animation.
* @version 0.11.0
* @docs http://VelocityJS.org
* @license Copyright 2014 Julian Shapiro. MIT License: http://en.wikipedia.org/wiki/MIT_License
*/
!function(e){"function"==typeof define&&define.amd?window.Velocity?define(e):define(["jquery"],e):e("object"==typeof exports?window.Velocity?require("jquery"):void 0:window.jQuery)}(function(e){return function(t,r,a,i){function o(e){for(var t=-1,r=e?e.length:0,a=[];++t<r;){var i=e[t];i&&a.push(i)}return a}function n(e){var t=$.data(e,p);return null===t?i:t}function s(e){return function(t){return Math.round(t*e)*(1/e)}}function l(e,t){var r=e;return y.isString(e)?v.Easings[e]||(r=!1):r=y.isArray(e)&&1===e.length?s.apply(null,e):y.isArray(e)&&2===e.length?b.apply(null,e.concat([t])):y.isArray(e)&&4===e.length?x.apply(null,e):!1,r===!1&&(r=v.Easings[v.defaults.easing]?v.defaults.easing:d),r}function u(e){if(e)for(var t=(new Date).getTime(),r=0,a=v.State.calls.length;a>r;r++)if(v.State.calls[r]){var o=v.State.calls[r],s=o[0],l=o[2],p=o[3];p||(p=v.State.calls[r][3]=t-16);for(var g=Math.min((t-p)/l.duration,1),d=0,f=s.length;f>d;d++){var h=s[d],x=h.element;if(n(x)){var b=!1;l.display&&"none"!==l.display&&S.setPropertyValue(x,"display",l.display),l.visibility&&"hidden"!==l.visibility&&S.setPropertyValue(x,"visibility",l.visibility);for(var V in h)if("element"!==V){var P=h[V],w,C=y.isString(P.easing)?v.Easings[P.easing]:P.easing;if(w=1===g?P.endValue:P.startValue+(P.endValue-P.startValue)*C(g),P.currentValue=w,S.Hooks.registered[V]){var T=S.Hooks.getRoot(V),k=n(x).rootPropertyValueCache[T];k&&(P.rootPropertyValue=k)}var E=S.setPropertyValue(x,V,P.currentValue+(0===parseFloat(w)?"":P.unitType),P.rootPropertyValue,P.scrollData);S.Hooks.registered[V]&&(n(x).rootPropertyValueCache[T]=S.Normalizations.registered[T]?S.Normalizations.registered[T]("extract",null,E[1]):E[1]),"transform"===E[0]&&(b=!0)}l.mobileHA&&n(x).transformCache.translate3d===i&&(n(x).transformCache.translate3d="(0px, 0px, 0px)",b=!0),b&&S.flushTransformCache(x)}}l.display&&"none"!==l.display&&(v.State.calls[r][2].display=!1),l.visibility&&"hidden"!==l.visibility&&(v.State.calls[r][2].visibility=!1),l.progress&&l.progress.call(o[1],o[1],g,Math.max(0,p+l.duration-t),p),1===g&&c(r)}v.State.isTicking&&(v.mock?u(!0):m(u))}function c(e,t){if(!v.State.calls[e])return!1;for(var r=v.State.calls[e][0],a=v.State.calls[e][1],o=v.State.calls[e][2],s=v.State.calls[e][4],l=!1,u=0,c=r.length;c>u;u++){var p=r[u].element;if(t||o.loop||("none"===o.display&&S.setPropertyValue(p,"display",o.display),"hidden"===o.visibility&&S.setPropertyValue(p,"visibility",o.visibility)),($.queue(p)[1]===i||!/\.velocityQueueEntryFlag/i.test($.queue(p)[1]))&&n(p)){n(p).isAnimating=!1,n(p).rootPropertyValueCache={};var g=!1;$.each(n(p).transformCache,function(e,t){var r=/^scale/.test(e)?1:0;new RegExp("^\\("+r+"[^.]").test(t)&&(g=!0,delete n(p).transformCache[e])}),o.mobileHA&&(g=!0,delete n(p).transformCache.translate3d),g&&S.flushTransformCache(p),S.Values.removeClass(p,"velocity-animating")}if(!t&&o.complete&&!o.loop&&u===c-1)try{o.complete.call(a,a)}catch(d){setTimeout(function(){throw d},1)}s&&o.loop!==!0&&s(a),o.loop!==!0||t||v.animate(p,"reverse",{loop:!0,delay:o.delay}),o.queue!==!1&&$.dequeue(p,o.queue)}v.State.calls[e]=!1;for(var f=0,h=v.State.calls.length;h>f;f++)if(v.State.calls[f]!==!1){l=!0;break}l===!1&&(v.State.isTicking=!1,delete v.State.calls,v.State.calls=[])}var p="velocity",g=400,d="swing",f=function(){if(a.documentMode)return a.documentMode;for(var e=7;e>4;e--){var t=a.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e}return i}(),h=function(){var e=0;return r.webkitRequestAnimationFrame||r.mozRequestAnimationFrame||function(t){var r=(new Date).getTime(),a;return a=Math.max(0,16-(r-e)),e=r+a,setTimeout(function(){t(r+a)},a)}}(),m=r.requestAnimationFrame||h,y={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==i&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||r.Zepto&&r.Zepto.zepto.isZ(e))},isSVG:function(e){return r.SVGElement&&e instanceof SVGElement},isEmptyObject:function(e){var t;for(t in e)return!1;return!0}},$;if(e&&e.fn?$=e:r.Velocity&&r.Velocity.Utilities&&($=r.Velocity.Utilities),!$)throw new Error("Velocity: Either jQuery or Velocity's jQuery shim must first be loaded.");if(t.Velocity!==i&&t.Velocity.Utilities==i)throw new Error("Velocity: Namespace is occupied.");if(7>=f){if(e)return void(e.fn.velocity=e.fn.animate);throw new Error("Velocity: For IE<=7, Velocity falls back to jQuery, which must first be loaded.")}if(8===f&&!e)throw new Error("Velocity: For IE8, Velocity requires jQuery proper to be loaded; Velocity's jQuery shim does not work with IE8.");var v={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:r.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:a.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:$,Sequences:{},Easings:{},Promise:r.Promise,defaults:{queue:"",duration:g,easing:d,begin:null,complete:null,progress:null,display:null,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(e){$.data(e,p,{isSVG:y.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},animate:function(){},hook:function(e,t,r){var a=i;return y.isWrapped(e)&&(e=[].slice.call(e)),$.each(y.isNode(e)?[e]:e,function(e,o){if(n(o)===i&&v.init(o),r===i)a===i&&(a=v.CSS.getPropertyValue(o,t));else{var s=v.CSS.setPropertyValue(o,t,r);"transform"===s[0]&&v.CSS.flushTransformCache(o),a=s}}),a},mock:!1,version:{major:0,minor:11,patch:0},debug:!1};r.pageYOffset!==i?(v.State.scrollAnchor=r,v.State.scrollPropertyLeft="pageXOffset",v.State.scrollPropertyTop="pageYOffset"):(v.State.scrollAnchor=a.documentElement||a.body.parentNode||a.body,v.State.scrollPropertyLeft="scrollLeft",v.State.scrollPropertyTop="scrollTop"),v.State.isMobile||a.hidden===i||a.addEventListener("visibilitychange",function(){a.hidden?(m=function(e){return setTimeout(function(){e(!0)},16)},u()):m=r.requestAnimationFrame||h});var x=function(){function e(e,t){return 1-3*t+3*e}function t(e,t){return 3*t-6*e}function r(e){return 3*e}function a(a,i,o){return((e(i,o)*a+t(i,o))*a+r(i))*a}function i(a,i,o){return 3*e(i,o)*a*a+2*t(i,o)*a+r(i)}return function(e,t,r,o){function n(t){for(var o=t,n=0;8>n;++n){var s=i(o,e,r);if(0===s)return o;var l=a(o,e,r)-t;o-=l/s}return o}if(4!==arguments.length)return!1;for(var s=0;4>s;++s)if("number"!=typeof arguments[s]||isNaN(arguments[s])||!isFinite(arguments[s]))return!1;return e=Math.min(e,1),r=Math.min(r,1),e=Math.max(e,0),r=Math.max(r,0),function(i){return e===t&&r===o?i:a(n(i),t,o)}}}(),b=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,r,a){var i={x:t.x+a.dx*r,v:t.v+a.dv*r,tension:t.tension,friction:t.friction};return{dx:i.v,dv:e(i)}}function r(r,a){var i={dx:r.v,dv:e(r)},o=t(r,.5*a,i),n=t(r,.5*a,o),s=t(r,a,n),l=1/6*(i.dx+2*(o.dx+n.dx)+s.dx),u=1/6*(i.dv+2*(o.dv+n.dv)+s.dv);return r.x=r.x+l*a,r.v=r.v+u*a,r}return function a(e,t,i){var o={x:-1,v:0,tension:null,friction:null},n=[0],s=0,l=1e-4,u=.016,c,p,g;for(e=parseFloat(e)||500,t=parseFloat(t)||20,i=i||null,o.tension=e,o.friction=t,c=null!==i,c?(s=a(e,t),p=s/i*u):p=u;;)if(g=r(g||o,p),n.push(1+g.x),s+=16,!(Math.abs(g.x)>l&&Math.abs(g.v)>l))break;return c?function(e){return n[e*(n.length-1)|0]}:s}}();!function(){v.Easings.linear=function(e){return e},v.Easings.swing=function(e){return.5-Math.cos(e*Math.PI)/2},v.Easings.spring=function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)},v.Easings.ease=x(.25,.1,.25,1),v.Easings["ease-in"]=x(.42,0,1,1),v.Easings["ease-out"]=x(0,0,.58,1),v.Easings["ease-in-out"]=x(.42,0,.58,1);var e={};$.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,r){e[r]=function(e){return Math.pow(e,t+2)}}),$.extend(e,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,r=4;e<((t=Math.pow(2,--r))-1)/11;);return 1/Math.pow(4,3-r)-7.5625*Math.pow((3*t-2)/22-e,2)}}),$.each(e,function(e,t){v.Easings["easeIn"+e]=t,v.Easings["easeOut"+e]=function(e){return 1-t(1-e)},v.Easings["easeInOut"+e]=function(e){return.5>e?t(2*e)/2:1-t(-2*e+2)/2}})}();var S=v.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<S.Lists.colors.length;e++)S.Hooks.templates[S.Lists.colors[e]]=["Red Green Blue Alpha","255 255 255 1"];var t,r,a;if(f)for(t in S.Hooks.templates){r=S.Hooks.templates[t],a=r[0].split(" ");var i=r[1].match(S.RegEx.valueSplit);"Color"===a[0]&&(a.push(a.shift()),i.push(i.shift()),S.Hooks.templates[t]=[a.join(" "),i.join(" ")])}for(t in S.Hooks.templates){r=S.Hooks.templates[t],a=r[0].split(" ");for(var e in a){var o=t+a[e],n=e;S.Hooks.registered[o]=[t,n]}}},getRoot:function(e){var t=S.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return S.RegEx.valueUnwrap.test(t)&&(t=t.match(S.Hooks.RegEx.valueUnwrap)[1]),S.Values.isCSSNullValue(t)&&(t=S.Hooks.templates[e][1]),t},extractValue:function(e,t){var r=S.Hooks.registered[e];if(r){var a=r[0],i=r[1];return t=S.Hooks.cleanRootPropertyValue(a,t),t.toString().match(S.RegEx.valueSplit)[i]}return t},injectValue:function(e,t,r){var a=S.Hooks.registered[e];if(a){var i=a[0],o=a[1],n,s;return r=S.Hooks.cleanRootPropertyValue(i,r),n=r.toString().match(S.RegEx.valueSplit),n[o]=t,s=n.join(" ")}return r}},Normalizations:{registered:{clip:function(e,t,r){switch(e){case"name":return"clip";case"extract":var a;return S.RegEx.wrappedValueAlreadyExtracted.test(r)?a=r:(a=r.toString().match(S.RegEx.valueUnwrap),a=a?a[1].replace(/,(\s+)?/g," "):r),a;case"inject":return"rect("+r+")"}},opacity:function(e,t,r){if(8>=f)switch(e){case"name":return"filter";case"extract":var a=r.toString().match(/alpha\(opacity=(.*)\)/i);return r=a?a[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(r)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(r),10)+")"}else switch(e){case"name":return"opacity";case"extract":return r;case"inject":return r}}},register:function(){9>=f||v.State.isGingerbread||(S.Lists.transformsBase=S.Lists.transformsBase.concat(S.Lists.transforms3D));for(var e=0;e<S.Lists.transformsBase.length;e++)!function(){var t=S.Lists.transformsBase[e];S.Normalizations.registered[t]=function(e,r,a){switch(e){case"name":return"transform";case"extract":return n(r)===i||n(r).transformCache[t]===i?/^scale/i.test(t)?1:0:n(r).transformCache[t].replace(/[()]/g,"");case"inject":var o=!1;switch(t.substr(0,t.length-1)){case"translate":o=!/(%|px|em|rem|vw|vh|\d)$/i.test(a);break;case"scal":case"scale":v.State.isAndroid&&n(r).transformCache[t]===i&&1>a&&(a=1),o=!/(\d)$/i.test(a);break;case"skew":o=!/(deg|\d)$/i.test(a);break;case"rotate":o=!/(deg|\d)$/i.test(a)}return o||(n(r).transformCache[t]="("+a+")"),n(r).transformCache[t]}}}();for(var e=0;e<S.Lists.colors.length;e++)!function(){var t=S.Lists.colors[e];S.Normalizations.registered[t]=function(e,r,a){switch(e){case"name":return t;case"extract":var o;if(S.RegEx.wrappedValueAlreadyExtracted.test(a))o=a;else{var n,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(a)?n=s[a]!==i?s[a]:s.black:S.RegEx.isHex.test(a)?n="rgb("+S.Values.hexToRgb(a).join(" ")+")":/^rgba?\(/i.test(a)||(n=s.black),o=(n||a).toString().match(S.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=f||3!==o.split(" ").length||(o+=" 1"),o;case"inject":return 8>=f?4===a.split(" ").length&&(a=a.split(/\s+/).slice(0,3).join(" ")):3===a.split(" ").length&&(a+=" 1"),(8>=f?"rgb":"rgba")+"("+a.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(f||v.State.isAndroid&&!v.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(v.State.prefixMatches[e])return[v.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],r=0,a=t.length;a>r;r++){var i;if(i=0===r?e:t[r]+e.replace(/^\w/,function(e){return e.toUpperCase()}),y.isString(v.State.prefixElement.style[i]))return v.State.prefixMatches[e]=i,[i,!0]}return[e,!1]}},Values:{hexToRgb:function(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,a;return e=e.replace(t,function(e,t,r,a){return t+t+r+r+a+a}),a=r.exec(e),a?[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,t,a,o){function s(e,t){function a(){u&&S.setPropertyValue(e,"display","none")}var l=0;if(8>=f)l=$.css(e,t);else{var u=!1;if(/^(width|height)$/.test(t)&&0===S.getPropertyValue(e,"display")&&(u=!0,S.setPropertyValue(e,"display",S.Values.getDisplayType(e))),!o){if("height"===t&&"border-box"!==S.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(S.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(S.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(S.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(S.getPropertyValue(e,"paddingBottom"))||0);return a(),c}if("width"===t&&"border-box"!==S.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var p=e.offsetWidth-(parseFloat(S.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(S.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(S.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(S.getPropertyValue(e,"paddingRight"))||0);return a(),p}}var g;g=n(e)===i?r.getComputedStyle(e,null):n(e).computedStyle?n(e).computedStyle:n(e).computedStyle=r.getComputedStyle(e,null),(f||v.State.isFirefox)&&"borderColor"===t&&(t="borderTopColor"),l=9===f&&"filter"===t?g.getPropertyValue(t):g[t],(""===l||null===l)&&(l=e.style[t]),a()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(t)){var d=s(e,"position");("fixed"===d||"absolute"===d&&/top|left/i.test(t))&&(l=$(e).position()[t]+"px")}return l}var l;if(S.Hooks.registered[t]){var u=t,c=S.Hooks.getRoot(u);a===i&&(a=S.getPropertyValue(e,S.Names.prefixCheck(c)[0])),S.Normalizations.registered[c]&&(a=S.Normalizations.registered[c]("extract",e,a)),l=S.Hooks.extractValue(u,a)}else if(S.Normalizations.registered[t]){var p,g;p=S.Normalizations.registered[t]("name",e),"transform"!==p&&(g=s(e,S.Names.prefixCheck(p)[0]),S.Values.isCSSNullValue(g)&&S.Hooks.templates[t]&&(g=S.Hooks.templates[t][1])),l=S.Normalizations.registered[t]("extract",e,g)}return/^[\d-]/.test(l)||(l=n(e)&&n(e).isSVG&&S.Names.SVGAttribute(t)?/^(height|width)$/i.test(t)?e.getBBox()[t]:e.getAttribute(t):s(e,S.Names.prefixCheck(t)[0])),S.Values.isCSSNullValue(l)&&(l=0),v.debug>=2&&console.log("Get "+t+": "+l),l},setPropertyValue:function(e,t,a,i,o){var s=t;if("scroll"===t)o.container?o.container["scroll"+o.direction]=a:"Left"===o.direction?r.scrollTo(a,o.alternateValue):r.scrollTo(o.alternateValue,a);else if(S.Normalizations.registered[t]&&"transform"===S.Normalizations.registered[t]("name",e))S.Normalizations.registered[t]("inject",e,a),s="transform",a=n(e).transformCache[t];else{if(S.Hooks.registered[t]){var l=t,u=S.Hooks.getRoot(t);i=i||S.getPropertyValue(e,u),a=S.Hooks.injectValue(l,a,i),t=u}if(S.Normalizations.registered[t]&&(a=S.Normalizations.registered[t]("inject",e,a),t=S.Normalizations.registered[t]("name",e)),s=S.Names.prefixCheck(t)[0],8>=f)try{e.style[s]=a}catch(c){v.debug&&console.log("Browser does not support ["+a+"] for ["+s+"]")}else n(e)&&n(e).isSVG&&S.Names.SVGAttribute(t)?e.setAttribute(t,a):e.style[s]=a;v.debug>=2&&console.log("Set "+t+" ("+s+"): "+a)}return[s,a]},flushTransformCache:function(e){function t(t){return parseFloat(S.getPropertyValue(e,t))}var r="";if((f||v.State.isAndroid&&!v.State.isChrome)&&n(e).isSVG){var a={translate:[t("translateX"),t("translateY")],skewX:[t("skewX")],skewY:[t("skewY")],scale:1!==t("scale")?[t("scale"),t("scale")]:[t("scaleX"),t("scaleY")],rotate:[t("rotateZ"),0,0]};$.each(n(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),a[e]&&(r+=e+"("+a[e].join(" ")+") ",delete a[e])})}else{var i,o;$.each(n(e).transformCache,function(t){return i=n(e).transformCache[t],"transformPerspective"===t?(o=i,!0):(9===f&&"rotateZ"===t&&(t="rotate"),void(r+=t+i+" "))}),o&&(r="perspective"+o+" "+r)}S.setPropertyValue(e,"transform",r)}};S.Hooks.register(),S.Normalizations.register(),v.animate=function(){function e(){return p?T.promise||null:d}function t(){function e(e){function p(e,r){var a=i,o=i,n=i;return y.isArray(e)?(a=e[0],!y.isArray(e[1])&&/^[\d-]/.test(e[1])||y.isFunction(e[1])||S.RegEx.isHex.test(e[1])?n=e[1]:(y.isString(e[1])&&!S.RegEx.isHex.test(e[1])||y.isArray(e[1]))&&(o=r?e[1]:l(e[1],s.duration),e[2]!==i&&(n=e[2]))):a=e,r||(o=o||s.easing),y.isFunction(a)&&(a=a.call(t,P,V)),y.isFunction(n)&&(n=n.call(t,P,V)),[a||0,o,n]}function g(e,t){var r,a;return a=(t||0).toString().toLowerCase().replace(/[%A-z]+$/,function(e){return r=e,""}),r||(r=S.Values.getUnitType(e)),[a,r]}function d(){var e={parent:t.parentNode,position:S.getPropertyValue(t,"position"),fontSize:S.getPropertyValue(t,"fontSize")},i=e.position===N.lastPosition&&e.parent===N.lastParent,o=e.fontSize===N.lastFontSize&&e.parent===N.lastParent;N.lastParent=e.parent,N.lastPosition=e.position,N.lastFontSize=e.fontSize,null===N.remToPx&&(N.remToPx=parseFloat(S.getPropertyValue(a.body,"fontSize"))||16),null===N.vwToPx&&(N.vwToPx=parseFloat(r.innerWidth)/100,N.vhToPx=parseFloat(r.innerHeight)/100);var s={overflowX:null,overflowY:null,boxSizing:null,width:null,minWidth:null,maxWidth:null,height:null,minHeight:null,maxHeight:null,paddingLeft:null},l={},u=10;if(l.remToPx=N.remToPx,l.vwToPx=N.vwToPx,l.vhToPx=N.vhToPx,f&&!n(t).isSVG)var c=/^auto$/i.test(t.currentStyle.width),p=/^auto$/i.test(t.currentStyle.height);i&&o||(n(t).isSVG||(s.overflowX=S.getPropertyValue(t,"overflowX"),s.overflowY=S.getPropertyValue(t,"overflowY"),s.boxSizing=S.getPropertyValue(t,"boxSizing"),s.minWidth=S.getPropertyValue(t,"minWidth"),s.maxWidth=S.getPropertyValue(t,"maxWidth")||"none",s.minHeight=S.getPropertyValue(t,"minHeight"),s.maxHeight=S.getPropertyValue(t,"maxHeight")||"none",s.paddingLeft=S.getPropertyValue(t,"paddingLeft")),s.width=S.getPropertyValue(t,"width",null,!0),s.height=S.getPropertyValue(t,"height",null,!0)),i?(l.percentToPxRatioWidth=N.lastPercentToPxWidth,l.percentToPxRatioHeight=N.lastPercentToPxHeight):(n(t).isSVG||(S.setPropertyValue(t,"overflowX","hidden"),S.setPropertyValue(t,"overflowY","hidden"),S.setPropertyValue(t,"boxSizing","content-box"),S.setPropertyValue(t,"minWidth",u+"%"),S.setPropertyValue(t,"maxWidth",u+"%"),S.setPropertyValue(t,"minHeight",u+"%"),S.setPropertyValue(t,"maxHeight",u+"%")),S.setPropertyValue(t,"width",u+"%"),S.setPropertyValue(t,"height",u+"%")),o?l.emToPx=N.lastEmToPx:n(t).isSVG||S.setPropertyValue(t,"paddingLeft",u+"em"),i||(l.percentToPxRatioWidth=N.lastPercentToPxWidth=(parseFloat(S.getPropertyValue(t,"width",null,!0))||1)/u,l.percentToPxRatioHeight=N.lastPercentToPxHeight=(parseFloat(S.getPropertyValue(t,"height",null,!0))||1)/u),o||(l.emToPx=N.lastEmToPx=(parseFloat(S.getPropertyValue(t,"paddingLeft"))||1)/u);for(var g in s)null!==s[g]&&S.setPropertyValue(t,g,s[g]);return n(t).isSVG||(f?(c&&S.setPropertyValue(t,"width","auto"),p&&S.setPropertyValue(t,"height","auto")):(S.setPropertyValue(t,"height","auto"),s.height!==S.getPropertyValue(t,"height",null,!0)&&S.setPropertyValue(t,"height",s.height),S.setPropertyValue(t,"width","auto"),s.width!==S.getPropertyValue(t,"width",null,!0)&&S.setPropertyValue(t,"width",s.width))),v.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),t),l}if(s.begin&&0===P)try{s.begin.call(m,m)}catch(h){setTimeout(function(){throw h},1)}if("scroll"===k){var w=/^x$/i.test(s.axis)?"Left":"Top",C=parseFloat(s.offset)||0,E,F,H;s.container?y.isWrapped(s.container)||y.isNode(s.container)?(s.container=s.container[0]||s.container,E=s.container["scroll"+w],H=E+$(t).position()[w.toLowerCase()]+C):s.container=null:(E=v.State.scrollAnchor[v.State["scrollProperty"+w]],F=v.State.scrollAnchor[v.State["scrollProperty"+("Left"===w?"Top":"Left")]],H=$(t).offset()[w.toLowerCase()]+C),c={scroll:{rootPropertyValue:!1,startValue:E,currentValue:E,endValue:H,unitType:"",easing:s.easing,scrollData:{container:s.container,direction:w,alternateValue:F}},element:t},v.debug&&console.log("tweensContainer (scroll): ",c.scroll,t)}else if("reverse"===k){if(!n(t).tweensContainer)return void $.dequeue(t,s.queue);"none"===n(t).opts.display&&(n(t).opts.display="block"),"hidden"===n(t).opts.visibility&&(n(t).opts.visibility="visible"),n(t).opts.loop=!1,n(t).opts.begin=null,n(t).opts.complete=null,b.easing||delete s.easing,b.duration||delete s.duration,s=$.extend({},n(t).opts,s);var A=$.extend(!0,{},n(t).tweensContainer);for(var L in A)if("element"!==L){var R=A[L].startValue;A[L].startValue=A[L].currentValue=A[L].endValue,A[L].endValue=R,y.isEmptyObject(b)||(A[L].easing=s.easing),v.debug&&console.log("reverse tweensContainer ("+L+"): "+JSON.stringify(A[L]),t)}c=A}else if("start"===k){var A;n(t).tweensContainer&&n(t).isAnimating===!0&&(A=n(t).tweensContainer),$.each(x,function(e,t){if(RegExp("^"+S.Lists.colors.join("$|^")+"$").test(e)){var r=p(t,!0),a=r[0],o=r[1],n=r[2];if(S.RegEx.isHex.test(a)){for(var s=["Red","Green","Blue"],l=S.Values.hexToRgb(a),u=n?S.Values.hexToRgb(n):i,c=0;c<s.length;c++)x[e+s[c]]=[l[c],o,u?u[c]:u];delete x[e]}}});for(var z in x){var M=p(x[z]),q=M[0],W=M[1],G=M[2];z=S.Names.camelCase(z);var X=S.Hooks.getRoot(z),Y=!1;if(n(t).isSVG||S.Names.prefixCheck(X)[1]!==!1||S.Normalizations.registered[X]!==i){(s.display&&"none"!==s.display||s.visibility&&"hidden"!==s.visibility)&&/opacity|filter/.test(z)&&!G&&0!==q&&(G=0),s._cacheValues&&A&&A[z]?(G===i&&(G=A[z].endValue+A[z].unitType),Y=n(t).rootPropertyValueCache[X]):S.Hooks.registered[z]?G===i?(Y=S.getPropertyValue(t,X),G=S.getPropertyValue(t,z,Y)):Y=S.Hooks.templates[X][1]:G===i&&(G=S.getPropertyValue(t,z));var B,O,I,U=!1;B=g(z,G),G=B[0],I=B[1],B=g(z,q),q=B[0].replace(/^([+-\/*])=/,function(e,t){return U=t,""}),O=B[1],G=parseFloat(G)||0,q=parseFloat(q)||0;var D;if("%"===O&&(/^(fontSize|lineHeight)$/.test(z)?(q/=100,O="em"):/^scale/.test(z)?(q/=100,O=""):/(Red|Green|Blue)$/i.test(z)&&(q=q/100*255,O="")),/[\/*]/.test(U))O=I;else if(I!==O&&0!==G)if(0===q)O=I;else{D=D||d();var Q=/margin|padding|left|right|width|text|word|letter/i.test(z)||/X$/.test(z)?"x":"y";switch(I){case"%":G*="x"===Q?D.percentToPxRatioWidth:D.percentToPxRatioHeight;break;case"px":break;default:G*=D[I+"ToPx"]}switch(O){case"%":G*=1/("x"===Q?D.percentToPxRatioWidth:D.percentToPxRatioHeight);break;case"px":break;default:G*=1/D[O+"ToPx"]}}switch(U){case"+":q=G+q;break;case"-":q=G-q;break;case"*":q=G*q;break;case"/":q=G/q}c[z]={rootPropertyValue:Y,startValue:G,currentValue:G,endValue:q,unitType:O,easing:W},v.debug&&console.log("tweensContainer ("+z+"): "+JSON.stringify(c[z]),t)}else v.debug&&console.log("Skipping ["+X+"] due to a lack of browser support.")}c.element=t}c.element&&(S.Values.addClass(t,"velocity-animating"),j.push(c),n(t).tweensContainer=c,n(t).opts=s,n(t).isAnimating=!0,P===V-1?(v.State.calls.length>1e4&&(v.State.calls=o(v.State.calls)),v.State.calls.push([j,m,s,null,T.resolver]),v.State.isTicking===!1&&(v.State.isTicking=!0,u())):P++)}var t=this,s=$.extend({},v.defaults,b),c={};if(n(t)===i&&v.init(t),parseFloat(s.delay)&&s.queue!==!1&&$.queue(t,s.queue,function(e){v.velocityQueueEntryFlag=!0,n(t).delayTimer={setTimeout:setTimeout(e,parseFloat(s.delay)),next:e}}),v.mock===!0)s.duration=1;else switch(s.duration.toString().toLowerCase()){case"fast":s.duration=200;break;case"normal":s.duration=g;break;case"slow":s.duration=600;break;default:s.duration=parseFloat(s.duration)||1}s.easing=l(s.easing,s.duration),s.begin&&!y.isFunction(s.begin)&&(s.begin=null),s.progress&&!y.isFunction(s.progress)&&(s.progress=null),s.complete&&!y.isFunction(s.complete)&&(s.complete=null),s.display&&(s.display=s.display.toString().toLowerCase(),"auto"===s.display&&(s.display=v.CSS.Values.getDisplayType(t))),s.visibility&&(s.visibility=s.visibility.toString().toLowerCase()),s.mobileHA=s.mobileHA&&v.State.isMobile&&!v.State.isGingerbread,s.queue===!1?s.delay?setTimeout(e,s.delay):e():$.queue(t,s.queue,function(t,r){return r===!0?(T.promise&&T.resolver(m),!0):(v.velocityQueueEntryFlag=!0,void e(t))}),""!==s.queue&&"fx"!==s.queue||"inprogress"===$.queue(t)[0]||$.dequeue(t)}var s=arguments[0]&&($.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||y.isString(arguments[0].properties)),p,d,h,m,x,b;if(y.isWrapped(this)?(p=!1,h=0,m=this,d=this):(p=!0,h=1,m=s?arguments[0].elements:arguments[0]),m=y.isWrapped(m)?[].slice.call(m):m){s?(x=arguments[0].properties,b=arguments[0].options):(x=arguments[h],b=arguments[h+1]);var V=y.isArray(m)||y.isNodeList(m)?m.length:1,P=0;if("stop"!==x&&!$.isPlainObject(b)){var w=h+1;b={};for(var C=w;C<arguments.length;C++)!y.isArray(arguments[C])&&/^\d/.test(arguments[C])?b.duration=parseFloat(arguments[C]):y.isString(arguments[C])||y.isArray(arguments[C])?b.easing=arguments[C]:y.isFunction(arguments[C])&&(b.complete=arguments[C])}var T={promise:null,resolver:null,rejecter:null};p&&v.Promise&&(T.promise=new v.Promise(function(e,t){T.resolver=e,T.rejecter=t}));var k;switch(x){case"scroll":k="scroll";break;case"reverse":k="reverse";break;case"stop":$.each(y.isNode(m)?[m]:m,function(e,t){n(t)&&n(t).delayTimer&&(clearTimeout(n(t).delayTimer.setTimeout),n(t).delayTimer.next&&n(t).delayTimer.next(),delete n(t).delayTimer)});var E=[];return $.each(v.State.calls,function(e,t){t&&$.each(y.isNode(t[1])?[t[1]]:t[1],function(t,r){$.each(y.isNode(m)?[m]:m,function(t,a){if(a===r){if(n(a)&&$.each(n(a).tweensContainer,function(e,t){t.endValue=t.currentValue}),b===!0||y.isString(b)){var i=y.isString(b)?b:"";$.each($.queue(a,i),function(e,t){y.isFunction(t)&&t(null,!0)}),$.queue(a,i,[])}E.push(e)}})})}),$.each(E,function(e,t){c(t,!0)}),T.promise&&T.resolver(m),e();default:if(!$.isPlainObject(x)||y.isEmptyObject(x)){if(y.isString(x)&&v.Sequences[x]){var F=b.duration,H=b.delay||0;return b.backwards===!0&&(m=(y.isWrapped(m)?[].slice.call(m):m).reverse()),$.each(m,function(e,t){parseFloat(b.stagger)?b.delay=H+parseFloat(b.stagger)*e:y.isFunction(b.stagger)&&(b.delay=H+b.stagger.call(t,e,V)),b.drag&&(b.duration=parseFloat(F)||(/^(callout|transition)/.test(x)?1e3:g),b.duration=Math.max(b.duration*(b.backwards?1-e/V:(e+1)/V),.75*b.duration,200)),v.Sequences[x].call(t,t,b||{},e,V,m,T.promise?T:i)}),e()}var A="Velocity: First argument ("+x+") was not a property map, a known action, or a registered sequence. Aborting.";return T.promise?T.rejecter(new Error(A)):console.log(A),e()}k="start"}var N={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},j=[];$.each(y.isNode(m)?[m]:m,function(e,r){y.isNode(r)&&t.call(r)});var L=$.extend({},v.defaults,b),R;if(L.loop=parseInt(L.loop),R=2*L.loop-1,L.loop)for(var z=0;R>z;z++){var M={delay:L.delay};z===R-1&&(M.display=L.display,M.visibility=L.visibility,M.complete=L.complete),v.animate(m,"reverse",M)}return e()}};var V;return e&&e.fn?V=e:r.Zepto&&(V=r.Zepto),(V||r).Velocity=v,V&&(V.fn.velocity=v.animate,V.fn.velocity.defaults=v.defaults),$.each(["Down","Up"],function(e,t){v.Sequences["slide"+t]=function(e,r,a,i,o,n){var s=$.extend({},r),l={height:null,marginTop:null,marginBottom:null,paddingTop:null,paddingBottom:null,overflow:null,overflowX:null,overflowY:null},u=s.begin,c=s.complete,p=!1;null!==s.display&&(s.display="Down"===t?s.display||"auto":s.display||"none"),s.begin=function(){function r(){l.height=parseFloat(v.CSS.getPropertyValue(e,"height")),e.style.height="auto",parseFloat(v.CSS.getPropertyValue(e,"height"))===l.height&&(p=!0),v.CSS.setPropertyValue(e,"height",l.height+"px")}if("Down"===t){l.overflow=[v.CSS.getPropertyValue(e,"overflow"),0],l.overflowX=[v.CSS.getPropertyValue(e,"overflowX"),0],l.overflowY=[v.CSS.getPropertyValue(e,"overflowY"),0],e.style.overflow="hidden",e.style.overflowX="visible",e.style.overflowY="hidden",r();for(var a in l)if(!/^overflow/.test(a)){var i=v.CSS.getPropertyValue(e,a);"height"===a&&(i=parseFloat(i)),l[a]=[i,0]}}else{r();for(var a in l){var i=v.CSS.getPropertyValue(e,a);"height"===a&&(i=parseFloat(i)),l[a]=[0,i]}e.style.overflow="hidden",e.style.overflowX="visible",e.style.overflowY="hidden"}u&&u.call(e,e)},s.complete=function(e){var r="Down"===t?0:1;p===!0?l.height[r]="auto":l.height[r]+="px";for(var a in l)e.style[a]=l[a][r];c&&c.call(e,e),n&&n.resolver(o||e)},v.animate(e,l,s)}}),$.each(["In","Out"],function(e,t){v.Sequences["fade"+t]=function(e,r,a,i,o,n){var s=$.extend({},r),l={opacity:"In"===t?1:0};if(a!==i-1)s.complete=s.begin=null;else{var u=s.complete;s.complete=function(){u&&u.call(e,e),n&&n.resolver(o||e)}}null!==s.display&&(s.display=s.display||("In"===t?"auto":"none")),v.animate(this,l,s)}}),v}(e||window,window,document)});