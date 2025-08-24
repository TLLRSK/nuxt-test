import IconFourColumns from "~/components/icons/IconFourColumns.vue";
import IconTwoColumns from "~/components/icons/IconTwoColumns.vue";
import type { TView, TViewsMap } from "~/types/types";

const viewsMap: TViewsMap = {
  columnsFour: {
    class: "columns-4",
    icon: IconFourColumns,
  },
  columnsTwo: {
    class: "columns-2",
    icon: IconTwoColumns,
  },
};

const currentView: Ref<TView | undefined> = ref(viewsMap.columnsTwo);
const isAnimating: Ref<boolean> = ref(false);

const handleViewChange = async (selectedView: string): Promise<void> => {
  const matchedView = Object.values(viewsMap).find(
    (view) => view.class === selectedView
  );

  if (!matchedView || matchedView.class === currentView.value?.class) return;

  isAnimating.value = true;

  await new Promise((resolve) => setTimeout(resolve, 600));

  currentView.value = matchedView;

  setTimeout(() => {
    isAnimating.value = false;
  }, 100);
};

export const useViews = () => {
  return { viewsMap, currentView, isAnimating, handleViewChange };
};
