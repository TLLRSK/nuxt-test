<script setup lang="ts">
import IconRoy from "../icons/IconRoy.vue";
import { introAnimation } from "~/utils/animations/gsap";

onMounted(() => {
  introAnimation();
});

</script>

<template>
  <nav class="nav">
    <NuxtLink to="/">
      <IconRoy />
    </NuxtLink>
  </nav>
</template>
