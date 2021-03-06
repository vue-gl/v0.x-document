---
          
grand_parent: API / Components
          
parent: Helpers
          
nav_order: VglPolarGridHelper
          
---
# VglPolarGridHelper 

A component to define polar grids,
correcponding [THREE.PolarGridHelper](https://threejs.org/docs/index.html#api/helpers/PolarGridHelper).
Grids are two-dimensional arrays of lines.

Properties of [VglObject3d](../core/vgl-object3d) are also available as mixin. 

## props 

- `radius` ***float*** (*optional*) `default: 10` 

  The radius of the polar grid. This can be any positive number. 

- `radials` ***int*** (*optional*) `default: 16` 

  The number of radial lines. This can be any positive integer. 

- `circles` ***int*** (*optional*) `default: 8` 

  The number of circles. This can be any positive integer. 

- `divisions` ***int*** (*optional*) `default: 64` 

  The number of line segments used for each circle.
  This can be any positive integer that is 3 or greater. 

- `color1` ***color*** (*optional*) `default: '#444444'` 

  The first color used for grid elements. 

- `color2` ***color*** (*optional*) `default: '#888888'` 

  The second color used for grid elements. 

## computed properties 

- `inst` 

  The THREE.PolarGridHelper instance. 

   **dependencies:** `radius`, `radials`, `circles`, `divisions`, `color1`, `color2` 



## Example
              
<div class="code-example"><div class="max-width-1-2">
                <vgl-polar-grid-helper-example class="aspect-1618-1000"></vgl-polar-grid-helper-example>
              
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
        <vgl-polar-grid-helper
          :radius="radius"
          :radials="radials"
          :circles="circles"
          :divisions="divisions"
          :color1="`rgb(${cr}, ${cg}, ${cb})`"
          :color2="`rgb(${gr}, ${gg}, ${gb})`"
        />
      </vgl-scene>
      <vgl-perspective-camera
        orbit-position="15 1 0.5"
        orbit-target="0 -0.5 0"
        name="camera"
      />
    </vgl-renderer>

    <aside class="control-panel">
      <section>
        <h3>Grids</h3>
        <label>Radius<input
          v-model="radius"
          type="range"
          max="10"
          step="0.1"
        ></label>
        <label>Radials<input
          v-model="radials"
          type="range"
        ></label>
        <label>Circles<input
          v-model="circles"
          type="range"
        ></label>
        <label>Divisions<input
          v-model="divisions"
          type="range"
          min="3"
        ></label>
      </section>
      <section>
        <h3>Color 1</h3>
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
        <h3>Color 2</h3>
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
    radius: 5,
    radials: 16,
    circles: 8,
    divisions: 64,
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