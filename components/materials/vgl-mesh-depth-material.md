---
          
grand_parent: API / Components
          
parent: Materials
          
nav_order: VglMeshDepthMaterial
          
---
# VglMeshDepthMaterial 

A material for drawing geometry by depth,
corresponding [THREE.MeshDepthMaterial](https://threejs.org/docs/index.html#api/materials/MeshDepthMaterial).
This material is not affected by lights.

Properties of [VglMaterial](vgl-material) are also available as mixin. 

## props 

- `fog` ***boolean*** (*optional*) 

  Whether the material is affected by fog. 

- `map` ***name*** (*optional*) 

  The color map of the material. 

## computed properties 

- `inst` 

  The THREE.MeshDepthMaterial instance. 


## Example
              
<div class="code-example"><div class="max-width-1-2">
                <vgl-mesh-depth-material-example class="aspect-1618-1000"></vgl-mesh-depth-material-example>
              
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
        <vgl-mesh-depth-material name="mat" />
        <vgl-mesh
          geometry="geo"
          material="mat"
        />
      </vgl-scene>
      <vgl-perspective-camera
        orbit-position="5 1 0.5"
        near="3"
        far="7"
        name="camera"
      />
    </vgl-renderer>
  </div>
</template>
{% endraw %}
```