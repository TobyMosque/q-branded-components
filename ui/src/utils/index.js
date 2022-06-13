export function mergeProps({ root, attrs, props }) {
  const _props = Object.assign({ ref: root }, attrs);
  for (const key in props) {
    _props[key] = props[key].value;
  }
  return _props;
}
