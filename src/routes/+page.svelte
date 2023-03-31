<script lang="ts">
  import Frame from '$lib/components/pages/Frame.svelte';
  import Home from '$lib/views/Home.svelte';
  import { activePage } from '$lib/stores/active-page.store';
  import About from '$lib/views/About.svelte';
  import { fly } from 'svelte/transition';
</script>

<main>
  <div>
    <Frame>
      {#if $activePage === 0}
        <Home />
      {:else if $activePage === 1}
        <About />
      {/if}
    </Frame>
  </div>
</main>
