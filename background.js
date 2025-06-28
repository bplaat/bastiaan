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
    gl.shaderSource(vertexShader, 'attribute vec4 p;void main(){gl_Position=p;}');
    gl.compileShader(vertexShader);
    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(vertexShader));
        return;
    }

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    const shader = `precision lowp float;uniform float v;uniform vec2 s;
#define mouse vec2(sin(v)/48.,cos(v)/48.)
#define iterations 14
#define formuparam2 0.79
#define volsteps 5
#define stepsize 0.390
#define zoom 0.900
#define tile 0.850
#define brightness 0.003
#define distfading 0.560
#define saturation 0.800
#define transverseSpeed zoom*2.0
#define cloud 0.11
float n(vec3 f){float m=0.,s=0.,y=0.,c=dot(f,f);f=abs(f)/c+vec3(-.5,-.8+.1*sin(v*.7+2.),-1.1+.3*cos(v*.3));float z=exp(-float(0)/7.);m+=z*exp((-7.-.03*log(1e-6+fract(sin(v)*4373.11)))*pow(abs(c-s),2.3));y+=z;s=c;return max(0.,5.*m/y-.7);}void main(){vec2 z=2.*gl_FragCoord.xy/vec2(512)-1.;float s=v,c=formuparam2,f=.9+v*.08;mat2 m=mat2(cos(.9),sin(.9),-sin(.9),cos(.9)),a=mat2(cos(-.6),sin(-.6),-sin(-.6),cos(-.6)),e=mat2(cos(f),sin(f),-sin(f),cos(f));vec3 y=vec3(z*vec2(512)/512.*zoom,1),d=vec3(0);d.x-=5.*(mouse.x-.5);d.y-=5.*(mouse.y-.5);vec3 t=vec3(0,0,1);d.x+=transverseSpeed*cos(.01*v)+.001*v;d.y+=transverseSpeed*sin(.01*v)+.001*v;d.z+=.003*v;y.xy*=e;t.xy*=e;y.xz*=m;t.xz*=m;y.yz*=a;t.yz*=a;d.xy*=-e;d.xz*=m;d.yz*=a;float i=(s-3311.)*(.01*cos(s*.02+.78539815));d+=t*i;i=mod(i,stepsize);float b=-i;i/=stepsize;float l=.24,r=l+stepsize/2.;t=vec3(0);float g=0.;vec3 u=vec3(0);for(int f=0;f<volsteps;f++){vec3 v=d+(l+b)*y,s=d+(r+b)*y;v=abs(vec3(tile)-mod(v,vec3(tile*2.)));s=abs(vec3(tile)-mod(s,vec3(tile*2.)));g=n(s);float m,z=m=0.;for(int f=0;f<iterations;f++){v=abs(v)/dot(v,v)-c;float s=abs(length(v)-m);z+=f>7?min(12.,s):s;m=length(v);}z*=z*z;m=l+b;float e=pow(distfading,max(0.,float(f)-i));t+=e;if(f==0)e*=1.-i;if(f==volsteps-1)e*=i;t+=vec3(m,m*m,m*m*m*m)*z*brightness*e;u+=mix(.11,1.,1.)*vec3(1.8*g*g*g,1.4*g*g,g)*e;l+=stepsize;r+=stepsize;}t=mix(vec3(length(t)),t,saturation);vec4 p=vec4(t*.01,1);u*=cloud;u.z*=1.8;u.x*=.05;u.z=.5*mix(u.y,u.z,.8);u.y=0.;u.zy=mix(u.yz,u.zy,.5*(cos(v*.01)+1.));gl_FragColor=p+vec4(u,1);}`;
    gl.shaderSource(fragmentShader, shader);
    gl.compileShader(fragmentShader);
    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(fragmentShader));
        return;
    }

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    const positionAttributeLocation = gl.getAttribLocation(program, 'p');
    const timeUniformLocation = gl.getUniformLocation(program, 'v');
    const resolutionUniformLocation = gl.getUniformLocation(program, 's');

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
