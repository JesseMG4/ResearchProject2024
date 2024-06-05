/*!
 * pixi.js - v6.4.2
 * Compiled Thu, 02 Jun 2022 15:39:26 UTC
 *
 * pixi.js is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("@pixi/polyfill");var e=require("@pixi/utils"),r=require("@pixi/accessibility"),t=require("@pixi/interaction"),i=require("@pixi/app"),n=require("@pixi/core"),o=require("@pixi/extract"),u=require("@pixi/loaders"),p=require("@pixi/compressed-textures"),a=require("@pixi/particle-container"),c=require("@pixi/prepare"),s=require("@pixi/spritesheet"),f=require("@pixi/sprite-tiling"),l=require("@pixi/text-bitmap"),x=require("@pixi/ticker"),b=require("@pixi/filter-alpha"),d=require("@pixi/filter-blur"),y=require("@pixi/filter-color-matrix"),O=require("@pixi/filter-displacement"),P=require("@pixi/filter-fxaa"),g=require("@pixi/filter-noise");require("@pixi/mixin-cache-as-bitmap"),require("@pixi/mixin-get-child-by-name"),require("@pixi/mixin-get-global-position");var h=require("@pixi/constants"),j=require("@pixi/display"),m=require("@pixi/graphics"),q=require("@pixi/math"),k=require("@pixi/mesh"),E=require("@pixi/mesh-extras"),w=require("@pixi/runner"),F=require("@pixi/sprite"),L=require("@pixi/sprite-animated"),R=require("@pixi/text"),A=require("@pixi/settings");function v(e){if(e&&e.__esModule)return e;var r=Object.create(null);return e&&Object.keys(e).forEach((function(t){if("default"!==t){var i=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,i.get?i:{enumerable:!0,get:function(){return e[t]}})}})),r.default=e,r}var B=v(e);n.Renderer.registerPlugin("accessibility",r.AccessibilityManager),n.Renderer.registerPlugin("extract",o.Extract),n.Renderer.registerPlugin("interaction",t.InteractionManager),n.Renderer.registerPlugin("particle",a.ParticleRenderer),n.Renderer.registerPlugin("prepare",c.Prepare),n.Renderer.registerPlugin("batch",n.BatchRenderer),n.Renderer.registerPlugin("tilingSprite",f.TilingSpriteRenderer),u.Loader.registerPlugin(l.BitmapFontLoader),u.Loader.registerPlugin(p.CompressedTextureLoader),u.Loader.registerPlugin(p.DDSLoader),u.Loader.registerPlugin(p.KTXLoader),u.Loader.registerPlugin(s.SpritesheetLoader),i.Application.registerPlugin(x.TickerPlugin),i.Application.registerPlugin(u.AppLoaderPlugin);var M={AlphaFilter:b.AlphaFilter,BlurFilter:d.BlurFilter,BlurFilterPass:d.BlurFilterPass,ColorMatrixFilter:y.ColorMatrixFilter,DisplacementFilter:O.DisplacementFilter,FXAAFilter:P.FXAAFilter,NoiseFilter:g.NoiseFilter};exports.utils=B,exports.VERSION="6.4.2",exports.filters=M,Object.keys(r).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return r[e]}})})),Object.keys(t).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return t[e]}})})),Object.keys(i).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return i[e]}})})),Object.keys(n).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return n[e]}})})),Object.keys(o).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return o[e]}})})),Object.keys(u).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return u[e]}})})),Object.keys(p).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return p[e]}})})),Object.keys(a).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return a[e]}})})),Object.keys(c).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return c[e]}})})),Object.keys(s).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return s[e]}})})),Object.keys(f).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return f[e]}})})),Object.keys(l).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return l[e]}})})),Object.keys(x).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return x[e]}})})),Object.keys(h).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return h[e]}})})),Object.keys(j).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return j[e]}})})),Object.keys(m).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return m[e]}})})),Object.keys(q).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return q[e]}})})),Object.keys(k).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return k[e]}})})),Object.keys(E).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return E[e]}})})),Object.keys(w).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return w[e]}})})),Object.keys(F).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return F[e]}})})),Object.keys(L).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return L[e]}})})),Object.keys(R).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return R[e]}})})),Object.keys(A).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return A[e]}})}));
//# sourceMappingURL=pixi.min.js.map
