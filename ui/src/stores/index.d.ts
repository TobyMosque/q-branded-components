import { ToRefs } from 'vue'
export type RuleFn = (val: unknown) => String | Boolean

export interface FieldProps {
  autofocus: Boolean
  bgColor: String
  borderless: Boolean
  bottomSlots: Boolean
  clearIcon: String
  clearable: Boolean
  color: String
  counter: Boolean
  dark: Boolean
  dense: Boolean
  disable: Boolean
  error: Boolean
  errorMessage: String
  filled: Boolean
  for: String
  hideBottomSpace: Boolean
  hideHint: Boolean
  hint: String
  itemAligned: Boolean
  label: String
  labelColor: String
  labelSlot: Boolean
  lazyRules: String | Boolean
  loading: Boolean
  maxlength: String | Number
  noErrorIcon: Boolean
  outlined: Boolean
  prefix: String
  reactiveRules: Boolean
  readonly: Boolean
  rounded: Boolean
  rules: RuleFn[]
  square: Boolean
  stackLabel: Boolean
  standout: String | Boolean
  suffix: String
}

export interface InputCommonProps extends FieldProps {
  inputClass: Record<string, boolean> | String[] | String
  inputStyle: Record<string, boolean> | String[] | String
  name: String
}

export interface InputProps extends InputCommonProps {
  autogrow: Boolean
  debounce: String | Number
  fillMask: String | Boolean
  mask: String
  reverseFillMask: Boolean
  shadowText: String
  type: String
  unmaskedValue: Boolean
}

export interface PopupCommonProps {
  transitionDuration: String | Number
  transitionHide: String
  transitionShow: String
}

export interface SelectProps extends InputCommonProps, PopupCommonProps {
  autocomplete: String
  behavior: String
  displayValue: String | Number
  displayValueHtml: Boolean
  dropdownIcon: String
  emitValue: Boolean
  fillInput: Boolean
  hideDropdownIcon: Boolean
  hideSelected: Boolean
  inputDebounce: String | Number
  mapOptions: Boolean
  maxValues: String | Number
  menuAnchor: String
  menuOffset: Number[]
  menuSelf: String
  menuShrink: Boolean
  multiple: Boolean
  newValueMode: 'add' | 'add-unique' | 'toggle' | undefined | null
  optionDisable: String | (() => String)
  optionLabel: String | (() => String)
  optionValue: String | (() => String)
  options: Array
  optionsCover: Boolean
  optionsDark: Boolean
  optionsDense: Boolean
  optionsHtml: Boolean
  optionsSelectedClass: String
  popupContentClass: Record<string, boolean> | String[] | String
  popupContentStyle: Record<string, boolean> | String[] | String
  tabindex: String | Number
  tableColspan: String | Number
  useChips: Boolean
  useInput: Boolean
  virtualScrollHorizontal: Boolean
  virtualScrollItemSize: String | Number
  virtualScrollSliceRatioAfter: String | Number
  virtualScrollSliceRatioBefore: String | Number
  virtualScrollSliceSize: String | Number
  virtualScrollStickySizeEnd: String | Number
  virtualScrollStickySizeStart: String | Number
}

export interface BrandState {
  field: String
  input: String
  select: String
}

export type BrandStateRefs = ToRefs<BrandState>
export function useBrandStore (): BrandStateRefs;
export type UseBrandStore = typeof useBrandStore;

export type QTmInputCommonRefs = ToRefs<InputCommonProps>
export function useInputCommonStore (context: string = 'default'): QTmInputCommonRefs;
export type UseInputCommonStore = typeof useInputCommonStore;

export type QTmPopupCommonRefs = ToRefs<PopupCommonProps>
export function usePopupCommonStore (context: string = 'default'): QTmPopupCommonRefs;
export type UsePopupCommonStore = typeof usePopupCommonStore;

export type QTmFieldRefs = ToRefs<FieldProps>
export function useFieldStore (context: string = 'default'): QTmFieldRefs;
export type UseFieldStore = typeof useFieldStore;

export type QTmInputRefs = ToRefs<InputProps>
export function useInputStore (context: string = 'default'): ToRefs<InputProps>;
export type UseInputStore = typeof useInputStore;

export type QTmSelectRefs = ToRefs<SelectProps>
export function useSelectStore (context: string = 'default'): ToRefs<InputProps>;
export type UseSelectStore = typeof useSelectStore;