import { inject } from "vue";
import vex from "vex-js";
import vexDialog from "vex-dialog";

// Main css
import "vex-js/dist/css/vex.css";

// Themes
import "vex-js/dist/css/vex-theme-top.css";
import "vex-js/dist/css/vex-theme-os.css";

// Options
vex.defaultOptions.className = "vex-theme-top";
vex.defaultOptions.closeAllOnPopState = false;

// Register vex-dialog
vex.registerPlugin(vexDialog);

const VexSymbol = Symbol();

export function useVex() {
  return inject(VexSymbol);
}

export default {
  install: (app) => {
    app.config.globalProperties.$Vex = vex;
    app.provide(VexSymbol, vex);
  },
};
