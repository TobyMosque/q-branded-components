import { h, computed } from "vue";
import { useBrandStore } from "../stores";
import {
  useDialogCommonStore,
  useMenuCommonStore,
  usePopupCommonStore,
  usePopupProxyCommonStore,
} from "../stores/components/common.store";

export function mergeProps({ root, attrs, props }) {
  const _props = Object.assign({ ref: root }, attrs);
  for (const key in props) {
    _props[key] = props[key].value;
  }
  return _props;
}

export function useGetValue({ props, store }) {
  function getValue(field) {
    if (field === 'outlined') {
      console.log({
        props: props[field],
        store: store.value[field].value
      })
    }
    return props[field] === undefined ? store.value[field].value : props[field];
  }
  return {
    getValue,
  };
}

export function useWrap(
  Component,
  { props, attrs, slots, expose, useProps, useMethods }
) {
  const { props: computedProps } = useProps({ props });
  const { root, methods } = useMethods();
  expose({ $refs: { root }, ...methods });
  return () => {
    const _props = mergeProps({ root, attrs, props: computedProps });
    return h(Component, _props, slots);
  };
}

export function useBrand({ name, props }) {
  const brandStore = useBrandStore();
  const brand = computed(() =>
    props.brand !== undefined
      ? props.brand
      : brandStore[name].value !== undefined
      ? brandStore[name].value
      : brandStore.global.value
  );
  return {
    brand,
  };
}

export function usePopupCommonProps({ props, name }) {
  const { brand } = useBrand({ props, name });

  const store = computed(() => usePopupCommonStore(brand.value));
  const { getValue } = useGetValue({ props, store });

  const popupProps = {
    transitionDuration: computed(() => getValue("transitionDuration")),
    transitionHide: computed(() => getValue("transitionHide")),
    transitionShow: computed(() => getValue("transitionShow")),
  };
  return {
    props: popupProps,
  };
}

export function usePopupProxyCommonProps({ props, name }) {
  const { props: popupProps } = usePopupCommonProps({ props, name });
  const { brand } = useBrand({ props, name });

  const store = computed(() => usePopupProxyCommonStore(brand.value));
  const { getValue } = useGetValue({ props, store });

  const popupProxyProps = {
    ...popupProps,
    autoClose: computed(() => getValue("autoClose")),
    noFocus: computed(() => getValue("noFocus")),
    noRefocus: computed(() => getValue("noRefocus")),
    noRouteDismiss: computed(() => getValue("noRouteDismiss")),
    persistent: computed(() => getValue("persistent")),
    square: computed(() => getValue("square")),
  };
  return {
    props: popupProxyProps,
  };
}

export function useMenuCommonProps({ props, name }) {
  const { brand } = useBrand({ props, name });

  const store = computed(() => useMenuCommonStore(brand.value));
  const { getValue } = useGetValue({ props, store });

  const menuProps = {
    anchor: computed(() => getValue("anchor")),
    contextMenu: computed(() => getValue("contextMenu")),
    cover: computed(() => getValue("cover")),
    dark: computed(() => getValue("dark")),
    fit: computed(() => getValue("fit")),
    maxHeight: computed(() => getValue("maxHeight")),
    maxWidth: computed(() => getValue("maxWidth")),
    noParentEvent: computed(() => getValue("noParentEvent")),
    offset: computed(() => getValue("offset")),
    scrollTarget: computed(() => getValue("scrollTarget")),
    self: computed(() => getValue("self")),
    separateClosePopup: computed(() => getValue("separateClosePopup")),
    target: computed(() => getValue("target")),
    touchPosition: computed(() => getValue("touchPosition")),
  };
  return {
    props: menuProps,
  };
}

export function useDialogCommonProps({ props, name }) {
  const { brand } = useBrand({ props, name });

  const store = computed(() => useDialogCommonStore(brand.value));
  const { getValue } = useGetValue({ props, store });

  const dialogProps = {
    fullHeight: computed(() => getValue("fullHeight")),
    fullWidth: computed(() => getValue("fullWidth")),
    maximized: computed(() => getValue("maximized")),
    noBackdropDismiss: computed(() => getValue("noBackdropDismiss")),
    noEscDismiss: computed(() => getValue("noEscDismiss")),
    noShake: computed(() => getValue("noShake")),
    position: computed(() => getValue("position")),
    seamless: computed(() => getValue("seamless")),
  };
  return {
    props: dialogProps,
  };
}

export function usePopupProxyCommonMethods() {
  const root = ref(null);
  const popupProxyMethods = {
    show(evt) {
      return root.value.show(evt);
    },
    hide(evt) {
      return root.value.hide(evt);
    },
    toggle(evt) {
      return root.value.toggle(evt);
    },
    updatePosition() {
      return root.value.updatePosition();
    },
    focus() {
      return root.value.focus(index);
    },
  };
  return {
    root,
    methods: popupProxyMethods,
  };
}

export function useMenuCommonMethods({ root }) {
  const menuMethods = {
    updatePosition() {
      return root.value.updatePosition();
    },
  };
  return {
    methods: menuMethods,
  };
}

export function useDialogCommonMethods({ root }) {
  const dialogMethods = {
    shake() {
      return root.value.shake();
    },
  };
  return {
    methods: dialogMethods,
  };
}
