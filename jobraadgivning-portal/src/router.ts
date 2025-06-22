import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import CandidatePage from './pages/CandidatePage.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/candidate/:id', component: CandidatePage },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});