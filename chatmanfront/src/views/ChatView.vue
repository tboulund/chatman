<template>
  <h2>You are currently listening to: {{ chatStore.roomName }}</h2>
  <InputText v-model="roomListener" placeholder="Enter room name" /> <br />
  <br />
  <Button @click="ListenToRoom">Connect</Button>
  <br />
  <br />
  <br />
  <h3>Send a Message</h3>
  <InputText v-model="txtChatInput" placeholder="Enter message" /> <br />
  <br />
  <InputText v-model="roomChatInput" placeholder="Enter room name" /> <br />
  <br />
  <Button @click="sendChat">Send</Button> <br />
  <br />

  <ul>
    <li v-for="(chat, index) in chatStore.chats" v-bind:key="index">
      {{ chat.sender }} : {{ chat.text }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ChatStore } from "@/stores/chatStore";
import { ref } from "vue";
import { UserStore } from "@/stores/userStore";

const chatStore = ChatStore();
const userStore = UserStore();
const txtChatInput = ref("");
const roomChatInput = ref("");
const roomListener = ref("");
const loggedInUserName = userStore.userName;

function listenToRoom() {
  chatStore.setRoom(roomListener.value);
}

function sendChat() {
  chatStore.createChat({
    text: txtChatInput.value,
    room: roomChatInput.value,
    sender: loggedInUserName,
  });
}
</script>

<style scoped></style>
