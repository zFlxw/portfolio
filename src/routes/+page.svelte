<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
  import NavbarComponent from '$lib/components/NavbarComponent.svelte';
  import { Github } from 'lucide-svelte';
</script>

<div class="min-h-screen grid grid-rows-[min-content_1fr]">
  <NavbarComponent />
  <main class="w-full max-w-6xl m-auto">
    <div class="w-full flex items-center justify-center">
      <div class="w-full flex flex-col gap-8">
        <h1 class="font-semibold text-6xl text-neutral-800">
          Developer<span>.</span><br />
          Student<span>.</span>
        </h1>
        <h2 class="text-2xl max-w-[36ch]">
          Hey. I am Maik, also known as Flxw, and I code stuff. Learn more about
          me here:
        </h2>
        <ul class="text-2xl text-primary-blue">
          <li><a href="/about">About Me</a></li>
          <li><a href="/skills">My Skills</a></li>
          <li><a href="/projects">My Projects</a></li>
        </ul>
      </div>
      <img
        src="/img/avatars/blue-avatar.png"
        alt="Wolf Avatar (Light)"
        class="aspect-square w-full max-w-md "
      />
    </div>
    <div class="mt-12">
      <div class="relative">
        <hr class="text-neutral-200 bg-neutral-200 h-[3px]" />
        <p
          class="text-base font-medium absolute -top-3 left-1/2 -translate-x-1/2 bg-neutral-50 text-neutral-200 uppercase px-4"
        >
          Connect
        </p>
      </div>
      <div class="flex items-center justify-center gap-12 mt-8">
        <a
          href="https://www.github.com/zFlxw"
          target="_blank"
          rel="noopener noreferrer"
          ><Github size={48} strokeWidth={1.5} class="hoverable" /></a
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-14 stroke-neutral-200 hover:stroke-neutral-400 fill-neutral-200 hover:fill-neutral-400 cursor-pointer transition duration-200 ease-in-out"
          viewBox="0 0 128 128"
          stroke-width={3}
          ><path
            stroke-width={3}
            d="M45.23 57.2c-6.16 0-11.17 5.6-11.17 12.48s5 12.47 11.17 12.47 11.16-5.59 11.16-12.47S51.38 57.2 45.23 57.2Zm0 21c-4 0-7.17-3.8-7.17-8.47s3.21-8.48 7.17-8.48 7.16 3.8 7.16 8.48-3.21 8.42-7.16 8.42Z"
          /><path
            stroke-width={3}
            d="M121.83 59.58a156.78 156.78 0 0 0-11.52-31 2.1 2.1 0 0 0-.71-.77 87.08 87.08 0 0 0-15.23-7.17C84.55 17.07 79.91 17 79.72 17a2 2 0 0 0-2 1.72l-.6 4.17a133.14 133.14 0 0 0-26.28 0l-.6-4.17a2 2 0 0 0-2-1.72c-.19 0-4.83 0-14.65 3.61a87.08 87.08 0 0 0-15.19 7.2 2.1 2.1 0 0 0-.71.77 156.72 156.72 0 0 0-11.52 31C1 80.46 0 90.91 0 91.34a2 2 0 0 0 .49 1.5 55.2 55.2 0 0 0 18.2 12.74A76.32 76.32 0 0 0 38.48 111a2 2 0 0 0 1.92-1l5.4-9.25a105.08 105.08 0 0 0 18.2 1.49 105.08 105.08 0 0 0 18.2-1.51l5.4 9.27a2 2 0 0 0 1.72 1h.2a76.32 76.32 0 0 0 19.78-5.38 55.2 55.2 0 0 0 18.2-12.74 2 2 0 0 0 .49-1.5c.01-.47-.94-10.92-6.16-31.8Zm-14.06 42.31a76.76 76.76 0 0 1-17.39 4.92l-4.08-7c4.68-1.24 14.42-4.46 21.83-11.2a2 2 0 1 0-2.69-3c-9 8.23-22.46 10.84-22.6 10.87h-.06A96.59 96.59 0 0 1 64 98.24a96.59 96.59 0 0 1-18.78-1.7h-.06c-.14 0-13.55-2.64-22.6-10.87a2 2 0 1 0-2.69 3c7.41 6.74 17.15 10 21.83 11.2l-4.08 7a76.08 76.08 0 0 1-17.39-4.92A52.24 52.24 0 0 1 4.08 90.8c.33-2.91 1.68-13.07 6-30.24A156.25 156.25 0 0 1 21 30.92a88.17 88.17 0 0 1 14-6.52 61.35 61.35 0 0 1 11.58-3.19l.35 2.39c-4 1-13.85 3.86-21.65 9.53a2 2 0 1 0 2.36 3.23c8.82-6.41 21-9.06 21.86-9.25a118.4 118.4 0 0 1 14.5-.84 117.64 117.64 0 0 1 14.51.84c.91.19 13 2.83 21.86 9.25a2 2 0 1 0 2.36-3.23c-7.8-5.67-17.61-8.52-21.65-9.53l.35-2.39A61.75 61.75 0 0 1 93 24.4a88.17 88.17 0 0 1 14 6.52 156.25 156.25 0 0 1 11 29.64c4.29 17.17 5.64 27.33 6 30.24a52.24 52.24 0 0 1-16.23 11.09Z"
          /><path
            stroke-width={3}
            d="M82.77 57.2c-6.15 0-11.16 5.6-11.16 12.48s5 12.47 11.16 12.47 11.17-5.59 11.17-12.47S88.93 57.2 82.77 57.2Zm0 21c-4 0-7.16-3.8-7.16-8.47s3.21-8.48 7.16-8.48 7.17 3.8 7.17 8.48-3.21 8.42-7.17 8.42Z"
          /></svg
        >
        <a
          href="https://www.buymeacoffee.com/Flxw"
          target="_blank"
          rel="noopener"
        >
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            stroke-width="1.5"
            class="w-12 fill-neutral-200 hover:fill-neutral-400 cursor-pointer transition duration-200 ease-in-out"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              stroke-width="1.5"
              d="M6.63961 2C6.16293 2 5.75251 2.33646 5.65903 2.80388L5.2198 5H18.7802L18.341 2.80388C18.2475 2.33646 17.8371 2 17.3604 2H6.63961ZM20.8198 5L20.3021 2.41165C20.0217 1.00938 18.7904 0 17.3604 0H6.63961C5.20956 0 3.97832 1.00938 3.69787 2.41165L3.1802 5H3C2.44772 5 2 5.44772 2 6C2 6.55228 2.44772 7 3 7H4.11075L5.79905 21.3505C5.97679 22.8614 7.25724 24 8.7785 24H15.2215C16.7428 24 18.0232 22.8614 18.201 21.3505L19.8892 7H21C21.5523 7 22 6.55228 22 6C22 5.44772 21.5523 5 21 5H20.8198ZM17.8755 7H6.12454L7.41866 18H16.5813L17.8755 7ZM16.346 20H7.65396L7.78535 21.1168C7.8446 21.6205 8.27141 22 8.7785 22H15.2215C15.7286 22 16.1554 21.6205 16.2147 21.1168L16.346 20Z"
            />
          </svg>
        </a>
      </div>
    </div>
  </main>
  <Footer />
</div>

<style lang="scss">
  h1 span {
    @apply text-primary-blue;
  }

  ul li {
    @apply list-disc list-inside;

    a {
      @apply hover:underline cursor-pointer transition duration-100 ease-in-out;
    }
  }
</style>
