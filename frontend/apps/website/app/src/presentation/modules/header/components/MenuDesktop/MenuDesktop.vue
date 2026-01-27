<script setup lang="ts">
import type { MenuItem } from "../../types/header";
const props = defineProps<{
  items: MenuItem[];
}>();
</script>

<template>
  <ul class="gap-3">
    <li v-for="menuItem in props.items" :key="menuItem.label" class="">
      <a :href="menuItem.link" class="hover:text-brand-primary-500 custom-transition text-brand-neutral-400 inline-block px-4 py-2.5 font-medium">
        {{ menuItem.label }}
      </a>
    </li>
  </ul>
</template>
