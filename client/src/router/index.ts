// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
      },
      {
        path: '/eventCalendar',
        name: 'EventCalendar',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
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
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/Styret.vue'),
      },
      {
        path: '/samo',
        name: 'Samo',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/Samo.vue'),
      },
      {
        path: '/programteam',
        name: 'Programteam',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
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
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/CreateEvent.vue'),
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
