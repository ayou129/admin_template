import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';

const charts: AppRouteModule = {
  path: '/flow',
  name: 'FlowDemo',
  component: LAYOUT,
  redirect: '/flow/flowChart',
  meta: {
    dept_sort: 5000,
    icon: 'tabler:chart-dots',
    title: t('routes.main.flow.name'),
  },
  children: [
    {
      path: 'flowChart',
      name: 'flowChartDemo',
      component: () => import('@/views/main/comp/flow-chart/index.vue'),
      meta: {
        title: t('routes.main.flow.flowChart'),
      },
    },
  ],
};

export default charts;
