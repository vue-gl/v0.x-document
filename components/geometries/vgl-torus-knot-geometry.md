---
          
grand_parent: API / Components
          
parent: Geometries
          
nav_order: VglTorusKnotGeometry
          
---
# VglTorusKnotGeometry 

A component for generating torus knot geometries,
corresponding [THREE.TorusKnotGeometry](https://threejs.org/docs/index.html#api/geometries/TorusKnotGeometry).

Properties of [VglGeometry](../core/vgl-geometry) are also available as mixin. 

## props 

- `radius` ***float*** (*optional*) `default: 1` 

  Radius of the torus. 

- `tube` ***float*** (*optional*) `default: 0.4` 

  Diamiter of the tube. 

- `radial-segments` ***int*** (*optional*) `default: 8` 

  Number of segments of the tube's section. 

- `tubular-segments` ***int*** (*optional*) `default: 64` 

  Number of segments along to the tube length direction. 

- `p` ***int*** (*optional*) `default: 2` 

  This value determines how many times the geometry winds
  around its axis of rotational symmetry. 

- `q` ***int*** (*optional*) `default: 3` 

  This value determines how many times the geometry winds
  around a circle in the interior of the torus. 

## computed properties 

- `inst` 

   **dependencies:** `radius`, `tube`, `tubularSegments`, `radialSegments`, `p`, `q` 



## Example
              
<div class="code-example"><div class="max-width-1-2">
                <vgl-torus-knot-geometry-example class="aspect-1618-1000"></vgl-torus-knot-geometry-example>
              
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
        <vgl-torus-knot-geometry
          name="torus"
          :radius="radius"
          :tube="tube"
          :p="p"
          :q="q"
        />
        <vgl-mesh-standard-material name="std" />
        <vgl-mesh
          geometry="torus"
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
      <label>Radius<input
        v-model="radius"
        type="range"
        max="50"
        step="0.5"
      ></label>
      <label>Tube radius<input
        v-model="tube"
        type="range"
        max="20"
        step="0.2"
      ></label>
      <label>p<input
        v-model="p"
        type="range"
        max="10"
        step="1"
      ></label>
      <label>q<input
        v-model="q"
        type="range"
        max="10"
        step="1"
      ></label>
    </aside>
  </div>
</template>

<script>
export default {
  data: () => ({
    radius: 10,
    tube: 5,
    p: 2,
    q: 3,
  }),
};
</script>
{% endraw %}
```