import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  isFixed: 0
}

const mutations = {
  setFixed (state, data) {
    state.isFixed = data || 0
  }
}

const getters = {
  getFixed (state) {
    return state.isFixed
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters
})
