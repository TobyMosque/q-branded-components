import { toRefs, reactive } from 'vue'
import { useInputCommonStore } from './common.store'

const states = new Map()
/**
 * @type {import('../index').UseInputStore}
 */
export function useInputStore (context = 'default') {
  const commonState = useInputCommonStore()
  if (!states.has(context)) {
    states.set(context, toRefs(reactive({
      autogrow: false,
      debounce: undefined,
      fillMask: undefined,
      mask: undefined,
      reverseFillMask: false,
      shadowText: undefined,
      type: undefined,
      unmaskedValue: false
    })))
  }
  const inputRefs = states.get(context);
  return {
    ...commonState,
    ...inputRefs
  }
}

