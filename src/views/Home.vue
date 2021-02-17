<template>
<div class="home">
    <img src="@/assets/intro-graphic-left.svg" />
    <img  class="logo" src="@/assets/airbean-landing.svg" />
    <img src="@/assets/intro-graphic-right.svg" />
    </div>
</template>

<script>
export default {
    name : "Home",
}
</script>


<style lang="scss" scoped>
div {
  background: #38846d;
}
img.logo {
  top: 50%;
  left: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
}
</style>