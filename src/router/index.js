import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/card',
    component: () => import('../components/UserCard.vue')
  },
  {
    path: '/staff',
    component: () => import('../components/StaffInfo.vue')
  },
  {
    path: '/review',
    component: () => import('../views/ReviewPolicy.vue')
  },
  {
    path: '/users',
    component: () => import('../views/InsurerList.vue')
  },
  {
    path: '/calculate',
    component: () => import('../views/TrailCalculate2.vue')
  },
  {
    path: '/jobtask',
    component: () => import('../views/ProductTrack.vue')
  },
  {
    path: '/policy',
    component: () => import('../views/PolicyCal.vue')
  },
  {
    path: '/policy2',
    component: () => import('../views/PolicyCal2.vue')
  },
  {
    path: '/insuranceform',
    component: () => import('../components/InsuranceForm.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
