<script setup lang="ts">
import Card from "./Card.vue";
const { currentView } = useViews();
const { yachts, totalYachts, isLoading, error, hasNextPage, loadMore } =
  useYachts();
</script>

<template>
  <section class="grid-container">
    <header>
      <h1
        :data-desktop="`Yachts for sale · ${totalYachts}`"
        :data-mobile="`BUY · ${totalYachts} Yachts`"
      />
    </header>

    <div v-if="error" class="error-message">
      <p>There was an error loading the yachts list: {{ error.message }}</p>
    </div>

    <ul class="grid columns-4">
      <Card v-for="item in yachts" :key="item.id" :item="item" />
    </ul>

    <div v-if="isLoading">
      <p class="loading-text font-urban-grotesk">Loading yachts...</p>
    </div>

    <div v-else-if="yachts.length === 0" class="no-results">
      <p class="no-results-text font-urban-grotesk">No yachts found.</p>
    </div>

    <div v-if="hasNextPage && yachts.length > 0" class="load-more-container">
      <button @click="loadMore" class="btn--secondary">Load More</button>
    </div>
  </section>
</template>
