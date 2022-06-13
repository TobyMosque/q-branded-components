import { useDialogCommonStore, usePopupProxyCommonStore } from "./common.store";

/**
 * @type {import('../index').UseDialogStore}
 */
export function useDialogStore(context = "default") {
  const commonState = usePopupProxyCommonStore();
  const dialogState = useDialogCommonStore();
  return {
    ...commonState,
    ...dialogState,
  };
}
