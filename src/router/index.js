import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      // 지연로딩 적용!
      name: 'Home',
      component: () => import('@/pages/Home.vue'),
    },
    {
      // path: '/Register',
      // name: registerRuntimeCompiler,
      // component: () => import('@/pages/Register.vue'),
    },
    // 동적 라우트 파라미터 처리

    {
      // path: '/MainPage',
      // name: mainpage,
      // component: () => import('@/pages/MainPage.vue'),
    },
    {
      // path: '/CalendarMain',
      // name: calendarmain,
      // component: () => import('@/pages/CalendarMain.vue'),
    },
    {
      // path: '/WritePage',
      // name: writepage,
      // component: () => import('@/pages/WritePage.vue'),
    },

    {
      path: '/MyPage',
      name: 'mypage',
      component: () => import('@/pages/MyPage.vue'),
    },

    {
      path: '/EditMyPage',
      name: 'editmaypage',
      component: () => import('@/components/MyPage/EditMyPage.vue'),
    },
    {
      // path: '/mypage/edit',
      // component: () => import('@/pages/EditMyPage.vue'),
    },
    {
      path: '/main',
      component: () => import('@/pages/MainPage.vue'),
    },
    {
      path: '/history',
      component: () => import('@/pages/HistoryPage.vue'),
    },
    {
      path: '/history',
      component: () => import('@/pages/HistoryPage.vue'),
    },
  ],
})
export default router
