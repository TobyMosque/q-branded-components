import { ToRefs } from "vue";
export type RuleFn = (val: unknown) => String | Boolean;

export interface FieldProps {
  autofocus: Boolean;
  bgColor: String;
  borderless: Boolean;
  bottomSlots: Boolean;
  clearIcon: String;
  clearable: Boolean;
  color: String;
  counter: Boolean;
  dark: Boolean;
  dense: Boolean;
  disable: Boolean;
  error: Boolean;
  errorMessage: String;
  filled: Boolean;
  for: String;
  hideBottomSpace: Boolean;
  hideHint: Boolean;
  hint: String;
  itemAligned: Boolean;
  label: String;
  labelColor: String;
  labelSlot: Boolean;
  lazyRules: String | Boolean;
  loading: Boolean;
  maxlength: String | Number;
  noErrorIcon: Boolean;
  outlined: Boolean;
  prefix: String;
  reactiveRules: Boolean;
  readonly: Boolean;
  rounded: Boolean;
  rules: RuleFn[];
  square: Boolean;
  stackLabel: Boolean;
  standout: String | Boolean;
  suffix: String;
}

export interface InputCommonProps extends FieldProps {
  inputClass: Record<string, boolean> | String[] | String;
  inputStyle: Record<string, boolean> | String[] | String;
  name: String;
}

export interface InputProps extends InputCommonProps {
  autogrow: Boolean;
  debounce: String | Number;
  fillMask: String | Boolean;
  mask: String;
  reverseFillMask: Boolean;
  shadowText: String;
  type: String;
  unmaskedValue: Boolean;
}

export interface PopupCommonProps {
  transitionDuration: String | Number;
  transitionHide: String;
  transitionShow: String;
}

export interface SelectProps extends InputCommonProps, PopupCommonProps {
  autocomplete: String;
  behavior: String;
  displayValue: String | Number;
  displayValueHtml: Boolean;
  dropdownIcon: String;
  emitValue: Boolean;
  fillInput: Boolean;
  hideDropdownIcon: Boolean;
  hideSelected: Boolean;
  inputDebounce: String | Number;
  mapOptions: Boolean;
  maxValues: String | Number;
  menuAnchor: String;
  menuOffset: Number[];
  menuSelf: String;
  menuShrink: Boolean;
  multiple: Boolean;
  newValueMode: "add" | "add-unique" | "toggle" | undefined | null;
  optionDisable: String | (() => String);
  optionLabel: String | (() => String);
  optionValue: String | (() => String);
  options: Array;
  optionsCover: Boolean;
  optionsDark: Boolean;
  optionsDense: Boolean;
  optionsHtml: Boolean;
  optionsSelectedClass: String;
  popupContentClass: Record<string, boolean> | String[] | String;
  popupContentStyle: Record<string, boolean> | String[] | String;
  tabindex: String | Number;
  tableColspan: String | Number;
  useChips: Boolean;
  useInput: Boolean;
  virtualScrollHorizontal: Boolean;
  virtualScrollItemSize: String | Number;
  virtualScrollSliceRatioAfter: String | Number;
  virtualScrollSliceRatioBefore: String | Number;
  virtualScrollSliceSize: String | Number;
  virtualScrollStickySizeEnd: String | Number;
  virtualScrollStickySizeStart: String | Number;
}

export interface PopupProxyCommonProps extends PopupCommonProps {
  autoClose: Boolean;
  noFocus: Boolean;
  noRefocus: Boolean;
  noRouteDismiss: Boolean;
  persistent: Boolean;
  square: Boolean;
}

export interface MenuCommonProps {
  anchor: String;
  contextMenu: Boolean;
  cover: Boolean;
  dark: Boolean;
  fit: Boolean;
  maxHeight: String;
  maxWidth: String;
  noParentEvent: Boolean;
  offset: Number[];
  scrollTarget: String | HTMLElement;
  self: String;
  separateClosePopup: Boolean;
  target: String | Boolean | HTMLElement;
  touchPosition: Boolean;
}

export interface DialogCommonProps {
  fullHeight: Boolean;
  fullWidth: Boolean;
  maximized: Boolean;
  noBackdropDismiss: Boolean;
  noEscDismiss: Boolean;
  noShake: Boolean;
  position: String;
  seamless: Boolean;
}

export interface MenuProps extends MenuCommonProps, PopupProxyCommonProps {}
export interface DialogProps extends DialogCommonProps, PopupProxyCommonProps {}
export interface PopupProxyProps
  extends MenuCommonProps,
    DialogCommonProps,
    PopupProxyCommonProps {
  breakpoint: String | Number;
}

export interface BrandState {
  global: String;
  field: String;
  input: String;
  select: String;
  menu: String;
  dialog: String;
  popupProxy: String;
  decimalInput: String
}

export type BrandStateStore = ToRefs<BrandState>;
export function useBrandStore(): BrandStateStore;
export type UseBrandStore = typeof useBrandStore;

export type FieldStore = ToRefs<FieldProps>;
export function useFieldStore(context: string = "default"): FieldStore;
export type UseFieldStore = typeof useFieldStore;

export type InputStore = ToRefs<InputProps>;
export function useInputStore(context: string = "default"): InputStore;
export type UseInputStore = typeof useInputStore;

export type SelectStore = ToRefs<SelectProps>;
export function useSelectStore(context: string = "default"): SelectStore;
export type UseSelectStore = typeof useSelectStore;

export type MenuStore = ToRefs<MenuProps>;
export function useMenuStore(context: string = "default"): MenuStore;
export type UseMenuStore = typeof useMenuStore;

export type DialogStore = ToRefs<DialogProps>;
export function useDialogStore(context: string = "default"): DialogStore;
export type UseDialogStore = typeof useDialogStore;

export type PopupProxyStore = ToRefs<PopupProxyProps>;
export function usePopupProxyStore(
  context: string = "default"
): PopupProxyStore;
export type UsePopupProxyStore = typeof usePopupProxyStore;
