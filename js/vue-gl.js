(function(a,b){'object'==typeof exports&&'undefined'!=typeof module?b(exports,require('three')):'function'==typeof define&&define.amd?define(['exports','three'],b):b(a.VueGL={},a.THREE)})(this,function(a,b){'use strict';/**
 * Returns a parsed vector3 object when the argument is a string.
 * Otherwise pass the argument through.
 */function c(a,c){return'string'==typeof a?(c||new b.Vector3).fromArray(a.trim().split(/\s+/).map(function(a){return parseFloat(a)})):c?c.copy(a):a}/**
 * Returns a parsed euler object when the argument is a string.
 * Othewise pass the argument through.
 */function d(a,c){return'string'==typeof a?(c||new b.Euler).fromArray(a.trim().split(/\s+/).map(function(a,b){return 3===b?a:parseFloat(a)})):c?c.copy(a):a}/**
 * Returns a parsed spherical object when the argument is a string.
 * Otherwise pass the argument through.
 */function e(a,c){var d;return'string'==typeof a?(d=c||new b.Spherical).set.apply(d,r(a.trim().split(/\s+/).map(function(a){return parseFloat(a)}))).makeSafe():c?c.copy(a):a}/**
 * Returns a parsed integer number when the argument is a string.
 * Otherwise pass the argument through.
 *//**
 * Returns a parsed float number when the argument is a string.
 * Otherwise pass the argument through.
 *//**
 * Create an object that has array's items as keys. Values are set by setter function.
 *//**
 * Constant arrays useful for props validation.
 *//**
 * Call the ancestor renderer's vglUpdate function from object3d components.
 */function f(a){a.vglUpdate&&a.vglUpdate()}/**
 * Dispatch an update event on the instance of a component.
 */function g(a){a.inst.dispatchEvent({type:'update'})}function h(a,d,g){if(d||g){var h=c(g);if(d){var i=a.inst.position.setFromSpherical(e(d));h&&i.add(h)}a.inst.lookAt(h||new b.Vector3),f(a)}}function i(a,b){var c=b.clientWidth,d=b.clientHeight;a.isPerspectiveCamera?Object.assign(a,{aspect:c/d}):Object.assign(a,{left:c/-2,right:c/2,top:d/2,bottom:d/-2}),a.updateProjectionMatrix()}function j(a,b){a.setSize(b.clientWidth,b.clientHeight,!1)}function k(a,b){var c=a.$parent;return c?c.$options[b]?c:k(c,b):void 0}function l(a){return k(a,'isVglLensFlare')}function m(a){return a.map(function(a){return a.children?m(a.children):a.text}).join('')}var n=Math.PI,o={};o.typeof='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&'function'==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?'symbol':typeof a},o.jsx=function(){var a='function'==typeof Symbol&&Symbol.for&&Symbol.for('react.element')||60103;return function(b,c,d,e){var f=b&&b.defaultProps,g=arguments.length-3;if(c||0==g||(c={}),c&&f)for(var h in f)void 0===c[h]&&(c[h]=f[h]);else c||(c=f||{});if(1==g)c.children=e;else if(1<g){for(var j=Array(g),k=0;k<g;k++)j[k]=arguments[k+3];c.children=j}return{$$typeof:a,type:b,key:void 0===d?null:''+d,ref:null,props:c,_owner:null}}}(),o.asyncIterator=function(a){if('function'==typeof Symbol){if(Symbol.asyncIterator){var b=a[Symbol.asyncIterator];if(null!=b)return b.call(a)}if(Symbol.iterator)return a[Symbol.iterator]()}throw new TypeError('Object is not async iterable')},o.asyncGenerator=function(){function a(a){this.value=a}function b(b){function c(e,f){try{var g=b[e](f),h=g.value;h instanceof a?Promise.resolve(h.value).then(function(a){c('next',a)},function(a){c('throw',a)}):d(g.done?'return':'normal',g.value)}catch(a){d('throw',a)}}function d(a,b){'return'===a?e.resolve({value:b,done:!0}):'throw'===a?e.reject(b):e.resolve({value:b,done:!1});e=e.next,e?c(e.key,e.arg):f=null}var e,f;this._invoke=function(a,b){return new Promise(function(d,g){var h={key:a,arg:b,resolve:d,reject:g,next:null};f?f=f.next=h:(e=f=h,c(a,b))})},'function'!=typeof b.return&&(this.return=void 0)}return'function'==typeof Symbol&&Symbol.asyncIterator&&(b.prototype[Symbol.asyncIterator]=function(){return this}),b.prototype.next=function(a){return this._invoke('next',a)},b.prototype.throw=function(a){return this._invoke('throw',a)},b.prototype.return=function(a){return this._invoke('return',a)},{wrap:function(a){return function(){return new b(a.apply(this,arguments))}},await:function(b){return new a(b)}}}(),o.asyncGeneratorDelegate=function(a,b){function c(c,d){return e=!0,d=new Promise(function(b){b(a[c](d))}),{done:!1,value:b(d)}}var d={},e=!1;return'function'==typeof Symbol&&Symbol.iterator&&(d[Symbol.iterator]=function(){return this}),d.next=function(a){return e?(e=!1,a):c('next',a)},'function'==typeof a.throw&&(d.throw=function(a){if(e)throw e=!1,a;return c('throw',a)}),'function'==typeof a.return&&(d.return=function(a){return c('return',a)}),d},o.asyncToGenerator=function(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}return g.done?void a(h):Promise.resolve(h).then(function(a){d('next',a)},function(a){d('throw',a)})}return d('next')})}},o.classCallCheck=function(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')},o.createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),o.defineEnumerableProperties=function(a,b){for(var c in b){var d=b[c];d.configurable=d.enumerable=!0,'value'in d&&(d.writable=!0),Object.defineProperty(a,c,d)}return a},o.defaults=function(a,b){for(var c=Object.getOwnPropertyNames(b),d=0;d<c.length;d++){var e=c[d],f=Object.getOwnPropertyDescriptor(b,e);f&&f.configurable&&a[e]===void 0&&Object.defineProperty(a,e,f)}return a},o.defineProperty=function(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a},o.extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},o.get=function a(b,c,d){null===b&&(b=Function.prototype);var e=Object.getOwnPropertyDescriptor(b,c);if(e===void 0){var f=Object.getPrototypeOf(b);return null===f?void 0:a(f,c,d)}if('value'in e)return e.value;var g=e.get;return void 0===g?void 0:g.call(d)},o.inherits=function(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)},o.instanceof=function(a,b){return null!=b&&'undefined'!=typeof Symbol&&b[Symbol.hasInstance]?b[Symbol.hasInstance](a):a instanceof b},o.interopRequireDefault=function(a){return a&&a.__esModule?a:{default:a}},o.interopRequireWildcard=function(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b.default=a,b},o.newArrowCheck=function(a,b){if(a!==b)throw new TypeError('Cannot instantiate an arrow function')},o.objectDestructuringEmpty=function(a){if(null==a)throw new TypeError('Cannot destructure undefined')},o.objectWithoutProperties=function(a,b){var c={};for(var d in a)0<=b.indexOf(d)||Object.prototype.hasOwnProperty.call(a,d)&&(c[d]=a[d]);return c},o.possibleConstructorReturn=function(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a},o.selfGlobal='undefined'==typeof global?self:global,o.set=function a(b,c,d,e){var f=Object.getOwnPropertyDescriptor(b,c);if(f===void 0){var g=Object.getPrototypeOf(b);null!==g&&a(g,c,d,e)}else if('value'in f&&f.writable)f.value=d;else{var h=f.set;h!==void 0&&h.call(e,d)}return d},o.slicedToArray=function(){function a(a,b){var c,d=[],e=!0,f=!1;try{for(var g,h=a[Symbol.iterator]();!(e=(g=h.next()).done)&&(d.push(g.value),!(b&&d.length===b));e=!0);}catch(a){f=!0,c=a}finally{try{!e&&h['return']&&h['return']()}finally{if(f)throw c}}return d}return function(b,c){if(Array.isArray(b))return b;if(Symbol.iterator in Object(b))return a(b,c);throw new TypeError('Invalid attempt to destructure non-iterable instance')}}(),o.slicedToArrayLoose=function(a,b){if(Array.isArray(a))return a;if(Symbol.iterator in Object(a)){for(var c,d=[],e=a[Symbol.iterator]();!(c=e.next()).done&&(d.push(c.value),!(b&&d.length===b)););return d}throw new TypeError('Invalid attempt to destructure non-iterable instance')},o.taggedTemplateLiteral=function(a,b){return Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))},o.taggedTemplateLiteralLoose=function(a,b){return a.raw=b,a},o.temporalRef=function(a,b,c){if(a===c)throw new ReferenceError(b+' is not defined - temporal dead zone');else return a},o.temporalUndefined={},o.toArray=function(a){return Array.isArray(a)?a:Array.from(a)},o.toConsumableArray=function(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)},o;var p={inject:{vglCameras:{default:function(){var a=this;return{get forGet(){return a.cameras},get forSet(){return this.forGet}}}},vglScenes:{default:function(){var a=this;return{get forGet(){return a.scenes},get forSet(){return this.forGet}}}},vglGeometries:{default:null},vglMaterials:{default:null},vglTextures:{default:null},vglFonts:{default:null}},data:function(){var a={geometries:Object.create(Object.assign(Object.create(null),this.vglGeometries?Object.getPrototypeOf(this.vglGeometries.forGet):{},this.vglGeometries?this.vglGeometries.forGet:{})),materials:Object.create(Object.assign(Object.create(null),this.vglMaterials?Object.getPrototypeOf(this.vglMaterials.forGet):{},this.vglMaterials?this.vglMaterials.forGet:{})),textures:Object.create(Object.assign(Object.create(null),this.vglTextures?Object.getPrototypeOf(this.vglTextures.forGet):{},this.vglTextures?this.vglTextures.forGet:{})),fonts:Object.create(Object.assign(Object.create(null),this.vglFonts?Object.getPrototypeOf(this.vglFonts.forGet):{},this.vglFonts?this.vglFonts.forGet:{}))};return this.vglCameras.forGet||(a.cameras=Object.create(null),a.scenes=Object.create(null)),a},watch:{"vglGeometries.forGet":function(a){this.geometries=Object.assign(Object.create(Object.assign(Object.create(null),Object.getPrototypeOf(a),a)),this.geometries)},"vglMaterials.forGet":function(a){this.materials=Object.assign(Object.create(Object.assign(Object.create(null),Object.getPrototypeOf(a),a)),this.materials)},"vglTextures.forGet":function(a){this.textures=Object.assign(Object.create(Object.assign(Object.create(null),Object.getPrototypeOf(a),a)),this.textures)},"vglFonts.forGet":function(a){this.fonts=Object.assign(Object.create(Object.assign(Object.create(null),Object.getPrototypeOf(a),a)),this.fonts)}},provide:function(){var a=this,b={vglGeometries:{get forGet(){return a.geometries},get forSet(){return this.forGet}},vglMaterials:{get forGet(){return a.materials},get forSet(){return this.forGet}},vglTextures:{get forGet(){return a.textures},get forSet(){return this.forGet}},vglFonts:{get forGet(){return a.fonts},get forSet(){return this.forGet}}};return this.cameras&&(b.vglCameras=this.vglCameras,b.vglScenes=this.vglScenes),b},render:function(a){return this.$slots.default?a('div',this.$slots.default):void 0}},q=function(){function a(a,b){var c,d=[],e=!0,f=!1;try{for(var g,h=a[Symbol.iterator]();!(e=(g=h.next()).done)&&(d.push(g.value),!(b&&d.length===b));e=!0);}catch(a){f=!0,c=a}finally{try{!e&&h['return']&&h['return']()}finally{if(f)throw c}}return d}return function(b,c){if(Array.isArray(b))return b;if(Symbol.iterator in Object(b))return a(b,c);throw new TypeError('Invalid attempt to destructure non-iterable instance')}}(),r=function(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)},s=[String,Number],t=String,u=[String,b.Vector3],v=[String,b.Spherical],w=Boolean,x=[String,b.Euler],y={props:{position:u,rotation:x,scale:u,castShadow:w,receiveShadow:w,name:t},computed:{inst:function(){return new b.Object3D}},inject:{vglUpdate:{default:void 0},vglObject3d:{default:{}}},provide:function(){var a=this;return{vglObject3d:{get inst(){return a.inst}}}},beforeDestroy:function(){this.inst.parent&&this.inst.parent.remove(this.inst)},watch:{inst:{handler:function(a,b){b&&b.parent&&b.parent.remove(b),this.vglObject3d.inst&&this.vglObject3d.inst.add(a),this.position&&a.position.copy(c(this.position)),this.rotation&&a.rotation.copy(d(this.rotation)),this.scale&&a.scale.copy(c(this.scale)),Object.assign(a,{castShadow:this.castShadow,receiveShadow:this.receiveShadow}),f(this)},immediate:!0},"vglObject3d.inst":function(a){a.add(this.inst),f(this)},position:function(a){this.inst.position.copy(c(a)),f(this)},rotation:function(a){this.inst.rotation.copy(d(a)),f(this)},scale:function(a){this.inst.scale.copy(c(a)),f(this)},castShadow:function(a){this.inst.castShadow=a,f(this)},receiveShadow:function(a){this.inst.receiveShadow=a,f(this)}},render:function(a){return this.$slots.default?a('div',this.$slots.default):void 0}},z={mixins:[y],inject:['vglCameras'],props:{orbitTarget:u,orbitPosition:v},computed:{inst:function(){return new b.Camera}},watch:{inst:{handler:function(a){this.$set(this.vglCameras.forSet,this.name,a),h(this,this.orbitPosition,this.orbitTarget)},immediate:!0},name:function(a,b){this.vglCameras.forGet[b]===this.inst&&this.$delete(this.vglCameras.forSet,b),this.$set(this.vglCameras.forSet,a,this.inst)},orbitTarget:function(a){h(this,this.orbitPosition,a)},orbitPosition:function(a){h(this,a,this.orbitTarget)}},beforeDestroy:function(){this.vglCameras.forGet[this.name]===this.inst&&this.$delete(this.vglCameras.forSet,this.name)}},A={mixins:[y],props:{color:{type:t,default:'#fff'},intensity:{type:s,default:1}},computed:{inst:function(){return new b.Light}},watch:{inst:{handler:function(a){a.color.setStyle(this.color),Object.assign(a,{intensity:parseFloat(this.intensity)})},immediate:!0},color:function(a){this.inst.color.setStyle(a),f(this)},intensity:function(a){this.inst.intensity=parseFloat(a),f(this)}}},B={inject:['vglMaterials'],props:{name:t},computed:{inst:function(){return new b.Material}},watch:{inst:{handler:function(a){this.$set(this.vglMaterials.forSet,this.name,a)},immediate:!0},name:function(a,b){this.vglMaterials.forGet[b]===this.inst&&this.$delete(this.vglMaterials.forSet,b),this.$set(this.vglMaterials.forSet,a,this.inst)}},beforeDestroy:function(){this.vglMaterials.forGet[this.name]===this.inst&&this.$delete(this.vglMaterials.forSet,this.name)},render:function(a){return this.$slots.default?a('div',this.$slots.default):void 0}},C={inject:['vglGeometries'],props:{name:t},computed:{inst:function(){return new b.Geometry}},watch:{inst:{handler:function(a){this.$set(this.vglGeometries.forSet,this.name,a)},immediate:!0},name:function(a,b){this.vglGeometries.forGet[b]===this.inst&&this.$delete(this.vglGeometries.forSet,b),this.$set(this.vglGeometries.forSet,a,this.inst)}},beforeDestroy:function(){this.vglGeometries.forGet[this.name]===this.inst&&this.$delete(this.vglGeometries.forSet,this.name)},render:function(a){return this.$slots.default?a('div',this.$slots.default):void 0}},D={mixins:[y],props:{material:t},inject:['vglMaterials'],computed:{materialObject:function(){return this.vglMaterials.forGet[this.material]}},mounted:function(){this.materialObject&&(this.inst.material=this.materialObject,this.materialObject.addEventListener('update',this.ud))},methods:{ud:function(){f(this)}},watch:{materialObject:function(a,b){a!==b&&(this.inst.material=a,b&&b.removeEventListener('update',this.ud),a&&a.addEventListener('update',this.ud),this.ud())}}},E={mixins:[D],props:{geometry:t},inject:['vglGeometries'],computed:{geometryObject:function(){return this.vglGeometries.forGet[this.geometry]}},mounted:function(){this.geometryObject&&(this.inst.geometry=this.geometryObject,this.geometryObject.addEventListener('update',this.ud))},methods:{ud:function(){f(this)}},watch:{geometryObject:function(a,b){a!==b&&(this.inst.geometry=a,b&&b.removeEventListener('update',this.ud),a&&a.addEventListener('update',this.ud),this.ud())}}},F={mixins:[C],props:{radius:{type:s,default:1},detail:{type:s,default:0}}},G={mixins:[E],computed:{inst:function(){return new b.Line}}},H={mixins:[G],computed:{inst:function(){return new b.LineSegments}}},I={mixins:[C],props:{radiusTop:{type:s,default:1},radiusBottom:{type:s,default:1},height:{type:s,default:1},radialSegments:{type:s,default:8},heightSegments:{type:s,default:1},openEnded:Boolean,thetaStart:{type:s,default:0},thetaLength:{type:s,default:2*n}},computed:{inst:function(){return new b.CylinderBufferGeometry(parseFloat(this.radiusTop),parseFloat(this.radiusBottom),parseFloat(this.height),parseInt(this.radialSegments,10),parseInt(this.heightSegments,10),this.openEnded,parseFloat(this.thetaStart),parseFloat(this.thetaLength))}}},J={inject:['vglTextures'],props:{texture:t,size:{type:s,default:-1},distance:{type:s,default:0},blending:{type:s,default:b.NormalBlending},color:{type:t,default:'#fff'}},data:function(){return{inst:null}},computed:{opts:function(){return[this.vglTextures.forGet[this.texture],parseInt(this.size,10),parseFloat(this.distance),parseInt(this.blending,10),new b.Color(this.color)]}},beforeDestroy:function(){var a=l(this);this.remove(a),f(a)},watch:{opts:{handler:function(a){var b=l(this);b&&(this.inst?(a[0]?this.replace(b):(this.remove(b),this.inst=null),f(b)):a[0]&&(this.add(b),f(b)))},immediate:!0}},methods:{add:function(a){var b;(b=a.inst).add.apply(b,r(this.opts));var c=a.inst.lensFlares.slice(-1),d=q(c,1);this.inst=d[0]},remove:function(a){a.inst.lensFlares.splice(a.inst.lensFlares.indexOf(this.inst),1)},replace:function(a){this.remove(a),this.add(a)}},render:function(a){return this.$slots.default?a('div',this.$slots.default):void 0}},K={mixins:[C],computed:{inst:function(){return new b.ExtrudeGeometry([],{})}}};a.VglNamespace=p,a.VglObject3d=y,a.VglScene={mixins:[y],inject:['vglScenes'],provide:function(){return this.vglUpdate?{}:{vglUpdate:function(){this.inst.dispatchEvent({type:'update'})}}},props:{name:t},computed:{inst:function(){return new b.Scene}},watch:{inst:{handler:function(a){this.$set(this.vglScenes.forSet,this.name,a)},immediate:!0},name:function(a,b){this.vglScenes.forGet[b]===this.inst&&this.$delete(this.vglScenes.forSet,b),this.$set(this.vglScenes.forSet,a,this.inst)}},beforeDestroy:function(){this.vglScenes.forGet[this.name]===this.inst&&this.$delete(this.vglScenes.forSet,this.name)}},a.VglCamera=z,a.VglRenderer={mixins:[p],props:{precision:t,alpha:w,disablePremultipliedAlpha:w,antialias:w,disableStencil:w,preserveDrawingBuffer:w,disableDepth:w,logarithmicDepthBuffer:w,camera:t,scene:t,shadowMapEnabled:w},provide:function(){return{vglUpdate:this.render}},data:function(){return{key:0,req:!0}},computed:{opt:function(){return{precision:this.precision,alpha:this.alpha,premultipliedAlpha:!this.disablePremultipliedAlpha,antialias:this.antialias,stencil:!this.disableStencil,preserveDrawingBuffer:this.preserveDrawingBuffer,depth:!this.disableDepth,logarithmicDepthBuffer:this.logarithmicDepthBuffer}},inst:function(){return new b.WebGLRenderer(Object.assign({canvas:this.$refs.rdr},this.opt))},cmr:function(){return(this.$data.vglCameras||this.vglCameras.forGet)[this.camera]},scn:function(){return(this.$data.vglScenes||this.vglScenes.forGet)[this.scene]}},methods:{resize:function(){j(this.inst,this.$el),this.cmr&&(i(this.cmr,this.$el),this.scn&&this.render())},render:function(){var a=this;this.req&&(this.$nextTick(function(){requestAnimationFrame(function(){a.scn&&a.cmr&&a.inst.render(a.scn,a.cmr),a.req=!0})}),this.req=!1)},init:function(){this.resize(),this.inst.shadowMap.enabled=this.shadowMapEnabled}},watch:{opt:function(){this.key+=1,this.$nextTick(this.init)},scn:function(a,b){b&&b.removeEventListener('update',this.render),a&&(a.addEventListener('update',this.render),this.render())},cmr:function(a,b){b&&b.removeEventListener('update',this.render),a&&(a.addEventListener('update',this.render),i(a,this.$el),this.render())},shadowMapEnabled:function(a){this.inst.shadowMap.enabled=a}},created:function(){this.scn&&this.scn.addEventListener('update',this.render),this.cmr&&this.cmr.addEventListener('update',this.render)},mounted:function(){this.init()},render:function(a){var b=this;return a('div',[a('canvas',{ref:'rdr',key:this.key},this.$slots.default),a('iframe',{ref:'frm',style:{visibility:'hidden',width:'100%',height:'100%'},on:{load:function(a){a.target.contentWindow.addEventListener('resize',b.resize,!1)}}})])}},a.VglPerspectiveCamera={mixins:[z],props:{zoom:{type:s,default:1},near:{type:s,default:.1},far:{type:s,default:2e3},fov:{type:s,default:50}},computed:{inst:function(){return new b.PerspectiveCamera}},watch:{inst:{handler:function(a){Object.assign(a,{zoom:parseFloat(this.zoom),near:parseFloat(this.near),far:parseFloat(this.far),fov:parseFloat(this.fov)})},immediate:!0},zoom:function(a){this.inst.zoom=parseFloat(a),f(this)},near:function(a){this.inst.near=parseFloat(a),f(this)},far:function(a){this.inst.far=parseFloat(a),f(this)},fov:function(a){this.inst.fov=parseFloat(a),f(this)}}},a.VglGroup={mixins:[y],computed:{inst:function(){return new b.Group}}},a.VglLight=A,a.VglDirectionalLight={mixins:[A],computed:{inst:function(){return new b.DirectionalLight}},props:{castShadow:w},watch:{inst:{handler:function(a){Object.assign(a,{castShadow:this.castShadow})}},castShadow:function(a){this.inst.castShadow=a,f(this)}}},a.VglAmbientLight={mixins:[A],computed:{inst:function(){return new b.AmbientLight}}},a.VglMaterial=B,a.VglPointsMaterial={mixins:[B],props:{color:{type:t,default:'#fff'},size:{type:s,default:1},disableSizeAttenuation:w},computed:{inst:function(){return new b.PointsMaterial}},watch:{inst:{handler:function(a){Object.assign(a,{size:parseFloat(this.size),sizeAttenuation:!this.disableSizeAttenuation}),a.color.setStyle(this.color)},immediate:!0},color:function(a){this.inst.color.setStyle(a),g(this)},size:function(a){this.inst.size=parseFloat(a),g(this)},disableSizeAttenuation:function(a){this.inst.sizeAttenuation=!a,g(this)}}},a.VglGeometry=C,a.VglSphereGeometry={mixins:[C],props:{radius:{type:s,default:1},widthSegments:{type:s,default:8},heightSegments:{type:s,default:6},phiStart:{type:s,default:0},phiLength:{type:s,default:2*n},thetaStart:{type:s,default:0},thetaLength:{type:s,default:n}},computed:{inst:function(){return new b.SphereBufferGeometry(parseFloat(this.radius),parseInt(this.widthSegments,10),parseInt(this.heightSegments,10),parseFloat(this.phiStart),parseFloat(this.phiLength),parseFloat(this.thetaStart),parseFloat(this.thetaLength))}}},a.VglMeshStandardMaterial={mixins:[B],inject:['vglTextures'],props:{color:{type:t,default:'#fff'},map:t},computed:{inst:function(){return new b.MeshStandardMaterial},mapObject:function(){return this.vglTextures.forGet[this.map]||null}},watch:{inst:{handler:function(a){a.color.setStyle(this.color),Object.assign(a,{map:this.mapObject})},immediate:!0},color:function(a){this.inst.color.setStyle(a),g(this)},mapObject:function(a,b){this.inst.map=a,b||(this.inst.needsUpdate=!0),g(this)}}},a.VglMesh={mixins:[E],computed:{inst:function(){return new b.Mesh}}},a.VglPoints={mixins:[E],computed:{inst:function(){return new b.Points}}},a.VglLineBasicMaterial={mixins:[B],props:{color:{type:t,default:'#fff'},lights:w,linewidth:{type:s,default:1},linecap:{type:t,default:'round'},linejoin:{type:t,default:'round'}},computed:{inst:function(){return new b.LineBasicMaterial}},watch:{inst:{handler:function(a){Object.assign(a,{lights:this.lights,linecap:this.linecap,linejoin:this.linejoin,linewidth:parseFloat(this.linewidth)}),a.color.setStyle(this.color)},immediate:!0},color:function(a){this.inst.color.setStyle(a)},lights:function(a){this.inst.lights=a},linewidth:function(a){this.inst.linewidth=parseFloat(a)},linecap:function(a){this.inst.linecap=a},linejoin:function(a){this.inst.linejoin=a}}},a.VglLine=G,a.VglSprite={mixins:[D],computed:{inst:function(){return new b.Sprite}}},a.VglBoxGeometry={mixins:[C],props:{width:{type:s,default:1},height:{type:s,default:1},depth:{type:s,default:1},widthSegments:{type:s,default:1},heightSegments:{type:s,default:1},depthSegments:{type:s,default:1}},computed:{inst:function(){return new b.BoxBufferGeometry(parseFloat(this.width),parseFloat(this.height),parseFloat(this.depth),parseInt(this.widthSegments,10),parseInt(this.heightSegments,10),parseInt(this.depthSegments,10))}}},a.VglCircleGeometry={mixins:[C],props:{radius:{type:s,default:1},segments:{type:s,default:8},thetaStart:{type:s,default:0},thetaLength:{type:s,default:2*n}},computed:{inst:function(){return new b.CircleBufferGeometry(parseFloat(this.radius),parseInt(this.segments,10),parseFloat(this.thetaStart),parseFloat(this.thetaLength))}}},a.VglLineSegments=H,a.VglLineLoop={mixins:[G],computed:{inst:function(){return new b.LineLoop}}},a.VglConeGeometry={mixins:[I],props:{radius:{type:s,default:1}},computed:{inst:function(){return new b.ConeBufferGeometry(parseFloat(this.radius),parseFloat(this.height),parseInt(this.radialSegments,10),parseInt(this.heightSegments,10),this.openEnded,parseFloat(this.thetaStart),parseFloat(this.thetaLength))}}},a.VglAxesHelper={mixins:[H],props:{size:{type:s,default:1}},computed:{inst:function(){return new b.AxesHelper(parseFloat(this.size))}}},a.VglOrthographicCamera={mixins:[z],props:{zoom:{type:s,default:1},near:{type:s,default:.1},far:{type:s,default:2e3}},computed:{inst:function(){return new b.OrthographicCamera}},watch:{inst:{handler:function(a){Object.assign(a,{zoom:parseFloat(this.zoom),near:parseFloat(this.near),far:parseFloat(this.far)})},immediate:!0},zoom:function(a){this.inst.zoom=parseFloat(a),f(this)},near:function(a){this.inst.near=parseFloat(a),f(this)},far:function(a){this.inst.far=parseFloat(a),f(this)}}},a.VglCylinderGeometry=I,a.VglPlaneGeometry={mixins:[C],props:{width:{type:s,default:1},height:{type:s,default:1},widthSegments:{type:s,default:1},heightSegments:{type:s,default:1}},computed:{inst:function(){return new b.PlaneBufferGeometry(parseFloat(this.width),parseFloat(this.height),parseInt(this.widthSegments,10),parseInt(this.heightSegments,10))}}},a.VglDodecahedronGeometry={mixins:[F],computed:{inst:function(){return new b.DodecahedronBufferGeometry(parseFloat(this.radius),parseInt(this.detail,10))}}},a.VglIcosahedronGeometry={mixins:[F],computed:{inst:function(){return new b.IcosahedronBufferGeometry(parseFloat(this.radius),parseInt(this.detail,10))}}},a.VglOctahedronGeometry={mixins:[F],computed:{inst:function(){return new b.OctahedronBufferGeometry(parseFloat(this.radius),parseInt(this.detail,10))}}},a.VglRingGeometry={mixins:[C],props:{innerRadius:{type:s,default:.5},outerRadius:{type:s,default:1},thetaSegments:{type:s,default:8},phiSegments:{type:s,default:1},thetaStart:{type:s,default:0},thetaLength:{type:s,default:2*n}},computed:{inst:function(){return new b.RingBufferGeometry(parseFloat(this.innerRadius),parseFloat(this.outerRadius),parseInt(this.thetaSegments,10),parseInt(this.phiSegments,10),parseFloat(this.thetaStart),parseFloat(this.thetaLength))}}},a.VglTetrahedronGeometry={mixins:[F],computed:{inst:function(){return new b.TetrahedronBufferGeometry(parseFloat(this.radius),parseInt(this.detail,10))}}},a.VglTorusGeometry={mixins:[C],props:{radius:{type:s,default:1},tube:{type:s,default:.4},radialSegments:{type:s,default:8},tubularSegments:{type:s,default:6},arc:{type:s,default:2*n}},computed:{inst:function(){return new b.TorusBufferGeometry(parseFloat(this.radius),parseFloat(this.tube),parseInt(this.radialSegments,10),parseInt(this.tubularSegments,10),parseFloat(this.arc))}}},a.VglTorusKnotGeometry={mixins:[C],props:{radius:{type:s,default:1},tube:{type:s,default:.4},radialSegments:{type:s,default:8},tubularSegments:{type:s,default:64},p:{type:s,default:2},q:{type:s,default:3}},computed:{inst:function(){return new b.TorusKnotBufferGeometry(parseFloat(this.radius),parseFloat(this.tube),parseInt(this.tubularSegments,10),parseInt(this.radialSegments,10),parseInt(this.p,10),parseInt(this.q,10))}}},a.VglArrowHelper={mixins:[y],props:{dir:u,length:{type:s,default:1},color:{type:t,default:'#ff0'},headLength:s,headWidth:s},computed:{inst:function(){return new b.ArrowHelper(new b.Vector3(0,1,0),new b.Vector3())},len:function(){return[parseFloat(this.length),this.headLength===void 0?void 0:parseFloat(this.headLength),this.headWidth===void 0?void 0:parseFloat(this.headWidth)]}},watch:{inst:{handler:function(a){this.dir&&a.setDirection(c(this.dir).normalize()),a.setLength.apply(a,r(this.len)),a.setColor(new b.Color(this.color))},immediate:!0},dir:function(a){this.inst.setDirection(c(a).normalize())},len:function(a){var b;(b=this.inst).setLength.apply(b,r(a))},color:function(a){this.inst.setColor(new b.Color(a))}}},a.VglBoxHelper={mixins:[H],props:{color:{type:t,default:'#ff0'}},computed:{inst:function(){return new b.BoxHelper}},watch:{inst:{handler:function(a){var b=this;this.$nextTick(function(){a.setFromObject(b.vglObject3d.inst)}),a.material.color.setStyle(this.color)},immediate:!0},"vglObject3d.inst":function(a){this.inst.setFromObject(a)},color:function(a){this.inst.material.color.setStyle(a)}}},a.VglPointLight={mixins:[A],props:{distance:{type:s,default:0},decay:{type:s,default:1}},computed:{inst:function(){return new b.PointLight}},watch:{inst:{handler:function(a){Object.assign(a,{distance:parseFloat(this.distance),decay:parseFloat(this.decay)})},immediate:!0},distance:function(a){this.inst.distance=parseFloat(a),f(this)},decay:function(a){this.inst.decay=parseFloat(a),f(this)}}},a.VglSpotLight={mixins:[A],props:{distance:{type:s,default:0},decay:{type:s,default:1},angle:{type:s,default:n/3},penumbra:{type:s,default:0},target:u},computed:{inst:function(){return new b.SpotLight}},beforeDestroy:function(){this.inst.target.parent&&this.inst.target.parent.remove(this.inst.target)},watch:{inst:{handler:function(a){if(this.target){a.target.position.copy(c(this.target));var b=this.vglObject3d.inst;b&&b.add(a.target)}Object.assign(a,{distance:parseFloat(this.distance),decay:parseFloat(this.decay),angle:parseFloat(this.angle),penumbra:parseFloat(this.penumbra)})},immediate:!0},"vglObject3d.inst":function(a){a&&a.add(this.inst.target)},distance:function(a){this.inst.distance=parseFloat(a),f(this)},decay:function(a){this.inst.decay=parseFloat(a),f(this)},angle:function(a){this.inst.angle=parseFloat(a),f(this)},penumbra:function(a){this.inst.penumbra=parseFloat(a),f(this)},target:function(a){this.inst.target.position.copy(c(a)),f(this)}}},a.VglTexture={inject:['vglTextures'],props:{src:t,name:t},data:function(){return{inst:null}},watch:{src:{handler:function(a){var c=this;new b.TextureLoader().load(a,function(a){c.inst=a})},immediate:!0},inst:{handler:function(a){this.$set(this.vglTextures.forSet,this.name,a)},immediate:!0},name:function(a,b){this.vglTextures.forGet[b]===this.inst&&this.$delete(this.vglTextures.forSet,b),this.$set(this.vglTextures.forSet,a,this.inst)}},beforeDestroy:function(){this.vglTextures.forGet[this.name]===this.inst&&this.$delete(this.vglTextures.forSet,this.name)},render:function(a){return this.$slots.default?a('div',this.$slots.default):void 0}},a.VglLensFlare={isVglLensFlare:!0,mixins:[y],computed:{inst:function(){return new b.LensFlare}}},a.VglLensFlareTexture=J,a.VglFont={inject:['vglFonts'],props:{src:t,name:t},data:function(){return{inst:null}},watch:{src:{handler:function(a){var c=this;if(!/^data:.*?(?:;base64)?,.*$/.test(a)){// GET src data manually and pass as a data URI.
var d=new XMLHttpRequest;d.addEventListener('load',function(){new b.FontLoader().load('data:,'+encodeURIComponent(d.responseText),function(a){c.inst=a})},!1),d.open('GET',a),d.send()}else new b.FontLoader().load(a,function(a){c.inst=a})},immediate:!0},inst:{handler:function(a){this.$set(this.vglFonts.forSet,this.name,a)},immediate:!0},name:function(a,b){this.vglFonts.forGet[b]===this.inst&&this.$delete(this.vglFonts.forSet,b),this.$set(this.vglFonts.forSet,a,this.inst)}},beforeDestroy:function(){this.vglFonts.forGet[this.name]===this.inst&&this.$delete(this.vglFonts.forSet,this.name)},render:function(a){return this.$slots.default?a('div',this.$slots.default):void 0}},a.VglExtrudeGeometry=K,a.VglTextGeometry={mixins:[K],inject:['vglFonts'],props:{font:t,size:{type:s,default:100},height:{type:s,default:50},curveSegments:{type:s,default:12},bevelEnabled:w,bevelThickness:{type:s,default:10},bevelSize:{type:s,default:8},bevelSegments:{type:s,default:3}},computed:{inst:function(){var a=this.vglFonts.forGet[this.font],c=this.$slots.default;return a&&c?new b.TextGeometry(m(c),{font:a,size:parseFloat(this.size),height:parseFloat(this.height),curveSegments:parseInt(this.curveSegments,10),bevelEnabled:this.bevelEnabled,bevelThickness:parseFloat(this.bevelThickness),bevelSize:parseFloat(this.bevelSize),bevelSegments:parseInt(this.bevelSegments,10)}):void 0}}},a.VglSpriteMaterial={mixins:[B],props:{color:{type:t,default:'#fff'},map:t},inject:['vglTextures'],computed:{inst:function(){return new b.SpriteMaterial},mapObject:function(){return this.vglTextures.forGet[this.map]||null}},watch:{inst:{handler:function(a){a.color.setStyle(this.color),Object.assign(a,{map:this.mapObject})},immediate:!0},color:function(a){this.inst.color.setStyle(a),g(this)},mapObject:function(a,b){this.inst.map=a,b||(this.inst.needsUpdate=!0),g(this)}}},a.VglGridHelper={mixins:[H],props:{size:{type:s,default:10},divisions:{type:s,default:10},colorCenterLine:{type:t,default:'#444444'},colorGrid:{type:t,default:'#888888'}},computed:{inst:function(){return new b.GridHelper(parseFloat(this.size),parseInt(this.divisions,10),this.colorCenterLine,this.colorGrid)}}},a.VglShadowMaterial={mixins:[B],computed:{inst:function(){return new b.ShadowMaterial}}},a.VglCameraHelper={mixins:[H],props:{camera:t},inject:['vglCameras'],computed:{inst:function(){var a=this.vglCameras.forGet[this.camera];return a?new b.CameraHelper(a):new b.LineSegments}}},a.VglDirectionalLightHelper={mixins:[y],props:{color:{type:t},size:{type:s,default:1}},computed:{inst:function(){return this.i},hex:function(){return'color'in this.i&&this.i.parent&&this.i.parent.color.getHex()}},created:function(){var a=this.vglObject3d.inst;a&&(this.i=new b.DirectionalLightHelper(a,parseFloat(this.size),this.color))},data:function(){return{i:new b.Object3D}},watch:{color:function(a){'color'in this.i&&(this.inst.color=a,this.inst.update())},hex:function(a){a&&!this.color&&this.inst.update()},size:function(a){this.i.parent&&(this.i=new b.DirectionalLightHelper(this.i.parent,parseFloat(a),this.color))}}},Object.defineProperty(a,'__esModule',{value:!0})});
