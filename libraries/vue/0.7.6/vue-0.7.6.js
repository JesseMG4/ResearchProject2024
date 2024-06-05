/**
 * Minified by jsDelivr using UglifyJS v3.1.10.
 * Original file: /npm/vue@0.7.6/src/main.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
function extend(t){var i=this;t=inheritOptions(t,i.options,!0),utils.processOptions(t);var e=function(e,n){n||(e=inheritOptions(e,t,!0)),i.call(this,e,!0)},n=e.prototype=Object.create(i.prototype);utils.defProtected(n,"constructor",e);var o=t.methods;if(o)for(var r in o)r in ViewModel.prototype||"function"!=typeof o[r]||(n[r]=o[r]);return e.extend=extend,e.super=i,e.options=t,e}function inheritOptions(t,i,e){if(t=t||utils.hash(),!i)return t;for(var n in i)if("el"!==n&&"methods"!==n){var o=t[n],r=i[n],s=utils.typeOf(o);e&&"Function"===s&&r?t[n]=mergeHook(o,r):e&&"Object"===s?inheritOptions(o,r):void 0===o&&(t[n]=r)}return t}function mergeHook(t,i){return function(e){i.call(this,e),t.call(this,e)}}var config=require("./config"),ViewModel=require("./viewmodel"),directives=require("./directives"),filters=require("./filters"),utils=require("./utils");ViewModel.config=function(t,i){if("string"==typeof t){if(void 0===i)return config[t];config[t]=i}else utils.extend(config,t);return this},ViewModel.directive=function(t,i){return i?(directives[t]=i,this):directives[t]},ViewModel.filter=function(t,i){return i?(filters[t]=i,this):filters[t]},ViewModel.component=function(t,i){return i?(utils.components[t]=utils.toConstructor(i),this):utils.components[t]},ViewModel.partial=function(t,i){return i?(utils.partials[t]=utils.toFragment(i),this):utils.partials[t]},ViewModel.transition=function(t,i){return i?(utils.transitions[t]=i,this):utils.transitions[t]},ViewModel.extend=extend,ViewModel.nextTick=utils.nextTick,module.exports=ViewModel;
//# sourceMappingURL=/sm/332091a000444453f38740a933ece88ce264d6d3611ea419ec026480ea2ad808.map