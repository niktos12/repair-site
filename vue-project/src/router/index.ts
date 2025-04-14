import { createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/Main.vue'
import Catalog from '../pages/Catalog.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: Catalog
    },
    // {
    //   path: '/portfolio',
    //   name: 'portfolio',
    //   component: () => import('../views/Portfolio.vue')
    // },
    // {
    //   path: '/promotions',
    //   name: 'promotions',
    //   component: () => import('../views/Promotions.vue')
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/About.vue')
    // },
    // {
    //   path: '/contacts',
    //   name: 'contacts',
    //   component: () => import('../views/Contacts.vue')
    // },
    // {
    //   path: '/order',
    //   name: 'order',
    //   component: () => import('../views/Order.vue')
    // }
  ]
})

export default router
