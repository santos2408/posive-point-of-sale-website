<script setup lang="ts">
import HeaderContainer from "@/presentation/modules/header/containers/HeaderContainer.vue";
import HeroContainer from "@/presentation/modules/Hero/containers/HeroContainer.vue";
import AppFeatures from "@/presentation/modules/AppFeatures/containers/AppFeatures.vue";
</script>

<template>
  <div class="w-full">
    <HeaderContainer />
    <main>
      <HeroContainer />
      <AppFeatures />
    </main>
  </div>
</template>
