/**
 * Minified by jsDelivr using UglifyJS v3.1.10.
 * Original file: /npm/vue@1.0.6/src/vue.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
function Vue(e){this._init(e)}var _=require("./util"),extend=_.extend;extend(Vue,require("./api/global")),Vue.options={replace:!0,directives:require("./directives/public"),elementDirectives:require("./directives/element"),filters:require("./filters"),transitions:{},components:{},partials:{}};var p=Vue.prototype;Object.defineProperty(p,"$data",{get:function(){return this._data},set:function(e){e!==this._data&&this._setData(e)}}),extend(p,require("./instance/init")),extend(p,require("./instance/events")),extend(p,require("./instance/state")),extend(p,require("./instance/lifecycle")),extend(p,require("./instance/misc")),extend(p,require("./api/data")),extend(p,require("./api/dom")),extend(p,require("./api/events")),extend(p,require("./api/lifecycle")),Vue.version="1.0.6",module.exports=_.Vue=Vue,"production"!==process.env.NODE_ENV&&_.inBrowser&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit("init",Vue);
//# sourceMappingURL=/sm/eeb57fbc1b40ff5cf95fc16a63782600adc14362cba3e363ac532c89364a7e43.map