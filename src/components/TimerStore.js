import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    INCREMENT (state) {
      state.count++
    }
  },
  getters: {
    count: state => state.count
  },
  actions: {
    increment: (store) => {
      store.commit('INCREMENT')
    }
  }
})
export default store
