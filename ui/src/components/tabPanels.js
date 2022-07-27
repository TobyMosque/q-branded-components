import { QTabPanels } from "quasar";
import {
  NullableBoolean,
  NullableNumber,
  NullableString,
  NullableStringNumber,
  NullableStringRegexp,
} from "../props";

import { useWrap, useTabPanelsProps, useTabPanelsMethods } from "../composables";

export const TabPanelsProps = {
  animated: NullableBoolean,
  brand: {
    type: String,
    default: "default",
  },
  dark: NullableBoolean,
  infinite: NullableBoolean,
  keepAlive: NullableBoolean,
  keepAliveExclude: NullableStringRegexp,
  keepAliveInclude: NullableStringRegexp,
  keepAliveMax: NullableNumber,
  swipeable: NullableBoolean,
  transitionDuration: NullableStringNumber,
  transitionNext: NullableString,
  transitionPrev: NullableString,
  vertical: NullableBoolean,
};

export default {
  name: "QbTabPanels",
  props: TabPanelsProps,
  setup(props, { attrs, slots, expose }) {
    return useWrap(QTabPanels, {
      props,
      attrs,
      slots,
      expose,
      useProps: useTabPanelsProps,
      useMethods: useTabPanelsMethods,
    });
  },
};
