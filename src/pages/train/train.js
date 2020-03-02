import Vue from 'vue'
import App from './train.vue'
// import './about.scss'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import store from '@/store'

Vue.use(VueAwesomeSwiper)
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
