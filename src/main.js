import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import NotieGlobal from "./plugins/notie-global";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

createApp(App).use(NotieGlobal).use(router).use(Antd).mount("#app");
