---
          
grand_parent: API / Components
          
parent: Materials
          
nav_order: VglPointsMaterial
          
---
# VglPointsMaterial 

The default material used by [VglPoints](vgl-points),
corresponding [THREE.PointsMaterial](https://threejs.org/docs/index.html#api/materials/PointsMaterial).

Properties of [VglMaterial](vgl-material) are also available as mixin. 

## props 

- `color` ***color*** (*optional*) `default: '#fff'` 

  CSS style color of the material. 

- `size` ***float*** (*optional*) `default: 1` 

  The size of the points. 

- `disable-size-attenuation` ***boolean*** (*optional*) 

  Specify whether points' size will get smaller with the distance. 

## computed properties 

- `inst` 

  The THREE.PointsMaterial instance. 


## Example
              
<div class="code-example"><div class="max-width-1-2">
                <vgl-points-material-example class="aspect-1618-1000"></vgl-points-material-example>
              
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
        <vgl-box-geometry
          name="box"
          width="7.5"
          height="7.5"
          depth="7.5"
        />
        <vgl-points-material
          name="pts"
          :size="size"
          :disable-size-attenuation="!sizeAttenuation"
          :color="`rgb(${r}, ${g}, ${b})`"
        />
        <vgl-points
          geometry="box"
          material="pts"
        />
      </vgl-scene>
      <vgl-perspective-camera
        orbit-position="20 1 1"
        name="camera"
      />
    </vgl-renderer>

    <aside class="control-panel">
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
      <section>
        <h3>Size</h3>
        <label>Size<input
          v-model="size"
          type="range"
          max="10"
          step="0.1"
        ></label>
        <label><input
          v-model="sizeAttenuation"
          type="checkbox"
        >Size attenuation</label>
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
    size: 1,
    sizeAttenuation: true,
  }),
};
</script>
{% endraw %}
```