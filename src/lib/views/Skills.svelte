<script lang="ts">
  import { fly } from 'svelte/transition';
  import skillCards from '$lib/json/skill-cards.json';
  import Tooltip from '$lib/components/Tooltip.svelte';

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
  <div
    class="mt-12 w-full flex flex-col lg:flex-row lg:justify-center flex-shrink gap-8 text-center"
  >
    <div>
      <h4 class="text-xl">Front-end</h4>
      <div class="card-wrapper">
        {#each cards.frontend as card}
          <a
            href={card.link}
            target="_blank"
            rel="noopener"
            class="group relative mx-auto p-6 border bg-neutral-75 border-neutral-200 dark:bg-neutral-750 dark:border-neutral-700 rounded-lg w-36 h-36 flex items-center transition"
          >
            <div class="hidden group-hover:block ">
              <Tooltip id="skill-card">
                <p class="text-neutral-50">{card.name}</p>
              </Tooltip>
            </div>

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
      <div class="card-wrapper">
        {#each cards.backend as card}
          <a
            href={card.link}
            target="_blank"
            rel="noopener"
            class="relative group mx-auto p-6 border bg-neutral-75 border-neutral-200 dark:bg-neutral-750 dark:border-neutral-700 rounded-lg w-36 h-36 flex items-center transition"
          >
            <div class="hidden group-hover:block ">
              <Tooltip id="skill-card">
                <p class="text-neutral-50">{card.name}</p>
              </Tooltip>
            </div>
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

<style lang="scss">
  .card-wrapper {
    @apply mt-4 grid grid-cols-1 2xs:grid-cols-2 sm:grid-cols-4 lg:grid-cols-3 gap-4;
  }
</style>
