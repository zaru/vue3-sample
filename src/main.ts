import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import SimplePage from './pages/SimplePage.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/simple_page', component: SimplePage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
