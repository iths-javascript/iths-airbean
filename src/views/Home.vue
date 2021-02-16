<template>
  <div class="home">
    <h1>Home</h1>
  </div>
</template>

<script>
import { fetchProducts, registerUser, makeOrder } from "@/api/mock";
export default {
  name: "Home",
  data() {
    return {
      data: "",
      user: "",
      order: "",
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
    async orders() {
      try {
        this.order = await makeOrder("", {
          items: [{ item1: "milk" }, { item2: "coffee" }],
        });
        console.log(this.order);
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getData();
    this.register();
    this.orders();
  },
};
</script>
