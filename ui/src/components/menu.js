import { QMenu } from "quasar";
import { useWrap, useMenuProps, useMenuMethods } from "../composables";
import { PopupProxyCommonProps, MenuCommonProps } from "./common";

export const MenuProps = {
  ...PopupProxyCommonProps,
  ...MenuCommonProps,
};

export default {
  name: "QbMenu",
  props: MenuProps,
  setup(props, { attrs, slots, expose }) {
    return useWrap(QMenu, {
      props,
      attrs,
      slots,
      expose,
      useProps: useMenuProps,
      useMethods: useMenuMethods,
    });
  },
};
