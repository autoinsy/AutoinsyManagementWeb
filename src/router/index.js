import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import index from '@/components/table/index'
import Calendar from '@/components/table/Calendar'
import table from '@/components/table/table'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          name: '',
          path: 'index',
          component:index
        },
        {
          name: 'Calendar',
          path: '/Calendar',
          component: Calendar
        },
        {
          name: 'table',
          path: '/table',
          component: table
        },
      ]
    }
  ]
})
