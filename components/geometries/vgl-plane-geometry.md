---
          
grand_parent: API / Components
          
parent: Geometries
          
nav_order: VglPlaneGeometry
          
---
# VglPlaneGeometry 

A component for generating plane geometries,
corresponding [THREE.PlaneGeometry](https://threejs.org/docs/index.html#api/geometries/PlaneGeometry).

Properties of [VglGeometry](../core/vgl-geometry) are also available as mixin. 

## props 

- `width` ***float*** (*optional*) `default: 1` 

  Width along the X axis. 

- `height` ***float*** (*optional*) `default: 1` 

  Height along the Y axis. 

- `width-segments` ***int*** (*optional*) `default: 1` 

  Number of segments along the X axis. 

- `height-segments` ***int*** (*optional*) `default: 1` 

  Number of segments along the Y axis. 

## computed properties 

- `inst` 

   **dependencies:** `width`, `height`, `widthSegments`, `heightSegments` 



## Example
              
<div class="code-example"><div class="max-width-1-2">
                <vgl-plane-geometry-example class="aspect-1618-1000"></vgl-plane-geometry-example>
              
</div></div>
```vue
{% raw %}<template>
  <div>
    <vgl-renderer
      antialias
      camera="camera"
      scene="scene"
    >
      <vgl-scene name="scene">
        <vgl-plane-geometry
          name="plane"
          :width="width"
          :height="height"
        />
        <vgl-mesh-standard-material name="std" />
        <vgl-mesh
          geometry="plane"
          material="std"
        />
        <vgl-ambient-light color="#ffeecc" />
        <vgl-directional-light position="0 1 2" />
      </vgl-scene>
      <vgl-perspective-camera
        orbit-position="100 1 0.5"
        name="camera"
      />
    </vgl-renderer>

    <aside class="control-panel">
      <label>Width<input
        v-model="width"
        type="range"
      ></label>
      <label>Height<input
        v-model="height"
        type="range"
      ></label>
    </aside>
  </div>
</template>

<script>
export default {
  data: () => ({
    width: 50,
    height: 50,
  }),
};
</script>
{% endraw %}
```