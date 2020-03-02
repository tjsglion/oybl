import Vue from 'vue'
import App from './news.vue'
// import './about.scss'
import store from '@/store'

new Vue({
  store,
  // mixins: [myFilter],
  render: h => h(App)
}).$mount('#app')
