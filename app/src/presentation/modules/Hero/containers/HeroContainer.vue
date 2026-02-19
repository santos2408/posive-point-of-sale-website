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
    <div class="container pt-12 pb-6 text-center 2xl:pt-16">
      <p class="text-brand-primary-500 mb-2.5 text-sm font-bold uppercase xl:text-lg">
        #1 best All-in-one POS platform
      </p>

      <h1
        class="text-brand-neutral-900 mx-auto mb-4 max-w-85 text-3xl font-extrabold md:max-w-lg lg:max-w-xl lg:text-4xl lg:leading-snug xl:max-w-206.75 xl:text-5xl 2xl:max-w-230 2xl:text-6xl"
      >
        Empower Your Business Growth with Our Point of Sale
      </h1>

      <p
        class="text-brand-neutral-400 mx-auto mb-6 max-w-md font-medium lg:mb-8 lg:max-w-2xl xl:max-w-160 2xl:max-w-180 2xl:text-lg"
      >
        From managing inventory to tracking sales performance, our platform provides you with the tools you need to
        succeed in today's competitive market
      </p>

      <div class="max-md:space-y-4 md:flex md:justify-center md:gap-4">
        <ActionButton label="Start free trial" class="w-full md:max-w-50" />
        <ActionButton
          label="Watch show reel"
          :style="'action-button--outlined'"
          icon="cuida:play-outline"
          class="text-brand-neutral-900 w-full font-bold md:max-w-50"
        />
      </div>
    </div>

    <div class="relative">
      <picture>
        <source media="(min-width: 1260px)" srcset="/images/hero/hero-background-1260w.png" />
        <source media="(min-width: 1180px)" srcset="/images/hero/hero-background-1180w.png" />
        <source media="(min-width: 1024px)" srcset="/images/hero/hero-background-tablet.png" />

        <img
          src="/images/hero/hero-background-mobile.png"
          alt=""
          aria-hidden="true"
          class="w-full object-cover object-center md:max-h-145 xl:max-h-200"
        />
      </picture>

      <div class="absolute -top-6 left-0 flex h-full w-full items-center justify-center md:top-0">
        <img
          srcset="/images/hero/hero-ipad-device-350w.png 350w, /images/hero/hero-ipad-device.png 864w"
          sizes="(max-width:480px) 350px, (max-width:768px) 864px"
          src="/images/hero/hero-ipad-device.png"
          alt="Painel de vendas da aplicação Posive"
          class="w-full max-w-164 px-6 lg:px-0 xl:max-w-216"
        />
      </div>
    </div>
  </section>
</template>
