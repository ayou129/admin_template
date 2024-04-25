import type { AppRouteModule } from '@/router/types';

import { getParentLayout, LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';

const feat: AppRouteModule = {
  path: '/feat',
  name: 'FeatDemo',
  component: LAYOUT,
  redirect: '/feat/icon',
  meta: {
    sort: 19,
    icon: 'ion:git-compare-outline',
    title: t('routes.main.feat.feat'),
  },

  children: [
    {
      path: 'icon',
      name: 'IconDemo',
      component: () => import('@/views/main/feat/icon/index.vue'),
      meta: {
        title: t('routes.main.feat.icon'),
      },
    },
    {
      path: 'ws',
      name: 'WebSocket',
      component: () => import('@/views/main/feat/ws/index.vue'),
      meta: {
        title: t('routes.main.feat.ws'),
      },
    },
    {
      path: 'request',
      name: 'RequestDemo',
      // @ts-ignore
      component: () => import('@/views/main/feat/request-demo/index.vue'),
      meta: {
        title: t('routes.main.feat.requestDemo'),
      },
    },
    {
      path: 'session-timeout',
      name: 'SessionTimeout',
      component: () => import('@/views/main/feat/session-timeout/index.vue'),
      meta: {
        title: t('routes.main.feat.sessionTimeout'),
      },
    },
    {
      path: 'print',
      name: 'Print',
      component: () => import('@/views/main/feat/print/index.vue'),
      meta: {
        title: t('routes.main.feat.print'),
      },
    },
    {
      path: 'tabs',
      name: 'TabsDemo',
      component: () => import('@/views/main/feat/tabs/index.vue'),
      meta: {
        title: t('routes.main.feat.tabs'),
        hideChildrenInMenu: true,
      },
      children: [
        {
          path: 'detail/:id',
          name: 'TabDetail',
          component: () => import('@/views/main/feat/tabs/TabDetail.vue'),
          meta: {
            currentActiveMenu: '/feat/tabs',
            title: t('routes.main.feat.tabDetail'),
            hideMenu: true,
            dynamicLevel: 3,
            realPath: '/feat/tabs/detail',
          },
        },
      ],
    },
    {
      path: 'breadcrumb',
      name: 'BreadcrumbDemo',
      redirect: '/feat/breadcrumb/flat',
      component: getParentLayout('BreadcrumbDemo'),
      meta: {
        title: t('routes.main.feat.breadcrumb'),
      },

      children: [
        {
          path: 'flat',
          name: 'BreadcrumbFlatDemo',
          component: () => import('@/views/main/feat/breadcrumb/FlatList.vue'),
          meta: {
            title: t('routes.main.feat.breadcrumbFlat'),
          },
        },
        {
          path: 'flatDetail',
          name: 'BreadcrumbFlatDetailDemo',
          component: () => import('@/views/main/feat/breadcrumb/FlatListDetail.vue'),
          meta: {
            title: t('routes.main.feat.breadcrumbFlatDetail'),
            hideMenu: true,
            hideTab: true,
            currentActiveMenu: '/feat/breadcrumb/flat',
          },
        },
        {
          path: 'children',
          name: 'BreadcrumbChildrenDemo',
          component: () => import('@/views/main/feat/breadcrumb/ChildrenList.vue'),
          meta: {
            title: t('routes.main.feat.breadcrumbChildren'),
          },
          children: [
            {
              path: 'childrenDetail',
              name: 'BreadcrumbChildrenDetailDemo',
              component: () => import('@/views/main/feat/breadcrumb/ChildrenListDetail.vue'),
              meta: {
                currentActiveMenu: '/feat/breadcrumb/children',
                title: t('routes.main.feat.breadcrumbChildrenDetail'),
                //hideTab: true,
                // hideMenu: true,
              },
            },
          ],
        },
      ],
    },

    {
      path: 'context-menu',
      name: 'ContextMenuDemo',
      component: () => import('@/views/main/feat/context-menu/index.vue'),
      meta: {
        title: t('routes.main.feat.contextMenu'),
      },
    },
    {
      path: 'download',
      name: 'DownLoadDemo',
      component: () => import('@/views/main/feat/download/index.vue'),
      meta: {
        title: t('routes.main.feat.download'),
      },
    },
    {
      path: 'click-out-side',
      name: 'ClickOutSideDemo',
      component: () => import('@/views/main/feat/click-out-side/index.vue'),
      meta: {
        title: t('routes.main.feat.clickOutSide'),
      },
    },
    {
      path: 'img-preview',
      name: 'ImgPreview',
      component: () => import('@/views/main/feat/img-preview/index.vue'),
      meta: {
        title: t('routes.main.feat.imgPreview'),
      },
    },
    {
      path: 'copy',
      name: 'CopyDemo',
      component: () => import('@/views/main/feat/copy/index.vue'),
      meta: {
        title: t('routes.main.feat.copy'),
      },
    },
    {
      path: 'ellipsis',
      name: 'EllipsisDemo',
      component: () => import('@/views/main/feat/ellipsis/index.vue'),
      meta: {
        title: t('routes.main.feat.ellipsis'),
      },
    },
    {
      path: 'msg',
      name: 'MsgDemo',
      component: () => import('@/views/main/feat/msg/index.vue'),
      meta: {
        title: t('routes.main.feat.msg'),
      },
    },
    {
      path: 'watermark',
      name: 'WatermarkDemo',
      component: () => import('@/views/main/feat/watermark/index.vue'),
      meta: {
        title: t('routes.main.feat.watermark'),
      },
    },
    {
      path: 'ripple',
      name: 'RippleDemo',
      component: () => import('@/views/main/feat/ripple/index.vue'),
      meta: {
        title: t('routes.main.feat.ripple'),
      },
    },
    {
      path: 'full-screen',
      name: 'FullScreenDemo',
      component: () => import('@/views/main/feat/full-screen/index.vue'),
      meta: {
        title: t('routes.main.feat.fullScreen'),
      },
    },
    {
      path: '/error-log',
      name: 'ErrorLog',
      component: () => import('@/views/sys/error-log/index.vue'),
      meta: {
        title: t('routes.main.feat.errorLog'),
      },
    },
    {
      path: 'excel',
      name: 'Excel',
      redirect: '/feat/excel/customExport',
      component: getParentLayout('Excel'),
      meta: {
        // icon: 'mdi:microsoft-excel',
        title: t('routes.main.excel.excel'),
      },

      children: [
        {
          path: 'customExport',
          name: 'CustomExport',
          component: () => import('@/views/main/excel/CustomExport.vue'),
          meta: {
            title: t('routes.main.excel.customExport'),
          },
        },
        {
          path: 'jsonExport',
          name: 'JsonExport',
          component: () => import('@/views/main/excel/JsonExport.vue'),
          meta: {
            title: t('routes.main.excel.jsonExport'),
          },
        },
        {
          path: 'arrayExport',
          name: 'ArrayExport',
          component: () => import('@/views/main/excel/ArrayExport.vue'),
          meta: {
            title: t('routes.main.excel.arrayExport'),
          },
        },
        {
          path: 'importExcel',
          name: 'ImportExcel',
          component: () => import('@/views/main/excel/ImportExcel.vue'),
          meta: {
            title: t('routes.main.excel.importExcel'),
          },
        },
      ],
    },
    {
      path: 'testTab/:id',
      name: 'TestTab',
      component: () => import('@/views/main/feat/tab-params/index.vue'),
      meta: {
        title: t('routes.main.feat.tab'),
        carryParam: true,
        hidePathForChildren: true,
      },
      children: [
        {
          path: 'testTab/id1',
          name: 'TestTab1',
          component: () => import('@/views/main/feat/tab-params/index.vue'),
          meta: {
            title: t('routes.main.feat.tab1'),
            carryParam: true,
            ignoreRoute: true,
          },
        },
        {
          path: 'testTab/id2',
          name: 'TestTab2',
          component: () => import('@/views/main/feat/tab-params/index.vue'),
          meta: {
            title: t('routes.main.feat.tab2'),
            carryParam: true,
            ignoreRoute: true,
          },
        },
      ],
    },
    {
      path: 'testParam/:id',
      name: 'TestParam',
      component: getParentLayout('TestParam'),
      meta: {
        title: t('routes.main.feat.menu'),
        ignoreKeepAlive: true,
      },
      children: [
        {
          path: 'sub1',
          name: 'TestParam_1',
          component: () => import('@/views/main/feat/menu-params/index.vue'),
          meta: {
            title: t('routes.main.feat.menu1'),
            ignoreKeepAlive: true,
          },
        },
        {
          path: 'sub2',
          name: 'TestParam_2',
          component: () => import('@/views/main/feat/menu-params/index.vue'),
          meta: {
            title: t('routes.main.feat.menu2'),
            ignoreKeepAlive: true,
          },
        },
      ],
    },
  ],
};

export default feat;
