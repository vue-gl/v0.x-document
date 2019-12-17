---
parent: Helpers
grand_parent: Components (API)
nav_order: 0
---
# VglArrowHelper

An 3D arrow object for visualizing directions,
corresponding [THREE.ArrowHelper](https://threejs.org/docs/index.html#api/helpers/ArrowHelper).

Properties of [VglObject3d](../core/vgl-object3d) are also available as mixin. 

## props 

- `dir` ***vector3*** (*optional*) 

  Direction from origin. 

- `length` ***number*** (*optional*) `default: 1` 

  Length of the arrow. 

- `color` ***string*** (*optional*) `default: '#ff0'` 

  Color of the arrow. 

- `head-length` ***number*** (*optional*) 

  The length of the head of the arrow. 

- `head-width` ***number*** (*optional*) 

  The width of the head of the arrow. 

## computed properties 

- `inst` 

  The THREE.ArrowHelper instance. 
- `len` 

  Array(3) of helper properties. Arrow length, head length, and head width. 

   **dependencies:** `length`, `headLength`, `headLength`, `headWidth`, `headWidth` 



## Example

{% include example.html url='/examples/helpers/vgl-arrow-helper.html' %}

