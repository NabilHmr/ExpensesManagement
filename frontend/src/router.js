import { createRouter, createWebHistory } from 'vue-router';

// Define route components
const routes = [
  { path: '/', redirect: '/dashboard' },
  { path: '/dashboard', component: () => import('./pages/Dashboard.vue') },
  { path: '/about', component: () => import('./pages/About.vue') },
  { path: '/contact', component: () => import('./pages/Contact.vue') },
  { path: '/:pathMatch(.*)*', component: () => import('./pages/NotFound.vue') },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;