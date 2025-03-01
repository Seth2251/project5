import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';  // Home page route
import MainView from '@/views/MainView.vue';  // Movies page route

const routes = [
  { path: '/', component: HomePage }, // Home page route
  { path: '/movies', component: MainView }, // Movies page route
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
