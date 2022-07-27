import { QTabPanel } from "quasar";
import {
  NullableBoolean,
  NullableBooleanObject,
  NullableString,
  NullableStringBoolean,
  NullableStringNumber,
} from "../props";

import { useWrap, useTabPanelProps, useTabPanelMethods } from "../composables";

export const TabPanelProps = {
  alert: NullableStringBoolean,
  alertIcon: NullableString,
  brand: {
    type: String,
    default: "default",
  },
  contentClass: NullableString,
  disable: NullableBoolean,
  icon: NullableString,
  label: NullableStringNumber,
  name: NullableStringNumber,
  noCaps: NullableBoolean,
  ripple: NullableBooleanObject,
  tabindex: NullableStringNumber,
};

export default {
  name: "QbTabPanel",
  props: TabPanelProps,
  setup(props, { attrs, slots, expose }) {
    return useWrap(QTabPanel, {
      props,
      attrs,
      slots,
      expose,
      useProps: useTabPanelProps,
      useMethods: useTabPanelMethods,
    });
  },
};
