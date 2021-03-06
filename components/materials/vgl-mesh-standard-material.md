---
          
grand_parent: API / Components
          
parent: Materials
          
nav_order: VglMeshStandardMaterial
          
---
# VglMeshStandardMaterial 

A standard physically based material,
corresponding [THREE.MeshStandardMaterial](https://threejs.org/docs/index.html#api/materials/MeshStandardMaterial).
Using Metallic-Roughness workflow.

Properties of [VglMaterial](vgl-material) are also available as mixin. 

## props 

- `color` ***color*** (*optional*) `default: '#fff'` 

  CSS style color of the material. 

- `map` ***name*** (*optional*) 

  The color map of the material. 

## computed properties 

- `inst` 

  The THREE.MeshStandardMaterial instance. 


## Example
              
<div class="code-example"><div class="max-width-1-2">
                <vgl-mesh-standard-material-example class="aspect-1618-1000"></vgl-mesh-standard-material-example>
              
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
        <vgl-mesh-standard-material
          name="mat"
          :color="`rgb(${r}, ${g}, ${b})`"
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
    </aside>
  </div>
</template>

<script>
export default {
  data: () => ({
    r: 255,
    g: 255,
    b: 255,
  }),
};
</script>
{% endraw %}
```