import { useFieldStore } from "./components/field.store";
import { useInputStore } from "./components/input.store";
import { useSelectStore } from "./components/select.store";
import { useMenuStore } from "./components/menu.store";
import { useDialogStore } from "./components/dialog.store";
import { useBrandStore } from "./brand.store";

import { QMenu, QDialog, QPopupProxy } from "quasar";
const keys = {
  menu: Object.keys(QMenu.props).sort(),
  dialog: Object.keys(QDialog.props).sort(),
  proxy: Object.keys(QPopupProxy.props).sort(),
};
keys.common = keys.menu.filter((k) => keys.dialog.includes(k)).sort();
keys.uniqueMenu = keys.menu.filter((k) => !keys.dialog.includes(k)).sort();
keys.uniqueDialog = keys.dialog.filter((k) => !keys.menu.includes(k)).sort();
keys.uniqueProxy = keys.proxy
  .filter((k) => !keys.menu.includes(k) && !keys.dialog.includes(k))
  .sort();

const _props = {};
for (const key of keys.common) {
  _props[key] = QMenu.props[key];
}
console.log(_props, keys);

export {
  useFieldStore,
  useInputStore,
  useSelectStore,
  useMenuStore,
  useDialogStore,
  useBrandStore,
};
