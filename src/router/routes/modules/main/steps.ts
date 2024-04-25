import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';

const steps: AppRouteModule = {
  path: '/steps',
  name: 'StepsDemo',
  component: LAYOUT,
  redirect: '/steps/index',
  meta: {
    sort: 90000,
    hideChildrenInMenu: true,
    icon: 'whh:paintroll',
    title: t('routes.main.steps.page'),
  },
  children: [
    {
      path: 'index',
      name: 'StepsDemoPage',
      component: () => import('@/views/main/steps/index.vue'),
      meta: {
        title: t('routes.main.steps.page'),
        icon: 'whh:paintroll',
        hideMenu: true,
      },
    },
  ],
};

export default steps;
