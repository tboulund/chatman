import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import StartView from "../views/StartView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },

    {
      path: "/",
      name: "start",
      component: StartView,
    },
  ],
});

export default router;
