import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';  // Home page route
import MainView from '@/views/MainView.vue';  // Movies page route

const routes = [
  { path: '/project5/', component: HomePage }, // Home page route
  { path: '/project5/movies', component: MainView }, // Movies page route
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
