<script>
    import { fly } from "svelte/transition";
    import Link from "../link.svelte";

    // Props
    export let visible;
</script>

<div class="slide" data-slide-background-color="#59a5d8">
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
                fill="#84d2f6"
                class="wiggle"
            />
            <rect
                x="50"
                y="-50"
                width="300"
                height="200"
                fill="#91e5f6"
                class="wiggle"
            />
        </g>
    </svg>

    {#if visible}
        <div
            style="position: absolute; top: 15%; left: 20%; text-align: right;"
        >
            <img
                src="images/bastiaan.jpg"
                alt="Bastiaan van der Plaat"
                style="width: 200px; height: 200px; border-radius: 1rem;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);"
                in:fly={{ y: -50, duration: 200, delay: 200 }}
            />
            <h1 in:fly={{ x: -50, duration: 200, delay: 400 }}>
                Hey, my name<br />is Bastiaan
            </h1>
            <p>
                <span
                    style="display: inline-block;"
                    in:fly={{ x: -50, duration: 200, delay: 500 }}
                >
                    A 20 year old
                </span><br />
                <span
                    style="display: inline-block;"
                    in:fly={{ x: -50, duration: 200, delay: 600 }}
                >
                    <span>Dutch 🇳🇱</span> <span>Christian ✝️</span>
                </span><br />
                <span
                    style="display: inline-block;"
                    in:fly={{ x: -50, duration: 200, delay: 700 }}
                >
                    guy from <span>Gouda 🧀</span>
                </span><br />
                <span
                    style="display: inline-block;"
                    in:fly={{ x: -50, duration: 200, delay: 800 }}
                >
                    My hobbies are
                </span><br />
                <span
                    style="display: inline-block;"
                    in:fly={{ x: -50, duration: 200, delay: 900 }}
                >
                    programming <span>🧑🏻‍💻</span>
                </span><br />
                <span
                    style="display: inline-block;"
                    in:fly={{ x: -50, duration: 200, delay: 1000 }}
                >
                    and scouting <span>⚜️</span>
                </span>
            </p>
        </div>

        <div style="position: absolute; top: 30%; left: 60%;">
            <h2
                style="margin: 0 0 0 3.5rem; font-size: 2rem; animation-delay: 0.8s;"
            >
                I'm a
            </h2>
            <ul style="font-size: 1.5rem; margin: 0;">
                <li
                    class="fade-in-left"
                    style="margin-left: 3rem; animation-delay: 1s;"
                >
                    <Link to="#software">Software developer</Link>
                </li>
                <li
                    class="fade-in-left"
                    style="margin-left: 2.5rem; animation-delay: 1.2s;"
                >
                    <Link to="#web">Full-stack web developer</Link>
                </li>
                <li
                    class="fade-in-left"
                    style="margin-left: 2rem; animation-delay: 1.4s;"
                >
                    <Link to="#mobile">Mobile developer</Link>
                </li>
                <li
                    class="fade-in-left"
                    style="margin-left: 1.5rem; animation-delay: 1.6s;"
                >
                    <Link to="#game">Game developer</Link>
                </li>
                <li
                    class="fade-in-left"
                    style="margin-left: 1rem; animation-delay: 1.8s;"
                >
                    <Link to="#low-level">Low level developer</Link>
                </li>
                <li
                    class="fade-in-left"
                    style="margin-left: 0.5rem; animation-delay: 2s;"
                >
                    <Link to="#embedded">Embedded developer</Link>
                </li>
                <li class="fade-in-left" style="animation-delay: 2.2s;">
                    <Link to="#scouting">Scouting volunteer</Link>
                </li>
            </ul>
        </div>

        <div
            class="expand-button fade-in-bottom"
            style="animation-delay: 2.2s;"
        >
            <h3>Yes that's me, welcome to my personal site!</h3>
            <p>
                <Link to="#contact"
                    >If you want to contact me, click here...</Link
                >
            </p>
        </div>
    {/if}
</div>
