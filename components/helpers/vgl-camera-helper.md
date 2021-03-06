---
          
grand_parent: API / Components
          
parent: Helpers
          
nav_order: VglCameraHelper
          
---
# VglCameraHelper 

This helps with visualizing what a camera contains in its frustum,
corresponding [THREE.CameraHelper](https://threejs.org/docs/index.html#api/helpers/CameraHelper).
It visualizes the frustum of a camera using a LineSegments.

Properties of [VglObject3d](../core/vgl-object3d) are also available as mixin. 

## props 

- `camera` ***name*** (*required*) 

  Name of the camera to visualize. 

## data 

- `exist` 

  If camera specified by the name exists or not. Do not set this data manually. 

**initial value:** `false` 

## computed properties 

- `inst` 

  The THREE.CameraHelper instance. If any cameras specified by the name, it returns a
  THREE.Object3D instance. 

   **dependencies:** `exist`, `vglNamespace`, `camera` 


## methods 

- `update(camera)` 

  Update the helper geometry for given camera object. 


## Example
              
<div class="code-example"><div class="max-width-1-2">
                <vgl-camera-helper-example class="aspect-1618-1000"></vgl-camera-helper-example>
              
</div></div>
```vue
{% raw %}<template>
  <div>
    <vgl-renderer
      antialias
      camera="view"
      scene="scene"
    >
      <vgl-scene name="scene">
        <vgl-camera-helper camera="shown" />
      </vgl-scene>
      <vgl-perspective-camera
        name="view"
        orbit-position="0.8 1 1"
        orbit-target="0 0 -0.3"
      />
      <vgl-perspective-camera
        name="shown"
        :far="far"
        :fov="fov"
        :near="near"
      />
    </vgl-renderer>

    <aside class="control-panel">
      <label>Fov<input
        v-model="fov"
        type="range"
        max="90"
      ></label>
      <label>Far<input
        v-model="far"
        type="range"
        max="1"
        step="0.01"
      ></label>
      <label>Near<input
        v-model="near"
        type="range"
        max="0.1"
        step="0.001"
      ></label>
    </aside>
  </div>
</template>

<script>
export default {
  data: () => ({
    fov: 50,
    near: 0.05,
    far: 0.5,
  }),
};
</script>
{% endraw %}
```