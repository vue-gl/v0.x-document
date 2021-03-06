---
          
grand_parent: API / Components
          
parent: Lights
          
nav_order: VglRectAreaLight
          
---
# VglRectAreaLight 

RectAreaLight emits light uniformly across the face a rectangular plane. See
[THREE.RectAreaLight](https://threejs.org/docs/#api/en/lights/RectAreaLight).

This light type can be used to simulate light sources such as bright windows or strip lighting.

Properties of [VglLight](vgl-light) are also available as mixin. 

## props 

- `width` ***float*** (*optional*) `default: 10` 

  Width of the light. 

- `height` ***float*** (*optional*) `default: 10` 

  Height of the light. 

## computed properties 

- `inst` 

  The THREE.RectAreaLight instance. 


## Example
              
<div class="code-example"><div class="max-width-1-2">
                <vgl-rect-area-light-example class="aspect-1618-1000"></vgl-rect-area-light-example>
              
</div></div>
```vue
{% raw %}<template>
  <div>
    <vgl-renderer
      antialias
      shadow-map-enabled
      camera="camera"
      scene="scene"
    >
      <vgl-scene name="scene">
        <vgl-sphere-geometry name="sphere" />
        <vgl-box-geometry name="box" />
        <vgl-plane-geometry name="plane" />
        <vgl-mesh-standard-material name="std" />
        <vgl-mesh-basic-material
          name="basic"
          :color="`rgb(${r}, ${g}, ${b})`"
        />
        <vgl-mesh
          geometry="box"
          material="std"
          position="0 -1.5 0"
          receive-shadow
        />
        <vgl-mesh
          geometry="sphere"
          material="std"
          cast-shadow
          receive-shadow
        />
        <vgl-ambient-light
          color="#ffffff"
          intensity="0.1"
        />
        <vgl-rect-area-light
          :color="`rgb(${r}, ${g}, ${b})`"
          :intensity="intensity"
          :width="width"
          :height="height"
          :position="`${x} ${y} ${z}`"
        >
          <vgl-mesh
            geometry="plane"
            material="basic"
            :scale="`${width} ${height} 1`"
          />
        </vgl-rect-area-light>
      </vgl-scene>
      <vgl-perspective-camera
        orbit-position="10 1 1"
        name="camera"
      />
    </vgl-renderer>
    <aside class="control-panel">
      <section>
        <h3>Intensity</h3>
        <input
          v-model="intensity"
          type="range"
          max="1"
          step="0.01"
        >
      </section>
      <section>
        <h3>Color</h3>
        <label>R<input
          v-model="r"
          type="range"
          max="255"
        ></label>
        <label>G<input
          v-model="g"
          type="range"
          max="255"
        ></label>
        <label>B<input
          v-model="b"
          type="range"
          max="255"
        ></label>
      </section>
      <section>
        <h3>Position</h3>
        <label>X<input
          v-model="x"
          type="range"
          min="-10"
          max="10"
          step="0.1"
        ></label>
        <label>Y<input
          v-model="y"
          type="range"
          min="-10"
          max="10"
          step="0.1"
        ></label>
        <label>Z<input
          v-model="z"
          type="range"
          min="-10"
          max="10"
          step="0.1"
        ></label>
      </section>
      <section>
        <h3>Width</h3>
        <input
          v-model="width"
          type="range"
          min="1"
          max="100"
          step="0.1"
        >
      </section>
      <section>
        <h3>Height</h3>
        <input
          v-model="height"
          type="range"
          min="1"
          max="100"
          step="0.1"
        >
      </section>
    </aside>
  </div>
</template>

<script>
export default {
  data: () => ({
    intensity: 0.5,
    r: 255,
    b: 255,
    g: 255,
    width: 10,
    height: 10,
    x: 0,
    y: 0,
    z: -5,
  }),
};
</script>
{% endraw %}
```