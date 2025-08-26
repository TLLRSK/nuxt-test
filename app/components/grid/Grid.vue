<script setup lang="ts">
import IconLoading from "../icons/IconLoading.vue";
import Card from "./Card.vue";
import Header from "./Header.vue";

const { currentView, isAnimating } = useViews();
const { yachts, pending, error, hasNextPage, loadMore } = useYachts();
</script>

<template>
  <section class="grid-container">
    <Header />

    <div v-if="error" class="error-message">
      <p>There was an error loading the yachts list: {{ error.message }}</p>
    </div>

    <div v-if="!pending && !error && yachts.length === 0" class="no-results">
      <p>No yachts found.</p>
    </div>

    <ul
      v-else-if="!error"
      :class="['grid', currentView?.class, { 'is-animating': isAnimating }]"
    >
      <Card v-for="item in yachts" :key="item.id" :item="item" />
    </ul>

    <ClientOnly>
      <div v-if="pending" class="loading">
        <IconLoading />
      </div>
    </ClientOnly>

    <ClientOnly>
      <div
        v-if="!pending && !error && hasNextPage && yachts.length > 0"
        class="load-more-container"
      >
        <button @click="loadMore" class="btn--secondary text-sm">
          Load More
        </button>
      </div>
    </ClientOnly>
  </section>
</template>
