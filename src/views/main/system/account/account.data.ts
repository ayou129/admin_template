// isAccountExist
import { getRoleAll, getDeptAll } from '@/api/main/system';
import { BasicColumn, FormSchema } from '@/components/Table';

/**
 * transform mock data
 * {
 *  0: '华东分部',
 * '0-0': '华东分部-研发部'
 * '0-1': '华东分部-市场部',
 *  ...
 * }
 */
export const deptMap = (() => {
  const pDept = ['华东分部', '华南分部', '西北分部'];
  const cDept = ['研发部', '市场部', '商务部', '财务部'];

  return pDept.reduce((map, p, pIdx) => {
    map[pIdx] = p;

    cDept.forEach((c, cIndex) => (map[`${pIdx}-${cIndex}`] = `${p}-${c}`));

    return map;
  }, {});
})();

export const columns: BasicColumn[] = [
  {
    title: '用户名',
    dataIndex: 'username',
    width: 120,
  },
  {
    title: '昵称',
    dataIndex: 'nick_name',
    width: 120,
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    width: 120,
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    width: 180,
  },
  {
    title: '角色',
    dataIndex: 'role',
    width: 200,
    customRender: ({ value }) => {
      if (value) {
        return value.name;
      } else {
        return '';
      }
    },
  },
  {
    title: '所属部门',
    dataIndex: 'dept',
    customRender: ({ value }) => {
      if (value) {
        return value.name;
      } else {
        return '';
      }
    },
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'username',
    label: '用户名',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'nick_name',
    label: '昵称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const accountFormSchema: FormSchema[] = [
  {
    field: 'username',
    label: '用户名',
    component: 'Input',
    // helpMessage: ['本字段演示异步验证', '不能输入带有admin的用户名'],
    rules: [
      {
        required: true,
        message: '请输入用户名',
      },
      // {
      //   trigger: 'blur',
      //   validator(_, value) {
      //     return new Promise((resolve, reject) => {
      //       if (!value) return resolve();
      //       isAccountExist(value)
      //         .then((resolve) => {
      //           console.log(resolve);
      //         })
      //         .catch((err) => {
      //           reject(err.message || '验证失败');
      //         });
      //     });
      //   },
      // },
    ],
  },
  {
    field: 'password',
    label: '密码',
    component: 'InputPassword',
    required: true,
    ifShow: false,
  },
  {
    field: 'role_id',
    label: '角色',
    component: 'ApiSelect',
    componentProps: {
      api: getRoleAll,
      labelField: 'name',
      valueField: 'id',
    },
    required: true,
  },
  {
    field: 'dept_id',
    label: '所属部门',
    component: 'ApiTreeSelect',
    componentProps: {
      api: getDeptAll,
      labelField: 'name',
      valueField: 'id',
      onChange: (e, v) => {
        console.log('ApiTreeSelect====>:', e, v);
      },
    },
    required: true,
  },
  {
    field: 'nick_name',
    label: '昵称',
    component: 'Input',
    required: true,
  },

  {
    label: '邮箱',
    field: 'email',
    component: 'Input',
    required: true,
  },
];
