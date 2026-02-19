<script setup lang="ts">
import type { MenuItem } from "../../types/header";
import { Socials } from "@/presentation/components/types/enums";
import IconSocial from "@/presentation/components/Icons/IconSocial.vue";

// props and emits
const props = defineProps<{
  items: MenuItem[];
  visible: boolean;
}>();

const emit = defineEmits(["close-menu"]);

// variables
const menu = useTemplateRef("menu");

// methods
onClickOutside(menu, () => {
  if (!props.visible) return;
  emit("close-menu");
});
</script>

<template>
  <div class="menu-overlay fixed top-0 left-0 z-50 w-full">
    <div ref="menu" class="bg-brand-neutral-900 z-50 h-screen w-4/5 overflow-y-auto px-4 py-8">
      <div class="mb-10 flex items-center justify-between">
        <a href="/">
          <ClientOnly>
            <img src="/images/global/posive-white-logo.svg" data-inject-svg class="max-w-30" />
          </ClientOnly>
        </a>
        <button type="button" aria-label="Close menu" class="cursor-pointer" @click="() => emit('close-menu')">
          <Icon name="lucide:x" class="text-2xl text-white" />
        </button>
      </div>

      <ul class="mb-5 text-sm font-medium text-white">
        <li
          v-for="(menuItem, idx) in props.items"
          :key="idx"
          :class="[
            'border-t',
            'py-1',
            'border-white/10',
            'border-opacity-10',
            idx === props.items.length - 1 ? 'border-b' : undefined,
          ]"
        >
          <NuxtLink
            :to="menuItem.link"
            class="hover:text-brand-primary-500 block cursor-pointer py-3"
            @click="emit('close-menu')"
          >
            {{ menuItem.label }}
          </NuxtLink>
        </li>
      </ul>

      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-2 text-sm text-white">
          <div class="bg-brand-blue-100 flex h-7 w-7 items-center justify-center rounded-full">
            <Icon name="lucide:mail" class="mt-0.5 text-lg text-white" />
          </div>
          <p>email@example.com</p>
        </div>

        <div class="mb-3 flex items-center gap-2 text-sm text-white">
          <span class="bg-brand-blue-100 flex h-7 w-7 items-center justify-center rounded-full">
            <Icon name="lucide:phone" class="mt-0.5 text-lg text-white" />
          </span>
          <span>+1 (231) 102 345</span>
        </div>

        <div class="flex flex-wrap gap-4">
          <a href="#">
            <IconSocial :icon="Socials.FACEBOOK" class="custom-transition size-6 fill-white/70 hover:fill-white" />
          </a>

          <a href="#">
            <IconSocial :icon="Socials.INSTAGRAM" class="custom-transition size-6 fill-white/70 hover:fill-white" />
          </a>

          <a href="#">
            <IconSocial :icon="Socials.LINKEDIN" class="custom-transition size-6 fill-white/70 hover:fill-white" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.menu-overlay:after {
  content: "";
  display: block;
  width: 20%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
