(function(a,b){'object'==typeof exports&&'undefined'!=typeof module?b(exports,require('three')):'function'==typeof define&&define.amd?define(['exports','three'],b):b(a.VueGL={},a.THREE)})(this,function(a,b){'use strict';/**
 * Returns a parsed vector3 object when the argument is a string. Otherwise pass the argument through.
 */function c(a,c){return'string'==typeof a?(c||new b.Vector3).fromArray(a.trim().split(/\s+/).map(function(a){return parseFloat(a)})):c?c.copy(a):a}/**
 * Returns a parsed euler object when the argument is a string. Othewise pass the argument through.
 */function d(a,c){return'string'==typeof a?(c||new b.Euler).fromArray(a.trim().split(/\s+/).map(function(a,b){return 3===b?a:parseFloat(a)})):c?c.copy(a):a}/**
 * Returns a parsed spherical object when the argument is a string. Otherwise pass the argument through.
 */function e(a,c){var d;return'string'==typeof a?(d=c||new b.Spherical).set.apply(d,z(a.trim().split(/\s+/).map(function(a){return parseFloat(a)}))).makeSafe():c?c.copy(a):a}/**
 * Returns a parsed integer number when the argument is a string. Otherwise pass the argument through.
 */function f(a){return'string'==typeof a?parseInt(a,10):a}/**
 * Returns a parsed float number when the argument is a string. Otherwise pass the argument through.
 */function g(a){return'string'==typeof a?parseFloat(a):a}/**
 * Create an object that has array's items as keys. Values are set by setter function.
 */function h(a,b){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{};return a.reduce(function(a,c,d){return a[c]=b(c,d),a},c)}/**
 * Find the nearest ancestor component that has the [key] option.
 */function i(a,b){var c=a.$parent;if(c)return c.$options[b]?c:i(c,b)}/**
 * Constant arrays useful for props validation.
 *//**
 * Call the ancestor renderer's vglUpdate function from object3d components.
 */function j(a){a.vglUpdate&&a.vglUpdate()}function k(){return Object.create(null)}function l(a,b){return h(a,function(){return k()},b)}function m(a,b){var c={props:{name:B},inject:[b],created:function(){this.$set(this[b].forSet,this.name,this.inst)},watch:{inst:function(a){this[b].forSet[this.name]=a}},beforeDestroy:function(){this[b].forSet[this.name]===this.inst&&this.$delete(this[b].forSet,this.name)},render:function(a){if(this.$slots.default)return a('div',this.$slots.default)}};return a&&(c.computed={inst:function(){return new a}}),c}function n(a,b){var c=a+'_';return{props:y({},a,B),inject:[b],computed:y({},c,function(){return this[b].forGet[this[a]]}),mounted:function(){var b=this[c];b&&(this.inst[a]=b,b.addEventListener('update',this.ud))},methods:{ud:function(){j(this)}},watch:y({},c,function(b,c){b!==c&&(this.inst[a]=b,c&&c.removeEventListener('update',this.ud),b&&b.addEventListener('update',this.ud),j(this))})}}function o(a){var b=[n('material','vglMaterials')];return a&&b.push(n('geometry','vglGeometries')),{mixins:b}}function p(a){return{props:{radius:A,detail:A},computed:{inst:function(){return new a(g(this.radius),f(this.detail))}}}}function q(a,d,f){if(d||f){var g=c(f);if(d){var h=a.inst.position.setFromSpherical(e(d));g&&h.add(g)}a.inst.lookAt(g||new b.Vector3),j(a)}}function r(a,b){var c=b.clientWidth,d=b.clientHeight;a.isPerspectiveCamera?a.aspect=c/d:(a.left=c/-2,a.right=c/2,a.top=d/2,a.bottom=d/-2),a.updateProjectionMatrix()}function s(a,b){a.setSize(b.clientWidth,b.clientHeight,!1)}function t(a){a.inst.dispatchEvent({type:'update'})}function u(a,b){a.inst.setDirection(c(b).normalize())}function v(a){return i(a,'isVglLensFlare')}var w=function(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')},x=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),y=function(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a},z=function(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)},A=[String,Number],B=String,C=['vglCameras','vglScenes'],D=['vglGeometries','vglMaterials','vglTextures','vglFonts'],E=[].concat(C,D),F=D.map(function(a){return a+'_'}),G=F.map(function(a){return a+'_'}),H={provide:function(){var a=this,b=function(){function b(a){w(this,b),this.i=a}return x(b,[{key:'forGet',get:function(){return a[G[this.i]]}},{key:'forSet',get:function(){return a[F[this.i]]}}]),b}(),c=function(){function b(a){w(this,b),this.i=a}return x(b,[{key:'forGet',get:function(){return a[C[this.i]]}},{key:'forSet',get:function(){return a[C[this.i]]}}]),b}();return h(D,function(a,c){return new b(c)},a.$data[C[0]]?h(C,function(a,b){return new c(b)}):{})},inject:h(E,function(){return{default:void 0}}),data:function(){return l(F,this[C[0]]?{}:l(C))},computed:h(G,function(a,b){return function(){var a=D[b],c=F[b];return this[a]?Object.assign(Object.create(this[a].forGet),this[c]):this[c]}}),render:function(a){if(this.$slots.default)return a('div',this.$slots.default)}},I=new b.Vector3,J=new b.Euler,K=new b.Vector3(1,1,1),L={isVglObject3d:!0,props:{position:{type:[String,b.Vector3],default:function(){return I}},rotation:{type:[String,b.Euler],default:function(){return J}},scale:{type:[String,b.Vector3],default:function(){return K}}},computed:{inst:function(){return new b.Object3D}},inject:{vglUpdate:{default:void 0}},created:function(){var a=i(this,'isVglObject3d');a&&a.inst.add(this.inst)},beforeDestroy:function(){this.inst.parent&&this.inst.parent.remove(this.inst)},watch:{position:{handler:function(a){c(a||I,this.inst.position),j(this)},immediate:!0},rotation:{handler:function(a){d(a||J,this.inst.rotation),j(this)},immediate:!0},scale:{handler:function(a){c(a||K,this.inst.scale),j(this)},immediate:!0},inst:function(a,b){b.children.length&&a.add.apply(a,z(b.children)),a.position.copy(b.position),a.rotation.copy(b.rotation),a.scale.copy(b.scale),b.parent&&b.parent.remove(b).add(a),j(this)}},render:function(a){if(this.$slots.default)return a('div',this.$slots.default)}},M={mixins:[L,m(b.Scene,'vglScenes')],provide:function(){if(!this.vglUpdate)return{vglUpdate:function(){this.inst.dispatchEvent({type:'update'})}}}},N={mixins:[L,m(b.Camera,'vglCameras')],props:{orbitTarget:[String,b.Vector3],orbitPosition:[String,b.Spherical]},watch:{orbitTarget:{handler:function(a){q(this,this.orbitPosition,a)},immediate:!0},orbitPosition:function(a){q(this,a,this.orbitTarget)}}},O={mixins:[H],props:{precision:String,alpha:Boolean,disablePremultipliedAlpha:Boolean,antialias:Boolean,disableStencil:Boolean,preserveDrawingBuffer:Boolean,disableDepth:Boolean,logarithmicDepthBuffer:Boolean,camera:String,scene:String},provide:function(){return{vglUpdate:this.render}},data:function(){return{key:0,req:!0}},computed:{opt:function(){return{precision:this.precision,alpha:this.alpha,premultipliedAlpha:!this.disablePremultipliedAlpha,antialias:this.antialias,stencil:!this.disableStencil,preserveDrawingBuffer:this.preserveDrawingBuffer,depth:!this.disableDepth,logarithmicDepthBuffer:this.logarithmicDepthBuffer}},inst:function(){return new b.WebGLRenderer(Object.assign({canvas:this.$refs.rdr},this.opt))},cmr:function(){return(this.$data.vglCameras||this.vglCameras.forGet)[this.camera]},scn:function(){return(this.$data.vglScenes||this.vglScenes.forGet)[this.scene]}},methods:{resize:function(){s(this.inst,this.$el),this.cmr&&(r(this.cmr,this.$el),this.scn&&this.render())},render:function(){var a=this;this.req&&(this.$nextTick(function(){requestAnimationFrame(function(){a.scn&&a.cmr&&a.inst.render(a.scn,a.cmr),a.req=!0})}),this.req=!1)}},watch:{opt:function(){var a=this;++this.key,this.$nextTick(function(){a.resize()})},scn:function(a,b){b&&b.removeEventListener('update',this.render),a&&(a.addEventListener('update',this.render),this.render())},cmr:function(a,b){b&&b.removeEventListener('update',this.render),a&&(a.addEventListener('update',this.render),r(a,this.$el),this.render())}},created:function(){this.scn&&this.scn.addEventListener('update',this.render),this.cmr&&this.cmr.addEventListener('update',this.render)},render:function(a){var b=this;return a('div',[a('canvas',{ref:'rdr',key:this.key},this.$slots.default),a('iframe',{ref:'frm',style:{visibility:'hidden',width:'100%',height:'100%'},on:{load:function(a){a.target.contentWindow.addEventListener('resize',b.resize),b.$nextTick(b.resize)}}})])}},P={mixins:[L],props:{color:{type:String,default:'white'},intensity:{type:[String,Number],default:1}},computed:{inst:function(){return new b.Light}},watch:{color:{handler:function(a){this.inst.color.setStyle(a),j(this)},immediate:!0},intensity:{handler:function(a){this.inst.intensity=g(a),j(this)},immediate:!0}}},Q={mixins:[m(b.Material,'vglMaterials')]},R={mixins:[Q],props:{color:{type:String,default:'#fff'},size:{type:[String,Number],default:1},disableSizeAttenuation:Boolean},computed:{inst:function(){return new b.PointsMaterial}},created:function(){var a=this.inst;a.color.setStyle(this.color),a.size=g(this.size),a.sizeAttenuation=!this.disableSizeAttenuation},watch:{color:function(a){this.inst.color.setStyle(a)},size:function(a){this.inst.size=g(a)},disableSizeAttenuation:function(a){this.inst.sizeAttenuation=!a}}},S={mixins:[m(b.Geometry,'vglGeometries')]},T=[String,Number],U=['radius','widthSegments','heightSegments','phiStart','phiLength','thetaStart','thetaLength'],V={mixins:[S],props:h(U,function(){return T}),computed:{inst:function(){var a=this;return new(Function.prototype.bind.apply(b.SphereGeometry,[null].concat(z(U.map(function(b,c){return(1>c||2<c?g:f)(a[b])})))))}}},W={mixins:[L,o(!0)],computed:{inst:function(){return new b.Mesh}}},X={mixins:[L,o(!0)],computed:{inst:function(){return new b.Points}}},Y={mixins:[Q],props:{color:{type:String,default:'#fff'},lights:Boolean,linewidth:{type:[String,Number],default:1},linecap:{type:String,default:'round'},linejoin:{type:String,default:'round'}},computed:{inst:function(){return new b.LineBasicMaterial}},created:function(){var a=this.inst;a.lights=this.lights,a.linecap=this.linecap,a.linejoin=this.linejoin,a.linewidth=g(this.linewidth),a.color.setStyle(this.color)},watch:{color:function(a){this.inst.color.setStyle(a)},lights:function(a){this.inst.lights=a},linewidth:function(a){this.inst.linewidth=g(a)},linecap:function(a){this.inst.linecap=a},linejoin:function(a){this.inst.linejoin=a}}},Z={mixins:[L,o(!0)],computed:{inst:function(){return new b.Line}}},$={mixins:[L,o()],computed:{inst:function(){return new b.Sprite}}},_=[String,Number],aa=['width','height','depth'],ba=['widthSegments','heightSegments','depthSegments'],ca={mixins:[S],props:h(aa,function(){return _},h(ba,function(){return _})),computed:{inst:function(){var a=this;return new(Function.prototype.bind.apply(b.BoxGeometry,[null].concat(z(aa.map(function(b){return g(a[b])})),z(ba.map(function(b){return f(a[b])})))))}}},da=[String,Number],ea=['radius','segments','thetaStart','thetaLength'],fa={mixins:[S],props:h(ea,function(){return da}),computed:{inst:function(){var a=this;return new(Function.prototype.bind.apply(b.CircleGeometry,[null].concat(z(ea.map(function(b,c){return(1===c?f:g)(a[b])})))))}}},ga={mixins:[Z],computed:{inst:function(){return new b.LineSegments}}},ha=[String,Number],ia=['radiusTop','radiusBottom','height','radialSegments','heightSegments','openEnded','thetaStart','thetaLength'],ja={mixins:[S],props:h(ia,function(a,b){return 5===b?Boolean:ha}),computed:{inst:function(){var a=this;return new(Function.prototype.bind.apply(b.CylinderGeometry,[null].concat(z(ia.map(function(b,c){return(3>c||5<c?g:f)(a[b])})))))}}},ka={mixins:[ja],props:{radius:[String,Number]},computed:{inst:function(){var a=this;return new(Function.prototype.bind.apply(b.ConeGeometry,[null].concat(z(['radius','height','radialSegments','heightSegments','openEnded','thetaStart','thetaLength'].map(function(b,c){return(2>c||4<c?g:f)(a[b])})))))}}},la={mixins:[ga],props:{size:[String,Number]},computed:{inst:function(){return new b.AxisHelper(g(this.size))}}},ma=[String,Number],na=['width','height','widthSegments','heightSegments'],oa={mixins:[S],props:h(na,function(){return ma}),computed:{inst:function(){var a=this;return new(Function.prototype.bind.apply(b.PlaneGeometry,[null].concat(z(na.map(function(b,c){return(1<c?f:g)(a[b])})))))}}},pa={mixins:[S,p(b.DodecahedronGeometry)]},qa={mixins:[S,p(b.IcosahedronGeometry)]},ra={mixins:[S,p(b.OctahedronGeometry)]},sa=[String,Number],ta=['innerRadius','outerRadius','thetaSegments','phiSegments','thetaStart','thetaLength'],ua={mixins:[S],props:h(ta,function(){return sa}),computed:{inst:function(){var a=this;return new(Function.prototype.bind.apply(b.RingGeometry,[null].concat(z(ta.map(function(b,c){return(2>c||3<c?g:f)(a[b])})))))}}},va={mixins:[S,p(b.TetrahedronGeometry)]},wa=[String,Number],xa=['radius','tube','radialSegments','tubularSegments','arc'],ya={mixins:[S],props:h(xa,function(){return wa}),computed:{inst:function(){var a=this;return new(Function.prototype.bind.apply(b.TorusGeometry,[null].concat(z(xa.map(function(b,c){return(2>c||3<c?g:f)(a[b])})))))}}},za=[String,Number],Aa=['radius','tube','tubularSegments','radialSegments','p','q'],Ba={mixins:[S],props:h(Aa,function(){return za}),computed:{inst:function(){var a=this;return new(Function.prototype.bind.apply(b.TorusKnotGeometry,[null].concat(z(Aa.map(function(b,c){return(2>c||3<c?g:f)(a[b])})))))}}},Ca=[String,Number],Da=new b.Vector3(0,1),Ea=new b.Vector3,Fa=new b.Color,Ga={mixins:[L],props:{dir:{type:[String,b.Vector3],default:function(){return Da}},length:{type:Ca,default:1},color:{type:String,default:'#ff0'},headLength:Ca,headWidth:Ca},computed:{inst:function(){return new b.ArrowHelper(Da,Ea)},len:function(){return[g(this.length),g(this.headLength),g(this.headWidth)]}},created:function(){var a;this.dir!==Da&&this.inst.setDirection(c(this.dir).normalize()),(a=this.inst).setLength.apply(a,z(this.len)),this.inst.setColor(Fa.setStyle(this.color))},watch:{dir:function(a){u(this,a)},len:function(a){var b;(b=this.inst).setLength.apply(b,z(a))},color:function(a){this.inst.setColor(Fa.setStyle(a))}}},Ha={mixins:[P],props:{distance:{type:A,default:0},decay:{type:A,default:1},angle:{type:A,default:Math.PI/3},penumbra:{type:A,default:0},target:{type:[String,b.Vector3]}},computed:{inst:function(){return new b.SpotLight}},created:function(){var a=this;if(this.target){c(this.target,this.inst.target.position);var b=i(this,'isVglObject3d');b&&this.$watch(function(){return b.inst},function(b,c){c&&c.remove(a.inst.target),b.add(a.inst.target),j(a)},{immediate:!0})}},beforeDestroy:function(){this.inst.target.parent&&this.inst.target.parent.remove(this.inst.target)},watch:{distance:{handler:function(a){this.inst.distance=g(a),j(this)},immediate:!0},decay:{handler:function(a){this.inst.decay=g(a),j(this)},immediate:!0},angle:{handler:function(a){this.inst.angle=g(a),j(this)},immediate:!0},penumbra:{handler:function(a){this.inst.penumbra=g(a),j(this)},immediate:!0},target:function(a){c(a,this.inst.target.position),j(this)}}},Ia={mixins:[m(null,'vglTextures')],props:{src:B},data:function(){return{inst:null}},watch:{src:{handler:function(a){var c=this;new b.TextureLoader().load(a,function(a){c.inst=a})},immediate:!0}}},Ja={inject:['vglTextures'],props:{texture:{type:B},size:{type:A,default:-1},distance:{type:A,default:0},blending:{type:A,default:b.NormalBlending},color:{type:B,default:'#fff'}},data:function(){return{inst:null}},computed:{opts:function(){return[this.vglTextures.forGet[this.texture],f(this.size),g(this.distance),f(this.blending),new b.Color(this.color)]}},beforeDestroy:function(){var a=v(this);this.remove(a),j(a)},watch:{opts:{handler:function(a){var b=v(this);b&&(this.inst?(a[0]?this.replace(b):(this.remove(b),this.inst=null),j(b)):a[0]&&(this.add(b),j(b)))},immediate:!0}},methods:{add:function(a){var b;(b=a.inst).add.apply(b,z(this.opts)),this.inst=a.inst.lensFlares.slice(-1)[0]},remove:function(a){a.inst.lensFlares.splice(a.inst.lensFlares.indexOf(this.inst),1)},replace:function(a){this.remove(a),this.add(a)}},render:function(a){if(this.$slots.default)return a('div',this.$slots.default)}},Ka={mixins:[m(null,'vglFonts')],props:{src:B},data:function(){return{inst:null}},watch:{src:{handler:function(a){var c=this;new b.FontLoader().load(a,function(a){c.inst=a})},immediate:!0}}};a.VglNamespace=H,a.VglObject3d=L,a.VglScene=M,a.VglCamera=N,a.VglRenderer=O,a.VglPerspectiveCamera={mixins:[N],props:{zoom:{type:A,default:1},near:{type:A,default:0.1},far:{type:A,default:2e3},fov:{type:A,default:50}},computed:{inst:function(){return new b.PerspectiveCamera}},watch:{zoom:{handler:function(a){this.inst.zoom=g(a),j(this)},immediate:!0},near:{handler:function(a){this.inst.near=g(a),j(this)},immediate:!0},far:{handler:function(a){this.inst.far=g(a),j(this)},immediate:!0},fov:{handler:function(a){this.inst.fov=g(a),j(this)},immediate:!0}}},a.VglGroup={mixins:[L],computed:{inst:function(){return new b.Group}}},a.VglLight=P,a.VglDirectionalLight={mixins:[P],computed:{inst:function(){return new b.DirectionalLight}}},a.VglAmbientLight={mixins:[P],computed:{inst:function(){return new b.AmbientLight}}},a.VglMaterial=Q,a.VglPointsMaterial=R,a.VglGeometry=S,a.VglSphereGeometry=V,a.VglMeshStandardMaterial={mixins:[Q],props:{color:{type:B,default:'#fff'},map:B},inject:['vglTextures'],computed:{inst:function(){return new b.MeshStandardMaterial},tex:function(){return this.vglTextures.forGet[this.map]||null}},watch:{color:{handler:function(a){this.inst.color.setStyle(a),t(this)},immediate:!0},tex:{handler:function(a,b){this.inst.map=a,b||(this.inst.needsUpdate=!0),t(this)},immediate:!0}}},a.VglMesh=W,a.VglPoints=X,a.VglLineBasicMaterial=Y,a.VglLine=Z,a.VglSprite=$,a.VglBoxGeometry=ca,a.VglCircleGeometry=fa,a.VglLineSegments=ga,a.VglLineLoop={mixins:[Z],computed:{inst:function(){return new b.LineLoop}}},a.VglConeGeometry=ka,a.VglAxisHelper=la,a.VglOrthographicCamera={mixins:[N],props:{zoom:{type:A,default:1},near:{type:A,default:0.1},far:{type:A,default:2e3}},computed:{inst:function(){return new b.OrthographicCamera}},watch:{zoom:{handler:function(a){this.inst.zoom=g(a),j(this)},immediate:!0},near:{handler:function(a){this.inst.near=g(a),j(this)},immediate:!0},far:{handler:function(a){this.inst.far=g(a),j(this)},immediate:!0}}},a.VglCylinderGeometry=ja,a.VglPlaneGeometry=oa,a.VglDodecahedronGeometry=pa,a.VglIcosahedronGeometry=qa,a.VglOctahedronGeometry=ra,a.VglRingGeometry=ua,a.VglTetrahedronGeometry=va,a.VglTorusGeometry=ya,a.VglTorusKnotGeometry=Ba,a.VglArrowHelper=Ga,a.VglBoxHelper={mixins:[ga],props:{color:{type:B,default:'#ff0'}},computed:{inst:function(){return new b.BoxHelper}},data:function(){return{uw:null,r:!0}},created:function(){var a=this,b=this.inst;b.parent&&(this.uw=this.$watch(function(){return b.parent},function(){a.r&&(a.$nextTick(function(){b.setFromObject(b.parent),a.r=!0}),a.r=!1)},{immediate:!0}))},beforeDestroy:function(){this.uw&&this.uw()},watch:{color:{handler:function(a){this.inst.material.color.setStyle(a)},immediate:!0}}},a.VglPointLight={mixins:[P],props:{distance:{type:A,default:0},decay:{type:A,default:1}},computed:{inst:function(){return new b.PointLight}},watch:{distance:{handler:function(a){this.inst.distance=g(a),j(this)},immediate:!0},decay:{handler:function(a){this.inst.decay=g(a),j(this)},immediate:!0}}},a.VglSpotLight=Ha,a.VglTexture=Ia,a.VglLensFlare={isVglLensFlare:!0,mixins:[L],computed:{inst:function(){return new b.LensFlare}}},a.VglLensFlareTexture=Ja,a.VglFont=Ka,Object.defineProperty(a,'__esModule',{value:!0})});
