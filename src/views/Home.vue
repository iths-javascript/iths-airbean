<template>
  <div class="home">
    <h1>Home</h1>
  </div>
</template>

<script>
import { fetchProducts } from "@/api/mock";
export default {
  name: "Home",
  data() {
    return {
      data: "",
    };
  },
  methods: {
    async getData() {
      this.data = await fetchProducts();
      console.log(this.data);
    },
  },
  created() {
    this.getData();
  },
};
</script>
