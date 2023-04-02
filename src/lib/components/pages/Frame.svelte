<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import { preferencsStore } from '$lib/stores/preferences.store';

  const { darkmode } = preferencsStore;
</script>

<div class={`${$darkmode ? 'dark' : ''}`}>
  <div
    class="min-h-screen grid grid-rows-[min-content_1fr] bg-neutral-50 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 transition-all"
  >
    <Navbar />
    <div class="w-full flex flex-col items-center justify-center overflow-y-hidden scrollbar-hide">
      <slot />
    </div>
    <Footer />
  </div>
</div>
