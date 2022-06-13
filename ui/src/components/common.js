import {
  NullableArray,
  NullableBoolean,
  NullableString,
  NullableStringBooleanObject,
  NullableStringNumber,
  NullableStringObject,
} from "../props";

export const PopupCommonProps = {
  transitionDuration: NullableStringNumber,
  transitionHide: NullableString,
  transitionShow: NullableString,
};

export const PopupProxyCommonProps = {
  ...PopupCommonProps,
  autoClose: NullableBoolean,
  noFocus: NullableBoolean,
  noRefocus: NullableBoolean,
  noRouteDismiss: NullableBoolean,
  persistent: NullableBoolean,
  square: NullableBoolean,
};

export const MenuCommonProps = {
  anchor: NullableString,
  contextMenu: NullableBoolean,
  cover: NullableBoolean,
  dark: NullableBoolean,
  fit: NullableBoolean,
  maxHeight: NullableString,
  maxWidth: NullableString,
  noParentEvent: NullableBoolean,
  offset: NullableArray,
  scrollTarget: NullableStringObject,
  self: NullableString,
  separateClosePopup: NullableBoolean,
  target: NullableStringBooleanObject,
  touchPosition: NullableBoolean,
};

export const DialogCommonProps = {
  fullHeight: NullableBoolean,
  fullWidth: NullableBoolean,
  maximized: NullableBoolean,
  noBackdropDismiss: NullableBoolean,
  noEscDismiss: NullableBoolean,
  noShake: NullableBoolean,
  position: NullableString,
  seamless: NullableBoolean,
};
