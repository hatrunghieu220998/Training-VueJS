import { createApp } from "vue";
import App from "./App.vue";
import ArchiveVue from "./components/keep-alive/Archive.vue";
import PostsVue from "./components/keep-alive/Posts.vue";

const app = createApp(App);


app.component('tab-posts', PostsVue)
app.component('tab-archive', ArchiveVue)

app.mount("#app");