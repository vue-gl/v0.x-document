(function(a,b){if("function"==typeof define&&define.amd)define("VueGL",["exports","three"],b);else if("undefined"!=typeof exports)b(exports,require("three"));else{var c={exports:{}};b(c.exports,a.THREE),a.VueGL=c.exports}})(this,function(a,h){"use strict";function d(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}function c(d){var a=d.$parent;if(a)return a.$options.isVglAssets?a:c(a)}function b(c,a){return Object.create(c&&c.assets[a])}function e(e){var f=new h.Vector3;switch("undefined"==typeof e?"undefined":o(e)){case"number":f.setScalar(e);break;case"object":Array.isArray(e)?1===e.length?f.setScalar(parseFloat(e[0])):f.fromArray(e.map(function(b){return parseFloat(b)})):f.setX(parseFloat(e.x||0)).setY(parseFloat(e.y||0)).setZ(parseFloat(e.z||0));break;case"string":if(e.includes(";")){var b=e.split(";").map(function(b){return b.split(":")}),c=b.reduce(function(c,a){return c[a[0].trim()]=a[1],c},{});f.setX(parseFloat(c.x)).setY(parseFloat(c.y)).setZ(parseFloat(c.z))}else{var d=e.trim().split(/\s+/);1===d.length?f.setScalar(parseFloat(d[0])):f.fromArray(d.map(function(b){return parseFloat(b)}))}}return f}function f(i){var j=new h.Euler;switch("undefined"==typeof i?"undefined":o(i)){case"object":if(Array.isArray(i))j.fromArray(i.map(function(c,a){return 3>a?parseFloat(c):c.trim()}));else{var b=parseFloat(i.x||0),c=parseFloat(i.y||0),d=parseFloat(i.z||0);j.set(b,c,d,i.order&&i.order.trim())}break;case"string":if(i.includes(";")){var e=i.split(";").map(function(b){return b.split(":")}),k=e.reduce(function(c,a){return c[a[0].trim()]=a[1],c},{}),l=parseFloat(k.x),m=parseFloat(k.y),f=parseFloat(k.z);j.set(l,m,f,k.order&&k.order.trim())}else{var g=i.trim().split(/\s+/);j.fromArray(g.map(function(c,a){return 3>a?parseFloat(c):c.trim()}))}}return j}function g(i){var j=new h.Spherical;switch("undefined"==typeof i?"undefined":o(i)){case"number":j.radius=i;break;case"object":if(Array.isArray(i))j.set.apply(j,d(i.map(function(b){return parseFloat(b)})));else{var b=parseFloat(i.radius||1),c=parseFloat(i.phi||0),k=parseFloat(i.theta||0);j.set(b,c,k)}break;case"string":if(i.includes(";")){var e=i.split(";").map(function(b){return b.split(":")}),l=e.reduce(function(c,a){return c[a[0].trim()]=a[1],c},{}),m=parseFloat(l.radius),n=parseFloat(l.phi),f=parseFloat(l.theta);j.set(m,n,f)}else{var g=i.trim().split(/\s+/);j.set.apply(j,d(g.map(function(b){return parseFloat(b)})))}}return j.makeSafe()}function i(c){var a=c.$parent;if(a)return a.$options.isVglObject3d?a:i(a)}function j(c,a){c&&(c.aspect=a.clientWidth/a.clientHeight,c.updateProjectionMatrix())}function k(c,a){c.setSize(a.clientWidth,a.clientHeight,!1)}function l(b){return Object.getPrototypeOf(b.assets.materials)}function m(b){return Object.getPrototypeOf(b.assets.geometries)}function n(b){return"string"==typeof b?parseFloat(b):b}Object.defineProperty(a,"__esModule",{value:!0}),a.VglLine=a.VglLineBasicMaterial=a.VglPoints=a.VglMesh=a.VglMeshStandardMaterial=a.VglSphereGeometry=a.VglGeometry=a.VglPointsMaterial=a.VglMaterial=a.VglAmbientLight=a.VglDirectionalLight=a.VglLight=a.VglGroup=a.VglPerspectiveCamera=a.VglRenderer=a.VglCamera=a.VglScene=a.VglObject3d=a.VglAssets=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},p={isVglAssets:!0,data:function(){var d=c(this)||null;return{assets:{materials:b(d,"materials"),geometries:b(d,"geometries"),attributes:b(d,"attributes")}}},render:function(b){if(this.$slots.default)return b("div",this.$slots.default)}},q={isVglObject3d:!0,mixins:[p],props:["name","position","rotation","scale"],computed:{inst:function(){return new h.Object3D}},created:function(){var c=this.inst;this.position&&c.position.copy(e(this.position)),this.rotation&&c.rotation.copy(f(this.rotation)),this.scale&&c.scale.copy(e(this.scale));var a=i(this);a&&a.inst.add(c)},beforeDestroy:function(){var b=this.inst;b.parent&&b.parent.remove(b)},watch:{position:function(b){this.inst.position.copy(e(b))},rotation:function(b){this.inst.rotation.copy(f(b))},scale:function(b){this.inst.scale.copy(e(b||1))},inst:function(e,a){a.children.length&&e.add.apply(e,d(a.children)),e.position.copy(a.position),e.rotation.copy(a.rotation),e.scale.copy(a.scale);var b=a.parent;b&&(b.remove(a),b.add(e))}}},r={mixins:[q],props:["orbitTarget","orbitPosition"],inject:["cameras"],computed:{inst:function(){return new h.Camera}},created:function(){var f=this.inst,a=this.orbitPosition,b=this.orbitTarget;if(a||b){var c=e(b);a&&f.position.setFromSpherical(g(a)).add(c),f.lookAt(c)}this.$set(this.cameras,this.name,this.inst)},beforeDestroy:function(){this.cameras[this.name]===this.inst&&this.$delete(this.cameras,this.name)},watch:{inst:function(b){this.cameras[this.name]=b},orbitTarget:function(d){var a=this.inst,b=e(d);this.orbitPosition&&a.position.setFromSpherical(g(this.orbitPosition)).add(b),a.lookAt(b)},orbitPosition:function(f){var a=this.inst,b=g(f);a.position.setFromSpherical(b);var c=e(this.orbitTarget);this.orbitTarget&&a.add(c),a.lookAt(c)}}},s={mixins:[q],props:["color","intensity"],computed:{inst:function(){return new h.Light}},created:function(){this.color&&this.inst.color.setStyle(this.color),this.intensity&&(this.inst.intensity=parseFloat(this.intensity))},watch:{color:function(b){this.inst.color.setStyle(b)},intensity:function(b){this.inst.intensity=parseFloat(b)}}},t={mixins:[p],props:["name"],computed:{inst:function(){return new h.Material}},watch:{inst:function(c){var a=l(this);a&&(a[this.name]=c)}},created:function(){var b=l(this);b&&this.$set(b,this.name,this.inst)},beforeDestroy:function(){var b=l(this);b&&b[this.name]===this.inst&&this.$delete(b,this.name)}},u={mixins:[p],props:["name"],computed:{inst:function(){return new h.Geometry}},watch:{inst:function(c){var a=m(this);a&&(a[this.name]=c)}},created:function(){var b=m(this);b&&this.$set(b,this.name,this.inst)},beforeDestroy:function(){var b=m(this);b&&b[this.name]===this.inst&&this.$delete(b,this.name)}},v={props:["material"],computed:{mtl:function(){var b=Object.getPrototypeOf(this.assets.materials);if(b)return b[this.material]}},created:function(){this.mtl&&(this.inst.material=this.mtl)},watch:{mtl:function(b){this.inst.material=b}}},w={props:["geometry"],computed:{geo:function(){var b=Object.getPrototypeOf(this.assets.geometries);if(b)return b[this.geometry]}},created:function(){this.geo&&(this.inst.geometry=this.geo)},watch:{geo:function(b){this.inst.geometry=b}}};a.VglAssets=p,a.VglObject3d=q,a.VglScene={mixins:[q],inject:["scenes"],computed:{inst:function(){return new h.Scene}},created:function(){this.$set(this.scenes,this.name,this.inst)},beforeDestroy:function(){this.scenes[this.name]===this.inst&&this.$delete(this.scenes,this.name)},watch:{inst:function(b){this.scenes[this.name]=b}}},a.VglCamera=r,a.VglRenderer={mixins:[p],props:["precision","alpha","premultipliedAlpha","antialias","stencil","preserveDrawingBuffer","depth","logarithmicDepthBuffer","camera","scene"],provide:function(){return{cameras:this.cameras,scenes:this.scenes}},data:function(){return{cameras:Object.create(null),scenes:Object.create(null),key:0,req:!0}},computed:{opt:function(){return{precision:this.precision,alpha:this.alpha,premultipliedAlpha:void 0===this.premultipliedAlpha||this.premultipliedAlpha,antialias:this.antialias,stencil:void 0===this.stencil||this.stencil,preserveDrawingBuffer:this.preserveDrawingBuffer,depth:void 0===this.depth||this.depth,logarithmicDepthBuffer:this.logarithmicDepthBuffer}},inst:function(){return new h.WebGLRenderer(Object.assign({canvas:this.$refs.rdr},this.opt))},cmr:function(){return this.cameras[this.camera]},scn:function(){return this.scenes[this.scene]}},methods:{resize:function(){k(this.inst,this.$el),j(this.cmr,this.$el),this.render()},render:function(){var a=this;this.req&&(this.$nextTick(function(){requestAnimationFrame(function(){a.scn&&a.cmr&&a.inst.render(a.scn,a.cmr),a.req=!0})}),this.req=!1)}},watch:{opt:function(){var a=this;++this.key,this.$nextTick(function(){a.resize()})},scn:function(){this.render()},cmr:function(b){j(b,this.$el),this.render()}},mounted:function(){var a=this;this.$refs.frm.contentWindow.addEventListener("resize",function(){a.resize()}),this.resize()},render:function(b){return b("div",[b("canvas",{ref:"rdr",key:this.key},this.$slots.default),b("iframe",{ref:"frm",style:{visibility:"hidden",width:"100%",height:"100%"}})])}},a.VglPerspectiveCamera={mixins:[r],props:["zoom","near","far","fov"],computed:{inst:function(){return new h.PerspectiveCamera}},created:function(){var b=this.inst;this.zoom&&(b.zoom=parseFloat(this.zoom)),this.near&&(b.near=parseFloat(this.near)),this.far&&(b.far=parseFloat(this.far)),this.fov&&(b.fov=parseFloat(this.fov))},watch:{zoom:function(b){this.inst.zoom=parseFloat(b)},near:function(b){this.inst.near=parseFloat(b)},far:function(b){this.inst.far=parseFloat(b)},fov:function(b){this.inst.fov=parseFloat(b)}}},a.VglGroup={mixins:[q],computed:{inst:function(){return new h.Group}}},a.VglLight=s,a.VglDirectionalLight={mixins:[s],computed:{inst:function(){return new h.DirectionalLight}}},a.VglAmbientLight={mixins:[s],computed:{inst:function(){return new h.AmbientLight}}},a.VglMaterial=t,a.VglPointsMaterial={mixins:[t],props:["color","size","sizeAttenuation"],computed:{inst:function(){return new h.PointsMaterial}},created:function(){this.color&&this.inst.color.setStyle(this.color),this.size&&(this.inst.size=parseFloat(this.size)),void 0!==this.sizeAttenuation&&(this.inst.sizeAttenuation=this.sizeAttenuation)},watch:{color:function(b){this.inst.color.setStyle(b)},size:function(b){this.inst.size=parseFloat(b)},sizeAttenuation:function(a){this.inst.sizeAttenuation=a}}},a.VglGeometry=u,a.VglSphereGeometry={mixins:[u],props:["radius","widthSegments","heightSegments","phiStart","phiLength","thetaStart","thetaLength"],computed:{inst:function(){return new h.SphereGeometry(n(this.radius),n(this.widthSegments),n(this.heightSegments),n(this.phiStart),n(this.phiLength),n(this.thetaStart),n(this.thetaLength))}}},a.VglMeshStandardMaterial={mixins:[t],props:["color"],computed:{inst:function(){return new h.MeshStandardMaterial}},created:function(){this.color&&this.inst.color.setStyle(this.color)},watch:{color:function(b){this.inst.color.setStyle(b)}}},a.VglMesh={mixins:[q,w,v],computed:{inst:function(){return new h.Mesh}}},a.VglPoints={mixins:[q,w,v],computed:{inst:function(){return new h.Points}}},a.VglLineBasicMaterial={mixins:[t],props:["color","lights","linewidth","linecap","linejoin"],computed:{inst:function(){return new h.LineBasicMaterial}},created:function(){this.lights&&(this.inst.lights=this.lights),this.linewidth&&(this.inst.linewidth=parseFloat(this.linewidth)),this.linecap&&(this.inst.linecap=this.linecap),this.linejoin&&(this.inst.linejoin=this.linejoin),this.color&&this.inst.color.setStyle(this.color)},watch:{color:function(b){this.inst.color.setStyle(b)},lights:function(b){this.inst.lights=b},linewidth:function(b){this.inst.linewidth=parseFloat(b)},linecap:function(b){this.inst.linecap=b},linejoin:function(b){this.inst.linejoin=b}}},a.VglLine={mixins:[q,w,v],computed:{inst:function(){return new h.Line}}}});

