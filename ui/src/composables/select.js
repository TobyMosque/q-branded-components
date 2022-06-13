import { computed } from "vue";
import { useFieldProps, useFieldMethods } from "./field";
import { useSelectStore } from "../stores";
import { useBrand } from "../composables";
import { useGetValue } from "./common";

export function useSelectMethods() {
  const { root, methods: fieldMethods } = useFieldMethods();
  const selectMethods = {
    ...fieldMethods,
    scrollTo(index, edge) {
      return root.value.scrollTo(index, edge);
    },
    refresh(index) {
      return root.value.refresh(index);
    },
    showPopup() {
      return root.value.showPopup();
    },
    hidePopup() {
      return root.value.hidePopup();
    },
    removeAtIndex(index) {
      return root.value.removeAtIndex(index);
    },
    add(opt, unique) {
      return root.value.add(opt, unique);
    },
    toggleOption(opt, keepOpen) {
      return root.value.toggleOption(opt, keepOpen);
    },
    getOptionIndex() {
      return root.value.getOptionIndex();
    },
    setOptionIndex(index) {
      return root.value.setOptionIndex(index);
    },
    moveOptionSelection(offset, skipInputValue) {
      return root.value.moveOptionSelection(offset, skipInputValue);
    },
    filter(value) {
      return root.value.filter(value);
    },
    updateMenuPosition() {
      return root.value.updateMenuPosition();
    },
    updateInputValue(value, noFilter) {
      return root.value.updateInputValue(value, noFilter);
    },
    isOptionSelected(opt) {
      return root.value.isOptionSelected(opt);
    },
    getEmittingOptionValue(opt) {
      return root.value.getEmittingOptionValue(opt);
    },
    getOptionValue(opt) {
      return root.value.getOptionValue(opt);
    },
    getOptionLabel(opt) {
      return root.value.getOptionLabel(opt);
    },
    isOptionDisabled(opt) {
      return root.value.isOptionDisabled(opt);
    },
  };
  return {
    root,
    methods: selectMethods,
  };
}

export function useSelectProps({ props, name = "select" }) {
  const { props: fieldProps } = useFieldProps({ props, name });
  const { brand } = useBrand({ props, name });

  const store = computed(() => useSelectStore(brand.value));
  const { getValue } = useGetValue({ props, store });

  const selectProps = {
    ...fieldProps,
    autocomplete: computed(() => getValue("autocomplete")),
    behavior: computed(() => getValue("behavior")),
    displayValue: computed(() => getValue("displayValue")),
    displayValueHtml: computed(() => getValue("displayValueHtml")),
    dropdownIcon: computed(() => getValue("dropdownIcon")),
    emitValue: computed(() => getValue("emitValue")),
    fillInput: computed(() => getValue("fillInput")),
    hideDropdownIcon: computed(() => getValue("hideDropdownIcon")),
    hideSelected: computed(() => getValue("hideSelected")),
    inputClass: computed(() => getValue("inputClass")),
    inputDebounce: computed(() => getValue("inputDebounce")),
    inputStyle: computed(() => getValue("inputStyle")),
    mapOptions: computed(() => getValue("mapOptions")),
    maxValues: computed(() => getValue("maxValues")),
    menuAnchor: computed(() => getValue("menuAnchor")),
    menuOffset: computed(() => getValue("menuOffset")),
    menuSelf: computed(() => getValue("menuSelf")),
    menuShrink: computed(() => getValue("menuShrink")),
    multiple: computed(() => getValue("multiple")),
    name: computed(() => getValue("name")),
    newValueMode: computed(() => getValue("newValueMode")),
    optionDisable: computed(() => getValue("optionDisable")),
    optionLabel: computed(() => getValue("optionLabel")),
    optionValue: computed(() => getValue("optionValue")),
    options: computed(() => getValue("options")),
    optionsCover: computed(() => getValue("optionsCover")),
    optionsDark: computed(() => getValue("optionsDark")),
    optionsDense: computed(() => getValue("optionsDense")),
    optionsHtml: computed(() => getValue("optionsHtml")),
    optionsSelectedClass: computed(() => getValue("optionsSelectedClass")),
    popupContentClass: computed(() => getValue("popupContentClass")),
    popupContentStyle: computed(() => getValue("popupContentStyle")),
    tabindex: computed(() => getValue("tabindex")),
    tableColspan: computed(() => getValue("tableColspan")),
    transitionDuration: computed(() => getValue("transitionDuration")),
    transitionHide: computed(() => getValue("transitionHide")),
    transitionShow: computed(() => getValue("transitionShow")),
    useChips: computed(() => getValue("useChips")),
    useInput: computed(() => getValue("useInput")),
    virtualScrollHorizontal: computed(() =>
      getValue("virtualScrollHorizontal")
    ),
    virtualScrollItemSize: computed(() => getValue("virtualScrollItemSize")),
    virtualScrollSliceRatioAfter: computed(() =>
      getValue("virtualScrollSliceRatioAfter")
    ),
    virtualScrollSliceRatioBefore: computed(() =>
      getValue("virtualScrollSliceRatioBefore")
    ),
    virtualScrollSliceSize: computed(() => getValue("virtualScrollSliceSize")),
    virtualScrollStickySizeEnd: computed(() =>
      getValue("virtualScrollStickySizeEnd")
    ),
    virtualScrollStickySizeStart: computed(() =>
      getValue("virtualScrollStickySizeStart")
    ),
  };
  return {
    props: selectProps,
  };
}
