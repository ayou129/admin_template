import { BasicPageParams, BasicFetchResult } from '@/api/model/baseModel';

export type AccountParams = BasicPageParams & {
  username?: string;
  nick_name?: string;
  [key: string]: any;
};

export type RoleParams = {
  roleName?: string;
  status?: string;
};

export type RolePageParams = BasicPageParams & RoleParams;

export type DeptParams = {
  name?: string;
  status?: string;
};

export type MenuParams = {
  name?: string;
  status?: string;
};

export interface AccountListItem {
  id: string;
  username: string;
  email: string;
  nick_name: string;
  role: number;
  created_at: string;
  remark: string;
  status: number;
}

export interface DeptListItem {
  id: string;
  sort: string;
  created_at: string;
  remark: string;
  status: number;
}

export interface MenuListItem {
  id: string;
  sort: string;
  created_at: string;
  status: number;
  icon: string;
  component: string;
  permission: string;
}

export interface RoleListItem {
  id: string;
  name: string;
  value: string;
  sort: string;
  remark: number;
  status: number;
  created_at: string;
}

/**
 * @description: Request list return value
 */
export type AccountGetResultModel = AccountListItem[];

export type AccountListGetResultModel = BasicFetchResult<AccountListItem>;

export type DeptListGetResultModel = BasicFetchResult<DeptListItem>;

export type RoleListGetResultModel = BasicFetchResult<RoleListItem>;

export type DeptAllGetResultModel = DeptListItem[];

export type MenuListGetResultModel = BasicFetchResult<MenuListItem>;

export type MenuGetResultModels = MenuListItem[];

export type RoleAllGetResultModel = BasicFetchResult<RoleListItem>;

export type RoleGetResultModels = RoleListItem[];
