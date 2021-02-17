<template>
  <div class="meny"></div>
</template>

<script>
import IntroGraphichsLeft from "@/assets/intro-graphic-left.svg";
import AirbeanLanding from "@/assets/airbean-landing.svg";
import IntroGraphichsRight from "@/assets/intro-graphic-right.svg";

export default {
  name: "Meny",

  component: {
    IntroGraphichsLeft,

    AirbeanLanding,

    IntroGraphichsRight,
  },
};
</script>

<style lang="scss" scoped>
div {
  background: #38846d;
}
svg.logo {
  top: 50%;
  left: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
}
</style>
