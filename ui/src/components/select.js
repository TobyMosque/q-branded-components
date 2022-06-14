import { QSelect } from "quasar";
import { useWrap, useSelectProps, useSelectMethods } from "../composables";
import { FieldProps } from "./field";
import { PopupCommonProps } from "./common";
import {
  NullableArray,
  NullableString,
  NullableBoolean,
  NullableStringNumber,
  NullableStringFunction,
  NullableStyle,
} from "../props";

export const SelectProps = {
  ...FieldProps,
  ...PopupCommonProps,
  autocomplete: NullableString,
  behavior: NullableString,
  displayValue: NullableStringNumber,
  displayValueHtml: NullableBoolean,
  dropdownIcon: NullableString,
  emitValue: NullableBoolean,
  fillInput: NullableBoolean,
  hideDropdownIcon: NullableBoolean,
  hideSelected: NullableBoolean,
  inputDebounce: NullableStringNumber,
  mapOptions: NullableBoolean,
  maxValues: NullableStringNumber,
  menuAnchor: NullableString,
  menuOffset: NullableArray,
  menuSelf: NullableString,
  menuShrink: NullableBoolean,
  multiple: NullableBoolean,
  newValueMode: NullableString,
  optionDisable: NullableStringNumber,
  optionLabel: NullableStringFunction,
  optionValue: NullableStringFunction,
  options: NullableArray,
  optionsCover: NullableBoolean,
  optionsDark: NullableBoolean,
  optionsDense: NullableBoolean,
  optionsHtml: NullableBoolean,
  optionsSelectedClass: NullableString,
  popupContentClass: NullableStyle,
  popupContentStyle: NullableStyle,
  tabindex: NullableStringNumber,
  tableColspan: NullableStringNumber,
  useChips: NullableBoolean,
  useInput: NullableBoolean,
  virtualScrollHorizontal: NullableBoolean,
  virtualScrollItemSize: NullableStringNumber,
  virtualScrollSliceRatioAfter: NullableStringNumber,
  virtualScrollSliceRatioBefore: NullableStringNumber,
  virtualScrollSliceSize: NullableStringNumber,
  virtualScrollStickySizeEnd: NullableStringNumber,
  virtualScrollStickySizeStart: NullableStringNumber,
};

export default {
  name: "QbSelect",
  props: SelectProps,
  setup(props, { attrs, slots, expose }) {
    return useWrap(QSelect, {
      props,
      attrs,
      slots,
      expose,
      useProps: useSelectProps,
      useMethods: useSelectMethods,
    });
  },
};
