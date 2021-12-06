import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import SimplePage from './pages/SimplePage.vue';
import SimpleVmodelPage from './pages/SimpleVmodelPage.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/simple_page', component: SimplePage },
  { path: '/simple_vmodel', component: SimpleVmodelPage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
