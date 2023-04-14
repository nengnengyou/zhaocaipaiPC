import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    userToken: '',
	userMobile:'',
  },
  getters: {
    isLogin: state => state.isLogin,
    getToken: state => state.userToken,
	getMobile: state => state.userMobile,
  },
  mutations: {
    clear (state, flag) {
      state.isLogin = ''
      state.userToken = ''
      state.userMobile = ''
    },
    saveIsLogin (state, flag) {
      state.isLogin = flag
    },
    saveToken (state, flag) {
      state.userToken = flag
    },
	saveMobile (state, flag) {
	  state.userMobile = flag
	},
  },
  actions: {

  }
})
