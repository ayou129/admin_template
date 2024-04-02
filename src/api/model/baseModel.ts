export interface BasicPageParams {
  page: number;
  page_limit: number;
}

export interface BasicFetchResult<T> {
  data: T[];
  total: number;
}
