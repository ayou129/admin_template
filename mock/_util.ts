// Interface data format used to return a unified format
import { ResultEnum } from '@/enums/httpEnum';

export function resultSuccess<T = Recordable>(result: T, { message = 'ok' } = {}) {
  return {
    code: ResultEnum.SUCCESS,
    result,
    message,
    type: 'success',
  };
}

export function resultPageSuccess<T = any>(
  page: number,
  page_limit: number,
  list: T[],
  { message = 'ok' } = {},
) {
  const pageData = pagination(page, page_limit, list);

  return {
    ...resultSuccess({
      data: pageData,
      total: list.length,
    }),
    message,
  };
}

export function resultError(
  message = 'Request failed',
  { code = ResultEnum.ERROR, result = null } = {},
) {
  return {
    code,
    result,
    message,
    type: 'error',
  };
}

export function pagination<T = any>(pageNo: number, page_limit: number, array: T[]): T[] {
  const offset = (pageNo - 1) * Number(page_limit);
  return offset + Number(page_limit) >= array.length
    ? array.slice(offset, array.length)
    : array.slice(offset, offset + Number(page_limit));
}

export interface requestParams {
  method: string;
  body: any;
  headers?: { authorization?: string };
  query: any;
}

/**
 * @description 本函数用于从request数据中获取token，请根据项目的实际情况修改
 *
 */
export function getRequestToken({ headers }: requestParams): string | undefined {
  return headers?.authorization;
}
