<template>
  <div class="home" @click="enter">
    <h1>Air bean delivered coffee</h1>
 
    



  </div>
</template>

<script>
export default {
  name: 'Home',

  methods:{

    enter(){

      this.$router.push('/coffeemenu')
    }
  }
}
</script>

<style scoped>
.home{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: teal;
  height: 100vh;
}
</style>
