import { useMenuCommonStore, usePopupProxyCommonStore } from "./common.store";

/**
 * @type {import('../index').UseSelectStore}
 */
export function useMenuStore(context = "default") {
  const commonState = usePopupProxyCommonStore();
  const menuState = useMenuCommonStore();
  return {
    ...commonState,
    ...menuState,
  };
}
