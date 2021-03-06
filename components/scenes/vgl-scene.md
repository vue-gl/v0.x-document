---
          
grand_parent: API / Components
          
parent: Scenes
          
nav_order: VglScene
          
---
# VglScene 

This is where you place objects,
corresponding [THREE.Scene](https://threejs.org/docs/index.html#api/scenes/Scene).

Properties of [VglObject3d](../core/vgl-object3d) are also available as mixin. 

## props 

- `fog` ***fog*** (*optional*) 

  the color, near and far parameters of the scene's fog 

- `background-color` ***string*** (*optional*) 

  Expecting to accept a string representing a color.
  Will be overwrited by backgroundTexture prop if both props are set 

- `background-texture` ***name*** (*optional*) 

  Expecting to accept a string representing a texture name. 

- `name` ***name*** (*required*) 

  Name of the scene. 

## computed properties 

- `inst` 

  The THREE.Scene instance. 

## methods 

- `setBackgroundTexture(texture)` 

  Set scene's background property to given texture. 

- `emitAsScene()` 

  Emit an event in the `scenes` namespace. 

