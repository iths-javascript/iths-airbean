import Vue from 'vue'
import VueRouter from 'vue-router'
import Meny from '../views/Meny.vue'
import About from '../views/About.vue'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/meny',
    name: 'Meny',
    component: Meny
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
