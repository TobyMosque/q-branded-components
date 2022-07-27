import { defineStore } from 'pinia';
import { Cookies, Dark, Quasar } from 'quasar';
import { getRouteOptions } from 'src/utils/locale';
import { RouteLocationNormalized } from 'vue-router';

export interface AppState {
  dark: boolean | undefined;
}

export const appStoreName = 'app';
export const useAppStore = defineStore(appStoreName, {
  state: (): AppState => ({
    dark: undefined,
  }),
  getters: {
    route (): RouteLocationNormalized {
      return this.router.currentRoute.value;
    },
    locale () {
      switch (this.route.params.lang) {
        case 'pt-br': return 'pt-BR';
        case 'en-us': return 'en-US';
      }
      return '';
    },
  },
  actions: {
    toggleDark() {
      this.dark = !this.dark;
      Dark.set(this.dark);
    },
    async setLocale(val: 'pt-BR' | 'en-US') {
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

      const options = getRouteOptions([val], this.route)
      // const resolve = router.resolve(options as never)
      this.router.replace(options as never)
    },
  },
  persist: Cookies,
});
