/*!
 * pixi.js - v6.5.1
 * Compiled Sun, 24 Jul 2022 20:56:21 UTC
 *
 * pixi.js is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("@pixi/polyfill");var e=require("@pixi/utils"),r=require("@pixi/accessibility"),t=require("@pixi/interaction"),i=require("@pixi/core"),n=require("@pixi/extract"),o=require("@pixi/loaders"),u=require("@pixi/compressed-textures"),p=require("@pixi/particle-container"),a=require("@pixi/prepare"),c=require("@pixi/spritesheet"),s=require("@pixi/sprite-tiling"),f=require("@pixi/text-bitmap"),l=require("@pixi/ticker"),x=require("@pixi/filter-alpha"),b=require("@pixi/filter-blur"),y=require("@pixi/filter-color-matrix"),O=require("@pixi/filter-displacement"),d=require("@pixi/filter-fxaa"),h=require("@pixi/filter-noise");require("@pixi/mixin-cache-as-bitmap"),require("@pixi/mixin-get-child-by-name"),require("@pixi/mixin-get-global-position");var P=require("@pixi/app"),j=require("@pixi/constants"),m=require("@pixi/display"),g=require("@pixi/graphics"),q=require("@pixi/math"),k=require("@pixi/mesh"),E=require("@pixi/mesh-extras"),w=require("@pixi/runner"),F=require("@pixi/sprite"),A=require("@pixi/sprite-animated"),v=require("@pixi/text"),B=require("@pixi/settings");function L(e){if(e&&e.__esModule)return e;var r=Object.create(null);return e&&Object.keys(e).forEach((function(t){if("default"!==t){var i=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,i.get?i:{enumerable:!0,get:function(){return e[t]}})}})),r.default=e,r}var M=L(e);i.extensions.add(r.AccessibilityManager,n.Extract,t.InteractionManager,p.ParticleRenderer,a.Prepare,i.BatchRenderer,s.TilingSpriteRenderer,f.BitmapFontLoader,u.CompressedTextureLoader,u.DDSLoader,u.KTXLoader,c.SpritesheetLoader,l.TickerPlugin,o.AppLoaderPlugin);var D={AlphaFilter:x.AlphaFilter,BlurFilter:b.BlurFilter,BlurFilterPass:b.BlurFilterPass,ColorMatrixFilter:y.ColorMatrixFilter,DisplacementFilter:O.DisplacementFilter,FXAAFilter:d.FXAAFilter,NoiseFilter:h.NoiseFilter};exports.utils=M,exports.filters=D,Object.keys(r).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return r[e]}})})),Object.keys(t).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return t[e]}})})),Object.keys(i).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return i[e]}})})),Object.keys(n).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return n[e]}})})),Object.keys(o).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return o[e]}})})),Object.keys(u).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return u[e]}})})),Object.keys(p).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return p[e]}})})),Object.keys(a).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return a[e]}})})),Object.keys(c).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return c[e]}})})),Object.keys(s).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return s[e]}})})),Object.keys(f).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return f[e]}})})),Object.keys(l).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return l[e]}})})),Object.keys(P).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return P[e]}})})),Object.keys(j).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return j[e]}})})),Object.keys(m).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return m[e]}})})),Object.keys(g).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return g[e]}})})),Object.keys(q).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return q[e]}})})),Object.keys(k).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return k[e]}})})),Object.keys(E).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return E[e]}})})),Object.keys(w).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return w[e]}})})),Object.keys(F).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return F[e]}})})),Object.keys(A).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return A[e]}})})),Object.keys(v).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return v[e]}})})),Object.keys(B).forEach((function(e){"default"===e||exports.hasOwnProperty(e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return B[e]}})}));
//# sourceMappingURL=pixi.min.js.map
