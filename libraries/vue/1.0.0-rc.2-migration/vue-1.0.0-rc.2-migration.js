/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /npm/vue@1.0.0-rc.2-migration/src/vue.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var _=require("./util"),extend=_.extend;function Vue(e){this._init(e)}extend(Vue,require("./api/global")),Vue.options={replace:!0,directives:require("./directives"),elementDirectives:require("./element-directives"),filters:require("./filters"),transitions:{},components:{},partials:{}};var p=Vue.prototype;Object.defineProperty(p,"$data",{get:function(){return this._data},set:function(e){e!==this._data&&this._setData(e)}}),Object.defineProperty(p,"$els",{get:function(){return this.$$}}),Object.defineProperty(p,"$refs",{get:function(){return this.$}}),extend(p,require("./instance/init")),extend(p,require("./instance/events")),extend(p,require("./instance/state")),extend(p,require("./instance/lifecycle")),extend(p,require("./instance/misc")),extend(p,require("./api/data")),extend(p,require("./api/dom")),extend(p,require("./api/events")),extend(p,require("./api/child")),extend(p,require("./api/lifecycle")),Vue.version="1.0.0-rc.2-migration",module.exports=_.Vue=Vue;
//# sourceMappingURL=/sm/98550976529b9c693d610c62402c4a168e17adf8d1bf060e78f427d5e4026ed6.map