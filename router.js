import { createRouter, createWebHistory } from 'vue-router';
import Home from './src/pages/Home.vue';
import About from './src/pages/About.vue';

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
  ]
});

export { router };