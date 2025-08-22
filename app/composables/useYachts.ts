import type { TServerYachtsResponse, TTransformedYacht, TYacht } from "~/types/types";

export const useYachts = () => {
  const page = ref(1);
  const buy = ref(true);

  const allYachts = ref<TTransformedYacht[]>([]);

  const { data, pending, error } = useAsyncData<TServerYachtsResponse>(
    () => `yachts-${page.value}-${buy.value}`,
    () =>
      $fetch<TServerYachtsResponse>("/api/products/yachts", {
        params: { page: page.value, buy: buy.value },
      }),
    {
      watch: [page, buy],
      server: true,
      immediate: true,
    }
  );

  watch(
    data,
    (val) => {
      if (!val) return;

      if (page.value === 1) {
        allYachts.value = val.data;
      } else {
        allYachts.value = [...allYachts.value, ...val.data];
      }
    },
    { immediate: true }
  );

  const totalYachts = computed(() => data.value?.meta.total || 0);
  const currentPage = computed(() => data.value?.meta.page || 1);
  const totalPages = computed(() => data.value?.meta.totalPages || 0);
  const hasNextPage = computed(() => currentPage.value < totalPages.value);

  const loadMore = () => {
    if (hasNextPage.value) {
      page.value++;
    }
  };

  return {
    yachts: allYachts,
    totalYachts,
    isLoading: pending,
    error,
    hasNextPage,
    loadMore,
  };
};