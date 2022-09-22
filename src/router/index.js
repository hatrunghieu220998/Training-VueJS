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
    {
      path: "/Routing",
      name: "Routing",
      component: () => import("../views/Routing.vue")
    },
    {
      path: "/examplerouter",
      name: "examplerouter",
      component: () => import("../routerExample/examplerouter.vue")
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFoundPage',
      component: () => import("../routerExample/NotFoundPage.vue")
    },
    {
      path: "/dynamicrouter",
      name: "dynamicrouter",
      component: () => import("../routerExample/dynamicrouter.vue")
    },
    {
      path: "/dynamicrouter/:id",
      name: "detailrouter",
      component: () => import("../routerExample/detailrouter.vue")
    },
  ],
});

export default router;
