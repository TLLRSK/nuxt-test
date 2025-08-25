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

const animationTimeout = ref<NodeJS.Timeout | null>(null);

const handleViewChange = (selectedView: string): void => {
  const matchedView = Object.values(viewsMap).find(
    (view) => view.class === selectedView
  );

  if (!matchedView || matchedView.class === currentView.value?.class) return;

  if (animationTimeout.value) {
    clearTimeout(animationTimeout.value);
    animationTimeout.value = null;
  }

  isAnimating.value = true;

  animationTimeout.value = setTimeout(() => {
    currentView.value = matchedView;
    isAnimating.value = false;
    animationTimeout.value = null;
  }, 650);
};

export const useViews = () => {
  return { viewsMap, currentView, isAnimating, handleViewChange };
};
