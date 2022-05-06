<template>
  <div class="top-man">
    <h1>Chat Room</h1>
    <br/>
    <h5>Enter Room Name</h5>
    <InputText v-model="roomListener" placeholder="Enter room name" />
    <br/>
    <Button class="p-button-rounded p-button-secondary " @click="ListenToRoom">Connect</Button>
  </div>
  <div class="left-man">
    <div class="center_man">
  <br />
  <h3>Send a Message</h3>
  <InputText v-model="txtChatInput" placeholder="Enter message" />
      <br/>
  <Button class="p-button-rounded p-button-secondary " @click="sendChat">Send</Button>
    <br />
  <br />
  </div>
    </div>
</template>

<script>
export default {
  name: "ChatView.vue",
};
</script>

<style>
.top-man {
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.left-man{
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
}
.center_man {
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
