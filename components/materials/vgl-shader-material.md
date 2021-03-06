---
          
grand_parent: API / Components
          
parent: Materials
          
nav_order: VglShaderMaterial
          
---
# VglShaderMaterial 

A material for drawing geometries with custom vertex or fragment shaders, corresponding to
[THREE.ShaderMaterial](https://threejs.org/docs/index.html#api/materials/ShaderMaterial).

Properties of [VglMaterial](vgl-material) are also available as a mixin.

Note that some of these properties are not efficient to update. See
[here](https://threejs.org/docs/#manual/en/introduction/How-to-update-things) for some caveats
about updating material state. 

## props 

- `defines` ***Object*** (*optional*) `default: {}` 

  Defines custom constants using `#define` directives within the GLSL code for both the vertex
  shader and the fragment shader; each key/value pair yields another directive:
  ```
  defines: {
  FOO: 15,
  BAR: true
  }
  ```
  yields the lines
  ```
  #define FOO 15
  #define BAR true
  ```
  in the GLSL code. 

- `fog` ***boolean*** (*optional*) `default: false` 

  Define whether the material color is affected by global fog settings; true to pass fog
  uniforms to the shader. Note that changing this value will cause the material to be
  reconstructed, so be aware of performance if using this reactively. Also note that when using
  this, THREE expects fog-related uniforms to be defined on your material; you can use
  something like the following to include them:
  ```
  uniforms: THREE.UniformsUtils.merge([
  THREE.UniformsLib['fog'],
  { other uniforms... }
  ]),
  ``` 

- `fragment-shader` ***string*** (*optional*) `default: The default fragment shader provided by three.js` 

  Fragment shader GLSL code. This is the actual code for the shader. 

- `lights` ***boolean*** (*optional*) `default: false` 

  Defines whether this material uses lighting; true to pass uniform data related to lighting to
  this shader. Note that changing this value will cause the material to be reconstructed, so be
  aware of performance if using this reactively. Also note that when using this, THREE expects
  lighting-related uniforms to be defined on your material; you can use something like the
  following to include them:
  ```
  uniforms: THREE.UniformsUtils.merge([
  THREE.UniformsLib['lights'],
  { other uniforms... }
  ]),
  ``` 

- `linewidth` ***float*** (*optional*) `default: 1` 

  Controls wireframe thickness. Due to limitations of the OpenGL Core Profile with the WebGL
  renderer on most platforms `linewidth` will always be 1 regardless of the set value. 

- `flat-shading` ***boolean*** (*optional*) `default: false` 

  Define whether the material is rendered with flat shading. 

- `uniforms` ***Object*** (*optional*) `default: [object Object]` 

  An object of the form:
  ```
  { "uniform1": { value: 1.0 }, "uniform2": { value: 2 } }
  ```
  specifying the uniforms to be passed to the shader code; keys are uniform names, values are
  definitions of the form
  ```
  { value: 1.0 }
  ```
  where value is the value of the uniform. Names must match the name of the uniform, as defined
  in the GLSL code. Note that uniforms are refreshed on every frame, so updating the value of
  the uniform will immediately update the value available to the GLSL code. 

- `vertex-shader` ***string*** (*optional*) `default: The default vertex shader provided by three.js` 

  Vertex shader GLSL code. This is the actual code for the shader. 

- `wireframe` ***boolean*** (*optional*) `default: false` 

  Render geometry as wireframe (using `GL_LINES` instead of `GL_TRIANGLES`). 

- `wireframe-linewidth` ***float*** (*optional*) `default: 1` 

  Controls wireframe thickness. Due to limitations of the OpenGL Core Profile with the WebGL
  renderer on most platforms `linewidth` will always be 1 regardless of the set value. 

## computed properties 

- `inst` 

  The THREE.ShaderMaterial instance. 

   **dependencies:** `fog`, `lights` 



## Example
              
<div class="code-example"><div class="max-width-1-2">
                <vgl-shader-material-example class="aspect-1618-1000"></vgl-shader-material-example>
              
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
        <vgl-icosahedron-geometry
          name="geo"
          radius="1"
          detail="5"
        />
        <vgl-shader-material
          ref="mat"
          name="mat"
          wireframe
          :defines="defines"
          :uniforms="uniforms"
          :vertex-shader="vertexShader"
          :fragment-shader="fragmentShader"
        />
        <vgl-mesh
          geometry="geo"
          material="mat"
        />
      </vgl-scene>
      <vgl-perspective-camera
        orbit-position="5 0.8 0.2"
        name="camera"
      />
    </vgl-renderer>

    <aside class="control-panel">
      <section>
        <h3>Shaders</h3>
        <label>
          Vertex Shader [<a @click="vertShaderShown = !vertShaderShown">
            {{ vertShaderShown ? 'Hide' : 'Show' }}
          </a>]
        </label>
        <textarea
          v-model="vertexShader"
          :style="{display: vertShaderShown ? &quot;block&quot; : &quot;none&quot;}"
          rows="14"
          cols="50"
        />
        <label>
          Fragment Shader [<a @click="fragShaderShown = !fragShaderShown">
            {{ fragShaderShown ? 'Hide' : 'Show' }}
          </a>]
        </label>
        <textarea
          v-model="fragmentShader"
          :style="{display: fragShaderShown ? &quot;block&quot; : &quot;none&quot;}"
          rows="14"
          cols="50"
        />
      </section>
      <section>
        <h3>Vert Shader Uniforms</h3>
        <table>
          <tr>
            <td>Offset</td><td>
              <input
                v-model.number="uniforms.waveOffset.value"
                class="slider"
                type="range"
                max="2"
                step="0.01"
              >
            </td>
          </tr>
          <tr>
            <td>Amplitude</td><td>
              <input
                v-model.number="uniforms.waveAmp.value"
                class="slider"
                type="range"
                max="2"
                step="0.01"
              >
            </td>
          </tr>
          <tr>
            <td>Frequency</td><td>
              <input
                v-model.number="uniforms.waveFreq.value"
                class="slider"
                type="range"
                max="50"
              >
            </td>
          </tr>
        </table>
        <label>
          <h3>Frag Shader Uniforms</h3>
          Frag Color
          <select v-model.number="uniforms.displayColor.value">
            <option
              value="0"
              selected
            >Cartesian</option>
            <option value="1">Spherical</option>
            <option value="2">Depth</option>
          </select>
        </label>
      </section>
    </aside>
  </div>
</template>

<script>
export default {
  data: () => ({
    vertShaderShown: false,
    fragShaderShown: false,
    defines: {
      COLOR_CARTESIAN: 0,
      COLOR_SPHERICAL: 1,
      COLOR_DEPTH: 2,
    },
    uniforms: {
      waveOffset: { value: 0.0 },
      waveAmp: { value: 0.2 },
      waveFreq: { value: 10 },
      displayColor: { value: 0 },
    },
    vertexShader: `

uniform float waveOffset;
uniform float waveAmp;
uniform float waveFreq;

varying vec4 vCartesian;
varying vec4 vSpherical;

void main() {
  float r = length(position);
  float theta = acos(position.y / r); // inclination
  float phi = atan(position.z, position.x); // azimuth

  float finalR = r + sin((theta + waveOffset) * waveFreq) * waveAmp;
  vec4 finalPos = vec4(
    finalR * sin(theta) * cos(phi),
    finalR * cos(theta),
    finalR * sin(theta) * sin(phi),
    1.0
  );

  gl_Position = projectionMatrix * modelViewMatrix * finalPos;

  const float PI = 3.141592654;
  vCartesian = finalPos;
  vSpherical = vec4( // normalize values to [0, 1]
    r,
    theta / PI,
    ((phi / PI) + 1.0) / 2.0,
    1.0
  );
}

      `.trim(),
    fragmentShader: `

uniform int displayColor;

varying vec4 vSpherical;
varying vec4 vCartesian;

void main() {
  if (displayColor == COLOR_CARTESIAN) {
    gl_FragColor = vCartesian;
  } else if (displayColor == COLOR_SPHERICAL) {
    gl_FragColor = vSpherical;
  } else if (displayColor == COLOR_DEPTH) {
    float depth = gl_FragCoord.z * gl_FragCoord.w;
    gl_FragColor = vec4(vec3(depth), 1.0);
  }
}

      `.trim(),
  }),
};
</script>
{% endraw %}
```