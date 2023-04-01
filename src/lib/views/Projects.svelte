<script lang="ts">
  import { fly } from 'svelte/transition';
  import projectCards from '$lib/json/project-cards.json';
</script>

<div
  class="w-full max-w-4xl lg:max-w-6xl mx-auto px-8"
  in:fly={{ y: -100, duration: 250, delay: 300 }}
  out:fly={{ y: 100, duration: 250 }}
>
  <div>
    <h2 class="mt-12 text-4xl font-semibold text-center">My Projects</h2>
    <h3 class="text-2xl text-center">Want to see my work?</h3>
    <div class="cards-wrapper mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      {#each projectCards as card}
        <div
          class="relative group w-full max-w-xl h-72 !rounded-lg bg-neutral-75 bg-cover bg-center border border-neutral-100 dark:border-neutral-700 cursor-pointer transition"
          style={`background-image: url('./img/projects/${card.coverImage}')`}
        >
          <div
            class="absolute w-full h-full xl:opacity-0 group-hover:opacity-100 transition ease-in-out duration-200 p-5 z-20"
          >
            <div class="w-full h-full flex flex-col !justify-between">
              <div>
                <h4 class="text-neutral-50 uppercase font-semibold">
                  {card.name}
                </h4>
                <p class="mt-5 text-neutral-50">{card.shortDescription}</p>
              </div>
              <div class="">
                <div class="flex gap-2  overflow-scroll scrollbar-hide">
                  {#each card.tags as tag}
                    <span
                      class="px-5 py-1 bg-primary-blue text-neutral-50 text-xs lg:text-sm rounded-xl"
                      >{tag}</span
                    >
                  {/each}
                </div>
              </div>
            </div>
            <div
              class="absolute rounded-lg top-0 left-0 opacity-80 bg-neutral-900 w-full h-full -z-10"
            />
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  .cards-wrapper > * {
    justify-self: center;
  }

  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }

  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
</style>
