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
    gl.shaderSource(vertexShader, `attribute vec4 p;void main(){gl_Position=p;}`);
    gl.compileShader(vertexShader);
    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(vertexShader));
        return;
    }

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, `precision mediump float;uniform float v;uniform vec2 s;
    #define iterations 12
    #define formuparam2 0.79
    #define volsteps 7
    #define stepsize 0.290
    #define zoom 1.0
    #define tile 0.850
    #define speed2 0.10
    #define brightness 0.0015
    #define darkmatter 0.100
    #define distfading 0.560
    #define saturation 0.90
    #define transverseSpeed zoom
    #define cloud 0.15
    float n(vec3 f){float z=3.+.03*log(1e-6+fract(sin(v)*373.11)),s=0.,m=0.,y=0.;for(int i=0;i<6;++i){float t=dot(f,f);f=abs(f)/t+vec3(-.5,-.8+.1*sin(-v*.1+2.),-1.1+.3*cos(v*.3));float d=exp(-float(i)/7.);s+=d*exp(-z*pow(abs(t-m),2.3));y+=d;m=t;}return max(0.,5.*s/y-.7);}void main(){vec2 z=2.*gl_FragCoord.xy/vec2(512)-1.;float t=v,f=-speed2;f=.005*cos(t*.02+.78539815);float s=formuparam2,c=.9+v*.08;mat2 m=mat2(cos(.9),sin(.9),-sin(.9),cos(.9)),d=mat2(cos(-.6),sin(-.6),-sin(-.6),cos(-.6)),a=mat2(cos(c),sin(c),-sin(c),cos(c));vec3 i=vec3(z*vec2(512)/512.*zoom,1),y=vec3(0);y.x-=2.*(v*.013-.5);y.y-=2.*(v*.006-.5);vec3 e=vec3(0,0,1);y.x+=transverseSpeed*cos(.01*v)+.001*v;y.y+=transverseSpeed*sin(.01*v)+.001*v;y.z+=.003*v;i.xy*=a;e.xy*=a;i.xz*=m;e.xz*=m;i.yz*=d;e.yz*=d;y.xy*=-a;y.xz*=m;y.yz*=d;float l=(t-3311.)*f;y+=e*l;float u=mod(l,stepsize),g=-u;u/=stepsize;float b=.24,r=b+stepsize/2.;vec3 x=vec3(0);float p=0.;vec3 C=vec3(0);for(int F=0;F<volsteps;F++){vec3 E=y+(b+g)*i,D=y+(r+g)*i;E=abs(vec3(tile)-mod(E,vec3(tile*2.)));D=abs(vec3(tile)-mod(D,vec3(tile*2.)));p=n(D);float B,A=B=0.;for(int G=0;G<iterations;G++){E=abs(E)/dot(E,E)-s;float H=abs(length(E)-B);A+=G>7?min(12.,H):H;B=length(E);}A*=A*A;float H=b+g,G=pow(distfading,max(0.,float(F)-u));x+=G;if(F==0)G*=1.-u;if(F==volsteps-1)G*=u;x+=vec3(H,H*H,H*H*H*H)*A*brightness*G;C+=mix(.4,1.,1.)*vec3(1.8*p*p*p,1.4*p*p,p)*G;b+=stepsize;r+=stepsize;}x=mix(vec3(length(x)),x,saturation);vec4 G=vec4(x*.01,1);C*=cloud;C.z*=1.8;C.x*=.05;C.z=.5*mix(C.y,C.z,.8);C.y=0.;C.zy=mix(C.yz,C.zy,.5*(cos(v*.01)+1.));gl_FragColor=G+vec4(C,1);}`);
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
