import { QTab } from "quasar";
import {
  NullableBoolean,
  NullableBooleanObject,
  NullableString,
  NullableStringBoolean,
  NullableStringNumber,
} from "../props";

import { useWrap, useTabProps, useTabMethods } from "../composables";

export const TabProps = {
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
  name: "QbTab",
  props: TabProps,
  setup(props, { attrs, slots, expose }) {
    return useWrap(QTab, {
      props,
      attrs,
      slots,
      expose,
      useProps: useTabProps,
      useMethods: useTabMethods,
    });
  },
};
