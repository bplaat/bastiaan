
import { radians, Matrix4 } from "./math.js";

export default class CubeRenderer {
    constructor({ parent, canvas }) {
        this.parent = parent;
        this.canvas = canvas;

        this.init();
        this.resize();
    }

    resize() {
        this.canvas.width = this.parent.offsetWidth / 4;
        this.canvas.height = this.parent.offsetHeight / 4;
        this.canvas.style.width = `${this.parent.offsetWidth}px`;
        this.canvas.style.height = `${this.parent.offsetHeight}px`;
    }

    init() {
        const gl = this.canvas.getContext("webgl");
        this.gl = gl;

        // Create shader program
        this.vertexShader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(
            this.vertexShader,
            `
attribute vec4 a_position;
uniform mat4 u_camera;
uniform mat4 u_matrix;
varying vec4 v_color;
void main() {
    gl_Position = u_camera * u_matrix * a_position;
    v_color = a_position * 0.5 + 0.5;
}`
        );
        gl.compileShader(this.vertexShader);

        this.fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(
            this.fragmentShader,
            `
precision mediump float;
varying vec4 v_color;
void main() {
    vec3 q = vec3(16);
    gl_FragColor = vec4(floor(v_color.rgb * q) / q, 1);
}`
        );
        gl.compileShader(this.fragmentShader);

        const program = gl.createProgram();
        this.program = program;
        gl.attachShader(program, this.vertexShader);
        gl.attachShader(program, this.fragmentShader);
        gl.linkProgram(program);

        // Get attributes and uniforms
        this.positionAttributeLocation = gl.getAttribLocation(
            program,
            "a_position"
        );
        this.cameraUniformLocation = gl.getUniformLocation(
            program,
            "u_camera"
        );
        this.matrixUniformLocation = gl.getUniformLocation(
            program,
            "u_matrix"
        );

        // Create cube position buffer
        this.cubePositionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.cubePositionBuffer);
        gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array([
                -0.5, -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, -0.5,
                -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5,

                -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, -0.5, -0.5,
                0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5,

                -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5,
                -0.5, -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5,

                0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5,
                -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5,

                -0.5, -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5,
                -0.5, -0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5,

                -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, -0.5, 0.5,
                0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5,
            ]),
            gl.STATIC_DRAW
        );

        this.rotation = 0;
    }

    update() {
        this.rotation += 2;
    }

    render(gl) {
        gl.viewport(0, 0, this.canvas.width, this.canvas.height);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.enable(gl.DEPTH_TEST);

        gl.useProgram(this.program);

        // Set camera matrix
        const cameraMatrix = Matrix4.perspective(
            radians(75),
            this.canvas.width / this.canvas.height,
            0.1,
            1000
        );
        gl.uniformMatrix4fv(
            this.cameraUniformLocation,
            false,
            cameraMatrix.elements
        );

        // Draw cube
        const cubeMatrix = Matrix4.translate(0, 0, -2)
            .mul(Matrix4.rotateX(radians(this.rotation)))
            .mul(Matrix4.rotateY(radians(this.rotation)));
        gl.uniformMatrix4fv(
            this.matrixUniformLocation,
            false,
            cubeMatrix.elements
        );

        gl.bindBuffer(gl.ARRAY_BUFFER, this.cubePositionBuffer);
        gl.enableVertexAttribArray(this.positionAttributeLocation);
        gl.vertexAttribPointer(
            this.positionAttributeLocation,
            3,
            gl.FLOAT,
            false,
            0,
            0
        );
        gl.drawArrays(gl.TRIANGLES, 0, 36);
    }

    _loop() {
        window.requestAnimationFrame(this._loop.bind(this));
        this.update();
        this.render(this.gl);
    }

    start() {
        this._loop();
    }
}
