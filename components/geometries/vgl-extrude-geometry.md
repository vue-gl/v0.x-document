---
          
grand_parent: API / Components
          
parent: Geometries
          
nav_order: VglExtrudeGeometry
          
---
# VglExtrudeGeometry 

A component for creating extruded geometry from a path shape,
corresponding [THREE.ExtrudeGeometry](https://threejs.org/docs/index.html#api/geometries/ExtrudeGeometry).

Properties of [VglGeometry](../core/vgl-geometry) are also available as mixin. 

## props 

- `shapes` ***names*** (*optional*) 

  The Shape names 

- `curve-segments` ***int*** (*optional*) 

  int. Number of points on the curves 

- `steps` ***int*** (*optional*) 

  int. Number of points used for subdividing segments
  along the depth of the extruded spline 

- `depth` ***float*** (*optional*) 

  float. Depth to extrude the shape 

- `bevel-enabled` ***boolean*** (*optional*) 

  Apply beveling to the shape 

- `bevel-thickness` ***float*** (*optional*) 

  float. How deep into the original shape the bevel goes 

- `bevel-size` ***float*** (*optional*) 

  float. Distance from the shape outline that the bevel extends 

- `bevel-offset` ***float*** (*optional*) 

  float. Distance from the shape outline that the bevel starts 

- `bevel-segments` ***int*** (*optional*) 

  int. Number of bevel layers 

- `extrude-path` ***Object*** (*optional*) 

  THREE.Curve. A 3D spline path along which the shape should be extruded 

- `uv-generator` ***Object*** (*optional*) 

  Object that provides UV generator functions 

## computed properties 

- `options` 

  The object containing the parameters to be passed to ExtrudeBufferGeometry constructor 
- `inst` 

  The THREE.ExtrudeBufferGeometry instance 

   **dependencies:** `shapeObjects`, `options` 



## Example
              
<div class="code-example"><div class="max-width-1-2">
                <vgl-extrude-geometry-example class="aspect-1618-1000"></vgl-extrude-geometry-example>
              
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
        <vgl-extrude-geometry
          name="extrude"
          shapes="shape"
          :depth="depth"
          :curve-segments="curveSegments"
          :steps="steps"
          :bevel-enabled="bevelEnabled"
          :bevel-thickness="bevelThickness"
          :bevel-size="bevelSize"
          :bevel-offset="bevelOffset"
          :bevel-segments="bevelSegments"
        />
        <vgl-mesh-standard-material name="std" />
        <vgl-mesh
          geometry="extrude"
          material="std"
        />
        <vgl-ambient-light color="#ffeecc" />
        <vgl-directional-light position="0 1 2" />
      </vgl-scene>
      <vgl-perspective-camera
        orbit-position="200 1 0.5"
        orbit-target="0 -30 50"
        name="camera"
      />
    </vgl-renderer>

    <aside class="control-panel">
      <section>
        <h3>Extrude</h3>
        <label>Depth<input
          v-model="depth"
          type="range"
        ></label>
        <label>Curve segments<input
          v-model="curveSegments"
          type="range"
          max="20"
        ></label>
        <label>Steps<input
          v-model="steps"
          type="range"
          max="10"
        ></label>
      </section>
      <section>
        <h3>Bevel</h3>
        <label>Enabled<input
          v-model="bevelEnabled"
          type="checkbox"
        ></label>
        <label>Thickness<input
          v-model="bevelThickness"
          type="range"
          step="0.1"
          max="10"
        ></label>
        <label>Size<input
          v-model="bevelSize"
          type="range"
          step="0.1"
          max="10"
        ></label>
        <label>Offset<input
          v-model="bevelOffset"
          type="range"
          step="0.1"
          min="-10"
          max="10"
        ></label>
        <label>Segments<input
          v-model="bevelSegments"
          type="range"
          max="10"
        ></label>
      </section>
    </aside>
  </div>
</template>

<script>
export default {
  data: () => ({
    depth: 50,
    curveSegments: 5,
    steps: 5,
    bevelEnabled: false,
    bevelThickness: 2,
    bevelSize: 2,
    bevelOffset: 0,
    bevelSegments: 5,
  }),
};
</script>
{% endraw %}
```