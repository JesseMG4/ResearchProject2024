/*!
 * pixi.js - v5.4.0-rc.1
 * Compiled Wed, 11 Nov 2020 16:56:22 UTC
 *
 * pixi.js is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("@pixi/polyfill");var utils=require("@pixi/utils"),accessibility=require("@pixi/accessibility"),interaction=require("@pixi/interaction"),app=require("@pixi/app"),core=require("@pixi/core"),extract=require("@pixi/extract"),loaders=require("@pixi/loaders"),compressedTextures=require("@pixi/compressed-textures"),particles=require("@pixi/particles"),prepare=require("@pixi/prepare"),spritesheet=require("@pixi/spritesheet"),spriteTiling=require("@pixi/sprite-tiling"),textBitmap=require("@pixi/text-bitmap"),ticker=require("@pixi/ticker"),filterAlpha=require("@pixi/filter-alpha"),filterBlur=require("@pixi/filter-blur"),filterColorMatrix=require("@pixi/filter-color-matrix"),filterDisplacement=require("@pixi/filter-displacement"),filterFxaa=require("@pixi/filter-fxaa"),filterNoise=require("@pixi/filter-noise");require("@pixi/mixin-cache-as-bitmap"),require("@pixi/mixin-get-child-by-name"),require("@pixi/mixin-get-global-position");var constants=require("@pixi/constants"),display=require("@pixi/display"),graphics=require("@pixi/graphics"),math=require("@pixi/math"),mesh=require("@pixi/mesh"),meshExtras=require("@pixi/mesh-extras"),runner=require("@pixi/runner"),sprite=require("@pixi/sprite"),spriteAnimated=require("@pixi/sprite-animated"),text=require("@pixi/text"),settings=require("@pixi/settings"),extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function __extends(e,t){function r(){this.constructor=e}extendStatics(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}function useDeprecated(){var e=this;Object.defineProperties(e,{SVG_SIZE:{get:function(){return e.SVGResource.SVG_SIZE}},TransformStatic:{get:function(){return e.Transform}},TransformBase:{get:function(){return e.Transform}},TRANSFORM_MODE:{get:function(){return{STATIC:0,DYNAMIC:1}}},WebGLRenderer:{get:function(){return e.Renderer}},CanvasRenderTarget:{get:function(){return e.utils.CanvasRenderTarget}},loader:{get:function(){return e.Loader.shared}},FilterManager:{get:function(){return e.FilterSystem}},CanvasTinter:{get:function(){return e.canvasUtils}},GroupD8:{get:function(){return e.groupD8}}}),e.accessibility={},Object.defineProperties(e.accessibility,{AccessibilityManager:{get:function(){return e.AccessibilityManager}}}),Object.defineProperty(e,"resources",{get:function(){return e}}),Object.defineProperty(e,"systems",{get:function(){return e}}),e.interaction={},Object.defineProperties(e.interaction,{InteractionManager:{get:function(){return e.InteractionManager}},InteractionData:{get:function(){return e.InteractionData}},InteractionEvent:{get:function(){return e.InteractionEvent}}}),e.prepare={},Object.defineProperties(e.prepare,{BasePrepare:{get:function(){return e.BasePrepare}},Prepare:{get:function(){return e.Prepare}},CanvasPrepare:{get:function(){return e.CanvasPrepare}}}),e.extract={},Object.defineProperties(e.extract,{Extract:{get:function(){return e.Extract}},CanvasExtract:{get:function(){return e.CanvasExtract}}}),e.extras={},Object.defineProperties(e.extras,{TilingSprite:{get:function(){return e.TilingSprite}},TilingSpriteRenderer:{get:function(){return e.TilingSpriteRenderer}},AnimatedSprite:{get:function(){return e.AnimatedSprite}},BitmapText:{get:function(){return e.BitmapText}}}),e.TilingSprite.fromFrame=function(t,r,i){return e.TilingSprite.from(t,{width:r,height:i})},e.TilingSprite.fromImage=function(t,r,i,n){return void 0===n&&(n={}),n&&"object"!=typeof n&&(n={scaleMode:arguments[4],resourceOptions:{crossorigin:arguments[3]}}),n.width=r,n.height=i,e.TilingSprite.from(t,n)},Object.defineProperties(e.utils,{getSvgSize:{get:function(){return e.SVGResource.getSize}}}),e.mesh={},Object.defineProperties(e.mesh,{Mesh:{get:function(){return e.SimpleMesh}},NineSlicePlane:{get:function(){return e.NineSlicePlane}},Plane:{get:function(){return e.SimplePlane}},Rope:{get:function(){return e.SimpleRope}},RawMesh:{get:function(){return e.Mesh}},CanvasMeshRenderer:{get:function(){return e.CanvasMeshRenderer}},MeshRenderer:{get:function(){return e.MeshRenderer}}}),e.particles={},Object.defineProperties(e.particles,{ParticleContainer:{get:function(){return e.ParticleContainer}},ParticleRenderer:{get:function(){return e.ParticleRenderer}}}),e.ticker={},Object.defineProperties(e.ticker,{Ticker:{get:function(){return e.Ticker}},shared:{get:function(){return e.Ticker.shared}}}),e.loaders={},Object.defineProperties(e.loaders,{Loader:{get:function(){return e.Loader}},Resource:{get:function(){return e.LoaderResource}},bitmapFontParser:{get:function(){return e.BitmapFontLoader.use}},parseBitmapFontData:{get:function(){}},spritesheetParser:{get:function(){return e.SpritesheetLoader.use}},getResourcePath:{get:function(){return e.SpritesheetLoader.getResourcePath}}}),e.Loader.addPixiMiddleware=function(t){return e.loaders.Loader.registerPlugin({use:t()})};var t=function(e){return"on"+e.charAt(0).toUpperCase()+e.slice(1)};Object.assign(e.Loader.prototype,{on:function(e){t(e)},once:function(e){t(e)},off:function(e){t(e)}}),Object.defineProperty(e.extract,"WebGLExtract",{get:function(){return e.Extract}}),Object.defineProperty(e.prepare,"WebGLPrepare",{get:function(){return e.Prepare}}),e.Container.prototype._renderWebGL=function(e){this._render(e)},e.Container.prototype.renderWebGL=function(e){this.render(e)},e.DisplayObject.prototype.renderWebGL=function(e){this.render(e)},e.Container.prototype.renderAdvancedWebGL=function(e){this.renderAdvanced(e)},Object.defineProperties(e.settings,{TRANSFORM_MODE:{get:function(){return 0},set:function(){}}});var r=e.BaseTexture;r.prototype.loadSource=function(t){var r=e.autoDetectResource(t);r.internal=!0,this.setResource(r),this.update()},Object.defineProperties(r.prototype,{hasLoaded:{get:function(){return this.valid}},imageUrl:{get:function(){var e;return null===(e=this.resource)||void 0===e?void 0:e.url},set:function(e){this.resource&&(this.resource.url=e)}},source:{get:function(){return this.resource.source},set:function(e){this.resource&&(this.resource.source=e)}},premultiplyAlpha:{get:function(){return 0!==this.alphaMode},set:function(e){this.alphaMode=Number(e)}},_id:{get:function(){return this._batchLocation},set:function(e){this._batchLocation=e}}}),r.fromImage=function(e,t,i,n){var o={scale:n,crossorigin:t};return r.from(e,{scaleMode:i,resourceOptions:o})},r.fromCanvas=function(e,t){return r.from(e,{scaleMode:t})},r.fromSVG=function(e,t,i,n){var o={scale:n,crossorigin:t};return r.from(e,{scaleMode:i,resourceOptions:o})},Object.defineProperties(e.ImageResource.prototype,{premultiplyAlpha:{get:function(){return 0!==this.alphaMode},set:function(e){this.alphaMode=Number(e)}}}),e.Point.prototype.copy=function(e){return this.copyFrom(e)},e.ObservablePoint.prototype.copy=function(e){return this.copyFrom(e)},e.Rectangle.prototype.copy=function(e){return this.copyFrom(e)},e.Matrix.prototype.copy=function(e){return this.copyTo(e)},e.StateSystem.prototype.setState=function(e){return this.set(e)},Object.assign(e.FilterSystem.prototype,{getRenderTarget:function(e,t){return this.getFilterTexture(null,t)},returnRenderTarget:function(e){this.returnFilterTexture(e)},calculateScreenSpaceMatrix:function(e){var t=e.identity(),r=this.activeState,i=r.sourceFrame,n=r.destinationFrame;return t.translate(i.x/n.width,i.y/n.height),t.scale(n.width,n.height),t},calculateNormalizedScreenSpaceMatrix:function(e){var t=this.activeState,r=t.sourceFrame,i=t.destinationFrame,n=e.identity();n.translate(r.x/i.width,r.y/i.height);var o=i.width/r.width,a=i.height/r.height;return n.scale(o,a),n}}),Object.defineProperties(e.RenderTexture.prototype,{sourceFrame:{get:function(){return this.filterFrame}},size:{get:function(){return this._frame}}});var i=function(e){function t(t,r,i,n){return e.call(this,!0,t,r,i,n)||this}return __extends(t,e),t}(e.filters.BlurFilterPass),n=function(e){function t(t,r,i,n){return e.call(this,!1,t,r,i,n)||this}return __extends(t,e),t}(e.filters.BlurFilterPass);Object.assign(e.filters,{BlurXFilter:i,BlurYFilter:n});var o=e.Sprite,a=e.Texture,c=e.Graphics;function u(e,t,r,i){return o.from(t,{resourceOptions:{scale:i,crossorigin:r}})}function s(e,t,r,i){return a.from(t,{resourceOptions:{scale:i,crossorigin:r}})}c.prototype.generateCanvasTexture||(c.prototype.generateCanvasTexture=function(){}),Object.defineProperty(c.prototype,"graphicsData",{get:function(){return this.geometry.graphicsData}}),o.fromImage=u.bind(null,"fromImage"),o.fromSVG=u.bind(null,"fromSVG"),o.fromCanvas=u.bind(null,"fromCanvas"),o.fromVideo=u.bind(null,"fromVideo"),o.fromFrame=u.bind(null,"fromFrame"),a.fromImage=s.bind(null,"fromImage"),a.fromSVG=s.bind(null,"fromSVG"),a.fromCanvas=s.bind(null,"fromCanvas"),a.fromVideo=s.bind(null,"fromVideo"),a.fromFrame=s.bind(null,"fromFrame"),Object.defineProperty(e.AbstractRenderer.prototype,"autoResize",{get:function(){return this.autoDensity},set:function(e){this.autoDensity=e}}),Object.defineProperty(e.Renderer.prototype,"textureManager",{get:function(){return this.texture}}),e.utils.mixins={mixin:function(){},delayMixin:function(){},performMixins:function(){}},Object.defineProperty(e.BitmapText.prototype,"font",{get:function(){return{name:this._fontName,size:this._fontSize,tint:this._tint,align:this._align}},set:function(t){if(t){var r={font:t};this._upgradeStyle(r),r.fontSize=r.fontSize||e.BitmapFont.available[r.fontName].size,this._fontName=r.fontName,this._fontSize=r.fontSize,this.dirty=!0}}})}core.Renderer.registerPlugin("accessibility",accessibility.AccessibilityManager),core.Renderer.registerPlugin("extract",extract.Extract),core.Renderer.registerPlugin("interaction",interaction.InteractionManager),core.Renderer.registerPlugin("particle",particles.ParticleRenderer),core.Renderer.registerPlugin("prepare",prepare.Prepare),core.Renderer.registerPlugin("batch",core.BatchRenderer),core.Renderer.registerPlugin("tilingSprite",spriteTiling.TilingSpriteRenderer),loaders.Loader.registerPlugin(textBitmap.BitmapFontLoader),loaders.Loader.registerPlugin(compressedTextures.CompressedTextureLoader),loaders.Loader.registerPlugin(compressedTextures.DDSLoader),loaders.Loader.registerPlugin(compressedTextures.KTXLoader),loaders.Loader.registerPlugin(spritesheet.SpritesheetLoader),app.Application.registerPlugin(ticker.TickerPlugin),app.Application.registerPlugin(loaders.AppLoaderPlugin);var VERSION="__VERSION__",filters={AlphaFilter:filterAlpha.AlphaFilter,BlurFilter:filterBlur.BlurFilter,BlurFilterPass:filterBlur.BlurFilterPass,ColorMatrixFilter:filterColorMatrix.ColorMatrixFilter,DisplacementFilter:filterDisplacement.DisplacementFilter,FXAAFilter:filterFxaa.FXAAFilter,NoiseFilter:filterNoise.NoiseFilter};Object.keys(accessibility).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return accessibility[e]}})}),Object.keys(interaction).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return interaction[e]}})}),Object.keys(app).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return app[e]}})}),Object.keys(core).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return core[e]}})}),Object.keys(extract).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return extract[e]}})}),Object.keys(loaders).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return loaders[e]}})}),Object.keys(compressedTextures).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return compressedTextures[e]}})}),Object.keys(particles).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return particles[e]}})}),Object.keys(prepare).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return prepare[e]}})}),Object.keys(spritesheet).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return spritesheet[e]}})}),Object.keys(spriteTiling).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return spriteTiling[e]}})}),Object.keys(textBitmap).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return textBitmap[e]}})}),Object.keys(ticker).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return ticker[e]}})}),Object.keys(constants).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return constants[e]}})}),Object.keys(display).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return display[e]}})}),Object.keys(graphics).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return graphics[e]}})}),Object.keys(math).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return math[e]}})}),Object.keys(mesh).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return mesh[e]}})}),Object.keys(meshExtras).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return meshExtras[e]}})}),Object.keys(runner).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return runner[e]}})}),Object.keys(sprite).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return sprite[e]}})}),Object.keys(spriteAnimated).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return spriteAnimated[e]}})}),Object.keys(text).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return text[e]}})}),Object.keys(settings).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return settings[e]}})}),exports.utils=utils,exports.VERSION=VERSION,exports.filters=filters,exports.useDeprecated=useDeprecated;
//# sourceMappingURL=pixi.min.js.map
