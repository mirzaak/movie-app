import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Popularmovies from '../views/movies/Popular.vue'
import Login from '../views/Login.vue'
import Populartv from '../views/tv/Populartv.vue'
import Search from '../views/Search.vue'
import Moviedetails from '../views/Moviedetails.vue'

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
  {
    path: '/tvpopular',
    name: 'Populartv',
    component: Populartv
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/movie/:id',
    name: 'Moviedetails',
    component: Moviedetails
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
