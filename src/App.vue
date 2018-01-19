<template>
  <div id="app" class="snowMask">
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
body{background: #F5F5F5 url(./assets/img/lvlogon.png);}
@keyframes snow{
        0% {
          background-position: 0 0, 0 0;
        }
        100% {
          background-position: 500px 500px, 1000px 500px;
        }
      }
      .snowMask {
        position: relative;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: url('./assets/img/snow1.png'),url('./assets/img/snow2.png');
        animation: 10s snow linear infinite;
        /*pointer-events: none;*/
        z-index: 0;
      }
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
