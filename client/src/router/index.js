import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Movements from '../views/Movements.vue';
import AutoPurchase from '../views/AutomaticPurchase.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movements',
    name: 'movements',
    component: Movements
  },
  {
    path: '/automatic-purchase',
    name: 'automatic-purchase',
    component: AutoPurchase
  }
];

const router = new VueRouter({
  routes
});

export default router;
