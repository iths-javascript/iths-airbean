<template>
  <div>
    <div class="icon">
      <img :src="icon" alt="menu-icon" @click="open = !open">
    </div>
    <div class="menu" v-if="open">
      <router-link @click.native="open = false" :to="{name: 'about'}" >Meny</router-link >
      <hr/>
      <router-link @click.native="open = false" :to="{name: 'about'}" >Vårt kaffe</router-link >
      <hr/>
      <router-link @click.native="open = false" :to="{name: 'about'}" >Min profil</router-link >
      <hr/>
      <router-link @click.native="open = false" :to="{name: 'about'}" >Order status</router-link >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false
    }
  },
  computed: {
    icon () {
      if (this.open) {
        return require('../assets/close.svg')
      } else {
        return require('../assets/navicon.svg')
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.icon {
  background: white;
  padding: 0.5rem;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  margin: 1rem 0 0 1rem;
  z-index: 2;
  img {
    width: 1.5rem;
  }
}

.menu {
  position: fixed;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background: $airbean-brown;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
    color: white;
    font-size: 2rem;
  }
  hr {
    width: 3rem;
  }
  a, hr {
    margin-bottom: 1rem;
  }
}

</style>