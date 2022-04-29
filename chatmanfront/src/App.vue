<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
const userStore = UserStore;
import { createApp } from "vue";
import App from "./App.vue";
import { UserStore } from "@/stores/userStore";
const app = createApp(App);


</script>
<template>
  <div>
    <Toolbar>
      <template #start>
        <Button
          @click="$router.push('/')"
          label="Home"
          icon="pi pi-home"
          class="p-button-help"
          style="margin-right: 15px"
        />
        <SplitButton
          @click="$router.push('createView')"
          label="CHAT"
          icon="pi pi-user-edit"
          class="p-button-help"
          style="margin-right: 15px"
        />
          <Button
            @click="$router.push('/friendsView')"
            label="FRIENDS"
            icon="pi pi-comments"
            class="p-button-help"
            style="margin-right: 15px"
          />


      </template>
      <template #end>
        <Button
          @click="logOut"
          label="Log Out"
          class="p-button-help"
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
