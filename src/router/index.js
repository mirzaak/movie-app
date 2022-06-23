import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Popularmovies from '../views/movies/Popular.vue'
import Nowplayingmovies from '../views/movies/Nowplaying.vue'
import Upcomingmovies from '../views/movies/Upcoming.vue'
import Topratedmovies from '../views/movies/Toprated.vue'
import Login from '../views/Login.vue'
import Populartv from '../views/tv/Populartv.vue'
import Airingtodaytv from '../views/tv/Airingtoday.vue'
import Ontvtv from '../views/tv/Ontv.vue'
import Topratedtv from '../views/tv/Topratedtv.vue'
import Search from '../views/Search.vue'
import Searched from '../views/Searched.vue'
import Moviedetails from '../views/Moviedetails.vue'
import Tvdetails from '../views/Tvdetails.vue'
import Actordetails from '../views/Actordetails.vue'
import People from '../views/People.vue'
import PeoplePage from '../views/PeoplePage.vue'
import ActorTranslations from '../views/ActordetailsFile/ActorTranslations.vue'
import ActorChanges from '../views/ActordetailsFile/ActorChanges.vue'
import Seasons from '../views/TvComponents.vue/Seasons.vue'
import Season from '../views/TvComponents.vue/Season.vue'
import AlternativeTitles from '../views/MovieComponents/AlternativeTitles.vue'
import CastAndCrew from '../views/MovieComponents/CastAndCrew.vue'
import ReleaseDates from '../views/MovieComponents/ReleaseDates.vue'
import Translations from '../views/MovieComponents/Translations.vue'
import Changes from '../views/MovieComponents/Changes.vue'
import MediaVideos from '../views/MovieComponents/MediaVideos.vue'
import Backdrops from '../views/MovieComponents/MediaBackdrops.vue'
import Logos from '../views/MovieComponents/MediaLogos.vue'
import Posters from '../views/MovieComponents/MediaPosters.vue'





const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/moviespopular',
    name: 'Popularmovies',
    component: Popularmovies
  },
  {
    path: '/moviesnowplaying',
    name: 'Nowplayingmovies',
    component: Nowplayingmovies
  },
  {
    path: '/moviesupcoming',
    name: 'Upcomingmovies',
    component: Upcomingmovies
  },
  {
    path: '/moviestoprated',
    name: 'Topratedmovies',
    component: Topratedmovies
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
    path: '/tvairingtoday',
    name: 'Airingtodaytv',
    component: Airingtodaytv
  },
  {
    path: '/tvontv',
    name: 'Ontvtv',
    component: Ontvtv
  },
  {
    path: '/tvtoprated',
    name: 'Topratedtv',
    component: Topratedtv
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/search/:query',
    name: 'Searched',
    component: Searched
  },
  {
    path: '/movie/:id',
    name: 'Moviedetails',
    component: Moviedetails
  },
  {
    path: '/tv/:id',
    name: 'Tvdetails',
    component: Tvdetails
  },
  {
    path: '/people',
    name: 'People',
    component: People
  },
  {
    path: '/people/:page',
    name: 'PeoplePage',
    component: PeoplePage
  },
  {
    path: '/person/:id',
    name: 'Actordetails',
    component: Actordetails
  },
  {
    path: '/person/:id/translations',
    name: 'ActorTranslations',
    component: ActorTranslations
  },
  {
    path: '/person/:id/changes',
    name: 'ActorChanges',
    component: ActorChanges
  },
  {
    path: '/tv/:id/seasons',
    name: 'Seasons',
    component: Seasons
  },
  {
    path: '/tv/:id/season/:s',
    name: 'Season',
    component: Season
  },
  {
    path: '/movie/:id/titles',
    name: 'AlternativeTitles',
    component: AlternativeTitles
  },
  {
    path: '/movie/:id/cast',
    name: 'CastAndCrew',
    component: CastAndCrew
  },
  {
    path: '/movie/:id/releases',
    name: 'ReleaseDates',
    component: ReleaseDates
  },
  {
    path: '/movie/:id/translations',
    name: 'Translations',
    component: Translations
  },
  {
    path: '/movie/:id/changes',
    name: 'Changes',
    component: Changes
  },
  {
    path: '/movie/:id/videos',
    name: 'MediaVideos',
    component: MediaVideos
  },
  {
    path: '/movie/:id/backdrops',
    name: 'Backdrops',
    component: Backdrops
  },
  {
    path: '/movie/:id/logos',
    name: 'Logos',
    component: Logos
  },
  {
    path: '/movie/:id/posters',
    name: 'Posters',
    component: Posters
  },



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeResolve((to, from, next) => {

  if (to.name) {

    NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {

  NProgress.done()
})

export default router
