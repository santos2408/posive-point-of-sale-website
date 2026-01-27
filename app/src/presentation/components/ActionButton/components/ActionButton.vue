<script setup lang="ts">
import type { Button } from "../types/button-types";

const props = withDefaults(defineProps<Button>(), {
  as: "button",
  style: "primary",
  icon: undefined,
  iconColor: undefined,
  iconSize: undefined,
});

const buttonClasses = computed(() => ({
  [`${props.style || "primary"}`]: true,
  // [`${props.size || "medium"}`]: true,
}));
</script>

<template>
  <component :is="props.as" class="" :class="buttonClasses">
    {{ props.label }}
    <component :is="props.icon" :color="props.iconColor" :size="props.iconSize" />
  </component>
</template>
