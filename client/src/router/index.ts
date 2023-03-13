/**
 * index.ts
 *
 * All routes for the project are specified here, pointing every valid route towards the
 * requested page. The views are all located in 'client/src/views/'
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'

// Route level code-splitting.
// This generates a separate chunk (about.[hash].js) for the route
// which is lazy-loaded when the route is visited.
const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
      },
      {
        path: '/eventCalendar',
        name: 'EventCalendar',
        component: () => import(/* webpackChunkName: "eventCalendar" */ '@/views/EventCalendar.vue'),
      },
      {
        path: '/kommitteer',
        name: 'Kommitteer',
        component: () => import(/* webpackChunkName: "committees" */ '@/views/Committees.vue')
      },
      {
        path: '/kommitteer/:name',
        component: () => import(/* webpackChunkName: "committee info" */ '@/views/CommitteeInfo.vue')
      },
      {
        path: '/utskott/:name',
        component: () => import(/* webpackChunkName: "committee info" */ '@/views/CommitteeInfo.vue')
      },
      {
        path: '/styret',
        name: 'Styret',
        component: () => import(/* webpackChunkName: "about" */ '@/views/Styret.vue'),
      },
      {
        path: '/samo',
        name: 'Samo',
        component: () => import(/* webpackChunkName: "about" */ '@/views/Samo.vue'),
      },
      {
        path: '/programteam',
        name: 'Programteam',
        component: () => import(/* webpackChunkName: "about" */ '@/views/Programteam.vue'),
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue'),
      },
      {
        path: '/admin',
        name: 'Admin',
        component: () => import(/* webpackChunkName: "admin" */ '@/layouts/default/Admin.vue'),
        children: [
          {
            path: '',
            component: () => import(/* webpackChunkName: "MyAccount" */ '@/views/admin/MittKonto.vue')
          },
          {
            path: 'anvandare',
            component: () => import(/* webpackChunkName: "Users" */ '@/views/admin/Accounts.vue')
          },
          {
            path: 'kommitteer',
            component: () => import(/* webpackChunkName: "Committees" */ '@/views/admin/CommitteesAdmin.vue')
          },
          {
            path: 'events',
            component: () => import(/* webpackChunkName: "Events" */ '@/views/admin/EventsAdmin.vue')
          },
          {
            path: 'styret',
            component: () => import(/* webpackChunkName: "Committees" */ '@/views/admin/StyretAdmin.vue')
          }
        ]
      },
      {
        path: '/createEvent',
        name: 'CreateEvent',
        component: () => import(/* webpackChunkName: "about" */ '@/views/CreateEvent.vue'),
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

// Exports the router
export default router
