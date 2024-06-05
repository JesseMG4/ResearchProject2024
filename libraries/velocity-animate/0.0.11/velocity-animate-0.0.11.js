/**
 * Minified by jsDelivr using UglifyJS v3.1.10.
 * Original file: /npm/velocity-animate@0.0.11/jquery.velocity.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(e,t,r,a){function o(e){return"[object Function]"===Object.prototype.toString.call(e)}function n(e){return"[object Array]"===Object.prototype.toString.call(e)}function i(e,t,r,a){function o(e,t){return 1-3*t+3*e}function n(e,t){return 3*t-6*e}function i(e){return 3*e}function l(e,t,r){return((o(t,r)*e+n(t,r))*e+i(t))*e}function s(e,t,r){return 3*o(t,r)*e*e+2*n(t,r)*e+i(t)}if(4!==arguments.length)return!1;for(var u=0;u<4;++u)if("number"!=typeof arguments[u]||isNaN(arguments[u])||!isFinite(arguments[u]))return!1;e=Math.min(e,1),r=Math.min(r,1),e=Math.max(e,0),r=Math.max(r,0);return function(o){return e===t&&r===a?o:l(function(t){for(var a=t,o=0;o<8;++o){var n=s(a,e,r);if(0===n)return a;a-=(l(a,e,r)-t)/n}return a}(o),t,a)}}function l(e){if(e)for(var t=(new Date).getTime(),r=0,o=d.State.calls.length;r<o;r++)if(d.State.calls[r]){var n=d.State.calls[r],i=n[0],u=n[2],f=n[3];f||(f=d.State.calls[r][3]=t-16);for(var h=Math.min((t-f)/u.duration,1),y=0,m=i.length;y<m;y++){var v=i[y],b=v.element;if(p.data(b,s)){var P=!1;u.display&&"none"!==u.display&&g.setPropertyValue(b,"display",u.display);for(var x in v)if("element"!==x){var V,S=v[x],w="string"==typeof S.easing?d.Easings[S.easing]:S.easing;if(V=1===h?S.endValue:S.startValue+(S.endValue-S.startValue)*w(h),S.currentValue=V,g.Hooks.registered[x]){var C=g.Hooks.getRoot(x),k=p.data(b,s).rootPropertyValueCache[C];k&&(S.rootPropertyValue=k)}var T=g.setPropertyValue(b,x,S.currentValue+(0===parseFloat(V)?"":S.unitType),S.rootPropertyValue,S.scrollData);g.Hooks.registered[x]&&(g.Normalizations.registered[C]?p.data(b,s).rootPropertyValueCache[C]=g.Normalizations.registered[C]("extract",null,T[1]):p.data(b,s).rootPropertyValueCache[C]=T[1]),"transform"===T[0]&&(P=!0)}u.mobileHA&&p.data(b,s).transformCache.translate3d===a&&(p.data(b,s).transformCache.translate3d="(0, 0, 0)",P=!0),P&&g.flushTransformCache(b)}}u.display&&"none"!==u.display&&(d.State.calls[r][2].display=!1),1===h&&function(e){for(var t=d.State.calls[e][0],r=d.State.calls[e][1],o=d.State.calls[e][2],n=!1,i=0,l=t.length;i<l;i++){var u=t[i].element;if("none"!==o.display||o.loop||g.setPropertyValue(u,"display",o.display),p.queue(u)[1]!==a&&/\.velocityQueueEntryFlag/i.test(p.queue(u)[1])||p.data(u,s)&&(p.data(u,s).isAnimating=!1,p.data(u,s).rootPropertyValueCache={},o.mobileHA&&!d.State.isGingerbread&&(delete p.data(u,s).transformCache.translate3d,g.flushTransformCache(u))),i===l-1&&!o.loop&&o.complete){var c=r.jquery?r.get():r;o.complete.call(c,c)}!1!==o.queue&&p.dequeue(u,o.queue)}d.State.calls[e]=!1;for(var f=0,h=d.State.calls.length;f<h;f++)if(!1!==d.State.calls[f]){n=!0;break}!1===n&&(d.State.isTicking=!1,delete d.State.calls,d.State.calls=[])}(r)}d.State.isTicking&&c(l)}var s="velocity",u=function(){if(r.documentMode)return r.documentMode;for(var e=7;e>4;e--){var t=r.createElement("div");if(t.innerHTML="\x3c!--[if IE "+e+"]><span></span><![endif]--\x3e",t.getElementsByTagName("span").length)return t=null,e}return a}(),c=t.requestAnimationFrame||function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var r,a=(new Date).getTime();return r=Math.max(0,16-(a-e)),e=a+r,setTimeout(function(){t(a+r)},r)}}();if(u<=7){if(t.jQuery)return void(t.jQuery.fn.velocity=t.jQuery.fn.animate);throw new Error("For IE<=7, Velocity falls back to jQuery, which must first be loaded.")}if(8===u&&!t.jQuery)throw new Error("For IE8, Velocity requires jQuery to be loaded.");if(e.Velocity!==a&&!e.Velocity.Utilities)throw new Error("Velocity's namespace is occupied. Aborting.");var p=t.jQuery||e.Velocity.Utilities,d=e.Velocity=e.velocity=p.extend(e.Velocity||{},{State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),prefixElement:r.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Sequences:{},Easings:{},defaults:{queue:"",duration:400,easing:"swing",complete:null,display:null,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},animate:function(){},debug:!1});t.pageYOffset!==a?(d.State.scrollAnchor=t,d.State.scrollPropertyLeft="pageXOffset",d.State.scrollPropertyTop="pageYOffset"):(d.State.scrollAnchor=r.documentElement||r.body.parentNode||r.body,d.State.scrollPropertyLeft="scrollLeft",d.State.scrollPropertyTop="scrollTop"),function(){var e={};p.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,r){e[r]=function(e){return Math.pow(e,t+2)}}),p.extend(e,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,r=4;e<((t=Math.pow(2,--r))-1)/11;);return 1/Math.pow(4,3-r)-7.5625*Math.pow((3*t-2)/22-e,2)}}),p.each(e,function(e,t){d.Easings["easeIn"+e]=t,d.Easings["easeOut"+e]=function(e){return 1-t(1-e)},d.Easings["easeInOut"+e]=function(e){return e<.5?t(2*e)/2:1-t(-2*e+2)/2}}),d.Easings.linear=function(e){return e},d.Easings.swing=function(e){return.5-Math.cos(e*Math.PI)/2},d.Easings.ease=i(.25,.1,.25,1),d.Easings["ease-in"]=i(.42,0,1,1),d.Easings["ease-out"]=i(0,0,.58,1),d.Easings["ease-in-out"]=i(.42,0,.58,1),d.Easings.spring=function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}}();var g=d.CSS={RegEx:{valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Hooks:{templates:{color:["Red Green Blue Alpha","255 255 255 1"],backgroundColor:["Red Green Blue Alpha","255 255 255 1"],borderColor:["Red Green Blue Alpha","255 255 255 1"],borderTopColor:["Red Green Blue Alpha","255 255 255 1"],borderRightColor:["Red Green Blue Alpha","255 255 255 1"],borderBottomColor:["Red Green Blue Alpha","255 255 255 1"],borderLeftColor:["Red Green Blue Alpha","255 255 255 1"],outlineColor:["Red Green Blue Alpha","255 255 255 1"],textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0%"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){var e,t,r;if(u)for(e in g.Hooks.templates){r=(t=g.Hooks.templates[e])[0].split(" ");var a=t[1].match(g.RegEx.valueSplit);"Color"===r[0]&&(r.push(r.shift()),a.push(a.shift()),g.Hooks.templates[e]=[r.join(" "),a.join(" ")])}for(e in g.Hooks.templates){r=(t=g.Hooks.templates[e])[0].split(" ");for(var o in r){var n=e+r[o],i=o;g.Hooks.registered[n]=[e,i]}}},getRoot:function(e){var t=g.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return g.RegEx.valueUnwrap.test(t)&&(t=t.match(g.Hooks.RegEx.valueUnwrap)[1]),g.Values.isCSSNullValue(t)&&(t=g.Hooks.templates[e][1]),t},extractValue:function(e,t){var r=g.Hooks.registered[e];if(r){var a=r[0],o=r[1];return(t=g.Hooks.cleanRootPropertyValue(a,t)).toString().match(g.RegEx.valueSplit)[o]}return t},injectValue:function(e,t,r){var a=g.Hooks.registered[e];if(a){var o,n=a[0],i=a[1];return r=g.Hooks.cleanRootPropertyValue(n,r),o=r.toString().match(g.RegEx.valueSplit),o[i]=t,o.join(" ")}return r}},Normalizations:{registered:{clip:function(e,t,r){switch(e){case"name":return"clip";case"extract":var a;return g.RegEx.wrappedValueAlreadyExtracted.test(r)?a=r:(a=r.toString().match(g.RegEx.valueUnwrap))&&(a=a[1].replace(/,(\s+)?/g," ")),a;case"inject":return"rect("+r+")"}},opacity:function(e,t,r){if(u<=8)switch(e){case"name":return"filter";case"extract":var a=r.toString().match(/alpha\(opacity=(.*)\)/i);return r=a?a[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(r)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(r),10)+")"}else switch(e){case"name":return"opacity";case"extract":case"inject":return r}}},register:function(){var e=["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"];u<=9||(e=e.concat(["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]));for(var t=0,r=e.length;t<r;t++)!function(){var r=e[t];g.Normalizations.registered[r]=function(e,t,o){switch(e){case"name":return"transform";case"extract":return p.data(t,s).transformCache[r]===a?/^scale/i.test(r)?1:0:p.data(t,s).transformCache[r].replace(/[()]/g,"");case"inject":var n=!1;switch(r.substr(0,r.length-1)){case"translate":n=!/(%|px|em|rem|\d)$/i.test(o);break;case"scal":case"scale":d.State.isAndroid&&p.data(t,s).transformCache[r]===a&&(o=1),n=!/(\d)$/i.test(o);break;case"skew":case"rotate":n=!/(deg|\d)$/i.test(o)}return n||(p.data(t,s).transformCache[r]="("+o+")"),p.data(t,s).transformCache[r]}}}();for(var o=["color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],t=0,n=o.length;t<n;t++)!function(){var e=o[t];g.Normalizations.registered[e]=function(t,r,o){switch(t){case"name":return e;case"extract":var n;if(g.RegEx.wrappedValueAlreadyExtracted.test(o))n=o;else{var i,l={aqua:"rgb(0, 255, 255);",black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",fuchsia:"rgb(255, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",lime:"rgb(0, 255, 0)",maroon:"rgb(128, 0, 0)",navy:"rgb(0, 0, 128)",olive:"rgb(128, 128, 0)",purple:"rgb(128, 0, 128)",red:"rgb(255, 0, 0)",silver:"rgb(192, 192, 192)",teal:"rgb(0, 128, 128)",white:"rgb(255, 255, 255)",yellow:"rgb(255, 255, 0)"};/^[A-z]+$/i.test(o)?i=l[o]!==a?l[o]:l.black:/^#([A-f\d]{3}){1,2}$/i.test(o)?i=function(e){var t;return e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,r,a){return t+t+r+r+a+a}),(t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e))?"rgb("+parseInt(t[1],16)+" "+parseInt(t[2],16)+" "+parseInt(t[3],16)+")":"rgb(0 0 0)"}(o):/^rgba?\(/i.test(o)||(i=l.black),n=(i||o).toString().match(g.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return u<=8||3!==n.split(" ").length||(n+=" 1"),n;case"inject":return u<=8?4===o.split(" ").length&&(o=o.split(/\s+/).slice(0,3).join(" ")):3===o.split(" ").length&&(o+=" 1"),(u<=8?"rgb":"rgba")+"("+o.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},prefixCheck:function(e){if(d.State.prefixMatches[e])return[d.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],r=0,a=t.length;r<a;r++){var o;if(o=0===r?e:t[r]+e.replace(/^\w/,function(e){return e.toUpperCase()}),"string"==typeof d.State.prefixElement.style[o])return d.State.prefixMatches[e]=o,[o,!0]}return[e,!1]}},Values:{isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|opacity|alpha|fillOpacity|flexGrow|flexHeight|zIndex|fontWeight)$)|color/i.test(e)?"":"px"},getDisplayType:function(e){var t=e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":"block"}},getPropertyValue:function(e,r,o,n){function i(e,r){var o=0;if(u<=8)o=p.css(e,r);else{if(!n){if("height"===r&&"border-box"!==g.getPropertyValue(e,"boxSizing").toString().toLowerCase())return e.offsetHeight-(parseFloat(g.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(g.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(g.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(g.getPropertyValue(e,"paddingBottom"))||0);if("width"===r&&"border-box"!==g.getPropertyValue(e,"boxSizing").toString().toLowerCase())return e.offsetWidth-(parseFloat(g.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(g.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(g.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(g.getPropertyValue(e,"paddingRight"))||0)}var l;l=p.data(e,s)===a?t.getComputedStyle(e,null):p.data(e,s).computedStyle?p.data(e,s).computedStyle:p.data(e,s).computedStyle=t.getComputedStyle(e,null),u&&"borderColor"===r&&(r="borderTopColor"),""!==(o=9===u&&"filter"===r?l.getPropertyValue(r):l[r])&&null!==o||(o=e.style[r])}if("auto"===o&&/^(top|right|bottom|left)$/i.test(r)){var c=i(e,"position");("fixed"===c||"absolute"===c&&/top|left/i.test(r))&&(o=p(e).position()[r]+"px")}return o}var l;if(g.Hooks.registered[r]){var c=r,f=g.Hooks.getRoot(c);o===a&&(o=g.getPropertyValue(e,g.Names.prefixCheck(f)[0])),g.Normalizations.registered[f]&&(o=g.Normalizations.registered[f]("extract",e,o)),l=g.Hooks.extractValue(c,o)}else if(g.Normalizations.registered[r]){var h,y;"transform"!==(h=g.Normalizations.registered[r]("name",e))&&(y=i(e,g.Names.prefixCheck(h)[0]),g.Values.isCSSNullValue(y)&&g.Hooks.templates[r]&&(y=g.Hooks.templates[r][1])),l=g.Normalizations.registered[r]("extract",e,y)}return/^[\d-]/.test(l)||(l=i(e,g.Names.prefixCheck(r)[0])),g.Values.isCSSNullValue(l)&&(l=0),d.debug>=2&&console.log("Get "+r+": "+l),l},setPropertyValue:function(e,r,a,o,n){var i=r;if("scroll"===r)n.container?n.container["scroll"+n.direction]=a:"Left"===n.direction?t.scrollTo(a,n.alternateValue):t.scrollTo(n.alternateValue,a);else if(g.Normalizations.registered[r]&&"transform"===g.Normalizations.registered[r]("name",e))g.Normalizations.registered[r]("inject",e,a),i="transform",a=p.data(e,s).transformCache[r];else{if(g.Hooks.registered[r]){var l=r,c=g.Hooks.getRoot(r);o=o||g.getPropertyValue(e,c),a=g.Hooks.injectValue(l,a,o),r=c}if(g.Normalizations.registered[r]&&(a=g.Normalizations.registered[r]("inject",e,a),r=g.Normalizations.registered[r]("name",e)),i=g.Names.prefixCheck(r)[0],u<=8)try{e.style[i]=a}catch(e){console.log("Error setting ["+i+"] to ["+a+"]")}else e.style[i]=a;d.debug>=2&&console.log("Set "+r+" ("+i+"): "+a)}return[i,a]},flushTransformCache:function(e){var t,r,a,o="";for(t in p.data(e,s).transformCache)r=p.data(e,s).transformCache[t],"transformPerspective"!==t?(9===u&&"rotateZ"===t&&(t="rotate"),o+=t+r+" "):a=r;a&&(o="perspective"+a+" "+o),g.setPropertyValue(e,"transform",o)}};g.Hooks.register(),g.Normalizations.register(),d.animate=function(){function e(e){var t=e;return"string"==typeof e?d.Easings[e]||(t=!1):t=!!n(e)&&i.apply(null,e),!1===t&&(t=d.Easings[d.defaults.easing]?d.defaults.easing:"swing"),t}function c(){function t(t){function P(t){var r=a,l=a,s=a;return n(t)?(r=t[0],!n(t[1])&&/^[\d-]/.test(t[1])||o(t[1])?s=t[1]:("string"==typeof t[1]||n(t[1]))&&(l=e(t[1]),t[2]&&(s=t[2]))):r=t,l=l||c.easing,o(r)&&(r=r.call(i,b,v)),o(s)&&(s=s.call(i,b,v)),[r||0,l,s]}function w(e,t){var r,a;return a=(t||0).toString().toLowerCase().replace(/[%A-z]+$/,function(e){return r=e,""}),r||(r=g.Values.getUnitType(e)),[a,r]}if(0===b&&m&&o(m.begin)){var C=h.jquery?h.get():h;m.begin.call(C,C)}if("scroll"===x){var k,T,H,R=/^x$/i.test(c.axis)?"Left":"Top",E=parseFloat(c.offset)||0;c.container?c.container.jquery||c.container.nodeType?(c.container=c.container[0]||c.container,H=(k=c.container["scroll"+R])+p(i).position()[R.toLowerCase()]+E):c.container=null:(k=d.State.scrollAnchor[d.State["scrollProperty"+R]],T=d.State.scrollAnchor[d.State["scrollProperty"+("Left"===R?"Top":"Left")]],H=p(i).offset()[R.toLowerCase()]+E),f={scroll:{rootPropertyValue:!1,startValue:k,currentValue:k,endValue:H,unitType:"",easing:c.easing,scrollData:{container:c.container,direction:R,alternateValue:T}},element:i}}else if("reverse"===x){if(!p.data(i,s).tweensContainer)return void p.dequeue(i,c.queue);"none"===p.data(i,s).opts.display&&(p.data(i,s).opts.display="block"),p.data(i,s).opts.loop=!1,p.data(i,s).opts.begin=null,p.data(i,s).opts.complete=null,c=p.extend({},p.data(i,s).opts,m);N=p.extend(!0,{},p.data(i,s).tweensContainer);for(var A in N)if("element"!==A){var z=N[A].startValue;N[A].startValue=N[A].currentValue=N[A].endValue,N[A].endValue=z,m&&(N[A].easing=c.easing)}f=N}else if("start"===x){var N;p.data(i,s).tweensContainer&&!0===p.data(i,s).isAnimating&&(N=p.data(i,s).tweensContainer);for(var q in y){var j=P(y[q]),F=j[0],M=j[1],L=j[2];q=g.Names.camelCase(q);var B=g.Hooks.getRoot(q),W=!1;if(!1!==g.Names.prefixCheck(B)[1]||g.Normalizations.registered[B]!==a){c.display&&"none"!==c.display&&/opacity|filter/.test(q)&&!L&&0!==F&&(L=0),c._cacheValues&&N&&N[q]?(L===a&&(L=N[q].endValue+N[q].unitType),W=p.data(i,s).rootPropertyValueCache[B]):g.Hooks.registered[q]?L===a?(W=g.getPropertyValue(i,B),L=g.getPropertyValue(i,q,W)):W=g.Hooks.templates[B][1]:L===a&&(L=g.getPropertyValue(i,q));var X,Y,$,I;L=(X=w(q,L))[0],$=X[1],F=(X=w(q,F))[0].replace(/^([+-\/*])=/,function(e,t){return I=t,""}),Y=X[1],L=parseFloat(L)||0,F=parseFloat(F)||0;var O;if("%"===Y&&(/^(fontSize|lineHeight)$/.test(q)?(F/=100,Y="em"):/^scale/.test(q)?(F/=100,Y=""):/(Red|Green|Blue)$/i.test(q)&&(F=F/100*255,Y="")),/[\/*]/.test(I))Y=$;else if($!==Y&&0!==L)if(0===F)Y=$;else{O=O||function(){var e={parent:i.parentNode,position:g.getPropertyValue(i,"position"),fontSize:g.getPropertyValue(i,"fontSize")},t=e.position===V.lastPosition&&e.parent===V.lastParent,a=e.fontSize===V.lastFontSize&&e.parent===V.lastParent;V.lastParent=e.parent,V.lastPosition=e.position,V.lastFontSize=e.fontSize,null===V.remToPxRatio&&(V.remToPxRatio=parseFloat(g.getPropertyValue(r.body,"fontSize"))||16);var o={overflowX:null,overflowY:null,boxSizing:null,width:null,minWidth:null,maxWidth:null,height:null,minHeight:null,maxHeight:null,paddingLeft:null},n={};if(n.remToPxRatio=V.remToPxRatio,u)var l=/^auto$/i.test(i.currentStyle.width),s=/^auto$/i.test(i.currentStyle.height);t&&a||(o.overflowX=g.getPropertyValue(i,"overflowX"),o.overflowY=g.getPropertyValue(i,"overflowY"),o.boxSizing=g.getPropertyValue(i,"boxSizing"),o.width=g.getPropertyValue(i,"width",null,!0),o.minWidth=g.getPropertyValue(i,"minWidth"),o.maxWidth=g.getPropertyValue(i,"maxWidth")||"none",o.height=g.getPropertyValue(i,"height",null,!0),o.minHeight=g.getPropertyValue(i,"minHeight"),o.maxHeight=g.getPropertyValue(i,"maxHeight")||"none",o.paddingLeft=g.getPropertyValue(i,"paddingLeft")),t?(n.percentToPxRatioWidth=V.lastPercentToPxWidth,n.percentToPxRatioHeight=V.lastPercentToPxHeight):(g.setPropertyValue(i,"overflowX","hidden"),g.setPropertyValue(i,"overflowY","hidden"),g.setPropertyValue(i,"boxSizing","content-box"),g.setPropertyValue(i,"width","10%"),g.setPropertyValue(i,"minWidth","10%"),g.setPropertyValue(i,"maxWidth","10%"),g.setPropertyValue(i,"height","10%"),g.setPropertyValue(i,"minHeight","10%"),g.setPropertyValue(i,"maxHeight","10%")),a?n.emToPxRatio=V.lastEmToPx:g.setPropertyValue(i,"paddingLeft","10em"),t||(n.percentToPxRatioWidth=V.lastPercentToPxWidth=(parseFloat(g.getPropertyValue(i,"width",null,!0))||1)/10,n.percentToPxRatioHeight=V.lastPercentToPxHeight=(parseFloat(g.getPropertyValue(i,"height",null,!0))||1)/10),a||(n.emToPxRatio=V.lastEmToPx=(parseFloat(g.getPropertyValue(i,"paddingLeft"))||1)/10);for(var c in o)null!==o[c]&&g.setPropertyValue(i,c,o[c]);return u?(l&&g.setPropertyValue(i,"width","auto"),s&&g.setPropertyValue(i,"height","auto")):(g.setPropertyValue(i,"height","auto"),o.height!==g.getPropertyValue(i,"height",null,!0)&&g.setPropertyValue(i,"height",o.height),g.setPropertyValue(i,"width","auto"),o.width!==g.getPropertyValue(i,"width",null,!0)&&g.setPropertyValue(i,"width",o.width)),d.debug>=1&&console.log("Unit ratios: "+JSON.stringify(n),i),n}();var Q=/margin|padding|left|right|width|text|word|letter/i.test(q)||/X$/.test(q)?"x":"y";switch($){case"%":L*="x"===Q?O.percentToPxRatioWidth:O.percentToPxRatioHeight;break;case"em":L*=O.emToPxRatio;break;case"rem":L*=O.remToPxRatio}switch(Y){case"%":L*=1/("x"===Q?O.percentToPxRatioWidth:O.percentToPxRatioHeight);break;case"em":L*=1/O.emToPxRatio;break;case"rem":L*=1/O.remToPxRatio}}switch(I){case"+":F=L+F;break;case"-":F=L-F;break;case"*":F*=L;break;case"/":F=L/F}f[q]={rootPropertyValue:W,startValue:L,currentValue:L,endValue:F,unitType:Y,easing:M},d.debug&&console.log("tweensContainer ("+q+"): "+JSON.stringify(f[q]),i)}else d.debug&&console.log("Skipping ["+B+"] due to a lack of browser support.")}f.element=i}f.element&&(S.push(f),p.data(i,s).tweensContainer=f,p.data(i,s).opts=c,p.data(i,s).isAnimating=!0,b===v-1?(d.State.calls.length>1e4&&(d.State.calls=function(e){for(var t=-1,r=e?e.length:0,a=[];++t<r;){var o=e[t];o&&a.push(o)}return a}(d.State.calls)),d.State.calls.push([S,h,c]),!1===d.State.isTicking&&(d.State.isTicking=!0,l())):b++)}var i=this,c=p.extend({},d.defaults,m),f={};if("stop"===x)return p.queue(i,"string"==typeof m?m:"",[]),!0;switch(p.data(i,s)===a&&p.data(i,s,{isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}}),c.duration.toString().toLowerCase()){case"fast":c.duration=200;break;case"normal":c.duration=400;break;case"slow":c.duration=600;break;default:c.duration=parseFloat(c.duration)||1}c.easing=e(c.easing),/^\d/.test(c.delay)&&p.queue(i,c.queue,function(e){d.velocityQueueEntryFlag=!0,setTimeout(e,parseFloat(c.delay))}),c.display&&(c.display=c.display.toString().toLowerCase()),c.mobileHA=c.mobileHA&&d.State.isMobile,!1===c.queue?t():p.queue(i,c.queue,function(e){d.velocityQueueEntryFlag=!0,t()}),""!==c.queue&&"fx"!==c.queue||"inprogress"===p.queue(i)[0]||p.dequeue(i)}var f,h,y,m;this.jquery||t.Zepto&&t.Zepto.zepto.isZ(this)?(f=!0,h=this,y=arguments[0],m=arguments[1]):(f=!1,h=arguments[0].jquery?arguments[0].get():arguments[0],y=arguments[1],m=arguments[2]);var v=h.length||1,b=0;if("stop"!==y&&!p.isPlainObject(m)){m={};for(var P=f?1:2;P<arguments.length;P++)!n(arguments[P])&&/^\d/.test(arguments[P])?m.duration=parseFloat(arguments[P]):"string"==typeof arguments[P]?m.easing=arguments[P]:n(arguments[P])&&4===arguments[P].length?m.easing=arguments[P]:o(arguments[P])&&(m.complete=arguments[P])}var x;switch(y){case"scroll":x="scroll";break;case"reverse":x="reverse";break;case"stop":x="stop";break;default:if(!p.isPlainObject(y)||p.isEmptyObject(y))return"string"==typeof y&&d.Sequences[y]?(p.each(h,function(e,t){d.Sequences[y].call(t,t,m||{},e,v)}),h):(d.debug&&console.log("First argument was not a property map, a known action, or a registered sequence. Aborting."),h);x="start"}var V={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPxRatio:null},S=[];if(m&&m.complete&&!o(m.complete)&&(m.complete=null),f)h.each(c);else if(h.nodeType)c.call(h);else if(h[0]&&h[0].nodeType)for(var w in h)c.call(h[w]);var C,k=p.extend({},d.defaults,m);if(k.loop=parseInt(k.loop),C=2*k.loop-1,k.loop)for(var T=0;T<C;T++){var H={delay:k.delay};k.complete&&T===C-1&&(H.complete=k.complete),f?h.velocity("reverse",H):d.animate(h,"reverse",H)}return h};var f=t.jQuery||t.Zepto;f&&(f.fn.velocity=d.animate,f.fn.velocity.defaults=d.defaults),p.each(["Down","Up"],function(e,t){d.Sequences["slide"+t]=function(e,r){var a=p.extend({},r),o={height:null,marginTop:null,marginBottom:null,paddingTop:null,paddingBottom:null,overflow:null,overflowX:null,overflowY:null},n=a.begin,i=a.complete,l=!1;a.display="Down"===t?a.display||"block":a.display||"none",a.begin=function(){function r(){e.style.display="block",o.height=d.CSS.getPropertyValue(e,"height"),e.style.height="auto",d.CSS.getPropertyValue(e,"height")===o.height&&(l=!0),d.CSS.setPropertyValue(e,"height",o.height+"px")}if("Down"===t){o.overflow=[d.CSS.getPropertyValue(e,"overflow"),0],o.overflowX=[d.CSS.getPropertyValue(e,"overflowX"),0],o.overflowY=[d.CSS.getPropertyValue(e,"overflowY"),0],e.style.overflow="hidden",e.style.overflowX="visible",e.style.overflowY="hidden",r();for(var a in o)/^overflow/.test(a)||(o[a]=[d.CSS.getPropertyValue(e,a),0]);e.style.display="none"}else{r();for(var a in o)o[a]=[0,d.CSS.getPropertyValue(e,a)];e.style.overflow="hidden",e.style.overflowX="visible",e.style.overflowY="hidden"}n&&n.call(e,e)},a.complete=function(e){var r="Down"===t?0:1;!0===l?o.height[r]="auto":o.height[r]+="px";for(var a in o)e.style[a]=o[a][r];i&&i.call(e,e)},d.animate(e,o,a)}}),p.each(["In","Out"],function(e,t){d.Sequences["fade"+t]=function(e,r,a,o){var n=p.extend({},r),i={opacity:"In"===t?1:0};a!==o-1&&(n.complete=n.begin=null),n.display||(n.display="In"===t?d.CSS.Values.getDisplayType(e):"none"),d.animate(this,i,n)}})}(window.jQuery||window.Zepto||window,window,document);
//# sourceMappingURL=/sm/1ff2b43f3cc8a6c357fc6093ad15f5a0341e8f3c511f61896ae741f614543f07.map