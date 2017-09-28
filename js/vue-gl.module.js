import{AmbientLight,AxisHelper,BoxGeometry,Camera,CircleGeometry,ConeGeometry,CylinderGeometry,DirectionalLight,DodecahedronGeometry,Euler,Geometry,Group,IcosahedronGeometry,Light,Line,LineBasicMaterial,LineLoop,LineSegments,Material,Mesh,MeshStandardMaterial,Object3D,OctahedronGeometry,OrthographicCamera,PerspectiveCamera,PlaneGeometry,Points,PointsMaterial,RingGeometry,Scene,SphereGeometry,Spherical,Sprite,TetrahedronGeometry,Vector3,WebGLRenderer}from"https://unpkg.com/three@0.87.1/build/three.module.js";function findParent(a){var b=a.$parent;if(b)return b.$options.isVglAssets?b:findParent(b)}function createCollection(a,b){return Object.create(a&&a.assets[b])}var VglAssets={isVglAssets:!0,data:function(){var a=findParent(this)||null;return{assets:{materials:createCollection(a,"materials"),geometries:createCollection(a,"geometries"),attributes:createCollection(a,"attributes")}}},render:function(a){if(this.$slots.default)return a("div",this.$slots.default)}},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},asyncGenerator=function(){function a(a){this.value=a}function b(b){function c(e,f){try{var g=b[e](f),h=g.value;h instanceof a?Promise.resolve(h.value).then(function(a){c("next",a)},function(a){c("throw",a)}):d(g.done?"return":"normal",g.value)}catch(a){d("throw",a)}}function d(a,b){"return"===a?e.resolve({value:b,done:!0}):"throw"===a?e.reject(b):e.resolve({value:b,done:!1});e=e.next,e?c(e.key,e.arg):f=null}var e,f;this._invoke=function(a,b){return new Promise(function(d,g){var h={key:a,arg:b,resolve:d,reject:g,next:null};f?f=f.next=h:(e=f=h,c(a,b))})},"function"!=typeof b.return&&(this.return=void 0)}return"function"==typeof Symbol&&Symbol.asyncIterator&&(b.prototype[Symbol.asyncIterator]=function(){return this}),b.prototype.next=function(a){return this._invoke("next",a)},b.prototype.throw=function(a){return this._invoke("throw",a)},b.prototype.return=function(a){return this._invoke("return",a)},{wrap:function(a){return function(){return new b(a.apply(this,arguments))}},await:function(b){return new a(b)}}}(),toConsumableArray=function(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)};String.prototype.includes||(String.prototype.includes=function(a){return 0<=this.indexOf(a)});function parseVector3(a){var b=new Vector3;switch("undefined"==typeof a?"undefined":_typeof(a)){case"number":b.setScalar(a);break;case"object":Array.isArray(a)?1===a.length?b.setScalar(parseFloat(a[0])):b.fromArray(a.map(function(a){return parseFloat(a)})):b.setX(parseFloat(a.x||0)).setY(parseFloat(a.y||0)).setZ(parseFloat(a.z||0));break;case"string":if(a.includes(";")){var c=a.split(";").map(function(a){return a.split(":")}),d=c.reduce(function(a,b){return a[b[0].trim()]=b[1],a},{});b.setX(parseFloat(d.x)).setY(parseFloat(d.y)).setZ(parseFloat(d.z))}else{var e=a.trim().split(/\s+/);1===e.length?b.setScalar(parseFloat(e[0])):b.fromArray(e.map(function(a){return parseFloat(a)}))}}return b}function parseEuler(a){var b=new Euler;switch("undefined"==typeof a?"undefined":_typeof(a)){case"object":if(Array.isArray(a))b.fromArray(a.map(function(a,b){return 3>b?parseFloat(a):a.trim()}));else{var c=parseFloat(a.x||0),d=parseFloat(a.y||0),f=parseFloat(a.z||0);b.set(c,d,f,a.order&&a.order.trim())}break;case"string":if(a.includes(";")){var g=a.split(";").map(function(a){return a.split(":")}),h=g.reduce(function(a,b){return a[b[0].trim()]=b[1],a},{}),e=parseFloat(h.x),i=parseFloat(h.y),j=parseFloat(h.z);b.set(e,i,j,h.order&&h.order.trim())}else{var k=a.trim().split(/\s+/);b.fromArray(k.map(function(a,b){return 3>b?parseFloat(a):a.trim()}))}}return b}function parseSpherical(a){var b=new Spherical;switch("undefined"==typeof a?"undefined":_typeof(a)){case"number":b.radius=a;break;case"object":if(Array.isArray(a))b.set.apply(b,toConsumableArray(a.map(function(a){return parseFloat(a)})));else{var c=parseFloat(a.radius||1),d=parseFloat(a.phi||0),e=parseFloat(a.theta||0);b.set(c,d,e)}break;case"string":if(a.includes(";")){var f=a.split(";").map(function(a){return a.split(":")}),g=f.reduce(function(a,b){return a[b[0].trim()]=b[1],a},{}),h=parseFloat(g.radius),i=parseFloat(g.phi),j=parseFloat(g.theta);b.set(h,i,j)}else{var k=a.trim().split(/\s+/);b.set.apply(b,toConsumableArray(k.map(function(a){return parseFloat(a)})))}}return b.makeSafe()}function parseNumber(a,b){return"string"==typeof a?b?parseInt(a,10):parseFloat(a):a}function findParent$1(a){var b=a.$parent;if(b)return b.$options.isVglObject3d?b:findParent$1(b)}var VglObject3d={isVglObject3d:!0,mixins:[VglAssets],props:["name","position","rotation","scale"],computed:{inst:function(){return new Object3D}},created:function(){var a=this.inst;this.position&&a.position.copy(parseVector3(this.position)),this.rotation&&a.rotation.copy(parseEuler(this.rotation)),this.scale&&a.scale.copy(parseVector3(this.scale));var b=findParent$1(this);b&&b.inst.add(a)},beforeDestroy:function(){var a=this.inst;a.parent&&a.parent.remove(a)},watch:{position:function(a){this.inst.position.copy(parseVector3(a))},rotation:function(a){this.inst.rotation.copy(parseEuler(a))},scale:function(a){this.inst.scale.copy(parseVector3(a||1))},inst:function(a,b){b.children.length&&a.add.apply(a,toConsumableArray(b.children)),a.position.copy(b.position),a.rotation.copy(b.rotation),a.scale.copy(b.scale);var c=b.parent;c&&(c.remove(b),c.add(a))}}},vglScene={mixins:[VglObject3d],inject:["scenes"],computed:{inst:function(){return new Scene}},created:function(){this.$set(this.scenes,this.name,this.inst)},beforeDestroy:function(){this.scenes[this.name]===this.inst&&this.$delete(this.scenes,this.name)},watch:{inst:function(a){this.scenes[this.name]=a}}},VglCamera={mixins:[VglObject3d],props:["orbitTarget","orbitPosition"],inject:["cameras"],computed:{inst:function(){return new Camera}},created:function(){var a=this.inst,b=this.orbitPosition,c=this.orbitTarget;if(b||c){var d=parseVector3(c);b&&a.position.setFromSpherical(parseSpherical(b)).add(d),a.lookAt(d)}this.$set(this.cameras,this.name,this.inst)},beforeDestroy:function(){this.cameras[this.name]===this.inst&&this.$delete(this.cameras,this.name)},watch:{inst:function(a){this.cameras[this.name]=a},orbitTarget:function(a){var b=this.inst,c=parseVector3(a);this.orbitPosition&&b.position.setFromSpherical(parseSpherical(this.orbitPosition)).add(c),b.lookAt(c)},orbitPosition:function(a){var b=this.inst,c=parseSpherical(a);b.position.setFromSpherical(c);var d=parseVector3(this.orbitTarget);this.orbitTarget&&b.add(d),b.lookAt(d)}}};function resizeCamera(a,b){var c=b.clientWidth,d=b.clientHeight;a.isPerspectiveCamera?a.aspect=c/d:(a.left=c/-2,a.right=c/2,a.top=d/2,a.bottom=d/-2),a.updateProjectionMatrix()}function resizeRenderer(a,b){a.setSize(b.clientWidth,b.clientHeight,!1)}var vglRenderer={mixins:[VglAssets],props:["precision","alpha","premultipliedAlpha","antialias","stencil","preserveDrawingBuffer","depth","logarithmicDepthBuffer","camera","scene"],provide:function(){return{cameras:this.cameras,scenes:this.scenes}},data:function(){return{cameras:Object.create(null),scenes:Object.create(null),key:0,req:!0}},computed:{opt:function(){return{precision:this.precision,alpha:this.alpha,premultipliedAlpha:this.premultipliedAlpha===void 0||this.premultipliedAlpha,antialias:this.antialias,stencil:this.stencil===void 0||this.stencil,preserveDrawingBuffer:this.preserveDrawingBuffer,depth:this.depth===void 0||this.depth,logarithmicDepthBuffer:this.logarithmicDepthBuffer}},inst:function(){return new WebGLRenderer(Object.assign({canvas:this.$refs.rdr},this.opt))},cmr:function(){return this.cameras[this.camera]},scn:function(){return this.scenes[this.scene]}},methods:{resize:function(){resizeRenderer(this.inst,this.$el),this.cmr&&(resizeCamera(this.cmr,this.$el),this.scn&&this.render())},render:function(){var a=this;this.req&&(this.$nextTick(function(){requestAnimationFrame(function(){a.scn&&a.cmr&&a.inst.render(a.scn,a.cmr),a.req=!0})}),this.req=!1)}},watch:{opt:function(){var a=this;++this.key,this.$nextTick(function(){a.resize()})},scn:function(a){a&&this.render()},cmr:function(a){a&&(resizeCamera(a,this.$el),this.render())}},updated:function(){this.render()},render:function(a){var b=this;return a("div",[a("canvas",{ref:"rdr",key:this.key},this.$slots.default),a("iframe",{ref:"frm",style:{visibility:"hidden",width:"100%",height:"100%"},on:{load:function(a){a.target.contentWindow.addEventListener("resize",b.resize),b.$nextTick(b.resize)}}})])}},vglPerspectiveCamera={mixins:[VglCamera],props:["zoom","near","far","fov"],computed:{inst:function(){return new PerspectiveCamera}},created:function(){var a=this.inst;this.zoom&&(a.zoom=parseFloat(this.zoom)),this.near&&(a.near=parseFloat(this.near)),this.far&&(a.far=parseFloat(this.far)),this.fov&&(a.fov=parseFloat(this.fov))},watch:{zoom:function(a){this.inst.zoom=parseFloat(a)},near:function(a){this.inst.near=parseFloat(a)},far:function(a){this.inst.far=parseFloat(a)},fov:function(a){this.inst.fov=parseFloat(a)}}},vglGroup={mixins:[VglObject3d],computed:{inst:function(){return new Group}}},VglLight={mixins:[VglObject3d],props:["color","intensity"],computed:{inst:function(){return new Light}},created:function(){this.color&&this.inst.color.setStyle(this.color),this.intensity&&(this.inst.intensity=parseFloat(this.intensity))},watch:{color:function(a){this.inst.color.setStyle(a)},intensity:function(a){this.inst.intensity=parseFloat(a)}}},vglDirectionalLight={mixins:[VglLight],computed:{inst:function(){return new DirectionalLight}}},vglAmbientLight={mixins:[VglLight],computed:{inst:function(){return new AmbientLight}}};function getParentMaterials(a){return Object.getPrototypeOf(a.assets.materials)}var VglMaterial={mixins:[VglAssets],props:["name"],computed:{inst:function(){return new Material}},watch:{inst:function(a){var b=getParentMaterials(this);b&&(b[this.name]=a)}},created:function(){var a=getParentMaterials(this);a&&this.$set(a,this.name,this.inst)},beforeDestroy:function(){var a=getParentMaterials(this);a&&a[this.name]===this.inst&&this.$delete(a,this.name)}},vglPointsMaterial={mixins:[VglMaterial],props:["color","size","sizeAttenuation"],computed:{inst:function(){return new PointsMaterial}},created:function(){this.color&&this.inst.color.setStyle(this.color),this.size&&(this.inst.size=parseFloat(this.size)),this.sizeAttenuation!==void 0&&(this.inst.sizeAttenuation=this.sizeAttenuation)},watch:{color:function(a){this.inst.color.setStyle(a)},size:function(a){this.inst.size=parseFloat(a)},sizeAttenuation:function(b){this.inst.sizeAttenuation=b}}};function getParentGeometries(a){return Object.getPrototypeOf(a.assets.geometries)}var VglGeometry={mixins:[VglAssets],props:["name"],computed:{inst:function(){return new Geometry}},watch:{inst:function(a){var b=getParentGeometries(this);b&&(b[this.name]=a)}},created:function(){var a=getParentGeometries(this);a&&this.$set(a,this.name,this.inst)},beforeDestroy:function(){var a=getParentGeometries(this);a&&a[this.name]===this.inst&&this.$delete(a,this.name)}},vglSphereGeometry={mixins:[VglGeometry],props:["radius","widthSegments","heightSegments","phiStart","phiLength","thetaStart","thetaLength"],computed:{inst:function(){return new SphereGeometry(parseNumber(this.radius),parseNumber(this.widthSegments),parseNumber(this.heightSegments),parseNumber(this.phiStart),parseNumber(this.phiLength),parseNumber(this.thetaStart),parseNumber(this.thetaLength))}}},vglMeshStandardMaterial={mixins:[VglMaterial],props:["color"],computed:{inst:function(){return new MeshStandardMaterial}},created:function(){this.color&&this.inst.color.setStyle(this.color)},watch:{color:function(a){this.inst.color.setStyle(a)}}},hasMaterial={props:["material"],computed:{mtl:function(){var a=Object.getPrototypeOf(this.assets.materials);if(a)return a[this.material]}},created:function(){this.mtl&&(this.inst.material=this.mtl)},watch:{mtl:function(a){this.inst.material=a}}},hasGeometry={props:["geometry"],computed:{geo:function(){var a=Object.getPrototypeOf(this.assets.geometries);if(a)return a[this.geometry]}},created:function(){this.geo&&(this.inst.geometry=this.geo)},watch:{geo:function(a){this.inst.geometry=a}}},vglMesh={mixins:[VglObject3d,hasGeometry,hasMaterial],computed:{inst:function(){return new Mesh}}},vglPoints={mixins:[VglObject3d,hasGeometry,hasMaterial],computed:{inst:function(){return new Points}}},vglLineBasicMaterial={mixins:[VglMaterial],props:["color","lights","linewidth","linecap","linejoin"],computed:{inst:function(){return new LineBasicMaterial}},created:function(){this.lights&&(this.inst.lights=this.lights),this.linewidth&&(this.inst.linewidth=parseNumber(this.linewidth)),this.linecap&&(this.inst.linecap=this.linecap),this.linejoin&&(this.inst.linejoin=this.linejoin),this.color&&this.inst.color.setStyle(this.color)},watch:{color:function(a){this.inst.color.setStyle(a)},lights:function(a){this.inst.lights=a},linewidth:function(a){this.inst.linewidth=parseNumber(a)},linecap:function(a){this.inst.linecap=a},linejoin:function(a){this.inst.linejoin=a}}},VglLine={mixins:[VglObject3d,hasGeometry,hasMaterial],computed:{inst:function(){return new Line}}},vglSprite={mixins:[VglObject3d,hasMaterial],computed:{inst:function(){return new Sprite}}},vglBoxGeometry={mixins:[VglGeometry],props:["width","height","depth","widthSegments","heightSegments","depthSegments"],computed:{inst:function(){return new BoxGeometry(parseNumber(this.width),parseNumber(this.height),parseNumber(this.depth),parseNumber(this.widthSegments),parseNumber(this.heightSegments),parseNumber(this.depthSegments))}}},vglCircleGeometry={mixins:[VglGeometry],props:["radius","segments","thetaStart","thetaLength"],computed:{inst:function(){return new CircleGeometry(parseNumber(this.radius),parseNumber(this.segments),parseNumber(this.thetaStart),parseNumber(this.thetaLength))}}},VglLineSegments={mixins:[VglLine],computed:{inst:function(){return new LineSegments}}},vglLineLoop={mixins:[VglLine],computed:{inst:function(){return new LineLoop}}},VglCylinderGeometry={mixins:[VglGeometry],props:["radiusTop","radiusBottom","height","radialSegments","heightSegments","openEnded","thetaStart","thetaLength"],computed:{inst:function(){return new CylinderGeometry(parseNumber(this.radiusTop),parseNumber(this.radiusBottom),parseNumber(this.height),parseNumber(this.radialSegments),parseNumber(this.heightSegments),this.openEnded,parseNumber(this.thetaStart),parseNumber(this.thetaLength))}}},vglConeGeometry={mixins:[VglCylinderGeometry],props:["radius"],computed:{inst:function(){return new ConeGeometry(parseNumber(this.radius),parseNumber(this.height),parseNumber(this.radialSegments),parseNumber(this.heightSegments),this.openEnded,parseNumber(this.thetaStart),parseNumber(this.thetaLength))}}},vglAxisHelper={mixins:[VglLineSegments],props:["size"],computed:{inst:function(){return new AxisHelper(parseNumber(this.size))}}},vglOrthographicCamera={mixins:[VglCamera],props:["zoom","near","far"],computed:{inst:function(){return new OrthographicCamera}},created:function(){var a=this.inst;this.zoom&&(a.zoom=parseFloat(this.zoom)),this.near&&(a.near=parseFloat(this.near)),this.far&&(a.far=parseFloat(this.far))},watch:{zoom:function(a){this.inst.zoom=parseFloat(a)},near:function(a){this.inst.near=parseFloat(a)},far:function(a){this.inst.far=parseFloat(a)}}},vglPlaneGeometry={mixins:[VglGeometry],props:["width","height","widthSegments","heightSegments"],computed:{inst:function(){return new PlaneGeometry(parseNumber(this.width),parseNumber(this.height),parseNumber(this.widthSegments),parseNumber(this.heightSegments))}}},vglDodecahedronGeometry={mixins:[VglGeometry],props:["radius","detail"],computed:{inst:function(){return new DodecahedronGeometry(parseNumber(this.radius),parseNumber(this.detail,!0))}}},vglIcosahedronGeometry={mixins:[VglGeometry],props:["radius","detail"],computed:{inst:function(){return new IcosahedronGeometry(parseNumber(this.radius),parseNumber(this.detail,!0))}}},vglOctahedronGeometry={mixins:[VglGeometry],props:["radius","detail"],computed:{inst:function(){return new OctahedronGeometry(parseNumber(this.radius),parseNumber(this.detail,!0))}}},vglRingGeometry={mixins:[VglGeometry],props:["innerRadius","outerRadius","thetaSegments","phiSegments","thetaStart","thetaLength"],computed:{inst:function(){return new RingGeometry(parseNumber(this.innerRadius),parseNumber(this.outerRadius),parseNumber(this.thetaSegments,!0),parseNumber(this.phiSegments,!0),parseNumber(this.thetaStart),parseNumber(this.thetaLength))}}},vglTetrahedronGeometry={mixins:[VglGeometry],props:["radius","detail"],computed:{inst:function(){return new TetrahedronGeometry(parseNumber(this.radius),parseNumber(this.detail,!0))}}};export{VglAssets,VglObject3d,vglScene as VglScene,VglCamera,vglRenderer as VglRenderer,vglPerspectiveCamera as VglPerspectiveCamera,vglGroup as VglGroup,VglLight,vglDirectionalLight as VglDirectionalLight,vglAmbientLight as VglAmbientLight,VglMaterial,vglPointsMaterial as VglPointsMaterial,VglGeometry,vglSphereGeometry as VglSphereGeometry,vglMeshStandardMaterial as VglMeshStandardMaterial,vglMesh as VglMesh,vglPoints as VglPoints,vglLineBasicMaterial as VglLineBasicMaterial,VglLine,vglSprite as VglSprite,vglBoxGeometry as VglBoxGeometry,vglCircleGeometry as VglCircleGeometry,VglLineSegments,vglLineLoop as VglLineLoop,vglConeGeometry as VglConeGeometry,vglAxisHelper as VglAxisHelper,vglOrthographicCamera as VglOrthographicCamera,VglCylinderGeometry,vglPlaneGeometry as VglPlaneGeometry,vglDodecahedronGeometry as VglDodecahedronGeometry,vglIcosahedronGeometry as VglIcosahedronGeometry,vglOctahedronGeometry as VglOctahedronGeometry,vglRingGeometry as VglRingGeometry,vglTetrahedronGeometry as VglTetrahedronGeometry};
