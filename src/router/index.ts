import SSC from '@/views/SSC.vue'
import TShockConfig from '@/views/TShockConfig.vue'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TShockConfig,
    },
    {
      path: '/ssc',
      name: 'ssc',
      component: SSC,
    },
  ],
})

export default router
