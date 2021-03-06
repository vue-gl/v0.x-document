---
          
grand_parent: API / Components
          
parent: Geometries
          
nav_order: VglTextGeometry
          
---
# VglTextGeometry 

A component for generating text as a single geometry,
corresponding [THREE.TextGeometry](https://threejs.org/docs/index.html#api/geometries/TextGeometry).

Properties of [VglGeometry](../core/vgl-geometry) are also available as mixin. 

## props 

- `text` ***string*** (*optional*) `default: ''` 

  The text that needs to be shown. 

- `font` ***string*** (*optional*) 

  The path or URL to the facetype json file. This can also be a Data URI. 

- `size` ***float*** (*optional*) `default: 100` 

  Size of the text. 

- `height` ***float*** (*optional*) `default: 50` 

  Thickness to extrude text. 

- `curve-segments` ***int*** (*optional*) `default: 12` 

  Number of points on the curves. 

- `bevel-enabled` ***boolean*** (*optional*) 

  Turn on bevel. 

- `bevel-thickness` ***float*** (*optional*) `default: 10` 

  How deep into text bevel goes. 

- `bevel-size` ***float*** (*optional*) `default: 8` 

  How far from text outline is bevel. 

- `bevel-segments` ***int*** (*optional*) `default: 3` 

  Number of bevel segments. 

## data 

- `f` 

**initial value:** `undefined` 

## computed properties 

- `inst` 

   **dependencies:** `f`, `text`, `f`, `size`, `height`, `curveSegments`, `bevelEnabled`, `bevelThickness`, `bevelSize`, `bevelSegments` 



## Example
              
<div class="code-example"><div class="max-width-1-2">
                <vgl-text-geometry-example class="aspect-1618-1000"></vgl-text-geometry-example>
              
</div></div>
```vue
{% raw %}<template>
  <div>
    <vgl-renderer
      antialias
      camera="camera"
      scene="scene"
    >
      <vgl-scene name="scene">
        <vgl-text-geometry
          name="text"
          font="/js/vendor/helvetiker_regular.typeface.json"
          :text="text"
        />
        <vgl-mesh-standard-material name="std" />
        <vgl-mesh
          geometry="text"
          material="std"
          position="-750 0 0"
        />
        <vgl-ambient-light color="#ffeecc" />
        <vgl-directional-light position="0 1 2" />
      </vgl-scene>
      <vgl-perspective-camera
        orbit-position="1000 1.3 0.3"
        name="camera"
      />
    </vgl-renderer>

    <aside class="control-panel">
      <label>Text<input
        v-model="text"
        type="text"
      ></label>
    </aside>
  </div>
</template>

<script>
export default {
  data: () => ({
    text: 'Text to be displayed.',
  }),
};
</script>
{% endraw %}
```