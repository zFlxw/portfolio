import type { Language } from '$lib/types/Language';
import { writable, type Writable } from 'svelte/store';

class PreferencesStore {
  constructor(
    public darkmode: Writable<boolean> = writable(false),
    public language: Writable<Language> = writable('en_US'),
  ) { }
}

export const preferencsStore = new PreferencesStore();
