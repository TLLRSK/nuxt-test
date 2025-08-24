<script setup lang="ts">
import IconLoading from "../icons/IconLoading.vue";
import Card from "./Card.vue";
import Header from "./Header.vue";
const { currentView } = useViews();
const { yachts, isLoading, error, hasNextPage, loadMore } =
  useYachts();
</script>

<template>
  <section class="grid-container">
    <Header />

    <div v-if="error" class="error-message">
      <p>There was an error loading the yachts list: {{ error.message }}</p>
    </div>

    <ul :class="['grid', currentView?.class]">
      <Card v-for="item in yachts" :key="item.id" :item="item" />
    </ul>

    <div v-if="yachts.length === 0" class="no-results">
      <p class="no-results-text font-urban-grotesk">No yachts found.</p>
    </div>

    <div v-else-if="isLoading" class="loading">
      <IconLoading />
    </div>

    <div v-if="hasNextPage && yachts.length > 0" class="load-more-container">
      <button @click="loadMore" class="btn--secondary text-sm">Load More</button>
    </div>
  </section>
</template>
