<script>
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";
    import CubeRenderer from "../../utils/cube-renderer.js";

    // Props
    export let visible;

    // State
    let slide, canvas, cubeRenderer;

    // Methods
    onMount(() => {
        //  Start cube renderer
        cubeRenderer = new CubeRenderer({ parent: slide, canvas });
        cubeRenderer.start();
    });
</script>

<svelte:window on:resize={() => cubeRenderer.resize()} />

<div
    bind:this={slide}
    class="slide"
    data-slide-background-color="#AA5500"
    data-slide-retro
>
    <canvas bind:this={canvas} class="slide-background" />

    {#if visible}
        <div class="slide-half">
            <h2 in:fly={{ x: -100, duration: 200, delay: 200 }}>
                I'm a game developer
            </h2>
            <p
                style="width: 80%;"
                in:fly={{ x: -100, duration: 200, delay: 400 }}
            >
                I make games sometimes, mostly with custom game engines but I
                also have used Unreal Engine and Godot in the past
            </p>
        </div>

        <div class="slide-half">
            <a
                href="https://github.com/bplaat/plaatcraft"
                target="_blank"
                class="card"
                style="margin-left: 3rem;"
                in:fly={{ x: 100, duration: 200, delay: 600 }}
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
                class="card"
                in:fly={{ x: 100, duration: 200, delay: 800 }}
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
                class="card"
                style="margin-left: -3rem;"
                in:fly={{ x: 100, duration: 200, delay: 1000 }}
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

        <div
            class="expand-button"
            in:fly={{ y: 50, duration: 200, delay: 1200 }}
        >
            <h3 style="font-size: 1rem;">
                Read more about the games I've made
            </h3>
            <p style="font-size: 0.75rem;">
                <a
                    href="https://github.com/stars/bplaat/lists/my-game-projects"
                    target="_blank"
                >
                    Check my GitHub game repo's...
                </a>
            </p>
        </div>
    {/if}
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
