---
          
grand_parent: API / Components
          
parent: Geometries
          
nav_order: VglRingGeometry
          
---
# VglRingGeometry 

This is a simple shape component of Euclidean geometry,
corresponding [THREE.RingGeometry](https://threejs.org/docs/index.html#api/geometries/RingGeometry).
It is contructed from a number of triangular segments that are oriented around a central point
and extend as far out as a given radius.
It is built counter-clockwise from a start angle and a given central angle.
It can also be used to create regular polygons,
where the number of segments determines the number of sides.

Properties of [VglGeometry](../core/vgl-geometry) are also available as mixin. 

## props 

- `inner-radius` ***float*** (*optional*) `default: 0.5` 

  Inner radius of the ring. 

- `outer-radius` ***float*** (*optional*) `default: 1` 

  Outer radius of the ring. 

- `theta-segments` ***int*** (*optional*) `default: 8` 

  Number of segments along to the tangential direction. 

- `phi-segments` ***int*** (*optional*) `default: 1` 

  Number of segments along to the radial direction. 

- `theta-start` ***float*** (*optional*) 

  The starting angle. 

- `theta-length` ***float*** (*optional*) `default: [object Object]` 

  The central angle. 

## computed properties 

- `inst` 

   **dependencies:** `innerRadius`, `outerRadius`, `thetaSegments`, `phiSegments`, `thetaStart`, `thetaLength` 



## Example
              
<div class="code-example"><div class="max-width-1-2">
                <vgl-ring-geometry-example class="aspect-1618-1000"></vgl-ring-geometry-example>
              
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
        <vgl-ring-geometry
          name="ring"
          :inner-radius="innerRadius"
          :outer-radius="outerRadius"
        />
        <vgl-mesh-standard-material name="std" />
        <vgl-mesh
          geometry="ring"
          material="std"
        />
        <vgl-ambient-light color="#ffeecc" />
        <vgl-directional-light position="0 1 2" />
      </vgl-scene>
      <vgl-perspective-camera
        orbit-position="250 1 0.5"
        name="camera"
      />
    </vgl-renderer>

    <aside class="control-panel">
      <label>Inner radius<input
        v-model="innerRadius"
        type="range"
      ></label>
      <label>Outer radius<input
        v-model="outerRadius"
        type="range"
      ></label>
    </aside>
  </div>
</template>

<script>
export default {
  data: () => ({
    innerRadius: 25,
    outerRadius: 50,
  }),
};
</script>
{% endraw %}
```