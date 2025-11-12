<script setup lang="ts">
import type { States } from "../types/header";
import { MENU_ITEMS } from "../constants/menu-items";
import MenuDesktop from "../components/MenuDesktop/MenuDesktop.vue";
import MenuMobile from "@/presentation/modules/header/components/MenuMobile/MenuMobile.vue";

// variables
const states = reactive<States>({ visible: false });

// composables
const { width } = useWindowSize();
const { y } = useWindowScroll();

// computed properties
const headerStyles = computed(() => {
  const scrollY = y.value;
  const limit = scrollY > 100;
  const opacity = `${limit ? 100 : scrollY}%`;

  return {
    backgroundColor: `rgba(255,255,255,${opacity})`,
    boxShadow: limit ? "0px 5px 5px rgba(0,0,0,0.06)" : "",
  };
});

const navStyles = computed(() => {
  const scrollY = y.value;
  const activeScroll = scrollY > 100;
  const onDesktop = width.value > 1024;

  return {
    paddingTop: onDesktop && activeScroll ? "16px" : "",
    paddingBottom: onDesktop && activeScroll ? "16px" : "",
  };
});

// methods
const handleVisibility = () => {
  const body = document.body;

  if (states.visible) {
    states.visible = false;
    body.classList.remove("overflow-hidden");
    return;
  }

  states.visible = true;
  body.classList.add("overflow-hidden");
};

watch(width, () => {
  if (import.meta.client) {
    const body = document.body;
    states.visible = false;
    body.classList.remove("overflow-hidden");
  }
});
</script>

<template>
  <header ref="header" class="fixed z-10 w-full bg-white transition" :style="headerStyles">
    <div class="p-4 transition-all duration-300 sm:container xl:py-7" :style="navStyles">
      <div class="flex flex-wrap items-center justify-between">
        <a href="#" aria-label="Posive logo">
          <ClientOnly>
            <img src="/images/global/posive-logo.svg" data-inject-svg />
          </ClientOnly>
        </a>

        <!--============= MENU DESKTOP =============-->
        <MenuDesktop class="hidden xl:flex xl:justify-self-end" :items="MENU_ITEMS" />

        <div class="flex gap-4">
          <div class="flex items-center gap-4 xl:hidden">
            <button
              type="button"
              aria-label="Close menu"
              class="custom-transition text-brand-neutral-900 block cursor-pointer rounded-md py-1.5 xl:hidden"
              @click="handleVisibility"
            >
              <LucideMenu :size="32" />
            </button>
          </div>
        </div>
      </div>

      <Teleport to="body">
        <Transition name="menu-mobile-fade">
          <MenuMobile v-show="states.visible" ref="menu" :items="MENU_ITEMS" :visible="states.visible" @close-menu="handleVisibility" />
        </Transition>
      </Teleport>
    </div>
  </header>
</template>

<style scoped>
.menu-mobile-fade-enter-active,
.menu-mobile-fade-leave-active {
  /* opacity: 1; */
  transition: transform 0.2s ease;
}

.menu-mobile-fade-enter-from,
.menu-mobile-fade-leave-to {
  transform: translateX(-100%);
  /* opacity: 0; */
}
</style>
