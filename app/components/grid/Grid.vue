<script setup lang="ts">
import GridItem from './GridItem.vue';

const { yachts, totalYachts, isLoading, error, currentPage, hasNextPage, loadMore } = useYachts();
</script>

<template>
  <div>
    <header>Buy Yachts {{ totalYachts }}</header>

    <div v-if="error" class="error">
      Failed to load yachts. Please try again.
    </div>

    <ul v-else>
      <li v-if="isLoading && yachts.length === 0" class="loading">
        Loading...
      </li>
      <li v-else-if="!yachts.length" class="no-results">
        No yachts found.
      </li>
      
      <GridItem v-else v-for="item in yachts" :key="item.id" :item="item" />
    </ul>

    <button v-if="hasNextPage" @click="loadMore">
      Load more
    </button>
  
  </div>
</template>
