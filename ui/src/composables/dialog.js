import {
  usePopupProxyCommonMethods,
  useDialogCommonMethods,
  usePopupProxyCommonProps,
  useDialogCommonProps,
} from "./common";

export function useDialogMethods() {
  const { root, methods: commonMethods } = usePopupProxyCommonMethods();
  const { methods: dialogMethods } = useDialogCommonMethods({ root });
  return {
    root,
    methods: {
      ...commonMethods,
      ...dialogMethods,
    },
  };
}

export function useDialogProps({ props, name = "dialog" }) {
  const { props: commonProps } = usePopupProxyCommonProps({ props, name });
  const { props: dialogProps } = useDialogCommonProps({ props, name });

  const selectProps = {
    ...commonProps,
    ...dialogProps,
  };
  return {
    props: selectProps,
  };
}
