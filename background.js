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
    gl.shaderSource(fragmentShader, `precision mediump float;
    uniform vec2 resolution;
    uniform float time;
    void main() {
        vec2 p = gl_FragCoord.xy * 20.0 / max(resolution.x, resolution.y);
        float speed = 50.0;
        for (int i = 1; i < 20; i++) {
            p += vec2(0.6 / float(i) * sin(float(i) * p.y + time / (100.0 / speed) + 0.3 * float(i)) + 1.0,
                0.6 / float(i) * sin(float(i) * p.x + time / (100.0 / speed) + 0.3 * float(i)) - 1.0);
        }
        gl_FragColor = vec4(sin(p.x) / 2.0 + 0.5, sin(p.x + p.y) / 3.0 + 0.3, 0.75, 1.0);
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
