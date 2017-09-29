(function(a,b){'object'==typeof exports&&'undefined'!=typeof module?b(exports,require('three')):'function'==typeof define&&define.amd?define(['exports','three'],b):b(a.VueGL={},a.THREE)})(this,function(a,b){'use strict';function c(a){var b=a.$parent;if(b)return b.$options.isVglAssets?b:c(b)}function d(a,b){return Object.create(a&&a.assets[b])}function e(a){var c=new b.Vector3;switch('undefined'==typeof a?'undefined':r(a)){case'number':c.setScalar(a);break;case'object':Array.isArray(a)?1===a.length?c.setScalar(parseFloat(a[0])):c.fromArray(a.map(function(a){return parseFloat(a)})):c.setX(parseFloat(a.x||0)).setY(parseFloat(a.y||0)).setZ(parseFloat(a.z||0));break;case'string':if(a.includes(';')){var d=a.split(';').map(function(a){return a.split(':')}),e=d.reduce(function(a,b){return a[b[0].trim()]=b[1],a},{});c.setX(parseFloat(e.x)).setY(parseFloat(e.y)).setZ(parseFloat(e.z))}else{var f=a.trim().split(/\s+/);1===f.length?c.setScalar(parseFloat(f[0])):c.fromArray(f.map(function(a){return parseFloat(a)}))}}return c}function f(a){var c=new b.Euler;switch('undefined'==typeof a?'undefined':r(a)){case'object':if(Array.isArray(a))c.fromArray(a.map(function(a,b){return 3>b?parseFloat(a):a.trim()}));else{var d=parseFloat(a.x||0),f=parseFloat(a.y||0),g=parseFloat(a.z||0);c.set(d,f,g,a.order&&a.order.trim())}break;case'string':if(a.includes(';')){var h=a.split(';').map(function(a){return a.split(':')}),i=h.reduce(function(a,b){return a[b[0].trim()]=b[1],a},{}),e=parseFloat(i.x),j=parseFloat(i.y),k=parseFloat(i.z);c.set(e,j,k,i.order&&i.order.trim())}else{var l=a.trim().split(/\s+/);c.fromArray(l.map(function(a,b){return 3>b?parseFloat(a):a.trim()}))}}return c}function g(a){var c=new b.Spherical;switch('undefined'==typeof a?'undefined':r(a)){case'number':c.radius=a;break;case'object':if(Array.isArray(a))c.set.apply(c,t(a.map(function(a){return parseFloat(a)})));else{var d=parseFloat(a.radius||1),e=parseFloat(a.phi||0),f=parseFloat(a.theta||0);c.set(d,e,f)}break;case'string':if(a.includes(';')){var g=a.split(';').map(function(a){return a.split(':')}),h=g.reduce(function(a,b){return a[b[0].trim()]=b[1],a},{}),i=parseFloat(h.radius),j=parseFloat(h.phi),k=parseFloat(h.theta);c.set(i,j,k)}else{var l=a.trim().split(/\s+/);c.set.apply(c,t(l.map(function(a){return parseFloat(a)})))}}return c.makeSafe()}function h(a,b){return'string'==typeof a?b?parseInt(a,10):parseFloat(a):a}function i(a){var b=a.$parent;if(b)return b.$options.isVglObject3d?b:i(b)}function j(a,b){var c=b.clientWidth,d=b.clientHeight;a.isPerspectiveCamera?a.aspect=c/d:(a.left=c/-2,a.right=c/2,a.top=d/2,a.bottom=d/-2),a.updateProjectionMatrix()}function k(a,b){a.setSize(b.clientWidth,b.clientHeight,!1)}function l(a){return Object.getPrototypeOf(a.assets.materials)}function m(a){return Object.getPrototypeOf(a.assets.geometries)}function n(a){return{props:['radius','detail'],computed:{inst:function(){return new a(h(this.radius),h(this.detail,!0))}}}}function o(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return!b.some(function(a){return a!==void 0})}var p=String.prototype,q={isVglAssets:!0,data:function(){var a=c(this)||null;return{assets:{materials:d(a,'materials'),geometries:d(a,'geometries'),attributes:d(a,'attributes')}}},render:function(a){if(this.$slots.default)return a('div',this.$slots.default)}},r='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&'function'==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?'symbol':typeof a},s=function(){function a(a){this.value=a}function b(b){function c(e,f){try{var g=b[e](f),h=g.value;h instanceof a?Promise.resolve(h.value).then(function(a){c('next',a)},function(a){c('throw',a)}):d(g.done?'return':'normal',g.value)}catch(a){d('throw',a)}}function d(a,b){'return'===a?e.resolve({value:b,done:!0}):'throw'===a?e.reject(b):e.resolve({value:b,done:!1}),e=e.next,e?c(e.key,e.arg):f=null}var e,f;this._invoke=function(a,b){return new Promise(function(d,g){var h={key:a,arg:b,resolve:d,reject:g,next:null};f?f=f.next=h:(e=f=h,c(a,b))})},'function'!=typeof b.return&&(this.return=void 0)}return'function'==typeof Symbol&&Symbol.asyncIterator&&(b.prototype[Symbol.asyncIterator]=function(){return this}),b.prototype.next=function(a){return this._invoke('next',a)},b.prototype.throw=function(a){return this._invoke('throw',a)},b.prototype.return=function(a){return this._invoke('return',a)},{wrap:function(a){return function(){return new b(a.apply(this,arguments))}},await:function(b){return new a(b)}}}(),t=function(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)};p.includes||(p.includes=function(a){return 0<=this.indexOf(a)});var u={isVglObject3d:!0,mixins:[q],props:['name','position','rotation','scale'],computed:{inst:function(){return new b.Object3D}},created:function(){var a=this.inst;this.position&&a.position.copy(e(this.position)),this.rotation&&a.rotation.copy(f(this.rotation)),this.scale&&a.scale.copy(e(this.scale)),this.name!==void 0&&(a.name=this.name);var b=i(this);b&&b.inst.add(a)},beforeDestroy:function(){var a=this.inst;a.parent&&a.parent.remove(a)},watch:{position:function(a){this.inst.position.copy(e(a))},rotation:function(a){this.inst.rotation.copy(f(a))},scale:function(a){this.inst.scale.copy(e(a||1))},inst:function(a,b){b.children.length&&a.add.apply(a,t(b.children)),a.position.copy(b.position),a.rotation.copy(b.rotation),a.scale.copy(b.scale);var c=b.parent;c&&(c.remove(b),c.add(a))},name:function(a){this.inst.name=a}}},v={mixins:[u],props:['orbitTarget','orbitPosition'],inject:['cameras'],computed:{inst:function(){return new b.Camera}},created:function(){var a=this.inst,b=this.orbitPosition,c=this.orbitTarget;if(b||c){var d=e(c);b&&a.position.setFromSpherical(g(b)).add(d),a.lookAt(d)}this.$set(this.cameras,this.name,this.inst)},beforeDestroy:function(){this.cameras[this.name]===this.inst&&this.$delete(this.cameras,this.name)},watch:{inst:function(a){this.cameras[this.name]=a},orbitTarget:function(a){var b=this.inst,c=e(a);this.orbitPosition&&b.position.setFromSpherical(g(this.orbitPosition)).add(c),b.lookAt(c)},orbitPosition:function(a){var b=this.inst,c=g(a);b.position.setFromSpherical(c);var d=e(this.orbitTarget);this.orbitTarget&&b.add(d),b.lookAt(d)}}},w={mixins:[u],props:['color','intensity'],computed:{inst:function(){return new b.Light}},created:function(){this.color&&this.inst.color.setStyle(this.color),this.intensity&&(this.inst.intensity=parseFloat(this.intensity))},watch:{color:function(a){this.inst.color.setStyle(a)},intensity:function(a){this.inst.intensity=parseFloat(a)}}},x={mixins:[q],props:['name'],computed:{inst:function(){return new b.Material}},watch:{inst:function(a){var b=l(this);b&&(b[this.name]=a)}},created:function(){var a=l(this);a&&this.$set(a,this.name,this.inst)},beforeDestroy:function(){var a=l(this);a&&a[this.name]===this.inst&&this.$delete(a,this.name)}},y={mixins:[q],props:['name'],computed:{inst:function(){return new b.Geometry}},watch:{inst:function(a){var b=m(this);b&&(b[this.name]=a)}},created:function(){var a=m(this);a&&this.$set(a,this.name,this.inst)},beforeDestroy:function(){var a=m(this);a&&a[this.name]===this.inst&&this.$delete(a,this.name)}},z={props:['material'],computed:{mtl:function(){var a=Object.getPrototypeOf(this.assets.materials);if(a)return a[this.material]}},created:function(){this.mtl&&(this.inst.material=this.mtl)},watch:{mtl:function(a){this.inst.material=a}}},A={props:['geometry'],computed:{geo:function(){var a=Object.getPrototypeOf(this.assets.geometries);if(a)return a[this.geometry]}},created:function(){this.geo&&(this.inst.geometry=this.geo)},watch:{geo:function(a){this.inst.geometry=a}}},B={mixins:[u,A,z],computed:{inst:function(){return new b.Line}}},C={mixins:[B],computed:{inst:function(){return new b.LineSegments}}},D={mixins:[y],props:['radiusTop','radiusBottom','height','radialSegments','heightSegments','openEnded','thetaStart','thetaLength'],computed:{inst:function(){return new b.CylinderGeometry(h(this.radiusTop),h(this.radiusBottom),h(this.height),h(this.radialSegments,!0),h(this.heightSegments,!0),this.openEnded,h(this.thetaStart),h(this.thetaLength))}}},E={mixins:[y,n(b.DodecahedronGeometry)]},F={mixins:[y,n(b.IcosahedronGeometry)]},G={mixins:[y,n(b.OctahedronGeometry)]},H={mixins:[y,n(b.TetrahedronGeometry)]};a.VglAssets=q,a.VglObject3d=u,a.VglScene={mixins:[u],inject:['scenes'],computed:{inst:function(){return new b.Scene}},created:function(){this.$set(this.scenes,this.name,this.inst)},beforeDestroy:function(){this.scenes[this.name]===this.inst&&this.$delete(this.scenes,this.name)},watch:{inst:function(a){this.scenes[this.name]=a}}},a.VglCamera=v,a.VglRenderer={mixins:[q],props:['precision','alpha','premultipliedAlpha','antialias','stencil','preserveDrawingBuffer','depth','logarithmicDepthBuffer','camera','scene'],provide:function(){return{cameras:this.cameras,scenes:this.scenes}},data:function(){return{cameras:Object.create(null),scenes:Object.create(null),key:0,req:!0}},computed:{opt:function(){return{precision:this.precision,alpha:this.alpha,premultipliedAlpha:this.premultipliedAlpha===void 0||this.premultipliedAlpha,antialias:this.antialias,stencil:this.stencil===void 0||this.stencil,preserveDrawingBuffer:this.preserveDrawingBuffer,depth:this.depth===void 0||this.depth,logarithmicDepthBuffer:this.logarithmicDepthBuffer}},inst:function(){return new b.WebGLRenderer(Object.assign({canvas:this.$refs.rdr},this.opt))},cmr:function(){return this.cameras[this.camera]},scn:function(){return this.scenes[this.scene]}},methods:{resize:function(){k(this.inst,this.$el),this.cmr&&(j(this.cmr,this.$el),this.scn&&this.render())},render:function(){var a=this;this.req&&(this.$nextTick(function(){requestAnimationFrame(function(){a.scn&&a.cmr&&a.inst.render(a.scn,a.cmr),a.req=!0})}),this.req=!1)}},watch:{opt:function(){var a=this;++this.key,this.$nextTick(function(){a.resize()})},scn:function(a){a&&this.render()},cmr:function(a){a&&(j(a,this.$el),this.render())}},updated:function(){this.render()},render:function(a){var b=this;return a('div',[a('canvas',{ref:'rdr',key:this.key},this.$slots.default),a('iframe',{ref:'frm',style:{visibility:'hidden',width:'100%',height:'100%'},on:{load:function(a){a.target.contentWindow.addEventListener('resize',b.resize),b.$nextTick(b.resize)}}})])}},a.VglPerspectiveCamera={mixins:[v],props:['zoom','near','far','fov'],computed:{inst:function(){return new b.PerspectiveCamera}},created:function(){var a=this.inst;this.zoom&&(a.zoom=parseFloat(this.zoom)),this.near&&(a.near=parseFloat(this.near)),this.far&&(a.far=parseFloat(this.far)),this.fov&&(a.fov=parseFloat(this.fov))},watch:{zoom:function(a){this.inst.zoom=parseFloat(a)},near:function(a){this.inst.near=parseFloat(a)},far:function(a){this.inst.far=parseFloat(a)},fov:function(a){this.inst.fov=parseFloat(a)}}},a.VglGroup={mixins:[u],computed:{inst:function(){return new b.Group}}},a.VglLight=w,a.VglDirectionalLight={mixins:[w],computed:{inst:function(){return new b.DirectionalLight}}},a.VglAmbientLight={mixins:[w],computed:{inst:function(){return new b.AmbientLight}}},a.VglMaterial=x,a.VglPointsMaterial={mixins:[x],props:['color','size','sizeAttenuation'],computed:{inst:function(){return new b.PointsMaterial}},created:function(){this.color&&this.inst.color.setStyle(this.color),this.size&&(this.inst.size=parseFloat(this.size)),this.sizeAttenuation!==void 0&&(this.inst.sizeAttenuation=this.sizeAttenuation)},watch:{color:function(a){this.inst.color.setStyle(a)},size:function(a){this.inst.size=parseFloat(a)},sizeAttenuation:function(b){this.inst.sizeAttenuation=b}}},a.VglGeometry=y,a.VglSphereGeometry={mixins:[y],props:['radius','widthSegments','heightSegments','phiStart','phiLength','thetaStart','thetaLength'],computed:{inst:function(){return new b.SphereGeometry(h(this.radius),h(this.widthSegments,!0),h(this.heightSegments,!0),h(this.phiStart),h(this.phiLength),h(this.thetaStart),h(this.thetaLength))}}},a.VglMeshStandardMaterial={mixins:[x],props:['color'],computed:{inst:function(){return new b.MeshStandardMaterial}},created:function(){this.color&&this.inst.color.setStyle(this.color)},watch:{color:function(a){this.inst.color.setStyle(a)}}},a.VglMesh={mixins:[u,A,z],computed:{inst:function(){return new b.Mesh}}},a.VglPoints={mixins:[u,A,z],computed:{inst:function(){return new b.Points}}},a.VglLineBasicMaterial={mixins:[x],props:['color','lights','linewidth','linecap','linejoin'],computed:{inst:function(){return new b.LineBasicMaterial}},created:function(){this.lights&&(this.inst.lights=this.lights),this.linewidth&&(this.inst.linewidth=h(this.linewidth)),this.linecap&&(this.inst.linecap=this.linecap),this.linejoin&&(this.inst.linejoin=this.linejoin),this.color&&this.inst.color.setStyle(this.color)},watch:{color:function(a){this.inst.color.setStyle(a)},lights:function(a){this.inst.lights=a},linewidth:function(a){this.inst.linewidth=h(a)},linecap:function(a){this.inst.linecap=a},linejoin:function(a){this.inst.linejoin=a}}},a.VglLine=B,a.VglSprite={mixins:[u,z],computed:{inst:function(){return new b.Sprite}}},a.VglBoxGeometry={mixins:[y],props:['width','height','depth','widthSegments','heightSegments','depthSegments'],computed:{inst:function(){return new b.BoxGeometry(h(this.width),h(this.height),h(this.depth),h(this.widthSegments,!0),h(this.heightSegments,!0),h(this.depthSegments,!0))}}},a.VglCircleGeometry={mixins:[y],props:['radius','segments','thetaStart','thetaLength'],computed:{inst:function(){return new b.CircleGeometry(h(this.radius),h(this.segments,!0),h(this.thetaStart),h(this.thetaLength))}}},a.VglLineSegments=C,a.VglLineLoop={mixins:[B],computed:{inst:function(){return new b.LineLoop}}},a.VglConeGeometry={mixins:[D],props:['radius'],computed:{inst:function(){return new b.ConeGeometry(h(this.radius),h(this.height),h(this.radialSegments,!0),h(this.heightSegments,!0),this.openEnded,h(this.thetaStart),h(this.thetaLength))}}},a.VglAxisHelper={mixins:[C],props:['size'],computed:{inst:function(){return new b.AxisHelper(h(this.size))}}},a.VglOrthographicCamera={mixins:[v],props:['zoom','near','far'],computed:{inst:function(){return new b.OrthographicCamera}},created:function(){var a=this.inst;this.zoom&&(a.zoom=parseFloat(this.zoom)),this.near&&(a.near=parseFloat(this.near)),this.far&&(a.far=parseFloat(this.far))},watch:{zoom:function(a){this.inst.zoom=parseFloat(a)},near:function(a){this.inst.near=parseFloat(a)},far:function(a){this.inst.far=parseFloat(a)}}},a.VglCylinderGeometry=D,a.VglPlaneGeometry={mixins:[y],props:['width','height','widthSegments','heightSegments'],computed:{inst:function(){return new b.PlaneGeometry(h(this.width),h(this.height),h(this.widthSegments,!0),h(this.heightSegments,!0))}}},a.VglDodecahedronGeometry=E,a.VglIcosahedronGeometry=F,a.VglOctahedronGeometry=G,a.VglRingGeometry={mixins:[y],props:['innerRadius','outerRadius','thetaSegments','phiSegments','thetaStart','thetaLength'],computed:{inst:function(){return new b.RingGeometry(h(this.innerRadius),h(this.outerRadius),h(this.thetaSegments,!0),h(this.phiSegments,!0),h(this.thetaStart),h(this.thetaLength))}}},a.VglTetrahedronGeometry=H,a.VglTorusGeometry={mixins:[y],props:['radius','tube','radialSegments','tubularSegments','arc'],computed:{inst:function(){return new b.TorusGeometry(h(this.radius),h(this.tube),h(this.radialSegments,!0),h(this.tubularSegments,!0),h(this.arc))}}},a.VglTorusKnotGeometry={mixins:[y],props:['radius','tube','radialSegments','tubularSegments','p','q'],computed:{inst:function(){return new b.TorusKnotGeometry(h(this.radius),h(this.tube),h(this.tubularSegments,!0),h(this.radialSegments,!0),h(this.p),h(this.q))}}},a.VglArrowHelper={mixins:[u],props:['dir','length','color','headLength','headWidth'],computed:{inst:function(){return new b.ArrowHelper(new b.Vector3(1),new b.Vector3())},len:function(){var a=this.length===void 0?1:this.length;return[parseFloat(a),h(this.headLength),h(this.headWidth)]}},created:function(){if(this.dir&&this.inst.setDirection(e(this.dir).normalize()),!o(this.length,this.headLength,this.headWidth)){var a;(a=this.inst).setLength.apply(a,t(this.len))}this.color&&this.inst.setColor(new b.Color(this.color))},watch:{dir:function(a){this.inst.setDirection(e(a).normalize())},len:function(a){var b;(b=this.inst).setLength.apply(b,t(a))},color:function(a){this.inst.setColor(new b.Color(a))}}},a.VglBoxHelper={mixins:[C],props:['color'],computed:{inst:function(){return new b.BoxHelper}},created:function(){var a=this.inst;this.color&&a.material.color.setStyle(this.color),a.parent&&a.setFromObject(a.parent)},watch:{color:function(){this.inst.material.color.setStyle(this.color)}}},Object.defineProperty(a,'__esModule',{value:!0})});
