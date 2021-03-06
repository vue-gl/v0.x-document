---
          
grand_parent: API / Components
          
parent: Lights
          
nav_order: VglAmbientLight
          
---
# VglAmbientLight 

A light component globally illuminates all objects in the scene equally,
corresponding [THREE.AmbientLight](https://threejs.org/docs/index.html#api/lights/AmbientLight).
This light cannot be used to cast shadows as it does not have a direction.

Properties of [VglLight](vgl-light) are also available as mixin. 

## computed properties 

- `inst` 

  The THREE.AmbientLight instance. 


## Example
              
<div class="code-example"><div class="max-width-1-2">
                <vgl-ambient-light-example class="aspect-1618-1000"></vgl-ambient-light-example>
              
</div></div>
```vue
{% raw %}<template>
  <div>
    <vgl-renderer
      antialias
      shadow-map-enabled
      camera="camera"
      scene="scene"
    >
      <vgl-scene name="scene">
        <vgl-sphere-geometry name="sphere" />
        <vgl-box-geometry name="box" />
        <vgl-mesh-standard-material name="std" />
        <vgl-mesh
          geometry="box"
          material="std"
          position="0 -1.5 0"
          receive-shadow
        />
        <vgl-mesh
          geometry="sphere"
          material="std"
          cast-shadow
          receive-shadow
        />
        <vgl-ambient-light
          :color="`rgb(${r}, ${g}, ${b})`"
          :intensity="intensity"
        />
        <vgl-directional-light
          position="0 1 1"
          cast-shadow
        />
      </vgl-scene>
      <vgl-perspective-camera
        orbit-position="5 1 1"
        name="camera"
      />
    </vgl-renderer>
    <aside class="control-panel">
      <section>
        <h3>Intensity</h3>
        <input
          v-model="intensity"
          type="range"
          max="1"
          step="0.01"
        >
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
    intensity: 0.5,
    r: 255,
    b: 255,
    g: 255,
  }),
};
</script>
{% endraw %}
```