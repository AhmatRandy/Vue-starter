import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import HelloWorld from '../components/HelloWorldComponent.vue'
import OthersView from '../views/OthersView.vue'
import FormView from '../views/FormView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView,
    },
    {
      path: '/others',
      name: 'others',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: OthersView,
    },
    {
      path: '/form',
      name: 'form',
      component: FormView,
    },
  ],
})

export default router
