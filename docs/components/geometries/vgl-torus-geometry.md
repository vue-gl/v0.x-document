---
parent: Geometries
grand_parent: Components (API)
nav_order: 14
---
# VglTorusGeometry

A component for generating torus geometries,
corresponding [THREE.TorusGeometry](https://threejs.org/docs/index.html#api/geometries/TorusGeometry).

Properties of [VglGeometry](../core/vgl-geometry) are also available as mixin. 

## props 

- `radius` ***number*** (*optional*) `default: 1` 

  Radius of the torus. 

- `tube` ***number*** (*optional*) `default: 0.4` 

  Diamiter of the tube. 

- `radial-segments` ***number*** (*optional*) `default: 8` 

  Number of segments of the tube's section. 

- `tubular-segments` ***number*** (*optional*) `default: 6` 

  Number of segments along to the tube length direction. 

- `arc` ***number*** (*optional*) `default: [object Object]` 

  The central angle. 

## computed properties 

- `inst` 

   **dependencies:** `radius`, `tube`, `radialSegments`, `tubularSegments`, `arc` 



## Example

{% include example.html url='/examples/geometries/vgl-torus-geometry.html' %}

