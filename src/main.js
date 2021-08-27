import { createApp } from "vue";
import App from "./App.vue";
import Swal from "./plugins/useSwal";
import Vex from "./plugins/useVex";

const app = createApp(App);
app.use(Swal);
app.use(Vex);
app.mount("#app");
