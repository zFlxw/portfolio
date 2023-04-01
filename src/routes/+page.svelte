<script lang="ts">
  import Frame from '$lib/components/pages/Frame.svelte';
  import Home from '$lib/views/Home.svelte';
  import About from '$lib/views/About.svelte';
  import Skills from '$lib/views/Skills.svelte';
  import { activePage } from '$lib/stores/active-page.store';

  function handleTabKeydown(
    event: KeyboardEvent & {
      currentTarget: EventTarget & Window;
    },
  ) {
    let keyAsNum = +event.key;
    if (isNaN(keyAsNum)) { return; }
    if (keyAsNum < 1 || keyAsNum > 4) { return; }

    activePage.set(keyAsNum - 1);
  }
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
<svelte:window on:keyup={(event) => handleTabKeydown(event)} />
