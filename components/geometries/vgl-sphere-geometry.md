---
          
grand_parent: API / Components
          
parent: Geometries
          
nav_order: VglSphereGeometry
          
---
# VglSphereGeometry 

This is a component for generating sphere geometries,
corresponding [THREE.SphereGeometry](https://threejs.org/docs/index.html#api/geometries/SphereGeometry).

Properties of [VglGeometry](../core/vgl-geometry) are also available as mixin. 

## props 

- `radius` ***float*** (*optional*) `default: 1` 

  Sphere radius. 

- `width-segments` ***int*** (*optional*) `default: 8` 

  Number of horizontal segments. 

- `height-segments` ***int*** (*optional*) `default: 6` 

  Number of vertical segments. 

- `phi-start` ***float*** (*optional*) 

  Specify horizontal starting angle. 

- `phi-length` ***float*** (*optional*) `default: [object Object]` 

  Specify horizontal sweep angle size. 

- `theta-start` ***float*** (*optional*) 

  Specify vertical starting angle. 

- `theta-length` ***float*** (*optional*) `default: [object Object]` 

  Specify vertical sweep angle size. 

## computed properties 

- `inst` 

   **dependencies:** `radius`, `widthSegments`, `heightSegments`, `phiStart`, `phiLength`, `thetaStart`, `thetaLength` 



## Example
              
<div class="code-example"><div class="max-width-1-2">
                <vgl-sphere-geometry-example class="aspect-1618-1000"></vgl-sphere-geometry-example>
              
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
        <vgl-sphere-geometry
          name="sphere"
          :radius="radius"
          :width-segments="widthSegments"
          :height-segments="heightSegments"
        />
        <vgl-mesh-standard-material name="std" />
        <vgl-mesh
          geometry="sphere"
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
      <label>Widgh segments<input
        v-model="widthSegments"
        type="range"
        max="64"
      ></label>
      <label>Height segments<input
        v-model="heightSegments"
        type="range"
        max="32"
      ></label>
    </aside>
  </div>
</template>

<script>
export default {
  data: () => ({
    radius: 50,
    widthSegments: 16,
    heightSegments: 8,
  }),
};
</script>
{% endraw %}
```