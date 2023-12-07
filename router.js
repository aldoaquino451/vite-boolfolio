import { createRouter, createWebHistory } from 'vue-router';
import Home from './src/pages/Home.vue';
import Projects from './src/pages/Projects.vue';
import Contacts from './src/pages/Contacts.vue';
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
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
  ]
});

export { router };