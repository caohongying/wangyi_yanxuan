import Vue from 'vue';
import VueRouter from 'vue-router';

const Home=()=>import('../pages/Home/Home.vue');
const Optimize=()=>import('../pages/Optimize/Optimize.vue');
const Category=()=>import('../pages/Category/Category.vue');
const ShopChart=()=>import('../pages/ShopChart/ShopChart.vue');
const Personal=()=>import('../pages/Personal/Personal.vue');
const Interlayer=()=>import('../pages/Interlayer/Interlayer.vue');


Vue.use(VueRouter);

export default new VueRouter({
  routes:[
    {
      path: '/home',
      component: Home,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/optimize',
      component: Optimize,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/category',
      component: Category,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/shopchart',
      component: ShopChart,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/personal',
      component: Personal,
    },
    {
      path: '/interlayer',
      component: Interlayer,
    },

    {
      path: '/',
      redirect: '/interlayer'
    },

  ]
})
