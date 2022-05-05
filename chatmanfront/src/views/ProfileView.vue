<template>
  <div>
    <div class="div_right">
      <div class="div_right_top">
        <i class="pi pi-bell mr-4 p-text-secondary" style="font-size: 2rem" v-badge="2"></i> &nbsp;&nbsp;&nbsp;&nbsp;
        <i class="pi pi-envelope p-text-secondary" style="font-size: 2rem" v-badge.danger></i>&nbsp;&nbsp;
      </div>
      <br>
      <div class="div_right_middle">
        <div>
        <h5>Friend List</h5>
        <Listbox v-model="FriendList" :options="friend" optionLabel="name" style="width:15rem" />
          </div>&nbsp;&nbsp;&nbsp;&nbsp;
        <br>
        <div class="div_right_bottom">
          <h5>Your Chats</h5>
          <Listbox v-model="chatList" :options="chat" optionLabel="name" style="width:15rem" />
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
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

.div_right_middle{
  height: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:right;
}
.div_right_bottom{
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:right;
}

.div_right_top{
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content:right;
}

</style>
