import { useMenuCommonStore, usePopupProxyCommonStore } from "./common.store";

/**
 * @type {import('../index').UseSelectStore}
 */
export function useMenuStore(context = "default") {
  const commonState = usePopupProxyCommonStore(context);
  const menuState = useMenuCommonStore(context);
  return {
    ...commonState,
    ...menuState,
  };
}
