---
          
grand_parent: API / Components
          
parent: Geometries
          
nav_order: VglCylinderGeometry
          
---
# VglCylinderGeometry 

This is a component for generating cylinder geometries,
corresponding [THREE.CylinderGeometry](https://threejs.org/docs/index.html#api/geometries/CylinderGeometry).

Properties of [VglGeometry](../core/vgl-geometry) are also available as mixin. 

## props 

- `radius-top` ***float*** (*optional*) `default: 1` 

  Radius of the cylinder at the top. 

- `radius-bottom` ***float*** (*optional*) `default: 1` 

  Radius of the cylinder at the bottom. 

- `height` ***float*** (*optional*) `default: 1` 

  Height of the cylinder. 

- `radial-segments` ***int*** (*optional*) `default: 8` 

  Number of segmented faces around the circumference of the cylinder. 

- `height-segments` ***int*** (*optional*) `default: 1` 

  Number of rows of faces along the height of the cylinder. 

- `open-ended` ***boolean*** (*optional*) 

  A Boolean indicating whether the ends of the cylinder are open or capped. 

- `theta-start` ***float*** (*optional*) 

  Start angle for first segment. 

- `theta-length` ***float*** (*optional*) `default: [object Object]` 

  The central angle of the circular sector. 

## computed properties 

- `inst` 

   **dependencies:** `radiusTop`, `radiusBottom`, `height`, `radialSegments`, `heightSegments`, `openEnded`, `thetaStart`, `thetaLength` 



## Example
              
<div class="code-example"><div class="max-width-1-2">
                <vgl-cylinder-geometry-example class="aspect-1618-1000"></vgl-cylinder-geometry-example>
              
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
        <vgl-cylinder-geometry
          name="cylinder"
          :radius-top="radiusTop"
          :radius-bottom="radiusBottom"
          :height="height"
        />
        <vgl-mesh-standard-material name="std" />
        <vgl-mesh
          geometry="cylinder"
          material="std"
        />
        <vgl-ambient-light color="#ffeecc" />
        <vgl-directional-light position="0 1 2" />
      </vgl-scene>
      <vgl-perspective-camera
        orbit-position="200 1 0.5"
        name="camera"
      />
    </vgl-renderer>

    <aside class="control-panel">
      <label>Top radius<input
        v-model="radiusTop"
        type="range"
      ></label>
      <label>Bottom radius<input
        v-model="radiusBottom"
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
    radiusTop: 25,
    radiusBottom: 25,
    height: 50,
  }),
};
</script>
{% endraw %}
```