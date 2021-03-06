---
          
grand_parent: API / Components
          
parent: Geometries
          
nav_order: VglTorusGeometry
          
---
# VglTorusGeometry 

A component for generating torus geometries,
corresponding [THREE.TorusGeometry](https://threejs.org/docs/index.html#api/geometries/TorusGeometry).

Properties of [VglGeometry](../core/vgl-geometry) are also available as mixin. 

## props 

- `radius` ***float*** (*optional*) `default: 1` 

  Radius of the torus. 

- `tube` ***float*** (*optional*) `default: 0.4` 

  Diamiter of the tube. 

- `radial-segments` ***int*** (*optional*) `default: 8` 

  Number of segments of the tube's section. 

- `tubular-segments` ***int*** (*optional*) `default: 6` 

  Number of segments along to the tube length direction. 

- `arc` ***float*** (*optional*) `default: [object Object]` 

  The central angle. 

## computed properties 

- `inst` 

   **dependencies:** `radius`, `tube`, `radialSegments`, `tubularSegments`, `arc` 



## Example
              
<div class="code-example"><div class="max-width-1-2">
                <vgl-torus-geometry-example class="aspect-1618-1000"></vgl-torus-geometry-example>
              
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
        <vgl-torus-geometry
          name="torus"
          :radius="radius"
          :tube="tube"
          :tubular-segments="tubularSegments"
          :radial-segments="radialSegments"
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
      <label>Radial segments<input
        v-model="radialSegments"
        type="range"
      ></label>
      <label>Tubular segments<input
        v-model="tubularSegments"
        type="range"
      ></label>
    </aside>
  </div>
</template>

<script>
export default {
  data: () => ({
    radius: 10,
    tube: 5,
    tubularSegments: 8,
    radialSegments: 16,
  }),
};
</script>
{% endraw %}
```