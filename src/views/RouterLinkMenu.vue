<template>
<div class="page-container">
  
  <p class="navigation" @click="goBack">X</p>


  <nav>
      
      <router-link class="navigation" to="/about">Vårt kaffe</router-link>
      <router-link class="navigation" to="/coffeemenu">Meny</router-link>
      <router-link class="navigation" to="/profile">Min profil</router-link>
      <router-link class="navigation" to="/orderstatus">Order status</router-link>


    </nav>
   
    </div>
</template>

<script>
export default {

  methods:{

    goBack(){
this.$router.go(-1)

    }
  }

}
</script>

<style scoped>

.page-container{
  
  background-color: black;
  height: 100vh;
  
}

.navigation{
  color:white;
  cursor: pointer;
  
}
</style>