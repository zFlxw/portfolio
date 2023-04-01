<script lang="ts">
  import { Menu, Sun, Moon, X } from 'lucide-svelte';
  import { crossfade } from 'svelte/transition';
  import { darkmode } from '$lib/stores/preferences.store';
  import { activePage } from '$lib/stores/active-page.store';
  const tabs = [
    { name: 'Home', ref: '/' },
    { name: 'About', ref: '/about' },
    { name: 'Skills', ref: '/skills' },
    { name: 'Projects', ref: '/projects' },
  ];

  $: imageSource = $darkmode
    ? '/img/avatars/red-avatar-crop.png'
    : '/img/avatars/blue-avatar-crop.png';

  let burgerMenuOpen = false;
  let selected = tabs[$activePage].name;
  let token = 'navbar';

  const [send, receive] = crossfade({
    duration: (d) => Math.sqrt(d * 200),
  });

  function changeTab(newTab: string) {
    selected = newTab;
    activePage.set(tabs.findIndex((tab) => tab.name === newTab));
  }
</script>

{#if burgerMenuOpen}
  <div class="w-screen fixed flex xl:hidden flex-col gap-8 bg-neutral-900 z-20">
    <div
      class="absolute text-neutral-400 right-8 top-8"
      on:click|preventDefault={() => (burgerMenuOpen = false)}
      on:keydown|preventDefault={() => (burgerMenuOpen = false)}
    >
      <X size={32} />
    </div>

    <h2 class="text-neutral-50 font-medium text-center text-3xl mt-16">
      Navigation
    </h2>
    <ul class="flex pb-12 flex-wrap justify-center">
      {#each tabs as tab}
        <li
          class="text-xl text-neutral-50 text-center cursor-pointer py-2 px-4 hover:underline"
        >
          <a href={tab.ref}>{tab.name}</a>
        </li>
      {/each}
    </ul>
  </div>
{/if}
<div class={$darkmode ? 'dark' : ''}>
  <nav
    class="text-neutral-800 dark:text-neutral-200 flex items-center justify-between px-12 py-2 border-b border-b-neutral-100 dark:border-b-neutral-700 w-full transition-colors"
  >
    <img src={imageSource} alt="wolf-avatar" class="w-[40px]" />
    <div
      on:click|preventDefault={() => (burgerMenuOpen = true)}
      on:keydown|preventDefault={() => (burgerMenuOpen = true)}
    >
      <Menu
        class="block xl:hidden text-neutral-800 dark:text-neutral-100"
        size={36}
        strokeWidth={1}
      />
    </div>
    <div class="hidden xl:flex items-center gap-8">
      <ul class="flex gap-2 font-medium text-xl z-10">
        {#each tabs as tab, index}
          <li
            class={`relative before:text-primary-blue dark:before:text-primary-red-500 before:font-normal before:content-[var(--content)] cursor-pointer py-2 px-4`}
            style={`--content: '${
              (index + 1).toString().padStart(2, '0') + '. '
            }'`}
            on:click|preventDefault={() => (changeTab(tab.name))}
            on:keydown|preventDefault={() => (changeTab(tab.name))}
          >
            {#if selected === tab.name}
              <span
                class="absolute bg-neutral-75 dark:bg-neutral-700 bottom-0 left-0 w-full h-full rounded-md -z-10 transition"
                in:receive={{ key: token }}
                out:send={{ key: token }}
              />
            {/if}
            <a href={tab.ref} class="z-10">{tab.name}</a>
          </li>
        {/each}
      </ul>
      <div
        on:click|preventDefault={() => darkmode.set(!$darkmode)}
        on:keydown|preventDefault={() => darkmode.set(!$darkmode)}
      >
        {#if $darkmode}
          <Sun
            size={36}
            strokeWidth={1.5}
            class="text-neutral-600 cursor-pointer hover:text-neutral-300 transition"
          />
        {:else}
          <Moon
            size={36}
            strokeWidth={1.5}
            class="text-neutral-200 cursor-pointer hover:text-neutral-400 transition"
          />
        {/if}
      </div>
    </div>
  </nav>
</div>

