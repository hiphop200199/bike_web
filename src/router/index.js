import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/business-information',
      name: 'businessInformation',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/BusinessInformationView.vue'),
    },
    {
      path: '/list/:vendor',
      name: 'list',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ListView.vue'),
    },
    {
      path: '/info/:id',
      name: 'info',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/InfoView.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CartView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RegisterView.vue'),
    },
    {
      path: '/member/',
      name: 'member',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MemberView.vue'),
    },
    {
      path: '/order',
      name: 'order',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/OrderView.vue'),
    },
    {
      path: '/order-detail/:id',
      name: 'orderDetail',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/OrderDetailView.vue'),
    },
    {
      path: '/success',
      name: 'success',
      component: () => import('../views/SuccessView.vue'),
    },
    {
      path: '/success?session_id=:id',
      redirect: (to) => {
        return { path: 'success', query: { q: to.query.session_id } }
      },
    },

    {
      path: '/cancel',
      name: 'cancel',
      component: () => import('../views/CancelView.vue'),
    },
  ],
})

//預防沒權限的情況下瀏覽某些路由
router.beforeEach(async (to) => {
  const authstore = useAuthStore()
  const loginRoutes = ['cart', 'member', 'order', 'orderDetail', 'success', 'cancel']
  if (loginRoutes.includes(to.name)) {
    const redirectToLogin = await authstore.checkLogin()

    if (redirectToLogin) {
      return { name: 'login' }
    }
  }
})

export default router
