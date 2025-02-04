import { createRouter, createWebHistory } from "vue-router";
// import {useAuthStore} from "../stores/user"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/list",
      component: () => import("../components/list.vue"),
      name: "list",
    },
    {
      path: "/login",
      component: () => import("../components/login.vue"),
      name: "login",
    },
    {
      path: "/",
      component: () => import("../components/login.vue"),
      name: "main",
    },
    {
      path: "/menu",
      component: () => import("../components/menu.vue"),
      name: "menu",
    }
  ],
});


export default router;
