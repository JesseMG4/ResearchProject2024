/**
 * Minified by jsDelivr using UglifyJS v3.1.10.
 * Original file: /npm/velocity-animate@0.4.0/jquery.velocity.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(e,t,r,a){function o(e){var t=f.data(e,s);return null===t?a:t}function n(e,t){var r=e;return g.isString(e)?h.Easings[e]||(r=!1):r=g.isArray(e)&&1===e.length?function(e){return function(t){return Math.round(t*e)*(1/e)}}.apply(null,e):g.isArray(e)&&2===e.length?m.apply(null,e.concat([t])):!(!g.isArray(e)||4!==e.length)&&y.apply(null,e),!1===r&&(r=h.Easings[h.defaults.easing]?h.defaults.easing:c),r}function i(e){if(e)for(var t=(new Date).getTime(),r=0,n=h.State.calls.length;r<n;r++)if(h.State.calls[r]){var s=h.State.calls[r],u=s[0],c=s[2],p=s[3];p||(p=h.State.calls[r][3]=t-16);for(var f=Math.min((t-p)/c.duration,1),y=0,m=u.length;y<m;y++){var b=u[y],S=b.element;if(o(S)){var x=!1;c.display&&"none"!==c.display&&v.setPropertyValue(S,"display",c.display);for(var V in b)if("element"!==V){var P,w=b[V],C=g.isString(w.easing)?h.Easings[w.easing]:w.easing;if(P=1===f?w.endValue:w.startValue+(w.endValue-w.startValue)*C(f),w.currentValue=P,v.Hooks.registered[V]){var k=v.Hooks.getRoot(V),T=o(S).rootPropertyValueCache[k];T&&(w.rootPropertyValue=T)}var A=v.setPropertyValue(S,V,w.currentValue+(0===parseFloat(P)?"":w.unitType),w.rootPropertyValue,w.scrollData);v.Hooks.registered[V]&&(v.Normalizations.registered[k]?o(S).rootPropertyValueCache[k]=v.Normalizations.registered[k]("extract",null,A[1]):o(S).rootPropertyValueCache[k]=A[1]),"transform"===A[0]&&(x=!0)}c.mobileHA&&o(S).transformCache.translate3d===a&&(o(S).transformCache.translate3d="(0px, 0px, 0px)",x=!0),x&&v.flushTransformCache(S)}}c.display&&"none"!==c.display&&(h.State.calls[r][2].display=!1),c.progress&&c.progress.call(s[1],s[1],f,Math.max(0,p+c.duration-t),p),1===f&&l(r)}h.State.isTicking&&d(i)}function l(e,t){if(!h.State.calls[e])return!1;for(var r=h.State.calls[e][0],n=h.State.calls[e][1],i=h.State.calls[e][2],l=!1,s=0,u=r.length;s<u;s++){var c=r[s].element;if(t||"none"!==i.display||i.loop||v.setPropertyValue(c,"display",i.display),(f.queue(c)[1]===a||!/\.velocityQueueEntryFlag/i.test(f.queue(c)[1]))&&o(c)){o(c).isAnimating=!1,o(c).rootPropertyValueCache={};var p,d=["transformPerspective","translateZ","rotateX","rotateY"],g=!1;for(var y in d)p=d[y],/^\(0[^.]/.test(o(c).transformCache[p])&&(g=!0,delete o(c).transformCache[p]);i.mobileHA&&(g=!0,delete o(c).transformCache.translate3d),g&&v.flushTransformCache(c)}t||!i.complete||i.loop||s!==u-1||i.complete.call(n,n),!1!==i.queue&&f.dequeue(c,i.queue)}h.State.calls[e]=!1;for(var m=0,b=h.State.calls.length;m<b;m++)if(!1!==h.State.calls[m]){l=!0;break}!1===l&&(h.State.isTicking=!1,delete h.State.calls,h.State.calls=[])}var s="velocity",u=400,c="swing",p=function(){if(r.documentMode)return r.documentMode;for(var e=7;e>4;e--){var t=r.createElement("div");if(t.innerHTML="\x3c!--[if IE "+e+"]><span></span><![endif]--\x3e",t.getElementsByTagName("span").length)return t=null,e}return a}(),d=t.requestAnimationFrame||function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var r,a=(new Date).getTime();return r=Math.max(0,16-(a-e)),e=a+r,setTimeout(function(){t(a+r)},r)}}(),g={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==a&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||t.Zepto&&t.Zepto.zepto.isZ(e))},isSVG:function(e){return t.SVGElement&&e instanceof SVGElement}},f=t.jQuery||e.Velocity&&e.Velocity.Utilities;if(!f)throw new Error("Velocity: Either jQuery or Velocity's jQuery shim must first be loaded.");if(e.Velocity!==a&&!e.Velocity.Utilities)throw new Error("Velocity: Namespace is occupied.");if(p<=7){if(t.jQuery)return void(t.jQuery.fn.velocity=t.jQuery.fn.animate);throw new Error("Velocity: For IE<=7, Velocity falls back to jQuery, which must first be loaded.")}if(8===p&&!t.jQuery)throw new Error("Velocity: For IE8, Velocity requires jQuery to be loaded. (Velocity's jQuery shim does not work with IE8.)");var h=e.Velocity=e.velocity={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,prefixElement:r.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:t.jQuery?{}:f,Sequences:{},Easings:{},defaults:{queue:"",duration:u,easing:c,begin:null,complete:null,progress:null,display:null,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},animate:function(){},mock:!1,debug:!1};t.pageYOffset!==a?(h.State.scrollAnchor=t,h.State.scrollPropertyLeft="pageXOffset",h.State.scrollPropertyTop="pageYOffset"):(h.State.scrollAnchor=r.documentElement||r.body.parentNode||r.body,h.State.scrollPropertyLeft="scrollLeft",h.State.scrollPropertyTop="scrollTop");var y=function(){function e(e,t){return 1-3*t+3*e}function t(e,t){return 3*t-6*e}function r(e){return 3*e}function a(a,o,n){return((e(o,n)*a+t(o,n))*a+r(o))*a}function o(a,o,n){return 3*e(o,n)*a*a+2*t(o,n)*a+r(o)}return function(e,t,r,n){if(4!==arguments.length)return!1;for(var i=0;i<4;++i)if("number"!=typeof arguments[i]||isNaN(arguments[i])||!isFinite(arguments[i]))return!1;return e=Math.min(e,1),r=Math.min(r,1),e=Math.max(e,0),r=Math.max(r,0),function(i){return e===t&&r===n?i:a(function(t){for(var n=t,i=0;i<8;++i){var l=o(n,e,r);if(0===l)return n;n-=(a(n,e,r)-t)/l}return n}(i),t,n)}}}(),m=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,r,a){var o={x:t.x+a.dx*r,v:t.v+a.dv*r,tension:t.tension,friction:t.friction};return{dx:o.v,dv:e(o)}}function r(r,a){var o={dx:r.v,dv:e(r)},n=t(r,.5*a,o),i=t(r,.5*a,n),l=t(r,a,i),s=1/6*(o.dx+2*(n.dx+i.dx)+l.dx),u=1/6*(o.dv+2*(n.dv+i.dv)+l.dv);return r.x=r.x+s*a,r.v=r.v+u*a,r}return function e(t,a,o){var n,i,l,s={x:-1,v:0,tension:null,friction:null},u=[0],c=0;for(t=parseFloat(t)||600,a=parseFloat(a)||20,o=o||null,s.tension=t,s.friction=a,i=(n=null!==o)?(c=e(t,a))/o*.016:.016;;)if(l=r(l||s,i),u.push(1+l.x),c+=16,!(Math.abs(l.x)>1e-4&&Math.abs(l.v)>1e-4))break;return n?function(e){return u[e*(u.length-1)|0]}:c}}();!function(){h.Easings.linear=function(e){return e},h.Easings.swing=function(e){return.5-Math.cos(e*Math.PI)/2},h.Easings.spring=function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)},h.Easings.ease=y(.25,.1,.25,1),h.Easings["ease-in"]=y(.42,0,1,1),h.Easings["ease-out"]=y(0,0,.58,1),h.Easings["ease-in-out"]=y(.42,0,.58,1);var e={};f.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,r){e[r]=function(e){return Math.pow(e,t+2)}}),f.extend(e,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,r=4;e<((t=Math.pow(2,--r))-1)/11;);return 1/Math.pow(4,3-r)-7.5625*Math.pow((3*t-2)/22-e,2)}}),f.each(e,function(e,t){h.Easings["easeIn"+e]=t,h.Easings["easeOut"+e]=function(e){return 1-t(1-e)},h.Easings["easeInOut"+e]=function(e){return e<.5?t(2*e)/2:1-t(-2*e+2)/2}})}();var v=h.CSS={RegEx:{valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Hooks:{templates:{color:["Red Green Blue Alpha","255 255 255 1"],backgroundColor:["Red Green Blue Alpha","255 255 255 1"],borderColor:["Red Green Blue Alpha","255 255 255 1"],borderTopColor:["Red Green Blue Alpha","255 255 255 1"],borderRightColor:["Red Green Blue Alpha","255 255 255 1"],borderBottomColor:["Red Green Blue Alpha","255 255 255 1"],borderLeftColor:["Red Green Blue Alpha","255 255 255 1"],outlineColor:["Red Green Blue Alpha","255 255 255 1"],fill:["Red Green Blue Alpha","255 255 255 1"],stroke:["Red Green Blue Alpha","255 255 255 1"],stopColor:["Red Green Blue Alpha","255 255 255 1"],textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0%"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){var e,t,r;if(p)for(e in v.Hooks.templates){r=(t=v.Hooks.templates[e])[0].split(" ");var a=t[1].match(v.RegEx.valueSplit);"Color"===r[0]&&(r.push(r.shift()),a.push(a.shift()),v.Hooks.templates[e]=[r.join(" "),a.join(" ")])}for(e in v.Hooks.templates){r=(t=v.Hooks.templates[e])[0].split(" ");for(var o in r){var n=e+r[o],i=o;v.Hooks.registered[n]=[e,i]}}},getRoot:function(e){var t=v.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return v.RegEx.valueUnwrap.test(t)&&(t=t.match(v.Hooks.RegEx.valueUnwrap)[1]),v.Values.isCSSNullValue(t)&&(t=v.Hooks.templates[e][1]),t},extractValue:function(e,t){var r=v.Hooks.registered[e];if(r){var a=r[0],o=r[1];return(t=v.Hooks.cleanRootPropertyValue(a,t)).toString().match(v.RegEx.valueSplit)[o]}return t},injectValue:function(e,t,r){var a=v.Hooks.registered[e];if(a){var o,n=a[0],i=a[1];return r=v.Hooks.cleanRootPropertyValue(n,r),o=r.toString().match(v.RegEx.valueSplit),o[i]=t,o.join(" ")}return r}},Normalizations:{registered:{clip:function(e,t,r){switch(e){case"name":return"clip";case"extract":var a;return a=v.RegEx.wrappedValueAlreadyExtracted.test(r)?r:(a=r.toString().match(v.RegEx.valueUnwrap))?a[1].replace(/,(\s+)?/g," "):r;case"inject":return"rect("+r+")"}},opacity:function(e,t,r){if(p<=8)switch(e){case"name":return"filter";case"extract":var a=r.toString().match(/alpha\(opacity=(.*)\)/i);return r=a?a[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(r)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(r),10)+")"}else switch(e){case"name":return"opacity";case"extract":case"inject":return r}}},register:function(){var e=["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"];p<=9||h.State.isGingerbread||(e=e.concat(["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]));for(var t=0,r=e.length;t<r;t++)!function(){var r=e[t];v.Normalizations.registered[r]=function(e,t,n){switch(e){case"name":return"transform";case"extract":return o(t).transformCache[r]===a?/^scale/i.test(r)?1:0:o(t).transformCache[r].replace(/[()]/g,"");case"inject":var i=!1;switch(r.substr(0,r.length-1)){case"translate":i=!/(%|px|em|rem|\d)$/i.test(n);break;case"scal":case"scale":h.State.isAndroid&&o(t).transformCache[r]===a&&(n=1),i=!/(\d)$/i.test(n);break;case"skew":case"rotate":i=!/(deg|\d)$/i.test(n)}return i||(o(t).transformCache[r]="("+n+")"),o(t).transformCache[r]}}}();for(var n=["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],t=0,i=n.length;t<i;t++)!function(){var e=n[t];v.Normalizations.registered[e]=function(t,r,o){switch(t){case"name":return e;case"extract":var n;if(v.RegEx.wrappedValueAlreadyExtracted.test(o))n=o;else{var i,l={aqua:"rgb(0, 255, 255);",black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",fuchsia:"rgb(255, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",lime:"rgb(0, 255, 0)",maroon:"rgb(128, 0, 0)",navy:"rgb(0, 0, 128)",olive:"rgb(128, 128, 0)",purple:"rgb(128, 0, 128)",red:"rgb(255, 0, 0)",silver:"rgb(192, 192, 192)",teal:"rgb(0, 128, 128)",white:"rgb(255, 255, 255)",yellow:"rgb(255, 255, 0)"};/^[A-z]+$/i.test(o)?i=l[o]!==a?l[o]:l.black:/^#([A-f\d]{3}){1,2}$/i.test(o)?i=function(e){var t;return e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,r,a){return t+t+r+r+a+a}),(t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e))?"rgb("+parseInt(t[1],16)+" "+parseInt(t[2],16)+" "+parseInt(t[3],16)+")":"rgb(0 0 0)"}(o):/^rgba?\(/i.test(o)||(i=l.black),n=(i||o).toString().match(v.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return p<=8||3!==n.split(" ").length||(n+=" 1"),n;case"inject":return p<=8?4===o.split(" ").length&&(o=o.split(/\s+/).slice(0,3).join(" ")):3===o.split(" ").length&&(o+=" 1"),(p<=8?"rgb":"rgba")+"("+o.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y1";return(p||h.State.isAndroid&&!h.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(h.State.prefixMatches[e])return[h.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],r=0,a=t.length;r<a;r++){var o;if(o=0===r?e:t[r]+e.replace(/^\w/,function(e){return e.toUpperCase()}),g.isString(h.State.prefixElement.style[o]))return h.State.prefixMatches[e]=o,[o,!0]}return[e,!1]}},Values:{isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":"block"}},getPropertyValue:function(e,r,n,i){function l(e,r){var n=0;if(p<=8)n=f.css(e,r);else{if(!i){if("height"===r&&"border-box"!==v.getPropertyValue(e,"boxSizing").toString().toLowerCase())return e.offsetHeight-(parseFloat(v.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(v.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(v.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(v.getPropertyValue(e,"paddingBottom"))||0);if("width"===r&&"border-box"!==v.getPropertyValue(e,"boxSizing").toString().toLowerCase())return e.offsetWidth-(parseFloat(v.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(v.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(v.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(v.getPropertyValue(e,"paddingRight"))||0)}var s;s=o(e)===a?t.getComputedStyle(e,null):o(e).computedStyle?o(e).computedStyle:o(e).computedStyle=t.getComputedStyle(e,null),p&&"borderColor"===r&&(r="borderTopColor"),""!==(n=9===p&&"filter"===r?s.getPropertyValue(r):s[r])&&null!==n||(n=e.style[r])}if("auto"===n&&/^(top|right|bottom|left)$/i.test(r)){var u=l(e,"position");("fixed"===u||"absolute"===u&&/top|left/i.test(r))&&(n=f(e).position()[r]+"px")}return n}var s;if(v.Hooks.registered[r]){var u=r,c=v.Hooks.getRoot(u);n===a&&(n=v.getPropertyValue(e,v.Names.prefixCheck(c)[0])),v.Normalizations.registered[c]&&(n=v.Normalizations.registered[c]("extract",e,n)),s=v.Hooks.extractValue(u,n)}else if(v.Normalizations.registered[r]){var d,g;"transform"!==(d=v.Normalizations.registered[r]("name",e))&&(g=l(e,v.Names.prefixCheck(d)[0]),v.Values.isCSSNullValue(g)&&v.Hooks.templates[r]&&(g=v.Hooks.templates[r][1])),s=v.Normalizations.registered[r]("extract",e,g)}return/^[\d-]/.test(s)||(s=o(e)&&o(e).isSVG&&v.Names.SVGAttribute(r)?/^(height|width)$/i.test(r)?e.getBBox()[r]:e.getAttribute(r):l(e,v.Names.prefixCheck(r)[0])),v.Values.isCSSNullValue(s)&&(s=0),h.debug>=2&&console.log("Get "+r+": "+s),s},setPropertyValue:function(e,r,a,n,i){var l=r;if("scroll"===r)i.container?i.container["scroll"+i.direction]=a:"Left"===i.direction?t.scrollTo(a,i.alternateValue):t.scrollTo(i.alternateValue,a);else if(v.Normalizations.registered[r]&&"transform"===v.Normalizations.registered[r]("name",e))v.Normalizations.registered[r]("inject",e,a),l="transform",a=o(e).transformCache[r];else{if(v.Hooks.registered[r]){var s=r,u=v.Hooks.getRoot(r);n=n||v.getPropertyValue(e,u),a=v.Hooks.injectValue(s,a,n),r=u}if(v.Normalizations.registered[r]&&(a=v.Normalizations.registered[r]("inject",e,a),r=v.Normalizations.registered[r]("name",e)),l=v.Names.prefixCheck(r)[0],p<=8)try{e.style[l]=a}catch(e){h.debug&&console.log("Browser does not support ["+a+"] for ["+l+"]")}else o(e)&&o(e).isSVG&&v.Names.SVGAttribute(r)?e.setAttribute(r,a):e.style[l]=a;h.debug>=2&&console.log("Set "+r+" ("+l+"): "+a)}return[l,a]},flushTransformCache:function(e){function t(t){return parseFloat(v.getPropertyValue(e,t))}var r="";if((p||h.State.isAndroid&&!h.State.isChrome)&&o(e).isSVG){var a={translate:[t("translateX"),t("translateY")],skewX:[t("skewX")],skewY:[t("skewY")],scale:1!==t("scale")?[t("scale"),t("scale")]:[t("scaleX"),t("scaleY")],rotate:[t("rotateZ"),0,0]};f.each(o(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),a[e]&&(r+=e+"("+a[e].join(" ")+") ",delete a[e])})}else{var n,i;f.each(o(e).transformCache,function(t){if(n=o(e).transformCache[t],"transformPerspective"===t)return i=n,!0;9===p&&"rotateZ"===t&&(t="rotate"),r+=t+n+" "}),i&&(r="perspective"+i+" "+r)}v.setPropertyValue(e,"transform",r)}};v.Hooks.register(),v.Normalizations.register(),h.animate=function(){function e(){return t||d}var t,c,d,y,m,b=arguments[0]&&(f.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||g.isString(arguments[0].properties));if(g.isWrapped(this)?(c=0,d=this,t=this):(c=1,d=b?arguments[0].elements:arguments[0]),d=g.isWrapped(d)?[].slice.call(d):d){b?(y=arguments[0].properties,m=arguments[0].options):(y=arguments[c],m=arguments[c+1]);var S=g.isArray(d)||g.isNodeList(d)?d.length:1,x=0;if("stop"!==y&&!f.isPlainObject(m)){m={};for(var V=c+1;V<arguments.length;V++)!g.isArray(arguments[V])&&/^\d/.test(arguments[V])?m.duration=parseFloat(arguments[V]):g.isString(arguments[V])||g.isArray(arguments[V])?m.easing=arguments[V]:g.isFunction(arguments[V])&&(m.complete=arguments[V])}var P;switch(y){case"scroll":P="scroll";break;case"reverse":P="reverse";break;case"stop":var w=[];return f.each(h.State.calls,function(e,t){!1!==t&&f.each(t[1].nodeType?[t[1]]:t[1],function(t,r){f.each(d.nodeType?[d]:d,function(t,a){a===r&&(o(a)&&f.each(o(a).tweensContainer,function(e,t){t.endValue=t.currentValue}),(!0===m||g.isString(m))&&f.queue(a,g.isString(m)?m:"",[]),w.push(e))})})}),f.each(w,function(e,t){l(t,!0)}),e();default:if(!f.isPlainObject(y)||f.isEmptyObject(y)){if(g.isString(y)&&h.Sequences[y]){var C=d,k=m.duration;return!0===m.backwards&&(d=(d.jquery?[].slice.call(d):d).reverse()),f.each(d,function(e,t){parseFloat(m.stagger)&&(m.delay=parseFloat(m.stagger)*e),m.drag&&(m.duration=parseFloat(k)||(/^(callout|transition)/.test(y)?1e3:u),m.duration=Math.max(m.duration*(m.backwards?1-e/S:(e+1)/S),.75*m.duration,200)),h.Sequences[y].call(t,t,m||{},e,S)}),t||C}return console.log("First argument was not a property map, a known action, or a registered sequence. Aborting."),e()}P="start"}var T={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPxRatio:null},A=[];f.each(d.nodeType?[d]:d,function(e,t){t.nodeType&&function(){function e(e){function s(e){var r=a,o=a,i=a;return g.isArray(e)?(r=e[0],!g.isArray(e[1])&&/^[\d-]/.test(e[1])||g.isFunction(e[1])?i=e[1]:(g.isString(e[1])||g.isArray(e[1]))&&(o=n(e[1],l.duration),e[2]&&(i=e[2]))):r=e,o=o||l.easing,g.isFunction(r)&&(r=r.call(t,x,S)),g.isFunction(i)&&(i=i.call(t,x,S)),[r||0,o,i]}function u(e,t){var r,a;return a=(t||0).toString().toLowerCase().replace(/[%A-z]+$/,function(e){return r=e,""}),r||(r=v.Values.getUnitType(e)),[a,r]}if(l.begin&&0===x&&l.begin.call(d,d),"scroll"===P){var b,V,w,C=/^x$/i.test(l.axis)?"Left":"Top",k=parseFloat(l.offset)||0;l.container?l.container.jquery||l.container.nodeType?(l.container=l.container[0]||l.container,w=(b=l.container["scroll"+C])+f(t).position()[C.toLowerCase()]+k):l.container=null:(b=h.State.scrollAnchor[h.State["scrollProperty"+C]],V=h.State.scrollAnchor[h.State["scrollProperty"+("Left"===C?"Top":"Left")]],w=f(t).offset()[C.toLowerCase()]+k),c={scroll:{rootPropertyValue:!1,startValue:b,currentValue:b,endValue:w,unitType:"",easing:l.easing,scrollData:{container:l.container,direction:C,alternateValue:V}},element:t}}else if("reverse"===P){if(!o(t).tweensContainer)return void f.dequeue(t,l.queue);"none"===o(t).opts.display&&(o(t).opts.display="block"),o(t).opts.loop=!1,o(t).opts.begin=null,o(t).opts.complete=null,m.easing||delete l.easing,m.duration||delete l.duration,l=f.extend({},o(t).opts,l),H=f.extend(!0,{},o(t).tweensContainer);for(var R in H)if("element"!==R){var E=H[R].startValue;H[R].startValue=H[R].currentValue=H[R].endValue,H[R].endValue=E,m&&(H[R].easing=l.easing)}c=H}else if("start"===P){var H;o(t).tweensContainer&&!0===o(t).isAnimating&&(H=o(t).tweensContainer);for(var F in y){var j=s(y[F]),z=j[0],N=j[1],M=j[2];F=v.Names.camelCase(F);var q=v.Hooks.getRoot(F),G=!1;if(o(t).isSVG||!1!==v.Names.prefixCheck(q)[1]||v.Normalizations.registered[q]!==a){l.display&&"none"!==l.display&&/opacity|filter/.test(F)&&!M&&0!==z&&(M=0),l._cacheValues&&H&&H[F]?(M===a&&(M=H[F].endValue+H[F].unitType),G=o(t).rootPropertyValueCache[q]):v.Hooks.registered[F]?M===a?(G=v.getPropertyValue(t,q),M=v.getPropertyValue(t,F,G)):G=v.Hooks.templates[q][1]:M===a&&(M=v.getPropertyValue(t,F));var L,B,X,Y;M=(L=u(F,M))[0],X=L[1],z=(L=u(F,z))[0].replace(/^([+-\/*])=/,function(e,t){return Y=t,""}),B=L[1],M=parseFloat(M)||0,z=parseFloat(z)||0;var $;if("%"===B&&(/^(fontSize|lineHeight)$/.test(F)?(z/=100,B="em"):/^scale/.test(F)?(z/=100,B=""):/(Red|Green|Blue)$/i.test(F)&&(z=z/100*255,B="")),/[\/*]/.test(Y))B=X;else if(X!==B&&0!==M)if(0===z)B=X;else{$=$||function(){var e={parent:t.parentNode,position:v.getPropertyValue(t,"position"),fontSize:v.getPropertyValue(t,"fontSize")},a=e.position===T.lastPosition&&e.parent===T.lastParent,n=e.fontSize===T.lastFontSize&&e.parent===T.lastParent;T.lastParent=e.parent,T.lastPosition=e.position,T.lastFontSize=e.fontSize,null===T.remToPxRatio&&(T.remToPxRatio=parseFloat(v.getPropertyValue(r.body,"fontSize"))||16);var i={overflowX:null,overflowY:null,boxSizing:null,width:null,minWidth:null,maxWidth:null,height:null,minHeight:null,maxHeight:null,paddingLeft:null},l={};if(l.remToPxRatio=T.remToPxRatio,p&&!o(t).isSVG)var s=/^auto$/i.test(t.currentStyle.width),u=/^auto$/i.test(t.currentStyle.height);a&&n||(o(t).isSVG||(i.overflowX=v.getPropertyValue(t,"overflowX"),i.overflowY=v.getPropertyValue(t,"overflowY"),i.boxSizing=v.getPropertyValue(t,"boxSizing"),i.minWidth=v.getPropertyValue(t,"minWidth"),i.maxWidth=v.getPropertyValue(t,"maxWidth")||"none",i.minHeight=v.getPropertyValue(t,"minHeight"),i.maxHeight=v.getPropertyValue(t,"maxHeight")||"none",i.paddingLeft=v.getPropertyValue(t,"paddingLeft")),i.width=v.getPropertyValue(t,"width",null,!0),i.height=v.getPropertyValue(t,"height",null,!0)),a?(l.percentToPxRatioWidth=T.lastPercentToPxWidth,l.percentToPxRatioHeight=T.lastPercentToPxHeight):(o(t).isSVG||(v.setPropertyValue(t,"overflowX","hidden"),v.setPropertyValue(t,"overflowY","hidden"),v.setPropertyValue(t,"boxSizing","content-box"),v.setPropertyValue(t,"minWidth","10%"),v.setPropertyValue(t,"maxWidth","10%"),v.setPropertyValue(t,"minHeight","10%"),v.setPropertyValue(t,"maxHeight","10%")),v.setPropertyValue(t,"width","10%"),v.setPropertyValue(t,"height","10%")),n?l.emToPxRatio=T.lastEmToPx:o(t).isSVG||v.setPropertyValue(t,"paddingLeft","10em"),a||(l.percentToPxRatioWidth=T.lastPercentToPxWidth=(parseFloat(v.getPropertyValue(t,"width",null,!0))||1)/10,l.percentToPxRatioHeight=T.lastPercentToPxHeight=(parseFloat(v.getPropertyValue(t,"height",null,!0))||1)/10),n||(l.emToPxRatio=T.lastEmToPx=(parseFloat(v.getPropertyValue(t,"paddingLeft"))||1)/10);for(var c in i)null!==i[c]&&v.setPropertyValue(t,c,i[c]);return o(t).isSVG||(p?(s&&v.setPropertyValue(t,"width","auto"),u&&v.setPropertyValue(t,"height","auto")):(v.setPropertyValue(t,"height","auto"),i.height!==v.getPropertyValue(t,"height",null,!0)&&v.setPropertyValue(t,"height",i.height),v.setPropertyValue(t,"width","auto"),i.width!==v.getPropertyValue(t,"width",null,!0)&&v.setPropertyValue(t,"width",i.width))),h.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),t),l}();var W=/margin|padding|left|right|width|text|word|letter/i.test(F)||/X$/.test(F)?"x":"y";switch(X){case"%":M*="x"===W?$.percentToPxRatioWidth:$.percentToPxRatioHeight;break;case"em":M*=$.emToPxRatio;break;case"rem":M*=$.remToPxRatio}switch(B){case"%":M*=1/("x"===W?$.percentToPxRatioWidth:$.percentToPxRatioHeight);break;case"em":M*=1/$.emToPxRatio;break;case"rem":M*=1/$.remToPxRatio}}switch(Y){case"+":z=M+z;break;case"-":z=M-z;break;case"*":z*=M;break;case"/":z=M/z}c[F]={rootPropertyValue:G,startValue:M,currentValue:M,endValue:z,unitType:B,easing:N},h.debug&&console.log("tweensContainer ("+F+"): "+JSON.stringify(c[F]),t)}else h.debug&&console.log("Skipping ["+q+"] due to a lack of browser support.")}c.element=t}c.element&&(A.push(c),o(t).tweensContainer=c,o(t).opts=l,o(t).isAnimating=!0,x===S-1?(h.State.calls.length>1e4&&(h.State.calls=function(e){for(var t=-1,r=e?e.length:0,a=[];++t<r;){var o=e[t];o&&a.push(o)}return a}(h.State.calls)),h.State.calls.push([A,d,l]),!1===h.State.isTicking&&(h.State.isTicking=!0,i())):x++)}var t=this,l=f.extend({},h.defaults,m),c={};if(o(t)===a&&f.data(t,s,{isSVG:g.isSVG(t),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}}),/^\d/.test(l.delay)&&!1!==l.queue&&f.queue(t,l.queue,function(e){h.velocityQueueEntryFlag=!0,setTimeout(e,parseFloat(l.delay))}),!0===h.mock)l.duration=1;else switch(l.duration.toString().toLowerCase()){case"fast":l.duration=200;break;case"normal":l.duration=u;break;case"slow":l.duration=600;break;default:l.duration=parseFloat(l.duration)||1}l.easing=n(l.easing,l.duration),l.begin&&!g.isFunction(l.begin)&&(l.begin=null),l.progress&&!g.isFunction(l.progress)&&(l.progress=null),l.complete&&!g.isFunction(l.complete)&&(l.complete=null),l.display&&(l.display=l.display.toString().toLowerCase()),l.mobileHA=l.mobileHA&&h.State.isMobile&&!h.State.isGingerbread,!1===l.queue?l.delay?setTimeout(e,l.delay):e():f.queue(t,l.queue,function(t){h.velocityQueueEntryFlag=!0,e()}),""!==l.queue&&"fx"!==l.queue||"inprogress"===f.queue(t)[0]||f.dequeue(t)}.call(t)});var R,E=f.extend({},h.defaults,m);if(E.loop=parseInt(E.loop),R=2*E.loop-1,E.loop)for(var H=0;H<R;H++){var F={delay:E.delay};E.complete&&H===R-1&&(F.complete=E.complete),h.animate(d,"reverse",F)}return e()}};var b=t.jQuery||t.Zepto;b&&(b.fn.velocity=h.animate,b.fn.velocity.defaults=h.defaults),"undefined"!=typeof define&&define.amd?define(function(){return h}):"undefined"!=typeof module&&module.exports&&(module.exports=h),f.each(["Down","Up"],function(e,t){h.Sequences["slide"+t]=function(e,r){var a=f.extend({},r),o={height:null,marginTop:null,marginBottom:null,paddingTop:null,paddingBottom:null,overflow:null,overflowX:null,overflowY:null},n=a.begin,i=a.complete,l=!1;null!==a.display&&(a.display="Down"===t?a.display||h.CSS.Values.getDisplayType(e):a.display||"none"),a.begin=function(){function r(){e.style.display="block",o.height=h.CSS.getPropertyValue(e,"height"),e.style.height="auto",h.CSS.getPropertyValue(e,"height")===o.height&&(l=!0),h.CSS.setPropertyValue(e,"height",o.height+"px")}if("Down"===t){o.overflow=[h.CSS.getPropertyValue(e,"overflow"),0],o.overflowX=[h.CSS.getPropertyValue(e,"overflowX"),0],o.overflowY=[h.CSS.getPropertyValue(e,"overflowY"),0],e.style.overflow="hidden",e.style.overflowX="visible",e.style.overflowY="hidden",r();for(var a in o)/^overflow/.test(a)||(o[a]=[h.CSS.getPropertyValue(e,a),0]);e.style.display="none"}else{r();for(var a in o)o[a]=[0,h.CSS.getPropertyValue(e,a)];e.style.overflow="hidden",e.style.overflowX="visible",e.style.overflowY="hidden"}n&&n.call(e,e)},a.complete=function(e){var r="Down"===t?0:1;!0===l?o.height[r]="auto":o.height[r]+="px";for(var a in o)e.style[a]=o[a][r];i&&i.call(e,e)},h.animate(e,o,a)}}),f.each(["In","Out"],function(e,t){h.Sequences["fade"+t]=function(e,r,a,o){var n=f.extend({},r),i={opacity:"In"===t?1:0};a!==o-1&&(n.complete=n.begin=null),null!==n.display&&(n.display="In"===t?h.CSS.Values.getDisplayType(e):"none"),h.animate(this,i,n)}})}(window.jQuery||window.Zepto||window,window,document);
//# sourceMappingURL=/sm/58d3bf3ae07bfa05ddd42ccf3224f4b26c77b9613258d59b00de1bced59f5094.map