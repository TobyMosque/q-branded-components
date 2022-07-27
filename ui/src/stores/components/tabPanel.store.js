import { reactive, toRefs } from "vue";

const states = new Map();
/**
 * @type {import('../index').UseTabPanelStore}
 */
export function useTabPanelStore(context = "default") {
  if (!states.has(context)) {
    states.set(
      context,
      toRefs(
        reactive({
          disable: false,
          name: undefined,
        })
      )
    );
  }
  return states.get(context);
}
