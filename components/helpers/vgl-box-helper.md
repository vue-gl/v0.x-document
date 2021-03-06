---
          
grand_parent: API / Components
          
parent: Helpers
          
nav_order: VglBoxHelper
          
---
# VglBoxHelper 

A helper component to show the world-axis-aligned bounding box around its parent,
corresponding [THREE.BoxHelper](https://threejs.org/docs/index.html#api/helpers/BoxHelper).

Properties of [VglObject3d](../core/vgl-object3d) are also available as mixin. 

## props 

- `color` ***color*** (*optional*) `default: '#ff0'` 

  Size of the lines representing the axes. 

- `object` ***name*** (*required*) 

  Name of the object to show the world-axis-aligned boundingbox. 

## computed properties 

- `inst` 

  The THREE.BoxHelper instance. 

   **dependencies:** `color` 


## methods 

- `setFromObject(obj)` 

  Set the geometry of the helper box from given object. 


## Example
              
<div class="code-example"><div class="max-width-1-2">
                <vgl-box-helper-example class="aspect-1618-1000"></vgl-box-helper-example>
              
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
          name="geo"
          :radius="radius"
        />
        <vgl-mesh-standard-material name="mtl" />
        <vgl-mesh
          geometry="geo"
          material="mtl"
          name="obj"
        />
        <vgl-box-helper
          object="obj"
          :color="`rgb(${r}, ${g}, ${b})`"
        />
        <vgl-ambient-light />
        <vgl-directional-light position="0 1 1" />
      </vgl-scene>
      <vgl-perspective-camera
        orbit-position="250 1 0.5"
        name="camera"
      />
    </vgl-renderer>

    <aside class="control-panel">
      <section>
        <h3>Geometry</h3>
        <label>Radius<input
          v-model="radius"
          type="range"
        ></label>
      </section>
      <section>
        <h3>Color</h3>
        <label>R<input
          v-model="r"
          type="range"
          max="255"
        ></label>
        <label>G<input
          v-model="g"
          type="range"
          max="255"
        ></label>
        <label>B<input
          v-model="b"
          type="range"
          max="255"
        ></label>
      </section>
    </aside>
  </div>
</template>

<script>
export default {
  data: () => ({
    r: 255,
    g: 255,
    b: 255,
    radius: 50,
  }),
};
</script>
{% endraw %}
```