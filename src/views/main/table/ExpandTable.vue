<template>
  <PageWrapper
    title="可展开表格"
    content="TableAction组件可配置stopButtonPropagation来阻止操作按钮的点击事件冒泡，以便配合Table组件的expandRowByClick"
  >
    <BasicTable @register="registerTable">
      <template #expandedRowRender="{ record }">
        <span>No: {{ record.no }} </span>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            stopButtonPropagation
            :actions="[
              {
                label: '删除',
                icon: 'ic:outline-delete-outline',
                onClick: handleDelete.bind(null, record),
              },
            ]"
            :dropDownActions="[
              {
                label: '启用',
                popConfirm: {
                  title: '是否启用？',
                  confirm: handleOpen.bind(null, record),
                },
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { BasicTable, useTable, TableAction } from '@/components/Table';
  import { PageWrapper } from '@/components/Page';
  import { getBasicColumns } from './tableData';

  import { demoListApi } from '@/api/demo/table';

  const [registerTable] = useTable({
    api: demoListApi,
    title: '可展开表格演示',
    titleHelpMessage: ['已启用expandRowByClick', '已启用stopButtonPropagation'],
    columns: getBasicColumns(),
    rowKey: 'id',
    canResize: false,
    expandRowByClick: true,
    accordion: true, // 手风琴效果
    actionColumn: {
      width: 160,
      title: 'Action',
      dataIndex: 'action',
      fixed: 'right',
      // slots: { customRender: 'action' },
    },
  });
  function handleDelete(record: Recordable) {
    console.log('点击了删除', record);
  }
  function handleOpen(record: Recordable) {
    console.log('点击了启用', record);
  }
</script>
@/api/main/table
