---
          
grand_parent: API / Components
          
parent: Geometries
          
nav_order: VglCircleGeometry
          
---
# VglCircleGeometry 

This is a simple shape component of Euclidean geometry,
corresponding [THREE.CircleGeometry](https://threejs.org/docs/index.html#api/geometries/CircleGeometry).
It is contructed from a number of triangular segments that are oriented around a central point
and extend as far out as a given radius.
It is built counter-clockwise from a start angle and a given central angle.
It can also be used to create regular polygons,
where the number of segments determines the number of sides.

Properties of [VglGeometry](../core/vgl-geometry) are also available as mixin. 

## props 

- `radius` ***float*** (*optional*) `default: 1` 

  Radius of the circle. 

- `segments` ***int*** (*optional*) `default: 8` 

  Number of segments (triangles). 

- `theta-start` ***float*** (*optional*) 

  Start angle for first segment. 

- `theta-length` ***float*** (*optional*) `default: [object Object]` 

  The central angle of the circular sector. 

## computed properties 

- `inst` 

   **dependencies:** `radius`, `segments`, `thetaStart`, `thetaLength` 



## Example
              
<div class="code-example"><div class="max-width-1-2">
                <vgl-circle-geometry-example class="aspect-1618-1000"></vgl-circle-geometry-example>
              
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
        <vgl-circle-geometry
          name="circle"
          :radius="radius"
          :segments="segments"
        />
        <vgl-mesh-standard-material name="std" />
        <vgl-mesh
          geometry="circle"
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
      <label>Segments<input
        v-model="segments"
        type="range"
      ></label>
    </aside>
  </div>
</template>

<script>
export default {
  data: () => ({
    radius: 25,
    segments: 16,
  }),
};
</script>
{% endraw %}
```