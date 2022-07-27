import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/:lang(en-us|pt-br)?/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', redirect: '/home' },
      {
        path: 'home',
        name: 'home',
        component: () => import('pages/IndexPage.vue'),
        props ({ query }) {
          return {
            page: query?.page ? parseInt(query.page as string) : undefined,
            rows: query?.rows ? parseInt(query.rows as string) : undefined,
            order: query?.order ? parseInt(query.order as string) : undefined,
            desc: query.desc === 'true',
            search: query.search ?? undefined
          }
        }
      }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
