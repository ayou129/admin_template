import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';

const IFrame = () => import('@/views/sys/iframe/FrameBlank.vue');

const iframe: AppRouteModule = {
  path: '/frame',
  name: 'Frame',
  component: LAYOUT,
  redirect: '/frame/doc',
  meta: {
    dept_sort: 1000,
    icon: 'ion:tv-outline',
    title: t('routes.main.iframe.frame'),
  },

  children: [
    {
      path: 'doc',
      name: 'Doc',
      component: IFrame,
      meta: {
        frameSrc: 'https://doc.vvbin.cn/',
        title: t('routes.main.iframe.doc'),
      },
    },
    {
      path: 'antv',
      name: 'Antv',
      component: IFrame,
      meta: {
        frameSrc: 'https://www.antdv.com/docs/vue/introduce-cn/',
        title: t('routes.main.iframe.antv'),
      },
    },
    {
      path: 'https://doc.vvbin.cn/',
      name: 'DocExternal',
      component: IFrame,
      meta: {
        title: t('routes.main.iframe.docExternal'),
      },
    },
  ],
};

export default iframe;
