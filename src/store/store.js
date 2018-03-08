import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    allInfo: []
  },
  getters: {
    // 暴露数据出去
    // getAllInfo: state => state.allInfo ? state.allInfo : '',
  },
  mutations: {
    // 方法
    // hideMenu (state) {
    //   state.isMenuShow = false
    // }
  },
  actions: {
    // 回调处理AJAX回来的参数
    // set_AllInfo ({commit}, ele) {
    //   commit('obtain', ele)
    // }
  },
  modules: {
    // 模块
  }
})

export default store
