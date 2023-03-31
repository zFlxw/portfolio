<script lang="ts">
  import { ArrowLeft, ArrowRight, Cake, MapPin, User } from 'lucide-svelte';
  import { fly } from 'svelte/transition';
  import cards from '$lib/json/experience-cards.json';

  let currentCard = 0;
</script>

<div
  class="w-full max-w-4xl xl:max-w-5xl m-auto px-8"
  in:fly={{ y: -100, duration: 250, delay: 300 }}
  out:fly={{ y: 100, duration: 250 }}
>
  <div>
    <h2 class="mt-12 text-4xl font-semibold text-center">About Me</h2>
    <h3 class="text-2xl text-center">Who am I?</h3>
    <div class="mt-12 flex flex-col md:flex-row items-center gap-12 md:gap-24">
      <ul class="text-xl md:text-2xl">
        <li><User />Maik</li>
        <li><Cake />23.01.2005</li>
        <li><MapPin />Germany</li>
      </ul>
      <p
        class="text-justify lg:text-xl max-w-[48ch] md:max-w-none border-t border-t-neutral-200 dark:border-t-neutral-700 pt-8 md:pt-0 md:border-t-0 md:border-l md:border-l-neutral-200 dark:md:border-l-neutral-700 md:pl-8 transition"
      >
        Since my <span>early days</span>, I am fascinated by
        <span>computers</span>
        and how they work. Over the years I spent more and more time on learning
        <span>how to code</span>. I created my first <span>own projects</span>,
        I learned multiple technologies and today, I am still learning new
        things. <br />My current goal is to study
        <span>Computer Science</span> at a university after I finish the
        <span>Abitur</span> in 2024.
      </p>
    </div>
  </div>
  <div class="mt-24 mb-16 xl:mb-0">
    <h2 class="text-4xl font-semibold text-center">My Journey</h2>
    <h3 class="text-2xl text-center">A brief overview</h3>
    <div class="relative mt-12">
      <p
        class="absolute -top-3 lg:-left-14 bg-neutral-50 dark:bg-neutral-800 transition pr-4"
      >
        {cards[currentCard].year}
      </p>
      <hr
        class="bg-neutral-200 border-neutral-200 dark:border-neutral-700 dark:bg-neutral-700 transition"
      />
    </div>
    <div
      class="mt-8 p-4 min-h-[9rem] border border-neutral-200 dark:border-neutral-700 rounded-lg transition"
    >
      <h4 class="font-semibold uppercase text-xl">
        {cards[currentCard].title}
      </h4>
      <p class="mt-2 lg:text-xl">
        {cards[currentCard].shortDesciprition}
      </p>
    </div>
    <div class="flex">
      <button
        class={`${
          currentCard === 0 ? 'hidden' : 'flex'
        } gap-2 uppercase mt-2 items-center`}
        on:click={() => (currentCard -= 1)}
      >
        <ArrowLeft /> Previous
      </button>
      <button
        class={`${
          currentCard === cards.length - 1 ? 'hidden' : 'flex'
        } ml-auto gap-2 uppercase mt-2 items-center`}
        on:click={() => (currentCard += 1)}
      >
        Next <ArrowRight />
      </button>
    </div>
  </div>
</div>

<style lang="scss">
  ul li {
    @apply flex gap-4 items-center;
  }

  p span {
    @apply text-primary-blue dark:text-primary-red-500;
  }
</style>
