<script setup lang="ts">
import IconPlay from "@/presentation/components/Icons/IconPlay.vue";

const items = [
  {
    title: "POS Software For all platform",
    description:
      "Turn your mobile device into a point of sale and download the Shopify POS app onto any smartphone or tablet.",
    icon: "lucide:monitor-smartphone",
  },
  {
    title: "Customizable terminal",
    description: "Personalize the home screen to keep popular products and important discounts at your fingertips.",
    icon: "lucide:credit-card",
  },
  {
    title: "Plug-and-play apps",
    description: "Add functionality as your needs change, from loyalty apps to logistics and time tracking.",
    icon: "lucide:settings",
  },
];
</script>

<template>
  <section class="container">
    <h2
      class="mx-auto mb-12 max-w-155 text-center text-3xl leading-snug font-bold lg:text-4xl xl:mb-16 xl:max-w-215 xl:text-6xl"
    >
      The inner workings of our POS
    </h2>

    <div class="grid gap-8 xl:grid-cols-2 2xl:gap-16">
      <div class="relative w-full overflow-hidden rounded-xl">
        <img
          src="/images/how-it-works/video-thumbnail.png"
          alt=""
          class="h-full min-h-[480px] w-full object-cover object-center"
        />
        <button
          type="button"
          class="custom-transition absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 cursor-pointer rounded-full bg-black/20 p-6 hover:scale-[1.1] hover:bg-black/30"
        >
          <IconPlay />
        </button>
      </div>

      <ul class="grid gap-12 md:grid-cols-2 xl:grid-cols-1 xl:gap-3">
        <li
          v-for="item in items"
          :key="item.title"
          class="gap-4 max-xl:max-w-[420px] xl:p-3 2xl:flex 2xl:items-center 2xl:gap-10"
        >
          <div
            class="how-it-works-inset-shadow border-brand-primary-500 inline-flex items-center justify-center rounded-full border-2 p-3.5 max-2xl:mb-5 2xl:p-6"
          >
            <Icon :name="item.icon" class="text-brand-primary-500 text-2xl 2xl:text-4xl" />
          </div>

          <div class="space-y-3">
            <h3 class="text-lg font-bold xl:text-2xl">{{ item.title }}</h3>
            <p class="font-medium">{{ item.description }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
