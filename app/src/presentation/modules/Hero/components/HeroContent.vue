<script setup lang="ts">
import ActionButton from "@/presentation/components/ActionButton/components/ActionButton.vue";
</script>

<template>
  <div class="container pt-12 pb-6 text-center 2xl:pt-16">
    <p class="text-brand-primary-500 mb-2.5 text-sm font-bold uppercase xl:text-lg">#1 best All-in-one POS platform</p>

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
</template>
