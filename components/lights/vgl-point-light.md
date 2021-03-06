---
          
grand_parent: API / Components
          
parent: Lights
          
nav_order: VglPointLight
          
---
# VglPointLight 

A light that gets emitted from a single point in all directions, corresponding [THREE.PointLight](https://threejs.org/docs/index.html#api/lights/PointLight). A common use case for this is to replicate the light emitted from a bare lightbulb. This light can cast shadows.

Properties of [VglLight](vgl-light) are also available as mixin. 

## props 

- `distance` ***float*** (*optional*) 

  The distance from the light where the intensity is 0.
  When set to 0, then the light never stops. 

- `decay` ***float*** (*optional*) `default: 1` 

  The amount the light dims along the distance of the light.
  For physically correct lighting, set this to 2. 

## computed properties 

- `inst` 

  The THREE.PointLight instance. 

