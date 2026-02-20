<template>
  <div class="relative">
    <picture>
      <source media="(min-width: 1260px)" srcset="/images/hero/optimized/hero-background-1260w.avif" />
      <source media="(min-width: 1180px)" srcset="/images/hero/optimized/hero-background-1180w.avif" />
      <source media="(min-width: 1024px)" srcset="/images/hero/optimized/hero-background-tablet.avif" />

      <img
        src="/images/hero/optimized/hero-background-mobile.avif"
        alt=""
        aria-hidden="true"
        class="w-full object-cover object-center md:max-h-145 xl:max-h-200"
      />
    </picture>

    <div class="absolute -top-6 left-0 flex h-full w-full items-center justify-center md:top-0">
      <img
        srcset="
          /images/hero/optimized/hero-ipad-device-350w.avif 350w,
          /images/hero/optimized/hero-ipad-device.avif      864w
        "
        sizes="(max-width:480px) 350px, (max-width:768px) 864px"
        src="/images/hero/optimized/hero-ipad-device.avif"
        alt="Painel de vendas da aplicação Posive"
        class="w-full max-w-164 px-6 lg:px-0 xl:max-w-216"
      />
    </div>
  </div>
</template>
