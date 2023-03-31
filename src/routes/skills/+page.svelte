<script lang="ts">
  import { onMount } from 'svelte';
  import { activePage } from '$lib/stores/active-page.store';
  import { goto } from '$app/navigation';

  onMount(() => {
    activePage.set(2);
    goto('/');
  })
</script>

<p>Loading... You will be redirected shortly.</p>