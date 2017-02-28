import Vue from 'vue';
import VueResource from 'vue-resource';
import Router from 'vue-router';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Languages from '@/pages/Languages';
import Translate from '@/pages/Translate';
import Vocab from '@/pages/Vocab';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';

Vue.use(VueResource);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
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
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
    },
  ],
});
