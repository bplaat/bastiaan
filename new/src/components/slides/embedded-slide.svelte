<script>
    import { onMount } from "svelte";
    import lottie from "lottie-web";

    // State
    let animationContainer;

    // Methods
    onMount(() => {
        lottie.loadAnimation({
            name: "embedded-developer",
            container: animationContainer,
            renderer: "svg",
            loop: true,
            autoplay: true,
            path: "animations/embedded-developer.json",
        });
    });
</script>

<div class="slide" data-slide-background-color="#777">
    <svg
        class="slide-background"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
    >
        <g transform="rotate(20)" style="transform-origin: center;">
            <rect
                x="-100"
                y="-50"
                width="200"
                height="300"
                fill="#999"
                class="wiggle"
            />
            <rect
                x="50"
                y="-50"
                width="300"
                height="200"
                fill="#aaa"
                class="wiggle"
            />
        </g>
    </svg>

    <div style="position: absolute; top: 10%; left: 10%;">
        <div
            bind:this={animationContainer}
            style="width: 400px;height: 400px;"
        />

        <h1>I'm a embedded developer</h1>
        <p>Since my <span>HBO</span> study Technical Computer Science am I also more and more working with hardware and
            microcontroller. I have developed small systems and electrical designs with multiple sensors and IoT things.</p>
    </div>

    <div style="position: absolute; top: 20%; left: 60%;">
        <h2>Study</h2>
        <ul>
            <li>TI all the way</li>
        </ul>
    </div>

    <div style="position: absolute; top: 50%; left: 60%;">
        <h2>Weather stations</h2>
        <ul>
            <li>Kinda in development (NOT)</li>
        </ul>
    </div>

    <div class="expand-button">
        <h3>If you want to see some stuff I've made through the years</h3>
        <p><a href="#">Check my GitHub profile then...</a></p>
    </div>
</div>
