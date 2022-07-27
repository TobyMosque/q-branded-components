import { QTabs } from "quasar";
import {
  NullableBoolean,
  NullableString,
  NullableStringNumber,
} from "../props";

import { useWrap, useTabsProps, useTabsMethods } from "../composables";

const alignValidator = QTabs.props.align.validator;
export const TabsProps = {
  activeBgColor: NullableString,
  activeClass: NullableString,
  activeColor: NullableString,
  align: {
    ...NullableString,
    validator(val) {
      return alignValidator.bind(this)(val);
    },
  },
  brand: {
    type: String,
    default: "default",
  },
  breakpoint: NullableStringNumber,
  contentClass: NullableString,
  dense: NullableBoolean,
  indicatorColor: NullableString,
  inlineLabel: NullableBoolean,
  leftIcon: NullableString,
  mobileArrows: NullableBoolean,
  narrowIndicator: NullableBoolean,
  noCaps: NullableBoolean,
  outsideArrows: NullableBoolean,
  rightIcon: NullableString,
  shrink: NullableBoolean,
  stretch: NullableBoolean,
  switchIndicator: NullableBoolean,
  vertical: NullableBoolean,
};

export default {
  name: "QbTabs",
  props: TabsProps,
  setup(props, { attrs, slots, expose }) {
    return useWrap(QTabs, {
      props,
      attrs,
      slots,
      expose,
      useProps: useTabsProps,
      useMethods: useTabsMethods,
    });
  },
};
