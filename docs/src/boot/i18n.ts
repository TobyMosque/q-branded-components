import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';
import { Quasar } from 'quasar';
import messages from 'src/i18n';
import { getRouteOptions } from 'src/utils/locale';

export type I18nGlobal = ReturnType<typeof configureI18n>['global'];
declare module 'pinia' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  interface PiniaCustomProperties {
    $t: I18nGlobal['t'];
    // $tc: I18nGlobal['tc'];
    $te: I18nGlobal['te'];
    $tm: I18nGlobal['tm'];
    $n: I18nGlobal['n'];
    $d: I18nGlobal['d'];
  }
}

function configureI18n({ lang = '' } = {}) {
  switch (lang) {
    case 'pt-br': lang = 'pt-BR'; break;
    case 'en-us': lang = 'en-US'; break;
  }
  return createI18n({
    locale: lang || Quasar.lang.isoName,
    globalInjection: true,
    messages,
  });
}

export default boot(({ app, store, router, ssrContext, redirect }) => {
  let langs: string[] = []
  if (process.env.SERVER) {
    if (ssrContext) {
      const header = ssrContext.req.headers['accept-language'] || ''
      langs = header.split(',').map(lang => {
        const [code, priority] = lang.split(';')
        return { code, priority: priority ? parseFloat(priority.replace('q=', '')) : 1}
      }).sort((a, b) => b.priority - a.priority).map(lang => lang.code);
  
      const route = router.resolve({ path: ssrContext.req.path, query: ssrContext.req.query as never });
      if (!route.params.lang) {
        const options = getRouteOptions(langs, route);
        return redirect(options);
      }
    }
  }
  if (process.env.CLIENT) {
    langs = [...navigator.languages]
  }
  
  const route = router.currentRoute.value;
  const i18n = configureI18n({ lang: route.params.lang as string });
  // Set i18n instance on app
  app.use(i18n);
  store.use(() => ({
    $t: i18n.global.t.bind(i18n.global),
    $te: i18n.global.te.bind(i18n.global),
    $tm: i18n.global.tm.bind(i18n.global),
    $n: i18n.global.n.bind(i18n.global),
    $d: i18n.global.d.bind(i18n.global),
  }));

  router.beforeEach(to => {
    if (!to.params.lang) {
      return getRouteOptions(langs, to);
    }
  })
});
