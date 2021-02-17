<template>
  <div class="home">
    <h1>Home</h1>
    {{ getUser }}
    {{ getOrderHistory }}
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    getUser() {
      return this.$store.getters["user/getUser"];
    },
    getOrderHistory() {
      return this.$store.getters["user/getOrderHistory"];
    },
  },
  methods: {
    async login() {
      this.$store.dispatch("user/setLogin", "test@mail.com");
      this.$store.dispatch("user/setOrderHistory", "test@mail.com");
    },
  },
  created() {
    this.login();
  },
};
</script>
