<template>
  <div id="app">
    <h1>Home Page</h1>
    <router-link to="/first">First</router-link>
    <br />
    <router-link to="/second">Second</router-link>
    <br />
    <router-link to="/third">Third</router-link>
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>
