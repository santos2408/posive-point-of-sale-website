<script setup lang="ts">
import { useElementStore } from "@/presentation/stores/element";

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
  <section ref="hero">
    <h1>Empower Your Business Growth with Our Point of Sale</h1>
  </section>
</template>
