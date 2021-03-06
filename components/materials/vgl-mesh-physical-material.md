---
          
grand_parent: API / Components
          
parent: Materials
          
nav_order: VglMeshPhysicalMaterial
          
---
# VglMeshPhysicalMaterial 

An extension of the mesh standard material that allows for greater control over reflectivity,
corresponding [THREE.MeshPhysicalMaterial](https://threejs.org/docs/index.html#api/materials/MeshPhysicalMaterial).

Properties of [VglMeshStandardMaterial](vgl-mesh-standard-material) are also available as mixin. 

## props 

- `clearcoat` ***float*** (*optional*) 

  ClearCoat level, from 0.0 to 1.0. 

- `clearcoat-roughness` ***float*** (*optional*) 

  How rough the clearCoat appears, from 0.0 to 1.0. 

- `reflectivity` ***float*** (*optional*) `default: 0.5` 

  Degree of reflectivity, from 0.0 to 1.0. 

## computed properties 

- `inst` 

  The THREE.MeshPhysicalMaterial instance. 


## Example
              
<div class="code-example"><div class="max-width-1-2">
                <vgl-mesh-physical-material-example class="aspect-1618-1000"></vgl-mesh-physical-material-example>
              
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
        <vgl-torus-knot-geometry name="geo" />
        <vgl-mesh-physical-material
          name="mat"
          :color="`rgb(${r}, ${g}, ${b})`"
          :clear-coat="clearCoat"
          :clear-coat-roughness="clearCoatRoughness"
          :reflectivity="reflectivity"
        />
        <vgl-mesh
          geometry="geo"
          material="mat"
        />
        <vgl-ambient-light intensity="0.5" />
        <vgl-directional-light
          position="0 2 1"
          intensity="0.5"
        />
      </vgl-scene>
      <vgl-perspective-camera
        orbit-position="5 1 0.5"
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
        <h3>Physical</h3>
        <label>Clear coat<input
          v-model="clearCoat"
          type="range"
          max="1"
          step="0.01"
        ></label>
        <label>Clear coat roughness<input
          v-model="clearCoatRoughness"
          type="range"
          max="1"
          step="0.01"
        ></label>
        <label>Reflectivity<input
          v-model="reflectivity"
          type="range"
          max="1"
          step="0.01"
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
    clearCoat: 0,
    clearCoatRoughness: 0,
    reflectivity: 1,
  }),
};
</script>
{% endraw %}
```