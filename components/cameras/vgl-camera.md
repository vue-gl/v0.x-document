---
          
grand_parent: API / Components
          
parent: Cameras
          
nav_order: VglCamera
          
---
# VglCamera 

This is abstract base component for cameras,
corresponding [THREE.Camera](https://threejs.org/docs/index.html#api/cameras/Camera).
This component should always be mixined (inherited).
You probably want a [VglPerspectiveCamera](vgl-perspective-camera)
and [VglOrthographicCamera](vgl-orthographic-camera).

Properties of [VglObject3d](../core/vgl-object3d) are also available as mixin. 

## props 

- `orbit-target` ***vector3*** (*optional*) 

  Position in 3D space for the camera to point towards.
  This property overwrite rotation property when both defined. 

- `orbit-position` ***spherical*** (*optional*) 

  Spherical position around orbitTarget.
  This property overwrite position and rotation properties.
  If orbitTarget is not defined, automatically set to (0, 0, 0). 

- `name` ***name*** (*required*) 

  Name of the camera 

## computed properties 

- `inst` 

  The THREE.Camera instance. 

## methods 

- `emitAsCamera()` 

  Emit an event in the `cameras` namespace. 

