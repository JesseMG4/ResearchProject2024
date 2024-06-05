/**
 * Minified by jsDelivr using UglifyJS v3.1.10.
 * Original file: /npm/vue@0.8.4/src/main.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
function extend(t){var i=this;t=inheritOptions(t,i.options,!0),utils.processOptions(t);var e=function(e,n){n||(e=inheritOptions(e,t,!0)),i.call(this,e,!0)},n=e.prototype=Object.create(i.prototype);utils.defProtected(n,"constructor",e);var r=t.methods;if(r)for(var o in r)o in ViewModel.prototype||"function"!=typeof r[o]||(n[o]=r[o]);return e.extend=extend,e.super=i,e.options=t,e}function inheritOptions(t,i,e){if(t=t||utils.hash(),!i)return t;for(var n in i)if("el"!==n&&"methods"!==n){var r=t[n],o=i[n],s=utils.typeOf(r);e&&"Function"===s&&o?(t[n]=[r],Array.isArray(o)?t[n]=t[n].concat(o):t[n].push(o)):e&&"Object"===s?inheritOptions(r,o):void 0===r&&(t[n]=o)}return t}var config=require("./config"),ViewModel=require("./viewmodel"),directives=require("./directives"),filters=require("./filters"),utils=require("./utils");ViewModel.config=function(t,i){if("string"==typeof t){if(void 0===i)return config[t];config[t]=i}else utils.extend(config,t);return this},ViewModel.directive=function(t,i){return i?(directives[t]=i,this):directives[t]},ViewModel.filter=function(t,i){return i?(filters[t]=i,this):filters[t]},ViewModel.component=function(t,i){return i?(utils.components[t]=utils.toConstructor(i),this):utils.components[t]},ViewModel.partial=function(t,i){return i?(utils.partials[t]=utils.toFragment(i),this):utils.partials[t]},ViewModel.transition=function(t,i){return i?(utils.transitions[t]=i,this):utils.transitions[t]},ViewModel.extend=extend,ViewModel.nextTick=utils.nextTick,module.exports=ViewModel;
//# sourceMappingURL=/sm/5b1780a264183ea2a9376a2c1263d8ce312e8487efc27502f0408a50eaf9e60d.map