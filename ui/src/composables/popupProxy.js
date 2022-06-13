import {
  usePopupProxyCommonMethods,
  useDialogCommonMethods,
  useMenuCommonMethods,
  usePopupProxyCommonProps,
  useDialogCommonProps,
  useMenuCommonProps,
} from "./common";

export function usePopupProxyMethods() {
  const { root, methods: commonMethods } = usePopupProxyCommonMethods();
  const { methods: dialogMethods } = useDialogCommonMethods({ root });
  const { methods: menuMethods } = useMenuCommonMethods({ root });

  const proxyMethods = {
    ...commonMethods,
    ...dialogMethods,
    ...menuMethods,
  };
  return {
    root,
    methods: proxyMethods,
  };
}

export function usePopupProxyProps({ props, name = "popupProxy" }) {
  const { brand } = useBrand({ props, name });
  const { props: commonProps } = usePopupProxyCommonProps({ props, name });
  const { props: dialogProps } = useDialogCommonProps({ props, name });
  const { props: menuProps } = useMenuCommonProps({ props, name });

  const store = computed(() => useSelectStore(brand.value));
  const { getValue } = useGetValue({ props, store });

  const popupProxyProps = {
    ...commonProps,
    ...dialogProps,
    ...menuProps,
    breakpoint: computed(() => getValue("breakpoint")),
  };

  return {
    props: popupProxyProps,
  };
}
