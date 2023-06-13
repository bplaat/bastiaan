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
    gl.shaderSource(vertexShader, `attribute vec4 position;
        void main() {
            gl_Position = position;
        }`);
    gl.compileShader(vertexShader);
    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(vertexShader));
        return;
    }

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, `precision mediump float;
    uniform float time;
    uniform vec2 resolution;

    mat2 m(float a) {
        float c=cos(a), s=sin(a);
        return mat2(c,-s,s,c);
    }

    float map(vec3 p) {
        p.xz *= m(time * 0.4);p.xy*= m(time * 0.1);
        vec3 q = p * 2.0 + time;
        return length(p+vec3(sin(time * 0.7))) * log(length(p) + 1.0) + sin(q.x + sin(q.z + sin(q.y))) * 0.5 - 1.0;
    }

    void main() {
        vec2 a = gl_FragCoord.xy / resolution.y - vec2(0.9, 0.5);
        vec3 cl = vec3(0.0);
        float d = 2.5;

        for (int i = 0; i <= 3; i++) {
            vec3 p = vec3(0, 0, 4.0) + normalize(vec3(a, -1.0)) * d;
            float rz = map(p);
            float f =  clamp((rz - map(p + 0.1)) * 0.5, -0.1, 1.0);
            vec3 l = vec3(0.1, 0.3, 0.4) + vec3(5.0, 2.5, 3.0) * f;
            cl = cl * l + smoothstep(2.5, 0.0, rz) * 1.0 * l;
            d += min(rz, 1.0);
        }

        gl_FragColor = vec4(cl, 1.0);
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
