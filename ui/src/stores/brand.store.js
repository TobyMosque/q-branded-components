import { reactive, toRefs } from "vue";

const state = toRefs(
  reactive({
    global: "default",
    field: undefined,
    input: undefined,
    select: undefined,
    menu: undefined,
    dialog: undefined,
    popupProxy: undefined,
    decimalInput: undefined
  })
);

/**
 * @type {import('./index').UseBrandStore}
 */
export function useBrandStore() {
  return state;
}
