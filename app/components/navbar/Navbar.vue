<script setup lang="ts">
import gsap from "gsap";
import IconRoy from "../icons/IconRoy.vue";

onMounted(() => {
  introAnimation();
});

const introAnimation = () => {
  gsap.to(".nav", { backgroundColor: "#102D2D" });

  const tl = gsap.timeline({ delay: 1.6 });

  tl.to(
    ".nav",
    {
      duration: 1.5,
      height: "6.2rem",
      backgroundColor: "#FFFFFF",
      ease: "power2.inOut",
      borderColor: "#F0F0F0",
    },
    "start"
  );

  tl.to(
    ".logo",
    {
      duration: 1,
      scale: 1,
      ease: "power2.inOut",
    },
    "-=2.8"
  );

  tl.to(
    ".logo",
    {
      duration: 0.5,
      color: "#102D2D",
      ease: "power2.inOut",
    },
    "-=1"
  );
};
</script>

<template>
  <nav class="nav">
    <NuxtLink to="/">
      <IconRoy />
    </NuxtLink>
  </nav>
</template>
