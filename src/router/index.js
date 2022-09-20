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
    // {
    //   path: "/Provide",
    //   name: "Provide",
    //   component: () => import("../views/product-detail/ProductDetail.vue")
    // },
    // {
    //   path: "/women",
    //   name: "women-collection",
    //   component: () => import("../views/womenView.vue")
    // },
    // {
    //   path: "/login",
    //   name: "login",
    //   component: () => import("../views/LoginView.vue")
    // },
    // {
    //   path: '/stock',
    //   name: 'stock',
    //   component: () => import("../views/StockView.vue")
    // },
    // {
    //   path: "/cart",
    //   name: "Cart",
    //   component: () => import("../views/Cart.vue")
    // },
    // {
    //   path: '/:pathMatch(.*)*',
    //   name: 'error',
    //   component: () => import("../components/common/NotFoundPage.vue")
    // },
  ],
});

export default router;
