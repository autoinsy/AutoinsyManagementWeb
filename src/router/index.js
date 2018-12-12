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
import Notification from '../components/table/Notification'
import Recruit from '../components/table/Recruit'
import Rent from '../components/table/Rent'
import ShopAdministration from '../components/table/ShopAdministration'
import TableUserJS from '../components/table/TableUserJS'
import TableUserSJ from '../components/table/TableUserSJ'
import Banner from '../components/table/Banner'
import BannerLB from '../components/table/BannerLB'
import AutoinsyManagement from '../components/table/AutoinsyManagement'
import Law from '../components/table/Law'
import News from '../components/table/News'
import Service from '../components/table/Service'
import Resume from '../components/table/Resume'

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
        {
          name: 'TableUserJS',
          path: '/TableUserJS',
          component: TableUserJS
        },
        {
          name: 'TableUserSJ',
          path: '/TableUserSJ',
          component: TableUserSJ
        },
        {
          name: 'Banner',
          path: '/Banner',
          component: Banner
        },
        {
          name: 'BannerLB',
          path: '/BannerLB',
          component: BannerLB
        },
        {
          name: 'AutoinsyManagement',
          path: '/AutoinsyManagement',
          component: AutoinsyManagement
        },
        {
          name: 'Law',
          path: '/Law',
          component: Law
        },
        {
          name: 'News',
          path: '/News',
          component: News
        },
        {
          name: 'Service',
          path: '/Service',
          component: Service
        },
        {
          name: 'Resume',
          path: '/Resume',
          component: Resume
        },
      ]
    }
  ]
})
