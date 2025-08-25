const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function rand(a, b) {
    return Math.random() * (b - a) + a;
}

function createParticle(start) {
    return {
        x: rand(-window.innerWidth, start ? window.innerWidth : -window.innerWidth / 2),
        y: rand(-window.innerHeight, start ? window.innerHeight : window.innerHeight * 2),
        vx: rand(0.5, 1.5),
        vy: rand(-1.5, -0.5),
        size: rand(0.5, 3),
        alpha: rand(0.2, 0.6),
    };
}

const NUM_PARTICLES = (window.innerWidth * window.innerHeight) / 1000;
const particles = [];
for (let i = 0; i < NUM_PARTICLES; i++) {
    particles.push(createParticle(true));
}

function update(delta) {
    for (let p of particles) {
        p.vx += rand(-0.05, 0.05);
        p.vy += rand(-0.05, 0.05);
        p.vx = Math.max(0.3, Math.min(p.vx, 2));
        p.vy = Math.max(-2, Math.min(p.vy, -0.3));
        p.x += p.vx * 30 * delta;
        p.y += p.vy * 30 * delta;
        if (p.x > window.innerWidth || p.y < -window.innerHeight) {
            Object.assign(p, createParticle(false));
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    for (let p of particles) {
        const px = p.x + window.innerWidth / 2;
        const py = p.y + window.innerHeight / 2;
        if (
            px + p.size >= 0 &&
            px - p.size < window.innerWidth &&
            py + p.size >= 0 &&
            py - p.size < window.innerHeight
        ) {
            ctx.save();
            ctx.beginPath();
            ctx.arc(px, py, p.size, 0, Math.PI * 2);
            ctx.fillStyle = isDarkTheme ? `rgba(255, 255, 255, ${p.alpha})` : `rgba(0, 0, 0, ${p.alpha})`;
            ctx.fill();
            ctx.restore();
        }
    }
}

let oldTime = performance.now();
function loop() {
    window.requestAnimationFrame(loop);
    let newTime = performance.now();
    update((newTime - oldTime) / 1000);
    oldTime = newTime;
    draw();
}
loop();
