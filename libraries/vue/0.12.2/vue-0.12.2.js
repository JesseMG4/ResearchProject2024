/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /npm/vue@0.12.2/src/vue.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var _=require("./util"),extend=_.extend;function Vue(e){this._init(e)}extend(Vue,require("./api/global")),Vue.options={replace:!0,directives:require("./directives"),elementDirectives:require("./element-directives"),filters:require("./filters"),transitions:{},components:{},partials:{}};var p=Vue.prototype;Object.defineProperty(p,"$data",{get:function(){return this._data},set:function(e){e!==this._data&&this._setData(e)}}),extend(p,require("./instance/init")),extend(p,require("./instance/events")),extend(p,require("./instance/scope")),extend(p,require("./instance/compile")),extend(p,require("./instance/misc")),extend(p,require("./api/data")),extend(p,require("./api/dom")),extend(p,require("./api/events")),extend(p,require("./api/child")),extend(p,require("./api/lifecycle")),module.exports=_.Vue=Vue;
//# sourceMappingURL=/sm/36bceaccefd803c3f50543af80e64a3f2ecdd4381b9634c5a47fc0ffbd7e1df3.map