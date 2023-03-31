<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import { darkmode } from '$lib/stores/preferences.store';
  import { fly } from 'svelte/transition';
</script>

<div class={`${$darkmode ? 'dark' : ''}`}>
  <div
    class="min-h-screen grid grid-rows-[min-content_1fr] bg-neutral-50 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 transition-all duration-50"
  >
    <Navbar />
    <slot />
    <Footer />
  </div>
</div>
