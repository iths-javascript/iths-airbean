<template>
  <div class="home">
    <h1>Home</h1>
  </div>
</template>

<script>
import {
  fetchProducts,
  registerUser,
  makeOrder,
  fetchOrderHistory,
} from "@/api/mock";
export default {
  name: "Home",
  data() {
    return {
      data: "",
      user: "",
      order: "",
      oldOrders: "",
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
        this.order = await makeOrder("3b4f3931-8191-4ca1-977c-4f6df4231b54", {
          items: [{ item1: "milk" }, { item2: "coffee" }],
        });
        console.log(this.order);
      } catch (error) {
        console.log(error);
      }
    },
    async orderHistory() {
      this.orders = await fetchOrderHistory(
        "3b4f3931-8191-4ca1-977c-4f6df4231b54"
      );
      console.log(this.orders, "orders");
    },
  },
  created() {
    // this.getData();
    // this.register();
    // this.orders();
    this.orderHistory();
  },
};
</script>
