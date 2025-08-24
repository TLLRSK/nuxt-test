<script setup lang="ts">
const { viewsMap, currentView, handleViewChange } = useViews();

const handleViewToggle = (viewClass: string) => {
  handleViewChange(viewClass);
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
          :class="['btn--view', { active: currentView?.class === view.class }]"
          :data-view="view.class"
          @click="handleViewToggle(view.class)"
        >
          <component
            :is="view.icon"
            class="view-icon"
            :active="currentView?.class === view.class"
          />
        </button>
      </div>
    </div>
  </div>
</template>
