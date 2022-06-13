import { ref, computed } from "vue";
import { useFieldStore } from "../stores";
import { useBrand, useGetValue } from "./common";

export function useFieldMethods() {
  const root = ref(null);
  const fieldMethods = {
    resetValidation() {
      return root.value.resetValidation();
    },
    validate(val) {
      return root.value.validate(val);
    },
    focus() {
      return root.value.focus();
    },
    blur() {
      return root.value.blur();
    },
  };
  return {
    root,
    methods: fieldMethods,
  };
}

export function useFieldProps({ props, name = "field" }) {
  const { brand } = useBrand({ props, name });

  const store = computed(() => useFieldStore(brand.value));
  const { getValue } = useGetValue({ props, store });

  const fieldProps = {
    autofocus: computed(() => getValue("autofocus")),
    bgColor: computed(() => getValue("bgColor")),
    borderless: computed(() => getValue("borderless")),
    bottomSlots: computed(() => getValue("bottomSlots")),
    clearIcon: computed(() => getValue("clearIcon")),
    clearable: computed(() => getValue("clearable")),
    color: computed(() => getValue("color")),
    counter: computed(() => getValue("counter")),
    dark: computed(() => getValue("dark")),
    dense: computed(() => getValue("dense")),
    disable: computed(() => getValue("disable")),
    error: computed(() => getValue("error")),
    errorMessage: computed(() => getValue("errorMessage")),
    filled: computed(() => getValue("filled")),
    for: computed(() => getValue("for")),
    hideBottomSpace: computed(() => getValue("hideBottomSpace")),
    hideHint: computed(() => getValue("hideHint")),
    hint: computed(() => getValue("hint")),
    itemAligned: computed(() => getValue("itemAligned")),
    label: computed(() => getValue("label")),
    labelColor: computed(() => getValue("labelColor")),
    labelSlot: computed(() => getValue("labelSlot")),
    lazyRules: computed(() => getValue("lazyRules")),
    loading: computed(() => getValue("loading")),
    maxlength: computed(() => getValue("maxlength")),
    noErrorIcon: computed(() => getValue("noErrorIcon")),
    outlined: computed(() => getValue("outlined")),
    prefix: computed(() => getValue("prefix")),
    reactiveRules: computed(() => getValue("reactiveRules")),
    readonly: computed(() => getValue("readonly")),
    rounded: computed(() => getValue("rounded")),
    rules: computed(() => getValue("rules")),
    square: computed(() => getValue("square")),
    stackLabel: computed(() => getValue("stackLabel")),
    standout: computed(() => getValue("standout")),
    suffix: computed(() => getValue("suffix")),
  };
  return {
    props: fieldProps,
  };
}
