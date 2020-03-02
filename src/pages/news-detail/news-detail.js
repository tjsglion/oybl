import Vue from 'vue'
import App from './news-detail.vue'
// import './about.scss'
import store from '@/store'

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
