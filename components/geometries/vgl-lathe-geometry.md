---
          
grand_parent: API / Components
          
parent: Geometries
          
nav_order: VglLatheGeometry
          
---
# VglLatheGeometry 

A component for creating extruded geometry from a path shape,
corresponding [THREE.ExtrudeGeometry](https://threejs.org/docs/index.html#api/geometries/ExtrudeGeometry).

Properties of [VglGeometry](../core/vgl-geometry) are also available as mixin. 

## props 

- `points` ***vector2Array*** (*required*) 

  Array of Vector2s. The x-coordinate of each point must be greater than zero. 

- `segments` ***int*** (*optional*) `default: 12` 

  The number of circumference segments to generate. 

- `phi-start` ***float*** (*optional*) 

  The starting angle in radians. 

- `phi-length` ***float*** (*optional*) `default: [object Object]` 

  The radian (0 to 2PI) range of the lathed section. 

## computed properties 

- `inst` 

   **dependencies:** `points`, `segments`, `phiStart`, `phiLength` 



## Example
              
<div class="code-example"><div class="max-width-1-2">
                <vgl-lathe-geometry-example class="aspect-1618-1000"></vgl-lathe-geometry-example>
              
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
        <vgl-lathe-geometry
          name="geo"
          points="1 -5, 2 -4, 3 -2, 3.5 0, 4 3, 3.5 5"
          :segments="segments"
          :phi-length="phiLength"
        />
        <vgl-mesh-standard-material
          name="mat"
          side="double"
        />
        <vgl-mesh
          geometry="geo"
          material="mat"
        />
        <vgl-ambient-light />
        <vgl-directional-light position="0 1 2" />
      </vgl-scene>
      <vgl-perspective-camera
        orbit-position="15 1 -0.5"
        name="camera"
      />
    </vgl-renderer>

    <aside class="control-panel">
      <label>Segments<input
        v-model="segments"
        type="range"
      ></label>
      <label>Phi<input
        v-model="phiLength"
        type="range"
        max="6.29"
        step="0.01"
      ></label>
    </aside>
  </div>
</template>

<script>
export default {
  data: () => ({
    segments: 16,
    phiLength: Math.PI * 2,
  }),
};
</script>
{% endraw %}
```