<script>
    import { fade } from "svelte/transition";

    // Props
    export let visible;
</script>

<div class="slide" data-slide-background-color="#050505" data-slide-dark>
    {#if visible}
        <div class="slide-half" in:fade={{ duration: 200, delay: 400 }}>
            <h2>I'm a low level developer</h2>
            <p>
                I love programming in low level languages like C, Rust and C++.
                But I also go deeper with x86_64, ARM64 and RISC-V assembler,
                sometimes I design cpus with custom instruction set architectures
            </p>
        </div>

        <div class="slide-half">
            <a
                class="card"
                href="https://github.com/bplaat/nbl"
                target="_blank"
                rel="noreferrer"
                in:fade={{ duration: 200, delay: 600 }}
            >
                <h3>New Bastiaan Language</h3>
                <p>
                    A self made scripting language with AST-walking interpreter
                    written in C
                </p>
            </a>

            <a
                class="card"
                href="https://github.com/bplaat/bcc"
                target="_blank"
                rel="noreferrer"
                in:fade={{ duration: 200, delay: 800 }}
            >
                <h3>Bassie C Compiler Toolchain</h3>
                <p>
                    An ongoing project to create a basic C11 compiler toolchain
                    with assembler and linker of x86_64 and ARM64
                </p>
            </a>
        </div>

        <div class="expand-button" in:fade={{ duration: 200, delay: 1000 }}>
            <h4>If you want to see some stuff I've made through the years</h4>
            <p>
                <a
                    href="https://github.com/stars/bplaat/lists/my-low-level-projects"
                    target="_blank"
                    rel="noreferrer"
                >
                    Check my low level GitHub projects...</a
                >
            </p>
        </div>
    {/if}
</div>

<style>
    .slide {
        font-family: "Source Code Pro", monospace;
        background-color: #222;
        color: #0f0;

        display: flex;
        align-items: center;
    }

    .slide-half {
        padding: 0 4rem;
    }

    .card {
        border: 1px solid #0f0;
        margin: 2rem 0;
        padding: 2rem;
    }
    .card:hover,
    .card:focus {
        outline: 1px solid #0f0;
        text-decoration: none;
    }
    .card:hover h3,
    .card:focus h3 {
        text-decoration: underline;
    }
</style>
