<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body{background-color: transparent;}
h1, h2, h3, h4, h5, h6 {
    font-family: 'PingFang SC','Helvetica Neue',Helvetica,'Hiragino Sans GB',STHeitiSC-Light,'Microsoft YaHei',Arial,sans-serif;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
