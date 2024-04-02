import type { Ref } from 'vue';
import { ref, unref, computed } from 'vue';

function pagination<T = any>(list: T[], pageNo: number, page_limit: number): T[] {
  const offset = (pageNo - 1) * Number(page_limit);
  const ret =
    offset + Number(page_limit) >= list.length
      ? list.slice(offset, list.length)
      : list.slice(offset, offset + Number(page_limit));
  return ret;
}

export function usePagination<T = any>(list: Ref<T[]>, page_limit: number) {
  const currentPage = ref(1);
  const page_limitRef = ref(page_limit);

  const getPaginationList = computed(() => {
    return pagination(unref(list), unref(currentPage), unref(page_limitRef));
  });

  const getTotal = computed(() => {
    return unref(list).length;
  });

  function setCurrentPage(page: number) {
    currentPage.value = page;
  }

  function setPageSize(page_limit: number) {
    page_limitRef.value = page_limit;
  }

  return { setCurrentPage, getTotal, setPageSize, getPaginationList };
}
