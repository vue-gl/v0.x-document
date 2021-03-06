---
          
grand_parent: API / Components
          
parent: Geometries
          
nav_order: VglTetrahedronGeometry
          
---
# VglTetrahedronGeometry 

A component for generating a tetrahedron geometries,
corresponding [THREE.TetrohedronGeometry](https://threejs.org/docs/index.html#api/geometries/TetrohedronGeometry).

Properties of [VglGeometry](../core/vgl-geometry) are also available as mixin. 

## props 

- `radius` ***float*** (*optional*) `default: 1` 

  Radius of the tetrahedron. 

- `detail` ***int*** (*optional*) 

  Setting this to a value greater than 0 adds vertices making it no longer a tetrahedron. 

## computed properties 

- `inst` 

   **dependencies:** `radius`, `detail` 



## Example
              
<div class="code-example"><div class="max-width-1-2">
                <vgl-tetrahedron-geometry-example class="aspect-1618-1000"></vgl-tetrahedron-geometry-example>
              
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
        <vgl-tetrahedron-geometry
          name="geo"
          :radius="radius"
          :detail="detail"
        />
        <vgl-mesh-standard-material name="std" />
        <vgl-mesh
          geometry="geo"
          material="std"
        />
        <vgl-ambient-light color="#ffeecc" />
        <vgl-directional-light position="0 1 2" />
      </vgl-scene>
      <vgl-perspective-camera
        orbit-position="100 0.6 0.5"
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
    radius: 10,
    detail: 0,
  }),
};
</script>
{% endraw %}
```