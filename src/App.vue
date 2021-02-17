<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Meny</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/profile">profile</router-link>
    </div>
    <img src="@/assets/intro-graphic-left.svg" />
    <img  class="logo" src="@/assets/airbean-landing.svg" />
    <img src="@/assets/intro-graphic-right.svg" />

    <router-view />
  </div>
</template>

<style lang="scss">

div {
  background: #38846d;
}
img.logo {
  top: 50%;
  left: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
