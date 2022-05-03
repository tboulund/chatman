<template>
  <div>
    <div class="div_right">
      <div class="div_right_top">
        <i class="pi pi-bell mr-4 p-text-secondary" style="font-size: 2rem" v-badge="2"></i> &nbsp;&nbsp;
        <i class="pi pi-envelope p-text-secondary" style="font-size: 2rem" v-badge.danger></i>
      </div>
      <br>
      <div class="div_right_middle">
        <h5>Friend List</h5>
        <Listbox v-model="FriendList" :options="friend" optionLabel="name" style="width:15rem" />
        <div class="div_right_bottom">
          <h5>Your Chats</h5>
          <Listbox v-model="chatList" :options="chat" optionLabel="name" style="width:15rem" />
        </div>
      </div>
    </div>
    <br>
    <div class="div_left">
      <h5> Anna Teresa Morales
        username: annamorri
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileView.vue"
};
</script>

<style scoped>
.div_left{}
.div_right{}
</style>
