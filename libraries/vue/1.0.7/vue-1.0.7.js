/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /npm/vue@1.0.7/src/vue.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var _=require("./util"),extend=_.extend;function Vue(e){this._init(e)}extend(Vue,require("./api/global")),Vue.options={replace:!0,directives:require("./directives/public"),elementDirectives:require("./directives/element"),filters:require("./filters"),transitions:{},components:{},partials:{}};var p=Vue.prototype;Object.defineProperty(p,"$data",{get:function(){return this._data},set:function(e){e!==this._data&&this._setData(e)}}),extend(p,require("./instance/init")),extend(p,require("./instance/events")),extend(p,require("./instance/state")),extend(p,require("./instance/lifecycle")),extend(p,require("./instance/misc")),extend(p,require("./api/data")),extend(p,require("./api/dom")),extend(p,require("./api/events")),extend(p,require("./api/lifecycle")),Vue.version="1.0.7",module.exports=_.Vue=Vue,"production"!==process.env.NODE_ENV&&_.inBrowser&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit("init",Vue);
//# sourceMappingURL=/sm/6b3a08878d8a66c11928e7bffbcc8300faa5f35ae6d5d2a7417de3c6ce1d7e29.map