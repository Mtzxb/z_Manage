import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'
Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path:"/home",
        name: 'home',
        meta: {
          title: '首页',
          code: '10001',
          icon: 'el-icon-s-home'
        },
        component: () => import('@/views/home')
      },
      {
        path: "/member",
        name: 'member',
        meta: {
          title: '会员管理',
          code: '10002',
          icon: 'el-icon-s-custom'
        },
        component: () => import('@/views/memberManage')
      },
      {
        path: "/goods",
        name: 'goods',
        meta: {
          title: '商品管理',
          code: '10003',
          icon: 'el-icon-s-goods'
        },
        component: () => import('@/views/memberManage')
      },
      {
        path: "/statics",
        name: 'statics',
        meta: {
          title: '统计',
          code: '10004',
          icon: 'el-icon-s-data'
        },
        component: () => import('@/views/memberManage')
      },
      {
        path: "/orders",
        name: 'orders',
        meta: {
          title: '订单管理',
          code: '10005',
          icon: 'el-icon-s-order'
        },
        component: () => import('@/views/memberManage')
      },
      {
        path: "/setting",
        name: 'setting',
        meta: {
          title: '设置',
          code: '10006',
          icon: 'el-icon-s-tools'
        },
        component: () => import('@/views/memberManage')
      }
    ]
  }
]

const router = new Router({
  routes
})
router.afterEach((to, from) => {
  document.title = '管理系统 - ' + to.meta.title;
})
export default router
