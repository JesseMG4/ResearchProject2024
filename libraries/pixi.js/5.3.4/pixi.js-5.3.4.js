/**
 * Minified by jsDelivr using Terser v5.3.5.
 * Original file: /npm/pixi.js@5.3.4/lib/pixi.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/*!
 * pixi.js - v5.3.4
 * Compiled Mon, 14 Dec 2020 19:48:09 UTC
 *
 * pixi.js is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("@pixi/polyfill");var utils=require("@pixi/utils"),accessibility=require("@pixi/accessibility"),interaction=require("@pixi/interaction"),app=require("@pixi/app"),core=require("@pixi/core"),extract=require("@pixi/extract"),loaders=require("@pixi/loaders"),particles=require("@pixi/particles"),prepare=require("@pixi/prepare"),spritesheet=require("@pixi/spritesheet"),spriteTiling=require("@pixi/sprite-tiling"),textBitmap=require("@pixi/text-bitmap"),ticker=require("@pixi/ticker"),filterAlpha=require("@pixi/filter-alpha"),filterBlur=require("@pixi/filter-blur"),filterColorMatrix=require("@pixi/filter-color-matrix"),filterDisplacement=require("@pixi/filter-displacement"),filterFxaa=require("@pixi/filter-fxaa"),filterNoise=require("@pixi/filter-noise");require("@pixi/mixin-cache-as-bitmap"),require("@pixi/mixin-get-child-by-name"),require("@pixi/mixin-get-global-position");var constants=require("@pixi/constants"),display=require("@pixi/display"),graphics=require("@pixi/graphics"),math=require("@pixi/math"),mesh=require("@pixi/mesh"),meshExtras=require("@pixi/mesh-extras"),runner=require("@pixi/runner"),sprite=require("@pixi/sprite"),spriteAnimated=require("@pixi/sprite-animated"),text=require("@pixi/text"),settings=require("@pixi/settings"),extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function __extends(e,t){function r(){this.constructor=e}extendStatics(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var v5="5.0.0";function useDeprecated(){var e=this;Object.defineProperties(e,{SVG_SIZE:{get:function(){return utils.deprecation(v5,"PIXI.utils.SVG_SIZE property has moved to PIXI.resources.SVGResource.SVG_SIZE"),e.SVGResource.SVG_SIZE}},TransformStatic:{get:function(){return utils.deprecation(v5,"PIXI.TransformStatic class has been removed, use PIXI.Transform"),e.Transform}},TransformBase:{get:function(){return utils.deprecation(v5,"PIXI.TransformBase class has been removed, use PIXI.Transform"),e.Transform}},TRANSFORM_MODE:{get:function(){return utils.deprecation(v5,"PIXI.TRANSFORM_MODE property has been removed"),{STATIC:0,DYNAMIC:1}}},WebGLRenderer:{get:function(){return utils.deprecation(v5,"PIXI.WebGLRenderer class has moved to PIXI.Renderer"),e.Renderer}},CanvasRenderTarget:{get:function(){return utils.deprecation(v5,"PIXI.CanvasRenderTarget class has moved to PIXI.utils.CanvasRenderTarget"),e.utils.CanvasRenderTarget}},loader:{get:function(){return utils.deprecation(v5,"PIXI.loader instance has moved to PIXI.Loader.shared"),e.Loader.shared}},FilterManager:{get:function(){return utils.deprecation(v5,"PIXI.FilterManager class has moved to PIXI.systems.FilterSystem"),e.systems.FilterSystem}},CanvasTinter:{get:function(){return utils.deprecation("5.2.0","PIXI.CanvasTinter namespace has moved to PIXI.canvasUtils"),e.canvasUtils}},GroupD8:{get:function(){return utils.deprecation("5.2.0","PIXI.GroupD8 namespace has moved to PIXI.groupD8"),e.groupD8}}}),e.accessibility={},Object.defineProperties(e.accessibility,{AccessibilityManager:{get:function(){return utils.deprecation("5.3.0","PIXI.accessibility.AccessibilityManager moved to PIXI.AccessibilityManager"),e.AccessibilityManager}}}),e.interaction={},Object.defineProperties(e.interaction,{InteractionManager:{get:function(){return utils.deprecation("5.3.0","PIXI.interaction.InteractionManager moved to PIXI.InteractionManager"),e.InteractionManager}},InteractionData:{get:function(){return utils.deprecation("5.3.0","PIXI.interaction.InteractionData moved to PIXI.InteractionData"),e.InteractionData}},InteractionEvent:{get:function(){return utils.deprecation("5.3.0","PIXI.interaction.InteractionEvent moved to PIXI.InteractionEvent"),e.InteractionEvent}}}),e.prepare={},Object.defineProperties(e.prepare,{BasePrepare:{get:function(){return utils.deprecation("5.2.1","PIXI.prepare.BasePrepare moved to PIXI.BasePrepare"),e.BasePrepare}},Prepare:{get:function(){return utils.deprecation("5.2.1","PIXI.prepare.Prepare moved to PIXI.Prepare"),e.Prepare}},CanvasPrepare:{get:function(){return utils.deprecation("5.2.1","PIXI.prepare.CanvasPrepare moved to PIXI.CanvasPrepare"),e.CanvasPrepare}}}),e.extract={},Object.defineProperties(e.extract,{Extract:{get:function(){return utils.deprecation("5.2.1","PIXI.extract.Extract moved to PIXI.Extract"),e.Extract}},CanvasExtract:{get:function(){return utils.deprecation("5.2.1","PIXI.extract.CanvasExtract moved to PIXI.CanvasExtract"),e.CanvasExtract}}}),e.extras={},Object.defineProperties(e.extras,{TilingSprite:{get:function(){return utils.deprecation(v5,"PIXI.extras.TilingSprite class has moved to PIXI.TilingSprite"),e.TilingSprite}},TilingSpriteRenderer:{get:function(){return utils.deprecation(v5,"PIXI.extras.TilingSpriteRenderer class has moved to PIXI.TilingSpriteRenderer"),e.TilingSpriteRenderer}},AnimatedSprite:{get:function(){return utils.deprecation(v5,"PIXI.extras.AnimatedSprite class has moved to PIXI.AnimatedSprite"),e.AnimatedSprite}},BitmapText:{get:function(){return utils.deprecation(v5,"PIXI.extras.BitmapText class has moved to PIXI.BitmapText"),e.BitmapText}}}),e.TilingSprite.fromFrame=function(t,r,i){return utils.deprecation("5.3.0","TilingSprite.fromFrame is deprecated, use TilingSprite.from"),e.TilingSprite.from(t,{width:r,height:i})},e.TilingSprite.fromImage=function(t,r,i,n){return void 0===n&&(n={}),utils.deprecation("5.3.0","TilingSprite.fromImage is deprecated, use TilingSprite.from"),n&&"object"!=typeof n&&(n={scaleMode:arguments[4],resourceOptions:{crossorigin:arguments[3]}}),n.width=r,n.height=i,e.TilingSprite.from(t,n)},Object.defineProperties(e.utils,{getSvgSize:{get:function(){return utils.deprecation(v5,"PIXI.utils.getSvgSize function has moved to PIXI.resources.SVGResource.getSize"),e.resources.SVGResource.getSize}}}),e.mesh={},Object.defineProperties(e.mesh,{Mesh:{get:function(){return utils.deprecation(v5,"PIXI.mesh.Mesh class has moved to PIXI.SimpleMesh"),e.SimpleMesh}},NineSlicePlane:{get:function(){return utils.deprecation(v5,"PIXI.mesh.NineSlicePlane class has moved to PIXI.NineSlicePlane"),e.NineSlicePlane}},Plane:{get:function(){return utils.deprecation(v5,"PIXI.mesh.Plane class has moved to PIXI.SimplePlane"),e.SimplePlane}},Rope:{get:function(){return utils.deprecation(v5,"PIXI.mesh.Rope class has moved to PIXI.SimpleRope"),e.SimpleRope}},RawMesh:{get:function(){return utils.deprecation(v5,"PIXI.mesh.RawMesh class has moved to PIXI.Mesh"),e.Mesh}},CanvasMeshRenderer:{get:function(){return utils.deprecation(v5,"PIXI.mesh.CanvasMeshRenderer class has moved to PIXI.CanvasMeshRenderer"),e.CanvasMeshRenderer}},MeshRenderer:{get:function(){return utils.deprecation(v5,"PIXI.mesh.MeshRenderer class has moved to PIXI.MeshRenderer"),e.MeshRenderer}}}),e.particles={},Object.defineProperties(e.particles,{ParticleContainer:{get:function(){return utils.deprecation(v5,"PIXI.particles.ParticleContainer class has moved to PIXI.ParticleContainer"),e.ParticleContainer}},ParticleRenderer:{get:function(){return utils.deprecation(v5,"PIXI.particles.ParticleRenderer class has moved to PIXI.ParticleRenderer"),e.ParticleRenderer}}}),e.ticker={},Object.defineProperties(e.ticker,{Ticker:{get:function(){return utils.deprecation(v5,"PIXI.ticker.Ticker class has moved to PIXI.Ticker"),e.Ticker}},shared:{get:function(){return utils.deprecation(v5,"PIXI.ticker.shared instance has moved to PIXI.Ticker.shared"),e.Ticker.shared}}}),e.loaders={},Object.defineProperties(e.loaders,{Loader:{get:function(){return utils.deprecation(v5,"PIXI.loaders.Loader class has moved to PIXI.Loader"),e.Loader}},Resource:{get:function(){return utils.deprecation(v5,"PIXI.loaders.Resource class has moved to PIXI.LoaderResource"),e.LoaderResource}},bitmapFontParser:{get:function(){return utils.deprecation(v5,"PIXI.loaders.bitmapFontParser function has moved to PIXI.BitmapFontLoader.use"),e.BitmapFontLoader.use}},parseBitmapFontData:{get:function(){utils.deprecation(v5,"PIXI.loaders.parseBitmapFontData function has removed")}},spritesheetParser:{get:function(){return utils.deprecation(v5,"PIXI.loaders.spritesheetParser function has moved to PIXI.SpritesheetLoader.use"),e.SpritesheetLoader.use}},getResourcePath:{get:function(){return utils.deprecation(v5,"PIXI.loaders.getResourcePath property has moved to PIXI.SpritesheetLoader.getResourcePath"),e.SpritesheetLoader.getResourcePath}}}),e.Loader.addPixiMiddleware=function(t){return utils.deprecation(v5,"PIXI.loaders.Loader.addPixiMiddleware function is deprecated, use PIXI.loaders.Loader.registerPlugin"),e.loaders.Loader.registerPlugin({use:t()})};var t=function(e){return"on"+e.charAt(0).toUpperCase()+e.slice(1)};Object.assign(e.Loader.prototype,{on:function(e){var r=t(e);utils.deprecation(v5,"PIXI.Loader#on is completely deprecated, use PIXI.Loader#"+r+".add")},once:function(e){var r=t(e);utils.deprecation(v5,"PIXI.Loader#once is completely deprecated, use PIXI.Loader#"+r+".once")},off:function(e){var r=t(e);utils.deprecation(v5,"PIXI.Loader#off is completely deprecated, use PIXI.Loader#"+r+".detach")}}),Object.defineProperty(e.extract,"WebGLExtract",{get:function(){return utils.deprecation(v5,"PIXI.extract.WebGLExtract method has moved to PIXI.Extract"),e.Extract}}),Object.defineProperty(e.prepare,"WebGLPrepare",{get:function(){return utils.deprecation(v5,"PIXI.prepare.WebGLPrepare class has moved to PIXI.Prepare"),e.Prepare}}),e.Container.prototype._renderWebGL=function(e){utils.deprecation(v5,"PIXI.Container._renderWebGL method has moved to PIXI.Container._render"),this._render(e)},e.Container.prototype.renderWebGL=function(e){utils.deprecation(v5,"PIXI.Container.renderWebGL method has moved to PIXI.Container.render"),this.render(e)},e.DisplayObject.prototype.renderWebGL=function(e){utils.deprecation(v5,"PIXI.DisplayObject.renderWebGL method has moved to PIXI.DisplayObject.render"),this.render(e)},e.Container.prototype.renderAdvancedWebGL=function(e){utils.deprecation(v5,"PIXI.Container.renderAdvancedWebGL method has moved to PIXI.Container.renderAdvanced"),this.renderAdvanced(e)},Object.defineProperties(e.settings,{TRANSFORM_MODE:{get:function(){return utils.deprecation(v5,"PIXI.settings.TRANSFORM_MODE property has been removed"),0},set:function(){utils.deprecation(v5,"PIXI.settings.TRANSFORM_MODE property has been removed")}}});var r=e.BaseTexture;r.prototype.loadSource=function(t){utils.deprecation(v5,"PIXI.BaseTexture.loadSource method has been deprecated");var r=e.resources.autoDetectResource(t);r.internal=!0,this.setResource(r),this.update()};var i=!1;Object.defineProperties(r.prototype,{hasLoaded:{get:function(){return utils.deprecation(v5,"PIXI.BaseTexture.hasLoaded property has been removed, use PIXI.BaseTexture.valid"),this.valid}},imageUrl:{get:function(){var e;return utils.deprecation(v5,"PIXI.BaseTexture.imageUrl property has been removed, use PIXI.BaseTexture.resource.url"),null===(e=this.resource)||void 0===e?void 0:e.url},set:function(e){utils.deprecation(v5,"PIXI.BaseTexture.imageUrl property has been removed, use PIXI.BaseTexture.resource.url"),this.resource&&(this.resource.url=e)}},source:{get:function(){return utils.deprecation(v5,"PIXI.BaseTexture.source property has been moved, use `PIXI.BaseTexture.resource.source`"),this.resource.source},set:function(e){utils.deprecation(v5,"PIXI.BaseTexture.source property has been moved, use `PIXI.BaseTexture.resource.source` if you want to set HTMLCanvasElement. Otherwise, create new BaseTexture."),this.resource&&(this.resource.source=e)}},premultiplyAlpha:{get:function(){return utils.deprecation("5.2.0","PIXI.BaseTexture.premultiplyAlpha property has been changed to `alphaMode`, see `PIXI.ALPHA_MODES`"),0!==this.alphaMode},set:function(e){utils.deprecation("5.2.0","PIXI.BaseTexture.premultiplyAlpha property has been changed to `alphaMode`, see `PIXI.ALPHA_MODES`"),this.alphaMode=Number(e)}},_id:{get:function(){return i||(utils.deprecation("5.2.0","PIXI.BaseTexture._id batch local field has been changed to `_batchLocation`"),i=!0),this._batchLocation},set:function(e){this._batchLocation=e}}}),r.fromImage=function(e,t,i,n){utils.deprecation(v5,"PIXI.BaseTexture.fromImage method has been replaced with PIXI.BaseTexture.from");var a={scale:n,crossorigin:t};return r.from(e,{scaleMode:i,resourceOptions:a})},r.fromCanvas=function(e,t){return utils.deprecation(v5,"PIXI.BaseTexture.fromCanvas method has been replaced with PIXI.BaseTexture.from"),r.from(e,{scaleMode:t})},r.fromSVG=function(e,t,i,n){utils.deprecation(v5,"PIXI.BaseTexture.fromSVG method has been replaced with PIXI.BaseTexture.from");var a={scale:n,crossorigin:t};return r.from(e,{scaleMode:i,resourceOptions:a})},Object.defineProperties(e.resources.ImageResource.prototype,{premultiplyAlpha:{get:function(){return utils.deprecation("5.2.0","PIXI.resources.ImageResource.premultiplyAlpha property has been changed to `alphaMode`, see `PIXI.ALPHA_MODES`"),0!==this.alphaMode},set:function(e){utils.deprecation("5.2.0","PIXI.resources.ImageResource.premultiplyAlpha property has been changed to `alphaMode`, see `PIXI.ALPHA_MODES`"),this.alphaMode=Number(e)}}}),e.Point.prototype.copy=function(e){return utils.deprecation(v5,"PIXI.Point.copy method has been replaced with PIXI.Point.copyFrom"),this.copyFrom(e)},e.ObservablePoint.prototype.copy=function(e){return utils.deprecation(v5,"PIXI.ObservablePoint.copy method has been replaced with PIXI.ObservablePoint.copyFrom"),this.copyFrom(e)},e.Rectangle.prototype.copy=function(e){return utils.deprecation(v5,"PIXI.Rectangle.copy method has been replaced with PIXI.Rectangle.copyFrom"),this.copyFrom(e)},e.Matrix.prototype.copy=function(e){return utils.deprecation(v5,"PIXI.Matrix.copy method has been replaced with PIXI.Matrix.copyTo"),this.copyTo(e)},e.systems.StateSystem.prototype.setState=function(e){return utils.deprecation("v5.1.0","StateSystem.setState has been renamed to StateSystem.set"),this.set(e)},Object.assign(e.systems.FilterSystem.prototype,{getRenderTarget:function(e,t){return utils.deprecation(v5,"PIXI.FilterManager.getRenderTarget method has been replaced with PIXI.systems.FilterSystem#getFilterTexture"),this.getFilterTexture(null,t)},returnRenderTarget:function(e){utils.deprecation(v5,"PIXI.FilterManager.returnRenderTarget method has been replaced with PIXI.systems.FilterSystem.returnFilterTexture"),this.returnFilterTexture(e)},calculateScreenSpaceMatrix:function(e){utils.deprecation(v5,"PIXI.systems.FilterSystem.calculateScreenSpaceMatrix method is removed, use `(vTextureCoord * inputSize.xy) + outputFrame.xy` instead");var t=e.identity(),r=this.activeState,i=r.sourceFrame,n=r.destinationFrame;return t.translate(i.x/n.width,i.y/n.height),t.scale(n.width,n.height),t},calculateNormalizedScreenSpaceMatrix:function(e){utils.deprecation(v5,"PIXI.systems.FilterManager.calculateNormalizedScreenSpaceMatrix method is removed, use `((vTextureCoord * inputSize.xy) + outputFrame.xy) / outputFrame.zw` instead.");var t=this.activeState,r=t.sourceFrame,i=t.destinationFrame,n=e.identity();n.translate(r.x/i.width,r.y/i.height);var a=i.width/r.width,o=i.height/r.height;return n.scale(a,o),n}}),Object.defineProperties(e.RenderTexture.prototype,{sourceFrame:{get:function(){return utils.deprecation(v5,"PIXI.RenderTexture.sourceFrame property has been removed"),this.filterFrame}},size:{get:function(){return utils.deprecation(v5,"PIXI.RenderTexture.size property has been removed"),this._frame}}});var n=function(e){function t(t,r,i,n){return utils.deprecation(v5,"PIXI.filters.BlurXFilter class is deprecated, use PIXI.filters.BlurFilterPass"),e.call(this,!0,t,r,i,n)||this}return __extends(t,e),t}(e.filters.BlurFilterPass),a=function(e){function t(t,r,i,n){return utils.deprecation(v5,"PIXI.filters.BlurYFilter class is deprecated, use PIXI.filters.BlurFilterPass"),e.call(this,!1,t,r,i,n)||this}return __extends(t,e),t}(e.filters.BlurFilterPass);Object.assign(e.filters,{BlurXFilter:n,BlurYFilter:a});var o=e.Sprite,s=e.Texture,c=e.Graphics;function u(e,t,r,i){return utils.deprecation(v5,"PIXI.Sprite."+e+" method is deprecated, use PIXI.Sprite.from"),o.from(t,{resourceOptions:{scale:i,crossorigin:r}})}function p(e,t,r,i){return utils.deprecation(v5,"PIXI.Texture."+e+" method is deprecated, use PIXI.Texture.from"),s.from(t,{resourceOptions:{scale:i,crossorigin:r}})}c.prototype.generateCanvasTexture||(c.prototype.generateCanvasTexture=function(){utils.deprecation(v5,'PIXI.Graphics.generateCanvasTexture method is only available in "pixi.js-legacy"')}),Object.defineProperty(c.prototype,"graphicsData",{get:function(){return utils.deprecation(v5,"PIXI.Graphics.graphicsData property is deprecated, use PIXI.Graphics.geometry.graphicsData"),this.geometry.graphicsData}}),o.fromImage=u.bind(null,"fromImage"),o.fromSVG=u.bind(null,"fromSVG"),o.fromCanvas=u.bind(null,"fromCanvas"),o.fromVideo=u.bind(null,"fromVideo"),o.fromFrame=u.bind(null,"fromFrame"),s.fromImage=p.bind(null,"fromImage"),s.fromSVG=p.bind(null,"fromSVG"),s.fromCanvas=p.bind(null,"fromCanvas"),s.fromVideo=p.bind(null,"fromVideo"),s.fromFrame=p.bind(null,"fromFrame"),Object.defineProperty(e.AbstractRenderer.prototype,"autoResize",{get:function(){return utils.deprecation(v5,"PIXI.AbstractRenderer.autoResize property is deprecated, use PIXI.AbstractRenderer.autoDensity"),this.autoDensity},set:function(e){utils.deprecation(v5,"PIXI.AbstractRenderer.autoResize property is deprecated, use PIXI.AbstractRenderer.autoDensity"),this.autoDensity=e}}),Object.defineProperty(e.Renderer.prototype,"textureManager",{get:function(){return utils.deprecation(v5,"PIXI.Renderer.textureManager property is deprecated, use PIXI.Renderer.texture"),this.texture}}),e.utils.mixins={mixin:function(){utils.deprecation(v5,"PIXI.utils.mixins.mixin function is no longer available")},delayMixin:function(){utils.deprecation(v5,"PIXI.utils.mixins.delayMixin function is no longer available")},performMixins:function(){utils.deprecation(v5,"PIXI.utils.mixins.performMixins function is no longer available")}},Object.defineProperty(e.BitmapText.prototype,"font",{get:function(){return utils.deprecation("5.3.0","PIXI.BitmapText.font property is deprecated, use fontName, fontSize, tint or align properties"),{name:this._fontName,size:this._fontSize,tint:this._tint,align:this._align}},set:function(t){if(utils.deprecation("5.3.0","PIXI.BitmapText.font property is deprecated, use fontName, fontSize, tint or align properties"),t){var r={font:t};this._upgradeStyle(r),r.fontSize=r.fontSize||e.BitmapFont.available[r.fontName].size,this._fontName=r.fontName,this._fontSize=r.fontSize,this.dirty=!0}}})}core.Renderer.registerPlugin("accessibility",accessibility.AccessibilityManager),core.Renderer.registerPlugin("extract",extract.Extract),core.Renderer.registerPlugin("interaction",interaction.InteractionManager),core.Renderer.registerPlugin("particle",particles.ParticleRenderer),core.Renderer.registerPlugin("prepare",prepare.Prepare),core.Renderer.registerPlugin("batch",core.BatchRenderer),core.Renderer.registerPlugin("tilingSprite",spriteTiling.TilingSpriteRenderer),loaders.Loader.registerPlugin(textBitmap.BitmapFontLoader),loaders.Loader.registerPlugin(spritesheet.SpritesheetLoader),app.Application.registerPlugin(ticker.TickerPlugin),app.Application.registerPlugin(loaders.AppLoaderPlugin);var VERSION="5.3.4",filters={AlphaFilter:filterAlpha.AlphaFilter,BlurFilter:filterBlur.BlurFilter,BlurFilterPass:filterBlur.BlurFilterPass,ColorMatrixFilter:filterColorMatrix.ColorMatrixFilter,DisplacementFilter:filterDisplacement.DisplacementFilter,FXAAFilter:filterFxaa.FXAAFilter,NoiseFilter:filterNoise.NoiseFilter};Object.keys(accessibility).forEach((function(e){Object.defineProperty(exports,e,{enumerable:!0,get:function(){return accessibility[e]}})})),Object.keys(interaction).forEach((function(e){Object.defineProperty(exports,e,{enumerable:!0,get:function(){return interaction[e]}})})),Object.keys(app).forEach((function(e){Object.defineProperty(exports,e,{enumerable:!0,get:function(){return app[e]}})})),Object.keys(core).forEach((function(e){Object.defineProperty(exports,e,{enumerable:!0,get:function(){return core[e]}})})),Object.keys(extract).forEach((function(e){Object.defineProperty(exports,e,{enumerable:!0,get:function(){return extract[e]}})})),Object.keys(loaders).forEach((function(e){Object.defineProperty(exports,e,{enumerable:!0,get:function(){return loaders[e]}})})),Object.keys(particles).forEach((function(e){Object.defineProperty(exports,e,{enumerable:!0,get:function(){return particles[e]}})})),Object.keys(prepare).forEach((function(e){Object.defineProperty(exports,e,{enumerable:!0,get:function(){return prepare[e]}})})),Object.keys(spritesheet).forEach((function(e){Object.defineProperty(exports,e,{enumerable:!0,get:function(){return spritesheet[e]}})})),Object.keys(spriteTiling).forEach((function(e){Object.defineProperty(exports,e,{enumerable:!0,get:function(){return spriteTiling[e]}})})),Object.keys(textBitmap).forEach((function(e){Object.defineProperty(exports,e,{enumerable:!0,get:function(){return textBitmap[e]}})})),Object.keys(ticker).forEach((function(e){Object.defineProperty(exports,e,{enumerable:!0,get:function(){return ticker[e]}})})),Object.keys(constants).forEach((function(e){Object.defineProperty(exports,e,{enumerable:!0,get:function(){return constants[e]}})})),Object.keys(display).forEach((function(e){Object.defineProperty(exports,e,{enumerable:!0,get:function(){return display[e]}})})),Object.keys(graphics).forEach((function(e){Object.defineProperty(exports,e,{enumerable:!0,get:function(){return graphics[e]}})})),Object.keys(math).forEach((function(e){Object.defineProperty(exports,e,{enumerable:!0,get:function(){return math[e]}})})),Object.keys(mesh).forEach((function(e){Object.defineProperty(exports,e,{enumerable:!0,get:function(){return mesh[e]}})})),Object.keys(meshExtras).forEach((function(e){Object.defineProperty(exports,e,{enumerable:!0,get:function(){return meshExtras[e]}})})),Object.keys(runner).forEach((function(e){Object.defineProperty(exports,e,{enumerable:!0,get:function(){return runner[e]}})})),Object.keys(sprite).forEach((function(e){Object.defineProperty(exports,e,{enumerable:!0,get:function(){return sprite[e]}})})),Object.keys(spriteAnimated).forEach((function(e){Object.defineProperty(exports,e,{enumerable:!0,get:function(){return spriteAnimated[e]}})})),Object.keys(text).forEach((function(e){Object.defineProperty(exports,e,{enumerable:!0,get:function(){return text[e]}})})),Object.keys(settings).forEach((function(e){Object.defineProperty(exports,e,{enumerable:!0,get:function(){return settings[e]}})})),exports.utils=utils,exports.VERSION=VERSION,exports.filters=filters,exports.useDeprecated=useDeprecated;
//# sourceMappingURL=/sm/9f7dc78a3b078141a73325af6fb13d434d1c33ac67c578f89beeb5e416affe91.map