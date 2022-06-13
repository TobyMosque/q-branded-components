import { reactive, toRefs } from "vue";

const states = new Map();
/**
 * @type {import('../index').UseFieldStore}
 */
export function useFieldStore(context = "default") {
  if (!states.has(context)) {
    states.set(
      context,
      reactive({
        autofocus: false,
        bgColor: undefined,
        borderless: false,
        bottomSlots: false,
        clearIcon: undefined,
        clearable: false,
        color: undefined,
        counter: false,
        dark: null,
        dense: false,
        disable: false,
        error: null,
        errorMessage: undefined,
        filled: false,
        for: undefined,
        hideBottomSpace: false,
        hideHint: false,
        hint: undefined,
        itemAligned: false,
        label: undefined,
        labelColor: undefined,
        labelSlot: false,
        lazyRules: undefined,
        loading: false,
        maxlength: undefined,
        noErrorIcon: false,
        outlined: false,
        prefix: undefined,
        reactiveRules: false,
        readonly: false,
        rounded: false,
        rules: undefined,
        square: false,
        stackLabel: false,
        standout: false,
        suffix: undefined,
      })
    );
  }
  return toRefs(states.get(context));
}
