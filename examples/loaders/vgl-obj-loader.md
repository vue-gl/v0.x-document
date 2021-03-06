---
          
grand_parent: API / Example Components
          
parent: Example Loaders
          
nav_order: VglObjLoader
          
---
# VglObjLoader 

## props 

- `src` ***string*** (*optional*) 

## data 

- `objUuid` 

**initial value:** `null` 

## computed properties 

- `inst` 

   **dependencies:** `objUuid`, `obj` 



## Example
              
<script src="/js/examples/loaders/vgl-obj-loader.js"></script>
              
<div class="code-example"><div class="max-width-1-2">
                <vgl-obj-loader-example class="aspect-1618-1000"></vgl-obj-loader-example>
              
</div></div>
```vue
{% raw %}<template>
  <vgl-renderer
    camera="camera"
    scene="scene"
  >
    <vgl-scene name="scene">
      <vgl-obj-loader src="/obj/seahorse.obj" />
      <vgl-ambient-light intensity="0.5" />
      <vgl-directional-light
        position="1 1 1"
        intensity="0.5"
      />
    </vgl-scene>
    <vgl-perspective-camera
      name="camera"
      orbit-position="300 1 0.2"
      orbit-target="0 0 -300"
    />
  </vgl-renderer>
</template>
{% endraw %}
```