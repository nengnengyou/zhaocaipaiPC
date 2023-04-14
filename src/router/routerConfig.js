import router from './router'
import vm from '../main'
import local from '../service/localstorage'

/* 同步用户登录信息 */
// local.syncUserInfo()
/* 路由守卫 */
router.beforeEach((to, from, next) => {
  setTimeout(() => {
    if (vm.$store.getters.getToken) {
      /* 判断login页面 */
      if (to.name == 'login' || to.name == 'register') {
        next({
          path: '/person',
        })
      } else {
        next()
      }
    } else {
      if (to.meta.isLogin) {
        next({
          path: '/login',
        })
        vm.$message('检测到您未登录，请先登录');
      } else {
        next()
      }
    }
  }, 0);

});