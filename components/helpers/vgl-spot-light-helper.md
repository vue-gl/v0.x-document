---
          
grand_parent: API / Components
          
parent: Helpers
          
nav_order: VglSpotLightHelper
          
---
# VglSpotLightHelper 

This component displays a cone shaped helper object for a SpotLight,
corresponding [THREE.SpotLightHelper](https://threejs.org/docs/index.html#api/helpers/SpotLightHelper).

Properties of [VglObject3d](../core/vgl-object3d) are also available as mixin. 

## props 

- `color` ***color*** (*optional*) 

  If this is not the set the helper will take the color of the light. 

- `light` ***name*** (*required*) 

  Name of the spot light being visualized. 

## data 

- `lightUuid` 

  Light object's UUID. This would be null if light object is not specified by `light` prop. Do
  not set this data manually. 

**initial value:** `null` 

## computed properties 

- `inst` 

  The THREE.SpotLightHelper instance. If any cameras specified by the name, it returns a
  THREE.Object3D instance. 

   **dependencies:** `lightUuid`, `vglNamespace`, `light` 


## methods 

- `setLightUuid(light)` 

  Set `lightUuid` data to given object's UUID. 


## Example
              
<div class="code-example"><div class="max-width-1-2">
                <vgl-spot-light-helper-example class="aspect-1618-1000"></vgl-spot-light-helper-example>
              
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
        <vgl-spot-light
          name="light"
          :position="`${px} ${py} ${pz}`"
          :color="`rgb(${r}, ${g}, ${b})`"
          :distance="distance"
          :angle="angle"
          :target="`${tx} ${ty} ${tz}`"
        />
        <vgl-spot-light-helper light="light" />
      </vgl-scene>
      <vgl-perspective-camera
        orbit-position="100 1.8 0.5"
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
          v-model="px"
          type="range"
          min="-100"
        ></label>
        <label>y<input
          v-model="py"
          type="range"
          min="-100"
        ></label>
        <label>z<input
          v-model="pz"
          type="range"
          min="-100"
        ></label>
      </section>
      <section>
        <h3>Light target</h3>
        <label>x<input
          v-model="tx"
          type="range"
          min="-100"
        ></label>
        <label>y<input
          v-model="ty"
          type="range"
          min="-100"
        ></label>
        <label>z<input
          v-model="tz"
          type="range"
          min="-100"
        ></label>
      </section>
      <section>
        <h3>Light properties</h3>
        <label>Distance<input
          v-model="distance"
          type="range"
        ></label>
        <label>Angle<input
          v-model="angle"
          type="range"
          step="0.01"
          max="1.57"
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
    px: 30,
    py: 30,
    pz: 0,
    tx: -30,
    ty: -30,
    tz: 0,
    distance: 50,
    angle: 0.5,
  }),
};
</script>
{% endraw %}
```