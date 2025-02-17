import { MockMethod } from 'vite-plugin-mock';
import { resultError, resultPageSuccess, resultSuccess } from '../_util';

const accountList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 20; index++) {
    result.push({
      id: `${index}`,
      account: '@first',
      email: '@email',
      nick_name: '@cname()',
      role: '@first',
      created_at: '@datetime',
      remark: '@cword(10,20)',
      'dept|0-2': 1,
      'status|1': ['0', '1'],
    });
  }
  return result;
})();

const roleList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 4; index++) {
    result.push({
      id: index + 1,
      sort: `${index + 1}`,
      roleName: ['超级管理员', '管理员', '文章管理员', '普通用户'][index],
      roleValue: '@first',
      created_at: '@datetime',
      remark: '@cword(10,20)',
      menu: [['0', '1', '2'], ['0', '1'], ['0', '2'], ['2']][index],
      'status|1': ['0', '1'],
    });
  }
  return result;
})();

const deptList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 3; index++) {
    result.push({
      id: `${index}`,
      name: ['华东分部', '华南分部', '西北分部'][index],
      sort: index + 1,
      created_at: '@datetime',
      remark: '@cword(10,20)',
      'status|1': ['0', '0', '1'],
      children: (() => {
        const children: any[] = [];
        for (let j = 0; j < 4; j++) {
          children.push({
            id: `${index}-${j}`,
            name: ['研发部', '市场部', '商务部', '财务部'][j],
            sort: j + 1,
            created_at: '@datetime',
            remark: '@cword(10,20)',
            'status|1': ['0', '1'],
            pid: `${index}`,
            children: undefined,
          });
        }
        return children;
      })(),
    });
  }
  return result;
})();

const menuList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 3; index++) {
    result.push({
      id: `${index}`,
      icon: ['ion:layers-outline', 'ion:git-compare-outline', 'ion:tv-outline'][index],
      component: 'LAYOUT',
      type: '0',
      name: ['Dashboard', '权限管理', '功能'][index],
      permission: '',
      sort: index + 1,
      created_at: '@datetime',
      'status|1': ['0', '0', '1'],
      children: (() => {
        const children: any[] = [];
        for (let j = 0; j < 4; j++) {
          children.push({
            id: `${index}-${j}`,
            type: '1',
            name: ['菜单1', '菜单2', '菜单3', '菜单4'][j],
            icon: 'ion:document',
            permission: ['menu1:view', 'menu2:add', 'menu3:update', 'menu4:del'][index],
            component: [
              '/dashboard/welcome/index',
              '/dashboard/analysis/index',
              '/dashboard/workbench/index',
              '/dashboard/test/index',
            ][j],
            sort: j + 1,
            created_at: '@datetime',
            'status|1': ['0', '1'],
            parentMenu: `${index}`,
            children: (() => {
              const children: any[] = [];
              for (let k = 0; k < 4; k++) {
                children.push({
                  id: `${index}-${j}-${k}`,
                  type: '2',
                  name: '按钮' + (j + 1) + '-' + (k + 1),
                  icon: '',
                  permission:
                    ['menu1:view', 'menu2:add', 'menu3:update', 'menu4:del'][index] +
                    ':btn' +
                    (k + 1),
                  component: [
                    '/dashboard/welcome/index',
                    '/dashboard/analysis/index',
                    '/dashboard/workbench/index',
                    '/dashboard/test/index',
                  ][j],
                  sort: j + 1,
                  created_at: '@datetime',
                  'status|1': ['0', '1'],
                  parentMenu: `${index}-${j}`,
                  children: undefined,
                });
              }
              return children;
            })(),
          });
        }
        return children;
      })(),
    });
  }
  return result;
})();

export default [
  {
    url: '/basic-api/system/getAccountList',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, page_limit = 20 } = query;
      return resultPageSuccess(page, page_limit, accountList);
    },
  },
  {
    url: '/basic-api/system/getRoleList',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, page_limit = 20 } = query;
      return resultPageSuccess(page, page_limit, roleList);
    },
  },
  {
    url: '/basic-api/system/putRole',
    timeout: 500,
    method: 'post',
    response: ({ query }) => {
      const { id, status } = query;
      return resultSuccess({ id, status });
    },
  },
  {
    url: '/basic-api/system/getRoleAll',
    timeout: 100,
    method: 'get',
    response: () => {
      return resultSuccess(roleList);
    },
  },
  {
    url: '/basic-api/system/getDeptList',
    timeout: 100,
    method: 'get',
    response: () => {
      return resultSuccess(deptList);
    },
  },
  {
    url: '/basic-api/system/getUserMenus',
    timeout: 100,
    method: 'get',
    response: () => {
      return resultSuccess(menuList);
    },
  },
  {
    url: '/basic-api/system/accountExist',
    timeout: 500,
    method: 'post',
    response: ({ body }) => {
      const { account } = body || {};
      if (account && account.indexOf('admin') !== -1) {
        return resultError('该字段不能包含admin');
      } else {
        return resultSuccess(`${account} can use`);
      }
    },
  },
] as MockMethod[];
