import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/props",
      name: "props",
      component: () => import("../views/Props.vue"),
    },
    {
      path: "/Provide",
      name: "Provide",
      component: () => import("../views/Provide.vue")
    },
    {
      path: "/Plugins",
      name: "Plugins",
      component: () => import("../views/Plugins.vue")
    },
    
    {
      path: "/Teleport",
      name: "Teleport",
      component: () => import("../views/Teleport.vue")
    },
  ],
});

export default router;
