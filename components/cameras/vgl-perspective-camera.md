---
          
grand_parent: API / Components
          
parent: Cameras
          
nav_order: VglPerspectiveCamera
          
---
# VglPerspectiveCamera 

Camera that uses perspective projection,
corresponding [THREE.PerspectiveCamera](https://threejs.org/docs/index.html#api/cameras/PerspectiveCamera).
Camera frustum aspect ratio is automatically set to the renderer aspect ratio.

Properties of [VglCamera](vgl-camera) are also available as mixin. 

## props 

- `zoom` ***float*** (*optional*) `default: 1` 

  Zoom factor of the camera. 

- `near` ***float*** (*optional*) `default: 0.1` 

  Camera frustum near plane. 

- `far` ***float*** (*optional*) `default: 2000` 

  Camera frustum far plane. 

- `fov` ***float*** (*optional*) `default: 50` 

  Camera frustum vertical field of view, from bottom to top of view, in degrees. 

## computed properties 

- `inst` 

  The THREE.PerspectiveCamera instance. 


## Example
              
<div class="code-example"><div class="max-width-1-2">
                <vgl-perspective-camera-example class="aspect-1618-1000"></vgl-perspective-camera-example>
              
</div></div>
```vue
{% raw %}<template>
  <div>
    <vgl-renderer
      antialias
      camera="pers"
      scene="scene"
    >
      <vgl-scene name="scene">
        <vgl-box-geometry
          name="box"
          width="7.5"
          height="7.5"
          depth="7.5"
        />
        <vgl-mesh-standard-material name="std" />
        <vgl-mesh
          geometry="box"
          material="std"
        />
        <vgl-ambient-light color="#ffeecc" />
        <vgl-directional-light position="0 1 2" />
      </vgl-scene>
      <vgl-perspective-camera
        orbit-position="20 1 1"
        :fov="fov"
        :zoom="zoom"
        name="pers"
      />
    </vgl-renderer>

    <aside class="control-panel">
      <label>Fov<input
        v-model="fov"
        type="range"
        max="90"
      ></label>
      <label>Zoom<input
        v-model="zoom"
        type="range"
        max="2"
        step="0.02"
      ></label>
    </aside>
  </div>
</template>

<script>
export default {
  data: () => ({
    fov: 50,
    zoom: 1,
  }),
};
</script>
{% endraw %}
```