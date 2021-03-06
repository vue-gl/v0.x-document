---
          
grand_parent: API / Components
          
parent: Core
          
nav_order: VglNamespace
          
---
# VglNamespace 

This component provides maps for managing objects by name (string), and also provides utility
methods. `vglNamespace` object can be injected to descendant components for using it.
It has following namespaces:

- `vglNamespace.cameras`
- `vglNamespace.scenes`
- `vglNamespace.geometries`
- `vglNamespace.materials`
- `vglNamespace.textures`
- `vglNamespace.curves`
- `vglNamespace.object3ds`

Each namespace internally has a map of strings and objects, and has methods to access them.
Each namespace has following methods:

- `Namespace.prototype.get(key: string)`
Get an instance corresponding passed `key`.
- `Namespace.prototype.set(key: string, inst: any)`
Set an instance corresponding passed `key`.
- `Namespace.prototype.delete(key: string, inst: any)`
Delete an instance corresponding passed `key`, only if the instance exactly equals passed
`inst`.
- `Namespace.prototype.listen(key: string, callback: func)`
Add a listener function that will be called when the instance corresponding passed key changes.
- `Namespace.prototype.unlisten(key: string, callback: func)`
Remove a listener function registered to passed key.

When `VglNamespace` components are nested, they create nested namespaces except for `cameras` and
`scenes`. Since a nested namespace search instances only in its ancestors, you can use same key
string in sibling namespaces. 

## props 

- `tag` ***string*** (*optional*) `default: 'div'` 

  What element should be rendered. 

