import { boot } from 'quasar/wrappers';
import { useAppStore } from 'src/stores/app';
import { Dark } from 'quasar';
import { storeToRefs } from 'pinia';

const regions = {
  en: 'en-us',
  pt: 'pt-br',
};
const detectLocale = function () {
  const locales = Object.values(regions);
  const locale = navigator.language.toLowerCase();
  if (locales.includes(locale)) {
    return locale;
  }
  const region = locale.split('-')[0] as keyof typeof regions;
  if (region in regions) {
    return regions[region];
  }
  return regions.en;
};

export default boot(({ store }) => {
  const appStore = useAppStore(store);
  const { dark, locale } = storeToRefs(appStore);
  if (dark.value === undefined) {
    dark.value = Dark.isActive;
  } else {
    Dark.set(dark.value);
  }

  if (locale.value === 'undefined') {
    locale.value = detectLocale();
  }
});
