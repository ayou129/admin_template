import { defHttp } from '@/utils/http/axios';
import { getUserMenusResultModel } from './model/menuModel';

enum Api {
  GetMenusByUser = '/auth/user/menus',
}

/**
 * @description: Get user menu based on id
 */

export const getUserMenus = () => {
  return defHttp.get<getUserMenusResultModel>({ url: Api.GetMenusByUser });
};
