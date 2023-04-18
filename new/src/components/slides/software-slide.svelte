<script>
    import { onMount } from "svelte";
    import lottie from "lottie-web";

    // State
    let animationContainer;

    // Methods
    onMount(() => {
        lottie.loadAnimation({
            name: "software-developer",
            container: animationContainer,
            renderer: "svg",
            loop: true,
            autoplay: true,
            path: "animations/software-developer.json",
        });
    });
</script>

<div class="slide" data-slide-background-color="#ddbea9">
    <svg
        class="slide-background"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
    >
        <g transform="rotate(-20)" transform-origin="center">
            <rect class="wiggle" x="-100" y="-50" width="200" height="300" fill="#f5ebe0" />
            <rect class="wiggle" x="50" y="-50" width="300" height="200" fill="#d5bdaf" />
        </g>
    </svg>

    <div style="position: absolute; top: 20%; left: 10%;">
        <img
            src="images/baby.jpg"
            style="width: 300px; height: 200px; border-radius: 1rem;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);"
        />
        <h1>I'm a software developer</h1>
        <ul>
            <li>Since I was 9 years old</li>
            <li>Started with PHP and web dev</li>
            <li>Then Java, C, x86 assembler,</li>
            <li>Python, Go...</li>
        </ul>
    </div>

    <div
        class="wiggle-y"
        style="position: absolute; top: 5%; left: 60%; width: 150px; height: 150px; overflow: hidden; background-color: #29f; border-radius: 1rem; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);"
    >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <rect fill="#2196f3" x="0" y="0" width="24" height="24" />
            <g transform="translate(2.4, 2.4) scale(0.8)">
                <path
                    fill="#fff"
                    d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"
                />
            </g>
        </svg>
    </div>

    <div
        class="wiggle-y"
        style="animation-delay: .2s; position: absolute; top: 15%; left: 72.5%; width: 150px; height: 150px; background-color: #fff; overflow: hidden; border-radius: 1rem; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);"
    >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10085 10085">
            <rect fill="#111" x="0" y="0" width="10085" height="10085" />
            <g transform="translate(2673 2673)">
                <path
                    fill="#fff"
                    d="M1200,3730c-19,-10 -42,-22 -50,-27 -8,-4 -33,-20 -56,-35 -23,-15 -61,-37 -85,-48 -24,-11 -62,-31 -84,-45 -22,-13 -49,-29 -60,-35 -11,-6 -38,-22 -60,-35 -22,-14 -51,-31 -65,-38 -14,-7 -44,-25 -67,-40 -24,-15 -45,-27 -47,-27 -13,0 -88,-89 -105,-124 -24,-52 -44,-166 -36,-214 14,-87 29,-139 46,-161 11,-13 19,-27 19,-31 0,-17 82,-87 131,-112l54,-28 1858,0c1388,0 1869,3 1905,12 26,6 61,21 77,32 17,12 39,26 49,32 11,5 38,46 60,90 23,43 44,80 49,82 4,2 7,55 7,118 0,124 -5,143 -63,219 -34,45 -78,89 -99,99 -7,3 -31,17 -53,31 -22,13 -53,31 -70,40 -16,8 -48,27 -70,40 -22,13 -53,31 -70,40 -16,8 -48,26 -70,40 -22,13 -55,31 -74,40 -18,9 -52,28 -75,43 -105,68 29,62 -1490,62 -1328,-1 -1372,-2 -1406,-20z"
                />
                <path
                    fill="#fff"
                    d="M150,2668c-120,-117 -148,-148 -149,-172 -1,-25 20,-51 142,-174 78,-79 164,-162 190,-183l49,-39 290,0 289,0 -2,-100c-2,-84 0,-104 15,-118 16,-16 121,-17 1671,-17l1653,0 26,24c23,22 26,32 28,115l3,91 93,5c87,5 95,7 118,33 23,27 24,33 24,200 0,151 -2,176 -19,203 -13,21 -30,33 -52,38 -18,3 -910,6 -1983,6l-1951,-1 -105,104c-106,105 -134,127 -166,127 -9,0 -83,-64 -164,-142z"
                />
                <path
                    fill="#fff"
                    d="M1469,1695c-29,-16 -42,-49 -43,-110l-1,-40 -390,-3 -391,-2 -10,28c-7,17 -25,35 -47,46 -33,15 -66,17 -280,14 -242,-3 -243,-3 -274,-28l-32,-25 0,-112c-1,-85 2,-113 12,-113 7,0 18,-9 25,-20 12,-19 23,-20 280,-20 266,0 269,0 289,23 11,12 23,30 26,40 6,16 34,17 402,17l395,0 0,-47c0,-71 8,-86 50,-106 32,-15 63,-18 167,-17 70,0 140,-1 156,-4 15,-3 37,-7 50,-10 12,-2 82,-16 155,-30 105,-21 159,-27 250,-25l116,1 -3,-45c-1,-25 2,-48 8,-52 6,-3 11,-15 11,-25 0,-14 9,-21 33,-25 47,-9 714,-1 723,8 5,4 10,36 12,71l4,64 58,4c32,2 64,11 72,19 15,15 66,113 138,264 24,50 47,98 52,107 23,48 -6,148 -42,148 -10,0 -22,5 -25,10 -4,7 -336,10 -963,10 -811,-1 -961,-3 -983,-15z"
                />
            </g>
        </svg>
    </div>

    <div
        class="wiggle-y"
        style="animation-delay: .4s; position: absolute; top: 10%; left: 85%; width: 150px; height: 150px; background-color: #f5ebe0; border-radius: 1rem; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        font-size: 48px;font-weight:bold;line-height: 150px;text-align: center;"
    >
        NBL
    </div>

    <div style="position: absolute; top: 35%; left: 60%;">
        <h2>I program for school and just for fun</h2>
        <p>
            At the moment am I studiying Technical computer science at the
            Hogeschool Rotterdam<br />
            I hope to graduate in June 2023. I'm currently studiying what I'm going
            to do next.
        </p>
    </div>

    <div style="position: absolute; top: 50%; left: 60%;">
        <div
            bind:this={animationContainer}
            style="width: 400px;height: 400px;"
        />
    </div>

    <div class="expand-button fade-in-bottom">
        <h3>If you want to see some stuff I've made through the years</h3>
        <p><a href="#">Check my GitHub profile then...</a></p>
    </div>
</div>
