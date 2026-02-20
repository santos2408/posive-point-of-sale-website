<script setup lang="ts">
const items = [
  {
    title: "Platform for a Single Store",
    description:
      "A single store POS system is typically simpler, focusing on efficiency and ease of use. It is designed to streamline daily operations.",
    image: "feature-01.png",
  },
  {
    title: "Platform for a Multi Store",
    description:
      "POS systems for multi-store operations must handle more complex tasks and provide centralized control over multiple locations.",
    image: "feature-02.png",
  },
];
</script>

<template>
  <section id="features " class="container py-20">
    <div class="mb-12 space-y-4 text-center xl:mb-16">
      <h2 class="mx-auto max-w-[620px] text-3xl leading-snug font-bold lg:text-4xl xl:max-w-[860px] xl:text-6xl">
        The POS system that fits your businesess
      </h2>

      <p class="mx-auto max-w-[460px] font-medium xl:max-w-[860px]">
        Say goodbye to complexity and hello to efficiency with our user-friendly Point of Sale dashboard.
      </p>
    </div>

    <div class="grid gap-4 lg:grid-cols-2">
      <div
        v-for="item in items"
        :key="item.title"
        class="flex min-h-125 flex-col items-center justify-end overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat p-6 xl:p-8"
        :class="`bg-[url(/images/app-features/${item.image})]`"
      >
        <div>
          <h3 class="mb-2 text-xl font-bold text-white 2xl:text-2xl">{{ item.title }}</h3>
          <p class="text-sm leading-relaxed text-white 2xl:text-base">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
