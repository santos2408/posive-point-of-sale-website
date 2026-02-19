<script setup lang="ts">
import type { Button } from "../types/button-types";

const props = withDefaults(defineProps<Button>(), {
  as: "button",
  style: "action-button--primary",
  icon: "",
  iconColor: undefined,
  iconSize: undefined,
  iconPosition: "left",
});

const buttonClasses = computed(() => ({
  "action-button": true,
  [props.style]: true,
  // [`${props.size || "medium"}`]: true,
}));
</script>

<template>
  <component :is="props.as" :class="[buttonClasses, props.icon ? 'py-2.75' : '']">
    <div class="flex items-center justify-center gap-1">
      <Icon v-if="props.icon" :name="props.icon" class="mt-0.5 text-2xl" />
      {{ props.label }}
    </div>
  </component>
</template>
