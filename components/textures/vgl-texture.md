---
          
grand_parent: API / Components
          
parent: Textures
          
nav_order: VglTexture
          
---
# VglTexture 

A texture to apply to a surface or as a reflection or refraction map,
corresponding [THREE.Texture](https://threejs.org/docs/index.html#api/textures/Texture). 

## props 

- `src` ***string*** (*optional*) 

  The path or URL to the file. This can also be a Data URI. 

- `name` ***name*** (*required*) 

- `mapping` ***string*** (*optional*) `default: 'uv'` 

- `wrap-s` ***string*** (*optional*) `default: 'clamp-to-edge'` 

- `wrap-t` ***string*** (*optional*) `default: 'clamp-to-edge'` 

- `mag-filter` ***string*** (*optional*) `default: 'linear'` 

- `min-filter` ***string*** (*optional*) `default: 'linear-mip-map-linear'` 

- `anisotropy` ***int*** (*optional*) `default: 1` 

- `format` ***string*** (*optional*) 

- `type` ***string*** (*optional*) `default: 'unsigned-byte'` 

- `offset` ***vector2*** (*optional*) 

- `repeat` ***vector2*** (*optional*) 

- `rotation` ***float*** (*optional*) 

- `center` ***vector2*** (*optional*) 

- `premultiply-alpha` ***boolean*** (*optional*) 

- `unpack-alignment` ***int*** (*optional*) `default: 4` 

- `encoding` ***string*** (*optional*) `default: 'linear'` 

## computed properties 

- `inst` 

  The THREE.Texture instance. 

   **dependencies:** `src`, `format`, `format`, `update` 


## methods 

- `update()` 

  Emit an event in the `textures` namespace. 


## Example
              
<div class="code-example"><div class="max-width-1-2">
                <vgl-texture-example class="aspect-1618-1000"></vgl-texture-example>
              
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
        <vgl-plane-geometry
          name="plane"
          width="512"
          height="512"
        />
        <vgl-texture
          src="/img/shimoguri.jpg"
          :rotation="rotation"
          center="0.5 0.5"
          name="texture"
        />
        <vgl-mesh-standard-material
          name="std"
          map="texture"
        />
        <vgl-mesh
          geometry="plane"
          material="std"
        />
        <vgl-ambient-light color="#ffeecc" />
        <vgl-directional-light position="0 1 2" />
      </vgl-scene>
      <vgl-perspective-camera
        orbit-position="700 1 0.5"
        name="camera"
      />
    </vgl-renderer>

    <aside class="control-panel">
      <label>Rotation<input
        v-model="rotation"
        type="range"
        max="3.14"
        min="-3.14"
        step="0.01"
      ></label>
    </aside>
  </div>
</template>

<script>
export default {
  data: () => ({
    rotation: 0,
  }),
};
</script>
{% endraw %}
```