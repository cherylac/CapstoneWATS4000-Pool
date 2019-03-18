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
  font-family: "Handlee", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: black;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  margin: 0 auto;
  background-image: url("assets/backgroundsmaller.jpg");
  padding: 2rem;
  font-size: 1.2rem;
  font-weight: 550;
}
body,
html {
  
  margin: 0;
  padding: 0;
}
</style>
