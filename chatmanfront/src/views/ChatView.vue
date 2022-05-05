<template>
    <h3>Enter Room Name</h3>
    <InputText v-model="roomListener" placeholder="Enter room name" />
    <Button @click="ListenToRoom">Connect</Button>
    <br />
    <h3>Send a Message</h3>
  <InputText v-model="txtChatInput" placeholder="Enter message" />
  <Button @click="sendChat">Send</Button> <br />
  <br />
</template>


<script>
export default {
  name: "ChatView.vue"
};
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

