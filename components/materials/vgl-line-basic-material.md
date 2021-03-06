---
          
grand_parent: API / Components
          
parent: Materials
          
nav_order: VglLineBasicMaterial
          
---
# VglLineBasicMaterial 

A material for drawing wireframe-style geometries,
corresponding [THREE.LineBasicMaterial](https://threejs.org/docs/index.html#api/materials/LineBasicMaterial).

Properties of [VglMaterial](vgl-material) are also available as mixin. 

## props 

- `color` ***color*** (*optional*) `default: '#fff'` 

  CSS style color of the material. 

- `linewidth` ***float*** (*optional*) `default: 1` 

  The line thickness. 

- `linecap` ***string*** (*optional*) `default: 'round'` 

  Define appearance of line ends. Possible values are "butt", "round" and "square". 

- `linejoin` ***string*** (*optional*) `default: 'round'` 

  Define appearance of line joints. Possible values are "round", "bevel" and "miter". 

## computed properties 

- `inst` 

  The THREE.LineBasicMaterial instance. 


## Example
              
<div class="code-example"><div class="max-width-1-2">
                <vgl-line-basic-material-example class="aspect-1618-1000"></vgl-line-basic-material-example>
              
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
        />
        <vgl-line-basic-material
          name="line"
          :linewidth="linewidth"
          :color="`rgb(${r}, ${g}, ${b})`"
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
        <h3>Line</h3>
        <label>Width<input
          v-model="linewidth"
          type="range"
          max="10"
          step="0.1"
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
    linewidth: 2,
  }),
};
</script>
{% endraw %}
```