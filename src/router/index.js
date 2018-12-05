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
import CommodityManagement from '../components/table/CommodityManagement'
import InstantMessaging from '../components/table/InstantMessaging'
import Notification from '../components/table/Notification'
import Recruit from '../components/table/Recruit'
import Rent from '../components/table/Rent'
import ShopAdministration from '../components/table/ShopAdministration'

Vue.use(Router);

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
        },
        {
          name: 'CommodityManagement',
          path: '/CommodityManagement',
          component: CommodityManagement
        },
        {
          name: 'InstantMessaging',
          path: '/InstantMessaging',
          component: InstantMessaging
        },
        {
          name: 'Notification',
          path: '/Notification',
          component: Notification
        },
        {
          name: 'Recruit',
          path: '/Recruit',
          component: Recruit
        },
        {
          name: 'Rent',
          path: '/Rent',
          component: Rent
        },
        {
          name: 'ShopAdministration',
          path: '/ShopAdministration',
          component: ShopAdministration
        },
      ]
    }
  ]
})
