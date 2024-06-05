/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /npm/vue@1.0.0-alpha.4/src/vue.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var _=require("./util"),extend=_.extend;function Vue(e){this._init(e)}extend(Vue,require("./api/global")),Vue.options={replace:!0,directives:require("./directives"),elementDirectives:require("./element-directives"),filters:require("./filters"),transitions:{},components:{},partials:{}};var p=Vue.prototype;Object.defineProperty(p,"$data",{get:function(){return this._data},set:function(e){e!==this._data&&this._setData(e)}}),extend(p,require("./instance/init")),extend(p,require("./instance/events")),extend(p,require("./instance/state")),extend(p,require("./instance/lifecycle")),extend(p,require("./instance/misc")),extend(p,require("./api/data")),extend(p,require("./api/dom")),extend(p,require("./api/events")),extend(p,require("./api/child")),extend(p,require("./api/lifecycle")),Vue.version="1.0.0-alpha",module.exports=_.Vue=Vue;
//# sourceMappingURL=/sm/1eeee75ba8fba979f955b5f7a00d762d1421cf5f8fe8e106cbe6cab9120fda51.map