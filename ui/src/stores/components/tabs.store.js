import { reactive, toRefs } from "vue";

const states = new Map();
/**
 * @type {import('../index').UseTabsStore}
 */
export function useTabsStore(context = "default") {
  if (!states.has(context)) {
    states.set(
      context,
      toRefs(
        reactive({
          activeBgColor: undefined,
          activeClass: undefined,
          activeColor: undefined,
          align: 'center',
          breakpoint: 600,
          contentClass: undefined,
          dense: false,
          indicatorColor: undefined,
          inlineLabel: false,
          leftIcon: undefined,
          mobileArrows: false,
          narrowIndicator: false,
          noCaps: false,
          outsideArrows: false,
          rightIcon: undefined,
          shrink: false,
          stretch: false,
          switchIndicator: false,
          vertical: false,
        })
      )
    );
  }
  return states.get(context);
}
