"use strict";/*!
 * pixi.js - v7.0.0-alpha.3
 * Compiled Fri, 23 Sep 2022 14:33:14 UTC
 *
 * pixi.js is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */Object.defineProperty(exports,"__esModule",{value:!0});var m=require("@pixi/filter-alpha"),r=require("@pixi/filter-blur"),q=require("@pixi/filter-color-matrix"),v=require("@pixi/filter-displacement"),g=require("@pixi/filter-fxaa"),E=require("@pixi/filter-noise");require("@pixi/mixin-cache-as-bitmap"),require("@pixi/mixin-get-child-by-name"),require("@pixi/mixin-get-global-position");var t=require("@pixi/accessibility"),i=require("@pixi/app"),n=require("@pixi/assets"),u=require("@pixi/compressed-textures"),a=require("@pixi/core"),f=require("@pixi/display"),c=require("@pixi/events"),o=require("@pixi/extract"),p=require("@pixi/graphics"),l=require("@pixi/mesh"),s=require("@pixi/mesh-extras"),b=require("@pixi/particle-container"),y=require("@pixi/prepare"),O=require("@pixi/sprite"),h=require("@pixi/spritesheet"),d=require("@pixi/sprite-animated"),x=require("@pixi/sprite-tiling"),P=require("@pixi/text"),j=require("@pixi/text-bitmap");const w={AlphaFilter:m.AlphaFilter,BlurFilter:r.BlurFilter,BlurFilterPass:r.BlurFilterPass,ColorMatrixFilter:q.ColorMatrixFilter,DisplacementFilter:v.DisplacementFilter,FXAAFilter:g.FXAAFilter,NoiseFilter:E.NoiseFilter};exports.filters=w,Object.keys(t).forEach(function(e){e!=="default"&&!exports.hasOwnProperty(e)&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return t[e]}})}),Object.keys(i).forEach(function(e){e!=="default"&&!exports.hasOwnProperty(e)&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return i[e]}})}),Object.keys(n).forEach(function(e){e!=="default"&&!exports.hasOwnProperty(e)&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return n[e]}})}),Object.keys(u).forEach(function(e){e!=="default"&&!exports.hasOwnProperty(e)&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return u[e]}})}),Object.keys(a).forEach(function(e){e!=="default"&&!exports.hasOwnProperty(e)&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return a[e]}})}),Object.keys(f).forEach(function(e){e!=="default"&&!exports.hasOwnProperty(e)&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return f[e]}})}),Object.keys(c).forEach(function(e){e!=="default"&&!exports.hasOwnProperty(e)&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return c[e]}})}),Object.keys(o).forEach(function(e){e!=="default"&&!exports.hasOwnProperty(e)&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return o[e]}})}),Object.keys(p).forEach(function(e){e!=="default"&&!exports.hasOwnProperty(e)&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return p[e]}})}),Object.keys(l).forEach(function(e){e!=="default"&&!exports.hasOwnProperty(e)&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return l[e]}})}),Object.keys(s).forEach(function(e){e!=="default"&&!exports.hasOwnProperty(e)&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return s[e]}})}),Object.keys(b).forEach(function(e){e!=="default"&&!exports.hasOwnProperty(e)&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return b[e]}})}),Object.keys(y).forEach(function(e){e!=="default"&&!exports.hasOwnProperty(e)&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return y[e]}})}),Object.keys(O).forEach(function(e){e!=="default"&&!exports.hasOwnProperty(e)&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return O[e]}})}),Object.keys(h).forEach(function(e){e!=="default"&&!exports.hasOwnProperty(e)&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return h[e]}})}),Object.keys(d).forEach(function(e){e!=="default"&&!exports.hasOwnProperty(e)&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return d[e]}})}),Object.keys(x).forEach(function(e){e!=="default"&&!exports.hasOwnProperty(e)&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return x[e]}})}),Object.keys(P).forEach(function(e){e!=="default"&&!exports.hasOwnProperty(e)&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return P[e]}})}),Object.keys(j).forEach(function(e){e!=="default"&&!exports.hasOwnProperty(e)&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return j[e]}})});
//# sourceMappingURL=pixi.min.js.map