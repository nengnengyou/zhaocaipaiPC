import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import personRouter from "./personRouter";
Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
	  // component: () => import('../views/life/Life.vue')
    }, {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    }, {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },{
      path: '/reg',
      name: 'reg',
      component: () => import('../views/Reg.vue')
    }, {
      path: '/forget',
      name: 'forget',
      component: () => import('../views/Forget.vue')
    },
    {
      path: '/referDetl',
      name: 'referDetl',
      component: () => import('../views/referDetl.vue')
    },
    /* 拍卖大厅 */
    {
      path: '/auctionhome',
      name: 'auctionhome',
      meta: {
        isLogin: true
      },
      component: () => import('../views/AuctionHome.vue')
    }, {
      path: '/auctionhome/auction',
      name: 'auction',
      meta: {
        isLogin: true
      },
      component: () => import('../views/Auction.vue')
    }, {
      path: '/auctionhome/auctiondetail',
      name: 'auctiondetail',
      meta: {
        isLogin: true
      },
      component: () => import('../views/AuctionDetail.vue')
    },
    {
      path: '/auctionhome/blukauction',
      name: 'blukauction',
      meta: {
        isLogin: true
      },
      component: () => import('../views/BlukAuction.vue')
    },
    /* 我要买车 */
    {
      path: '/buycomm',
      name: 'buycomm',
      component: () => import('../views/BuyComm.vue')
    }, {
      path: '/buystore',
      name: 'buystore',
      component: () => import('../views/BuyStore.vue')
    }, {
      path: '/buystoredetail',
      name: 'buystoredetail',
      component: () => import('../views/BuyStoreDetail.vue')
    }, {
      path: '/service',
      name: 'service',
      component: () => import('../views/Service.vue')
    },
    /* 招财生活 */
    {
      path: '/life',
      name: 'life',
      component: () => import('../views/life/Life.vue')
    }, {
      path: '/life/lifeclassify',
      name: 'lifeclassify',
      component: () => import('../views/life/LifeClassify.vue')
    },
    {
      path: '/life/lifelist',
      name: 'lifelist',
      component: () => import('../views/life/LifeList.vue')
    }, {
      path: '/life/zhaodetail',
      name: 'zhaodetail',
      component: () => import('../views/life/ZhaoDetail.vue')
    },

    {
      path: '/sell',
      name: 'sell',
      component: () => import('../views/Sell.vue')
    },
    {
      path: '/cardetail',
      name: 'cardetail',
      component: () => import('../views/CarDetail.vue')
    },
    /* peroson */
    {
      path: '/person',
      name: 'person',
      component: () => import('../views/person/Person.vue'),
      children: personRouter
    },
	//新增  随手拍物
	{
	  path: '/conveniently',
	  name: 'conveniently',
	  component: () => import('../views/Conveniently.vue'),	  
	},
	//新增  直播
	{
	  path: '/livehome',
	  name: 'livehome',
	  component: () => import('../views/live/livehome.vue'),	  
	},{
	  path: '/live',
	  name: 'live',
	  component: () => import('../views/live/live.vue'),	  
	},
	//车友圈
	{
	  path: '/quan',
	  name: 'quan',
	  component: () => import('../views/Quan.vue'),	  
	},//维保
	{
	  path: '/weibao',
	  name: 'weibao',
	  component: () => import('../views/Weibao.vue'),	  
	},//配件商城入驻
	{
	  path: '/sell2',
	  name: 'sell2',
	  component: () => import('../views/Sell2.vue'),	  
	},
	//检测报告
	{
	  path: '/jiance',
	  name: 'jiance',
	  component: () => import('../views/Jiance.vue'),	  
	},//检测报告xg
	{
	  path: '/jiancexg',
	  name: 'jiancexg',
	  component: () => import('../views/Jiancexg.vue'),	  
	},{
	  path: '/jiancelist',
	  name: 'jiancelist',
	  component: () => import('../views/Jiancelist.vue'),	  
	},{
	  path: '/daping',
	  name: 'daping',
	  component: () => import('../views/Daping.vue'),	  
	},

  ],
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { x: 0, y: 0 }
  }
})
