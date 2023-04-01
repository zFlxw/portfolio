<script lang="ts">
  import { fly } from 'svelte/transition';
  import skillCards from '$lib/json/skill-cards.json';

  let cards = skillCards;
</script>

<div
  class="w-full max-w-4xl lg:max-w-5xl mx-auto px-8"
  in:fly={{ y: -100, duration: 250, delay: 300 }}
  out:fly={{ y: 100, duration: 250 }}
>
  <div>
    <h2 class="mt-12 text-4xl font-semibold text-center">Skills</h2>
    <h3 class="text-2xl text-center">
      An overview of tools and languages I use
    </h3>
  </div>
  <div class="mt-12 w-full flex flex-col lg:flex-row lg:justify-center flex-shrink gap-8 text-center">
    <div>
      <h4 class="text-xl">Front-end</h4>
      <div
        class="mt-4 grid grid-cols-1 2xs:grid-cols-2 sm:grid-cols-4 lg:grid-cols-3 gap-4"
      >
        {#each cards.frontend as card}
          <a
            href={card.link}
            target="_blank"
            rel="noopener"
            class="mx-auto p-6 border bg-neutral-75 border-neutral-200 rounded-lg w-36 h-36 flex items-center"
          >
            <img
              src={`./img/skills/${card.source}`}
              alt={`${card.name} Logo`}
            />
          </a>
        {/each}
      </div>
    </div>
    <div>
      <h4 class="text-xl">Back-end</h4>
      <div
        class="mt-4 grid grid-cols-1 2xs:grid-cols-2 sm:grid-cols-4 lg:grid-cols-3 gap-4"
      >
        {#each cards.backend as card}
          <a
            href={card.link}
            target="_blank"
            rel="noopener"
            class="mx-auto p-6 border bg-neutral-75 border-neutral-200 rounded-lg w-36 h-36 flex items-center cursor-pointer"
          >
            <img
              src={`./img/skills/${card.source}`}
              alt={`${card.name} Logo`}
            />
          </a>
        {/each}
      </div>
    </div>
  </div>
</div>
