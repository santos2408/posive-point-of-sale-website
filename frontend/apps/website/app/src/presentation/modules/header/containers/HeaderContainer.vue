<script setup lang="ts">
import type { States } from "../types/header";
import { MENU_ITEMS } from "../constants/menu-items";
import MenuDesktop from "../components/MenuDesktop/MenuDesktop.vue";
import MenuMobile from "@/presentation/modules/header/components/MenuMobile/MenuMobile.vue";
import ActionButton from "@/presentation/components/ActionButton/components/ActionButton.vue";

// states
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
  <header ref="header" class="border-brand-neutral-200 fixed z-10 w-full border-b bg-white" :style="headerStyles">
    <div class="container py-5 transition-all 2xl:py-6" :style="navStyles">
      <div class="flex flex-wrap items-center justify-between">
        <div class="flex justify-between 2xl:w-full">
          <div class="flex items-center gap-14">
            <a href="#" aria-label="Posive logo">
              <ClientOnly>
                <img src="/images/global/posive-logo.svg" data-inject-svg class="h-7 w-auto 2xl:h-9" />
              </ClientOnly>
            </a>

            <!--============= MENU DESKTOP =============-->
            <MenuDesktop class="hidden 2xl:flex 2xl:justify-self-end" :items="MENU_ITEMS" />
          </div>

          <div class="space-x-3">
            <ActionButton label="Login" :style="'action-button--outlined'" class="w-36 max-2xl:hidden" />
            <ActionButton label="Get Started" class="w-36 max-2xl:hidden" />
          </div>
        </div>

        <div class="flex gap-4 2xl:hidden">
          <div class="flex items-center gap-4">
            <button
              type="button"
              aria-label="Close menu"
              class="custom-transition text-brand-neutral-500 block cursor-pointer rounded-md py-2 2xl:hidden"
              @click="handleVisibility"
            >
              <LucideMenu class="size-6" />
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
