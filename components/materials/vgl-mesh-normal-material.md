---
          
grand_parent: API / Components
          
parent: Materials
          
nav_order: VglMeshNormalMaterial
          
---
# VglMeshNormalMaterial 

A material that maps the normal vectors to RGB colors,
corresponding [THREE.MeshNormalMaterial](https://threejs.org/docs/index.html#api/materials/MeshNormalMaterial).

Properties of [VglMaterial](vgl-material) are also available as mixin. 

## props 

- `fog` ***boolean*** (*optional*) 

  Whether the material is affected by fog. 

## computed properties 

- `inst` 

  The THREE.MeshNormalMaterial instance. 


## Example
              
<div class="code-example"><div class="max-width-1-2">
                <vgl-mesh-normal-material-example class="aspect-1618-1000"></vgl-mesh-normal-material-example>
              
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
        <vgl-torus-knot-geometry name="geo" />
        <vgl-mesh-normal-material name="mat" />
        <vgl-mesh
          geometry="geo"
          material="mat"
        />
      </vgl-scene>
      <vgl-perspective-camera
        orbit-position="5 1 0.5"
        name="camera"
      />
    </vgl-renderer>
  </div>
</template>
{% endraw %}
```