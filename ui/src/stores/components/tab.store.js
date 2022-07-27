import { reactive, toRefs } from "vue";

const states = new Map();
/**
 * @type {import('../index').UseTabStore}
 */
export function useTabStore(context = "default") {
  if (!states.has(context)) {
    states.set(
      context,
      toRefs(
        reactive({
          alert: false,
          alertIcon: undefined,
          contentClass: undefined,
          disable: false,
          icon: undefined,
          label: undefined,
          name: undefined,
          noCaps: false,
          ripple: true,
          tabindex: undefined
        })
      )
    );
  }
  return states.get(context);
}
