import type { AppRouteModule } from '@/router/types';

import { getParentLayout, LAYOUT } from '@/router/constant';
import { RoleEnum } from '@/enums/roleEnum';
import { t } from '@/hooks/web/useI18n';

const permission: AppRouteModule = {
  path: '/permission',
  name: 'Permission',
  component: LAYOUT,
  redirect: '/permission/front/page',
  meta: {
    sort: 15,
    icon: 'ion:key-outline',
    title: t('routes.main.permission.permission'),
  },

  children: [
    {
      path: 'front',
      name: 'PermissionFrontDemo',
      component: getParentLayout('PermissionFrontDemo'),
      meta: {
        title: t('routes.main.permission.front'),
      },
      children: [
        {
          path: 'page',
          name: 'FrontPageAuth',
          component: () => import('@/views/main/permission/front/index.vue'),
          meta: {
            title: t('routes.main.permission.frontPage'),
          },
        },
        {
          path: 'btn',
          name: 'FrontBtnAuth',
          component: () => import('@/views/main/permission/front/Btn.vue'),
          meta: {
            title: t('routes.main.permission.frontBtn'),
          },
        },
        {
          path: 'auth-pageA',
          name: 'FrontAuthPageA',
          component: () => import('@/views/main/permission/front/AuthPageA.vue'),
          meta: {
            title: t('routes.main.permission.frontTestA'),
            roles: [RoleEnum.SUPER],
          },
        },
        {
          path: 'auth-pageB',
          name: 'FrontAuthPageB',
          component: () => import('@/views/main/permission/front/AuthPageB.vue'),
          meta: {
            title: t('routes.main.permission.frontTestB'),
            roles: [RoleEnum.TEST],
          },
        },
      ],
    },
    {
      path: 'back',
      name: 'PermissionBackDemo',
      component: getParentLayout('PermissionBackDemo'),
      meta: {
        title: t('routes.main.permission.back'),
      },
      children: [
        {
          path: 'page',
          name: 'BackAuthPage',
          component: () => import('@/views/main/permission/back/index.vue'),
          meta: {
            title: t('routes.main.permission.backPage'),
          },
        },
        {
          path: 'btn',
          name: 'BackAuthBtn',
          component: () => import('@/views/main/permission/back/Btn.vue'),
          meta: {
            title: t('routes.main.permission.backBtn'),
          },
        },
      ],
    },
  ],
};

export default permission;
