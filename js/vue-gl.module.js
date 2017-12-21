import{AmbientLight,ArrowHelper,AxesHelper,BoxGeometry,BoxHelper,Camera,CircleGeometry,Color,ConeGeometry,CylinderGeometry,DirectionalLight,DodecahedronGeometry,Euler,ExtrudeGeometry,FontLoader,Geometry,GridHelper,Group,IcosahedronGeometry,LensFlare,Light,Line,LineBasicMaterial,LineLoop,LineSegments,Material,Mesh,MeshStandardMaterial,NormalBlending,Object3D,OctahedronGeometry,OrthographicCamera,PerspectiveCamera,PlaneGeometry,PointLight,Points,PointsMaterial,RingGeometry,Scene,ShadowMaterial,SphereGeometry,Spherical,SpotLight,Sprite,SpriteMaterial,TetrahedronGeometry,TextGeometry,TextureLoader,TorusGeometry,TorusKnotGeometry,Vector3,WebGLRenderer}from"https://unpkg.com/three@0.89.0/build/three.module.js";var classCallCheck=function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")},createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),defineProperty=function(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a},toConsumableArray=function(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)};/**
 * Returns a parsed vector3 object when the argument is a string. Otherwise pass the argument through.
 */function parseVector3(a,b){return"string"==typeof a?(b||new Vector3).fromArray(a.trim().split(/\s+/).map(function(a){return parseFloat(a)})):b?b.copy(a):a}/**
 * Returns a parsed euler object when the argument is a string. Othewise pass the argument through.
 */function parseEuler(a,b){return"string"==typeof a?(b||new Euler).fromArray(a.trim().split(/\s+/).map(function(a,b){return 3===b?a:parseFloat(a)})):b?b.copy(a):a}/**
 * Returns a parsed spherical object when the argument is a string. Otherwise pass the argument through.
 */function parseSpherical(a,b){var c;return"string"==typeof a?(c=b||new Spherical).set.apply(c,toConsumableArray(a.trim().split(/\s+/).map(function(a){return parseFloat(a)}))).makeSafe():b?b.copy(a):a}/**
 * Returns a parsed integer number when the argument is a string. Otherwise pass the argument through.
 */function parseInt_(a){return"string"==typeof a?parseInt(a,10):a}/**
 * Returns a parsed float number when the argument is a string. Otherwise pass the argument through.
 */function parseFloat_(a){return"string"==typeof a?parseFloat(a):a}/**
 * Create an object that has array's items as keys. Values are set by setter function.
 */function createObjectFromArray(a,b){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{};return a.reduce(function(a,c,d){return a[c]=b(c,d),a},c)}/**
 * Find the nearest ancestor component that has the [key] option.
 */function findParent(a,b){var c=a.$parent;if(c)return c.$options[b]?c:findParent(c,b)}/**
 * Constant arrays useful for props validation.
 */var validatePropNumber=[String,Number],validatePropString=String;/**
 * Call the ancestor renderer's vglUpdate function from object3d components.
 */function update(a){a.vglUpdate&&a.vglUpdate()}/**
 * Dispatch an update event on the instance of a component.
 */function dispatchUpdate(a){a.inst.dispatchEvent({type:"update"})}var globalNamespaces=["vglCameras","vglScenes"],localNamespaces=["vglGeometries","vglMaterials","vglTextures","vglFonts"],namespaces=[].concat(globalNamespaces,localNamespaces),localDataNames=localNamespaces.map(function(a){return a+"_"}),computedNames=localDataNames.map(function(a){return a+"_"});function createEmptyObject(){return Object.create(null)}function createEmptyObjectsFromArray(a,b){return createObjectFromArray(a,function(){return createEmptyObject()},b)}var VglNamespace={provide:function(){var a=this,b=function(){function b(a){classCallCheck(this,b),this.i=a}return createClass(b,[{key:"forGet",get:function(){return a[computedNames[this.i]]}},{key:"forSet",get:function(){return a[localDataNames[this.i]]}}]),b}(),c=function(){function b(a){classCallCheck(this,b),this.i=a}return createClass(b,[{key:"forGet",get:function(){return a[globalNamespaces[this.i]]}},{key:"forSet",get:function(){return a[globalNamespaces[this.i]]}}]),b}();return createObjectFromArray(localNamespaces,function(a,c){return new b(c)},a.$data[globalNamespaces[0]]?createObjectFromArray(globalNamespaces,function(a,b){return new c(b)}):{})},inject:createObjectFromArray(namespaces,function(){return{default:void 0}}),data:function(){return createEmptyObjectsFromArray(localDataNames,this[globalNamespaces[0]]?{}:createEmptyObjectsFromArray(globalNamespaces))},computed:createObjectFromArray(computedNames,function(a,b){return function(){var a=localNamespaces[b],c=localDataNames[b];return this[a]?Object.assign(Object.create(this[a].forGet),this[c]):this[c]}}),render:function(a){if(this.$slots.default)return a("div",this.$slots.default)}},defaultPosition=new Vector3,defaultRotation=new Euler,defaultScale=new Vector3(1,1,1),VglObject3d={isVglObject3d:!0,props:{position:{type:[String,Vector3],default:function(){return defaultPosition}},rotation:{type:[String,Euler],default:function(){return defaultRotation}},scale:{type:[String,Vector3],default:function(){return defaultScale}},castShadow:Boolean,receiveShadow:Boolean},computed:{inst:function(){return new Object3D}},inject:{vglUpdate:{default:void 0}},created:function(){var a=findParent(this,"isVglObject3d");a&&a.inst.add(this.inst)},beforeDestroy:function(){this.inst.parent&&this.inst.parent.remove(this.inst)},watch:{position:{handler:function(a){parseVector3(a||defaultPosition,this.inst.position),update(this)},immediate:!0},rotation:{handler:function(a){parseEuler(a||defaultRotation,this.inst.rotation),update(this)},immediate:!0},scale:{handler:function(a){parseVector3(a||defaultScale,this.inst.scale),update(this)},immediate:!0},castShadow:{handler:function(a){this.inst.castShadow=a,update(this)},immediate:!0},receiveShadow:{handler:function(a){this.inst.receiveShadow=a,update(this)},immediate:!0},inst:function(a,b){b.children.length&&a.add.apply(a,toConsumableArray(b.children)),a.position.copy(b.position),a.rotation.copy(b.rotation),a.scale.copy(b.scale),b.parent&&b.parent.remove(b).add(a),update(this)}},render:function(a){if(this.$slots.default)return a("div",this.$slots.default)}};function assetFactory(a,b){var c={props:{name:validatePropString},inject:[b],created:function(){this.$set(this[b].forSet,this.name,this.inst)},watch:{inst:function(a){this[b].forSet[this.name]=a}},beforeDestroy:function(){this[b].forSet[this.name]===this.inst&&this.$delete(this[b].forSet,this.name)},render:function(a){if(this.$slots.default)return a("div",this.$slots.default)}};return a&&(c.computed={inst:function(){return new a}}),c}function hasAssetsMixinFactory(a,b){var c=a+"_";return{props:defineProperty({},a,validatePropString),inject:[b],computed:defineProperty({},c,function(){return this[b].forGet[this[a]]}),mounted:function(){var b=this[c];b&&(this.inst[a]=b,b.addEventListener("update",this.ud))},methods:{ud:function(){update(this)}},watch:defineProperty({},c,function(b,c){b!==c&&(this.inst[a]=b,c&&c.removeEventListener("update",this.ud),b&&b.addEventListener("update",this.ud),update(this))})}}function objectMixinFactory(a){var b=[hasAssetsMixinFactory("material","vglMaterials")];return a&&b.push(hasAssetsMixinFactory("geometry","vglGeometries")),{mixins:b}}function hedronFactory(a){return{props:{radius:validatePropNumber,detail:validatePropNumber},computed:{inst:function(){return new a(parseFloat_(this.radius),parseInt_(this.detail))}}}}function hasColorFactory(a){return{props:{color:{type:validatePropString,default:a}},watch:{color:{handler:function(a){this.inst.color.setStyle(a),dispatchUpdate(this)},immediate:!0}}}}var hasMap={props:{map:validatePropString},inject:["vglTextures"],computed:{tex:function(){return this.vglTextures.forGet[this.map]||null}},watch:{tex:{handler:function(a,b){this.inst.map=a,b||(this.inst.needsUpdate=!0),dispatchUpdate(this)},immediate:!0}}},vglScene={mixins:[VglObject3d,assetFactory(Scene,"vglScenes")],provide:function(){if(!this.vglUpdate)return{vglUpdate:function(){this.inst.dispatchEvent({type:"update"})}}}};function setPositionAndRotation(a,b,c){if(b||c){var d=parseVector3(c);if(b){var e=a.inst.position.setFromSpherical(parseSpherical(b));d&&e.add(d)}a.inst.lookAt(d||new Vector3),update(a)}}var VglCamera={mixins:[VglObject3d,assetFactory(Camera,"vglCameras")],props:{orbitTarget:[String,Vector3],orbitPosition:[String,Spherical]},watch:{orbitTarget:{handler:function(a){setPositionAndRotation(this,this.orbitPosition,a)},immediate:!0},orbitPosition:function(a){setPositionAndRotation(this,a,this.orbitTarget)}}};function resizeCamera(a,b){var c=b.clientWidth,d=b.clientHeight;a.isPerspectiveCamera?a.aspect=c/d:(a.left=c/-2,a.right=c/2,a.top=d/2,a.bottom=d/-2),a.updateProjectionMatrix()}function resizeRenderer(a,b){a.setSize(b.clientWidth,b.clientHeight,!1)}var vglRenderer={mixins:[VglNamespace],props:{precision:String,alpha:Boolean,disablePremultipliedAlpha:Boolean,antialias:Boolean,disableStencil:Boolean,preserveDrawingBuffer:Boolean,disableDepth:Boolean,logarithmicDepthBuffer:Boolean,camera:String,scene:String,shadowMapEnabled:Boolean},provide:function(){return{vglUpdate:this.render}},data:function(){return{key:0,req:!0}},computed:{opt:function(){return{precision:this.precision,alpha:this.alpha,premultipliedAlpha:!this.disablePremultipliedAlpha,antialias:this.antialias,stencil:!this.disableStencil,preserveDrawingBuffer:this.preserveDrawingBuffer,depth:!this.disableDepth,logarithmicDepthBuffer:this.logarithmicDepthBuffer}},inst:function(){return new WebGLRenderer(Object.assign({canvas:this.$refs.rdr},this.opt))},cmr:function(){return(this.$data.vglCameras||this.vglCameras.forGet)[this.camera]},scn:function(){return(this.$data.vglScenes||this.vglScenes.forGet)[this.scene]}},methods:{resize:function(){resizeRenderer(this.inst,this.$el),this.cmr&&(resizeCamera(this.cmr,this.$el),this.scn&&this.render())},render:function(){var a=this;this.req&&(this.$nextTick(function(){requestAnimationFrame(function(){a.scn&&a.cmr&&a.inst.render(a.scn,a.cmr),a.req=!0})}),this.req=!1)},init:function(){var a=this;this.$nextTick(function(){a.inst.shadowMap.enabled=a.shadowMapEnabled,a.resize()})}},watch:{opt:function(){++this.key,this.init()},scn:function(a,b){b&&b.removeEventListener("update",this.render),a&&(a.addEventListener("update",this.render),this.render())},cmr:function(a,b){b&&b.removeEventListener("update",this.render),a&&(a.addEventListener("update",this.render),resizeCamera(a,this.$el),this.render())},shadowMapEnabled:function(a){this.inst.shadowMap.enabled=a}},created:function(){this.scn&&this.scn.addEventListener("update",this.render),this.cmr&&this.cmr.addEventListener("update",this.render)},render:function(a){var b=this;return a("div",[a("canvas",{ref:"rdr",key:this.key},this.$slots.default),a("iframe",{ref:"frm",style:{visibility:"hidden",width:"100%",height:"100%"},on:{load:function(a){a.target.contentWindow.addEventListener("resize",b.resize),b.init()}}})])}},vglPerspectiveCamera={mixins:[VglCamera],props:{zoom:{type:validatePropNumber,default:1},near:{type:validatePropNumber,default:0.1},far:{type:validatePropNumber,default:2e3},fov:{type:validatePropNumber,default:50}},computed:{inst:function(){return new PerspectiveCamera}},watch:{zoom:{handler:function(a){this.inst.zoom=parseFloat_(a),update(this)},immediate:!0},near:{handler:function(a){this.inst.near=parseFloat_(a),update(this)},immediate:!0},far:{handler:function(a){this.inst.far=parseFloat_(a),update(this)},immediate:!0},fov:{handler:function(a){this.inst.fov=parseFloat_(a),update(this)},immediate:!0}}},vglGroup={mixins:[VglObject3d],computed:{inst:function(){return new Group}}},VglLight={mixins:[VglObject3d],props:{color:{type:String,default:"white"},intensity:{type:[String,Number],default:1}},computed:{inst:function(){return new Light}},watch:{color:{handler:function(a){this.inst.color.setStyle(a),update(this)},immediate:!0},intensity:{handler:function(a){this.inst.intensity=parseFloat_(a),update(this)},immediate:!0}}},vglDirectionalLight={mixins:[VglLight],computed:{inst:function(){return new DirectionalLight}},props:{castShadow:Boolean},watch:{castShadow:{handler:function(a){this.inst.castShadow=a,update(this)},immediate:!0}}},vglAmbientLight={mixins:[VglLight],computed:{inst:function(){return new AmbientLight}}},VglMaterial={mixins:[assetFactory(Material,"vglMaterials")]},vglPointsMaterial={mixins:[VglMaterial],props:{color:{type:String,default:"#fff"},size:{type:[String,Number],default:1},disableSizeAttenuation:Boolean},computed:{inst:function(){return new PointsMaterial}},created:function(){var a=this.inst;a.color.setStyle(this.color),a.size=parseFloat_(this.size),a.sizeAttenuation=!this.disableSizeAttenuation},watch:{color:function(a){this.inst.color.setStyle(a)},size:function(a){this.inst.size=parseFloat_(a)},disableSizeAttenuation:function(a){this.inst.sizeAttenuation=!a}}},VglGeometry={mixins:[assetFactory(Geometry,"vglGeometries")]},validator=[String,Number],props=["radius","widthSegments","heightSegments","phiStart","phiLength","thetaStart","thetaLength"],vglSphereGeometry={mixins:[VglGeometry],props:createObjectFromArray(props,function(){return validator}),computed:{inst:function(){var a=this;return new(Function.prototype.bind.apply(SphereGeometry,[null].concat(toConsumableArray(props.map(function(b,c){return(1>c||2<c?parseFloat_:parseInt_)(a[b])})))))}}},vglMeshStandardMaterial={mixins:[VglMaterial,hasColorFactory("#fff"),hasMap],computed:{inst:function(){return new MeshStandardMaterial}}},vglMesh={mixins:[VglObject3d,objectMixinFactory(!0)],computed:{inst:function(){return new Mesh}}},vglPoints={mixins:[VglObject3d,objectMixinFactory(!0)],computed:{inst:function(){return new Points}}},vglLineBasicMaterial={mixins:[VglMaterial],props:{color:{type:String,default:"#fff"},lights:Boolean,linewidth:{type:[String,Number],default:1},linecap:{type:String,default:"round"},linejoin:{type:String,default:"round"}},computed:{inst:function(){return new LineBasicMaterial}},created:function(){var a=this.inst;a.lights=this.lights,a.linecap=this.linecap,a.linejoin=this.linejoin,a.linewidth=parseFloat_(this.linewidth),a.color.setStyle(this.color)},watch:{color:function(a){this.inst.color.setStyle(a)},lights:function(a){this.inst.lights=a},linewidth:function(a){this.inst.linewidth=parseFloat_(a)},linecap:function(a){this.inst.linecap=a},linejoin:function(a){this.inst.linejoin=a}}},VglLine={mixins:[VglObject3d,objectMixinFactory(!0)],computed:{inst:function(){return new Line}}},vglSprite={mixins:[VglObject3d,objectMixinFactory()],computed:{inst:function(){return new Sprite}}},validator$1=[String,Number],propsFloat=["width","height","depth"],propsInt=["widthSegments","heightSegments","depthSegments"],vglBoxGeometry={mixins:[VglGeometry],props:createObjectFromArray(propsFloat,function(){return validator$1},createObjectFromArray(propsInt,function(){return validator$1})),computed:{inst:function(){var a=this;return new(Function.prototype.bind.apply(BoxGeometry,[null].concat(toConsumableArray(propsFloat.map(function(b){return parseFloat_(a[b])})),toConsumableArray(propsInt.map(function(b){return parseInt_(a[b])})))))}}},validator$2=[String,Number],props$1=["radius","segments","thetaStart","thetaLength"],vglCircleGeometry={mixins:[VglGeometry],props:createObjectFromArray(props$1,function(){return validator$2}),computed:{inst:function(){var a=this;return new(Function.prototype.bind.apply(CircleGeometry,[null].concat(toConsumableArray(props$1.map(function(b,c){return(1===c?parseInt_:parseFloat_)(a[b])})))))}}},VglLineSegments={mixins:[VglLine],computed:{inst:function(){return new LineSegments}}},vglLineLoop={mixins:[VglLine],computed:{inst:function(){return new LineLoop}}},validator$3=[String,Number],props$2=["radiusTop","radiusBottom","height","radialSegments","heightSegments","openEnded","thetaStart","thetaLength"],VglCylinderGeometry={mixins:[VglGeometry],props:createObjectFromArray(props$2,function(a,b){return 5===b?Boolean:validator$3}),computed:{inst:function(){var a=this;return new(Function.prototype.bind.apply(CylinderGeometry,[null].concat(toConsumableArray(props$2.map(function(b,c){return(3>c||5<c?parseFloat_:parseInt_)(a[b])})))))}}},vglConeGeometry={mixins:[VglCylinderGeometry],props:{radius:[String,Number]},computed:{inst:function(){var a=this;return new(Function.prototype.bind.apply(ConeGeometry,[null].concat(toConsumableArray(["radius","height","radialSegments","heightSegments","openEnded","thetaStart","thetaLength"].map(function(b,c){return(2>c||4<c?parseFloat_:parseInt_)(a[b])})))))}}},vglAxesHelper={mixins:[VglLineSegments],props:{size:[String,Number]},computed:{inst:function(){return new AxesHelper(parseFloat_(this.size))}}},vglOrthographicCamera={mixins:[VglCamera],props:{zoom:{type:validatePropNumber,default:1},near:{type:validatePropNumber,default:0.1},far:{type:validatePropNumber,default:2e3}},computed:{inst:function(){return new OrthographicCamera}},watch:{zoom:{handler:function(a){this.inst.zoom=parseFloat_(a),update(this)},immediate:!0},near:{handler:function(a){this.inst.near=parseFloat_(a),update(this)},immediate:!0},far:{handler:function(a){this.inst.far=parseFloat_(a),update(this)},immediate:!0}}},validator$4=[String,Number],props$3=["width","height","widthSegments","heightSegments"],vglPlaneGeometry={mixins:[VglGeometry],props:createObjectFromArray(props$3,function(){return validator$4}),computed:{inst:function(){var a=this;return new(Function.prototype.bind.apply(PlaneGeometry,[null].concat(toConsumableArray(props$3.map(function(b,c){return(1<c?parseInt_:parseFloat_)(a[b])})))))}}},vglDodecahedronGeometry={mixins:[VglGeometry,hedronFactory(DodecahedronGeometry)]},vglIcosahedronGeometry={mixins:[VglGeometry,hedronFactory(IcosahedronGeometry)]},vglOctahedronGeometry={mixins:[VglGeometry,hedronFactory(OctahedronGeometry)]},validator$5=[String,Number],props$4=["innerRadius","outerRadius","thetaSegments","phiSegments","thetaStart","thetaLength"],vglRingGeometry={mixins:[VglGeometry],props:createObjectFromArray(props$4,function(){return validator$5}),computed:{inst:function(){var a=this;return new(Function.prototype.bind.apply(RingGeometry,[null].concat(toConsumableArray(props$4.map(function(b,c){return(2>c||3<c?parseFloat_:parseInt_)(a[b])})))))}}},vglTetrahedronGeometry={mixins:[VglGeometry,hedronFactory(TetrahedronGeometry)]},validator$6=[String,Number],props$5=["radius","tube","radialSegments","tubularSegments","arc"],vglTorusGeometry={mixins:[VglGeometry],props:createObjectFromArray(props$5,function(){return validator$6}),computed:{inst:function(){var a=this;return new(Function.prototype.bind.apply(TorusGeometry,[null].concat(toConsumableArray(props$5.map(function(b,c){return(2>c||3<c?parseFloat_:parseInt_)(a[b])})))))}}},validator$7=[String,Number],props$6=["radius","tube","tubularSegments","radialSegments","p","q"],vglTorusKnotGeometry={mixins:[VglGeometry],props:createObjectFromArray(props$6,function(){return validator$7}),computed:{inst:function(){var a=this;return new(Function.prototype.bind.apply(TorusKnotGeometry,[null].concat(toConsumableArray(props$6.map(function(b,c){return(2>c||3<c?parseFloat_:parseInt_)(a[b])})))))}}},numberValidator=[String,Number],defaultDirection=new Vector3(0,1),origin=new Vector3,tempColor=new Color;function setDirection(a,b){a.inst.setDirection(parseVector3(b).normalize())}var vglArrowHelper={mixins:[VglObject3d],props:{dir:{type:[String,Vector3],default:function(){return defaultDirection}},length:{type:numberValidator,default:1},color:{type:String,default:"#ff0"},headLength:numberValidator,headWidth:numberValidator},computed:{inst:function(){return new ArrowHelper(defaultDirection,origin)},len:function(){return[parseFloat_(this.length),parseFloat_(this.headLength),parseFloat_(this.headWidth)]}},created:function(){var a;this.dir!==defaultDirection&&this.inst.setDirection(parseVector3(this.dir).normalize()),(a=this.inst).setLength.apply(a,toConsumableArray(this.len)),this.inst.setColor(tempColor.setStyle(this.color))},watch:{dir:function(a){setDirection(this,a)},len:function(a){var b;(b=this.inst).setLength.apply(b,toConsumableArray(a))},color:function(a){this.inst.setColor(tempColor.setStyle(a))}}},vglBoxHelper={mixins:[VglLineSegments],props:{color:{type:validatePropString,default:"#ff0"}},computed:{inst:function(){return new BoxHelper}},data:function(){return{uw:null,r:!0}},created:function(){var a=this,b=this.inst;b.parent&&(this.uw=this.$watch(function(){return b.parent},function(){a.r&&(a.$nextTick(function(){b.setFromObject(b.parent),a.r=!0}),a.r=!1)},{immediate:!0}))},beforeDestroy:function(){this.uw&&this.uw()},watch:{color:{handler:function(a){this.inst.material.color.setStyle(a)},immediate:!0}}},vglPointLight={mixins:[VglLight],props:{distance:{type:validatePropNumber,default:0},decay:{type:validatePropNumber,default:1}},computed:{inst:function(){return new PointLight}},watch:{distance:{handler:function(a){this.inst.distance=parseFloat_(a),update(this)},immediate:!0},decay:{handler:function(a){this.inst.decay=parseFloat_(a),update(this)},immediate:!0}}},vglSpotLight={mixins:[VglLight],props:{distance:{type:validatePropNumber,default:0},decay:{type:validatePropNumber,default:1},angle:{type:validatePropNumber,default:Math.PI/3},penumbra:{type:validatePropNumber,default:0},target:{type:[String,Vector3]}},computed:{inst:function(){return new SpotLight}},created:function(){var a=this;if(this.target){parseVector3(this.target,this.inst.target.position);var b=findParent(this,"isVglObject3d");b&&this.$watch(function(){return b.inst},function(b,c){c&&c.remove(a.inst.target),b.add(a.inst.target),update(a)},{immediate:!0})}},beforeDestroy:function(){this.inst.target.parent&&this.inst.target.parent.remove(this.inst.target)},watch:{distance:{handler:function(a){this.inst.distance=parseFloat_(a),update(this)},immediate:!0},decay:{handler:function(a){this.inst.decay=parseFloat_(a),update(this)},immediate:!0},angle:{handler:function(a){this.inst.angle=parseFloat_(a),update(this)},immediate:!0},penumbra:{handler:function(a){this.inst.penumbra=parseFloat_(a),update(this)},immediate:!0},target:function(a){parseVector3(a,this.inst.target.position),update(this)}}},vglTexture={mixins:[assetFactory(null,"vglTextures")],props:{src:validatePropString},data:function(){return{inst:null}},watch:{src:{handler:function(a){var b=this;new TextureLoader().load(a,function(a){b.inst=a})},immediate:!0}}},vglLensFlare={isVglLensFlare:!0,mixins:[VglObject3d],computed:{inst:function(){return new LensFlare}}};function findParent_(a){return findParent(a,"isVglLensFlare")}var vglLensFlareTexture={inject:["vglTextures"],props:{texture:{type:validatePropString},size:{type:validatePropNumber,default:-1},distance:{type:validatePropNumber,default:0},blending:{type:validatePropNumber,default:NormalBlending},color:{type:validatePropString,default:"#fff"}},data:function(){return{inst:null}},computed:{opts:function(){return[this.vglTextures.forGet[this.texture],parseInt_(this.size),parseFloat_(this.distance),parseInt_(this.blending),new Color(this.color)]}},beforeDestroy:function(){var a=findParent_(this);this.remove(a),update(a)},watch:{opts:{handler:function(a){var b=findParent_(this);b&&(this.inst?(a[0]?this.replace(b):(this.remove(b),this.inst=null),update(b)):a[0]&&(this.add(b),update(b)))},immediate:!0}},methods:{add:function(a){var b;(b=a.inst).add.apply(b,toConsumableArray(this.opts)),this.inst=a.inst.lensFlares.slice(-1)[0]},remove:function(a){a.inst.lensFlares.splice(a.inst.lensFlares.indexOf(this.inst),1)},replace:function(a){this.remove(a),this.add(a)}},render:function(a){if(this.$slots.default)return a("div",this.$slots.default)}},vglFont={mixins:[assetFactory(null,"vglFonts")],props:{src:validatePropString},data:function(){return{inst:null}},watch:{src:{handler:function(a){var b=this;if(!/^data:.*?(?:;base64)?,.*$/.test(a)){// GET src data manually and pass as a data URI.
var c=new XMLHttpRequest;c.addEventListener("load",function(){new FontLoader().load("data:,"+encodeURIComponent(c.responseText),function(a){b.inst=a})},!1),c.open("GET",a),c.send()}else new FontLoader().load(a,function(a){b.inst=a})},immediate:!0}}},VglExtrudeGeometry={mixins:[VglGeometry],computed:{inst:function(){return new ExtrudeGeometry([],{})}}};function getText(a){return a.map(function(a){return a.children?getText(a.children):a.text}).join("")}var vglTextGeometry={mixins:[VglExtrudeGeometry],inject:["vglFonts"],props:{font:validatePropString,size:{type:validatePropNumber,default:100},height:{type:validatePropNumber,default:50},curveSegments:{type:validatePropNumber,default:12},bevelEnabled:Boolean,bevelThickness:{type:validatePropNumber,default:10},bevelSize:{type:validatePropNumber,default:8},bevelSegments:{type:validatePropNumber,default:3}},computed:{inst:function(){var a=this.vglFonts.forGet[this.font],b=this.$slots.default;if(a&&b)return new TextGeometry(getText(b),{font:a,size:parseFloat_(this.size),height:parseFloat_(this.height),curveSegments:parseInt_(this.curveSegments),bevelEnabled:this.bevelEnabled,bevelThickness:parseFloat_(this.bevelThickness),bevelSize:parseFloat_(this.bevelSize),bevelSegments:parseInt_(this.bevelSegments)})}}},vglSpriteMaterial={mixins:[VglMaterial,hasColorFactory("#fff"),hasMap],inject:["vglTextures"],computed:{inst:function(){return new SpriteMaterial}}},vglGridHelper={mixins:[VglLineSegments],props:{size:{type:validatePropNumber,default:10},divisions:{type:validatePropNumber,default:10},colorCenterLine:{type:validatePropString,default:"#444444"},colorGrid:{type:validatePropString,default:"#888888"}},computed:{inst:function(){var a=this;return new GridHelper(parseFloat_(a.size),parseInt_(a.divisions),a.colorCenterLine,a.colorGrid)}}},vglShadowMaterial={mixins:[VglMaterial],computed:{inst:function(){return new ShadowMaterial}}};export{VglNamespace,VglObject3d,vglScene as VglScene,VglCamera,vglRenderer as VglRenderer,vglPerspectiveCamera as VglPerspectiveCamera,vglGroup as VglGroup,VglLight,vglDirectionalLight as VglDirectionalLight,vglAmbientLight as VglAmbientLight,VglMaterial,vglPointsMaterial as VglPointsMaterial,VglGeometry,vglSphereGeometry as VglSphereGeometry,vglMeshStandardMaterial as VglMeshStandardMaterial,vglMesh as VglMesh,vglPoints as VglPoints,vglLineBasicMaterial as VglLineBasicMaterial,VglLine,vglSprite as VglSprite,vglBoxGeometry as VglBoxGeometry,vglCircleGeometry as VglCircleGeometry,VglLineSegments,vglLineLoop as VglLineLoop,vglConeGeometry as VglConeGeometry,vglAxesHelper as VglAxesHelper,vglOrthographicCamera as VglOrthographicCamera,VglCylinderGeometry,vglPlaneGeometry as VglPlaneGeometry,vglDodecahedronGeometry as VglDodecahedronGeometry,vglIcosahedronGeometry as VglIcosahedronGeometry,vglOctahedronGeometry as VglOctahedronGeometry,vglRingGeometry as VglRingGeometry,vglTetrahedronGeometry as VglTetrahedronGeometry,vglTorusGeometry as VglTorusGeometry,vglTorusKnotGeometry as VglTorusKnotGeometry,vglArrowHelper as VglArrowHelper,vglBoxHelper as VglBoxHelper,vglPointLight as VglPointLight,vglSpotLight as VglSpotLight,vglTexture as VglTexture,vglLensFlare as VglLensFlare,vglLensFlareTexture as VglLensFlareTexture,vglFont as VglFont,VglExtrudeGeometry,vglTextGeometry as VglTextGeometry,vglSpriteMaterial as VglSpriteMaterial,vglGridHelper as VglGridHelper,vglShadowMaterial as VglShadowMaterial};
