<script>
    import { onMount } from "svelte";
    import CubeRenderer from "../../utils/cube-renderer.js";

    // State
    let slide, canvas, cubeRenderer;

    // Methods
    onMount(() => {
        // slide.onOpen = function () {
        //     mainText.animate([
        //         { opacity: 0, transform: 'translateX(-20%)'},
        //         { opacity: 1, transform: 'translateX(0%)'},
        //     ], {
        //         duration: 0.2
        //     })
        // };

        //  Start cube renderer
        cubeRenderer = new CubeRenderer({ parent: slide, canvas });
        cubeRenderer.start();
    });

</script>

<svelte:window on:resize={() => cubeRenderer.resize()} />

<div bind:this={slide} class="slide" data-slide-background-color="#AA5500" data-slide-retro>
    <canvas bind:this={canvas} class="slide-background" />

    <div class="slide-half">
        <h2 class="fade-in-left" style="animation-delay: 0.2s;">I'm a game developer</h2>
        <p class="fade-in-left" style="width: 75%; animation-delay: 0.4s;">I make games sometimes, mostly with custom game engines but I also have used Unreal Engine and Godot in the past</p>
    </div>

    <div class="slide-half">
        <a
            href="https://github.com/bplaat/plaatcraft"
            target="_blank"
            class="card fade-in-right"
            style="margin-left: 3rem; animation-delay: 0.6s;"
        >
            <h3>
                <img
                    class="octocat"
                    src="/animations/octocat-pixelated.gif"
                    alt="Pixelated GitHub Octocat animation"
                />
                bplaat/plaatcraft
            </h3>
            <p>An OpenGL Minecraft like game</p>
        </a>

        <a
            href="https://github.com/bplaat/bassieracing"
            target="_blank"
            class="card fade-in-right"
            style="animation-delay: 0.8s;"
        >
            <h3>
                <img
                    class="octocat"
                    src="/animations/octocat-pixelated.gif"
                    alt="Pixelated GitHub Octocat animation"
                />
                bplaat/bassieracing
            </h3>
            <p>A topdown 2D two player racing game</p>
        </a>

        <a
            href="https://github.com/bplaat/plaatworld3d-client"
            target="_blank"
            class="card fade-in-right"
            style="margin-left: -3rem; animation-delay: 1s;"
        >
            <h3>
                <img
                    class="octocat"
                    src="/animations/octocat-pixelated.gif"
                    alt="Pixelated GitHub Octocat animation"
                />
                bplaat/plaatworld3d
            </h3>
            <p>A 3D massive online multiplayer game</p>
        </a>
    </div>

    <div class="expand-button fade-in-bottom" style="animation-delay: 1.2s;">
        <h3 style="font-size: 1rem;">Read more about the games I've made</h3>
        <p style="font-size: 0.75rem;">
            <a
                href="https://github.com/stars/bplaat/lists/my-mobile-app-projects"
                target="_blank"
            >
                Check my game GitHub repo's...</a
            >
        </p>
    </div>
</div>

<style>
    .slide {
        font-family: "Press Start 2P", sans-serif;
        background-color: #ffff55;
        color: #000;
        display: flex;
    }

    .slide-background {
        image-rendering: pixelated;
    }

    .slide-half {
        padding: 0 3rem;
    }

    h2 {
        font-size: 2rem;
    }
    h3 {
        font-size: 1.5rem;
    }

    .card {
        display: block;
        width: 36rem;
        padding: 0 1rem;
        margin: 2rem 0;
        background-color: #fff;
        box-shadow: 0.5rem 0.5rem #000;
    }

    .card:hover,
    .card:focus {
        text-decoration: none;
        box-shadow: 1rem 1rem #000;
    }

    .octocat {
        display: inline-block;
        width: 3rem;
        height: 3rem;
        vertical-align: middle;
    }
</style>
