import Vue from 'vue'
import Home from '@/views/Home'
import Router from 'vue-router'
import Pool from '@/views/Pool'


Vue.use(Router)
export default new Router({

  routes: [
  
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/pool',
      name: 'Pool',
      component:Pool
    }

  ]
})
