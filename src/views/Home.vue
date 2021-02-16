<template>
  <div class="home">
    <h1>Home</h1>
  </div>
</template>

<script>
import { fetchProducts, registerUser } from "@/api/mock";
export default {
  name: "Home",
  data() {
    return {
      data: "",
      user: "",
    };
  },
  methods: {
    async getData() {
      this.data = await fetchProducts();
      console.log(this.data);
    },
    async register() {
      try {
        this.user = await registerUser("Elias", "testmail3@.com");
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getData();
    this.register();
  },
};
</script>
