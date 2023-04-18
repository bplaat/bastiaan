<script>
    import { onMount } from "svelte";
    import lottie from 'lottie-web';

    // State
    let animationContainer;

    // Methods
    onMount(() => {
        lottie.loadAnimation({
            name: 'software-developer',
            container: animationContainer,
            renderer: "svg",
            loop: true,
            autoplay: true,
            path: "animations/software-developer.json",
        });
    });
</script>

<div class="slide">
    <svg
        class="slide-background"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
    >
        <g transform="rotate(-20)" transform-origin="center">
            <rect x="-100" y="-50" width="200" height="300" fill="#f5ebe0" />
            <rect x="50" y="-50" width="300" height="200" fill="#d5bdaf" />
        </g>
    </svg>

    <div style="position: absolute; top: 20%; left: 10%;">
        <img
            src="images/bastiaan.jpg"
            style="width: 200px; height: 200px; border-radius: 1rem;"
        />
        <h1>I'm a software developer</h1>
        <ul>
            <li>Since I was 9 years old</li>
            <li>Started with PHP and web dev</li>
            <li>Then Java, C, x86 assembler,</li>
            <li>Python, Go...</li>
        </ul>
    </div>

    <div style="position: absolute; top: 10%; left: 60%;">
        <div bind:this={animationContainer} style="width: 400px;height: 400px;" />
        <h2>Hogeschool Rotterdam</h2>
        <ul>
            <li>Study...</li>
        </ul>
    </div>

    <div class="expand-button">
        <h3>If you want to see some stuff I've made through the years</h3>
        <p><a href="#">Check my GitHub profile then...</a></p>
    </div>
</div>
