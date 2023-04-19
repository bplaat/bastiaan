<script>
    import { fly } from "svelte/transition";

    // Props
    export let visible;
</script>

<div class="slide" data-slide-background-color="#f08080">
    <svg
        class="slide-background"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
    >
        <rect x="-100" y="0" width="200" height="100" fill="#f8ad9d" />
        <rect x="50" y="0" width="200" height="100" fill="#fbc4ab" />
    </svg>

    {#if visible}
        <div
            class="slide-half"
            style="text-align: right;"
            in:fly={{ x: -100, duration: 400, delay: 1000, opacity: 0 }}
        >
            <h2 style="font-size: 32px;">I'm a mobile developer</h2>
            <p style="font-size: 20px; width: 90%; margin-left: auto;">
                I make mobile apps for Android and iOS, with native Android and iOS API's and
                with the awesome Flutter framework or with React Native
            </p>
        </div>

        <div
            style="position: relative; width: 305px; height: 663px;"
            in:fly={{ y: 100, duration: 600, delay: 400, opacity: 0 }}
        >
            <video
                src="/videos/strepen-app.mp4"
                loop
                muted
                autoplay
                style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; border-radius:1rem;margin: auto; width:290px;height:623px;background-color:#000"
            />
            <img
                style="position: absolute; top: 0; left: 0;"
                src="/images/phone.png"
                alt="An Android phone frame"
                width="305"
                height="663"
            />
        </div>

        <div class="slide-half" in:fly={{ x: 100, duration: 400, delay: 1000 }}>
            <h3 style="font-size: 32px;">Strepen Mobile app</h3>
            <p style="font-size: 20px; width: 90%;">
                I've build a mobile app for the Strepen system that runs on
                Android and iOS. It's made with Flutter and it's availible in
                the
                <a
                    href="https://play.google.com/store/apps/details?id=nl.plaatsoft.strepen"
                    target="_blank"
                >
                    Google Play Store
                </a>
            </p>
            <p>
                <a
                    href="https://play.google.com/store/apps/details?id=nl.plaatsoft.strepen"
                    target="_blank"
                    style="margin-right: 1rem;"
                >
                    <img
                        alt="Get it on Google Play"
                        src="images/google-play-download.png"
                        width="188"
                    />
                </a>
                <a
                    href="https://github.com/bplaat/strepen/releases/tag/client-v1.3.0"
                    target="_blank"
                >
                    <img
                        alt="Get it on Google Play"
                        src="images/direct-apk-download.png"
                        width="188"
                    />
                </a>
            </p>
        </div>

        <div class="expand-button" in:fly={{ y: 50, duration: 200, delay: 1400 }}>
            <h3>Read more about the mobile apps I've made</h3>
            <p>
                <a
                    href="https://github.com/stars/bplaat/lists/my-mobile-app-projects"
                    target="_blank"
                >
                    Check my mobile app GitHub repo's...</a
                >
            </p>
        </div>
    {/if}
</div>

<style>
    .slide {
        display: flex;
        align-items: center;
    }

    .slide-half {
        padding: 0 4rem;
    }
</style>
