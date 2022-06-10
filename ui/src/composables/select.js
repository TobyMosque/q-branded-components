import { computed } from 'vue'
import { useField } from './field'
import { useSelectStore, useBrandStore } from '../stores'
import { useGetValue } from './common'

export function useInput ({ props }) {
  const {
    root,
    methods: fieldMethods,
    props: fieldProps
  } = useField({ props })
  const brandStore = useBrandStore()
  const brand = computed(() => props.brand === undefined ? brandStore.select.value : props.brand)
  const store = computed(() => useSelectStore(brand.value))
  const { getValue } = useGetValue({ props, store })

  const selectMethods = {
    ...fieldMethods,
    select() {
      return root.value.select()
    },
    getNativeElement() {
      return root.value.getNativeElement()
    }
  }

  const inputProps = {
    ...fieldProps,
    autogrow: computed(() => getValue('autogrow')),
    debounce: computed(() => getValue('debounce')),
    fillMask: computed(() => getValue('fillMask')),
    inputClass: computed(() => getValue('inputClass')),
    inputStyle: computed(() => getValue('inputStyle')),
    mask: computed(() => getValue('mask')),
    name: computed(() => getValue('name')),
    reverseFillMask: computed(() => getValue('reverseFillMask')),
    shadowText: computed(() => getValue('shadowText')),
    type: computed(() => getValue('type')),
    unmaskedValue: computed(() => getValue('unmaskedValue'))
  }
  return {
    root,
    methods: selectMethods,
    props: inputProps
  }
}
