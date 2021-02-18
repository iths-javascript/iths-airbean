import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import MenuPage from '../views/MenuPage.vue'
import CartView from '../views/CartView.vue'
import StatusPage from '../views/StatusPage.vue'
import ProfilePage from '../views/ProfilePage.vue'
import NavigationPage from '../views/NavigationPage.vue'

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
    path: '/menu',
    name: 'Menu',
    component: MenuPage
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartView
  },
  {
    path: '/status',
    name: 'Status',
    component: StatusPage
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfilePage
  },
  {
    path: '/nav',
    name: 'NavigationPage',
    component: NavigationPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
