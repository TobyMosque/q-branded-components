import { ref, computed } from "vue";
import { useTabStore } from "../stores";
import { useBrand, useGetValue } from "./common";

export function useTabMethods() {
  const root = ref(null);
  const tabMethods = {};
  return {
    root,
    methods: tabMethods,
  };
}

export function useTabProps({ props, name = "field" }) {
  const { brand } = useBrand({ props, name });

  const store = computed(() => useTabStore(brand.value));
  const { getValue } = useGetValue({ props, store });

  const tabProps = {
    alert: computed(() => getValue("alert")),
    alertIcon: computed(() => getValue("alertIcon")),
    contentClass: computed(() => getValue("contentClass")),
    disable: computed(() => getValue("disable")),
    icon: computed(() => getValue("icon")),
    label: computed(() => getValue("label")),
    name: computed(() => getValue("name")),
    noCaps: computed(() => getValue("noCaps")),
    ripple: computed(() => getValue("ripple")),
    tabindex: computed(() => getValue("tabindex")),
  };
  return {
    props: tabProps,
  };
}
