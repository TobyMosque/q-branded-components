import {
  usePopupProxyCommonMethods,
  useMenuCommonMethods,
  usePopupProxyCommonProps,
  useMenuCommonProps,
} from "./common";

export function useMenuMethods() {
  const { root, methods: commonMethods } = usePopupProxyCommonMethods();
  const { methods: menuMethods } = useMenuCommonMethods({ root });
  return {
    root,
    methods: {
      ...commonMethods,
      ...menuMethods,
    },
  };
}

export function useMenuProps({ props, name = "menu" }) {
  const { props: commonProps } = usePopupProxyCommonProps({ props, name });
  const { props: menuProps } = useMenuCommonProps({ props, name });

  const selectProps = {
    ...commonProps,
    ...menuProps,
  };
  return {
    props: selectProps,
  };
}
