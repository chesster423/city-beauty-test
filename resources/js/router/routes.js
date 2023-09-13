// general routes
const Home = () =>
  import(/* webpackChunkName: "js/HomePage" */ '@pages/Home.vue');

const NotFound = () =>
  import(/* webpackChunkName: "js/NotFoundPage" */ '@pages/NotFound.vue');

// Funnels------------------------------------------------------------------
const FunnelLayout = () =>
  import(
    /* webpackChunkName: "js/FunnelLayoutPage" */ '@/layouts/FunnelLayout.vue'
  );

const Funnel1 = () =>
  import(/* webpackChunkName: "js/Funnel1" */ '@pages/funnels/Funnel1.vue');
const Funnel2 = () =>
  import(/* webpackChunkName: "js/Funnel2" */ '@pages/funnels/Funnel2.vue');
const Funnel3 = () =>
  import(/* webpackChunkName: "js/Funnel3" */ '@pages/funnels/Funnel3.vue');
const Funnel4 = () =>
  import(/* webpackChunkName: "js/Funnel4" */ '@pages/funnels/Funnel4.vue');
// End Funnels---------------------------------------------------------------

// const PhpInfo = () =>
// import(/* webpackChunkName: "js/PhpInfoPage" */ '@/views/admin/PhpInfo.vue');
import { defineAsyncComponent } from 'vue';

export default [
  // {
  //   path: '/',
  //   component: Home,
  //   name: 'home',
  // },
  {
    path: '/',
    component: FunnelLayout,
    children: [
      {
        path: '/',
        name: 'step-1',
        component: Funnel1,
      },
      {
        path: '/step-2',
        name: 'step-2',
        component: Funnel2,
      },
      {
        path: '/step-3',
        name: 'step-3',
        component: Funnel3,
      },
      {
        path: '/step-4',
        name: 'step-4',
        component: Funnel4,
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
    name: 'NotFound',
  },
];
