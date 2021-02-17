<template>
<router-link to="/about">
  <section class="home">
      <img src="@/assets/airbean-landing.svg" alt="">
  </section>
</router-link>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss" scoped>
.home{
  height: 100%;
  background: 
    url('../assets/intro-graphic-left.svg')
    top left
    no-repeat,
    url('../assets/intro-graphic-right.svg')
    top right
    no-repeat
  ;
  background-color: $airbean-green;
  background-size: contain;

  display: grid;
  place-items: center;
}
</style>
