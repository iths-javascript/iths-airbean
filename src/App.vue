<template>
  <div id="app">
    <Hamburger v-if="['home'].indexOf($route.name) <= -1"/>
    <router-view/>
  </div>
</template>

<script>
import Hamburger from '@/components/Hamburger.vue'
export default {
  components: {
    Hamburger,
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=PT+Serif&family=Work+Sans&display=swap');
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: grey;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
