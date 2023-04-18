export function radians(degrees) {
    return degrees * Math.PI / 180;
}

export class Matrix4 {
    constructor(elements) {
        this.elements = elements;
    }

    clone() {
        return new Matrix4(this.elements);
    }

    mul(matrix) {
        const b00 = matrix.elements[0 * 4 + 0];
        const b01 = matrix.elements[0 * 4 + 1];
        const b02 = matrix.elements[0 * 4 + 2];
        const b03 = matrix.elements[0 * 4 + 3];
        const b10 = matrix.elements[1 * 4 + 0];
        const b11 = matrix.elements[1 * 4 + 1];
        const b12 = matrix.elements[1 * 4 + 2];
        const b13 = matrix.elements[1 * 4 + 3];
        const b20 = matrix.elements[2 * 4 + 0];
        const b21 = matrix.elements[2 * 4 + 1];
        const b22 = matrix.elements[2 * 4 + 2];
        const b23 = matrix.elements[2 * 4 + 3];
        const b30 = matrix.elements[3 * 4 + 0];
        const b31 = matrix.elements[3 * 4 + 1];
        const b32 = matrix.elements[3 * 4 + 2];
        const b33 = matrix.elements[3 * 4 + 3];
        const a00 = this.elements[0 * 4 + 0];
        const a01 = this.elements[0 * 4 + 1];
        const a02 = this.elements[0 * 4 + 2];
        const a03 = this.elements[0 * 4 + 3];
        const a10 = this.elements[1 * 4 + 0];
        const a11 = this.elements[1 * 4 + 1];
        const a12 = this.elements[1 * 4 + 2];
        const a13 = this.elements[1 * 4 + 3];
        const a20 = this.elements[2 * 4 + 0];
        const a21 = this.elements[2 * 4 + 1];
        const a22 = this.elements[2 * 4 + 2];
        const a23 = this.elements[2 * 4 + 3];
        const a30 = this.elements[3 * 4 + 0];
        const a31 = this.elements[3 * 4 + 1];
        const a32 = this.elements[3 * 4 + 2];
        const a33 = this.elements[3 * 4 + 3];

        this.elements = [
            b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30,
            b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31,
            b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32,
            b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33,
            b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30,
            b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31,
            b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32,
            b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33,
            b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30,
            b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31,
            b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32,
            b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33,
            b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30,
            b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31,
            b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32,
            b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33
        ];
        return this;
    }

    static identity() {
        return new Matrix4([
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ]);
    }

    static perspective(fov, aspect, near, far) {
        const f = Math.tan(Math.PI * 0.5 - 0.5 * fov);
        const r = 1.0 / (near - far);
        return new Matrix4([
            f / aspect, 0, 0, 0,
            0, f, 0, 0,
            0, 0, (near + far) * r, -1,
            0, 0, near * far * r * 2, 0
        ]);
    }

    static translate(x, y, z) {
        return new Matrix4([
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            x, y, z, 1
        ]);
    }

    static rotateX(x) {
        const c = Math.cos(x);
        const s = Math.sin(x);
        return new Matrix4([
            1, 0, 0, 0,
            0, c, s, 0,
            0, -s, c, 0,
            0, 0, 0, 1
        ]);
    }

    static rotateY(y) {
        const c = Math.cos(y);
        const s = Math.sin(y);
        return new Matrix4([
            c, 0, -s, 0,
            0, 1, 0, 0,
            s, 0, c, 0,
            0, 0, 0, 1
        ]);
    }

    static rotateZ(z) {
        const c = Math.cos(z);
        const s = Math.sin(z);
        return new Matrix4([
            c, s, 0, 0,
            -s, c, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ]);
    }

    static scale(x, y, z) {
        return new Matrix4([
            x, 0, 0, 0,
            0, y, 0, 0,
            0, 0, z, 0,
            0, 0, 0, 1,
        ]);
    }
}
