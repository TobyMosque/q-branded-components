import { ToRefs } from "vue";
import {
  InputCommonProps,
  PopupCommonProps,
  PopupProxyCommonProps,
  MenuCommonProps,
  DialogCommonProps,
} from "../index";

export type InputCommonStore = ToRefs<InputCommonProps>;
export function useInputCommonStore(
  context: string = "default"
): InputCommonStore;
export type UseInputCommonStore = typeof useInputCommonStore;

export type PopupCommonStore = ToRefs<PopupCommonProps>;
export function usePopupCommonStore(
  context: string = "default"
): PopupCommonStore;
export type UsePopupCommonStore = typeof usePopupCommonStore;

export type PopupProxyCommonStore = ToRefs<PopupProxyCommonProps>;
export function usePopupProxyCommonStore(
  context: string = "default"
): PopupCommonStore;
export type UsePopupProxyCommonStore = typeof usePopupProxyCommonStore;

export type MenuCommonStore = ToRefs<MenuCommonProps>;
export function useMenuCommonStore(
  context: string = "default"
): MenuCommonStore;
export type UseMenuCommonStore = typeof useMenuCommonStore;

export type DialogCommonStore = ToRefs<DialogCommonProps>;
export function useDialogCommonStore(
  context: string = "default"
): DialogCommonStore;
export type UseDialogCommonStore = typeof useDialogCommonStore;
