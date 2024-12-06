import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import HelloWorld from '../components/HelloWorldComponent.vue'
import OthersView from '../views/OthersView.vue'
import FormView from '../views/FormView.vue'
import AsyncComponentView from '../views/AsyncComponentView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld,
    },
    {
      path: '/item/:id',
      name: 'item',
      component: HelloWorld,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/others',
      name: 'others',
      component: OthersView,
    },
    {
      path: '/form',
      name: 'form',
      component: FormView,
    },
    {
      path: '/async-component',
      name: 'AsyncComponentViewt',
      component: AsyncComponentView,
    },
  ],
})

export default router
