<template>
  <div class="content">
    <h1>Menu</h1>
    <ul>
      <li v-for="(item, index) in Coffee" :key="index">
        <div class="addCoffee">
          <img src="../assets/add.svg" alt="add-butt" />
          <div class="coffee">
            <div class="coffee-title">
              <h3>{{ item.title }}</h3>
              <p>{{ item.desc }}</p>
            </div>
            <div class="coffee-price">
              <h3>{{ item.price }} SEK</h3>
            </div>
          </div>
        </div>
      </li>
    </ul>
    
    <button @click="getCoffee">Click!</button>
    
  </div>
</template>


<script>
export default {
    methods: {
    getCoffee() {
      this.$store.dispatch("getCoffee");
    },
  },
  computed: {
    Coffee() {
      return this.$store.state.coffeeMenu;
    },
  },

}
</script>


<style scoped>

</style>


