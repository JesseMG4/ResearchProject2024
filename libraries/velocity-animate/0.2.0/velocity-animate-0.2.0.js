/**
 * Minified by jsDelivr using UglifyJS v3.1.10.
 * Original file: /npm/velocity-animate@0.2.0/jquery.velocity.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(e,t,r,a){function o(e,t){var r=e;return g.isString(e)?h.Easings[e]||(r=!1):r=g.isArray(e)&&1===e.length?function(e){return function(t){return Math.round(t*e)*(1/e)}}.apply(null,e):g.isArray(e)&&2===e.length?m.apply(null,e.concat([t])):!(!g.isArray(e)||4!==e.length)&&y.apply(null,e),!1===r&&(r=h.Easings[h.defaults.easing]?h.defaults.easing:u),r}function n(e){if(e)for(var t=(new Date).getTime(),r=0,o=h.State.calls.length;r<o;r++)if(h.State.calls[r]){var l=h.State.calls[r],s=l[0],u=l[2],c=l[3];c||(c=h.State.calls[r][3]=t-16);for(var d=Math.min((t-c)/u.duration,1),y=0,m=s.length;y<m;y++){var b=s[y],x=b.element;if(f(x)){var P=!1;u.display&&"none"!==u.display&&v.setPropertyValue(x,"display",u.display);for(var S in b)if("element"!==S){var V,w=b[S],C=g.isString(w.easing)?h.Easings[w.easing]:w.easing;if(V=1===d?w.endValue:w.startValue+(w.endValue-w.startValue)*C(d),w.currentValue=V,v.Hooks.registered[S]){var k=v.Hooks.getRoot(S),T=f(x).rootPropertyValueCache[k];T&&(w.rootPropertyValue=T)}var A=v.setPropertyValue(x,S,w.currentValue+(0===parseFloat(V)?"":w.unitType),w.rootPropertyValue,w.scrollData);v.Hooks.registered[S]&&(v.Normalizations.registered[k]?f(x).rootPropertyValueCache[k]=v.Normalizations.registered[k]("extract",null,A[1]):f(x).rootPropertyValueCache[k]=A[1]),"transform"===A[0]&&(P=!0)}u.mobileHA&&f(x).transformCache.translate3d===a&&(f(x).transformCache.translate3d="(0px, 0px, 0px)",P=!0),P&&v.flushTransformCache(x)}}u.display&&"none"!==u.display&&(h.State.calls[r][2].display=!1),u.progress&&u.progress.call(l[1],l[1],d,Math.max(0,c+u.duration-t),c),1===d&&i(r)}h.State.isTicking&&p(n)}function i(e,t){if(!h.State.calls[e])return!1;for(var r=h.State.calls[e][0],o=h.State.calls[e][1],n=h.State.calls[e][2],i=!1,l=0,s=r.length;l<s;l++){var u=r[l].element;if(t||"none"!==n.display||n.loop||v.setPropertyValue(u,"display",n.display),(d.queue(u)[1]===a||!/\.velocityQueueEntryFlag/i.test(d.queue(u)[1]))&&f(u)){f(u).isAnimating=!1,f(u).rootPropertyValueCache={};var c,p=["transformPerspective","translateZ","rotateX","rotateY"],g=!1;for(var y in p)c=p[y],/^\(0[^.]/.test(f(u).transformCache[c])&&(g=!0,delete f(u).transformCache[c]);n.mobileHA&&(g=!0,delete f(u).transformCache.translate3d),g&&v.flushTransformCache(u)}t||!n.complete||n.loop||l!==s-1||n.complete.call(o,o),!1!==n.queue&&d.dequeue(u,n.queue)}h.State.calls[e]=!1;for(var m=0,b=h.State.calls.length;m<b;m++)if(!1!==h.State.calls[m]){i=!0;break}!1===i&&(h.State.isTicking=!1,delete h.State.calls,h.State.calls=[])}var l="velocity",s=400,u="swing",c=function(){if(r.documentMode)return r.documentMode;for(var e=7;e>4;e--){var t=r.createElement("div");if(t.innerHTML="\x3c!--[if IE "+e+"]><span></span><![endif]--\x3e",t.getElementsByTagName("span").length)return t=null,e}return a}(),p=t.requestAnimationFrame||function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var r,a=(new Date).getTime();return r=Math.max(0,16-(a-e)),e=a+r,setTimeout(function(){t(a+r)},r)}}(),g={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==a&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||t.Zepto&&t.Zepto.zepto.isZ(e))}},d=t.jQuery||e.Velocity&&e.Velocity.Utilities;if(!d)throw new Error("Velocity: Either jQuery or Velocity's jQuery shim must first be loaded.");if(e.Velocity!==a&&!e.Velocity.Utilities)throw new Error("Velocity: Namespace is occupied.");if(c<=7){if(t.jQuery)return void(t.jQuery.fn.velocity=t.jQuery.fn.animate);throw new Error("Velocity: For IE<=7, Velocity falls back to jQuery, which must first be loaded.")}if(8===c&&!t.jQuery)throw new Error("Velocity: For IE8, Velocity requires jQuery to be loaded. (Velocity's jQuery shim does not work with IE8.)");var f=function(e){return d.data(e,l)},h=e.Velocity=e.velocity={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),prefixElement:r.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:t.jQuery?{}:d,Sequences:{},Easings:{},defaults:{queue:"",duration:s,easing:u,begin:null,complete:null,progress:null,display:null,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},animate:function(){},mock:!1,debug:!1};t.pageYOffset!==a?(h.State.scrollAnchor=t,h.State.scrollPropertyLeft="pageXOffset",h.State.scrollPropertyTop="pageYOffset"):(h.State.scrollAnchor=r.documentElement||r.body.parentNode||r.body,h.State.scrollPropertyLeft="scrollLeft",h.State.scrollPropertyTop="scrollTop");var y=function(){function e(e,t){return 1-3*t+3*e}function t(e,t){return 3*t-6*e}function r(e){return 3*e}function a(a,o,n){return((e(o,n)*a+t(o,n))*a+r(o))*a}function o(a,o,n){return 3*e(o,n)*a*a+2*t(o,n)*a+r(o)}return function(e,t,r,n){if(4!==arguments.length)return!1;for(var i=0;i<4;++i)if("number"!=typeof arguments[i]||isNaN(arguments[i])||!isFinite(arguments[i]))return!1;return e=Math.min(e,1),r=Math.min(r,1),e=Math.max(e,0),r=Math.max(r,0),function(i){return e===t&&r===n?i:a(function(t){for(var n=t,i=0;i<8;++i){var l=o(n,e,r);if(0===l)return n;n-=(a(n,e,r)-t)/l}return n}(i),t,n)}}}(),m=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,r,a){var o={x:t.x+a.dx*r,v:t.v+a.dv*r,tension:t.tension,friction:t.friction};return{dx:o.v,dv:e(o)}}function r(r,a){var o={dx:r.v,dv:e(r)},n=t(r,.5*a,o),i=t(r,.5*a,n),l=t(r,a,i),s=1/6*(o.dx+2*(n.dx+i.dx)+l.dx),u=1/6*(o.dv+2*(n.dv+i.dv)+l.dv);return r.x=r.x+s*a,r.v=r.v+u*a,r}return function e(t,a,o){var n,i,l,s={x:-1,v:0,tension:null,friction:null},u=[0],c=0;for(t=parseFloat(t)||600,a=parseFloat(a)||20,o=o||null,s.tension=t,s.friction=a,i=(n=null!==o)?(c=e(t,a))/o*.016:.016;;)if(l=r(l||s,i),u.push(1+l.x),c+=16,!(Math.abs(l.x)>1e-4&&Math.abs(l.v)>1e-4))break;return n?function(e){return u[e*(u.length-1)|0]}:c}}();!function(){h.Easings.linear=function(e){return e},h.Easings.swing=function(e){return.5-Math.cos(e*Math.PI)/2},h.Easings.ease=y(.25,.1,.25,1),h.Easings["ease-in"]=y(.42,0,1,1),h.Easings["ease-out"]=y(0,0,.58,1),h.Easings["ease-in-out"]=y(.42,0,.58,1);var e={};d.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,r){e[r]=function(e){return Math.pow(e,t+2)}}),d.extend(e,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,r=4;e<((t=Math.pow(2,--r))-1)/11;);return 1/Math.pow(4,3-r)-7.5625*Math.pow((3*t-2)/22-e,2)}}),d.each(e,function(e,t){h.Easings["easeIn"+e]=t,h.Easings["easeOut"+e]=function(e){return 1-t(1-e)},h.Easings["easeInOut"+e]=function(e){return e<.5?t(2*e)/2:1-t(-2*e+2)/2}}),h.Easings.spring=function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}}();var v=h.CSS={RegEx:{valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Hooks:{templates:{color:["Red Green Blue Alpha","255 255 255 1"],backgroundColor:["Red Green Blue Alpha","255 255 255 1"],borderColor:["Red Green Blue Alpha","255 255 255 1"],borderTopColor:["Red Green Blue Alpha","255 255 255 1"],borderRightColor:["Red Green Blue Alpha","255 255 255 1"],borderBottomColor:["Red Green Blue Alpha","255 255 255 1"],borderLeftColor:["Red Green Blue Alpha","255 255 255 1"],outlineColor:["Red Green Blue Alpha","255 255 255 1"],textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0%"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){var e,t,r;if(c)for(e in v.Hooks.templates){r=(t=v.Hooks.templates[e])[0].split(" ");var a=t[1].match(v.RegEx.valueSplit);"Color"===r[0]&&(r.push(r.shift()),a.push(a.shift()),v.Hooks.templates[e]=[r.join(" "),a.join(" ")])}for(e in v.Hooks.templates){r=(t=v.Hooks.templates[e])[0].split(" ");for(var o in r){var n=e+r[o],i=o;v.Hooks.registered[n]=[e,i]}}},getRoot:function(e){var t=v.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return v.RegEx.valueUnwrap.test(t)&&(t=t.match(v.Hooks.RegEx.valueUnwrap)[1]),v.Values.isCSSNullValue(t)&&(t=v.Hooks.templates[e][1]),t},extractValue:function(e,t){var r=v.Hooks.registered[e];if(r){var a=r[0],o=r[1];return(t=v.Hooks.cleanRootPropertyValue(a,t)).toString().match(v.RegEx.valueSplit)[o]}return t},injectValue:function(e,t,r){var a=v.Hooks.registered[e];if(a){var o,n=a[0],i=a[1];return r=v.Hooks.cleanRootPropertyValue(n,r),o=r.toString().match(v.RegEx.valueSplit),o[i]=t,o.join(" ")}return r}},Normalizations:{registered:{clip:function(e,t,r){switch(e){case"name":return"clip";case"extract":var a;return a=v.RegEx.wrappedValueAlreadyExtracted.test(r)?r:(a=r.toString().match(v.RegEx.valueUnwrap))?a[1].replace(/,(\s+)?/g," "):r;case"inject":return"rect("+r+")"}},opacity:function(e,t,r){if(c<=8)switch(e){case"name":return"filter";case"extract":var a=r.toString().match(/alpha\(opacity=(.*)\)/i);return r=a?a[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(r)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(r),10)+")"}else switch(e){case"name":return"opacity";case"extract":case"inject":return r}}},register:function(){var e=["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"];c<=9||h.State.isGingerbread||(e=e.concat(["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]));for(var t=0,r=e.length;t<r;t++)!function(){var r=e[t];v.Normalizations.registered[r]=function(e,t,o){switch(e){case"name":return"transform";case"extract":return f(t).transformCache[r]===a?/^scale/i.test(r)?1:0:f(t).transformCache[r].replace(/[()]/g,"");case"inject":var n=!1;switch(r.substr(0,r.length-1)){case"translate":n=!/(%|px|em|rem|\d)$/i.test(o);break;case"scal":case"scale":h.State.isAndroid&&f(t).transformCache[r]===a&&(o=1),n=!/(\d)$/i.test(o);break;case"skew":case"rotate":n=!/(deg|\d)$/i.test(o)}return n||(f(t).transformCache[r]="("+o+")"),f(t).transformCache[r]}}}();for(var o=["color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],t=0,n=o.length;t<n;t++)!function(){var e=o[t];v.Normalizations.registered[e]=function(t,r,o){switch(t){case"name":return e;case"extract":var n;if(v.RegEx.wrappedValueAlreadyExtracted.test(o))n=o;else{var i,l={aqua:"rgb(0, 255, 255);",black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",fuchsia:"rgb(255, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",lime:"rgb(0, 255, 0)",maroon:"rgb(128, 0, 0)",navy:"rgb(0, 0, 128)",olive:"rgb(128, 128, 0)",purple:"rgb(128, 0, 128)",red:"rgb(255, 0, 0)",silver:"rgb(192, 192, 192)",teal:"rgb(0, 128, 128)",white:"rgb(255, 255, 255)",yellow:"rgb(255, 255, 0)"};/^[A-z]+$/i.test(o)?i=l[o]!==a?l[o]:l.black:/^#([A-f\d]{3}){1,2}$/i.test(o)?i=function(e){var t;return e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,r,a){return t+t+r+r+a+a}),(t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e))?"rgb("+parseInt(t[1],16)+" "+parseInt(t[2],16)+" "+parseInt(t[3],16)+")":"rgb(0 0 0)"}(o):/^rgba?\(/i.test(o)||(i=l.black),n=(i||o).toString().match(v.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return c<=8||3!==n.split(" ").length||(n+=" 1"),n;case"inject":return c<=8?4===o.split(" ").length&&(o=o.split(/\s+/).slice(0,3).join(" ")):3===o.split(" ").length&&(o+=" 1"),(c<=8?"rgb":"rgba")+"("+o.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},prefixCheck:function(e){if(h.State.prefixMatches[e])return[h.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],r=0,a=t.length;r<a;r++){var o;if(o=0===r?e:t[r]+e.replace(/^\w/,function(e){return e.toUpperCase()}),g.isString(h.State.prefixElement.style[o]))return h.State.prefixMatches[e]=o,[o,!0]}return[e,!1]}},Values:{isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|opacity|alpha|fillOpacity|flexGrow|flexHeight|zIndex|fontWeight)$)|color/i.test(e)?"":"px"},getDisplayType:function(e){var t=e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":"block"}},getPropertyValue:function(e,r,o,n){function i(e,r){var o=0;if(c<=8)o=d.css(e,r);else{if(!n){if("height"===r&&"border-box"!==v.getPropertyValue(e,"boxSizing").toString().toLowerCase())return e.offsetHeight-(parseFloat(v.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(v.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(v.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(v.getPropertyValue(e,"paddingBottom"))||0);if("width"===r&&"border-box"!==v.getPropertyValue(e,"boxSizing").toString().toLowerCase())return e.offsetWidth-(parseFloat(v.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(v.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(v.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(v.getPropertyValue(e,"paddingRight"))||0)}var l;l=f(e)===a?t.getComputedStyle(e,null):f(e).computedStyle?f(e).computedStyle:f(e).computedStyle=t.getComputedStyle(e,null),c&&"borderColor"===r&&(r="borderTopColor"),""!==(o=9===c&&"filter"===r?l.getPropertyValue(r):l[r])&&null!==o||(o=e.style[r])}if("auto"===o&&/^(top|right|bottom|left)$/i.test(r)){var s=i(e,"position");("fixed"===s||"absolute"===s&&/top|left/i.test(r))&&(o=d(e).position()[r]+"px")}return o}var l;if(v.Hooks.registered[r]){var s=r,u=v.Hooks.getRoot(s);o===a&&(o=v.getPropertyValue(e,v.Names.prefixCheck(u)[0])),v.Normalizations.registered[u]&&(o=v.Normalizations.registered[u]("extract",e,o)),l=v.Hooks.extractValue(s,o)}else if(v.Normalizations.registered[r]){var p,g;"transform"!==(p=v.Normalizations.registered[r]("name",e))&&(g=i(e,v.Names.prefixCheck(p)[0]),v.Values.isCSSNullValue(g)&&v.Hooks.templates[r]&&(g=v.Hooks.templates[r][1])),l=v.Normalizations.registered[r]("extract",e,g)}return/^[\d-]/.test(l)||(l=i(e,v.Names.prefixCheck(r)[0])),v.Values.isCSSNullValue(l)&&(l=0),h.debug>=2&&console.log("Get "+r+": "+l),l},setPropertyValue:function(e,r,a,o,n){var i=r;if("scroll"===r)n.container?n.container["scroll"+n.direction]=a:"Left"===n.direction?t.scrollTo(a,n.alternateValue):t.scrollTo(n.alternateValue,a);else if(v.Normalizations.registered[r]&&"transform"===v.Normalizations.registered[r]("name",e))v.Normalizations.registered[r]("inject",e,a),i="transform",a=f(e).transformCache[r];else{if(v.Hooks.registered[r]){var l=r,s=v.Hooks.getRoot(r);o=o||v.getPropertyValue(e,s),a=v.Hooks.injectValue(l,a,o),r=s}if(v.Normalizations.registered[r]&&(a=v.Normalizations.registered[r]("inject",e,a),r=v.Normalizations.registered[r]("name",e)),i=v.Names.prefixCheck(r)[0],c<=8)try{e.style[i]=a}catch(e){console.log("Error setting ["+i+"] to ["+a+"]")}else e.style[i]=a;h.debug>=2&&console.log("Set "+r+" ("+i+"): "+a)}return[i,a]},flushTransformCache:function(e){var t,r,a,o="";for(t in f(e).transformCache)r=f(e).transformCache[t],"transformPerspective"!==t?(9===c&&"rotateZ"===t&&(t="rotate"),o+=t+r+" "):a=r;a&&(o="perspective"+a+" "+o),v.setPropertyValue(e,"transform",o)}};v.Hooks.register(),v.Normalizations.register(),h.animate=function(){function e(){return t||p}var t,u,p,y,m,b=arguments[0]&&(d.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||g.isString(arguments[0].properties));if(g.isWrapped(this)?(u=0,p=this,t=this):(u=1,p=b?arguments[0].elements:arguments[0]),p=g.isWrapped(p)?[].slice.call(p):p){b?(y=arguments[0].properties,m=arguments[0].options):(y=arguments[u],m=arguments[u+1]);var x=g.isArray(p)||g.isNodeList(p)?p.length:1,P=0;if("stop"!==y&&!d.isPlainObject(m)){m={};for(var S=u+1;S<arguments.length;S++)!g.isArray(arguments[S])&&/^\d/.test(arguments[S])?m.duration=parseFloat(arguments[S]):g.isString(arguments[S])||g.isArray(arguments[S])&&(1===arguments[S].length||2===arguments[S].length||4===arguments[S].length)?m.easing=arguments[S]:g.isFunction(arguments[S])&&(m.complete=arguments[S])}var V;switch(y){case"scroll":V="scroll";break;case"reverse":V="reverse";break;case"stop":var w=[];return d.each(h.State.calls,function(e,t){!1!==t&&d.each(t[1].nodeType?[t[1]]:t[1],function(t,r){d.each(p.nodeType?[p]:p,function(t,a){a===r&&(f(a)&&d.each(f(a).tweensContainer,function(e,t){t.endValue=t.currentValue}),(!0===m||g.isString(m))&&d.queue(a,g.isString(m)?m:"",[]),w.push(e))})})}),d.each(w,function(e,t){i(t,!0)}),e();default:if(!d.isPlainObject(y)||d.isEmptyObject(y)){if(g.isString(y)&&h.Sequences[y]){var C=p,k=m.duration;return!0===m.backwards&&(p=(p.jquery?[].slice.call(p):p).reverse()),d.each(p,function(e,t){parseFloat(m.stagger)&&(m.delay=parseFloat(m.stagger)*e),m.drag&&(m.duration=parseFloat(k)||(/^(callout|transition)/.test(y)?1e3:s),m.duration=Math.max(m.duration*(m.backwards?1-e/x:(e+1)/x),.75*m.duration,200)),h.Sequences[y].call(t,t,m||{},e,x)}),t||C}return console.log("First argument was not a property map, a known action, or a registered sequence. Aborting."),e()}V="start"}var T={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPxRatio:null},A=[];d.each(p.nodeType?[p]:p,function(e,t){t.nodeType&&function(){function e(e){function l(e){var r=a,n=a,l=a;return g.isArray(e)?(r=e[0],!g.isArray(e[1])&&/^[\d-]/.test(e[1])||g.isFunction(e[1])?l=e[1]:(g.isString(e[1])||g.isArray(e[1]))&&(n=o(e[1],i.duration),e[2]&&(l=e[2]))):r=e,n=n||i.easing,g.isFunction(r)&&(r=r.call(t,P,x)),g.isFunction(l)&&(l=l.call(t,P,x)),[r||0,n,l]}function s(e,t){var r,a;return a=(t||0).toString().toLowerCase().replace(/[%A-z]+$/,function(e){return r=e,""}),r||(r=v.Values.getUnitType(e)),[a,r]}if(i.begin&&0===P&&i.begin.call(p,p),"scroll"===V){var b,S,w,C=/^x$/i.test(i.axis)?"Left":"Top",k=parseFloat(i.offset)||0;i.container?i.container.jquery||i.container.nodeType?(i.container=i.container[0]||i.container,w=(b=i.container["scroll"+C])+d(t).position()[C.toLowerCase()]+k):i.container=null:(b=h.State.scrollAnchor[h.State["scrollProperty"+C]],S=h.State.scrollAnchor[h.State["scrollProperty"+("Left"===C?"Top":"Left")]],w=d(t).offset()[C.toLowerCase()]+k),u={scroll:{rootPropertyValue:!1,startValue:b,currentValue:b,endValue:w,unitType:"",easing:i.easing,scrollData:{container:i.container,direction:C,alternateValue:S}},element:t}}else if("reverse"===V){if(!f(t).tweensContainer)return void d.dequeue(t,i.queue);"none"===f(t).opts.display&&(f(t).opts.display="block"),f(t).opts.loop=!1,f(t).opts.begin=null,f(t).opts.complete=null,m.easing||delete i.easing,m.duration||delete i.duration,i=d.extend({},f(t).opts,i),R=d.extend(!0,{},f(t).tweensContainer);for(var H in R)if("element"!==H){var E=R[H].startValue;R[H].startValue=R[H].currentValue=R[H].endValue,R[H].endValue=E,m&&(R[H].easing=i.easing)}u=R}else if("start"===V){var R;f(t).tweensContainer&&!0===f(t).isAnimating&&(R=f(t).tweensContainer);for(var F in y){var j=l(y[F]),z=j[0],N=j[1],M=j[2];F=v.Names.camelCase(F);var q=v.Hooks.getRoot(F),L=!1;if(!1!==v.Names.prefixCheck(q)[1]||v.Normalizations.registered[q]!==a){i.display&&"none"!==i.display&&/opacity|filter/.test(F)&&!M&&0!==z&&(M=0),i._cacheValues&&R&&R[F]?(M===a&&(M=R[F].endValue+R[F].unitType),L=f(t).rootPropertyValueCache[q]):v.Hooks.registered[F]?M===a?(L=v.getPropertyValue(t,q),M=v.getPropertyValue(t,F,L)):L=v.Hooks.templates[q][1]:M===a&&(M=v.getPropertyValue(t,F));var W,B,$,O;M=(W=s(F,M))[0],$=W[1],z=(W=s(F,z))[0].replace(/^([+-\/*])=/,function(e,t){return O=t,""}),B=W[1],M=parseFloat(M)||0,z=parseFloat(z)||0;var X;if("%"===B&&(/^(fontSize|lineHeight)$/.test(F)?(z/=100,B="em"):/^scale/.test(F)?(z/=100,B=""):/(Red|Green|Blue)$/i.test(F)&&(z=z/100*255,B="")),/[\/*]/.test(O))B=$;else if($!==B&&0!==M)if(0===z)B=$;else{X=X||function(){var e={parent:t.parentNode,position:v.getPropertyValue(t,"position"),fontSize:v.getPropertyValue(t,"fontSize")},a=e.position===T.lastPosition&&e.parent===T.lastParent,o=e.fontSize===T.lastFontSize&&e.parent===T.lastParent;T.lastParent=e.parent,T.lastPosition=e.position,T.lastFontSize=e.fontSize,null===T.remToPxRatio&&(T.remToPxRatio=parseFloat(v.getPropertyValue(r.body,"fontSize"))||16);var n={overflowX:null,overflowY:null,boxSizing:null,width:null,minWidth:null,maxWidth:null,height:null,minHeight:null,maxHeight:null,paddingLeft:null},i={};if(i.remToPxRatio=T.remToPxRatio,c)var l=/^auto$/i.test(t.currentStyle.width),s=/^auto$/i.test(t.currentStyle.height);a&&o||(n.overflowX=v.getPropertyValue(t,"overflowX"),n.overflowY=v.getPropertyValue(t,"overflowY"),n.boxSizing=v.getPropertyValue(t,"boxSizing"),n.width=v.getPropertyValue(t,"width",null,!0),n.minWidth=v.getPropertyValue(t,"minWidth"),n.maxWidth=v.getPropertyValue(t,"maxWidth")||"none",n.height=v.getPropertyValue(t,"height",null,!0),n.minHeight=v.getPropertyValue(t,"minHeight"),n.maxHeight=v.getPropertyValue(t,"maxHeight")||"none",n.paddingLeft=v.getPropertyValue(t,"paddingLeft")),a?(i.percentToPxRatioWidth=T.lastPercentToPxWidth,i.percentToPxRatioHeight=T.lastPercentToPxHeight):(v.setPropertyValue(t,"overflowX","hidden"),v.setPropertyValue(t,"overflowY","hidden"),v.setPropertyValue(t,"boxSizing","content-box"),v.setPropertyValue(t,"width","10%"),v.setPropertyValue(t,"minWidth","10%"),v.setPropertyValue(t,"maxWidth","10%"),v.setPropertyValue(t,"height","10%"),v.setPropertyValue(t,"minHeight","10%"),v.setPropertyValue(t,"maxHeight","10%")),o?i.emToPxRatio=T.lastEmToPx:v.setPropertyValue(t,"paddingLeft","10em"),a||(i.percentToPxRatioWidth=T.lastPercentToPxWidth=(parseFloat(v.getPropertyValue(t,"width",null,!0))||1)/10,i.percentToPxRatioHeight=T.lastPercentToPxHeight=(parseFloat(v.getPropertyValue(t,"height",null,!0))||1)/10),o||(i.emToPxRatio=T.lastEmToPx=(parseFloat(v.getPropertyValue(t,"paddingLeft"))||1)/10);for(var u in n)null!==n[u]&&v.setPropertyValue(t,u,n[u]);return c?(l&&v.setPropertyValue(t,"width","auto"),s&&v.setPropertyValue(t,"height","auto")):(v.setPropertyValue(t,"height","auto"),n.height!==v.getPropertyValue(t,"height",null,!0)&&v.setPropertyValue(t,"height",n.height),v.setPropertyValue(t,"width","auto"),n.width!==v.getPropertyValue(t,"width",null,!0)&&v.setPropertyValue(t,"width",n.width)),h.debug>=1&&console.log("Unit ratios: "+JSON.stringify(i),t),i}();var Y=/margin|padding|left|right|width|text|word|letter/i.test(F)||/X$/.test(F)?"x":"y";switch($){case"%":M*="x"===Y?X.percentToPxRatioWidth:X.percentToPxRatioHeight;break;case"em":M*=X.emToPxRatio;break;case"rem":M*=X.remToPxRatio}switch(B){case"%":M*=1/("x"===Y?X.percentToPxRatioWidth:X.percentToPxRatioHeight);break;case"em":M*=1/X.emToPxRatio;break;case"rem":M*=1/X.remToPxRatio}}switch(O){case"+":z=M+z;break;case"-":z=M-z;break;case"*":z*=M;break;case"/":z=M/z}u[F]={rootPropertyValue:L,startValue:M,currentValue:M,endValue:z,unitType:B,easing:N},h.debug&&console.log("tweensContainer ("+F+"): "+JSON.stringify(u[F]),t)}else h.debug&&console.log("Skipping ["+q+"] due to a lack of browser support.")}u.element=t}u.element&&(A.push(u),f(t).tweensContainer=u,f(t).opts=i,f(t).isAnimating=!0,P===x-1?(h.State.calls.length>1e4&&(h.State.calls=function(e){for(var t=-1,r=e?e.length:0,a=[];++t<r;){var o=e[t];o&&a.push(o)}return a}(h.State.calls)),h.State.calls.push([A,p,i]),!1===h.State.isTicking&&(h.State.isTicking=!0,n())):P++)}var t=this,i=d.extend({},h.defaults,m),u={};if(f(t)===a&&d.data(t,l,{isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}}),/^\d/.test(i.delay)&&!1!==i.queue&&d.queue(t,i.queue,function(e){h.velocityQueueEntryFlag=!0,setTimeout(e,parseFloat(i.delay))}),!0===h.mock)i.duration=1;else switch(i.duration.toString().toLowerCase()){case"fast":i.duration=200;break;case"normal":i.duration=s;break;case"slow":i.duration=600;break;default:i.duration=parseFloat(i.duration)||1}i.easing=o(i.easing,i.duration),i.begin&&!g.isFunction(i.begin)&&(i.begin=null),i.progress&&!g.isFunction(i.progress)&&(i.progress=null),i.complete&&!g.isFunction(i.complete)&&(i.complete=null),i.display&&(i.display=i.display.toString().toLowerCase()),i.mobileHA=i.mobileHA&&h.State.isMobile&&!h.State.isGingerbread,!1===i.queue?i.delay?setTimeout(e,i.delay):e():d.queue(t,i.queue,function(t){h.velocityQueueEntryFlag=!0,e()}),""!==i.queue&&"fx"!==i.queue||"inprogress"===d.queue(t)[0]||d.dequeue(t)}.call(t)});var H,E=d.extend({},h.defaults,m);if(E.loop=parseInt(E.loop),H=2*E.loop-1,E.loop)for(var R=0;R<H;R++){var F={delay:E.delay};E.complete&&R===H-1&&(F.complete=E.complete),h.animate(p,"reverse",F)}return e()}};var b=t.jQuery||t.Zepto;b&&(b.fn.velocity=h.animate,b.fn.velocity.defaults=h.defaults),"undefined"!=typeof define&&define.amd?define(function(){return h}):"undefined"!=typeof module&&module.exports&&(module.exports=h),d.each(["Down","Up"],function(e,t){h.Sequences["slide"+t]=function(e,r){var a=d.extend({},r),o={height:null,marginTop:null,marginBottom:null,paddingTop:null,paddingBottom:null,overflow:null,overflowX:null,overflowY:null},n=a.begin,i=a.complete,l=!1;null!==a.display&&(a.display="Down"===t?a.display||h.CSS.Values.getDisplayType(e):a.display||"none"),a.begin=function(){function r(){e.style.display="block",o.height=h.CSS.getPropertyValue(e,"height"),e.style.height="auto",h.CSS.getPropertyValue(e,"height")===o.height&&(l=!0),h.CSS.setPropertyValue(e,"height",o.height+"px")}if("Down"===t){o.overflow=[h.CSS.getPropertyValue(e,"overflow"),0],o.overflowX=[h.CSS.getPropertyValue(e,"overflowX"),0],o.overflowY=[h.CSS.getPropertyValue(e,"overflowY"),0],e.style.overflow="hidden",e.style.overflowX="visible",e.style.overflowY="hidden",r();for(var a in o)/^overflow/.test(a)||(o[a]=[h.CSS.getPropertyValue(e,a),0]);e.style.display="none"}else{r();for(var a in o)o[a]=[0,h.CSS.getPropertyValue(e,a)];e.style.overflow="hidden",e.style.overflowX="visible",e.style.overflowY="hidden"}n&&n.call(e,e)},a.complete=function(e){var r="Down"===t?0:1;!0===l?o.height[r]="auto":o.height[r]+="px";for(var a in o)e.style[a]=o[a][r];i&&i.call(e,e)},h.animate(e,o,a)}}),d.each(["In","Out"],function(e,t){h.Sequences["fade"+t]=function(e,r,a,o){var n=d.extend({},r),i={opacity:"In"===t?1:0};a!==o-1&&(n.complete=n.begin=null),null!==n.display&&(n.display="In"===t?h.CSS.Values.getDisplayType(e):"none"),h.animate(this,i,n)}})}(window.jQuery||window.Zepto||window,window,document);
//# sourceMappingURL=/sm/c02483864b40dd4988cf7a1a717c427b49536328cab1e25000c5e52a3b4a3808.map