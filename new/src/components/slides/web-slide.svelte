<script>
    import { onMount } from "svelte";
    import lottie from "lottie-web";

    // State
    let animationContainer;

    // Methods
    onMount(() => {
        lottie.loadAnimation({
            name: "web-developer",
            container: animationContainer,
            renderer: "svg",
            loop: true,
            autoplay: true,
            path: "animations/web-developer.json",
        });
        lottie.setSpeed(0.5, "web-developer");
    });
</script>

<div
    class="slide"
    data-slide-background-color="#c8b6ff"
    style="background-color: #ffd6ff;"
>
    <svg
        class="slide-background"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
    >
        <circle class="bubble" cx="150" cy="100" r="100" fill="#e7c6ff" />
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

    <div
        style="position: absolute; top: 20%; left: 60%; padding: 0 1rem;
    width: 400px; height: 200px; overflow: hidden; background-color: #fff; border-radius: 1rem; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    "
    >
        <h2>
            <img
                src="/images/octocat.png"
            />
            bplaat/bassiemusic
        </h2>
        <ul>
            <li>Go Svelte</li>
        </ul>
    </div>

    <div
        style="position: absolute; top: 50%; left: 55%; padding: 0 1rem;
    width: 400px; height: 200px; overflow: hidden; background-color: #fff; border-radius: 1rem; box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);"
    >
        <h2>
            <img
                src="/images/octocat.png"
            />
            bplaat/strepen
        </h2>
        <ul>
            <li>PHP Livewire Laravel</li>
        </ul>
    </div>

    <div class="expand-button">
        <h3>If you want to see some stuff I've made through the years</h3>
        <p><a href="#">Check my GitHub profile then...</a></p>
    </div>
</div>
