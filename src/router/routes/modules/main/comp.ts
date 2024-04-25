import type { AppRouteModule } from '@/router/types';

import { getParentLayout, LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';

const comp: AppRouteModule = {
  path: '/comp',
  name: 'Comp',
  component: LAYOUT,
  redirect: '/comp/basic',
  meta: {
    sort: 30,
    icon: 'ion:layers-outline',
    title: t('routes.main.comp.comp'),
  },

  children: [
    {
      path: 'basic',
      name: 'BasicDemo',
      component: () => import('@/views/main/comp/button/index.vue'),
      meta: {
        title: t('routes.main.comp.basic'),
      },
    },

    {
      path: 'form',
      name: 'FormDemo',
      redirect: '/comp/form/basic',
      component: getParentLayout('FormDemo'),
      meta: {
        // icon: 'mdi:form-select',
        title: t('routes.main.form.form'),
      },
      children: [
        {
          path: 'basic',
          name: 'FormBasicDemo',
          component: () => import('@/views/main/form/index.vue'),
          meta: {
            title: t('routes.main.form.basic'),
          },
        },
        {
          path: 'useForm',
          name: 'UseFormDemo',
          component: () => import('@/views/main/form/UseForm.vue'),
          meta: {
            title: t('routes.main.form.useForm'),
          },
        },
        {
          path: 'refForm',
          name: 'RefFormDemo',
          component: () => import('@/views/main/form/RefForm.vue'),
          meta: {
            title: t('routes.main.form.refForm'),
          },
        },
        {
          path: 'advancedForm',
          name: 'AdvancedFormDemo',
          component: () => import('@/views/main/form/AdvancedForm.vue'),
          meta: {
            title: t('routes.main.form.advancedForm'),
          },
        },
        {
          path: 'ruleForm',
          name: 'RuleFormDemo',
          component: () => import('@/views/main/form/RuleForm.vue'),
          meta: {
            title: t('routes.main.form.ruleForm'),
          },
        },
        {
          path: 'dynamicForm',
          name: 'DynamicFormDemo',
          component: () => import('@/views/main/form/DynamicForm.vue'),
          meta: {
            title: t('routes.main.form.dynamicForm'),
          },
        },
        {
          path: 'customerForm',
          name: 'CustomerFormDemo',
          component: () => import('@/views/main/form/CustomerForm.vue'),
          meta: {
            title: t('routes.main.form.customerForm'),
          },
        },
        {
          path: 'appendForm',
          name: 'appendFormDemo',
          component: () => import('@/views/main/form/AppendForm.vue'),
          meta: {
            title: t('routes.main.form.appendForm'),
          },
        },
        {
          path: 'tabsForm',
          name: 'tabsFormDemo',
          component: () => import('@/views/main/form/TabsForm.vue'),
          meta: {
            title: t('routes.main.form.tabsForm'),
          },
        },
      ],
    },
    {
      path: 'table',
      name: 'TableDemo',
      redirect: '/comp/table/basic',
      component: getParentLayout('TableDemo'),
      meta: {
        // icon: 'carbon:table-split',
        title: t('routes.main.table.table'),
      },

      children: [
        {
          path: 'basic',
          name: 'TableBasicDemo',
          component: () => import('@/views/main/table/Basic.vue'),
          meta: {
            title: t('routes.main.table.basic'),
          },
        },
        {
          path: 'treeTable',
          name: 'TreeTableDemo',
          component: () => import('@/views/main/table/TreeTable.vue'),
          meta: {
            title: t('routes.main.table.treeTable'),
          },
        },
        {
          path: 'fetchTable',
          name: 'FetchTableDemo',
          component: () => import('@/views/main/table/FetchTable.vue'),
          meta: {
            title: t('routes.main.table.fetchTable'),
          },
        },
        {
          path: 'fixedColumn',
          name: 'FixedColumnDemo',
          component: () => import('@/views/main/table/FixedColumn.vue'),
          meta: {
            title: t('routes.main.table.fixedColumn'),
          },
        },
        {
          path: 'customerCell',
          name: 'CustomerCellDemo',
          component: () => import('@/views/main/table/CustomerCell.vue'),
          meta: {
            title: t('routes.main.table.customerCell'),
          },
        },
        {
          path: 'formTable',
          name: 'FormTableDemo',
          component: () => import('@/views/main/table/FormTable.vue'),
          meta: {
            title: t('routes.main.table.formTable'),
          },
        },
        {
          path: 'useTable',
          name: 'UseTableDemo',
          component: () => import('@/views/main/table/UseTable.vue'),
          meta: {
            title: t('routes.main.table.useTable'),
          },
        },
        {
          path: 'refTable',
          name: 'RefTableDemo',
          component: () => import('@/views/main/table/RefTable.vue'),
          meta: {
            title: t('routes.main.table.refTable'),
          },
        },
        {
          path: 'multipleHeader',
          name: 'MultipleHeaderDemo',
          component: () => import('@/views/main/table/MultipleHeader.vue'),
          meta: {
            title: t('routes.main.table.multipleHeader'),
          },
        },
        {
          path: 'mergeHeader',
          name: 'MergeHeaderDemo',
          component: () => import('@/views/main/table/MergeHeader.vue'),
          meta: {
            title: t('routes.main.table.mergeHeader'),
          },
        },
        {
          path: 'expandTable',
          name: 'ExpandTableDemo',
          component: () => import('@/views/main/table/ExpandTable.vue'),
          meta: {
            title: t('routes.main.table.expandTable'),
          },
        },
        {
          path: 'fixedHeight',
          name: 'FixedHeightDemo',
          component: () => import('@/views/main/table/FixedHeight.vue'),
          meta: {
            title: t('routes.main.table.fixedHeight'),
          },
        },
        {
          path: 'footerTable',
          name: 'FooterTableDemo',
          component: () => import('@/views/main/table/FooterTable.vue'),
          meta: {
            title: t('routes.main.table.footerTable'),
          },
        },
        {
          path: 'editCellTable',
          name: 'EditCellTableDemo',
          component: () => import('@/views/main/table/EditCellTable.vue'),
          meta: {
            title: t('routes.main.table.editCellTable'),
          },
        },
        {
          path: 'editRowTable',
          name: 'EditRowTableDemo',
          component: () => import('@/views/main/table/EditRowTable.vue'),
          meta: {
            title: t('routes.main.table.editRowTable'),
          },
        },
        {
          path: 'authColumn',
          name: 'AuthColumnDemo',
          component: () => import('@/views/main/table/AuthColumn.vue'),
          meta: {
            title: t('routes.main.table.authColumn'),
          },
        },
        {
          path: 'resizeParentHeightTable',
          name: 'ResizeParentHeightTable',
          component: () => import('@/views/main/table/ResizeParentHeightTable.vue'),
          meta: {
            title: t('routes.main.table.resizeParentHeightTable'),
          },
        },
        {
          path: 'vxeTable',
          name: 'VxeTableDemo',
          component: () => import('@/views/main/table/VxeTable.vue'),
          meta: {
            title: t('routes.main.table.vxeTable'),
          },
        },
      ],
    },
    {
      path: 'transition',
      name: 'transitionDemo',
      component: () => import('@/views/main/comp/transition/index.vue'),
      meta: {
        title: t('routes.main.comp.transition'),
      },
    },
    {
      path: 'cropper',
      name: 'CropperDemo',
      component: () => import('@/views/main/comp/cropper/index.vue'),
      meta: {
        title: t('routes.main.comp.cropperImage'),
      },
    },

    {
      path: 'timestamp',
      name: 'TimeDemo',
      component: () => import('@/views/main/comp/time/index.vue'),
      meta: {
        title: t('routes.main.comp.time'),
      },
    },
    {
      path: 'countTo',
      name: 'CountTo',
      component: () => import('@/views/main/comp/count-to/index.vue'),
      meta: {
        title: t('routes.main.comp.countTo'),
      },
    },
    {
      path: 'tree',
      name: 'TreeDemo',
      redirect: '/comp/tree/basic',
      component: getParentLayout('TreeDemo'),
      meta: {
        // icon: 'clarity:tree-view-line',
        title: t('routes.main.comp.tree'),
      },
      children: [
        {
          path: 'basic',
          name: 'BasicTreeDemo',
          component: () => import('@/views/main/tree/index.vue'),
          meta: {
            title: t('routes.main.comp.treeBasic'),
          },
        },
        {
          path: 'editTree',
          name: 'EditTreeDemo',
          component: () => import('@/views/main/tree/EditTree.vue'),
          meta: {
            title: t('routes.main.comp.editTree'),
          },
        },
        {
          path: 'actionTree',
          name: 'ActionTreeDemo',
          component: () => import('@/views/main/tree/ActionTree.vue'),
          meta: {
            title: t('routes.main.comp.actionTree'),
          },
        },
      ],
    },
    {
      path: 'editor',
      name: 'EditorDemo',
      redirect: '/comp/editor/markdown',
      component: getParentLayout('EditorDemo'),
      meta: {
        // icon: 'carbon:table-split',
        title: t('routes.main.editor.editor'),
      },
      children: [
        {
          path: 'json',
          component: () => import('@/views/main/editor/json/index.vue'),
          name: 'JsonEditorDemo',
          meta: {
            title: t('routes.main.editor.jsonEditor'),
          },
        },
        {
          path: 'markdown',
          component: getParentLayout('MarkdownDemo'),
          name: 'MarkdownDemo',
          meta: {
            title: t('routes.main.editor.markdown'),
          },
          redirect: '/comp/editor/markdown/index',
          children: [
            {
              path: 'index',
              name: 'MarkDownBasicDemo',
              component: () => import('@/views/main/editor/markdown/index.vue'),
              meta: {
                title: t('routes.main.editor.tinymceBasic'),
              },
            },
            {
              path: 'editor',
              name: 'MarkDownFormDemo',
              component: () => import('@/views/main/editor/markdown/Editor.vue'),
              meta: {
                title: t('routes.main.editor.tinymceForm'),
              },
            },
          ],
        },

        {
          path: 'tinymce',
          component: getParentLayout('TinymceDemo'),
          name: 'TinymceDemo',
          meta: {
            title: t('routes.main.editor.tinymce'),
          },
          redirect: '/comp/editor/tinymce/index',
          children: [
            {
              path: 'index',
              name: 'TinymceBasicDemo',
              component: () => import('@/views/main/editor/tinymce/index.vue'),
              meta: {
                title: t('routes.main.editor.tinymceBasic'),
              },
            },
            {
              path: 'editor',
              name: 'TinymceFormDemo',
              component: () => import('@/views/main/editor/tinymce/Editor.vue'),
              meta: {
                title: t('routes.main.editor.tinymceForm'),
              },
            },
          ],
        },
      ],
    },
    {
      path: 'scroll',
      name: 'ScrollDemo',
      redirect: '/comp/scroll/basic',
      component: getParentLayout('ScrollDemo'),
      meta: {
        title: t('routes.main.comp.scroll'),
      },
      children: [
        {
          path: 'basic',
          name: 'BasicScrollDemo',
          component: () => import('@/views/main/comp/scroll/index.vue'),
          meta: {
            title: t('routes.main.comp.scrollBasic'),
          },
        },
        {
          path: 'action',
          name: 'ActionScrollDemo',
          component: () => import('@/views/main/comp/scroll/Action.vue'),
          meta: {
            title: t('routes.main.comp.scrollAction'),
          },
        },
        {
          path: 'virtualScroll',
          name: 'VirtualScrollDemo',
          component: () => import('@/views/main/comp/scroll/VirtualScroll.vue'),
          meta: {
            title: t('routes.main.comp.virtualScroll'),
          },
        },
      ],
    },

    {
      path: 'modal',
      name: 'ModalDemo',
      component: () => import('@/views/main/comp/modal/index.vue'),
      meta: {
        title: t('routes.main.comp.modal'),
      },
    },
    {
      path: 'drawer',
      name: 'DrawerDemo',
      component: () => import('@/views/main/comp/drawer/index.vue'),
      meta: {
        title: t('routes.main.comp.drawer'),
      },
    },
    {
      path: 'desc',
      name: 'DescDemo',
      component: () => import('@/views/main/comp/desc/index.vue'),
      meta: {
        title: t('routes.main.comp.desc'),
      },
    },

    {
      path: 'verify',
      name: 'VerifyDemo',
      component: getParentLayout('VerifyDemo'),
      redirect: '/comp/verify/drag',
      meta: {
        title: t('routes.main.comp.verify'),
      },
      children: [
        {
          path: 'drag',
          name: 'VerifyDragDemo',
          component: () => import('@/views/main/comp/verify/index.vue'),
          meta: {
            title: t('routes.main.comp.verifyDrag'),
          },
        },
        {
          path: 'rotate',
          name: 'VerifyRotateDemo',
          component: () => import('@/views/main/comp/verify/Rotate.vue'),
          meta: {
            title: t('routes.main.comp.verifyRotate'),
          },
        },
      ],
    },
    //

    {
      path: 'qrcode',
      name: 'QrCodeDemo',
      component: () => import('@/views/main/comp/qrcode/index.vue'),
      meta: {
        title: t('routes.main.comp.qrcode'),
      },
    },
    {
      path: 'strength-meter',
      name: 'StrengthMeterDemo',
      component: () => import('@/views/main/comp/strength-meter/index.vue'),
      meta: {
        title: t('routes.main.comp.strength'),
      },
    },
    {
      path: 'upload',
      name: 'UploadDemo',
      component: () => import('@/views/main/comp/upload/index.vue'),
      meta: {
        title: t('routes.main.comp.upload'),
      },
    },
    {
      path: 'loading',
      name: 'LoadingDemo',
      component: () => import('@/views/main/comp/loading/index.vue'),
      meta: {
        title: t('routes.main.comp.loading'),
      },
    },
    {
      path: 'cardList',
      name: 'CardListDemo',
      component: () => import('@/views/main/comp/card-list/index.vue'),
      meta: {
        title: t('routes.main.comp.cardList'),
      },
    },
  ],
};

export default comp;
