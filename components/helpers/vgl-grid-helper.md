---
          
grand_parent: API / Components
          
parent: Helpers
          
nav_order: VglGridHelper
          
---
# VglGridHelper 

A component to define grids,
corresponding [THREE.GridHelper](https://threejs.org/docs/index.html#api/helpers/GridHelper).
Grids are two-dimensional arrays of lines.

Properties of [VglObject3d](../core/vgl-object3d) are also available as mixin. 

## props 

- `size` ***float*** (*optional*) `default: 10` 

  The size of the grid. 

- `divisions` ***int*** (*optional*) `default: 10` 

  The number of divisions across the grid. 

- `color-center-line` ***color*** (*optional*) `default: '#444444'` 

  The color of the centerline. 

- `color-grid` ***color*** (*optional*) `default: '#888888'` 

  The color of the lines of the grid. 

## computed properties 

- `inst` 

  The THREE.GridHelper instance. 

   **dependencies:** `size`, `divisions`, `colorCenterLine`, `colorGrid` 



## Example
              
<div class="code-example"><div class="max-width-1-2">
                <vgl-grid-helper-example class="aspect-1618-1000"></vgl-grid-helper-example>
              
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
        <vgl-grid-helper
          :size="size"
          :divisions="divisions"
          :color-center-line="`rgb(${cr}, ${cg}, ${cb})`"
          :color-grid="`rgb(${gr}, ${gg}, ${gb})`"
        />
      </vgl-scene>
      <vgl-perspective-camera
        orbit-position="15 1 0.5"
        name="camera"
      />
    </vgl-renderer>

    <aside class="control-panel">
      <section>
        <h3>Grid</h3>
        <label>Size<input
          v-model="size"
          type="range"
          max="20"
        ></label>
        <label>Divisions<input
          v-model="divisions"
          type="range"
          step="2"
        ></label>
      </section>
      <section>
        <h3>Centerline color</h3>
        <label>R<input
          v-model="cr"
          type="range"
          max="255"
        ></label>
        <label>G<input
          v-model="cg"
          type="range"
          max="255"
        ></label>
        <label>B<input
          v-model="cb"
          type="range"
          max="255"
        ></label>
      </section>
      <section>
        <h3>Grid color</h3>
        <label>R<input
          v-model="gr"
          type="range"
          max="255"
        ></label>
        <label>G<input
          v-model="gg"
          type="range"
          max="255"
        ></label>
        <label>B<input
          v-model="gb"
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
    size: 10,
    divisions: 10,
    cr: 255,
    cg: 0,
    cb: 0,
    gr: 255,
    gg: 255,
    gb: 255,
  }),
};
</script>
{% endraw %}
```