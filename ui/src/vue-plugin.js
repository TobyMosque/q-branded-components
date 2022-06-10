import Component from './components/Component'
import QbInput from './components/input'
import QbField from './components/field'

const version = __UI_VERSION__

function install (app) {
  app.component(Component.name, Component)
  app.component(QbInput.name, QbInput)
  app.component(QbField.name, QbField)
}

export {
  version,
  Component,

  install
}
