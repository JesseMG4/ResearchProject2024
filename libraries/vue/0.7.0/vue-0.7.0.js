/**
 * Minified by jsDelivr using UglifyJS v3.1.10.
 * Original file: /npm/vue@0.7.0/src/main.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
function extend(t){var i=this;t=inheritOptions(t,i.options,!0),utils.processOptions(t);var e=function(e,r){r||(e=inheritOptions(e,t,!0)),i.call(this,e,!0)},r=e.prototype=Object.create(i.prototype);utils.defProtected(r,"constructor",e);var n=t.methods;if(n)for(var o in n)o in ViewModel.prototype||"function"!=typeof n[o]||(r[o]=n[o]);return e.extend=extend,e.super=i,e.options=t,e}function inheritOptions(t,i,e){if(t=t||utils.hash(),!i)return t;for(var r in i)if("el"!==r&&"methods"!==r){var n=t[r],o=i[r],s=utils.typeOf(n);e&&"Function"===s&&o?t[r]=mergeHook(n,o):e&&"Object"===s?inheritOptions(n,o):void 0===n&&(t[r]=o)}return t}function mergeHook(t,i){return function(e){i.call(this,e),t.call(this,e)}}function updatePrefix(){specialAttributes.forEach(setPrefix)}function setPrefix(t){config.attrs[t]=config.prefix+"-"+t}var config=require("./config"),ViewModel=require("./viewmodel"),directives=require("./directives"),filters=require("./filters"),utils=require("./utils");ViewModel.config=function(t){return t&&(utils.extend(config,t),t.prefix&&updatePrefix()),this},ViewModel.directive=function(t,i){return i?(directives[t]=i,this):directives[t]},ViewModel.filter=function(t,i){return i?(filters[t]=i,this):filters[t]},ViewModel.component=function(t,i){return i?(utils.components[t]=utils.toConstructor(i),this):utils.components[t]},ViewModel.partial=function(t,i){return i?(utils.partials[t]=utils.toFragment(i),this):utils.partials[t]},ViewModel.transition=function(t,i){return i?(utils.transitions[t]=i,this):utils.transitions[t]},ViewModel.extend=extend;var specialAttributes=["pre","text","repeat","partial","component","component-id","transition"];updatePrefix(),module.exports=ViewModel;
//# sourceMappingURL=/sm/61d501d6b36a4c2b7310e41601fba102bf3b09b4ad5aa926b77c13642ad77841.map