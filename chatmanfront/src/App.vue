<script>
import { RouterLink, RouterView } from "vue-router";
const userStore = UserStore;
import { createApp } from "vue";
import App from "./App.vue";
import { UserStore } from "@/stores/userStore";


import { ref } from 'vue';

export default {
  setup() {
    const items = ref([
      {
        label: 'Create chat',
        icon: 'pi pi-refresh'
      },
      {
        label: 'Connect to chat',
        icon: 'pi pi-times'
      },
      {   label: 'Chat Room',
        icon: 'pi pi-comments',
        command: () => {
          window.location.hash = "/fileupload"
        }
      }
    ]);

    return { items }
  }
}

</script>

<template>
  <div>
    <Toolbar>
      <template #start>
        <div id="img_reroute">
          <img src="../src/assets/mini-logov2.png" width="64" height="64"> &nbsp; &nbsp; &nbsp;

        </div>
        <SplitButton
          @click="$router.push('Chat')"
          label="CHAT"
          icon="pi pi-comment"
          :model="items"
          class="p-button-rounded p-button-raised p-button-secondary"
          style="margin-right: 15px"
        />

        <Button
          @click="$router.push('/friendsView')"
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
