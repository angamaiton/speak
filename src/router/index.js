import Vue from 'vue';
import VueResource from 'vue-resource';
import Router from 'vue-router';
import Home from '@/components/Home';
import About from '@/components/About';
import Languages from '@/components/Languages';
import Translate from '@/components/Translate';
import Vocab from '@/components/Vocab';
import Login from '@/components/Login';
import Signup from '@/components/Signup';

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
