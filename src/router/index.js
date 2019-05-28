import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import top from '@/components/top'
import about from '@/components/about'
import contact from '@/components/contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: top
    },
    {
      path: '/about',
      component: about
    },
    {
      path: '/contact',
      component: contact
    },
    {
      path: '/HelloWorld',
      component: HelloWorld
    }
  ]
})
