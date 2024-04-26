import { BasicColumn, FormSchema } from '@/components/Table';
// import { Image } from 'ant-design-vue';
// import { h } from 'vue';

export const columns: BasicColumn[] = [
  {
    title: 'method',
    dataIndex: 'method',
  },
  {
    title: 'path',
    dataIndex: 'path',
    width: 200,
  },
  {
    title: 'headers',
    dataIndex: 'headers',
    width: 120,
  },
  {
    title: 'params',
    dataIndex: 'params',
    width: 120,
  },
  {
    title: 'body',
    dataIndex: 'body',
  },
  {
    title: 'ip',
    dataIndex: 'ip',
    width: 120,
  },
  {
    title: 'user_agent',
    dataIndex: 'user_agent',
  },
  {
    title: 'u_id',
    dataIndex: 'u_id',
  },
  {
    title: 'exception_trace',
    dataIndex: 'exception_trace',
  },
  {
    title: 'exception_info',
    dataIndex: 'exception_info',
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    width: 180,
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

export const requestFormSchema: FormSchema[] = [
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
