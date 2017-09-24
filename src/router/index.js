import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Data from '@/components/Data'
import Publications from '@/components/Publications'
import PeopleHome from '@/components/PeopleHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/datasets',
      name: 'Datasets',
      component: Data
    },
    {
      path: '/publications',
      name: 'Publications',
      component: Publications
    },
    {
      path: '/people',
      name: 'PeopleHome',
      component: PeopleHome
    }
  ],
  mode: 'history'
})
