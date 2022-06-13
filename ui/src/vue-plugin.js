import {
  QbField,
  QbInput,
  QbSelect,
  QbMenu,
  QbDialog,
  QbPopupProxy,
} from "./components";

const version = __UI_VERSION__;

function install(app) {
  const components = {
    QbField,
    QbInput,
    QbSelect,
    QbMenu,
    QbDialog,
    QbPopupProxy,
  };
  for (const key in components) {
    app.component(components[key].name, components[key]);
  }
}

export { version, QbField, QbInput, QbSelect, install };
