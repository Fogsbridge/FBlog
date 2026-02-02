import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Layout/Layout.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/Home/Home.vue'),
        meta: { title: '首页'}
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