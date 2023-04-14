export default [
  {
    path: '',
    name: 'center',
    component: () => import('../views/person/Center.vue')
  }, {
    path: 'order/:type',
    name: 'order',
    component: () => import('../views/person/Order.vue')
  }, {
    path: 'service',
    name: 'service',
    component: () => import('../views/person/Service.vue')
  },
  {
    path: 'buycar',
    name: 'buycar',
    component: () => import('../views/person/buycar.vue')
  }, {
    path: 'address',
    name: 'address',
    component: () => import('../views/person/Address.vue')
  }, {
    path: 'design',
    name: 'design',
    component: () => import('../views/person/Design.vue')
  }, {
    path: 'designmanage',
    name: 'designmanage',
    component: () => import('../views/person/DesignManage.vue')
  }, {
    path: 'designdata',
    name: 'designdata',
    component: () => import('../views/person/DesignData.vue')
  }, {
    path: 'myauction',
    name: 'myauction',
    component: () => import('../views/person/MyAuction.vue')
  }, {
    path: 'mypaiwu',
    name: 'mypaiwu',
    component: () => import('../views/person/MyPaiwu.vue')
  },  {
    path: 'wallet/:type',
    name: 'wallet',
    component: () => import('../views/person/Wallet.vue')
  }, {
    path: 'collect/:type',
    name: 'collect',
    component: () => import('../views/person/Collect.vue')
  }, {
    path: 'logistics',
    name: 'logistics',
    component: () => import('../views/person/Logistics.vue')
  }, {
    path: 'share',
    name: 'share',
    component: () => import('../views/person/Share.vue')
  }, {
    path: 'ServeLsit',
    name: 'ServeLsit',
    component: () => import('../views/person/ServeList.vue')
  },
  {
    path: 'Alipay',
    name: 'Alipay',
    component: () => import('../views/person/Alipay.vue')
  },
  {
    path: 'designs',
    name: 'designs',
    component: () => import('../views/person/Designs.vue')
  }
]
