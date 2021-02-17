<template>
  <div>
    <Navbar/>
    <h1>Coffee menu</h1>
    <CoffeeMenuItem/>
  </div>
  
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import CoffeeMenuItem from '@/components/CoffeeMenuItem.vue'
export default {
  components: {Navbar, CoffeeMenuItem}
}
</script>

<style scoped>
</style>