import { toRefs, reactive } from 'vue'
import { useFieldStore } from './field.store'

const inputStates = new Map()
const popupStates = new Map()
/**
 * @type {import('../index').UseBrandStore}
 */
export function useInputCommonStore (context = 'default') {
  const fieldState = useFieldStore(context)
  if (!inputStates.has(context)) {
    inputStates.set(context, toRefs(reactive({
      inputClass: undefined,
      inputStyle: undefined,
      name: undefined,
    })))
  }
  const commonState = inputStates.get(context);
  return {
    ...fieldState,
    ...commonState
  }
}

/**
 * @type {import('../index').UsePopupCommonStore}
 */
export function usePopupCommonStore (context = 'default') {
  if (!popupStates.has(context)) {
    popupStates.set(context, toRefs(reactive({
      transitionDuration: 300,
      transitionHide: undefined,
      transitionShow: undefined,
    })))
  }
  return popupStates.get(context);
}