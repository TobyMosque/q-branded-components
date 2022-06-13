import { boot } from "quasar/wrappers";
import VuePlugin from "@tobymosque/quasar-ui-q-branded-components";

export default boot(({ app }) => {
  app.use(VuePlugin);
});
