// import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import CoachesList from './pages/coaches/CoachesList.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import CoachDetails from './pages/coaches/CoachDetails.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import store from './store/index.js';

// const CoachDetails = defineAsyncComponent(() =>
//   import('./pages/coaches/CoachDetails.vue')
// );
// const CoachRegistration = defineAsyncComponent(() =>
//   import('./pages/coaches/CoachRegistration.vue')
// );
// const ContactCoach = defineAsyncComponent(() =>
//   import('./pages/requests/ContactCoach.vue')
// );
// const RequestsReceived = defineAsyncComponent(() =>
//   import('./pages/requests/RequestsReceived.vue')
// );
// const UserAuth = defineAsyncComponent(() =>
//   import('./pages/auth/UserAuth.vue')
// );

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/coaches',
    },
    {
      path: '/coaches',
      component: CoachesList,
    },
    {
      path: '/coaches/:id',
      component: CoachDetails,
      props: true,
      children: [
        {
          path: 'contact',
          component: ContactCoach,
        },
      ],
    },
    {
      path: '/register',
      component: CoachRegistration,
      meta: { requiresAuth: true },
    },
    {
      path: '/requests',
      component: RequestsReceived,
      meta: { requiresAuth: true },
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
    {
      path: '/auth',
      component: UserAuth,
      meta: { requiresUnauth: true },
    },
  ],
});

router.beforeEach(function (to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/coaches');
  } else {
    next();
  }
});

export default router;
