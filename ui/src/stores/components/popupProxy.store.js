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
  const commonState = usePopupProxyCommonStore(context);
  const menuState = useMenuCommonStore(context);
  const dialogState = useDialogCommonStore(context);
  return {
    ...commonState,
    ...menuState,
    ...dialogState,
    ...popupProxyState,
  };
}
