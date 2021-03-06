---
          
grand_parent: API / Components
          
parent: Materials
          
nav_order: VglSpriteMaterial
          
---
# VglSpriteMaterial 

A material for a use with a [VglSprite](vgl-sprite) component,
corresponding [THREE.SpriteMaterial](https://threejs.org/docs/index.html#api/materials/SpriteMaterial).

Properties of [VglMaterial](vgl-material) are also available as mixin. 

## props 

- `color` ***color*** (*optional*) `default: '#fff'` 

  CSS style color of the material. 

- `map` ***name*** (*optional*) 

  The texture map of the material. 

## computed properties 

- `inst` 

  The THREE.SpriteMaterial instance. 


## Example
              
<div class="code-example"><div class="max-width-1-2">
                <vgl-sprite-material-example class="aspect-1618-1000"></vgl-sprite-material-example>
              
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
        <vgl-texture
          name="tex"
          src="/img/star.gif"
        />
        <vgl-sprite-material
          name="spm"
          map="tex"
        />
        <vgl-sprite material="spm" />
      </vgl-scene>
      <vgl-perspective-camera
        orbit-position="20 1 1"
        name="camera"
      />
    </vgl-renderer>

    <aside class="control-panel">
      <label>No effect<input type="range"></label>
    </aside>
  </div>
</template>
{% endraw %}
```