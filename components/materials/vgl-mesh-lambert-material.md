---
          
grand_parent: API / Components
          
parent: Materials
          
nav_order: VglMeshLambertMaterial
          
---
# VglMeshLambertMaterial 

A material for non-shiny surfaces, without specular highlights,
corresponding [THREE.MeshLambertMaterial](https://threejs.org/docs/index.html#api/materials/MeshLambertMaterial).

The material uses a non-physically based Lambertian model for calculating reflectance. This can
simulate some surfaces (such as untreated wood or stone) well, but cannot simulate shiny surfaces
with specular highlights (such as varnished wood).

Properties of [VglMaterial](vgl-material) are also available as mixin. 

## props 

- `color` ***color*** (*optional*) `default: '#fff'` 

  CSS style color of the material. 

- `map` ***name*** (*optional*) 

  The color map of the material. 

## computed properties 

- `inst` 

  The THREE.MeshLambertMaterial instance. 


## Example
              
<div class="code-example"><div class="max-width-1-2">
                <vgl-mesh-lambert-material-example class="aspect-1618-1000"></vgl-mesh-lambert-material-example>
              
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
        <vgl-mesh-lambert-material
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