<script>
    import AboutMeSlide from "./components/slides/about-me-slide.svelte";
    import EmbeddedSlide from "./components/slides/embedded-slide.svelte";
    import GameSlide from "./components/slides/game-slide.svelte";
    import LowLevelSlide from "./components/slides/low-level-slide.svelte";
    import MobileSlide from "./components/slides/mobile-slide.svelte";
    import ScoutsVolunteerSlide from "./components/slides/scouts-slide.svelte";
    import SoftwareSlide from "./components/slides/software-slide.svelte";
    import WebSlide from "./components/slides/web-slide.svelte";

    // State
    let slidesContainer;
    let currentSlideIndex = 0;

    // Methods
    async function handleSlidesScroll(event) {
        currentSlideIndex = Math.round(
            event.target.scrollTop / event.target.offsetHeight
        );

        const currentSlide = event.target.children[currentSlideIndex];

        slidesContainer.style.backgroundColor = currentSlide.getAttribute("data-slide-background-color");
        if (currentSlide.hasAttribute("data-slide-retro")) {
            slidesContainer.classList.add("is-retro");
        } else {
            slidesContainer.classList.remove("is-retro");
        }
        if (currentSlide.hasAttribute("data-slide-dark")) {
            slidesContainer.classList.add("is-dark");
        } else {
            slidesContainer.classList.remove("is-dark");
        }
    }
</script>

<div
    bind:this={slidesContainer}
    class="slides-container"
    class:is-contact={currentSlideIndex == 8}
>
    <div class="slides">
        <div class="slides-overlay">
            <h1 class="header">
                <a href="/">
                    <svg
                        class="icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        style="float: left; width: 32px; height: 32px; margin-right: .5rem;"
                    >
                        <path
                            d="M15,10.5C15,11.3 14.3,12 13.5,12C14.3,12 15,12.7 15,13.5V15A2,2 0 0,1 13,17H9V7H13A2,2 0 0,1 15,9V10.5M13,15V13H11V15H13M13,11V9H11V11H13M3,5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5M5,5V19H19V5H5Z"
                        />
                    </svg>
                    bastiaan</a
                >
            </h1>
            <!--
            <button class="menu-button">
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
                </svg>
            </button> -->

            <p class="language">
                <a href="/new/nl" lang="nl">🇳🇱 Geef mij Nederlands!</a>
            </p>
        </div>

        <div class="slides-scroll" on:scroll={handleSlidesScroll}>
            <AboutMeSlide />
            <SoftwareSlide />
            <WebSlide />
            <MobileSlide />
            <GameSlide />
            <LowLevelSlide />
            <EmbeddedSlide />
            <ScoutsVolunteerSlide />

            <!-- Contact slide -->
            <div class="slide" data-slide={{ backgroundColor: '#1d3557' }}>
                <svg
                    class="slide-background"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                >
                    <rect
                        x="-200"
                        y="-50"
                        width="400"
                        height="300"
                        fill="#457b9d"
                    />
                </svg>

                <div style="position: absolute; top: 40%; left: 20%;">
                    <h1>Contact</h1>
                </div>
            </div>
        </div>
    </div>
</div>

<!--
https://lottiefiles.com/16401-forest-morning

https://lottiefiles.com/41098-laptop-glob
https://lottiefiles.com/16651-cpu-chip
https://lottiefiles.com/95096-coding
https://iconscout.com/lottie/swirl-line-trail-8341300?utm_campaign=search&utm_medium=marketplace&utm_source=lottiefiles
-->

<style>
    .slides-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 999;

        transition: color ease-in-out 0.2s;
    }
</style>
