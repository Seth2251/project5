import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import MainView from '@/views/MainView.vue';

const routes = [
  { path: '/', component: HomePage }, // Home Page (No /project5)
  { path: '/movies', component: MainView }, // Movies Page (No /project5)
];

const router = createRouter({
  history: createWebHashHistory(), // 🔹 Use hash-based history for GitHub Pages
  routes,
});

export default router;
