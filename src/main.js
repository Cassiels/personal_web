// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入jq
import jquery from 'jquery'
//引入bootstrap
import './assets/css/bootstrap.min.css'   
import './assets/js/bootstrap.min.js'   
//引入animate.css
import Animate from 'animate.css'
//swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/swiper-3.4.2.min.css'
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
