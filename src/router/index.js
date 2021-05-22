import { createRouter, createWebHistory } from 'vue-router'
import Multiple from '../views/Multiple.vue'

const routes = [
  {
    path: '/',
    name: Multiple,
    component: Multiple
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
