<div
  class="flex gap-4 items-center absolute left-1/2 -translate-x-1/2 -top-14 bg-neutral-900 px-4 py-3 rounded-md arrow-center-bottom"
>
  <slot />
</div>

<style>
  .arrow-center-bottom::before {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);

    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid theme('colors.neutral.900');
  }
</style>
