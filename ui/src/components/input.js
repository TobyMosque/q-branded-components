import { QInput, } from 'quasar'
import {
  NullableBoolean,
  NullableString,
  NullableStringBoolean,
  NullableStringNumber,
  NullableStyle
} from '../props'

import { useWrap, useInput } from '../composables'
import { FieldProps } from './field'

export const InputProps = {
  ...FieldProps,
  autogrow: NullableBoolean,
  debounce: NullableStringNumber,
  fillMask: NullableStringBoolean,
  inputClass: NullableStyle,
  inputStyle: NullableStyle,
  mask: NullableString,
  name: NullableString,
  reverseFillMask: NullableBoolean,
  shadowText: NullableString,
  type: NullableString,
  unmaskedValue: NullableBoolean,
}

export default {
  name: 'QbInput',
  props: InputProps,
  setup (props, { attrs, slots, expose }) {
    return useWrap(QInput, { props, attrs, slots, expose, useBrand: useInput })
  }
}
