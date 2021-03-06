---
          
grand_parent: API / Components
          
parent: Geometries
          
nav_order: VglPolyhedronGeometry
          
---
# VglPolyhedronGeometry 

A component for generating a solid geometry with flat faces from vertices and face indices.
corresponding [THREE.PolyhedronGeometry](https://threejs.org/docs/index.html#api/geometries/PolyhedronGeometry).

Properties of [VglGeometry](../core/vgl-geometry) are also available as mixin. 

## props 

- `vertices` ***floatArray*** (*optional*) 

  Array of points of the form [x1, y1, z1, x2, y2, z2, ...] 

- `indices` ***intArray*** (*optional*) 

  Array of indices that make up the faces of the form [0, 1, 2, 2, 3, 0, ...] 

- `radius` ***float*** (*optional*) `default: 1` 

  The radius of the final shape. 

- `detail` ***int*** (*optional*) 

  How many levels to subdivide the geometry. 

## computed properties 

- `inst` 

   **dependencies:** `vertices`, `indices`, `radius`, `detail` 



## Example
              
<div class="code-example"><div class="max-width-1-2">
                <vgl-polyhedron-geometry-example class="aspect-1618-1000"></vgl-polyhedron-geometry-example>
              
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
        <vgl-polyhedron-geometry
          name="geo"
          vertices="1, 1, 1, -1, -0.5, 1, -0.5, -1, 1, 0, 0, -1"
          indices="0, 1, 2, 0, 3, 1, 1, 3, 2, 0, 2, 3"
          :radius="radius"
          :detail="detail"
        />
        <vgl-mesh-standard-material name="std" />
        <vgl-mesh
          geometry="geo"
          material="std"
        />
        <vgl-ambient-light color="#ffeecc" />
        <vgl-directional-light position="0 0.5 -2" />
      </vgl-scene>
      <vgl-perspective-camera
        orbit-position="100 0.5 0"
        name="camera"
      />
    </vgl-renderer>
    <aside class="control-panel">
      <label>Radius<input
        v-model="radius"
        type="range"
      ></label>
      <label>Detail<input
        v-model="detail"
        type="range"
        max="10"
      ></label>
    </aside>
  </div>
</template>

<script>
export default {
  data: () => ({
    radius: 40,
    detail: 0,
  }),
};
</script>
{% endraw %}
```