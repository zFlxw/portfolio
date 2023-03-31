import { crossfade } from 'svelte/transition';
import { quintOut } from 'svelte/easing';

export const fade = () => {
  return crossfade({
    duration: 400,
    fallback(node, params) {
      const style = getComputedStyle(node);
      const transform = style.transform === 'none' ? '' : style.transform;

      return {
        duration: 200,
        easing: quintOut,
        css: (t) => `
                opacity: ${t}
            `,
      };
    },
  });
};
