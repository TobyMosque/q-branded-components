import {
  useMenuCommonStore,
  useDialogCommonStore,
  usePopupProxyCommonStore,
} from "./common.store";

const states = new Map();
/**
 * @type {import('../index').UsePopupProxyStore}
 */
export function usePopupProxyStore(context = "default") {
  if (!states.has(context)) {
    dialogStates.set(
      context,
      toRefs(
        reactive({
          breakpoint: undefined,
        })
      )
    );
  }
  const popupProxyState = states.get(context);
  const commonState = usePopupProxyCommonStore();
  const menuState = useMenuCommonStore();
  const dialogState = useDialogCommonStore();
  return {
    ...commonState,
    ...menuState,
    ...dialogState,
    ...popupProxyState,
  };
}
