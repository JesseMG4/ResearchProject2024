/**
 * Minified by jsDelivr using UglifyJS v3.1.10.
 * Original file: /npm/d3@3.3.4/index.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var fs=require("fs"),path=require("path"),document=require("jsdom").jsdom("<html><head></head><body></body></html>"),window=document.createWindow(),CSSStyleDeclaration_prototype=window.CSSStyleDeclaration.prototype,CSSStyleDeclaration_setProperty=CSSStyleDeclaration_prototype.setProperty;CSSStyleDeclaration_prototype.setProperty=function(e,t,o){return CSSStyleDeclaration_setProperty.call(this,e+"",null==t?null:t+"",null==o?null:o+"")},module.exports=new Function("window","document","return "+fs.readFileSync(path.join(__dirname,"d3.js"),"utf-8"))(window,document);
//# sourceMappingURL=/sm/23af93f98d87a48b167434f34241d1124c77d037815d7ce7f685b39f2c84de7b.map