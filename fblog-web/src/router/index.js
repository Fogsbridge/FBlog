import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Layout/Layout.vue'),
    children: [
      {
        path: '',
        components: {
          default: () => import('@/views/Home/Home.vue'),
          banner: () => import('@/views/Home/HomeBanner.vue')
        },
        meta: { title: '首页'}
      },
      {
        path: '/about',
        component: () => import('@/views/About/About.vue'),
        meta: { title: '关于我'}
      },
      {
        path: ':pathMatch(.*)*',
        component: () => import('@/views/Errors/NotFound.vue'),
        meta: { title: '页面迷路了'}
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | 云桥雾的Blog`
  next()
})

export default router