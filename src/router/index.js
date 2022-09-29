import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "VueLifecycle",
      component: () => import("@/components/VueLifecycle.vue"),
    },
    {
      path: "/Computed",
      name: "Computed-property",
      component: () => import("@/components/ComputedProperty.vue"),
    },
    {
      path: "/Routing",
      name: "Routing",
      component: () => import("@/components/Routing.vue"),
    },
    {
      path: "/KeepAlive",
      name: "KeepAlive",
      component: () => import("@/components/KeepAlive.vue"),
    },
    {
      path: "/teleport",
      name: "teleport",
      component: () => import("@/components/teleport.vue"),
    },
    {
      path: "/Slots",
      name: "Slots",
      component: () => import("@/components/Slots.vue"),
    },
    {
      path: "/Test",
      name: "Test",
      component: () => import("@/components/Testing.vue"),
    },
    
    {
      path: "/:pathMatch(.*)*",
      name: "not-found-page",
      component: () => import("@/components/NotFound.vue"),
    },
  ],
});
export default router