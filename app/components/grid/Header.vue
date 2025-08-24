<script setup lang="ts">
import ViewToggler from "./ViewToggler.vue";

const { totalYachts } = useYachts();
</script>
<template>
  <header>
    <h1
      class="text-md"
      :data-desktop="`YACHTS FOR SALE · ${totalYachts}`"
      :data-mobile="`BUY · ${totalYachts} Yachts`"
    />
    <ViewToggler />
  </header>
</template>
