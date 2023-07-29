import Vue from 'vue'
import Router from 'vue-router'
import mainPage from './components/Home.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/mainPage' },
    { path: '/mainPage', component: mainPage }

  ]
})



export default router
