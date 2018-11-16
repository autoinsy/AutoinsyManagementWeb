import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import index from '../components/table/index'
import Calendar from '../components/table/Calendar'
import TableUser from '../components/table/TableUser'
import infor from '../components/table/infor'
import numberBox from '../components/table/NumberBox'
import middle from '../components/table/middle'
import lastIndex from '../components/table/lastindex'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          name: '/',
          path: 'index',
          component: index
        },
        {
          name: 'Calendar',
          path: '/Calendar',
          component: Calendar
        },
        {
          name: 'TableUser',
          path: '/TableUser',
          component: TableUser
        },
        {
          name: 'infor',
          path: '/infor',
          component: infor
        },
        {
          name: 'numberBox',
          path: '/numberBox',
          component: numberBox
        },
        {
          name: 'middle',
          path: '/middle',
          component: middle
        },
        {
          name: 'lastIndex',
          path: '/lastIndex',
          component: lastIndex
        }
      ]
    }
  ]
})
