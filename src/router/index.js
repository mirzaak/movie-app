import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Popularmovies from '../views/movies/Popular.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/moviepopular',
    name: 'Popularmovies',
    component: Popularmovies
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
