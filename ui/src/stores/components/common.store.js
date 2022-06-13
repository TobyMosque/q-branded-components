import { toRefs, reactive } from "vue";
import { useFieldStore } from "./field.store";

const inputStates = new Map();
const popupStates = new Map();
const popupProxyStates = new Map();
const menuStates = new Map();
const dialogStates = new Map();

/**
 * @type {import('./common.store').UseBrandStore}
 */
export function useInputCommonStore(context = "default") {
  const fieldState = useFieldStore(context);
  if (!inputStates.has(context)) {
    inputStates.set(
      context,
      toRefs(
        reactive({
          inputClass: undefined,
          inputStyle: undefined,
          name: undefined,
        })
      )
    );
  }
  const commonState = inputStates.get(context);
  return {
    ...fieldState,
    ...commonState,
  };
}

/**
 * @type {import('./common.store').UsePopupCommonStore}
 */
export function usePopupCommonStore(context = "default") {
  if (!popupStates.has(context)) {
    popupStates.set(
      context,
      toRefs(
        reactive({
          transitionDuration: 300,
          transitionHide: undefined,
          transitionShow: undefined,
        })
      )
    );
  }
  return popupStates.get(context);
}

/**
 * @type {import('./common.store').UsePopupProxyCommonStore}
 */
export function usePopupProxyCommonStore(context = "default") {
  const popupState = usePopupCommonStore(context);
  if (!popupProxyStates.has(context)) {
    popupProxyStates.set(
      context,
      toRefs(
        reactive({
          autoClose: false,
          noFocus: false,
          noRefocus: false,
          noRouteDismiss: false,
          persistent: false,
          square: false,
        })
      )
    );
  }
  const popupProxyState = popupProxyStates.get(context);
  return {
    ...popupState,
    ...popupProxyState,
  };
}

/**
 * @type {import('./common.store').UseMenuCommonStore}
 */
export function useMenuCommonStore(context = "default") {
  if (!menuStates.has(context)) {
    menuStates.set(
      context,
      toRefs(
        reactive({
          anchor: undefined,
          contextMenu: false,
          cover: false,
          dark: null,
          fit: false,
          maxHeight: null,
          maxWidth: null,
          noParentEvent: false,
          offset: undefined,
          scrollTarget: undefined,
          self: undefined,
          separateClosePopup: false,
          target: true,
          touchPosition: false,
        })
      )
    );
  }
  return menuStates.get(context);
}

/**
 * @type {import('./common.store').UseDialogCommonStore}
 */
export function useDialogCommonStore(context = "default") {
  if (!dialogStates.has(context)) {
    dialogStates.set(
      context,
      toRefs(
        reactive({
          fullHeight: false,
          fullWidth: false,
          maximized: false,
          noBackdropDismiss: false,
          noEscDismiss: false,
          noShake: false,
          position: "standard",
          seamless: false,
        })
      )
    );
  }
  return dialogStates.get(context);
}
