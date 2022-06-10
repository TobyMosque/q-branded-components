import { reactive, toRefs } from 'vue'

const state = toRefs(reactive({
  input: 'input',
  field: 'field'
}))

/**
 * @type {import('./index').UseBrandStore}
 */
export function useBrandStore () {
  return state;
}

