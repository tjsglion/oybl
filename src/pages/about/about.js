import Vue from 'vue'
import App from './about.vue'
// import './about.scss'
import store from '@/store'
import animated from 'animate.css'
Vue.use(animated)
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
