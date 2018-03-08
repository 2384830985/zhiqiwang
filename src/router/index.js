import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/componentHome/home'
import Page from '@/components/componentPage/page'
import Connoisseur from '@/components/componentConnoisseur/connoisseur'
import Component404 from '@/components/Component404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', // 默认
      redirect: '/home' // 重定向到home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '',
          redirect: '/home/page'
        },
        {
          path: '/home/page',
          component: Page
        },
        {
          path: '/home/connoisseur',
          component: Connoisseur
        }
      ]
    },
    {
      path: '*', // 404
      component: Component404
    }
  ]
})
