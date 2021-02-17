import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import CoffeeMenu from '@/views/CoffeeMenu.vue'
import OrderStatus from '@/views/OrderStatus.vue'
import RouterLinkMenu from '@/views/RouterLinkMenu.vue'
import Profile from '@/views/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/coffeemenu',
    name: 'Coffee menu',
    component: CoffeeMenu
  },
  {
    path: '/orderstatus',
    name: 'Landing page',
    component: OrderStatus
  },

  {
    path: '/navigation',
    name: 'Router link menu',
    component: RouterLinkMenu
  },

  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
