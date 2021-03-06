---
          
grand_parent: API / Components
          
parent: Materials
          
nav_order: VglMeshPhongMaterial
          
---
# VglMeshPhongMaterial 

A material for shiny surfaces with specular highlights,
corresponding [THREE.MeshPhongMaterial](https://threejs.org/docs/index.html#api/materials/MeshPhongMaterial).

Properties of [VglMaterial](vgl-material) are also available as mixin. 

## props 

- `color` ***color*** (*optional*) `default: '#fff'` 

  CSS style color of the material. 

- `map` ***name*** (*optional*) 

  The color map of the material. 

- `specular` ***color*** (*optional*) `default: '#111111'` 

  Specular color of the material. 

- `shininess` ***float*** (*optional*) `default: 30` 

  How shiny the specular highlight is. A higher value gives a sharper highlight. 

## computed properties 

- `inst` 

  The THREE.MeshPhongMaterial instance. 


## Example
              
<div class="code-example"><div class="max-width-1-2">
                <vgl-mesh-phong-material-example class="aspect-1618-1000"></vgl-mesh-phong-material-example>
              
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
        <vgl-mesh-phong-material
          name="mat"
          :color="`rgb(${r}, ${g}, ${b})`"
          :specular="`rgb(${sr}, ${sg}, ${sb})`"
          :shininess="shininess"
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
        <h3>Specular color</h3>
        <label>R<input
          v-model="sr"
          type="range"
          max="255"
        ></label>
        <label>G<input
          v-model="sg"
          type="range"
          max="255"
        ></label>
        <label>B<input
          v-model="sb"
          type="range"
          max="255"
        ></label>
      </section>
      <section>
        <h3>Properties</h3>
        <label>Shininess<input
          v-model="shininess"
          type="range"
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
    sr: 17,
    sg: 17,
    sb: 17,
    shininess: 30,
  }),
};
</script>
{% endraw %}
```