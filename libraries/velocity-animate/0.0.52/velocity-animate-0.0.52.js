/**
 * Minified by jsDelivr using UglifyJS v3.1.10.
 * Original file: /npm/velocity-animate@0.0.52/jquery.velocity.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(e,t,a,r){function o(e){return"[object Function]"===Object.prototype.toString.call(e)}function n(e){return"[object Array]"===Object.prototype.toString.call(e)}function i(e,t,a,r){function o(e,t){return 1-3*t+3*e}function n(e,t){return 3*t-6*e}function i(e){return 3*e}function l(e,t,a){return((o(t,a)*e+n(t,a))*e+i(t))*e}function s(e,t,a){return 3*o(t,a)*e*e+2*n(t,a)*e+i(t)}if(4!==arguments.length)return!1;for(var u=0;u<4;++u)if("number"!=typeof arguments[u]||isNaN(arguments[u])||!isFinite(arguments[u]))return!1;e=Math.min(e,1),a=Math.min(a,1),e=Math.max(e,0),a=Math.max(a,0);return function(o){return e===t&&a===r?o:l(function(t){for(var r=t,o=0;o<8;++o){var n=s(r,e,a);if(0===n)return r;r-=(l(r,e,a)-t)/n}return r}(o),t,r)}}function l(t){if(t)for(var a=(new Date).getTime(),o=0,n=e.velocity.State.calls.length;o<n;o++)if(e.velocity.State.calls[o]){var i=e.velocity.State.calls[o],s=i[0],g=i[2],d=i[3];d||(d=e.velocity.State.calls[o][3]=a-16);for(var f=Math.min((a-d)/g.duration,1),y=0,m=s.length;y<m;y++){var v=s[y],h=v.element;if(e.data(h,c)){var P=!1;g.display&&"none"!==g.display&&(p.setPropertyValue(h,"display",g.display),e.velocity.State.calls[o][2].display=!1);for(var x in v)if("element"!==x){var b,V=v[x],S="string"==typeof V.easing?e.easing[V.easing]:V.easing;if(b=1===f?V.endValue:V.startValue+(V.endValue-V.startValue)*S(f),V.currentValue=b,p.Hooks.registered[x]){var w=p.Hooks.getRoot(x),k=e.data(h,c).rootPropertyValueCache[w];k&&(V.rootPropertyValue=k)}var C=p.setPropertyValue(h,x,V.currentValue+("auto"===b?"":V.unitType),V.rootPropertyValue,V.scrollContainer);p.Hooks.registered[x]&&(p.Normalizations.registered[w]?e.data(h,c).rootPropertyValueCache[w]=p.Normalizations.registered[w]("extract",null,C[1]):e.data(h,c).rootPropertyValueCache[w]=C[1]),"transform"===C[0]&&(P=!0)}g.mobileHA&&(e.data(h,c).transformCache.translate3d===r?(e.data(h,c).transformCache.translate3d="(0, 0, 0)",P=!0):1===f&&(delete e.data(h,c).transformCache.translate3d,P=!0)),P&&p.flushTransformCache(h)}}1===f&&function(t){for(var a=e.velocity.State.calls[t][0],o=e.velocity.State.calls[t][1],n=e.velocity.State.calls[t][2],i=!1,l=0,s=a.length;l<s;l++){var u=a[l].element;if("none"!==n.display||n.loop||p.setPropertyValue(u,"display",n.display),e.queue(u)[1]!==r&&/\$\.velocity\.queueEntryFlag/i.test(e.queue(u)[1])||e.data(u,c)&&(e.data(u,c).isAnimating=!1,e.data(u,c).rootPropertyValueCache={}),l===s-1&&!n.loop&&n.complete){var g=o.jquery?o.get():o;n.complete.call(g,g)}!1!==n.queue&&e.dequeue(u,n.queue)}e.velocity.State.calls[t]=!1;for(var d=0,f=e.velocity.State.calls.length;d<f;d++)if(!1!==e.velocity.State.calls[d]){i=!0;break}!1===i&&(e.velocity.State.isTicking=!1,delete e.velocity.State.calls,e.velocity.State.calls=[])}(o)}e.velocity.State.isTicking&&setTimeout(function(){u(l)},0)}var s=function(){if(a.documentMode)return a.documentMode;for(var e=7;e>4;e--){var t=a.createElement("div");if(t.innerHTML="\x3c!--[if IE "+e+"]><span></span><![endif]--\x3e",t.getElementsByTagName("span").length)return t=null,e}return r}(),u=t.requestAnimationFrame||function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var a,r=(new Date).getTime();return a=Math.max(0,16-(r-e)),e=r+a,setTimeout(function(){t(r+a)},a)}}();if(s<=7)e.fn.velocity=e.fn.animate;else if(e.velocity===r&&e.fn.velocity===r){!function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,a){t[a]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,a=4;e<((t=Math.pow(2,--a))-1)/11;);return 1/Math.pow(4,3-a)-7.5625*Math.pow((3*t-2)/22-e,2)}}),e.each(t,function(t,a){e.easing["easeIn"+t]=a,e.easing["easeOut"+t]=function(e){return 1-a(1-e)},e.easing["easeInOut"+t]=function(e){return e<.5?a(2*e)/2:1-a(-2*e+2)/2}}),e.easing.spring=function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)},e.easing.ease=i(.25,.1,.25,1),e.easing["ease-in"]=i(.42,0,1,1),e.easing["ease-out"]=i(0,0,.58,1),e.easing["ease-in-out"]=i(.42,0,.58,1)}();var c="velocity";e.velocity={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),prefixElement:a.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollProperty:null,isTicking:!1,calls:[]},CSS:{},Sequences:{},animate:function(){},debug:!1},t.pageYOffset!==r?(e.velocity.State.scrollAnchor=t,e.velocity.State.scrollProperty="pageYOffset"):(e.velocity.State.scrollAnchor=a.documentElement||a.body.parentNode||a.body,e.velocity.State.scrollProperty="scrollTop");var p=e.velocity.CSS={RegEx:{valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Hooks:{templates:{color:["Red Green Blue Alpha","255 255 255 1"],backgroundColor:["Red Green Blue Alpha","255 255 255 1"],borderColor:["Red Green Blue Alpha","255 255 255 1"],outlineColor:["Red Green Blue Alpha","255 255 255 1"],textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0%"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){var e,t,a;if(s)for(e in p.Hooks.templates){a=(t=p.Hooks.templates[e])[0].split(" ");var r=t[1].match(p.RegEx.valueSplit);"Color"===a[0]&&(a.push(a.shift()),r.push(r.shift()),p.Hooks.templates[e]=[a.join(" "),r.join(" ")])}for(e in p.Hooks.templates){a=(t=p.Hooks.templates[e])[0].split(" ");for(var o in a){var n=e+a[o],i=o;p.Hooks.registered[n]=[e,i]}}},getRoot:function(e){var t=p.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return p.RegEx.valueUnwrap.test(t)&&(t=t.match(p.Hooks.RegEx.valueUnwrap)[1]),p.Values.isCSSNullValue(t)&&(t=p.Hooks.templates[e][1]),t},extractValue:function(e,t){var a=p.Hooks.registered[e];if(a){var r=a[0],o=a[1];return(t=p.Hooks.cleanRootPropertyValue(r,t)).toString().match(p.RegEx.valueSplit)[o]}return t},injectValue:function(e,t,a){var r=p.Hooks.registered[e];if(r){var o,n=r[0],i=r[1];return a=p.Hooks.cleanRootPropertyValue(n,a),o=a.toString().match(p.RegEx.valueSplit),o[i]=t,o.join(" ")}return a}},Normalizations:{registered:{clip:function(e,t,a){switch(e){case"name":return"clip";case"extract":var r;return p.RegEx.wrappedValueAlreadyExtracted.test(a)?r=a:(r=a.toString().match(p.RegEx.valueUnwrap))&&(r=r[1].replace(/,(\s+)?/g," ")),r;case"inject":return"rect("+a+")"}},opacity:function(e,t,a){if(s<=8)switch(e){case"name":return"filter";case"extract":var r=a.toString().match(/alpha\(opacity=(.*)\)/i);return a=r?r[1]/100:1;case"inject":return t.style.zoom=1,"alpha(opacity="+parseInt(100*a)+")"}else switch(e){case"name":return"opacity";case"extract":case"inject":return a}}},register:function(){var t=["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"];s<=9||(t=t.concat(["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]));for(var a=0,o=t.length;a<o;a++)!function(){var o=t[a];p.Normalizations.registered[o]=function(t,a,n){switch(t){case"name":return"transform";case"extract":return e.data(a,c).transformCache[o]===r?/^scale/i.test(o)?1:0:e.data(a,c).transformCache[o].replace(/[()]/g,"");case"inject":var i=!1;switch(o.substr(0,o.length-1)){case"translate":i=!/(%|px|em|rem|\d)$/i.test(n);break;case"scale":i=!/(\d)$/i.test(n);break;case"skew":case"rotate":i=!/(deg|\d)$/i.test(n)}return i||(e.data(a,c).transformCache[o]="("+n+")"),e.data(a,c).transformCache[o]}}}();for(var n=["color","backgroundColor","borderColor","outlineColor"],a=0,i=n.length;a<i;a++)!function(){var e=n[a];p.Normalizations.registered[e]=function(t,a,o){switch(t){case"name":return e;case"extract":var n;if(p.RegEx.wrappedValueAlreadyExtracted.test(o))n=o;else{var i,l={aqua:"rgb(0, 255, 255);",black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",fuchsia:"rgb(255, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",lime:"rgb(0, 255, 0)",maroon:"rgb(128, 0, 0)",navy:"rgb(0, 0, 128)",olive:"rgb(128, 128, 0)",purple:"rgb(128, 0, 128)",red:"rgb(255, 0, 0)",silver:"rgb(192, 192, 192)",teal:"rgb(0, 128, 128)",white:"rgb(255, 255, 255)",yellow:"rgb(255, 255, 0)"};/^[A-z]+$/i.test(o)?i=l[o]!==r?l[o]:l.black:/^#([A-f\d]{3}){1,2}$/i.test(o)?i=function(e){var t;return e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,a,r){return t+t+a+a+r+r}),(t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e))?"rgb("+parseInt(t[1],16)+" "+parseInt(t[2],16)+" "+parseInt(t[3],16)+")":"rgb(0 0 0)"}(o):/^rgba?\(/i.test(o)||(i=l.black),n=(i||o).toString().match(p.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return s<=8||3!==n.split(" ").length||(n+=" 1"),n;case"inject":return s<=8?4===o.split(" ").length&&(o=o.split(/\s+/).slice(0,3).join(" ")):3===o.split(" ").length&&(o+=" 1"),(s<=8?"rgb":"rgba")+"("+o.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},prefixCheck:function(t){if(e.velocity.State.prefixMatches[t])return[e.velocity.State.prefixMatches[t],!0];for(var a=["","Webkit","Moz","ms","O"],r=0,o=a.length;r<o;r++){var n;if(n=0===r?t:a[r]+t.replace(/^\w/,function(e){return e.toUpperCase()}),"string"==typeof e.velocity.State.prefixElement.style[n])return e.velocity.State.prefixMatches[t]=n,[n,!0]}return[t,!1]}},Values:{isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|opacity|alpha|fillOpacity|flexGrow|flexHeight|zIndex|fontWeight)$)|color/i.test(e)?"":"px"}},getPropertyValue:function(a,o,n,i){function l(a,o){var n=0;if(s<=8)n=e.css(a,o);else{if(!i){if("height"===o&&"border-box"!==p.getPropertyValue(a,"boxSizing").toLowerCase())return a.offsetHeight-(parseFloat(p.getPropertyValue(a,"borderTopWidth"))||0)-(parseFloat(p.getPropertyValue(a,"borderBottomWidth"))||0)-(parseFloat(p.getPropertyValue(a,"paddingTop"))||0)-(parseFloat(p.getPropertyValue(a,"paddingBottom"))||0);if("width"===o&&"border-box"!==p.getPropertyValue(a,"boxSizing").toLowerCase())return a.offsetWidth-(parseFloat(p.getPropertyValue(a,"borderLeftWidth"))||0)-(parseFloat(p.getPropertyValue(a,"borderRightWidth"))||0)-(parseFloat(p.getPropertyValue(a,"paddingLeft"))||0)-(parseFloat(p.getPropertyValue(a,"paddingRight"))||0)}var u;u=e.data(a,c)===r?t.getComputedStyle(a,null):e.data(a,c).computedStyle?e.data(a,c).computedStyle:e.data(a,c).computedStyle=t.getComputedStyle(a,null),s&&"borderColor"===o&&(o="borderTopColor"),""===(n=9===s&&"filter"===o?u.getPropertyValue(o):u[o])&&(n=a.style[o])}if("auto"===n&&/^(top|right|bottom|left)$/i.test(o)){var g=l(a,"position");("fixed"===g||"absolute"===g&&/top|left/i.test(o))&&(n=e(a).position()[o]+"px")}return n}var u;if(p.Hooks.registered[o]){var g=o,d=p.Hooks.getRoot(g);n===r&&(n=p.getPropertyValue(a,p.Names.prefixCheck(d)[0])),p.Normalizations.registered[d]&&(n=p.Normalizations.registered[d]("extract",a,n)),u=p.Hooks.extractValue(g,n)}else if(p.Normalizations.registered[o]){var f,y;"transform"!==(f=p.Normalizations.registered[o]("name",a))&&(y=l(a,p.Names.prefixCheck(f)[0]),p.Values.isCSSNullValue(y)&&p.Hooks.templates[o]&&(y=p.Hooks.templates[o][1])),u=p.Normalizations.registered[o]("extract",a,y)}return/^[\d-]/.test(u)||(u=l(a,p.Names.prefixCheck(o)[0])),p.Values.isCSSNullValue(u)&&(u=0),e.velocity.debug>=2&&console.log("Get "+o+": "+u),u},setPropertyValue:function(a,r,o,n,i){var l=r;if("scroll"===r)i?i.scrollTop=o:t.scrollTo(null,o);else if(p.Normalizations.registered[r]&&"transform"===p.Normalizations.registered[r]("name",a))p.Normalizations.registered[r]("inject",a,o),l="transform",o=e.data(a,c).transformCache[r];else{if(p.Hooks.registered[r]){var u=r,g=p.Hooks.getRoot(r);n=n||p.getPropertyValue(a,g),o=p.Hooks.injectValue(u,o,n),r=g}if(p.Normalizations.registered[r]&&(o=p.Normalizations.registered[r]("inject",a,o),r=p.Normalizations.registered[r]("name",a)),l=p.Names.prefixCheck(r)[0],s<=8)try{a.style[l]=o}catch(e){console.log("Error setting ["+l+"] to ["+o+"]")}else a.style[l]=o;e.velocity.debug>=2&&console.log("Set "+r+" ("+l+"): "+o)}return[l,o]},flushTransformCache:function(t){var a,r,o,n="";for(a in e.data(t,c).transformCache)r=e.data(t,c).transformCache[a],"transformPerspective"!==a?(9===s&&"rotateZ"===a&&(a="rotate"),n+=a+r+" "):o=r;o&&(n="perspective"+o+" "+n),p.setPropertyValue(t,"transform",n)}};p.Hooks.register(),p.Normalizations.register(),e.fn.velocity=e.velocity.animate=function(){function t(t){var a=t;return"string"==typeof t?e.easing[t]||(a=!1):a=!!n(t)&&i.apply(null,t),!1===a&&(a=e.easing[e.fn.velocity.defaults.easing]?e.fn.velocity.defaults.easing:"swing"),a}function s(){function i(i){function b(e){var a=r,i=r,l=r;return n(e)?(a=e[0],!n(e[1])&&/^[\d-]/.test(e[1])||o(e[1])?l=e[1]:("string"==typeof e[1]||n(e[1]))&&(i=t(e[1]),e[2]&&(l=e[2]))):a=e,i=i||u.easing,o(a)&&(a=a.call(s,m,y)),o(l)&&(l=l.call(s,m,y)),[a||0,i,l]}function V(e,t){var a,r;return r=(t||0).toString().toLowerCase().replace(/[%A-z]+$/,function(e){return a=e,""}),a||(a=p.Values.getUnitType(e)),[r,a]}if(e.velocity.queueEntryFlag=!0,0===m&&f&&o(f.begin)){var S=g.jquery?g.get():g;f.begin.call(S,S)}if("scroll"===h){var w,k,C=parseFloat(u.offset)||0;u.container?u.container.jquery||u.container.nodeType?(u.container=u.container[0]||u.container,k=(w=u.container.scrollTop)+e(s).position().top+C):u.container=null:(w=e.velocity.State.scrollAnchor[e.velocity.State.scrollProperty],k=e(s).offset().top+C),v={scroll:{rootPropertyValue:!1,startValue:w,currentValue:w,endValue:k,unitType:"",easing:u.easing,scrollContainer:u.container},element:s}}else if("reverse"===h){if(!e.data(s,c).tweensContainer)return void e.dequeue(s,u.queue);"none"===e.data(s,c).opts.display&&(e.data(s,c).opts.display="block"),e.data(s,c).opts.loop=!1,e.data(s,c).opts.begin=null,e.data(s,c).opts.complete=null,u=e.extend({},e.data(s,c).opts,f);R=e.extend(!0,{},e.data(s,c).tweensContainer);for(var T in R)if("element"!==T){var H=R[T].startValue;R[T].startValue=R[T].currentValue=R[T].endValue,R[T].endValue=H,f&&(R[T].easing=u.easing)}v=R}else if("start"===h){var R;e.data(s,c).tweensContainer&&!0===e.data(s,c).isAnimating&&(R=e.data(s,c).tweensContainer);for(var z in d){var q=b(d[z]),N=q[0],j=q[1],A=q[2];z=p.Names.camelCase(z);var E=p.Hooks.getRoot(z),F=!1;if(!1!==p.Names.prefixCheck(E)[1]||p.Normalizations.registered[E]!==r){u.display&&"none"!==u.display&&/opacity|filter/.test(z)&&!A&&0!==N&&(A=0),u._cacheValues&&R&&R[z]?(A===r&&(A=R[z].endValue+R[z].unitType),F=e.data(s,c).rootPropertyValueCache[E]):p.Hooks.registered[z]?A===r?(F=p.getPropertyValue(s,E),A=p.getPropertyValue(s,z,F)):F=p.Hooks.templates[E][1]:A===r&&(A=p.getPropertyValue(s,z));var M,W,Y,B;A=(M=V(z,A))[0],Y=M[1],N=(M=V(z,N))[0].replace(/^([+-\/*])=/,function(e,t){return B=t,""}),W=M[1],A=parseFloat(A)||0,N=parseFloat(N)||0;var O;if("%"===W&&(/^(fontSize|lineHeight)$/.test(z)?(N/=100,W="em"):/^scale/.test(z)?(N/=100,W=""):/(Red|Green|Blue)$/i.test(z)&&(N=N/100*255,W="")),/[\/*]/.test(B))W=Y;else if(Y!==W&&0!==A)if(0===N)W=Y;else{O=O||function(){var t={parent:s.parentNode,position:p.getPropertyValue(s,"position"),fontSize:p.getPropertyValue(s,"fontSize")},r=t.position===P.lastPosition&&t.parent===P.lastParent,o=t.fontSize===P.lastFontSize;P.lastParent=t.parent,P.lastPosition=t.position,P.lastFontSize=t.fontSize,null===P.remToPxRatio&&(P.remToPxRatio=parseFloat(p.getPropertyValue(a.body,"fontSize"))||16);var n={overflowX:null,overflowY:null,boxSizing:null,width:null,minWidth:null,maxWidth:null,height:null,minHeight:null,maxHeight:null,paddingLeft:null},i={};i.remToPxRatio=P.remToPxRatio,n.overflowX=p.getPropertyValue(s,"overflowX"),n.overflowY=p.getPropertyValue(s,"overflowY"),n.boxSizing=p.getPropertyValue(s,"boxSizing"),n.width=p.getPropertyValue(s,"width",null,!0),n.minWidth=p.getPropertyValue(s,"minWidth"),n.maxWidth=p.getPropertyValue(s,"maxWidth")||"none",n.height=p.getPropertyValue(s,"height",null,!0),n.minHeight=p.getPropertyValue(s,"minHeight"),n.maxHeight=p.getPropertyValue(s,"maxHeight")||"none",n.paddingLeft=p.getPropertyValue(s,"paddingLeft"),r?(i.percentToPxRatioWidth=P.lastPercentToPxWidth,i.percentToPxRatioHeight=P.lastPercentToPxHeight):(p.setPropertyValue(s,"overflowX","hidden"),p.setPropertyValue(s,"overflowY","hidden"),p.setPropertyValue(s,"boxSizing","content-box"),p.setPropertyValue(s,"width","10%"),p.setPropertyValue(s,"minWidth","10%"),p.setPropertyValue(s,"maxWidth","10%"),p.setPropertyValue(s,"height","10%"),p.setPropertyValue(s,"minHeight","10%"),p.setPropertyValue(s,"maxHeight","10%")),o?i.emToPxRatio=P.lastEmToPx:p.setPropertyValue(s,"paddingLeft","10em"),r||(i.percentToPxRatioWidth=P.lastPercentToPxWidth=(parseFloat(p.getPropertyValue(s,"width",null,!0))||1)/10,i.percentToPxRatioHeight=P.lastPercentToPxHeight=(parseFloat(p.getPropertyValue(s,"height",null,!0))||1)/10),o||(i.emToPxRatio=P.lastEmToPx=(parseFloat(p.getPropertyValue(s,"paddingLeft"))||1)/10);for(var l in n)p.setPropertyValue(s,l,n[l]);return e.velocity.debug>=1&&console.log("Unit ratios: "+JSON.stringify(i),s),i}();var $=/margin|padding|left|right|width|text|word|letter/i.test(z)||/X$/.test(z)?"x":"y";switch(Y){case"%":A*="x"===$?O.percentToPxRatioWidth:O.percentToPxRatioHeight;break;case"em":A*=O.emToPxRatio;break;case"rem":A*=O.remToPxRatio}switch(W){case"%":A*=1/("x"===$?O.percentToPxRatioWidth:O.percentToPxRatioHeight);break;case"em":A*=1/O.emToPxRatio;break;case"rem":A*=1/O.remToPxRatio}}switch(B){case"+":N=A+N;break;case"-":N=A-N;break;case"*":N*=A;break;case"/":N=A/N}v[z]={rootPropertyValue:F,startValue:A,currentValue:A,endValue:N,unitType:W,easing:j},e.velocity.debug&&console.log("tweensContainer ("+z+"): "+JSON.stringify(v[z]),s)}else e.velocity.debug&&console.log("Skipping ["+E+"] due to a lack of browser support.")}v.element=s}v.element&&(x.push(v),e.data(s,c).tweensContainer=v,e.data(s,c).opts=u,e.data(s,c).isAnimating=!0,m===y-1?(e.velocity.State.calls.length>1e4&&(e.velocity.State.calls=function(e){for(var t=-1,a=e?e.length:0,r=[];++t<a;){var o=e[t];o&&r.push(o)}return r}(e.velocity.State.calls)),e.velocity.State.calls.push([x,g,u]),!1===e.velocity.State.isTicking&&(e.velocity.State.isTicking=!0,l())):m++)}var s=this,u=e.extend({},e.fn.velocity.defaults,f),v={};if("stop"===h)return e.queue(s,"string"==typeof f?f:"",[]),!0;switch(e.data(s,c)===r&&e.data(s,c,{isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}}),u.duration.toString().toLowerCase()){case"fast":u.duration=200;break;case"normal":u.duration=400;break;case"slow":u.duration=600;break;default:u.duration=parseFloat(u.duration)||parseFloat(e.fn.velocity.defaults.duration)||400}u.easing=t(u.easing),/^\d/.test(u.delay)&&e.queue(s,u.queue,function(t){e.velocity.queueEntryFlag=!0,setTimeout(t,parseFloat(u.delay))}),u.display&&(u.display=u.display.toLowerCase()),u.mobileHA=u.mobileHA&&e.velocity.State.isMobile,!1===u.queue?i():e.queue(s,u.queue,function(e){i()}),""!==u.queue&&"fx"!==u.queue||"inprogress"===e.queue(s)[0]||e.dequeue(s)}var u,g,d,f;this.jquery?(u=!0,g=this,d=arguments[0],f=arguments[1]):(u=!1,g=arguments[0].jquery?arguments[0].get():arguments[0],d=arguments[1],f=arguments[2]);var y=g.length||1,m=0;if("stop"!==d&&!e.isPlainObject(f)){f={};for(var v=u?1:2;v<arguments.length;v++)!n(arguments[v])&&/^\d/.test(arguments[v])?f.duration=parseFloat(arguments[v]):"string"==typeof arguments[v]?f.easing=arguments[v]:n(arguments[v])&&4===arguments[v].length?f.easing=arguments[v]:o(arguments[v])&&(f.complete=arguments[v])}var h;switch(d){case"scroll":h="scroll";break;case"reverse":h="reverse";break;case"stop":h="stop";break;default:if(!e.isPlainObject(d)||e.isEmptyObject(d))return"string"==typeof d&&e.velocity.Sequences[d]?(e.each(g,function(t,a){e.velocity.Sequences[d].call(a,a,f||{},t,y)}),g):(e.velocity.debug&&console.log("First argument was not a property map, a known action, or a registered sequence. Aborting."),g);h="start"}var P={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPxRatio:null},x=[];if(f&&f.complete&&!o(f.complete)&&(f.complete=null),u)g.each(s);else if(g.nodeType)s.call(g);else if(g[0]&&g[0].nodeType)for(var b in g)s.call(g[b]);var V,S=e.extend({},e.fn.velocity.defaults,f);if(S.loop=parseInt(S.loop),V=2*S.loop-1,S.loop)for(var w=0;w<V;w++){var k={delay:S.delay};S.complete&&w===V-1&&(k.complete=S.complete),u?g.velocity("reverse",k):e.velocity.animate(g,"reverse",k)}return g}}else console.log("Velocity is already loaded or its namespace is occupied.")}(jQuery,window,document),jQuery.fn.velocity.defaults={queue:"",duration:400,easing:"swing",complete:null,display:null,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},jQuery.each(["Down","Up"],function(e,t){jQuery.velocity.Sequences["slide"+t]=function(e,a){var r={height:null,marginTop:null,marginBottom:null,paddingTop:null,paddingBottom:null,overflow:null,overflowY:null},o=a.begin,n=a.complete;a.display="Down"===t?a.display||"block":a.display||"none",a.begin=function(){if("Down"===t){r.overflow=[jQuery.velocity.CSS.getPropertyValue(e,"overflow"),0],r.overflowY=[jQuery.velocity.CSS.getPropertyValue(e,"overflowY"),0],e.style.overflow="hidden",e.style.overflowY="hidden",e.style.height="auto",e.style.display="block";for(var a in r)/^overflow/.test(a)||(r[a]=[jQuery.velocity.CSS.getPropertyValue(e,a),0]);e.style.display="none"}else{for(var a in r)r[a]=[0,jQuery.velocity.CSS.getPropertyValue(e,a)];e.style.overflow="hidden",e.style.overflowY="hidden"}o&&o.call(e,e)},a.complete=function(e){for(var a in r)e.style[a]=r[a]["Down"===t?0:1];n&&n.call(e,e)},jQuery.velocity.animate(e,r,a)}});
//# sourceMappingURL=/sm/0b5ee597e830e57d125ba14c5202ab86e88176ae6fb9bcb20bc2c61273b7078e.map