/**
 * Minified by jsDelivr using UglifyJS v3.1.10.
 * Original file: /npm/vue@0.10.2/src/main.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
function extend(e){var t=this;e.data&&(e.defaultData=e.data,delete e.data),e=inheritOptions(e,t.options,!0),utils.processOptions(e);var i=function(i,r){r||(i=inheritOptions(i,e,!0)),t.call(this,i,!0)},r=i.prototype=Object.create(t.prototype);return utils.defProtected(r,"constructor",i),i.extend=extend,i.super=t,i.options=e,assetTypes.forEach(function(e){i[e]=ViewModel[e]}),i.use=ViewModel.use,i.require=ViewModel.require,i}function inheritOptions(e,t,i){if(e=e||{},!t)return e;for(var r in t)if("el"!==r){var n=e[r],o=t[r];i&&"function"==typeof n&&o?(e[r]=[n],Array.isArray(o)?e[r]=e[r].concat(o):e[r].push(o)):!i||!utils.isTrueObject(n)&&!utils.isTrueObject(o)||o instanceof ViewModel?void 0===n&&(e[r]=o):e[r]=inheritOptions(n,o)}return e}var config=require("./config"),ViewModel=require("./viewmodel"),utils=require("./utils"),makeHash=utils.hash,assetTypes=["directive","filter","partial","effect","component"];require("./observer"),require("./transition"),ViewModel.options=config.globalAssets={directives:require("./directives"),filters:require("./filters"),partials:makeHash(),effects:makeHash(),components:makeHash()},assetTypes.forEach(function(e){ViewModel[e]=function(t,i){var r=this.options[e+"s"];return r||(r=this.options[e+"s"]=makeHash()),i?("partial"===e?i=utils.toFragment(i):"component"===e?i=utils.toConstructor(i):"filter"===e&&utils.checkFilter(i),r[t]=i,this):r[t]}}),ViewModel.config=function(e,t){if("string"==typeof e){if(void 0===t)return config[e];config[e]=t}else utils.extend(config,e);return this},ViewModel.use=function(e){if("string"==typeof e)try{e=require(e)}catch(t){return void utils.warn("Cannot find plugin: "+e)}var t=[].slice.call(arguments,1);return t.unshift(this),"function"==typeof e.install?e.install.apply(e,t):e.apply(null,t),this},ViewModel.require=function(e){return require("./"+e)},ViewModel.extend=extend,ViewModel.nextTick=utils.nextTick,module.exports=ViewModel;
//# sourceMappingURL=/sm/82d20981fed280c30b19b7bc2f77b500e44aa17882bba158a1a79c846066f54a.map