---
          
grand_parent: API / Components
          
parent: Core
          
nav_order: VglGeometry
          
---
# VglGeometry 

This is the base mixin component for all geometry components,
corresponding [THREE.Geometry](https://threejs.org/docs/index.html#api/core/Geometry).
This can also be used directly for building custom geometries. 

## props 

- `name` ***name*** (*required*) 

  Name of the component. 

- `position-attribute` ***floatArray*** (*optional*) 

  The x, y, and z coordinates of each vertex in this geometry. 

- `color-attribute` ***floatArray*** (*optional*) 

  The red, green, and blue channels of vertex color of each vertex in this geometry. 

- `normal-attribute` ***floatArray*** (*optional*) 

  The x, y, and z components of the vertex normal vector of each vertex in this geometry. 

## computed properties 

- `inst` 

  The THREE.BufferGeometry instance. 

## methods 

- `update()` 

  Emit an event in `geometries` namespace. Call this method after editing instance's
  properties. 


## Example
              
<div class="code-example"><div class="max-width-1-2">
                <vgl-geometry-example class="aspect-1618-1000"></vgl-geometry-example>
              
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
        <vgl-geometry
          name="vertices"
          position-attribute="-5, 0, 0, 5, 0, 0, 5, 5, 0, -5, 5, 0, -5, 4, 0, 4, 4, 0, 4, 1, 0, -5,
                              1, 0"
          color-attribute="1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1"
        />
        <vgl-line-basic-material
          name="line"
          linewidth="2"
          vertex-colors="vertex"
        />
        <vgl-line-loop
          geometry="vertices"
          material="line"
        />
        <vgl-line-loop
          geometry="vertices"
          material="line"
          rotation="0 -1.5708 0 XYZ"
        />
      </vgl-scene>
      <vgl-perspective-camera
        orbit-position="20 0.8 0.7"
        name="camera"
      />
    </vgl-renderer>
  </div>
</template>
{% endraw %}
```