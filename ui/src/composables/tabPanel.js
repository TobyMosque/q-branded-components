import { ref, computed } from "vue";
import { useTabPanelStore } from "../stores";
import { useBrand, useGetValue } from "./common";

export function useTabPanelMethods() {
  const root = ref(null);
  const tabPanelMethods = {};
  return {
    root,
    methods: tabPanelMethods,
  };
}

export function useTabPanelProps({ props, name = "field" }) {
  const { brand } = useBrand({ props, name });

  const store = computed(() => useTabPanelStore(brand.value));
  const { getValue } = useGetValue({ props, store });

  const tabPanelProps = {
    disable: computed(() => getValue("disable")),
    name: computed(() => getValue("name")),
  };
  return {
    props: tabPanelProps,
  };
}
