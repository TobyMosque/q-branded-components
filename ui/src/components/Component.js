import { h } from 'vue'
import { QBadge } from 'quasar'

export default {
  name: 'QBrandedComponents',

  setup () {
    return () => h(QBadge, {
      class: 'QBrandedComponents',
      label: 'QBrandedComponents'
    })
  }
}
