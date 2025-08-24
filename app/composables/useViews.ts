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

const setView = (selectedView: string): void => {
  const matchedView = Object.values(viewsMap).find(view => view.class === selectedView);
  
  if (matchedView) {
    currentView.value = matchedView;
  }
};

export const useViews = () => {
  return { viewsMap, currentView, setView };
};