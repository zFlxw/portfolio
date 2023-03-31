<script lang="ts">
  import Frame from '$lib/components/pages/Frame.svelte';
  import Home from '$lib/views/Home.svelte';
  import About from '$lib/views/About.svelte';
  import Skills from '$lib/views/Skills.svelte';
  import { activePage } from '$lib/stores/active-page.store';
</script>

<main>
  <div>
    <Frame>
      {#if $activePage === 0}
        <Home />
      {:else if $activePage === 1}
        <About />
      {:else if $activePage === 2}
        <Skills />
      {/if}
    </Frame>
  </div>
</main>
