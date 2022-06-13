import { computed } from "vue";
import { useFieldProps, useFieldMethods } from "./field";
import { useInputStore } from "../stores";
import { useBrand, useGetValue } from "./common";

export function useInputMethods() {
  const { root, methods: fieldMethods } = useFieldMethods();
  const inputMethods = {
    ...fieldMethods,
    select() {
      return root.value.select();
    },
    getNativeElement() {
      return root.value.getNativeElement();
    },
  };
  return {
    root,
    methods: inputMethods,
  };
}

export function useInputProps({ props, name = "input" }) {
  const { props: fieldProps } = useFieldProps({ props, name });
  const { brand } = useBrand({ props, name });

  const store = computed(() => useInputStore(brand.value));
  const { getValue } = useGetValue({ props, store });

  const inputProps = {
    ...fieldProps,
    autogrow: computed(() => getValue("autogrow")),
    debounce: computed(() => getValue("debounce")),
    fillMask: computed(() => getValue("fillMask")),
    inputClass: computed(() => getValue("inputClass")),
    inputStyle: computed(() => getValue("inputStyle")),
    mask: computed(() => getValue("mask")),
    name: computed(() => getValue("name")),
    reverseFillMask: computed(() => getValue("reverseFillMask")),
    shadowText: computed(() => getValue("shadowText")),
    type: computed(() => getValue("type")),
    unmaskedValue: computed(() => getValue("unmaskedValue")),
  };

  console.log('input', {
    name,
    brand: brand.value,
    store: store.value.outlined.value,
    props: props.outlined,
    inputProps: inputProps.outlined.value
  })
  return {
    props: inputProps,
  };
}
