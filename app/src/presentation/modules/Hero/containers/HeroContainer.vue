<script setup lang="ts">
import { useElementStore } from "@/presentation/stores/element";
import ActionButton from "~/presentation/components/ActionButton/components/ActionButton.vue";

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
    <div class="container py-12 text-center">
      <p class="text-brand-primary-500 mb-2.5 text-sm font-bold uppercase">#1 best All-in-one POS platform</p>

      <h1 class="text-brand-neutral-900 mb-4 text-3xl font-extrabold">
        Empower Your <br class="max-sm:hidden" />
        Business Growth with <br class="max-sm:hidden" />
        Our Point of Sale
      </h1>

      <p class="text-brand-neutral-400 mb-6 font-medium">
        From managing inventory to tracking sales performance, our platform provides you with the tools you need to
        succeed in today's competitive market
      </p>

      <div class="space-y-4">
        <ActionButton label="Start free trial" class="w-full" />
        <ActionButton
          label="Watch show reel"
          :style="'action-button--outlined'"
          icon="cuida:play-outline"
          class="text-brand-neutral-900 w-full font-bold"
        />
      </div>
    </div>

    <div class="relative">
      <picture>
        <!-- <source media="(max-width: 600px)" srcset="produto-mobile-recortado.jpg" /> -->
        <!-- <source media="(max-width: 1024px)" srcset="produto-tablet-medio.jpg" /> -->
        <img src="/images/hero/hero-background.png" alt="Pessoa usando produto" aria-hidden="true" />
      </picture>

      <div class="absolute -top-10 left-0 flex h-full w-full items-center justify-center">
        <img
          src="/images/hero/hero-ipad-device.png"
          srcset="/images/hero/hero-ipad-device-350w.png 350w"
          sizes="(max-width:480px) 350px"
          alt="Painel de vendas da aplicação Posive"
        />
      </div>
    </div>
  </section>
</template>
