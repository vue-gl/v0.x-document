---
          
grand_parent: API / Components
          
parent: Lights
          
nav_order: VglLight
          
---
# VglLight 

Abstract mixin component for lights,
corresponding [THREE.Light](https://threejs.org/docs/index.html#api/lights/Light).

Properties of [VglObject3d](../core/vgl-object3d) are also available as mixin. 

## props 

- `color` ***color*** (*optional*) `default: '#fff'` 

  CSS style color of the light. 

- `intensity` ***float*** (*optional*) `default: 1` 

  Numeric value of the light's strength/intensity. 

## computed properties 

- `inst` 

  The THREE.Light instance. 

