/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /npm/vue@0.12.1-csp/src/vue.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var _=require("./util"),extend=_.extend;function Vue(e){this._init(e)}extend(Vue,require("./api/global")),Vue.options={directives:require("./directives"),filters:require("./filters"),transitions:{},components:{},elementDirectives:{content:require("./compiler/content")}};var p=Vue.prototype;Object.defineProperty(p,"$data",{get:function(){return this._data},set:function(e){e!==this._data&&this._setData(e)}}),extend(p,require("./instance/init")),extend(p,require("./instance/events")),extend(p,require("./instance/scope")),extend(p,require("./instance/compile")),extend(p,require("./instance/misc")),extend(p,require("./api/data")),extend(p,require("./api/dom")),extend(p,require("./api/events")),extend(p,require("./api/child")),extend(p,require("./api/lifecycle")),module.exports=_.Vue=Vue;
//# sourceMappingURL=/sm/1b81c2c5a007f191002bd47a534389361a9c410c23b55d9d2469b1ec68925e6f.map