import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/views/login'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/login',
      // 注意路径要加/,component不要写错
      component: login
    }
  ]
})

export default router
