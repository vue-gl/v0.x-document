(function(a,b){'object'==typeof exports&&'undefined'!=typeof module?b(exports,require('three')):'function'==typeof define&&define.amd?define(['exports','three'],b):b(a.VueGL={},a.THREE)})(this,function(a,b){'use strict';/**
 * Returns a parsed vector3 object.
 */function c(a){return a.isVector3?a:new(Function.prototype.bind.apply(b.Vector3,[null].concat(o(a.trim().split(/\s+/).map(function(a){return parseFloat(a)})))))}/**
 * Returns a parsed euler object.
 */function d(a){return a.isEuler?a:new(Function.prototype.bind.apply(b.Euler,[null].concat(o(a.trim().split(/\s+/).map(function(a,b){return 3===b?a:parseFloat(a)})))))}/**
 * Returns a parsed spherical object.
 */function e(a){return a.isSpherical?a:new(Function.prototype.bind.apply(b.Spherical,[null].concat(o(a.trim().split(/\s+/).map(function(a){return parseFloat(a)})))))().makeSafe()}function f(a,d,f){if(d||f){var g=c(f);if(d){var h=a.inst.position.setFromSpherical(e(d));g&&h.add(g)}a.inst.lookAt(g||new b.Vector3),a.vglUpdate&&a.vglUpdate()}}function g(a,b){var c=b.clientWidth,d=b.clientHeight;a.isPerspectiveCamera?Object.assign(a,{aspect:c/d}):Object.assign(a,{left:c/-2,right:c/2,top:d/2,bottom:d/-2}),a.updateProjectionMatrix()}function h(a,b){a.setSize(b.clientWidth,b.clientHeight,!1)}function i(a,b){var c=a.$parent;return c?c.$options[b]?c:i(c,b):void 0}function j(a){return i(a,'isVglLensFlare')}var k=Math.PI,l={};l.typeof='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&'function'==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?'symbol':typeof a},l.jsx=function(){var a='function'==typeof Symbol&&Symbol.for&&Symbol.for('react.element')||60103;return function(b,c,d,e){var f=b&&b.defaultProps,g=arguments.length-3;if(c||0==g||(c={}),c&&f)for(var h in f)void 0===c[h]&&(c[h]=f[h]);else c||(c=f||{});if(1==g)c.children=e;else if(1<g){for(var j=Array(g),k=0;k<g;k++)j[k]=arguments[k+3];c.children=j}return{$$typeof:a,type:b,key:void 0===d?null:''+d,ref:null,props:c,_owner:null}}}(),l.asyncIterator=function(a){if('function'==typeof Symbol){if(Symbol.asyncIterator){var b=a[Symbol.asyncIterator];if(null!=b)return b.call(a)}if(Symbol.iterator)return a[Symbol.iterator]()}throw new TypeError('Object is not async iterable')},l.asyncGenerator=function(){function a(a){this.value=a}function b(b){function c(e,f){try{var g=b[e](f),h=g.value;h instanceof a?Promise.resolve(h.value).then(function(a){c('next',a)},function(a){c('throw',a)}):d(g.done?'return':'normal',g.value)}catch(a){d('throw',a)}}function d(a,b){'return'===a?e.resolve({value:b,done:!0}):'throw'===a?e.reject(b):e.resolve({value:b,done:!1});e=e.next,e?c(e.key,e.arg):f=null}var e,f;this._invoke=function(a,b){return new Promise(function(d,g){var h={key:a,arg:b,resolve:d,reject:g,next:null};f?f=f.next=h:(e=f=h,c(a,b))})},'function'!=typeof b.return&&(this.return=void 0)}return'function'==typeof Symbol&&Symbol.asyncIterator&&(b.prototype[Symbol.asyncIterator]=function(){return this}),b.prototype.next=function(a){return this._invoke('next',a)},b.prototype.throw=function(a){return this._invoke('throw',a)},b.prototype.return=function(a){return this._invoke('return',a)},{wrap:function(a){return function(){return new b(a.apply(this,arguments))}},await:function(b){return new a(b)}}}(),l.asyncGeneratorDelegate=function(a,b){function c(c,d){return e=!0,d=new Promise(function(b){b(a[c](d))}),{done:!1,value:b(d)}}var d={},e=!1;return'function'==typeof Symbol&&Symbol.iterator&&(d[Symbol.iterator]=function(){return this}),d.next=function(a){return e?(e=!1,a):c('next',a)},'function'==typeof a.throw&&(d.throw=function(a){if(e)throw e=!1,a;return c('throw',a)}),'function'==typeof a.return&&(d.return=function(a){return c('return',a)}),d},l.asyncToGenerator=function(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}return g.done?void a(h):Promise.resolve(h).then(function(a){d('next',a)},function(a){d('throw',a)})}return d('next')})}},l.classCallCheck=function(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')},l.createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),l.defineEnumerableProperties=function(a,b){for(var c in b){var d=b[c];d.configurable=d.enumerable=!0,'value'in d&&(d.writable=!0),Object.defineProperty(a,c,d)}return a},l.defaults=function(a,b){for(var c=Object.getOwnPropertyNames(b),d=0;d<c.length;d++){var e=c[d],f=Object.getOwnPropertyDescriptor(b,e);f&&f.configurable&&a[e]===void 0&&Object.defineProperty(a,e,f)}return a},l.defineProperty=function(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a},l.extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},l.get=function a(b,c,d){null===b&&(b=Function.prototype);var e=Object.getOwnPropertyDescriptor(b,c);if(e===void 0){var f=Object.getPrototypeOf(b);return null===f?void 0:a(f,c,d)}if('value'in e)return e.value;var g=e.get;return void 0===g?void 0:g.call(d)},l.inherits=function(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)},l.instanceof=function(a,b){return null!=b&&'undefined'!=typeof Symbol&&b[Symbol.hasInstance]?b[Symbol.hasInstance](a):a instanceof b},l.interopRequireDefault=function(a){return a&&a.__esModule?a:{default:a}},l.interopRequireWildcard=function(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b.default=a,b},l.newArrowCheck=function(a,b){if(a!==b)throw new TypeError('Cannot instantiate an arrow function')},l.objectDestructuringEmpty=function(a){if(null==a)throw new TypeError('Cannot destructure undefined')},l.objectWithoutProperties=function(a,b){var c={};for(var d in a)0<=b.indexOf(d)||Object.prototype.hasOwnProperty.call(a,d)&&(c[d]=a[d]);return c},l.possibleConstructorReturn=function(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a},l.selfGlobal='undefined'==typeof global?self:global,l.set=function a(b,c,d,e){var f=Object.getOwnPropertyDescriptor(b,c);if(f===void 0){var g=Object.getPrototypeOf(b);null!==g&&a(g,c,d,e)}else if('value'in f&&f.writable)f.value=d;else{var h=f.set;h!==void 0&&h.call(e,d)}return d},l.slicedToArray=function(){function a(a,b){var c,d=[],e=!0,f=!1;try{for(var g,h=a[Symbol.iterator]();!(e=(g=h.next()).done)&&(d.push(g.value),!(b&&d.length===b));e=!0);}catch(a){f=!0,c=a}finally{try{!e&&h['return']&&h['return']()}finally{if(f)throw c}}return d}return function(b,c){if(Array.isArray(b))return b;if(Symbol.iterator in Object(b))return a(b,c);throw new TypeError('Invalid attempt to destructure non-iterable instance')}}(),l.slicedToArrayLoose=function(a,b){if(Array.isArray(a))return a;if(Symbol.iterator in Object(a)){for(var c,d=[],e=a[Symbol.iterator]();!(c=e.next()).done&&(d.push(c.value),!(b&&d.length===b)););return d}throw new TypeError('Invalid attempt to destructure non-iterable instance')},l.taggedTemplateLiteral=function(a,b){return Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))},l.taggedTemplateLiteralLoose=function(a,b){return a.raw=b,a},l.temporalRef=function(a,b,c){if(a===c)throw new ReferenceError(b+' is not defined - temporal dead zone');else return a},l.temporalUndefined={},l.toArray=function(a){return Array.isArray(a)?a:Array.from(a)},l.toConsumableArray=function(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)},l;var m={inject:{vglCameras:{default:function(){var a=this;return{get forGet(){return a.cameras},get forSet(){return this.forGet}}}},vglScenes:{default:function(){var a=this;return{get forGet(){return a.scenes},get forSet(){return this.forGet}}}},vglGeometries:{default:null},vglMaterials:{default:null},vglTextures:{default:null}},data:function(){var a={geometries:Object.create(Object.assign(Object.create(null),this.vglGeometries?Object.getPrototypeOf(this.vglGeometries.forGet):{},this.vglGeometries?this.vglGeometries.forGet:{})),materials:Object.create(Object.assign(Object.create(null),this.vglMaterials?Object.getPrototypeOf(this.vglMaterials.forGet):{},this.vglMaterials?this.vglMaterials.forGet:{})),textures:Object.create(Object.assign(Object.create(null),this.vglTextures?Object.getPrototypeOf(this.vglTextures.forGet):{},this.vglTextures?this.vglTextures.forGet:{}))};return this.vglCameras.forGet||(a.cameras=Object.create(null),a.scenes=Object.create(null)),a},watch:{"vglGeometries.forGet":function(a){this.geometries=Object.assign(Object.create(Object.assign(Object.create(null),Object.getPrototypeOf(a),a)),this.geometries)},"vglMaterials.forGet":function(a){this.materials=Object.assign(Object.create(Object.assign(Object.create(null),Object.getPrototypeOf(a),a)),this.materials)},"vglTextures.forGet":function(a){this.textures=Object.assign(Object.create(Object.assign(Object.create(null),Object.getPrototypeOf(a),a)),this.textures)}},provide:function(){var a=this,b={vglGeometries:{get forGet(){return a.geometries},get forSet(){return this.forGet}},vglMaterials:{get forGet(){return a.materials},get forSet(){return this.forGet}},vglTextures:{get forGet(){return a.textures},get forSet(){return this.forGet}}};return this.cameras&&(b.vglCameras=this.vglCameras,b.vglScenes=this.vglScenes),b},render:function(a){return this.$slots.default?a('div',this.$slots.default):void 0}},n=function(){function a(a,b){var c,d=[],e=!0,f=!1;try{for(var g,h=a[Symbol.iterator]();!(e=(g=h.next()).done)&&(d.push(g.value),!(b&&d.length===b));e=!0);}catch(a){f=!0,c=a}finally{try{!e&&h['return']&&h['return']()}finally{if(f)throw c}}return d}return function(b,c){if(Array.isArray(b))return b;if(Symbol.iterator in Object(b))return a(b,c);throw new TypeError('Invalid attempt to destructure non-iterable instance')}}(),o=function(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)},p=[String,Number],q=String,r=[String,b.Vector3],s=[String,b.Spherical],t=Boolean,u=[String,b.Euler],v={props:{position:r,rotation:u,scale:r,castShadow:t,receiveShadow:t,name:q},computed:{inst:function(){return new b.Object3D}},inject:{vglUpdate:{default:void 0},vglObject3d:{default:{}}},provide:function(){var a=this;return{vglObject3d:{get inst(){return a.inst}}}},beforeDestroy:function(){this.inst.parent&&this.inst.parent.remove(this.inst)},watch:{inst:{handler:function(a,b){b&&b.parent&&b.parent.remove(b),this.vglObject3d.inst&&this.vglObject3d.inst.add(a),this.position&&a.position.copy(c(this.position)),this.rotation&&a.rotation.copy(d(this.rotation)),this.scale&&a.scale.copy(c(this.scale)),Object.assign(a,{castShadow:this.castShadow,receiveShadow:this.receiveShadow}),this.vglUpdate&&this.vglUpdate()},immediate:!0},"vglObject3d.inst":function(a){a.add(this.inst)},position:function(a){this.inst.position.copy(c(a)),this.vglUpdate&&this.vglUpdate()},rotation:function(a){this.inst.rotation.copy(d(a)),this.vglUpdate&&this.vglUpdate()},scale:function(a){this.inst.scale.copy(c(a)),this.vglUpdate&&this.vglUpdate()},castShadow:function(a){this.inst.castShadow=a,this.vglUpdate&&this.vglUpdate()},receiveShadow:function(a){this.inst.receiveShadow=a,this.vglUpdate&&this.vglUpdate()}},render:function(a){return this.$slots.default?a('div',this.$slots.default):void 0}},w=Object.create(null),x=Object.create(null),y=Object.create(null),z=Object.create(null),A=Object.create(null),B=Object.create(null),C={mixins:[v],inject:['vglCameras'],props:{orbitTarget:r,orbitPosition:s},computed:{inst:function(){return new b.Camera}},watch:{inst:{handler:function(a,b){b&&delete y[b.uuid],y[a.uuid]=a,this.$set(this.vglCameras.forSet,this.name,a.uuid),f(this,this.orbitPosition,this.orbitTarget)},immediate:!0},name:function(a,b){this.vglCameras.forGet[b]===this.inst.uuid&&this.$delete(this.vglCameras.forSet,b),this.$set(this.vglCameras.forSet,a,this.inst.uuid)},orbitTarget:function(a){f(this,this.orbitPosition,a)},orbitPosition:function(a){f(this,a,this.orbitTarget)}},beforeDestroy:function(){delete y[this.inst.uuid],this.vglCameras.forGet[this.name]===this.inst.uuid&&this.$delete(this.vglCameras.forSet,this.name)}},D={mixins:[v],props:{color:{type:q,default:'#fff'},intensity:{type:p,default:1}},computed:{inst:function(){return new b.Light}},watch:{inst:{handler:function(a){a.color.setStyle(this.color),Object.assign(a,{intensity:parseFloat(this.intensity)})},immediate:!0},color:function(a){this.inst.color.setStyle(a),this.vglUpdate&&this.vglUpdate()},intensity:function(a){this.inst.intensity=parseFloat(a),this.vglUpdate&&this.vglUpdate()}}},E={inject:['vglMaterials'],props:{name:q},computed:{inst:function(){return new b.Material}},watch:{inst:{handler:function(a,b){b&&delete x[b.uuid],x[a.uuid]=a,this.$set(this.vglMaterials.forSet,this.name,a.uuid)},immediate:!0},name:function(a,b){this.vglMaterials.forGet[b]===this.inst.uuid&&this.$delete(this.vglMaterials.forSet,b),this.$set(this.vglMaterials.forSet,a,this.inst.uuid)}},beforeDestroy:function(){this.vglMaterials.forGet[this.name]===this.inst.uuid&&this.$delete(this.vglMaterials.forSet,this.name)},render:function(a){return this.$slots.default?a('div',this.$slots.default):void 0}},F={inject:['vglGeometries'],props:{name:q},computed:{inst:function(){return new b.BufferGeometry}},watch:{inst:{handler:function(a,b){b&&delete w[b.uuid],w[a.uuid]=a,this.$set(this.vglGeometries.forSet,this.name,a.uuid)},immediate:!0},name:function(a,b){this.vglGeometries.forGet[b]===this.inst.uuid&&this.$delete(this.vglGeometries.forSet,b),this.$set(this.vglGeometries.forSet,a,this.inst.uuid)}},beforeDestroy:function(){delete w[this.inst.uuid],this.vglGeometries.forGet[this.name]===this.inst.uuid&&this.$delete(this.vglGeometries.forSet,this.name)},render:function(a){return this.$slots.default?a('div',this.$slots.default):void 0}},G={mixins:[v],props:{material:q},inject:['vglMaterials'],computed:{materialObject:function(){return x[this.vglMaterials.forGet[this.material]]}},mounted:function(){this.materialObject&&(this.inst.material=this.materialObject,this.materialObject.addEventListener('update',this.ud))},methods:{ud:function(){this.vglUpdate&&this.vglUpdate()}},watch:{materialObject:function(a,b){a!==b&&(this.inst.material=a,b&&b.removeEventListener('update',this.ud),a&&a.addEventListener('update',this.ud),this.ud())}}},H={mixins:[G],props:{geometry:q},inject:['vglGeometries'],computed:{geometryObject:function(){return w[this.vglGeometries.forGet[this.geometry]]}},mounted:function(){this.geometryObject&&(this.inst.geometry=this.geometryObject,this.geometryObject.addEventListener('update',this.ud))},watch:{geometryObject:function(a,b){a!==b&&(this.inst.geometry=a,b&&b.removeEventListener('update',this.ud),a&&a.addEventListener('update',this.ud),this.ud())}}},I={mixins:[F],props:{radius:{type:p,default:1},detail:{type:p,default:0}}},J={mixins:[H],computed:{inst:function(){return new b.Line}}},K={mixins:[J],computed:{inst:function(){return new b.LineSegments}}},L={mixins:[F],props:{radiusTop:{type:p,default:1},radiusBottom:{type:p,default:1},height:{type:p,default:1},radialSegments:{type:p,default:8},heightSegments:{type:p,default:1},openEnded:Boolean,thetaStart:{type:p,default:0},thetaLength:{type:p,default:2*k}},computed:{inst:function(){return new b.CylinderBufferGeometry(parseFloat(this.radiusTop),parseFloat(this.radiusBottom),parseFloat(this.height),parseInt(this.radialSegments,10),parseInt(this.heightSegments,10),this.openEnded,parseFloat(this.thetaStart),parseFloat(this.thetaLength))}}},M={inject:['vglTextures'],props:{texture:q,size:{type:p,default:-1},distance:{type:p,default:0},blending:{type:p,default:b.NormalBlending},color:{type:q,default:'#fff'}},data:function(){return{inst:null}},computed:{opts:function(){return[A[this.vglTextures.forGet[this.texture]],parseInt(this.size,10),parseFloat(this.distance),parseInt(this.blending,10),new b.Color(this.color)]}},beforeDestroy:function(){var a=j(this);this.remove(a),a.vglUpdate&&a.vglUpdate()},watch:{opts:{handler:function(a){var b=j(this);b&&(this.inst?(a[0]?this.replace(b):(this.remove(b),this.inst=null),b.vglUpdate&&b.vglUpdate()):a[0]&&(this.add(b),b.vglUpdate&&b.vglUpdate()))},immediate:!0}},methods:{add:function(a){var b;(b=a.inst).add.apply(b,o(this.opts));var c=a.inst.lensFlares.slice(-1),d=n(c,1);this.inst=d[0]},remove:function(a){a.inst.lensFlares.splice(a.inst.lensFlares.indexOf(this.inst),1)},replace:function(a){this.remove(a),this.add(a)}},render:function(a){return this.$slots.default?a('div',this.$slots.default):void 0}},N={mixins:[F],computed:{inst:function(){return new b.ExtrudeGeometry([],{})}}};a.VglNamespace=m,a.VglObject3d=v,a.VglScene={mixins:[v],inject:['vglScenes'],provide:function(){return this.vglUpdate?{}:{vglUpdate:function(){this.inst.dispatchEvent({type:'update'})}}},props:{name:q},computed:{inst:function(){return new b.Scene}},watch:{inst:{handler:function(a,b){b&&delete z[b.uuid],z[a.uuid]=a,this.$set(this.vglScenes.forSet,this.name,a.uuid)},immediate:!0},name:function(a,b){this.vglScenes.forGet[b]===this.inst.uuid&&this.$delete(this.vglScenes.forSet,b),this.$set(this.vglScenes.forSet,a,this.inst.uuid)}},beforeDestroy:function(){delete z[this.inst.uuid],this.vglScenes.forGet[this.name]===this.inst.uuid&&this.$delete(this.vglScenes.forSet,this.name)}},a.VglCamera=C,a.VglRenderer={mixins:[m],props:{precision:q,alpha:t,disablePremultipliedAlpha:t,antialias:t,disableStencil:t,preserveDrawingBuffer:t,disableDepth:t,logarithmicDepthBuffer:t,camera:q,scene:q,shadowMapEnabled:t},provide:function(){return{vglUpdate:this.render}},data:function(){return{key:0,req:!0}},computed:{opt:function(){return{precision:this.precision,alpha:this.alpha,premultipliedAlpha:!this.disablePremultipliedAlpha,antialias:this.antialias,stencil:!this.disableStencil,preserveDrawingBuffer:this.preserveDrawingBuffer,depth:!this.disableDepth,logarithmicDepthBuffer:this.logarithmicDepthBuffer}},inst:function(){return new b.WebGLRenderer(Object.assign({canvas:this.$refs.rdr},this.opt))},cmr:function(){return y[this.vglCameras.forGet[this.camera]]},scn:function(){return z[this.vglScenes.forGet[this.scene]]}},methods:{resize:function(){h(this.inst,this.$el),this.cmr&&(g(this.cmr,this.$el),this.scn&&this.render())},render:function(){var a=this;this.req&&(this.$nextTick(function(){requestAnimationFrame(function(){a.scn&&a.cmr&&a.inst.render(a.scn,a.cmr),a.req=!0})}),this.req=!1)},init:function(){this.resize(),this.inst.shadowMap.enabled=this.shadowMapEnabled}},watch:{opt:function(){this.key+=1,this.$nextTick(this.init)},scn:function(a,b){b&&b.removeEventListener('update',this.render),a&&(a.addEventListener('update',this.render),this.render())},cmr:function(a,b){b&&b.removeEventListener('update',this.render),a&&(a.addEventListener('update',this.render),g(a,this.$el),this.render())},shadowMapEnabled:function(a){this.inst.shadowMap.enabled=a}},created:function(){this.scn&&this.scn.addEventListener('update',this.render),this.cmr&&this.cmr.addEventListener('update',this.render)},mounted:function(){this.init()},render:function(a){var b=this;return a('div',[a('canvas',{ref:'rdr',key:this.key},this.$slots.default),a('iframe',{ref:'frm',style:{visibility:'hidden',width:'100%',height:'100%'},on:{load:function(a){a.target.contentWindow.addEventListener('resize',b.resize,!1)}}})])}},a.VglPerspectiveCamera={mixins:[C],props:{zoom:{type:p,default:1},near:{type:p,default:.1},far:{type:p,default:2e3},fov:{type:p,default:50}},computed:{inst:function(){return new b.PerspectiveCamera}},watch:{inst:{handler:function(a){Object.assign(a,{zoom:parseFloat(this.zoom),near:parseFloat(this.near),far:parseFloat(this.far),fov:parseFloat(this.fov)})},immediate:!0},zoom:function(a){this.inst.zoom=parseFloat(a),this.vglUpdate&&this.vglUpdate()},near:function(a){this.inst.near=parseFloat(a),this.vglUpdate&&this.vglUpdate()},far:function(a){this.inst.far=parseFloat(a),this.vglUpdate&&this.vglUpdate()},fov:function(a){this.inst.fov=parseFloat(a),this.vglUpdate&&this.vglUpdate()}}},a.VglGroup={mixins:[v],computed:{inst:function(){return new b.Group}}},a.VglLight=D,a.VglDirectionalLight={mixins:[D],computed:{inst:function(){return new b.DirectionalLight}},props:{castShadow:t},watch:{inst:{handler:function(a){Object.assign(a,{castShadow:this.castShadow})},immediate:!0},castShadow:function(a){this.inst.castShadow=a,this.vglUpdate&&this.vglUpdate()}}},a.VglAmbientLight={mixins:[D],computed:{inst:function(){return new b.AmbientLight}}},a.VglMaterial=E,a.VglPointsMaterial={mixins:[E],props:{color:{type:q,default:'#fff'},size:{type:p,default:1},disableSizeAttenuation:t},computed:{inst:function(){return new b.PointsMaterial}},watch:{inst:{handler:function(a){Object.assign(a,{size:parseFloat(this.size),sizeAttenuation:!this.disableSizeAttenuation}),a.color.setStyle(this.color)},immediate:!0},color:function(a){this.inst.color.setStyle(a),this.inst.dispatchEvent({type:'update'})},size:function(a){this.inst.size=parseFloat(a),this.inst.dispatchEvent({type:'update'})},disableSizeAttenuation:function(a){this.inst.sizeAttenuation=!a,this.inst.dispatchEvent({type:'update'})}}},a.VglGeometry=F,a.VglSphereGeometry={mixins:[F],props:{radius:{type:p,default:1},widthSegments:{type:p,default:8},heightSegments:{type:p,default:6},phiStart:{type:p,default:0},phiLength:{type:p,default:2*k},thetaStart:{type:p,default:0},thetaLength:{type:p,default:k}},computed:{inst:function(){return new b.SphereBufferGeometry(parseFloat(this.radius),parseInt(this.widthSegments,10),parseInt(this.heightSegments,10),parseFloat(this.phiStart),parseFloat(this.phiLength),parseFloat(this.thetaStart),parseFloat(this.thetaLength))}}},a.VglMeshStandardMaterial={mixins:[E],inject:['vglTextures'],props:{color:{type:q,default:'#fff'},map:q},computed:{inst:function(){return new b.MeshStandardMaterial},mapObject:function(){return A[this.vglTextures.forGet[this.map]]||null}},watch:{inst:{handler:function(a){a.color.setStyle(this.color),Object.assign(a,{map:this.mapObject})},immediate:!0},color:function(a){this.inst.color.setStyle(a),this.inst.dispatchEvent({type:'update'})},mapObject:function(a,b){this.inst.map=a,b||(this.inst.needsUpdate=!0),this.inst.dispatchEvent({type:'update'})}}},a.VglMesh={mixins:[H],computed:{inst:function(){return new b.Mesh}}},a.VglPoints={mixins:[H],computed:{inst:function(){return new b.Points}}},a.VglLineBasicMaterial={mixins:[E],props:{color:{type:q,default:'#fff'},lights:t,linewidth:{type:p,default:1},linecap:{type:q,default:'round'},linejoin:{type:q,default:'round'}},computed:{inst:function(){return new b.LineBasicMaterial}},watch:{inst:{handler:function(a){Object.assign(a,{lights:this.lights,linecap:this.linecap,linejoin:this.linejoin,linewidth:parseFloat(this.linewidth)}),a.color.setStyle(this.color)},immediate:!0},color:function(a){this.inst.color.setStyle(a)},lights:function(a){this.inst.lights=a},linewidth:function(a){this.inst.linewidth=parseFloat(a)},linecap:function(a){this.inst.linecap=a},linejoin:function(a){this.inst.linejoin=a}}},a.VglLine=J,a.VglSprite={mixins:[G],computed:{inst:function(){return new b.Sprite}}},a.VglBoxGeometry={mixins:[F],props:{width:{type:p,default:1},height:{type:p,default:1},depth:{type:p,default:1},widthSegments:{type:p,default:1},heightSegments:{type:p,default:1},depthSegments:{type:p,default:1}},computed:{inst:function(){return new b.BoxBufferGeometry(parseFloat(this.width),parseFloat(this.height),parseFloat(this.depth),parseInt(this.widthSegments,10),parseInt(this.heightSegments,10),parseInt(this.depthSegments,10))}}},a.VglCircleGeometry={mixins:[F],props:{radius:{type:p,default:1},segments:{type:p,default:8},thetaStart:{type:p,default:0},thetaLength:{type:p,default:2*k}},computed:{inst:function(){return new b.CircleBufferGeometry(parseFloat(this.radius),parseInt(this.segments,10),parseFloat(this.thetaStart),parseFloat(this.thetaLength))}}},a.VglLineSegments=K,a.VglLineLoop={mixins:[J],computed:{inst:function(){return new b.LineLoop}}},a.VglConeGeometry={mixins:[L],props:{radius:{type:p,default:1}},computed:{inst:function(){return new b.ConeBufferGeometry(parseFloat(this.radius),parseFloat(this.height),parseInt(this.radialSegments,10),parseInt(this.heightSegments,10),this.openEnded,parseFloat(this.thetaStart),parseFloat(this.thetaLength))}}},a.VglAxesHelper={mixins:[K],props:{size:{type:p,default:1}},computed:{inst:function(){return new b.AxesHelper(parseFloat(this.size))}}},a.VglOrthographicCamera={mixins:[C],props:{zoom:{type:p,default:1},near:{type:p,default:.1},far:{type:p,default:2e3}},computed:{inst:function(){return new b.OrthographicCamera}},watch:{inst:{handler:function(a){Object.assign(a,{zoom:parseFloat(this.zoom),near:parseFloat(this.near),far:parseFloat(this.far)})},immediate:!0},zoom:function(a){this.inst.zoom=parseFloat(a),this.vglUpdate&&this.vglUpdate()},near:function(a){this.inst.near=parseFloat(a),this.vglUpdate&&this.vglUpdate()},far:function(a){this.inst.far=parseFloat(a),this.vglUpdate&&this.vglUpdate()}}},a.VglCylinderGeometry=L,a.VglPlaneGeometry={mixins:[F],props:{width:{type:p,default:1},height:{type:p,default:1},widthSegments:{type:p,default:1},heightSegments:{type:p,default:1}},computed:{inst:function(){return new b.PlaneBufferGeometry(parseFloat(this.width),parseFloat(this.height),parseInt(this.widthSegments,10),parseInt(this.heightSegments,10))}}},a.VglDodecahedronGeometry={mixins:[I],computed:{inst:function(){return new b.DodecahedronBufferGeometry(parseFloat(this.radius),parseInt(this.detail,10))}}},a.VglIcosahedronGeometry={mixins:[I],computed:{inst:function(){return new b.IcosahedronBufferGeometry(parseFloat(this.radius),parseInt(this.detail,10))}}},a.VglOctahedronGeometry={mixins:[I],computed:{inst:function(){return new b.OctahedronBufferGeometry(parseFloat(this.radius),parseInt(this.detail,10))}}},a.VglRingGeometry={mixins:[F],props:{innerRadius:{type:p,default:.5},outerRadius:{type:p,default:1},thetaSegments:{type:p,default:8},phiSegments:{type:p,default:1},thetaStart:{type:p,default:0},thetaLength:{type:p,default:2*k}},computed:{inst:function(){return new b.RingBufferGeometry(parseFloat(this.innerRadius),parseFloat(this.outerRadius),parseInt(this.thetaSegments,10),parseInt(this.phiSegments,10),parseFloat(this.thetaStart),parseFloat(this.thetaLength))}}},a.VglTetrahedronGeometry={mixins:[I],computed:{inst:function(){return new b.TetrahedronBufferGeometry(parseFloat(this.radius),parseInt(this.detail,10))}}},a.VglTorusGeometry={mixins:[F],props:{radius:{type:p,default:1},tube:{type:p,default:.4},radialSegments:{type:p,default:8},tubularSegments:{type:p,default:6},arc:{type:p,default:2*k}},computed:{inst:function(){return new b.TorusBufferGeometry(parseFloat(this.radius),parseFloat(this.tube),parseInt(this.radialSegments,10),parseInt(this.tubularSegments,10),parseFloat(this.arc))}}},a.VglTorusKnotGeometry={mixins:[F],props:{radius:{type:p,default:1},tube:{type:p,default:.4},radialSegments:{type:p,default:8},tubularSegments:{type:p,default:64},p:{type:p,default:2},q:{type:p,default:3}},computed:{inst:function(){return new b.TorusKnotBufferGeometry(parseFloat(this.radius),parseFloat(this.tube),parseInt(this.tubularSegments,10),parseInt(this.radialSegments,10),parseInt(this.p,10),parseInt(this.q,10))}}},a.VglArrowHelper={mixins:[v],props:{dir:r,length:{type:p,default:1},color:{type:q,default:'#ff0'},headLength:p,headWidth:p},computed:{inst:function(){return new b.ArrowHelper(new b.Vector3(0,1,0),new b.Vector3())},len:function(){return[parseFloat(this.length),this.headLength===void 0?void 0:parseFloat(this.headLength),this.headWidth===void 0?void 0:parseFloat(this.headWidth)]}},watch:{inst:{handler:function(a){this.dir&&a.setDirection(c(this.dir).normalize()),a.setLength.apply(a,o(this.len)),a.setColor(new b.Color(this.color))},immediate:!0},dir:function(a){this.inst.setDirection(c(a).normalize())},len:function(a){var b;(b=this.inst).setLength.apply(b,o(a))},color:function(a){this.inst.setColor(new b.Color(a))}}},a.VglBoxHelper={mixins:[K],props:{color:{type:q,default:'#ff0'}},computed:{inst:function(){return new b.BoxHelper}},watch:{inst:{handler:function(a){var b=this;this.$nextTick(function(){a.setFromObject(b.vglObject3d.inst)}),a.material.color.setStyle(this.color)},immediate:!0},"vglObject3d.inst":function(a){this.inst.setFromObject(a)},color:function(a){this.inst.material.color.setStyle(a)}}},a.VglPointLight={mixins:[D],props:{distance:{type:p,default:0},decay:{type:p,default:1}},computed:{inst:function(){return new b.PointLight}},watch:{inst:{handler:function(a){Object.assign(a,{distance:parseFloat(this.distance),decay:parseFloat(this.decay)})},immediate:!0},distance:function(a){this.inst.distance=parseFloat(a),this.vglUpdate&&this.vglUpdate()},decay:function(a){this.inst.decay=parseFloat(a),this.vglUpdate&&this.vglUpdate()}}},a.VglSpotLight={mixins:[D],props:{distance:{type:p,default:0},decay:{type:p,default:1},angle:{type:p,default:k/3},penumbra:{type:p,default:0},target:r},computed:{inst:function(){return new b.SpotLight}},beforeDestroy:function(){this.inst.target.parent&&this.inst.target.parent.remove(this.inst.target)},watch:{inst:{handler:function(a){if(this.target){a.target.position.copy(c(this.target));var b=this.vglObject3d.inst;b&&b.add(a.target)}Object.assign(a,{distance:parseFloat(this.distance),decay:parseFloat(this.decay),angle:parseFloat(this.angle),penumbra:parseFloat(this.penumbra)})},immediate:!0},"vglObject3d.inst":function(a){a&&a.add(this.inst.target)},distance:function(a){this.inst.distance=parseFloat(a),this.vglUpdate&&this.vglUpdate()},decay:function(a){this.inst.decay=parseFloat(a),this.vglUpdate&&this.vglUpdate()},angle:function(a){this.inst.angle=parseFloat(a),this.vglUpdate&&this.vglUpdate()},penumbra:function(a){this.inst.penumbra=parseFloat(a),this.vglUpdate&&this.vglUpdate()},target:function(a){this.inst.target.position.copy(c(a)),this.vglUpdate&&this.vglUpdate()}}},a.VglTexture={inject:['vglTextures'],props:{src:q,name:q},data:function(){return{uuid:void 0}},computed:{inst:function(){return this.uuid===void 0?null:A[this.uuid]}},watch:{src:{handler:function(a){var c=this;new b.TextureLoader().load(a,function(a){A[a.uuid]=a,c.uuid=a.uuid})},immediate:!0},uuid:function(a,b){b!==void 0&&delete A[b],this.$set(this.vglTextures.forSet,this.name,a)},name:function(a,b){this.vglTextures.forGet[b]===this.uuid&&this.$delete(this.vglTextures.forSet,b),this.$set(this.vglTextures.forSet,a,this.uuid)}},beforeDestroy:function(){delete A[this.uuid],this.vglTextures.forGet[this.name]===this.uuid&&this.$delete(this.vglTextures.forSet,this.name)},render:function(a){return this.$slots.default?a('div',this.$slots.default):void 0}},a.VglLensFlare={isVglLensFlare:!0,mixins:[v],computed:{inst:function(){return new b.LensFlare}}},a.VglLensFlareTexture=M,a.VglExtrudeGeometry=N,a.VglTextGeometry={mixins:[N],props:{font:q,size:{type:p,default:100},height:{type:p,default:50},curveSegments:{type:p,default:12},bevelEnabled:t,bevelThickness:{type:p,default:10},bevelSize:{type:p,default:8},bevelSegments:{type:p,default:3},text:{type:q,default:''}},data:function(){return{f:void 0}},computed:{inst:function(){return this.f===void 0?new b.BufferGeometry:new b.TextBufferGeometry(this.text,{font:B[this.f],size:parseFloat(this.size),height:parseFloat(this.height),curveSegments:parseInt(this.curveSegments,10),bevelEnabled:this.bevelEnabled,bevelThickness:parseFloat(this.bevelThickness),bevelSize:parseFloat(this.bevelSize),bevelSegments:parseInt(this.bevelSegments,10)})}},watch:{font:{handler:function(a){var c=this;if(!!B[a])B[a].isFont?this.f=a:B[a].push(function(){a===c.font&&(c.f=a)});else if(B[a]=[function(){a===c.font&&(c.f=a)}],!/^data:.*?(?:;base64)?,.*$/.test(a)){// GET src data manually and pass as a data URI.
var d=new XMLHttpRequest;d.addEventListener('load',function(){new b.FontLoader().load('data:,'+encodeURIComponent(d.responseText),function(b){var c=B[a];B[a]=b,c.forEach(function(a){a()})})},!1),d.open('GET',a),d.send()}else new b.FontLoader().load(a,function(b){var c=B[a];B[a]=b,c.forEach(function(a){a()})})},immediate:!0}}},a.VglSpriteMaterial={mixins:[E],props:{color:{type:q,default:'#fff'},map:q},inject:['vglTextures'],computed:{inst:function(){return new b.SpriteMaterial},mapObject:function(){return this.vglTextures.forGet[this.map]||null}},watch:{inst:{handler:function(a){a.color.setStyle(this.color),Object.assign(a,{map:this.mapObject})},immediate:!0},color:function(a){this.inst.color.setStyle(a),this.inst.dispatchEvent({type:'update'})},mapObject:function(a,b){this.inst.map=a,b||(this.inst.needsUpdate=!0),this.inst.dispatchEvent({type:'update'})}}},a.VglGridHelper={mixins:[K],props:{size:{type:p,default:10},divisions:{type:p,default:10},colorCenterLine:{type:q,default:'#444444'},colorGrid:{type:q,default:'#888888'}},computed:{inst:function(){return new b.GridHelper(parseFloat(this.size),parseInt(this.divisions,10),this.colorCenterLine,this.colorGrid)}}},a.VglShadowMaterial={mixins:[E],computed:{inst:function(){return new b.ShadowMaterial}}},a.VglCameraHelper={mixins:[K],props:{camera:q},inject:['vglCameras'],computed:{inst:function(){var a=y[this.vglCameras.forGet[this.camera]];return a?new b.CameraHelper(a):new b.LineSegments}}},a.VglDirectionalLightHelper={mixins:[v],props:{color:{type:q},size:{type:p,default:1}},computed:{inst:function(){return this.i},hex:function(){return'color'in this.i&&this.i.parent&&this.i.parent.color.getHex()}},created:function(){var a=this.vglObject3d.inst;a&&(this.i=new b.DirectionalLightHelper(a,parseFloat(this.size),this.color))},data:function(){return{i:new b.Object3D}},watch:{color:function(a){'color'in this.i&&(this.inst.color=a,this.inst.update())},hex:function(a){a&&!this.color&&this.inst.update()},size:function(a){this.i.parent&&(this.i=new b.DirectionalLightHelper(this.i.parent,parseFloat(a),this.color))}}},Object.defineProperty(a,'__esModule',{value:!0})});
