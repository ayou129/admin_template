import { defHttp } from '@/utils/http/axios';
// import { LoginParams, LoginResultModel } from './model/userModel';

import { ErrorMessageMode } from '#/axios';

enum Api {
  getUserList = '/user/list',
  postUser = '/user',
  putUser = '/user',
  deleteUser = '/user',
}

export function getUserList(params, mode: ErrorMessageMode = 'modal') {
  return defHttp.get(
    {
      url: Api.getUserList,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}
export function postUser(params, mode: ErrorMessageMode = 'modal') {
  return defHttp.post(
    {
      url: Api.postUser,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

export function putUser(params, mode: ErrorMessageMode = 'modal') {
  return defHttp.put(
    {
      url: Api.putUser,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

export function deleteUser(params, mode: ErrorMessageMode = 'modal') {
  return defHttp.delete(
    {
      url: Api.deleteUser,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}
