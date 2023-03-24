<script lang="ts">
  import { Menu, Sun, Moon, X } from 'lucide-svelte';
  import { prevent_default } from 'svelte/internal';
  import { crossfade } from 'svelte/transition';
  const tabs = [
    { name: 'Home', ref: '/' },
    { name: 'About', ref: '/about' },
    { name: 'Skills', ref: '/skills' },
    { name: 'Projects', ref: '/projects' },
  ];

  let burgerMenuOpen = false;
  let selected = 'Home';
  let token = 'navbar';

  const [send, receive] = crossfade({
    delay: 100,
    duration: (d) => Math.sqrt(d * 200),
  });
</script>

{#if burgerMenuOpen}
  <div class="w-screen fixed flex xl:hidden flex-col gap-8 bg-neutral-900">
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
<nav
  class="text-neutral-800 flex items-center justify-between px-12 py-2 border-b border-b-neutral-100 w-full"
>
  <img
    src="/img/avatars/blue-avatar-crop.png"
    alt="wolf-avatar"
    class="w-[40px]"
  />
  <p class="block xl:hidden text-neutral-700 text-2xl">Homepage</p>
  <div on:click|preventDefault={() => (burgerMenuOpen = true)}
      on:keydown|preventDefault={() => (burgerMenuOpen = true)}>
      <Menu class="block xl:hidden text-neutral-800" size={36} strokeWidth={1} />
  </div>
  <div class="hidden xl:flex items-center gap-8">
    <ul class="flex gap-2 font-medium text-xl">
      {#each tabs as tab, index}
        <li
          class={`relative before:text-primary-blue before:font-normal before:content-[var(--content)] cursor-pointer py-2 px-4`}
          style={`--content: '${
            (index + 1).toString().padStart(2, '0') + '. '
          }'`}
          on:click|preventDefault={() => (selected = tab.name)}
          on:keydown={() => (selected = tab.name)}
        >
          {#if selected === tab.name}
            <span
              class="selected-bg"
              in:receive={{ key: token }}
              out:send={{ key: token }}
            />
          {/if}
          <a href={tab.ref}>{tab.name}</a>
        </li>
      {/each}
    </ul>
    <Moon
      size={36}
      strokeWidth={1.5}
      class="text-neutral-200 cursor-pointer hover:text-neutral-400 transition"
    />
  </div>
</nav>

<style lang="scss">
  .selected-bg,
  .hover-bg:hover {
    @apply absolute bg-neutral-75 bottom-0 left-0 w-full h-full -z-10 rounded-md;
  }
</style>
