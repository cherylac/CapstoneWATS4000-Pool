import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import Home from '@/views/Home'
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
      path: '/pool',
      name: 'Pool',
      component: Pool
    }

  ]
})
