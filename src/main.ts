import { createApp } from "vue";
import { createPinia } from "pinia";
import AOS from "aos";

import "aos/dist/aos.css";
import "./assets/css/style.css";

import App from "./App.vue";
import appSetting from "./app-setting";
import router from "./router";

const app = createApp(App);
const pinia = createPinia();

AOS.init({
  once: true,
});

app.use(pinia);
appSetting.init();

app.use(router);
app.mount("#app");
