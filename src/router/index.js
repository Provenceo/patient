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
      path: '/login',
      name: 'login',
      component: () => import('@/components/login'),
    },
    {
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
          path: 'patient',
          name: 'patient',
          component: () => import('@/views/patient/index'),
          meta: {
            requireAuth: true,
            navShow: true
          },
        },
        {
          path: 'addPatient',
          name: 'addPatient',
          component: () => import('@/views/patient/add'),
          meta: {
            requireAuth: true,
            navShow: false
          },
        },
        {
          path: 'detail/:id',
          name: 'detail',
          component: () => import('@/views/patient/detail'),
          meta: {
            requireAuth: true,
            navShow: false
          },
        },
        {
          path: 'record/:detail',
          name: 'record',
          component: () => import('@/views/patient/records'),
          meta: {
            requireAuth: true,
            navShow: false
          },
        },
        {
          path: 'newNutritionPrescription/:id',
          name: 'newNutritionPrescription',
          component: () => import('@/views/patient/newNutritionPrescription'),
          meta: {
            requireAuth: true,
            navShow: false
          },
        },
        {
          path: 'TreatmentPlan/:id',
          name: 'TreatmentPlan',
          component: () => import('@/views/patient/TreatmentPlan'),
          meta: {
            requireAuth: true,
            navShow: false
          },
        },
        {
          path: 'HistoricalPlan/:id',
          name: 'HistoricalPlan',
          component: () => import('@/views/patient/HistoricalPlan'),
          meta: {
            requireAuth: true,
            navShow: false
          },
        },
        {
          path: 'HistoricalCases/:id',
          name: 'HistoricalCases',
          component: () => import('@/views/patient/HistoricalCases'),
          meta: {
            requireAuth: true,
            navShow: false
          },
        },
        {
          path: 'SoftFood/:item',
          name: 'SoftFood',
          component: () => import('@/views/patient/SoftFood'),
          meta: {
            requireAuth: true,
            navShow: false
          },
        },
        {
          path: 'SemiLiquidFood/:item',
          name: 'SemiLiquidFood',
          component: () => import('@/views/patient/SemiLiquidFood'),
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
  if (to.name !== "SemiLiquidFood" && to.name !== "SoftFood" && to.name !== "newNutritionPrescription" && to.name !== "TakingProducts") {
    localStorage.removeItem("form")
  }
  //   // 在判断时，需要将 login 路由排除掉
  //   if (to.meta.requireAuth == true) {
  //     // 判断用户是否登录:验证 token
  //     var token = window.sessionStorage.getItem('token')
  //     if (!token && to.path !== '/404') {
  //       Toast('您还没有登录，请先登录')
  //       router.push('/login')
  //     } else {
  //       next()
  //     }
  //   } else {
  next()
  //   }
})

export default router
