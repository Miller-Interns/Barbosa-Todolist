import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import todolistPage from '../views/todolist-page.vue'
import { RouteName } from '@/enum/RouteNames'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: RouteName.HOME,
      component: HomeView,
    },
    {
      path: '/todolist',
      name: RouteName.TODOLIST,
      component: todolistPage,
    },
  ],
})

export default router
