/**
 * Minified by jsDelivr using UglifyJS v3.1.10.
 * Original file: /npm/vue@1.0.0-migration/src/vue.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
function Vue(e){this._init(e)}var _=require("./util"),extend=_.extend;extend(Vue,require("./api/global")),Vue.options={replace:!0,directives:require("./directives"),elementDirectives:require("./element-directives"),filters:require("./filters"),transitions:{},components:{},partials:{}};var p=Vue.prototype;Object.defineProperty(p,"$data",{get:function(){return this._data},set:function(e){e!==this._data&&this._setData(e)}}),Object.defineProperty(p,"$els",{get:function(){return this.$$}}),Object.defineProperty(p,"$refs",{get:function(){return this.$}}),extend(p,require("./instance/init")),extend(p,require("./instance/events")),extend(p,require("./instance/state")),extend(p,require("./instance/lifecycle")),extend(p,require("./instance/misc")),extend(p,require("./api/data")),extend(p,require("./api/dom")),extend(p,require("./api/events")),extend(p,require("./api/child")),extend(p,require("./api/lifecycle")),Vue.version="1.0.0-migration",module.exports=_.Vue=Vue;
//# sourceMappingURL=/sm/4615b959b9f0038212012ba84536da34938f3ee49652ae043e9fa8fb71b716f0.map