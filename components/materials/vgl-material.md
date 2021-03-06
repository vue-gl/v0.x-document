---
          
grand_parent: API / Components
          
parent: Materials
          
nav_order: VglMaterial
          
---
# VglMaterial 

Abstract mixin component for materials,
corresponding [THREE.Material](https://threejs.org/docs/index.html#api/materials/Material). 

## props 

- `name` ***name*** (*required*) 

  Name of the material. 

- `side` ***string*** (*optional*) `default: 'front'` 

  Defines which side of faces will be rendered. front, back or double. 

- `vertex-colors` ***boolean*** (*optional*) 

  Defines whether vertex coloring is used. Other options are 'vertex' and 'face'. 

## computed properties 

- `inst` 

  The THREE.Material instance. 

## methods 

- `update()` 

  Emit an event in `materials` namespace. Call this method after editing instance's
  properties. 

