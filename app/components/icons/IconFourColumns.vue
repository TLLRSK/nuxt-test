<script setup lang="ts">
import type { TViewIconProps } from "~/types/types";

defineProps<TViewIconProps>();
</script>

<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="view-icon--four-columns"
  >
    <rect
      x="0.5"
      y="0.5"
      width="5"
      height="5"
      fill="currentColor"
      stroke="#5F7272"
      :class="{ active: active }"
    />
    <rect
      x="0.5"
      y="10.5"
      width="5"
      height="5"
      fill="currentColor"
      stroke="#5F7272"
      :class="{ active: active }"
    />
    <rect
      x="10.5"
      y="0.5"
      width="5"
      height="5"
      fill="currentColor"
      stroke="#5F7272"
      :class="{ active: active }"
    />
    <rect
      x="10.5"
      y="10.5"
      width="5"
      height="5"
      fill="currentColor"
      stroke="#5F7272"
      :class="{ active: active }"
    />
  </svg>
</template>