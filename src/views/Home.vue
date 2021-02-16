<template>
  <div class="home">
    <navigation-page />
    <cheeseburger />
    <h1>ALEX MERGE TEST</h1>
  </div>
</template>

<script>

import Hamburger from '@/components/Hamburger.vue'
import NavigationPage from '@/views/NavigationPage.vue'

export default {
  name: 'Home',

  components: {
    Cheeseburger : Hamburger,
    NavigationPage: NavigationPage
  }
}
</script>
