<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: black;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  margin: 0 auto;
  background: #fff;
  padding: 2rem;
  font-size: 1.21rem;
  font-weight: 575;
}
body,
html {
  
  margin: 0;
  padding: 0;
}
</style>
