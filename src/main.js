import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './service/store'
import ElementUI from 'element-ui';
import './assets/theme/index.css';
import api from './service/api'
import moment from "moment";
import './router/routerConfig';


 import vuescroll from 'vuescroll';
    import 'vuescroll/dist/vuescroll.css';
     Vue.use(vuescroll);


import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
//import 'swiper/dist/css/swiper.css'
import 'swiper/css/swiper.css'

import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
Vue.use(Viewer);
Viewer.setDefaults({
  Options: { "inline": true, "button": true, "navbar": true, "title": true, "toolbar": true, "tooltip": true, "movable": true, "zoomable": true, "rotatable": true, "scalable": true, "transition": true, "fullscreen": true, "keyboard": true, "url": "data-source" }
});



Vue.prototype.$api = api
Vue.prototype.$moment = moment
Vue.use(ElementUI);
Vue.config.productionTip = false

var vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

let token = window.localStorage.getItem('token')
vm.$store.commit('saveToken', token)

let mobile = window.localStorage.getItem('mobile')
vm.$store.commit('saveMobile', mobile)

// if (window.localStorage.getItem('userInfo')) {
//   let userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
//   vm.$store.commit('saveUserInfo', userInfo)
// }

export default vm

