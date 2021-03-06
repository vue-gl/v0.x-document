---
          
grand_parent: API / Components
          
parent: Core
          
nav_order: VglObject3d
          
---
# VglObject3d 

This is the base mixin component for most object components in VueGL,
corresponding [THREE.Object3D](https://threejs.org/docs/index.html#api/core/Object3D).
Object3d components inside a object3d component are added
as children via THREE.Object3D.prototype.add() method.

VglObject3d components inside default slots are added as children. 

## props 

- `position` ***vector3*** (*optional*) 

  The object's local position as a 3D vector. 

- `rotation` ***euler*** (*optional*) 

  The object's local rotation as a euler angle. 

- `rotation-quaternion` ***quaternion*** (*optional*) 

  The object's local rotation as a quaternion (specified in x, y, z, w order).
  Do not use in conjunction with the rotation prop, since they both control the same property
  of the underlying THREE.Object3D object. 

- `scale` ***vector3*** (*optional*) 

  The object's local scale as a 3D vector. 

- `cast-shadow` ***boolean*** (*optional*) 

  Whether the object gets rendered into shadow map. 

- `receive-shadow` ***boolean*** (*optional*) 

  Whether the material receives shadows. 

- `name` ***name*** (*optional*) 

  Optional name of the object. 

- `hidden` ***boolean*** (*optional*) 

  Whether the object is visible. 

## computed properties 

- `inst` 

  The THREE.Object3D instance. 
- `parent` 

  The parent THREE.Object3D instance. 

   **dependencies:** `vglObject3d` 


## methods 

- `emitAsObject3d()` 

  Emit an event in the `object3ds` namespace. 

