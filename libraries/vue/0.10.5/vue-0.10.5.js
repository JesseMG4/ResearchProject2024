/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /npm/vue@0.10.5/src/main.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var config=require("./config"),ViewModel=require("./viewmodel"),utils=require("./utils"),makeHash=utils.hash,assetTypes=["directive","filter","partial","effect","component"];function extend(e){var i=this;e.data&&(e.defaultData=e.data,delete e.data),i!==ViewModel&&(e=inheritOptions(e,i.options,!0)),utils.processOptions(e);var t=function(t,r){r||(t=inheritOptions(t,e,!0)),i.call(this,t,!0)},r=t.prototype=Object.create(i.prototype);return utils.defProtected(r,"constructor",t),t.extend=extend,t.super=i,t.options=e,assetTypes.forEach((function(e){t[e]=ViewModel[e]})),t.use=ViewModel.use,t.require=ViewModel.require,t}function inheritOptions(e,i,t){if(e=e||{},!i)return e;for(var r in i)if("el"!==r){var n=e[r],o=i[r];t&&"function"==typeof n&&o?(e[r]=[n],Array.isArray(o)?e[r]=e[r].concat(o):e[r].push(o)):!t||!utils.isTrueObject(n)&&!utils.isTrueObject(o)||o instanceof ViewModel?void 0===n&&(e[r]=o):e[r]=inheritOptions(n,o)}return e}require("./observer"),require("./transition"),ViewModel.options=config.globalAssets={directives:require("./directives"),filters:require("./filters"),partials:makeHash(),effects:makeHash(),components:makeHash()},assetTypes.forEach((function(e){ViewModel[e]=function(i,t){var r=this.options[e+"s"];return r||(r=this.options[e+"s"]=makeHash()),t?("partial"===e?t=utils.toFragment(t):"component"===e?t=utils.toConstructor(t):"filter"===e&&utils.checkFilter(t),r[i]=t,this):r[i]}})),ViewModel.config=function(e,i){if("string"==typeof e){if(void 0===i)return config[e];config[e]=i}else utils.extend(config,e);return this},ViewModel.use=function(e){if("string"==typeof e)try{e=require(e)}catch(i){return void utils.warn("Cannot find plugin: "+e)}var i=[].slice.call(arguments,1);return i.unshift(this),"function"==typeof e.install?e.install.apply(e,i):e.apply(null,i),this},ViewModel.require=function(e){return require("./"+e)},ViewModel.extend=extend,ViewModel.nextTick=utils.nextTick,module.exports=ViewModel;
//# sourceMappingURL=/sm/64b0c9536d478e3594da6cc07befd30b65747fdad0e28057c5c5da2eed528698.map