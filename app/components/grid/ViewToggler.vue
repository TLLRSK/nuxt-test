<script setup lang="ts">
import type { TView } from '~/types/types';

const { viewsMap, currentView, handleViewChange } = useViews();

const handleViewToggle = (viewClass: string) => {
  handleViewChange(viewClass);
};

const isActive = (view: TView) => {
  return currentView.value?.class === view.class;
};
</script>

<template>
  <div class="view-toggler-container">
    <div class="separator" />
    <div class="view-toggler">
      <p class="text-sm">View</p>
      <div>
        <button
          v-for="view in viewsMap"
          :key="view.class"
          :class="['btn--view', { active: isActive(view) }]"
          :data-view="view.class"
          @click="handleViewToggle(view.class)"
        >
          <component
            :is="view.icon"
            class="view-icon"
            :active="isActive(view)"
          />
        </button>
      </div>
    </div>
  </div>
</template>
