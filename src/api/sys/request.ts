import { defHttp } from '@/utils/http/axios';
// import { LoginParams, LoginResultModel } from './model/requestModel';

import { ErrorMessageMode } from '#/axios';

enum Api {
  getRequestList = '/request/list',
  postRequest = '/request',
  putRequest = '/request',
  deleteRequest = '/request',
}

export function getRequestList(params, mode: ErrorMessageMode = 'modal') {
  return defHttp.get(
    {
      url: Api.getRequestList,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}
// export function postRequest(params, mode: ErrorMessageMode = 'modal') {
//   return defHttp.post(
//     {
//       url: Api.postRequest,
//       params,
//     },
//     {
//       errorMessageMode: mode,
//     },
//   );
// }

// export function putRequest(params, mode: ErrorMessageMode = 'modal') {
//   return defHttp.put(
//     {
//       url: Api.putRequest,
//       params,
//     },
//     {
//       errorMessageMode: mode,
//     },
//   );
// }

export function deleteRequest(params, mode: ErrorMessageMode = 'modal') {
  return defHttp.delete(
    {
      url: Api.deleteRequest,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}
