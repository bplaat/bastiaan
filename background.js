(function () {
    const canvas = document.getElementById('canvas');
    const gl = canvas.getContext('webgl');

    function resize() {
        canvas.width = window.innerWidth * window.devicePixelRatio;
        canvas.height = window.innerHeight * window.devicePixelRatio;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;
    }
    window.addEventListener('resize', resize);

    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, 'attribute vec4 position;void main(){gl_Position=position;}');
    gl.compileShader(vertexShader);
    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(vertexShader));
        return;
    }

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, `precision lowp float;
uniform float time;
uniform vec2 resolution;

float hash(float n) {
    return fract(sin(n) * 43758.5453);
}

float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i.x + hash(i.y)), hash(i.x + 1.0 + hash(i.y)), u.x),
               mix(hash(i.x + hash(i.y + 1.0)), hash(i.x + 1.0 + hash(i.y + 1.0)), u.x), u.y);
}

vec3 auroraLayer(vec2 uv, float speed, float intensity, vec3 color) {
    float t = time * speed;
    vec2 scaleXY = vec2(2.0, 2.0);
    vec2 movement = vec2(2.0, -2.0);
    vec2 p = uv * scaleXY + t * movement;
    float n = noise(p + noise(color.xy + p + t));
    float aurora = smoothstep(0.0, 0.2, n - uv.y) * (1.0 - smoothstep(0.0, 0.6, n - uv.y));
    return aurora * intensity * color;
}

void main(void) {
    vec2 uv = gl_FragCoord.xy / resolution.xy;

    vec3 color = vec3(0.0);
    color += auroraLayer(uv, 0.05, 0.3, vec3(0.0, 0.2, 0.3));
    color += auroraLayer(uv, 0.2, 0.4, vec3(0.1, 0.5, 0.9));
    color += auroraLayer(uv, 0.15, 0.3, vec3(0.2, 0.1, 0.8));
    color += auroraLayer(uv, 0.07, 0.2, vec3(0.2, 0.1, 0.6));

    vec3 skyColor1 = vec3(0.2, 0.35, 0.4);
    vec3 skyColor2 = vec3(0.15, 0.2, 0.35);
    color += skyColor1 * (1.0 - smoothstep(0.0, 1.0, uv.y));
    color += skyColor2 * (1.0 - smoothstep(0.0, 2.0, uv.y));
    gl_FragColor = vec4(color, 1.0);
}`);
    gl.compileShader(fragmentShader);
    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(fragmentShader));
        return;
    }

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    const positionAttributeLocation = gl.getAttribLocation(program, 'position');
    const timeUniformLocation = gl.getUniformLocation(program, 'time');
    const resolutionUniformLocation = gl.getUniformLocation(program, 'resolution');

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1, 1, 1, -1, -1]), gl.STATIC_DRAW);

    function loop() {
        window.requestAnimationFrame(loop);

        gl.viewport(0, 0, canvas.width, canvas.height);

        gl.clearColor(0, 0, 0, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);

        gl.useProgram(program);

        gl.uniform2f(resolutionUniformLocation, canvas.width, canvas.height);
        gl.uniform1f(timeUniformLocation, window.performance.now() / 1000);

        gl.enableVertexAttribArray(positionAttributeLocation);
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    }
    resize();
    loop();
})();
