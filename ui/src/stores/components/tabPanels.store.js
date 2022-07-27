import { reactive, toRefs } from "vue";

const states = new Map();
/**
 * @type {import('../index').UseTabPanelsStore}
 */
export function useTabPanelsStore(context = "default") {
  if (!states.has(context)) {
    states.set(
      context,
      toRefs(
        reactive({
          animated: false,
          dark: null,
          infinite: false,
          keepAlive: false,
          keepAliveExclude: undefined,
          keepAliveInclude: undefined,
          keepAliveMax: undefined,
          swipeable: false,
          transitionDuration: 300,
          transitionNext: undefined,
          transitionPrev: undefined,
          vertical: false,
        })
      )
    );
  }
  return states.get(context);
}
