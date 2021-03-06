---
          
grand_parent: API / Components
          
parent: Materials
          
nav_order: VglLineDashedMaterial
          
---
# VglLineDashedMaterial 

A material for drawing wireframe-style geometries,
corresponding [THREE.LineBasicMaterial](https://threejs.org/docs/index.html#api/materials/LineBasicMaterial).

Properties of [VglMaterial](vgl-material) are also available as mixin. 

## props 

- `color` ***color*** (*optional*) `default: '#fff'` 

  CSS style color of the material. 

- `linewidth` ***float*** (*optional*) `default: 1` 

  The line thickness. 

- `dash-size` ***float*** (*optional*) `default: 3` 

  The size of the dash. This is both the gap with the stroke. 

- `gap-size` ***float*** (*optional*) `default: 1` 

  The size of the gap. 

## computed properties 

- `inst` 

  The THREE.LineDashedMaterial instance. 


## Example
              
<div class="code-example"><div class="max-width-1-2">
                <vgl-line-dashed-material-example class="aspect-1618-1000"></vgl-line-dashed-material-example>
              
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
          name="line"
          position-attribute="-5, 0, 0, 5, 0, 0, 5, 5, 0, 5, 5, 3, 5, 0, 3, -5, 0, 3"
        />
        <vgl-line-dashed-material
          name="line"
          :dash-size="dashSize"
          :gap-size="gapSize"
          :linewidth="linewidth"
          :color="`rgb(${r}, ${g}, ${b})`"
        />
        <vgl-line
          geometry="line"
          material="line"
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
        <h3>Line</h3>
        <label>Width<input
          v-model="linewidth"
          type="range"
          max="10"
          step="0.1"
        ></label>
        <label>Dash size<input
          v-model="dashSize"
          type="range"
          max="3"
          step="0.03"
        ></label>
        <label>Gap size<input
          v-model="gapSize"
          type="range"
          max="3"
          step="0.03"
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
    dashSize: 1,
    gapSize: 1,
  }),
};
</script>
{% endraw %}
```