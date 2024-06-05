/*!
 * pixi.js - v6.0.4
 * Compiled Tue, 11 May 2021 18:00:23 UTC
 *
 * pixi.js is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("@pixi/polyfill");var utils=require("@pixi/utils"),accessibility=require("@pixi/accessibility"),interaction=require("@pixi/interaction"),app=require("@pixi/app"),core=require("@pixi/core"),extract=require("@pixi/extract"),loaders=require("@pixi/loaders"),compressedTextures=require("@pixi/compressed-textures"),particles=require("@pixi/particles"),prepare=require("@pixi/prepare"),spritesheet=require("@pixi/spritesheet"),spriteTiling=require("@pixi/sprite-tiling"),textBitmap=require("@pixi/text-bitmap"),ticker=require("@pixi/ticker"),filterAlpha=require("@pixi/filter-alpha"),filterBlur=require("@pixi/filter-blur"),filterColorMatrix=require("@pixi/filter-color-matrix"),filterDisplacement=require("@pixi/filter-displacement"),filterFxaa=require("@pixi/filter-fxaa"),filterNoise=require("@pixi/filter-noise");require("@pixi/mixin-cache-as-bitmap"),require("@pixi/mixin-get-child-by-name"),require("@pixi/mixin-get-global-position");var constants=require("@pixi/constants"),display=require("@pixi/display"),graphics=require("@pixi/graphics"),math=require("@pixi/math"),mesh=require("@pixi/mesh"),meshExtras=require("@pixi/mesh-extras"),runner=require("@pixi/runner"),sprite=require("@pixi/sprite"),spriteAnimated=require("@pixi/sprite-animated"),text=require("@pixi/text"),settings=require("@pixi/settings");core.Renderer.registerPlugin("accessibility",accessibility.AccessibilityManager),core.Renderer.registerPlugin("extract",extract.Extract),core.Renderer.registerPlugin("interaction",interaction.InteractionManager),core.Renderer.registerPlugin("particle",particles.ParticleRenderer),core.Renderer.registerPlugin("prepare",prepare.Prepare),core.Renderer.registerPlugin("batch",core.BatchRenderer),core.Renderer.registerPlugin("tilingSprite",spriteTiling.TilingSpriteRenderer),loaders.Loader.registerPlugin(textBitmap.BitmapFontLoader),loaders.Loader.registerPlugin(compressedTextures.CompressedTextureLoader),loaders.Loader.registerPlugin(compressedTextures.DDSLoader),loaders.Loader.registerPlugin(compressedTextures.KTXLoader),loaders.Loader.registerPlugin(spritesheet.SpritesheetLoader),app.Application.registerPlugin(ticker.TickerPlugin),app.Application.registerPlugin(loaders.AppLoaderPlugin);var VERSION="6.0.4",filters={AlphaFilter:filterAlpha.AlphaFilter,BlurFilter:filterBlur.BlurFilter,BlurFilterPass:filterBlur.BlurFilterPass,ColorMatrixFilter:filterColorMatrix.ColorMatrixFilter,DisplacementFilter:filterDisplacement.DisplacementFilter,FXAAFilter:filterFxaa.FXAAFilter,NoiseFilter:filterNoise.NoiseFilter};Object.keys(accessibility).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return accessibility[e]}})}),Object.keys(interaction).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return interaction[e]}})}),Object.keys(app).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return app[e]}})}),Object.keys(core).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return core[e]}})}),Object.keys(extract).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return extract[e]}})}),Object.keys(loaders).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return loaders[e]}})}),Object.keys(compressedTextures).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return compressedTextures[e]}})}),Object.keys(particles).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return particles[e]}})}),Object.keys(prepare).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return prepare[e]}})}),Object.keys(spritesheet).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return spritesheet[e]}})}),Object.keys(spriteTiling).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return spriteTiling[e]}})}),Object.keys(textBitmap).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return textBitmap[e]}})}),Object.keys(ticker).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return ticker[e]}})}),Object.keys(constants).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return constants[e]}})}),Object.keys(display).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return display[e]}})}),Object.keys(graphics).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return graphics[e]}})}),Object.keys(math).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return math[e]}})}),Object.keys(mesh).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return mesh[e]}})}),Object.keys(meshExtras).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return meshExtras[e]}})}),Object.keys(runner).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return runner[e]}})}),Object.keys(sprite).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return sprite[e]}})}),Object.keys(spriteAnimated).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return spriteAnimated[e]}})}),Object.keys(text).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return text[e]}})}),Object.keys(settings).forEach(function(e){"default"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return settings[e]}})}),exports.utils=utils,exports.VERSION=VERSION,exports.filters=filters;
//# sourceMappingURL=pixi.min.js.map
