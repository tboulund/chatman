<template>
  <main>
    <div>
      <div class="center_man">
        <img src="../assets/Chatman_Logov2.png" width="600" height="450">
      </div>
      <div class="center_man">
        <input type="text" v-model="inputUsername" placeholder="username"> <br>
        <input type="password" v-model="inputPassword" placeholder="password"> <br>
        <button @click="handleCreateUser">Sign in</button>
      </div>
    </div>


  </main>
</template>

<script setup lang="ts">
import { UserStore } from "@/stores/userStore";
import { ref } from "vue";

const userStore = UserStore();
const inputUsername = ref("");
const inputPassword = ref("");

function handleCreateUser() {
  userStore.loginUser(inputUsername.value,inputPassword.value);
}

</script>

<style>
.center_man{
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
