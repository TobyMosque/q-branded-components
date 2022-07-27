import { ref, computed } from "vue";
import { useTabPanelsStore } from "../stores";
import { useBrand, useGetValue } from "./common";

export function useTabPanelsMethods() {
  const root = ref(null);
  const tabPanelsMethods = {
    goToPanel (name) {
      return root.value.goToPanel(name);
    },
    nextPanel () {
      return root.value.nextPanel();
    },
    previousPanel () {
      return root.value.previousPanel();
    },
  };
  return {
    root,
    methods: tabPanelsMethods,
  };
}

export function useTabPanelsProps({ props, name = "field" }) {
  const { brand } = useBrand({ props, name });

  const store = computed(() => useTabPanelsStore(brand.value));
  const { getValue } = useGetValue({ props, store });

  const tabPanelsProps = {
    animated: computed(() => getValue("animated")),
    dark: computed(() => getValue("dark")),
    infinite: computed(() => getValue("infinite")),
    keepAlive: computed(() => getValue("keepAlive")),
    keepAliveExclude: computed(() => getValue("keepAliveExclude")),
    keepAliveInclude: computed(() => getValue("keepAliveInclude")),
    keepAliveMax: computed(() => getValue("keepAliveMax")),
    swipeable: computed(() => getValue("swipeable")),
    transitionDuration: computed(() => getValue("transitionDuration")),
    transitionNext: computed(() => getValue("transitionNext")),
    transitionPrev: computed(() => getValue("transitionPrev")),
    vertical: computed(() => getValue("vertical")),
  };
  return {
    props: tabPanelsProps,
  };
}
