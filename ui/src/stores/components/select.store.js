import { toRefs, reactive } from "vue";
import { useInputCommonStore, usePopupCommonStore } from "./common.store";

/**
 *
 * @returns {import("../index").SelectProps}
 */
function getDefaultState() {
  return {
    autocomplete: undefined,
    behavior: "default",
    displayValue: undefined,
    displayValueHtml: false,
    dropdownIcon: undefined,
    emitValue: false,
    fillInput: false,
    hideDropdownIcon: false,
    hideSelected: false,
    inputDebounce: 500,
    mapOptions: false,
    maxValues: undefined,
    menuAnchor: undefined,
    menuOffset: undefined,
    menuSelf: undefined,
    menuShrink: false,
    multiple: false,
    newValueMode: undefined,
    optionDisable: undefined,
    optionLabel: undefined,
    optionValue: undefined,
    options: [],
    optionsCover: false,
    optionsDark: null,
    optionsDense: false,
    optionsHtml: false,
    optionsSelectedClass: undefined,
    popupContentClass: undefined,
    popupContentStyle: undefined,
    tabindex: 0,
    tableColspan: undefined,
    transitionDuration: undefined,
    transitionHide: undefined,
    transitionShow: undefined,
    useChips: false,
    useInput: false,
    virtualScrollHorizontal: false,
    virtualScrollItemSize: undefined,
    virtualScrollSliceRatioAfter: 1,
    virtualScrollSliceRatioBefore: 1,
    virtualScrollSliceSize: null,
    virtualScrollStickySizeEnd: 0,
    virtualScrollStickySizeStart: 0,
  };
}

const states = new Map();
/**
 * @type {import('../index').UseSelectStore}
 */
export function useSelectStore(context = "default") {
  const inputState = useInputCommonStore();
  const popupState = usePopupCommonStore();
  if (!states.has(context)) {
    states.set(context, toRefs(reactive(getDefaultState())));
  }
  const selectRefs = states.get(context);
  return {
    ...inputState,
    ...popupState,
    ...selectRefs,
  };
}
