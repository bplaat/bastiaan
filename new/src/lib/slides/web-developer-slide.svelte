<script>
    import { onMount } from "svelte";
    import lottie from 'lottie-web';

    let animationContainer;

    onMount(() => {
        lottie.loadAnimation({
            container: animationContainer,
            renderer: "svg",
            loop: true,
            autoplay: true,
            path: "animations/web-developer.json",
        });
    });
</script>

<div class="slide">
    <svg
        class="slide-background"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
    >
        <rect x="-200" y="-50" width="400" height="300" fill="#ffff" />
    </svg>

    <div style="position: absolute; top: 20%; left: 10%;">
        <div
            bind:this={animationContainer}
            style="width: 200px;height: 200px;"
        />
        <h1>I'm a web developer</h1>
        <ul>
            <li>HTML, CSS, JavaScript, TypeScript</li>
            <li>React, Vue, Svelte</li>
            <li>Node.js, Docker</li>
            <li>PHP, Laravel, Go</li>
        </ul>
    </div>

    <div style="position: absolute; top: 30%; left: 60%;">
        <h2>BassieMusic</h2>
        <ul>
            <li>Go Svelte</li>
        </ul>
    </div>

    <div style="position: absolute; top: 60%; left: 60%;">
        <h2>Strepen</h2>
        <ul>
            <li>PHP Livewire Laravel</li>
        </ul>
    </div>

    <div class="expand-button">
        <h3>
            If you want to see some stuff I've made through the years
        </h3>
        <p><a href="#">Check my GitHub profile then...</a></p>
    </div>
</div>
