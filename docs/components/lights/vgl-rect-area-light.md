---
parent: Lights
grand_parent: Components (API)
nav_order: 5
---
# VglRectAreaLight

RectAreaLight emits light uniformly across the face a rectangular plane. See
[THREE.RectAreaLight](https://threejs.org/docs/#api/en/lights/RectAreaLight).

This light type can be used to simulate light sources such as bright windows or strip lighting.

Properties of [VglLight](vgl-light) are also available as mixin. 

## props 

- `width` ***number*** (*optional*) `default: 10` 

  Width of the light. 

- `height` ***number*** (*optional*) `default: 10` 

  Height of the light. 

## computed properties 

- `inst` 

  The THREE.RectAreaLight instance. 


## Example

{% include example.html url='/examples/lights/vgl-rect-area-light.html' %}

