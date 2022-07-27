import {
  QbField,
  QbInput,
  QbSelect,
  QbMenu,
  QbDialog,
  QbPopupProxy,
  QbTab,
  QbTabs,
  QbTabPanel,
  QbTabPanels,
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
    QbTab,
    QbTabs,
    QbTabPanel,
    QbTabPanels,
  };
  for (const key in components) {
    app.component(components[key].name, components[key]);
  }
}

export { version, QbField, QbInput, QbSelect, install };
