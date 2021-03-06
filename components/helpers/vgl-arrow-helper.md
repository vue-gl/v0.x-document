---
          
grand_parent: API / Components
          
parent: Helpers
          
nav_order: VglArrowHelper
          
---
# VglArrowHelper 

An 3D arrow object for visualizing directions,
corresponding [THREE.ArrowHelper](https://threejs.org/docs/index.html#api/helpers/ArrowHelper).

Properties of [VglObject3d](../core/vgl-object3d) are also available as mixin. 

## props 

- `dir` ***vector3*** (*optional*) 

  Direction from origin. 

- `length` ***float*** (*optional*) `default: 1` 

  Length of the arrow. 

- `color` ***color*** (*optional*) `default: '#ff0'` 

  Color of the arrow. 

- `head-length` ***float*** (*optional*) 

  The length of the head of the arrow. 

- `head-width` ***float*** (*optional*) 

  The width of the head of the arrow. 

## computed properties 

- `inst` 

  The THREE.ArrowHelper instance. 
- `len` 

  Array(3) of helper properties. Arrow length, head length, and head width. 

   **dependencies:** `length`, `headLength`, `headLength`, `headWidth`, `headWidth` 



## Example
              
<div class="code-example"><div class="max-width-1-2">
                <vgl-arrow-helper-example class="aspect-1618-1000"></vgl-arrow-helper-example>
              
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
        <vgl-arrow-helper
          :color="`rgb(${r}, ${g}, ${b})`"
          :dir="`${x} ${y} ${z}`"
          :length="length"
          :head-length="headLength"
          :head-width="headWidth"
        />
        <vgl-axes-helper size="10" />
      </vgl-scene>
      <vgl-perspective-camera
        orbit-position="5 1 -0.5"
        name="camera"
      />
    </vgl-renderer>

    <aside class="control-panel">
      <section>
        <h3>Direction</h3>
        <label>x<input
          v-model="x"
          type="range"
          max="5"
          min="-5"
          step="0.5"
        ></label>
        <label>y<input
          v-model="y"
          type="range"
          max="5"
          min="-5"
          step="0.5"
        ></label>
        <label>z<input
          v-model="z"
          type="range"
          max="5"
          min="-5"
          step="0.5"
        ></label>
      </section>
      <section>
        <h3>Size</h3>
        <label>Length<input
          v-model="length"
          type="range"
          step="0.03"
          max="3"
        ></label>
        <label>Head length<input
          v-model="headLength"
          type="range"
          step="0.02"
          max="2"
        ></label>
        <label>Head width<input
          v-model="headWidth"
          type="range"
          step="0.01"
          max="1"
        ></label>
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
    x: 1,
    y: 1,
    z: 1,
    r: 255,
    g: 255,
    b: 255,
    length: 1,
    headLength: 0.2,
    headWidth: 0.04,
  }),
};
</script>
{% endraw %}
```