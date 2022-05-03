import { createRouter, createWebHistory } from "vue-router";
import StartView from "../views/StartView.vue";
import ProfileView from "../views/ProfileView.vue";
import FriendView from "../views/FriendView.vue";
import ChatView from "../views/ChatView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: "/",
      name: "start",
      component: StartView,
    },
    {
      path:"/profile",
      name: "profile",
      component: ProfileView,
    },
    {
      path:"/friend",
      name: "friend",
      component: FriendView,
    },
    {
      path:"/chat",
      name: "chat",
      component: ChatView,
    }
  ],
});

export default router;
