import { mergeProps } from '../utils/index'
import { h } from 'vue'
import { QInput, QSelect, QMenu, QDialog, QPopupProxy } from 'quasar'

const input = Object.keys(QInput.props)
const select = Object.keys(QSelect.props)

const ini = select.filter(key => !input.includes(key))
const props = ini.reduce((props, key) => {
  props[key] = QSelect.props[key]
  return props
}, {})

const menu = Object.keys(QMenu.props)
const dialog = Object.keys(QDialog.props)
const proxy = Object.keys(QPopupProxy.props)

console.log({
  ini,
  props
})

const dialogKeys = dialog.filter(key => select.includes(key))
const dialogProps = dialogKeys.reduce((props, key) => {
  props[key] = QDialog.props[key]
  return props
}, {})

console.log({
  menu,
  dialog,
  proxy,
  dialogProps 
})

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
