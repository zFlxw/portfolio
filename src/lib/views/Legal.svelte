<script lang="ts">
  import { fly } from 'svelte/transition';
</script>

<div
  class="w-full max-w-4xl lg:max-w-6xl mx-auto px-8 text-center"
  in:fly={{ y: -100, duration: 250, delay: 300 }}
  out:fly={{ y: 100, duration: 250 }}
>
  <div>
    <h2 class="mt-12 text-4xl font-semibold text-center">Legal</h2>
  </div>
  <div class="text-2xl mt-16">
    <h2 class="text-4xl font-semibold">
      Angaben gem&auml;&szlig; &sect; 5 TMG / <br />Information pursuant to
      sect. 5 German Telemedia Act (TMG)
    </h2>
    <p class="mt-6 text-3xl">
      Maik Zimmerschied<br />
      Lindenstr. 2<br />
      54531 Wallscheid
    </p>

    <h2 class="text-4xl font-semibold mt-24">Kontakt / Contact</h2>
    <p class="mt-6">E-Mail: lxcalflxw@gmail.com</p>

    <p class="mt-24 text-center">
      <strong>Quelle / Source</strong>:
      <a
        href="https://www.e-recht24.de/impressum-generator.html"
        class="text-primary"
        >https://www.e-recht24.de/impressum-generator.html</a
      >
    </p>
  </div>
</div>
