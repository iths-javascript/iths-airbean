<template>
  <div class="profile">
    <Header />
    <Register />
  </div>
</template>

<script>
import Register from '@/components/Register.vue'
import Header from '@/components/Header.vue'

export default {
  name: "Profile",
  components: {
    Register,
    Header
  },
};
</script>

<style lang="scss" scoped>
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
</style>