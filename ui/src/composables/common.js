import { mergeProps } from '../utils/index'
import { h } from 'vue'

export function useGetValue ({ props, store }) {
  function getValue (field) {
    return props[field] === undefined ? store.value[field].value : props[field]
  }
  return {
    getValue
  }
}

export function useWrap(Component, { props, attrs, slots, expose, useBrand }) {
  const { root, methods, props: computedProps } = useBrand({ props })
  expose(methods)
  return () => {
    const _props = mergeProps({ root, attrs, props: computedProps })
    return h(Component, _props, slots)
  }
}
