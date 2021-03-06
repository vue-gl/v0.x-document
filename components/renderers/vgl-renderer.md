---
          
grand_parent: API / Components
          
parent: Renderers
          
nav_order: VglRenderer
          
---
# VglRenderer 

This component creates a canvas that have WebGL context.
Options are corresponding [THREE.WebGLRenderer](https://threejs.org/docs/index.html#api/core/Object3D).

Properties of [VglNamespace](../core/vgl-namespace) are also available as mixin. 

## props 

- `camera` ***name*** (*required*) 

  Name of the using camera. 

- `scene` ***name*** (*required*) 

  Name of the target scene. 

- `alpha` ***boolean*** (*optional*) 

  Whether the canvas contains an alpha (transparency) buffer or not. 

- `disable-premultiplied-alpha` ***boolean*** (*optional*) 

  Whether the renderer will assume that colors have premultiplied alpha. 

- `antialias` ***boolean*** (*optional*) 

  Whether to perform antialiasing. 

- `disable-stencil` ***boolean*** (*optional*) 

  Whether the drawing buffer has a stencil buffer of at least 8 bits. 

- `preserve-drawing-buffer` ***boolean*** (*optional*) 

  Whether to preserve the buffers until manually cleared or overwritten. 

- `disable-depth` ***boolean*** (*optional*) 

  Whether the drawing buffer has a depth buffer of at least 16 bits. 

- `logarithmic-depth-buffer` ***boolean*** (*optional*) 

  Whether to use a logarithmic depth buffer. 

- `shadow-map-enabled` ***boolean*** (*optional*) 

  If set, use shadow maps in the scene. 

- `precision` ***string*** (*optional*) 

  Shader precision. Can be "highp", "mediump" or "lowp". 

- `power-preference` ***string*** (*optional*) 

  A hint to the user agent indicating what configuration of GPU is suitable
  for this WebGL context. Can be "high-performance", "low-power" or "default". 

## computed properties 

- `inst` 

  The THREE.WebGLRenderer instance. 

   **dependencies:** `precision`, `alpha`, `disablePremultipliedAlpha`, `antialias`, `disableStencil`, `preserveDrawingBuffer`, `disableDepth`, `logarithmicDepthBuffer`, `powerPreference`, `shadowMapEnabled` 


## methods 

- `setCameraRef(camera)` 

  Set camera for rendering the scene. If canvas is already mounted, also calculates view size
  or aspect ratio. 

- `setSceneRef(scene)` 

  Set scene to be rendered. 

- `setFallbackCamera(cameras)` 

  Set camera for rendering the scene when `camera` prop is undefined. 

- `setFallbackScene(scenes)` 

  Set scene to be rendered when `scene` prop is undefined. 

- `requestRender()` 

  Call render function at next tick. Even if this method was called multiple times, it will be
  render just once. 


## Example
              
<div class="code-example"><div class="max-width-1-2">
                <vgl-renderer-example class="aspect-1618-1000"></vgl-renderer-example>
              
</div></div>
```vue
{% raw %}<template>
  <div>
    <vgl-renderer
      :antialias="antialias"
      :alpha="alpha"
      :disable-premultiplied-alpha="!premultipliedAlpha"
      :disable-depth="!depth"
      :precision="precision"
      :disable-stencil="!stencil"
      :preserve-drawing-buffer="preserveDrawingBuffer"
      :shadow-map-enabled="shadowMapEnabled"
      :logarithmic-depth-buffer="logarithmicDepthBuffer"
      camera="camera"
      scene="scene"
    >
      <vgl-scene name="scene">
        <vgl-sphere-geometry name="sphere" />
        <vgl-box-geometry name="box" />
        <vgl-mesh-standard-material name="std" />
        <vgl-mesh
          geometry="box"
          material="std"
          position="0 -1.5 0"
          receive-shadow
        />
        <vgl-mesh
          geometry="sphere"
          material="std"
          cast-shadow
          receive-shadow
        />
        <vgl-ambient-light color="#ffeecc" />
        <vgl-directional-light
          position="0 1 1"
          cast-shadow
        />
      </vgl-scene>
      <vgl-perspective-camera
        orbit-position="5 1 1"
        name="camera"
      />
    </vgl-renderer>

    <aside class="control-panel">
      <label><input
        v-model="antialias"
        type="checkbox"
      >Antialias</label>
      <label><input
        v-model="alpha"
        type="checkbox"
      >Alpha</label>
      <label><input
        v-model="premultipliedAlpha"
        type="checkbox"
      >Premultiplied alpha</label>
      <label><input
        v-model="depth"
        type="checkbox"
      >Depth buffer</label>
      <label><input
        v-model="stencil"
        type="checkbox"
      >Stencil buffer</label>
      <label><input
        v-model="preserveDrawingBuffer"
        type="checkbox"
      >Preserve drawing buffer</label>
      <label><input
        v-model="logarithmicDepthBuffer"
        type="checkbox"
      >Logarithmic depth buffer</label>
      <label><input
        v-model="shadowMapEnabled"
        type="checkbox"
      >Shadow map</label>
      <label>Precision
        <select v-model="precision">
          <option value="highp">High</option>
          <option value="mediump">Medium</option>
          <option value="lowp">Low</option>
        </select>
      </label>
    </aside>
  </div>
</template>

<script>
export default {
  data: () => ({
    antialias: true,
    alpha: false,
    premultipliedAlpha: true,
    depth: true,
    precision: 'highp',
    stencil: true,
    preserveDrawingBuffer: false,
    shadowMapEnabled: false,
    logarithmicDepthBuffer: false,
  }),
};
</script>
{% endraw %}
```