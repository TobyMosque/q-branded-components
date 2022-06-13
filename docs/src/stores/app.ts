import { defineStore } from 'pinia';
import { Cookies, Dark, Quasar } from 'quasar';

export interface AppState {
  locale: string | undefined;
  dark: boolean | undefined;
}

export const appStoreName = 'app';
export const useAppStore = defineStore(appStoreName, {
  state: (): AppState => ({
    locale: undefined,
    dark: undefined,
  }),
  actions: {
    toggleDark() {
      this.dark = !this.dark;
      Dark.set(this.dark);
    },
    async setLocale(val: 'pt-BR' | 'en-US') {
      this.locale = val;
      function getLang() {
        switch (val) {
          case 'pt-BR':
            return import('quasar/lang/pt-BR');
          case 'en-US':
            return import('quasar/lang/en-US');
        }
      }

      const lang = await getLang();
      Quasar.lang.set(lang as never, null);
    },
  },
  persist: Cookies,
});
