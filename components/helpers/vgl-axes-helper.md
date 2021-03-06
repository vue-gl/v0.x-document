---
          
grand_parent: API / Components
          
parent: Helpers
          
nav_order: VglAxesHelper
          
---
# VglAxesHelper 

An axis object to visualize the the 3 axes in a simple way,
corresponding [THREE.AxesHelper](https://threejs.org/docs/index.html#api/helpers/AxesHelper).
The X axis is red. The Y axis is green. The Z axis is blue.

Properties of [VglObject3d](../core/vgl-object3d) are also available as mixin. 

## props 

- `size` ***float*** (*optional*) `default: 1` 

  Size of the lines representing the axes. 

## computed properties 

- `inst` 

  The THREE.AxesHelper instance. 

   **dependencies:** `size` 



## Example
              
<div class="code-example"><div class="max-width-1-2">
                <vgl-axes-helper-example class="aspect-1618-1000"></vgl-axes-helper-example>
              
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
        <vgl-axes-helper :size="size" />
      </vgl-scene>
      <vgl-perspective-camera
        orbit-position="15 1 0.5"
        name="camera"
      />
    </vgl-renderer>

    <aside class="control-panel">
      <label>Size<input
        v-model="size"
        type="range"
        max="5"
        step="0.05"
      ></label>
    </aside>
  </div>
</template>

<script>
export default {
  data: () => ({ size: 1 }),
};
</script>
{% endraw %}
```