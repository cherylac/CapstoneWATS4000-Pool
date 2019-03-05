import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import Home from '@/views/Home'
import Router from 'vue-router'
//import Pool from '@/views/Pool'

Vue.use(Router)
export default new Router({

  routes: [
    {
      path: '/',
      name: 'Home',
      components: Home
    },

    {
      path: './App',
      name: 'App',
      components: App
    }

  ]
})
