import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/home',
      redirect:'/'
    },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/one',
    name: 'one',
    component: () => import('../views/one/One')
  },
  {
    path: '/parent',
    name: 'parent',
    component:() => import('../views/parent/Parent'),
    children:[
      {
        path:'child',
        name:'CHild',
        component: () =>import('../views/child/Child')
      },
      {
        path:'first',
        name:'first',
        component: () =>import('../views/first/first')
      }
    ]
  },
  {
    path: '*',
    component: () => import('../views/err/Err')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
