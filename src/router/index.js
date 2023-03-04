import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ingresar-producto',
    name: '/ingresar-producto',
    component: () => import(/* webpackChunkName: "IngresarProducto" */ '../pages/IngresarProducto.vue')
  },
  {
    path: '/realizar-venta',
    name: 'realizar-venta',
    component: () => import(/* webpackChunkName: "RealizarVenta" */ '../pages/RealizarVenta.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
