---
          
grand_parent: API / Components
          
parent: Cameras
          
nav_order: VglOrthographicCamera
          
---
# VglOrthographicCamera 

Camera that uses orthographic projection,
corresponding [THREE.OrthographicCamera](https://threejs.org/docs/index.html#api/cameras/OrthographicCamera).
Camera frustum top, bottom, left, and right planes are automatically set to the renderer size.

Properties of [VglCamera](vgl-camera) are also available as mixin. 

## props 

- `zoom` ***float*** (*optional*) `default: 1` 

  Zoom factor of the camera. 

- `near` ***float*** (*optional*) `default: 0.1` 

  Camera frustum near plane. 

- `far` ***float*** (*optional*) `default: 2000` 

  Camera frustum far plane. 

## computed properties 

- `inst` 

  The THREE.OrthographicCamera instance. 


## Example
              
<div class="code-example"><div class="max-width-1-2">
                <vgl-orthographic-camera-example class="aspect-1618-1000"></vgl-orthographic-camera-example>
              
</div></div>
```vue
{% raw %}<template>
  <div>
    <vgl-renderer
      antialias
      camera="ortho"
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
      <vgl-orthographic-camera
        orbit-position="20 1 1"
        :zoom="zoom"
        name="ortho"
      />
    </vgl-renderer>

    <aside class="control-panel">
      <label>Zoom<input
        v-model="zoom"
        type="range"
      ></label>
    </aside>
  </div>
</template>

<script>
export default {
  data: () => ({
    zoom: 10,
  }),
};
</script>
{% endraw %}
```