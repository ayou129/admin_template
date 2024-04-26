<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">新增账号</a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'clarity:info-standard-line',
                tooltip: '查看详情',
                onClick: handleView.bind(null, record),
              },
              {
                icon: 'clarity:note-edit-line',
                tooltip: '编辑资料',
                onClick: handleEdit.bind(null, record),
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                tooltip: '删除',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <RequestModal @register="registerModal" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { reactive } from 'vue';

  import { BasicTable, useTable, TableAction } from '@/components/Table';
  import { getRequestList, deleteRequest } from '@/api/sys/request';
  import { PageWrapper } from '@/components/Page';

  import { useModal } from '@/components/Modal';
  import RequestModal from './RequestModal.vue';

  import { columns, searchFormSchema } from './request.data';
  import { useGo } from '@/hooks/web/usePage';
  import { useMessage } from '@/hooks/web/useMessage';
  import { useI18n } from '@/hooks/web/useI18n';

  const { notification } = useMessage();
  const { t } = useI18n();

  defineOptions({ name: 'RequestManagement' });

  const go = useGo();
  const [registerModal, { openModal }] = useModal();
  const searchInfo = reactive<Recordable>({});
  // updateTableDataRecord
  const [registerTable, { reload }] = useTable({
    title: '列表',
    api: getRequestList,
    rowKey: 'id',
    columns,
    formConfig: {
      labelWidth: 120,
      schemas: searchFormSchema,
      autoSubmitOnEnter: true,
    },
    useSearchForm: true,
    showTableSetting: true,
    bordered: true,
    handleSearchInfoFn(info) {
      console.log('handleSearchInfoFn', info);
      return info;
    },
    actionColumn: {
      width: 120,
      title: '操作',
      dataIndex: 'action',
      // slots: { customRender: 'action' },
    },
  });

  function handleCreate() {
    openModal(true, {
      isUpdate: false,
    });
  }

  function handleEdit(record: Recordable) {
    console.log(record);
    openModal(true, {
      record,
      isUpdate: true,
    });
  }

  function handleDelete(record: Recordable) {
    console.log(record);
    deleteRequest(record)
      .then(() => {
        notification.success({ message: t(`sys.api.operationSuccess`) });
      })
      .catch(() => {})
      .finally(() => {
        reload();
      });
  }

  // function handleSuccess({ isUpdate, values }) {
  function handleSuccess() {
    // if (isUpdate) {
    //   putRequest(values)
    //     .then(() => {
    //       notification.success({ message: t(`sys.api.operationSuccess`) });
    //     })
    //     .catch(() => {})
    //     .finally(() => {
    //       reload();
    //     });
    // } else {
    //   postRequest(values)
    //     .then(() => {
    //       notification.success({ message: t(`sys.api.operationSuccess`) });
    //     })
    //     .catch(() => {})
    //     .finally(() => {
    //       reload();
    //     });
    // }
  }

  function handleView(record: Recordable) {
    go('/system/request_detail/' + record.id);
  }
</script>
