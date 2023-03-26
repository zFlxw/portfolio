<script lang="ts">
  import { darkmode } from '$lib/stores/preferences.store';
  import { Wrench } from 'lucide-svelte';
</script>

<div class={$darkmode ? 'dark' : ''}>
  <div
    class="text-neutral-400 flex justify-center xl:justify-between items-center mt-8 lg:mt-0 mb-2 mx-8"
  >
    <Wrench size={32} strokeWidth={1.5} class="hidden xl:block text-neutral-200 hover:text-neutral-400 dark:text-neutral-700 dark:hover:text-neutral-500 cursor-pointer transition duration-200 ease-in-out" />
    <a href="/legal" class="hover:underline">Legal Notice</a>
  </div>
</div>
