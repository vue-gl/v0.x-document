---
          
grand_parent: API / Components
          
parent: Materials
          
nav_order: VglShadowMaterial
          
---
# VglShadowMaterial 

This material can receive shadows but otherwise is completely transparent,
corresponding [THREE.ShadowMaterial](https://threejs.org/docs/index.html#api/materials/ShadowMaterial).

Properties of [VglMaterial](vgl-material) are also available as mixin. 

## computed properties 

- `inst` 

  The THREE.ShadowMaterial instance. 


## Example
              
<div class="code-example"><div class="max-width-1-2">
                <vgl-shadow-material-example class="aspect-1618-1000"></vgl-shadow-material-example>
              
</div></div>
```vue
{% raw %}<template>
  <div>
    <vgl-renderer
      antialias
      shadow-map-enabled
      alpha
      camera="camera"
      scene="scene"
    >
      <vgl-scene name="scene">
        <vgl-box-geometry
          name="box"
          width="1"
          height="1"
          depth="1"
        />
        <vgl-mesh-standard-material
          name="std"
          color="#ffbbaa"
        />
        <vgl-mesh
          geometry="box"
          material="std"
          position="0 0.5 0"
          cast-shadow
        />
        <vgl-plane-geometry
          name="plane"
          width="3.5"
          height="3.5"
        />
        <vgl-shadow-material name="shadow" />
        <vgl-mesh
          geometry="plane"
          material="shadow"
          rotation="-1.570796 0 0"
          receive-shadow
        />
        <vgl-ambient-light color="#ffeecc" />
        <vgl-directional-light
          position="-1 2 2"
          cast-shadow
        />
      </vgl-scene>
      <vgl-perspective-camera
        orbit-position="3 1 0.7"
        orbit-target="0 0.5 0"
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