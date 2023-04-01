<script lang="ts">
  import { preferencsStore } from '$lib/stores/preferences.store';

  const { darkmode } = preferencsStore;
</script>

<div class={$darkmode ? 'dark' : ''}>
  <div
    class="text-neutral-400 flex justify-center xl:justify-end items-center mt-8 lg:mt-0 mb-2 mx-8"
  >
    <a href="/legal" class="hover:underline">Legal Notice</a>
  </div>
</div>
