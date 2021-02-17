<template>
<div>
    <div class="shopping-cart">
    <h1>Shopping Cart</h1>
    <CartItem/>
    </div>
</div>

</template>

<script>
import CartItem from '@/components/CartItem.vue'
export default {
    components: {CartItem}
}
</script>

<style scoped>



.shopping-cart {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 200px;
  height: 350px;
  background-color: white;
  border: 2px solid black;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  padding: 8px;
}
</style>