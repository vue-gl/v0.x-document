import{AmbientLight,BoxGeometry,Camera,CircleGeometry,DirectionalLight,Euler,Geometry,Group,Light,Line,LineBasicMaterial,LineSegments,Material,Mesh,MeshStandardMaterial,Object3D,PerspectiveCamera,Points,PointsMaterial,Scene,SphereGeometry,Spherical,Sprite,Vector3,WebGLRenderer}from"https://unpkg.com/three@0.87.1/build/three.module.js";function findParent(a){const b=a.$parent;if(b)return b.$options.isVglAssets?b:findParent(b)}function createCollection(a,b){return Object.create(a&&a.assets[b])}var VglAssets={isVglAssets:!0,data(){const a=findParent(this)||null;return{assets:{materials:createCollection(a,"materials"),geometries:createCollection(a,"geometries"),attributes:createCollection(a,"attributes")}}},render(a){if(this.$slots.default)return a("div",this.$slots.default)}};function parseVector3(a){const b=new Vector3;switch(typeof a){case"number":b.setScalar(a);break;case"object":Array.isArray(a)?1===a.length?b.setScalar(parseFloat(a[0])):b.fromArray(a.map((a)=>parseFloat(a))):b.setX(parseFloat(a.x||0)).setY(parseFloat(a.y||0)).setZ(parseFloat(a.z||0));break;case"string":if(a.includes(";")){const c=a.split(";").map((a)=>a.split(":")),d=c.reduce((a,b)=>(a[b[0].trim()]=b[1],a),{});b.setX(parseFloat(d.x)).setY(parseFloat(d.y)).setZ(parseFloat(d.z))}else{const c=a.trim().split(/\s+/);1===c.length?b.setScalar(parseFloat(c[0])):b.fromArray(c.map((a)=>parseFloat(a)))}}return b}function parseEuler(a){const b=new Euler;switch(typeof a){case"object":if(Array.isArray(a))b.fromArray(a.map((a,b)=>3>b?parseFloat(a):a.trim()));else{const c=parseFloat(a.x||0),d=parseFloat(a.y||0),e=parseFloat(a.z||0);b.set(c,d,e,a.order&&a.order.trim())}break;case"string":if(a.includes(";")){const c=a.split(";").map((a)=>a.split(":")),d=c.reduce((a,b)=>(a[b[0].trim()]=b[1],a),{}),e=parseFloat(d.x),f=parseFloat(d.y),g=parseFloat(d.z);b.set(e,f,g,d.order&&d.order.trim())}else{const c=a.trim().split(/\s+/);b.fromArray(c.map((a,b)=>3>b?parseFloat(a):a.trim()))}}return b}function parseSpherical(a){const b=new Spherical;switch(typeof a){case"number":b.radius=a;break;case"object":if(Array.isArray(a))b.set(...a.map((a)=>parseFloat(a)));else{const c=parseFloat(a.radius||1),d=parseFloat(a.phi||0),e=parseFloat(a.theta||0);b.set(c,d,e)}break;case"string":if(a.includes(";")){const c=a.split(";").map((a)=>a.split(":")),d=c.reduce((a,b)=>(a[b[0].trim()]=b[1],a),{}),e=parseFloat(d.radius),f=parseFloat(d.phi),g=parseFloat(d.theta);b.set(e,f,g)}else{const c=a.trim().split(/\s+/);b.set(...c.map((a)=>parseFloat(a)))}}return b.makeSafe()}function parseNumber(a){return"string"==typeof a?parseFloat(a):a}function findParent$1(a){const b=a.$parent;if(b)return b.$options.isVglObject3d?b:findParent$1(b)}var VglObject3d={isVglObject3d:!0,mixins:[VglAssets],props:["name","position","rotation","scale"],computed:{inst:()=>new Object3D},created(){const a=this.inst;this.position&&a.position.copy(parseVector3(this.position)),this.rotation&&a.rotation.copy(parseEuler(this.rotation)),this.scale&&a.scale.copy(parseVector3(this.scale));const b=findParent$1(this);b&&b.inst.add(a)},beforeDestroy(){const a=this.inst;a.parent&&a.parent.remove(a)},watch:{position(a){this.inst.position.copy(parseVector3(a))},rotation(a){this.inst.rotation.copy(parseEuler(a))},scale(a){this.inst.scale.copy(parseVector3(a||1))},inst(a,b){b.children.length&&a.add(...b.children),a.position.copy(b.position),a.rotation.copy(b.rotation),a.scale.copy(b.scale);const c=b.parent;c&&(c.remove(b),c.add(a))}}},vglScene={mixins:[VglObject3d],inject:["scenes"],computed:{inst:()=>new Scene},created(){this.$set(this.scenes,this.name,this.inst)},beforeDestroy(){this.scenes[this.name]===this.inst&&this.$delete(this.scenes,this.name)},watch:{inst(a){this.scenes[this.name]=a}}},VglCamera={mixins:[VglObject3d],props:["orbitTarget","orbitPosition"],inject:["cameras"],computed:{inst:()=>new Camera},created(){const a=this.inst,b=this.orbitPosition,c=this.orbitTarget;if(b||c){const d=parseVector3(c);b&&a.position.setFromSpherical(parseSpherical(b)).add(d),a.lookAt(d)}this.$set(this.cameras,this.name,this.inst)},beforeDestroy(){this.cameras[this.name]===this.inst&&this.$delete(this.cameras,this.name)},watch:{inst(a){this.cameras[this.name]=a},orbitTarget(a){const b=this.inst,c=parseVector3(a);this.orbitPosition&&b.position.setFromSpherical(parseSpherical(this.orbitPosition)).add(c),b.lookAt(c)},orbitPosition(a){const b=this.inst,c=parseSpherical(a);b.position.setFromSpherical(c);const d=parseVector3(this.orbitTarget);this.orbitTarget&&b.add(d),b.lookAt(d)}}};function resizeCamera(a,b){a&&(a.aspect=b.clientWidth/b.clientHeight,a.updateProjectionMatrix())}function resizeRenderer(a,b){a.setSize(b.clientWidth,b.clientHeight,!1)}var vglRenderer={mixins:[VglAssets],props:["precision","alpha","premultipliedAlpha","antialias","stencil","preserveDrawingBuffer","depth","logarithmicDepthBuffer","camera","scene"],provide(){return{cameras:this.cameras,scenes:this.scenes}},data(){return{cameras:Object.create(null),scenes:Object.create(null),key:0,req:!0}},computed:{opt(){return{precision:this.precision,alpha:this.alpha,premultipliedAlpha:this.premultipliedAlpha===void 0||this.premultipliedAlpha,antialias:this.antialias,stencil:this.stencil===void 0||this.stencil,preserveDrawingBuffer:this.preserveDrawingBuffer,depth:this.depth===void 0||this.depth,logarithmicDepthBuffer:this.logarithmicDepthBuffer}},inst(){return new WebGLRenderer(Object.assign({canvas:this.$refs.rdr},this.opt))},cmr(){return this.cameras[this.camera]},scn(){return this.scenes[this.scene]}},methods:{resize(){resizeRenderer(this.inst,this.$el),resizeCamera(this.cmr,this.$el),this.render()},render(){this.req&&(this.$nextTick(()=>{requestAnimationFrame(()=>{this.scn&&this.cmr&&this.inst.render(this.scn,this.cmr),this.req=!0})}),this.req=!1)}},watch:{opt(){++this.key,this.$nextTick(()=>{this.resize()})},scn(){this.render()},cmr(a){resizeCamera(a,this.$el),this.render()}},mounted(){this.$refs.frm.contentWindow.addEventListener("resize",()=>{this.resize()}),this.resize()},render(a){return a("div",[a("canvas",{ref:"rdr",key:this.key},this.$slots.default),a("iframe",{ref:"frm",style:{visibility:"hidden",width:"100%",height:"100%"}})])}},vglPerspectiveCamera={mixins:[VglCamera],props:["zoom","near","far","fov"],computed:{inst(){return new PerspectiveCamera}},created(){const a=this.inst;this.zoom&&(a.zoom=parseFloat(this.zoom)),this.near&&(a.near=parseFloat(this.near)),this.far&&(a.far=parseFloat(this.far)),this.fov&&(a.fov=parseFloat(this.fov))},watch:{zoom(a){this.inst.zoom=parseFloat(a)},near(a){this.inst.near=parseFloat(a)},far(a){this.inst.far=parseFloat(a)},fov(a){this.inst.fov=parseFloat(a)}}},vglGroup={mixins:[VglObject3d],computed:{inst:()=>new Group}},VglLight={mixins:[VglObject3d],props:["color","intensity"],computed:{inst:()=>new Light},created(){this.color&&this.inst.color.setStyle(this.color),this.intensity&&(this.inst.intensity=parseFloat(this.intensity))},watch:{color(a){this.inst.color.setStyle(a)},intensity(a){this.inst.intensity=parseFloat(a)}}},vglDirectionalLight={mixins:[VglLight],computed:{inst:()=>new DirectionalLight}},vglAmbientLight={mixins:[VglLight],computed:{inst:()=>new AmbientLight}};function getParentMaterials(a){return Object.getPrototypeOf(a.assets.materials)}var VglMaterial={mixins:[VglAssets],props:["name"],computed:{inst:()=>new Material},watch:{inst(a){const b=getParentMaterials(this);b&&(b[this.name]=a)}},created(){const a=getParentMaterials(this);a&&this.$set(a,this.name,this.inst)},beforeDestroy(){const a=getParentMaterials(this);a&&a[this.name]===this.inst&&this.$delete(a,this.name)}},vglPointsMaterial={mixins:[VglMaterial],props:["color","size","sizeAttenuation"],computed:{inst:()=>new PointsMaterial},created(){this.color&&this.inst.color.setStyle(this.color),this.size&&(this.inst.size=parseFloat(this.size)),this.sizeAttenuation!==void 0&&(this.inst.sizeAttenuation=this.sizeAttenuation)},watch:{color(a){this.inst.color.setStyle(a)},size(a){this.inst.size=parseFloat(a)},sizeAttenuation(b){this.inst.sizeAttenuation=b}}};function getParentGeometries(a){return Object.getPrototypeOf(a.assets.geometries)}var VglGeometry={mixins:[VglAssets],props:["name"],computed:{inst:()=>new Geometry},watch:{inst(a){const b=getParentGeometries(this);b&&(b[this.name]=a)}},created(){const a=getParentGeometries(this);a&&this.$set(a,this.name,this.inst)},beforeDestroy(){const a=getParentGeometries(this);a&&a[this.name]===this.inst&&this.$delete(a,this.name)}},vglSphereGeometry={mixins:[VglGeometry],props:["radius","widthSegments","heightSegments","phiStart","phiLength","thetaStart","thetaLength"],computed:{inst(){return new SphereGeometry(parseNumber(this.radius),parseNumber(this.widthSegments),parseNumber(this.heightSegments),parseNumber(this.phiStart),parseNumber(this.phiLength),parseNumber(this.thetaStart),parseNumber(this.thetaLength))}}},vglMeshStandardMaterial={mixins:[VglMaterial],props:["color"],computed:{inst:()=>new MeshStandardMaterial},created(){this.color&&this.inst.color.setStyle(this.color)},watch:{color(a){this.inst.color.setStyle(a)}}};const hasMaterial={props:["material"],computed:{mtl(){const a=Object.getPrototypeOf(this.assets.materials);if(a)return a[this.material]}},created(){this.mtl&&(this.inst.material=this.mtl)},watch:{mtl(a){this.inst.material=a}}},hasGeometry={props:["geometry"],computed:{geo(){const a=Object.getPrototypeOf(this.assets.geometries);if(a)return a[this.geometry]}},created(){this.geo&&(this.inst.geometry=this.geo)},watch:{geo(a){this.inst.geometry=a}}};var vglMesh={mixins:[VglObject3d,hasGeometry,hasMaterial],computed:{inst:()=>new Mesh}},vglPoints={mixins:[VglObject3d,hasGeometry,hasMaterial],computed:{inst:()=>new Points}},vglLineBasicMaterial={mixins:[VglMaterial],props:["color","lights","linewidth","linecap","linejoin"],computed:{inst:()=>new LineBasicMaterial},created(){this.lights&&(this.inst.lights=this.lights),this.linewidth&&(this.inst.linewidth=parseFloat(this.linewidth)),this.linecap&&(this.inst.linecap=this.linecap),this.linejoin&&(this.inst.linejoin=this.linejoin),this.color&&this.inst.color.setStyle(this.color)},watch:{color(a){this.inst.color.setStyle(a)},lights(a){this.inst.lights=a},linewidth(a){this.inst.linewidth=parseFloat(a)},linecap(a){this.inst.linecap=a},linejoin(a){this.inst.linejoin=a}}},VglLine={mixins:[VglObject3d,hasGeometry,hasMaterial],computed:{inst:()=>new Line}},vglSprite={mixins:[VglObject3d,hasMaterial],computed:{inst:()=>new Sprite}},vglBoxGeometry={mixins:[VglGeometry],props:["width","height","depth","widthSegments","heightSegments","depthSegments"],computed:{inst(){return new BoxGeometry(parseNumber(this.width),parseNumber(this.height),parseNumber(this.depth),parseNumber(this.widthSegments),parseNumber(this.heightSegments),parseNumber(this.depthSegments))}}},vglCircleGeometry={mixins:[VglGeometry],props:["radius","segments","thetaStart","thetaLength"],computed:{inst(){return new CircleGeometry(parseNumber(this.radius),parseNumber(this.segments),parseNumber(this.thetaStart),parseNumber(this.thetaLength))}}},vglLineSegments={mixins:[VglLine],computed:{inst:()=>new LineSegments}};export{VglAssets,VglObject3d,vglScene as VglScene,VglCamera,vglRenderer as VglRenderer,vglPerspectiveCamera as VglPerspectiveCamera,vglGroup as VglGroup,VglLight,vglDirectionalLight as VglDirectionalLight,vglAmbientLight as VglAmbientLight,VglMaterial,vglPointsMaterial as VglPointsMaterial,VglGeometry,vglSphereGeometry as VglSphereGeometry,vglMeshStandardMaterial as VglMeshStandardMaterial,vglMesh as VglMesh,vglPoints as VglPoints,vglLineBasicMaterial as VglLineBasicMaterial,VglLine,vglSprite as VglSprite,vglBoxGeometry as VglBoxGeometry,vglCircleGeometry as VglCircleGeometry,vglLineSegments as VglLineSegments};

