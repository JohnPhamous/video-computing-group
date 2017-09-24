// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Header from './components/HeaderAmit'
import Nav from './components/NavAmit'
import Footer from './components/FooterAmit'

Vue.component('Header', Header)
Vue.component('Nav', Nav)
Vue.component('Footer', Footer)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
