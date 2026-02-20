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
  <section id="features" class="3xl:py-28 container py-20">
    <div class="mb-12 space-y-4 text-center xl:mb-16">
      <h2 class="mx-auto max-w-155 text-3xl leading-snug font-bold lg:text-4xl xl:max-w-215 xl:text-6xl">
        The POS system that fits your businesess
      </h2>

      <p class="mx-auto max-w-115 font-medium xl:max-w-215">
        Say goodbye to complexity and hello to efficiency with our user-friendly Point of Sale dashboard.
      </p>
    </div>

    <div class="grid gap-6 lg:grid-cols-2">
      <div
        v-for="item in items"
        :key="item.title"
        class="group relative flex min-h-125 flex-col items-center justify-end overflow-hidden rounded-2xl p-6 xl:p-8"
      >
        <img
          :src="`/images/app-features/${item.image}`"
          alt=""
          class="absolute top-2/4 left-2/4 -z-10 h-full w-full -translate-x-2/4 -translate-y-2/4 object-cover object-center transition-all duration-300 group-hover:scale-[1.05]"
        />

        <div>
          <h3 class="mb-2 text-xl font-bold text-white 2xl:text-2xl">{{ item.title }}</h3>
          <p class="text-sm leading-relaxed text-white 2xl:text-base">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
