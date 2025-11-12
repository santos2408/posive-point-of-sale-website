<script setup lang="ts">
import type { Button } from "../types/button-types";

const props = defineProps<Button>();

const buttonClasses = computed(() => ({
  [`${props.style || "primary"}`]: true,
  // [`${props.size || "medium"}`]: true,
}));
</script>

<template>
  <a
    class="font-primary custom-transition flex w-max cursor-pointer items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium lg:px-6 lg:py-3 lg:text-base"
    :class="buttonClasses"
  >
    <slot></slot>
    {{ props.label }}
  </a>
</template>
