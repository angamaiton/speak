import Vue from 'vue';
import VueResource from 'vue-resource';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import About from '@/components/About';
import Languages from '@/components/Languages';
import Translate from '@/components/Translate';
import Vocab from '@/components/Vocab';
import Login from '@/components/Login';

Vue.use(VueResource);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/languages',
      name: 'Languages',
      component: Languages,
    },
    {
      path: '/vocab',
      name: 'Vocab',
      component: Vocab,
    },
    {
      path: '/translate',
      name: 'Translate',
      component: Translate,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});
