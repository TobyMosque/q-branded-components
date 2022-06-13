import { QDialog } from "quasar";
import { useWrap, useDialogProps, useDialogMethods } from "../composables";
import { PopupProxyCommonProps, MenuCommonProps } from "./common";

export const DialogProps = {
  ...PopupProxyCommonProps,
  ...MenuCommonProps,
};

export default {
  name: "QbDialog",
  props: DialogProps,
  setup(props, { attrs, slots, expose }) {
    return useWrap(QDialog, {
      props,
      attrs,
      slots,
      expose,
      useProps: useDialogProps,
      useMethods: useDialogMethods,
    });
  },
};
