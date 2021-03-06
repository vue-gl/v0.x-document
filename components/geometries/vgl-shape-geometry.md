---
          
grand_parent: API / Components
          
parent: Geometries
          
nav_order: VglShapeGeometry
          
---
# VglShapeGeometry 

A component for creating an one-sided polygonal geometry from one or more path shapes,
corresponding [THREE.ShapeGeometry](https://threejs.org/docs/index.html#api/geometries/ShapeGeometry).

Properties of [VglGeometry](../core/vgl-geometry) are also available as mixin. 

## props 

- `shapes` ***names*** (*optional*) 

  The Shape names 

- `curve-segments` ***int*** (*optional*) `default: 12` 

  Number of segments per shape 

## computed properties 

- `inst` 

  The THREE.ShapeBufferGeometry instance 

   **dependencies:** `shapeObjects`, `curveSegments` 



## Example
              
<div class="code-example"><div class="max-width-1-2">
                <vgl-shape-geometry-example class="aspect-1618-1000"></vgl-shape-geometry-example>
              
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
        <vgl-shape
          name="shape"
          path="0 0, 10 10, -10 10, -20 -30, 30 -40"
        />
        <vgl-shape-geometry
          name="geo"
          shapes="shape"
          :curve-segments="curveSegments"
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
        orbit-position="100 1 0.5"
        orbit-target="0 0 50"
        name="camera"
      />
    </vgl-renderer>

    <aside class="control-panel">
      <label>Curve segments<input
        v-model="curveSegments"
        type="range"
        max="20"
      ></label>
    </aside>
  </div>
</template>

<script>
export default {
  data: () => ({ curveSegments: 5 }),
};
</script>
{% endraw %}
```