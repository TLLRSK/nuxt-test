<script setup lang="ts">
import type { TViewIconProps } from "~/types/types";

defineProps<TViewIconProps>();
</script>

<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="view-icon--two-columns"
  >
    <rect
      x="2"
      y="2"
      width="8"
      height="8"
      fill="currentColor"
      stroke="#0B2020"
      :class="{ active: active }"
    />
    <rect
      x="14"
      y="15"
      width="8"
      height="8"
      fill="currentColor"
      stroke="#0B2020"
      :class="{ active: active }"
    />
  </svg>
</template>