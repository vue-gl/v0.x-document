---
          
grand_parent: API / Components
          
parent: Geometries
          
nav_order: VglConeGeometry
          
---
# VglConeGeometry 

This is a component for generating cone geometries,
corresponding [THREE.ConeGeometry](https://threejs.org/docs/index.html#api/geometries/ConeGeometry).

Properties of [VglCylinderGeometry](vgl-cylinder-geometry) are also available as mixin. 

## props 

- `radius` ***float*** (*optional*) `default: 1` 

  Radius of the cone at the base. 

## computed properties 

- `inst` 

   **dependencies:** `radius`, `height`, `radialSegments`, `heightSegments`, `openEnded`, `thetaStart`, `thetaLength` 



## Example
              
<div class="code-example"><div class="max-width-1-2">
                <vgl-cone-geometry-example class="aspect-1618-1000"></vgl-cone-geometry-example>
              
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
        <vgl-cone-geometry
          name="cone"
          :radius="radius"
          :height="height"
        />
        <vgl-mesh-standard-material name="std" />
        <vgl-mesh
          geometry="cone"
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
      <label>Radius<input
        v-model="radius"
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
    radius: 25,
    height: 50,
  }),
};
</script>
{% endraw %}
```