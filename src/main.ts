import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import SimpleEmitPage from './pages/SimpleEmitPage.vue';
import SimpleCallbackPage from './pages/SimpleCallbackPage.vue';
import SimpleVmodelPage from './pages/SimpleVmodelPage.vue';
import DeepNestSimplePage from './pages/deep_nest/SimplePage.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/simple_emit', component: SimpleEmitPage },
  { path: '/simple_callback', component: SimpleCallbackPage },
  { path: '/simple_vmodel', component: SimpleVmodelPage },
  { path: '/deep_nest/simple', component: DeepNestSimplePage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
