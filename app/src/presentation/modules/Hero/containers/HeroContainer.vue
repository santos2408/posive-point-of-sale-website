<script setup lang="ts">
import { useElementStore } from "@/presentation/stores/element";
import HeroBackground from "../components/HeroBackground.vue";
import HeroContent from "../components/HeroContent.vue";

// states
const hero = useTemplateRef("hero");

// composables
const { width } = useWindowSize();
const elementStore = useElementStore();

// methods
onMounted(() => {
  const header = elementStore.getElement("header");

  if (header && hero.value) {
    hero.value.style.paddingTop = `${header.clientHeight}px`;
  }
});

watch(width, () => {
  if (import.meta.client) {
    const header = elementStore.getElement("header");

    if (header && hero.value) {
      const header = elementStore.getElement("header");
      hero.value.style.paddingTop = `${header?.clientHeight}px`;
    }
  }
});
</script>

<template>
  <section ref="hero" class="relative">
    <HeroContent />
    <HeroBackground />
  </section>
</template>
