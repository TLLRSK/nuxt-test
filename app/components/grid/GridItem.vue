<script setup lang="ts">
interface Props {
  item: {
    name: string
  }
}
defineProps<Props>()
</script>

<template>
  <li>
    <article>
      <h3>{{ item.name }}</h3>
    </article>
  </li>
</template>