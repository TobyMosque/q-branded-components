import { QPopupProxy } from "quasar";
import {
  useWrap,
  usePopupProxyProps,
  usePopupProxyMethods,
} from "../composables";
import {
  PopupProxyCommonProps,
  MenuCommonProps,
  DialogCommonProps,
} from "./common";

export const PopupProxyProps = {
  ...PopupProxyCommonProps,
  ...DialogCommonProps,
  ...MenuCommonProps,
};

export default {
  name: "QbPopupProxy",
  props: PopupProxyProps,
  setup(props, { attrs, slots, expose }) {
    return useWrap(QPopupProxy, {
      props,
      attrs,
      slots,
      expose,
      useProps: usePopupProxyProps,
      useMethods: usePopupProxyMethods,
    });
  },
};
