import type { AppRouteModule } from '@/router/types';

import { getParentLayout, LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';

const charts: AppRouteModule = {
  path: '/charts',
  name: 'Charts',
  component: LAYOUT,
  redirect: '/charts/echarts/map',
  meta: {
    dept_sort: 500,
    icon: 'ion:bar-chart-outline',
    title: t('routes.main.charts.charts'),
  },
  children: [
    {
      path: 'baiduMap',
      name: 'BaiduMap',
      meta: {
        title: t('routes.main.charts.baiduMap'),
      },
      component: () => import('@/views/main/charts/map/Baidu.vue'),
    },
    {
      path: 'aMap',
      name: 'AMap',
      meta: {
        title: t('routes.main.charts.aMap'),
      },
      component: () => import('@/views/main/charts/map/Gaode.vue'),
    },
    {
      path: 'googleMap',
      name: 'GoogleMap',
      meta: {
        title: t('routes.main.charts.googleMap'),
      },
      component: () => import('@/views/main/charts/map/Google.vue'),
    },

    {
      path: 'echarts',
      name: 'Echarts',
      component: getParentLayout('Echarts'),
      meta: {
        title: 'Echarts',
      },
      redirect: '/charts/echarts/map',
      children: [
        {
          path: 'map',
          name: 'Map',
          component: () => import('@/views/main/charts/Map.vue'),
          meta: {
            title: t('routes.main.charts.map'),
          },
        },
        {
          path: 'line',
          name: 'Line',
          component: () => import('@/views/main/charts/Line.vue'),
          meta: {
            title: t('routes.main.charts.line'),
          },
        },
        {
          path: 'pie',
          name: 'Pie',
          component: () => import('@/views/main/charts/Pie.vue'),
          meta: {
            title: t('routes.main.charts.pie'),
          },
        },
      ],
    },
  ],
};

export default charts;
