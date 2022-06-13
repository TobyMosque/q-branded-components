import { useDialogCommonStore, usePopupProxyCommonStore } from "./common.store";

/**
 * @type {import('../index').UseDialogStore}
 */
export function useDialogStore(context = "default") {
  const commonState = usePopupProxyCommonStore(context);
  const dialogState = useDialogCommonStore(context);
  return {
    ...commonState,
    ...dialogState,
  };
}
