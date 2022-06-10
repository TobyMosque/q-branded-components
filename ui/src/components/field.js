import { QField } from 'quasar'
import {
  NullableArray,
  NullableBoolean,
  NullableString,
  NullableStringBoolean,
  NullableStringNumber
} from '../props'

import { useWrap, useField } from '../composables'

const lazyRulesValidator = QField.props.lazyRules.validator;
export const FieldProps = {
  autofocus: NullableBoolean,
  bgColor: NullableString,
  borderless: NullableBoolean,
  bottomSlots: NullableBoolean,
  brand: {
    type: String,
    default: 'default'
  },
  clearIcon: NullableString,
  clearable: NullableBoolean,
  color: NullableString,
  counter: NullableBoolean,
  dark: NullableBoolean,
  dense: NullableBoolean,
  disable: NullableBoolean,
  error: NullableBoolean,
  errorMessage: NullableString,
  filled: NullableBoolean,
  for: NullableString,
  hideBottomSpace: NullableBoolean,
  hideHint: NullableBoolean,
  hint: NullableString,
  itemAligned: NullableBoolean,
  label: NullableString,
  labelColor: NullableString,
  labelSlot: NullableBoolean,
  lazyRules: {
    ...NullableStringBoolean,
    validator (val) {
      return lazyRulesValidator.bind(this)(val)
    }
  },
  loading: NullableBoolean,
  maxlength: NullableStringNumber,
  noErrorIcon: NullableBoolean,
  outlined: NullableBoolean,
  prefix: NullableString,
  reactiveRules: NullableBoolean,
  readonly: NullableBoolean,
  rounded: NullableBoolean,
  rules: NullableArray,
  square: NullableBoolean,
  stackLabel: NullableBoolean,
  standout: NullableStringBoolean,
  suffix: NullableString,
}

export default {
  name: 'QbField',
  props: FieldProps,
  setup (props, { attrs, slots, expose }) {
    return useWrap(QField, { props, attrs, slots, expose, useBrand: useField })
  }
}
