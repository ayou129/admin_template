import {
  AccountParams,
  DeptListItem,
  MenuParams,
  RoleParams,
  RolePageParams,
  MenuListGetResultModel,
  MenuGetResultModels,
  DeptListGetResultModel,
  AccountListGetResultModel,
  RoleListGetResultModel,
} from './model/systemModel';
import { defHttp } from '@/utils/http/axios';

enum Api {
  AccountList = '/system/user/list',
  IsAccountExist = '/system/accountExist',
  DeptList = '/system/dept/list',
  MenuList = '/system/menu/list',
  MenuAll = '/system/menu/all',
  RoleList = '/system/role/list',
  RoleAll = '/system/role/all',
  setRole = '/system/role',
  GetRoleListAll = '/system/getRoleListAll',
}

export const getAccountList = (params: AccountParams) =>
  defHttp.get<AccountListGetResultModel>({ url: Api.AccountList, params });

export const getDeptList = (params?: DeptListItem) =>
  defHttp.get<DeptListGetResultModel>({ url: Api.DeptList, params });

export const getUserMenus = (params?: MenuParams) =>
  defHttp.get<MenuListGetResultModel>({ url: Api.MenuList, params });

export const getMenuAll = (params?: MenuParams) =>
  defHttp.get<MenuGetResultModels>({ url: Api.MenuAll, params });

export const getRoleList = (params?: RolePageParams) =>
  defHttp.get<RoleListGetResultModel>({ url: Api.RoleList, params });

export const getRoleListAll = (params?: RoleParams) =>
  defHttp.get<RoleListGetResultModel>({ url: Api.GetRoleListAll, params });

// export const setRole = (id: number, status: string) =>
//   defHttp.put({ url: Api.setRole, params: { id, status } });

export const setRole = (params) => defHttp.put({ url: Api.setRole, params });

export const isAccountExist = (account: string) =>
  defHttp.post({ url: Api.IsAccountExist, params: { account } }, { errorMessageMode: 'none' });
