<script>
import { RouterLink, RouterView } from "vue-router";
const userStore = UserStore;
import { createApp } from "vue";
import App from "./App.vue";
import { UserStore } from "@/stores/userStore";

import { ref } from "vue";

export default {
  setup() {
    const items = ref([
      {
        label: "Create chat",
        icon: "pi pi-plus",
        command: () => {
          window.location = "CreateChatView";
        },
      },
      {
        label: "Connect to chat",
        icon: "pi pi-directions",
        command: () => {
          window.location = "ChatView";
        },
      },
      {
        label: "Chat Room",
        icon: "pi pi-comments",
        command: () => {
          window.location.hash = "/fileupload";
        },
      },
    ]);
    return { items };
  },
};
</script>

<template>
  <span>
  <div>
    <Toolbar>
      <template #start>
        <div id="img_reroute" @click ="$router.push('/')">
          <img src="../src/assets/mini-logov2.png" width="48" height="48" />
          &nbsp; &nbsp; &nbsp;
        </div>
        <SplitButton
          label="CHAT"
          icon="pi pi-comment"
          :model="items"
          class="p-button-rounded p-button-raised p-button-secondary"
          style="margin-right: 15px"
        />

        <Button
          @click="$router.push('/friend')"
          label="FRIENDS"
          icon="pi pi-user-edit"
          class="p-button-rounded p-button-secondary"
          style="margin-right: 15px"
        />
      </template>
      <template #end>
        <Button
          @click="logOut"
          icon="pi pi-times"
          class="p-button-secondary p-button-rounded"
        />
      </template>
    </Toolbar>
  </div>
     </span>
  <br />
  <RouterView />
</template>

<style>
#app {
  font-family: "Avenir", "Helvetica", "Arial", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
