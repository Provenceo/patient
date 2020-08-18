import Vue from 'vue'
import Router from 'vue-router'
import {
  Toast
} from 'vant';
Vue.use(Router)
Vue.use(Toast);
var router = new Router({
  // mode: "history",
  routes: [{
      path: '/wechatAuthorization',
      name: 'wechatAuthorization',
      component: () => import('@/components/wechatAuthorization'),
    },
    {
      path: '/',
      name: 'index',
      component: () => import('@/common/index'),
      redirect: '/home',
      children: [{
          path: 'home',
          name: 'home',
          component: () => import('@/views/dashboard/index'),
          meta: {
            requireAuth: true,
            navShow: true
          },
        },
        {
          path: 'fangan/:id',
          name: 'fangan',
          component: () => import('@/views/dashboard/fangan'),
          meta: {
            requireAuth: true,
            navShow: false
          },
        },
        {
          path: 'patient',
          name: 'patient',
          component: () => import('@/views/patient/index'),
          meta: {
            requireAuth: true,
            navShow: true
          },
        },
        {
          path: 'BodyAndExercise',
          name: 'BodyAndExercise',
          component: () => import('@/views/patient/BodyAndExercise'),
          meta: {
            requireAuth: true,
            navShow: false
          },
        },
        {
          path: 'DrugUse',
          name: 'DrugUse',
          component: () => import('@/views/patient/DrugUse'),
          meta: {
            requireAuth: true,
            navShow: false
          },
        },
        {
          path: 'bool',
          name: 'bool',
          component: () => import('@/views/patient/bool'),
          meta: {
            requireAuth: true,
            navShow: false
          },
        },
        {
          path: 'Physical',
          name: 'Physical',
          component: () => import('@/views/patient/Physical'),
          meta: {
            requireAuth: true,
            navShow: false
          },
        },
        {
          path: 'TreatmentPlan/:item',
          name: 'TreatmentPlan',
          component: () => import('@/views/patient/TreatmentPlan'),
          meta: {
            requireAuth: true,
            navShow: false
          },
        },
        {
          path: 'HistoricalPlan',
          name: 'HistoricalPlan',
          component: () => import('@/views/patient/HistoricalPlan'),
          meta: {
            requireAuth: true,
            navShow: false
          },
        },
        {
          path: 'myPlan/:id',
          name: 'plan',
          component: () => import('@/views/patient/plan'),
          meta: {
            requireAuth: true,
            navShow: false
          },
        },
        {
          path: 'jkrzxc/:id',
          name: 'jkrzxc',
          component: () => import('@/views/patient/jkrzxq'),
          meta: {
            requireAuth: true,
            navShow: false
          },
        },
        {
          path: 'HistoricalCases',
          name: 'HistoricalCases',
          component: () => import('@/views/patient/HistoricalCases'),
          meta: {
            requireAuth: true,
            navShow: false
          },
        },
        {
          path: 'MyRecordDetail/:id',
          name: 'MyRecordDetail',
          component: () => import('@/views/patient/MyRecordDetail'),
          meta: {
            requireAuth: true,
            navShow: false
          },
        },
        {
          path: 'Historicalyycf',
          name: 'Historicalyycf',
          component: () => import('@/views/patient/Historicalyycf'),
          meta: {
            requireAuth: true,
            navShow: false
          },
        },
        {
          path: 'yycf/:id',
          name: 'yycf',
          component: () => import('@/views/patient/yycf'),
          meta: {
            requireAuth: true,
            navShow: false
          },
        },
        {
          path: 'food',
          name: 'food',
          component: () => import('@/views/patient/food'),
          meta: {
            requireAuth: true,
            navShow: false
          },
        },
        {
          path: 'line',
          name: 'line',
          component: () => import('@/views/patient/line'),
          meta: {
            requireAuth: true,
            navShow: false
          },
        },
        {
          path: 'TakingProducts',
          name: 'TakingProducts',
          component: () => import('@/views/patient/TakingProducts'),
          meta: {
            requireAuth: true,
            navShow: false
          },
        },
        {
          path: 'consultant',
          name: 'consultant',
          component: () => import('@/views/Consultant/index'),
          meta: {
            requireAuth: true,
            navShow: true
          },
        },
        {
          path: 'remind',
          name: 'remind',
          component: () => import('@/views/Consultant/remind'),
          meta: {
            requireAuth: true,
            navShow: false
          },
        },
        {
          path: 'my',
          name: 'my',
          component: () => import('@/views/my/index'),
          meta: {
            requireAuth: true,
            navShow: true
          },
        },
        {
          path: 'mydoctor',
          name: 'mydoctor',
          component: () => import('@/views/my/mydoctor'),
          meta: {
            requireAuth: true,
            navShow: false
          },
        },
        {
          path: 'myrecord',
          name: 'myrecord',
          component: () => import('@/views/my/myrecord'),
          meta: {
            requireAuth: true,
            navShow: false
          },
        },
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 新增营养处方需要用到localStorage 同时需要跨页面选择
  if (to.name !== "TreatmentPlan" && to.name !== "food") {
    localStorage.removeItem("form")
  }
  // sessionStorage.setItem('token','c76c889d8d1ca8b025a3edd16383acf6')
  // 在判断时，需要将 login 路由排除掉
  if (to.meta.requireAuth == true) {
    // 判断用户是否登录:验证 token
    var token = window.sessionStorage.getItem('token')
    if (!token && to.path !== '/404') {
      // Toast('请授权后登陆')
      router.push('/wechatAuthorization')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
