(function(a,b){'object'==typeof exports&&'undefined'!=typeof module?b(exports,require('three')):'function'==typeof define&&define.amd?define(['exports','three'],b):b(a.VueGL={},a.THREE)})(this,function(a,b){'use strict';function c(a){var b=a.$parent;if(b)return b.$options.isVglAssets?b:c(b)}function d(a,b){return Object.create(a&&a.assets[b])}function e(a){var c=new b.Vector3;switch('undefined'==typeof a?'undefined':p(a)){case'number':c.setScalar(a);break;case'object':Array.isArray(a)?1===a.length?c.setScalar(parseFloat(a[0])):c.fromArray(a.map(function(a){return parseFloat(a)})):c.setX(parseFloat(a.x||0)).setY(parseFloat(a.y||0)).setZ(parseFloat(a.z||0));break;case'string':if(a.includes(';')){var d=a.split(';').map(function(a){return a.split(':')}),e=d.reduce(function(a,b){return a[b[0].trim()]=b[1],a},{});c.setX(parseFloat(e.x)).setY(parseFloat(e.y)).setZ(parseFloat(e.z))}else{var f=a.trim().split(/\s+/);1===f.length?c.setScalar(parseFloat(f[0])):c.fromArray(f.map(function(a){return parseFloat(a)}))}}return c}function f(a){var c=new b.Euler;switch('undefined'==typeof a?'undefined':p(a)){case'object':if(Array.isArray(a))c.fromArray(a.map(function(a,b){return 3>b?parseFloat(a):a.trim()}));else{var d=parseFloat(a.x||0),f=parseFloat(a.y||0),g=parseFloat(a.z||0);c.set(d,f,g,a.order&&a.order.trim())}break;case'string':if(a.includes(';')){var h=a.split(';').map(function(a){return a.split(':')}),i=h.reduce(function(a,b){return a[b[0].trim()]=b[1],a},{}),e=parseFloat(i.x),j=parseFloat(i.y),k=parseFloat(i.z);c.set(e,j,k,i.order&&i.order.trim())}else{var l=a.trim().split(/\s+/);c.fromArray(l.map(function(a,b){return 3>b?parseFloat(a):a.trim()}))}}return c}function g(a){var c=new b.Spherical;switch('undefined'==typeof a?'undefined':p(a)){case'number':c.radius=a;break;case'object':if(Array.isArray(a))c.set.apply(c,r(a.map(function(a){return parseFloat(a)})));else{var d=parseFloat(a.radius||1),e=parseFloat(a.phi||0),f=parseFloat(a.theta||0);c.set(d,e,f)}break;case'string':if(a.includes(';')){var g=a.split(';').map(function(a){return a.split(':')}),h=g.reduce(function(a,b){return a[b[0].trim()]=b[1],a},{}),i=parseFloat(h.radius),j=parseFloat(h.phi),k=parseFloat(h.theta);c.set(i,j,k)}else{var l=a.trim().split(/\s+/);c.set.apply(c,r(l.map(function(a){return parseFloat(a)})))}}return c.makeSafe()}function h(a){return'string'==typeof a?parseFloat(a):a}function i(a){var b=a.$parent;if(b)return b.$options.isVglObject3d?b:i(b)}function j(a,b){var c=b.clientWidth,d=b.clientHeight;a.isPerspectiveCamera?a.aspect=c/d:(a.left=c/-2,a.right=c/2,a.top=d/2,a.bottom=d/-2),a.updateProjectionMatrix()}function k(a,b){a.setSize(b.clientWidth,b.clientHeight,!1)}function l(a){return Object.getPrototypeOf(a.assets.materials)}function m(a){return Object.getPrototypeOf(a.assets.geometries)}var n=String.prototype,o={isVglAssets:!0,data:function(){var a=c(this)||null;return{assets:{materials:d(a,'materials'),geometries:d(a,'geometries'),attributes:d(a,'attributes')}}},render:function(a){if(this.$slots.default)return a('div',this.$slots.default)}},p='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&'function'==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?'symbol':typeof a},q=function(){function a(a){this.value=a}function b(b){function c(e,f){try{var g=b[e](f),h=g.value;h instanceof a?Promise.resolve(h.value).then(function(a){c('next',a)},function(a){c('throw',a)}):d(g.done?'return':'normal',g.value)}catch(a){d('throw',a)}}function d(a,b){'return'===a?e.resolve({value:b,done:!0}):'throw'===a?e.reject(b):e.resolve({value:b,done:!1}),e=e.next,e?c(e.key,e.arg):f=null}var e,f;this._invoke=function(a,b){return new Promise(function(d,g){var h={key:a,arg:b,resolve:d,reject:g,next:null};f?f=f.next=h:(e=f=h,c(a,b))})},'function'!=typeof b.return&&(this.return=void 0)}return'function'==typeof Symbol&&Symbol.asyncIterator&&(b.prototype[Symbol.asyncIterator]=function(){return this}),b.prototype.next=function(a){return this._invoke('next',a)},b.prototype.throw=function(a){return this._invoke('throw',a)},b.prototype.return=function(a){return this._invoke('return',a)},{wrap:function(a){return function(){return new b(a.apply(this,arguments))}},await:function(b){return new a(b)}}}(),r=function(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)};n.includes||(n.includes=function(a){return 0<=this.indexOf(a)});var s={isVglObject3d:!0,mixins:[o],props:['name','position','rotation','scale'],computed:{inst:function(){return new b.Object3D}},created:function(){var a=this.inst;this.position&&a.position.copy(e(this.position)),this.rotation&&a.rotation.copy(f(this.rotation)),this.scale&&a.scale.copy(e(this.scale));var b=i(this);b&&b.inst.add(a)},beforeDestroy:function(){var a=this.inst;a.parent&&a.parent.remove(a)},watch:{position:function(a){this.inst.position.copy(e(a))},rotation:function(a){this.inst.rotation.copy(f(a))},scale:function(a){this.inst.scale.copy(e(a||1))},inst:function(a,b){b.children.length&&a.add.apply(a,r(b.children)),a.position.copy(b.position),a.rotation.copy(b.rotation),a.scale.copy(b.scale);var c=b.parent;c&&(c.remove(b),c.add(a))}}},t={mixins:[s],props:['orbitTarget','orbitPosition'],inject:['cameras'],computed:{inst:function(){return new b.Camera}},created:function(){var a=this.inst,b=this.orbitPosition,c=this.orbitTarget;if(b||c){var d=e(c);b&&a.position.setFromSpherical(g(b)).add(d),a.lookAt(d)}this.$set(this.cameras,this.name,this.inst)},beforeDestroy:function(){this.cameras[this.name]===this.inst&&this.$delete(this.cameras,this.name)},watch:{inst:function(a){this.cameras[this.name]=a},orbitTarget:function(a){var b=this.inst,c=e(a);this.orbitPosition&&b.position.setFromSpherical(g(this.orbitPosition)).add(c),b.lookAt(c)},orbitPosition:function(a){var b=this.inst,c=g(a);b.position.setFromSpherical(c);var d=e(this.orbitTarget);this.orbitTarget&&b.add(d),b.lookAt(d)}}},u={mixins:[s],props:['color','intensity'],computed:{inst:function(){return new b.Light}},created:function(){this.color&&this.inst.color.setStyle(this.color),this.intensity&&(this.inst.intensity=parseFloat(this.intensity))},watch:{color:function(a){this.inst.color.setStyle(a)},intensity:function(a){this.inst.intensity=parseFloat(a)}}},v={mixins:[o],props:['name'],computed:{inst:function(){return new b.Material}},watch:{inst:function(a){var b=l(this);b&&(b[this.name]=a)}},created:function(){var a=l(this);a&&this.$set(a,this.name,this.inst)},beforeDestroy:function(){var a=l(this);a&&a[this.name]===this.inst&&this.$delete(a,this.name)}},w={mixins:[o],props:['name'],computed:{inst:function(){return new b.Geometry}},watch:{inst:function(a){var b=m(this);b&&(b[this.name]=a)}},created:function(){var a=m(this);a&&this.$set(a,this.name,this.inst)},beforeDestroy:function(){var a=m(this);a&&a[this.name]===this.inst&&this.$delete(a,this.name)}},x={props:['material'],computed:{mtl:function(){var a=Object.getPrototypeOf(this.assets.materials);if(a)return a[this.material]}},created:function(){this.mtl&&(this.inst.material=this.mtl)},watch:{mtl:function(a){this.inst.material=a}}},y={props:['geometry'],computed:{geo:function(){var a=Object.getPrototypeOf(this.assets.geometries);if(a)return a[this.geometry]}},created:function(){this.geo&&(this.inst.geometry=this.geo)},watch:{geo:function(a){this.inst.geometry=a}}},z={mixins:[s,y,x],computed:{inst:function(){return new b.Line}}},A={mixins:[z],computed:{inst:function(){return new b.LineSegments}}},B={mixins:[w],props:['radiusTop','radiusBottom','height','radialSegments','heightSegments','openEnded','thetaStart','thetaLength'],computed:{inst:function(){return new b.CylinderGeometry(h(this.radiusTop),h(this.radiusBottom),h(this.height),h(this.radialSegments),h(this.heightSegments),this.openEnded,h(this.thetaStart),h(this.thetaLength))}}};a.VglAssets=o,a.VglObject3d=s,a.VglScene={mixins:[s],inject:['scenes'],computed:{inst:function(){return new b.Scene}},created:function(){this.$set(this.scenes,this.name,this.inst)},beforeDestroy:function(){this.scenes[this.name]===this.inst&&this.$delete(this.scenes,this.name)},watch:{inst:function(a){this.scenes[this.name]=a}}},a.VglCamera=t,a.VglRenderer={mixins:[o],props:['precision','alpha','premultipliedAlpha','antialias','stencil','preserveDrawingBuffer','depth','logarithmicDepthBuffer','camera','scene'],provide:function(){return{cameras:this.cameras,scenes:this.scenes}},data:function(){return{cameras:Object.create(null),scenes:Object.create(null),key:0,req:!0}},computed:{opt:function(){return{precision:this.precision,alpha:this.alpha,premultipliedAlpha:this.premultipliedAlpha===void 0||this.premultipliedAlpha,antialias:this.antialias,stencil:this.stencil===void 0||this.stencil,preserveDrawingBuffer:this.preserveDrawingBuffer,depth:this.depth===void 0||this.depth,logarithmicDepthBuffer:this.logarithmicDepthBuffer}},inst:function(){return new b.WebGLRenderer(Object.assign({canvas:this.$refs.rdr},this.opt))},cmr:function(){return this.cameras[this.camera]},scn:function(){return this.scenes[this.scene]}},methods:{resize:function(){k(this.inst,this.$el),this.cmr&&(j(this.cmr,this.$el),this.scn&&this.render())},render:function(){var a=this;this.req&&(this.$nextTick(function(){requestAnimationFrame(function(){a.scn&&a.cmr&&a.inst.render(a.scn,a.cmr),a.req=!0})}),this.req=!1)}},watch:{opt:function(){var a=this;++this.key,this.$nextTick(function(){a.resize()})},scn:function(a){a&&this.render()},cmr:function(a){a&&(j(a,this.$el),this.render())}},updated:function(){this.render()},render:function(a){var b=this;return a('div',[a('canvas',{ref:'rdr',key:this.key},this.$slots.default),a('iframe',{ref:'frm',style:{visibility:'hidden',width:'100%',height:'100%'},on:{load:function(a){a.target.contentWindow.addEventListener('resize',b.resize),b.$nextTick(b.resize)}}})])}},a.VglPerspectiveCamera={mixins:[t],props:['zoom','near','far','fov'],computed:{inst:function(){return new b.PerspectiveCamera}},created:function(){var a=this.inst;this.zoom&&(a.zoom=parseFloat(this.zoom)),this.near&&(a.near=parseFloat(this.near)),this.far&&(a.far=parseFloat(this.far)),this.fov&&(a.fov=parseFloat(this.fov))},watch:{zoom:function(a){this.inst.zoom=parseFloat(a)},near:function(a){this.inst.near=parseFloat(a)},far:function(a){this.inst.far=parseFloat(a)},fov:function(a){this.inst.fov=parseFloat(a)}}},a.VglGroup={mixins:[s],computed:{inst:function(){return new b.Group}}},a.VglLight=u,a.VglDirectionalLight={mixins:[u],computed:{inst:function(){return new b.DirectionalLight}}},a.VglAmbientLight={mixins:[u],computed:{inst:function(){return new b.AmbientLight}}},a.VglMaterial=v,a.VglPointsMaterial={mixins:[v],props:['color','size','sizeAttenuation'],computed:{inst:function(){return new b.PointsMaterial}},created:function(){this.color&&this.inst.color.setStyle(this.color),this.size&&(this.inst.size=parseFloat(this.size)),this.sizeAttenuation!==void 0&&(this.inst.sizeAttenuation=this.sizeAttenuation)},watch:{color:function(a){this.inst.color.setStyle(a)},size:function(a){this.inst.size=parseFloat(a)},sizeAttenuation:function(b){this.inst.sizeAttenuation=b}}},a.VglGeometry=w,a.VglSphereGeometry={mixins:[w],props:['radius','widthSegments','heightSegments','phiStart','phiLength','thetaStart','thetaLength'],computed:{inst:function(){return new b.SphereGeometry(h(this.radius),h(this.widthSegments),h(this.heightSegments),h(this.phiStart),h(this.phiLength),h(this.thetaStart),h(this.thetaLength))}}},a.VglMeshStandardMaterial={mixins:[v],props:['color'],computed:{inst:function(){return new b.MeshStandardMaterial}},created:function(){this.color&&this.inst.color.setStyle(this.color)},watch:{color:function(a){this.inst.color.setStyle(a)}}},a.VglMesh={mixins:[s,y,x],computed:{inst:function(){return new b.Mesh}}},a.VglPoints={mixins:[s,y,x],computed:{inst:function(){return new b.Points}}},a.VglLineBasicMaterial={mixins:[v],props:['color','lights','linewidth','linecap','linejoin'],computed:{inst:function(){return new b.LineBasicMaterial}},created:function(){this.lights&&(this.inst.lights=this.lights),this.linewidth&&(this.inst.linewidth=h(this.linewidth)),this.linecap&&(this.inst.linecap=this.linecap),this.linejoin&&(this.inst.linejoin=this.linejoin),this.color&&this.inst.color.setStyle(this.color)},watch:{color:function(a){this.inst.color.setStyle(a)},lights:function(a){this.inst.lights=a},linewidth:function(a){this.inst.linewidth=h(a)},linecap:function(a){this.inst.linecap=a},linejoin:function(a){this.inst.linejoin=a}}},a.VglLine=z,a.VglSprite={mixins:[s,x],computed:{inst:function(){return new b.Sprite}}},a.VglBoxGeometry={mixins:[w],props:['width','height','depth','widthSegments','heightSegments','depthSegments'],computed:{inst:function(){return new b.BoxGeometry(h(this.width),h(this.height),h(this.depth),h(this.widthSegments),h(this.heightSegments),h(this.depthSegments))}}},a.VglCircleGeometry={mixins:[w],props:['radius','segments','thetaStart','thetaLength'],computed:{inst:function(){return new b.CircleGeometry(h(this.radius),h(this.segments),h(this.thetaStart),h(this.thetaLength))}}},a.VglLineSegments=A,a.VglLineLoop={mixins:[z],computed:{inst:function(){return new b.LineLoop}}},a.VglConeGeometry={mixins:[B],props:['radius'],computed:{inst:function(){return new b.ConeGeometry(h(this.radius),h(this.height),h(this.radialSegments),h(this.heightSegments),this.openEnded,h(this.thetaStart),h(this.thetaLength))}}},a.VglAxisHelper={mixins:[A],props:['size'],computed:{inst:function(){return new b.AxisHelper(h(this.size))}}},a.VglOrthographicCamera={mixins:[t],props:['zoom','near','far'],computed:{inst:function(){return new b.OrthographicCamera}},created:function(){var a=this.inst;this.zoom&&(a.zoom=parseFloat(this.zoom)),this.near&&(a.near=parseFloat(this.near)),this.far&&(a.far=parseFloat(this.far))},watch:{zoom:function(a){this.inst.zoom=parseFloat(a)},near:function(a){this.inst.near=parseFloat(a)},far:function(a){this.inst.far=parseFloat(a)}}},a.VglCylinderGeometry=B,a.VglPlaneGeometry={mixins:[w],props:['width','height','widthSegments','heightSegments'],computed:{inst:function(){return new b.PlaneGeometry(h(this.width),h(this.height),h(this.widthSegments),h(this.heightSegments))}}},Object.defineProperty(a,'__esModule',{value:!0})});
