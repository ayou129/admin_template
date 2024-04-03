import {
  AccountParams,
  DeptListItem,
  MenuParams,
  RoleParams,
  RolePageParams,
  MenuListGetResultModel,
  MenuGetResultModels,
  DeptListGetResultModel,
  DeptAllGetResultModel,
  AccountListGetResultModel,
  RoleListGetResultModel,
  RoleAllGetResultModel,
} from './model/systemModel';
import { defHttp } from '@/utils/http/axios';

enum Api {
  AccountList = '/system/user/list',
  IsAccountExist = '/system/user/exist',
  DeptList = '/system/dept/list',
  DeptAll = '/system/dept/all',
  Dept = '/system/dept',
  MenuList = '/system/menu/list',
  MenuAll = '/system/menu/all',
  RoleList = '/system/role/list',
  RoleAll = '/system/role/all',
  Role = '/system/role',
}

export const getAccountList = (params: AccountParams) =>
  defHttp.get<AccountListGetResultModel>({ url: Api.AccountList, params });

export const getDeptList = (params?: DeptListItem) =>
  defHttp.get<DeptListGetResultModel>({ url: Api.DeptList, params });

export const getDeptAll = (params?: RoleParams) =>
  defHttp.get<DeptAllGetResultModel>({ url: Api.DeptAll, params });

export const getUserMenus = (params?: MenuParams) =>
  defHttp.get<MenuListGetResultModel>({ url: Api.MenuList, params });

export const getMenuAll = (params?: MenuParams) =>
  defHttp.get<MenuGetResultModels>({ url: Api.MenuAll, params });

export const getRoleList = (params?: RolePageParams) =>
  defHttp.get<RoleListGetResultModel>({ url: Api.RoleList, params });

export const getRoleAll = (params?: RoleParams) =>
  defHttp.get<RoleAllGetResultModel>({ url: Api.RoleAll, params });

// export const putRole = (id: number, status: string) =>
//   defHttp.put({ url: Api.putRole, params: { id, status } });

export const putRole = (params) => defHttp.put({ url: Api.Role, params });
export const postRole = (params) => defHttp.post({ url: Api.Role, params });
export const deleteRole = (params) => defHttp.delete({ url: Api.Role, params });

export const isAccountExist = (username: string) =>
  defHttp.get({ url: Api.IsAccountExist, params: { username } }, { errorMessageMode: 'none' });
