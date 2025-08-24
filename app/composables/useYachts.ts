import type { TServerYachtsResponse, TTransformedYacht } from "~/types/types";
export const useYachts = () => {
  const page = ref(1);
  const buy = ref(true);

  const {
    data,
    pending,
    error,
  } = useAsyncData<TServerYachtsResponse>(
    "yachts-fetch",
    () =>
      $fetch<TServerYachtsResponse>("/api/products/yachts", {
        params: { page: page.value, buy: buy.value },
      }),
    {
      watch: [page, buy],
      transform: (data) => {
        if (page.value === 1) {
          allYachts.value = data.data;
        } else {
          allYachts.value.push(...data.data);
        }
        return data;
      },
    }
  );

  const allYachts = useState<TTransformedYacht[]>("yachts-list", () => {
    return data.value?.data || [];
  });

  const totalYachts = computed(() => data.value?.meta.total || 0);
  const totalPages = computed(
    () => data.value?.meta.totalPages || 0
  );
  const hasNextPage = computed(() => page.value < totalPages.value);
  const loadMore = () => {
    if (hasNextPage.value && !pending.value) {
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
