<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Ranchers&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@200;300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400&display=swap');
#app {
  font-family: 'Kanit', Avenir, Helvetica, Arial, sans-serif,'Montserrat', sans-serif,'Ranchers', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0px;
}
a {
  text-decoration: none;
}
</style>
