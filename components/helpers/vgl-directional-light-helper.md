---
          
grand_parent: API / Components
          
parent: Helpers
          
nav_order: VglDirectionalLightHelper
          
---
# VglDirectionalLightHelper 

A helper component to assist with visualizing a DirectionalLight's effect on the scene,
corresponding [THREE.DirectionalLightHelper](https://threejs.org/docs/index.html#api/helpers/DirectionalLightHelper).

Properties of [VglObject3d](../core/vgl-object3d) are also available as mixin. 

## props 

- `color` ***color*** (*optional*) 

  If this is not the set the helper will take the color of the light. 

- `size` ***float*** (*optional*) `default: 1` 

  Dimensions of the plane. 

- `light` ***name*** (*required*) 

  Name of the directional light being visualized. 

## data 

- `lightUuid` 

  Light object's UUID. This would be null if light object is not specified by `light` prop. Do
  not set this data manually. 

**initial value:** `null` 

## computed properties 

- `inst` 

  The THREE.DirectionalLightHelper instance. If any cameras specified by the name, it returns
  a THREE.Object3D instance. 

   **dependencies:** `lightUuid`, `vglNamespace`, `light`, `size` 


## methods 

- `setLightUuid(light)` 

  Set `lightUuid` data to given object's UUID. 


## Example
              
<div class="code-example"><div class="max-width-1-2">
                <vgl-directional-light-helper-example class="aspect-1618-1000"></vgl-directional-light-helper-example>
              
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
        <vgl-directional-light
          name="light"
          :position="`${x} ${y} ${z}`"
          :color="`rgb(${r}, ${g}, ${b})`"
        />
        <vgl-directional-light-helper
          light="light"
          :size="size"
        />
      </vgl-scene>
      <vgl-perspective-camera
        orbit-position="20 1.8 0.5"
        name="camera"
      />
    </vgl-renderer>

    <aside class="control-panel">
      <section>
        <h3>Light color</h3>
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
      <section>
        <h3>Light position</h3>
        <label>x<input
          v-model="x"
          type="range"
          max="5"
          min="-5"
          step="0.01"
        ></label>
        <label>y<input
          v-model="y"
          type="range"
          max="5"
          min="-5"
          step="0.01"
        ></label>
        <label>z<input
          v-model="z"
          type="range"
          max="5"
          min="-5"
          step="0.01"
        ></label>
      </section>
      <section>
        <h3>Helper size</h3>
        <label>Size<input
          v-model="size"
          type="range"
          max="5"
          step="0.05"
        ></label>
      </section>
    </aside>
  </div>
</template>

<script>
export default {
  data: () => ({
    size: 1,
    r: 255,
    g: 255,
    b: 255,
    x: 1,
    y: 2,
    z: 0,
  }),
};
</script>
{% endraw %}
```