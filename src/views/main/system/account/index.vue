<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <DeptTree class="w-1/4 xl:w-1/5" @select="handleSelect" />
    <BasicTable @register="registerTable" class="w-3/4 xl:w-4/5" :searchInfo="searchInfo">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">新增账号</a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'clarity:info-standard-line',
                tooltip: '查看用户详情',
                onClick: handleView.bind(null, record),
              },
              {
                icon: 'clarity:note-edit-line',
                tooltip: '编辑用户资料',
                onClick: handleEdit.bind(null, record),
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                tooltip: '删除此账号',
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
    <AccountModal @register="registerModal" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { reactive } from 'vue';

  import { BasicTable, useTable, TableAction } from '@/components/Table';
  import { getAccountList, deleteAccount, putAccount, postAccount } from '@/api/main/system';
  import { PageWrapper } from '@/components/Page';
  import DeptTree from './DeptTree.vue';

  import { useModal } from '@/components/Modal';
  import AccountModal from './AccountModal.vue';

  import { columns, searchFormSchema } from './account.data';
  import { useGo } from '@/hooks/web/usePage';
  import { useMessage } from '@/hooks/web/useMessage';
  import { useI18n } from '@/hooks/web/useI18n';

  const { notification } = useMessage();
  const { t } = useI18n();

  defineOptions({ name: 'AccountManagement' });

  const go = useGo();
  const [registerModal, { openModal }] = useModal();
  const searchInfo = reactive<Recordable>({});
  // updateTableDataRecord
  const [registerTable, { reload }] = useTable({
    title: '账号列表',
    api: getAccountList,
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
    deleteAccount(record)
      .then(() => {
        notification.success({ message: t(`sys.api.operationSuccess`) });
      })
      .catch(() => {})
      .finally(() => {
        reload();
      });
  }

  function handleSuccess({ isUpdate, values }) {
    if (isUpdate) {
      putAccount(values)
        .then(() => {
          notification.success({ message: t(`sys.api.operationSuccess`) });
        })
        .catch(() => {})
        .finally(() => {
          reload();
        });
    } else {
      postAccount(values)
        .then(() => {
          notification.success({ message: t(`sys.api.operationSuccess`) });
        })
        .catch(() => {})
        .finally(() => {
          reload();
        });
    }
  }

  function handleSelect(dept_id = '') {
    searchInfo.dept_id = dept_id;
    reload();
  }

  function handleView(record: Recordable) {
    go('/system/account_detail/' + record.id);
  }
</script>
