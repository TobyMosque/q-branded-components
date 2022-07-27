import { RouteLocationNormalized } from 'vue-router';
import { updateRouteOptions } from './route';

const locales = ['en-us', 'pt-br'];
const regions = {
  en: 'en-us',
  pt: 'pt-br',
};
export function detectLocale (langs: string[]) {
  for (const lang in langs) {
    const locale = lang.toLowerCase();
    if (locales.includes(locale)) {
      return locale;
    }
    if (lang in regions) {
      return regions[lang as never];
    }
  }
  return regions.en;
};

export function getRouteOptions (langs: string[], to: RouteLocationNormalized) {
  // eslint-disable-next-line prefer-const
  return updateRouteOptions({
    to,
    params: {
      lang: detectLocale(langs)
    }
  });
}