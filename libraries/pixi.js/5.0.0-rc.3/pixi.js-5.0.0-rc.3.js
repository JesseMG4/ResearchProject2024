/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /npm/pixi.js@5.0.0-rc.3/lib/pixi.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/*!
 * pixi.js - v5.0.0-rc.3
 * Compiled Fri, 22 Mar 2019 16:33:44 UTC
 *
 * pixi.js is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("@pixi/polyfill");var accessibility=require("@pixi/accessibility"),extract=require("@pixi/extract"),interaction=require("@pixi/interaction"),prepare=require("@pixi/prepare"),utils=require("@pixi/utils"),app=require("@pixi/app"),core=require("@pixi/core"),loaders=require("@pixi/loaders"),particles=require("@pixi/particles"),spritesheet=require("@pixi/spritesheet"),spriteTiling=require("@pixi/sprite-tiling"),textBitmap=require("@pixi/text-bitmap"),ticker=require("@pixi/ticker"),filterAlpha=require("@pixi/filter-alpha"),filterBlur=require("@pixi/filter-blur"),filterColorMatrix=require("@pixi/filter-color-matrix"),filterDisplacement=require("@pixi/filter-displacement"),filterFxaa=require("@pixi/filter-fxaa"),filterNoise=require("@pixi/filter-noise");require("@pixi/mixin-cache-as-bitmap"),require("@pixi/mixin-get-child-by-name"),require("@pixi/mixin-get-global-position");var constants=require("@pixi/constants"),display=require("@pixi/display"),graphics=require("@pixi/graphics"),math=require("@pixi/math"),mesh=require("@pixi/mesh"),meshExtras=require("@pixi/mesh-extras"),runner=require("@pixi/runner"),sprite=require("@pixi/sprite"),spriteAnimated=require("@pixi/sprite-animated"),text=require("@pixi/text"),settings=require("@pixi/settings"),v5="5.0.0";function useDeprecated(){var e=this;Object.defineProperties(e,{SVG_SIZE:{get:function(){return utils.deprecation(v5,"PIXI.utils.SVG_SIZE has moved to PIXI.SVGResource.SVG_SIZE"),e.SVGResource.SVG_SIZE}},TransformStatic:{get:function(){return utils.deprecation(v5,"PIXI.TransformStatic has been removed, use PIXI.Transform"),e.Transform}},TransformBase:{get:function(){return utils.deprecation(v5,"PIXI.TransformBase has been removed, use PIXI.Transform"),e.Transform}},TRANSFORM_MODE:{get:function(){return utils.deprecation(v5,"PIXI.TRANSFORM_MODE has been removed"),{STATIC:0,DYNAMIC:1}}},WebGLRenderer:{get:function(){return utils.deprecation(v5,"PIXI.WebGLRenderer has moved to PIXI.Renderer"),e.Renderer}},CanvasRenderTarget:{get:function(){return utils.deprecation(v5,"PIXI.CanvasRenderTarget has moved to PIXI.utils.CanvasRenderTarget"),e.utils.CanvasRenderTarget}},loader:{get:function(){return utils.deprecation(v5,"PIXI.loader has moved to PIXI.Loader.shared"),e.Loader.shared}},FilterManager:{get:function(){return utils.deprecation(v5,"PIXI.FilterManager has moved to PIXI.systems.FilterSystem"),e.systems.FilterManager}}}),e.extras={},Object.defineProperties(e.extras,{TilingSprite:{get:function(){return utils.deprecation(v5,"PIXI.extras.TilingSprite has moved to PIXI.TilingSprite"),e.TilingSprite}},TilingSpriteRenderer:{get:function(){return utils.deprecation(v5,"PIXI.extras.TilingSpriteRenderer has moved to PIXI.TilingSpriteRenderer"),e.TilingSpriteRenderer}},AnimatedSprite:{get:function(){return utils.deprecation(v5,"PIXI.extras.AnimatedSprite has moved to PIXI.AnimatedSprite"),e.AnimatedSprite}},BitmapText:{get:function(){return utils.deprecation(v5,"PIXI.extras.BitmapText has moved to PIXI.BitmapText"),e.BitmapText}}}),Object.defineProperties(e.utils,{getSvgSize:{get:function(){return utils.deprecation(v5,"PIXI.utils.getSvgSize has moved to PIXI.SVGResource.getSize"),e.SVGResource.getSize}}}),e.mesh={},Object.defineProperties(e.mesh,{Mesh:{get:function(){return utils.deprecation(v5,"PIXI.mesh.Mesh has moved to PIXI.SimpleMesh"),e.SimpleMesh}},NineSlicePlane:{get:function(){return utils.deprecation(v5,"PIXI.mesh.NineSlicePlane has moved to PIXI.NineSlicePlane"),e.NineSlicePlane}},Plane:{get:function(){return utils.deprecation(v5,"PIXI.mesh.Plane has moved to PIXI.SimplePlane"),e.SimplePlane}},Rope:{get:function(){return utils.deprecation(v5,"PIXI.mesh.Rope has moved to PIXI.SimpleRope"),e.SimpleRope}},RawMesh:{get:function(){return utils.deprecation(v5,"PIXI.mesh.RawMesh has moved to PIXI.Mesh"),e.Mesh}},CanvasMeshRenderer:{get:function(){return utils.deprecation(v5,"PIXI.mesh.CanvasMeshRenderer has moved to PIXI.CanvasMeshRenderer"),e.CanvasMeshRenderer}},MeshRenderer:{get:function(){return utils.deprecation(v5,"PIXI.mesh.MeshRenderer has moved to PIXI.MeshRenderer"),e.MeshRenderer}}}),e.particles={},Object.defineProperties(e.particles,{ParticleContainer:{get:function(){return utils.deprecation(v5,"PIXI.particles.ParticleContainer has moved to PIXI.ParticleContainer"),e.ParticleContainer}},ParticleRenderer:{get:function(){return utils.deprecation(v5,"PIXI.particles.ParticleRenderer has moved to PIXI.ParticleRenderer"),e.ParticleRenderer}}}),e.ticker={},Object.defineProperties(e.ticker,{Ticker:{get:function(){return utils.deprecation(v5,"PIXI.ticker.Ticker has moved to PIXI.Ticker"),e.Ticker}},shared:{get:function(){return utils.deprecation(v5,"PIXI.ticker.shared has moved to PIXI.Ticker.shared"),e.Ticker.shared}}}),e.loaders={},Object.defineProperties(e.loaders,{Loader:{get:function(){return utils.deprecation(v5,"PIXI.loaders.Loader has moved to PIXI.Loader"),e.Loader}},Resource:{get:function(){return utils.deprecation(v5,"PIXI.loaders.Resource has moved to PIXI.LoaderResource"),e.LoaderResource}},bitmapFontParser:{get:function(){return utils.deprecation(v5,"PIXI.loaders.bitmapFontParser has moved to PIXI.BitmapFontLoader.use"),e.BitmapFontLoader.use}},parseBitmapFontData:{get:function(){return utils.deprecation(v5,"PIXI.loaders.parseBitmapFontData has moved to PIXI.BitmapFontLoader.parse"),e.BitmapFontLoader.parse}},spritesheetParser:{get:function(){return utils.deprecation(v5,"PIXI.loaders.spritesheetParser has moved to PIXI.SpritesheetLoader.use"),e.SpritesheetLoader.use}},getResourcePath:{get:function(){return utils.deprecation(v5,"PIXI.loaders.getResourcePath has moved to PIXI.SpritesheetLoader.getResourcePath"),e.SpritesheetLoader.getResourcePath}}}),e.Loader.addPixiMiddleware=function(r){return utils.deprecation(v5,"PIXI.loaders.Loader.addPixiMiddleware is deprecated, use PIXI.loaders.Loader.registerPlugin"),e.loaders.Loader.registerPlugin({use:r()})},Object.defineProperty(e.extract,"WebGLExtract",{get:function(){return utils.deprecation(v5,"PIXI.extract.WebGLExtract has moved to PIXI.extract.Extract"),e.extract.Extract}}),Object.defineProperty(e.prepare,"WebGLPrepare",{get:function(){return utils.deprecation(v5,"PIXI.prepare.WebGLPrepare has moved to PIXI.prepare.Prepare"),e.prepare.Prepare}}),e.Container.prototype._renderWebGL=function(e){utils.deprecation(v5,"PIXI.Container#_renderWebGL has moved to PIXI.Container#_render"),this._render(e)},e.Container.prototype.renderWebGL=function(e){utils.deprecation(v5,"PIXI.Container#renderWebGL has moved to PIXI.Container#render"),this.render(e)},e.DisplayObject.prototype.renderWebGL=function(e){utils.deprecation(v5,"PIXI.DisplayObject#renderWebGL has moved to PIXI.DisplayObject#render"),this.render(e)},e.Container.prototype.renderAdvancedWebGL=function(e){utils.deprecation(v5,"PIXI.Container#renderAdvancedWebGL has moved to PIXI.Container#renderAdvanced"),this.renderAdvanced(e)},Object.defineProperties(e.settings,{TRANSFORM_MODE:{get:function(){return utils.deprecation(v5,"PIXI.settings.TRANSFORM_MODE has been removed."),0},set:function(){utils.deprecation(v5,"PIXI.settings.TRANSFORM_MODE has been removed.")}}});var r=e.BaseTexture;r.fromImage=function(e,t,i,n){utils.deprecation(v5,"PIXI.BaseTexture.fromImage has been replaced with PIXI.BaseTexture.from");var o={scale:n,crossorigin:t};return r.from(e,{scaleMode:i,resourceOptions:o})},r.fromCanvas=function(e,t){return utils.deprecation(v5,"PIXI.BaseTexture.fromCanvas has been replaced with PIXI.BaseTexture.from"),r.from(e,{scaleMode:t})},r.fromSVG=function(e,t,i,n){utils.deprecation(v5,"PIXI.BaseTexture.fromSVG has been replaced with PIXI.BaseTexture.from");var o={scale:n,crossorigin:t};return r.from(e,{scaleMode:i,resourceOptions:o})},e.Point.prototype.copy=function(e){return utils.deprecation(v5,"PIXI.Point.copy has been replaced with PIXI.Point#copyFrom"),this.copyFrom(e)},e.ObservablePoint.prototype.copy=function(e){return utils.deprecation(v5,"PIXI.ObservablePoint.copy has been replaced with PIXI.ObservablePoint#copyFrom"),this.copyFrom(e)},e.Rectangle.prototype.copy=function(e){return utils.deprecation(v5,"PIXI.Rectangle.copy has been replaced with PIXI.Rectangle#copyFrom"),this.copyFrom(e)},e.Matrix.prototype.copy=function(e){return utils.deprecation(v5,"PIXI.Matrix.copy has been replaced with PIXI.Matrix#copyTo"),this.copyTo(e)},Object.assign(e.systems.FilterSystem.prototype,{getRenderTarget:function(e,r){return utils.deprecation(v5,"FilterManager#getRenderTarget has been replaced with FilterSystem#getFilterTexture"),this.getFilterTexture(r)},returnRenderTarget:function(e){utils.deprecation(v5,"FilterManager#returnRenderTarget has been replaced with FilterSystem#returnFilterTexture"),this.returnFilterTexture(e)}}),Object.defineProperties(e.RenderTexture.prototype,{sourceFrame:{get:function(){return utils.deprecation(v5,"PIXI.RenderTexture#sourceFrame has been removed"),this.filterFrame}},size:{get:function(){return utils.deprecation(v5,"PIXI.RenderTexture#size has been removed"),this._frame}}});var t=function(e){function r(r,t,i,n){utils.deprecation(v5,"PIXI.filters.BlurXFilter is deprecated, use PIXI.filters.BlurFilterPass"),e.call(this,!0,r,t,i,n)}return e&&(r.__proto__=e),r.prototype=Object.create(e&&e.prototype),r.prototype.constructor=r,r}(e.filters.BlurFilterPass),i=function(e){function r(r,t,i,n){utils.deprecation(v5,"PIXI.filters.BlurYFilter is deprecated, use PIXI.filters.BlurFilterPass"),e.call(this,!1,r,t,i,n)}return e&&(r.__proto__=e),r.prototype=Object.create(e&&e.prototype),r.prototype.constructor=r,r}(e.filters.BlurFilterPass);Object.assign(e.filters,{BlurXFilter:t,BlurYFilter:i});var n=e.Sprite,o=e.Texture,a=e.Graphics;function s(e,r,t,i){return utils.deprecation(v5,"PIXI.Sprite."+e+" is deprecated, use PIXI.Sprite.from"),n.from(r,{resourceOptions:{scale:i,crossorigin:t}})}function c(e,r,t,i){return utils.deprecation(v5,"PIXI.Texture."+e+" is deprecated, use PIXI.Texture.from"),o.from(r,{resourceOptions:{scale:i,crossorigin:t}})}a.prototype.generateCanvasTexture||(a.prototype.generateCanvasTexture=function(){utils.deprecation(v5,'PIXI.Graphics#generateCanvasTexture is only available in "pixi.js-legacy"')}),n.fromImage=s.bind(null,"fromImage"),n.fromSVG=s.bind(null,"fromSVG"),n.fromCanvas=s.bind(null,"fromCanvas"),n.fromVideo=s.bind(null,"fromVideo"),n.fromFrame=s.bind(null,"fromFrame"),o.fromImage=c.bind(null,"fromImage"),o.fromSVG=c.bind(null,"fromSVG"),o.fromCanvas=c.bind(null,"fromCanvas"),o.fromVideo=c.bind(null,"fromVideo"),o.fromFrame=c.bind(null,"fromFrame"),Object.defineProperty(e.AbstractRenderer.prototype,"autoResize",{get:function(){return utils.deprecation(v5,"PIXI.AbstractRenderer autoResize is deprecated, use autoDensity"),this.autoDensity},set:function(e){utils.deprecation(v5,"PIXI.AbstractRenderer autoResize is deprecated, use autoDensity"),this.autoDensity=e}}),e.utils.mixins={mixin:function(){utils.deprecation(v5,"PIXI.utils.mixins.mixin no longer available")},delayMixin:function(){utils.deprecation(v5,"PIXI.utils.mixins.delayMixin no longer available")},performMixins:function(){utils.deprecation(v5,"PIXI.utils.mixins.performMixins no longer available")}}}core.Renderer.registerPlugin("accessibility",accessibility.AccessibilityManager),core.Renderer.registerPlugin("extract",extract.Extract),core.Renderer.registerPlugin("interaction",interaction.InteractionManager),core.Renderer.registerPlugin("particle",particles.ParticleRenderer),core.Renderer.registerPlugin("prepare",prepare.Prepare),core.Renderer.registerPlugin("batch",core.BatchRenderer),core.Renderer.registerPlugin("tilingSprite",spriteTiling.TilingSpriteRenderer),loaders.Loader.registerPlugin(textBitmap.BitmapFontLoader),loaders.Loader.registerPlugin(spritesheet.SpritesheetLoader),app.Application.registerPlugin(ticker.TickerPlugin),app.Application.registerPlugin(loaders.AppLoaderPlugin);var VERSION="5.0.0-rc.3",filters={AlphaFilter:filterAlpha.AlphaFilter,BlurFilter:filterBlur.BlurFilter,BlurFilterPass:filterBlur.BlurFilterPass,ColorMatrixFilter:filterColorMatrix.ColorMatrixFilter,DisplacementFilter:filterDisplacement.DisplacementFilter,FXAAFilter:filterFxaa.FXAAFilter,NoiseFilter:filterNoise.NoiseFilter};Object.keys(app).forEach((function(e){exports[e]=app[e]})),Object.keys(core).forEach((function(e){exports[e]=core[e]})),Object.keys(loaders).forEach((function(e){exports[e]=loaders[e]})),Object.keys(particles).forEach((function(e){exports[e]=particles[e]})),Object.keys(spritesheet).forEach((function(e){exports[e]=spritesheet[e]})),Object.keys(spriteTiling).forEach((function(e){exports[e]=spriteTiling[e]})),Object.keys(textBitmap).forEach((function(e){exports[e]=textBitmap[e]})),Object.keys(ticker).forEach((function(e){exports[e]=ticker[e]})),Object.keys(constants).forEach((function(e){exports[e]=constants[e]})),Object.keys(display).forEach((function(e){exports[e]=display[e]})),Object.keys(graphics).forEach((function(e){exports[e]=graphics[e]})),Object.keys(math).forEach((function(e){exports[e]=math[e]})),Object.keys(mesh).forEach((function(e){exports[e]=mesh[e]})),Object.keys(meshExtras).forEach((function(e){exports[e]=meshExtras[e]})),Object.keys(runner).forEach((function(e){exports[e]=runner[e]})),Object.keys(sprite).forEach((function(e){exports[e]=sprite[e]})),Object.keys(spriteAnimated).forEach((function(e){exports[e]=spriteAnimated[e]})),Object.keys(text).forEach((function(e){exports[e]=text[e]})),Object.keys(settings).forEach((function(e){exports[e]=settings[e]})),exports.accessibility=accessibility,exports.extract=extract,exports.interaction=interaction,exports.prepare=prepare,exports.utils=utils,exports.VERSION=VERSION,exports.filters=filters,exports.useDeprecated=useDeprecated;
//# sourceMappingURL=/sm/e3556437904c08a6547ac1b54f64ccf231c4a4fb754b0a55ef5e6e78d2f925ce.map