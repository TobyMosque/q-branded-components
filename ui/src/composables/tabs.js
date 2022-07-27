import { ref, computed } from "vue";
import { useTabsStore } from "../stores";
import { useBrand, useGetValue } from "./common";

export function useTabsMethods() {
  const root = ref(null);
  const tabsMethods = {};
  return {
    root,
    methods: tabsMethods,
  };
}

export function useTabsProps({ props, name = "field" }) {
  const { brand } = useBrand({ props, name });

  const store = computed(() => useTabsStore(brand.value));
  const { getValue } = useGetValue({ props, store });

  const tabsProps = {
    activeBgColor: computed(() => getValue("activeBgColor")),
    activeClass: computed(() => getValue("activeClass")),
    activeColor: computed(() => getValue("activeColor")),
    align: computed(() => getValue("align")),
    breakpoint: computed(() => getValue("breakpoint")),
    contentClass: computed(() => getValue("contentClass")),
    dense: computed(() => getValue("dense")),
    indicatorColor: computed(() => getValue("indicatorColor")),
    inlineLabel: computed(() => getValue("inlineLabel")),
    leftIcon: computed(() => getValue("leftIcon")),
    mobileArrows: computed(() => getValue("mobileArrows")),
    narrowIndicator: computed(() => getValue("narrowIndicator")),
    noCaps: computed(() => getValue("noCaps")),
    outsideArrows: computed(() => getValue("outsideArrows")),
    rightIcon: computed(() => getValue("rightIcon")),
    shrink: computed(() => getValue("shrink")),
    stretch: computed(() => getValue("stretch")),
    switchIndicator: computed(() => getValue("switchIndicator")),
    vertical: computed(() => getValue("vertical")),
  };
  return {
    props: tabsProps,
  };
}
