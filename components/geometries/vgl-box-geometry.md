---
          
grand_parent: API / Components
          
parent: Geometries
          
nav_order: VglBoxGeometry
          
---
# VglBoxGeometry 

This is the quadrilateral primitive geometry component,
corresponding [THREE.BoxGeometry](https://threejs.org/docs/index.html#api/geometries/BoxGeometry).

Properties of [VglGeometry](../core/vgl-geometry) are also available as mixin. 

## props 

- `width` ***float*** (*optional*) `default: 1` 

  Width of the sides on the X axis. 

- `height` ***float*** (*optional*) `default: 1` 

  Height of the sides on the Y axis. 

- `depth` ***float*** (*optional*) `default: 1` 

  Depth of the sides on the Z axis. 

- `width-segments` ***int*** (*optional*) `default: 1` 

  Number of segmented faces along the width of the sides. 

- `height-segments` ***int*** (*optional*) `default: 1` 

  Number of segmented faces along the height of the sides. 

- `depth-segments` ***int*** (*optional*) `default: 1` 

  Number of segmented faces along the depth of the sides. 

## computed properties 

- `inst` 

   **dependencies:** `width`, `height`, `depth`, `widthSegments`, `heightSegments`, `depthSegments` 



## Example
              
<div class="code-example"><div class="max-width-1-2">
                <vgl-box-geometry-example class="aspect-1618-1000"></vgl-box-geometry-example>
              
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
        <vgl-box-geometry
          name="box"
          :width="width"
          :height="height"
          :depth="depth"
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
        orbit-position="100 1 1"
        name="camera"
      />
    </vgl-renderer>

    <aside class="control-panel">
      <h3>Size</h3>
      <label>Width<input
        v-model="width"
        type="range"
      ></label>
      <label>Height<input
        v-model="height"
        type="range"
      ></label>
      <label>Depth<input
        v-model="depth"
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
    depth: 50,
  }),
};
</script>
{% endraw %}
```