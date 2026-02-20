<template>
  <div class="relative">
    <picture>
      <source media="(min-width: 1260px)" srcset="/images/hero/hero-background-1260w.png" />
      <source media="(min-width: 1180px)" srcset="/images/hero/hero-background-1180w.png" />
      <source media="(min-width: 1024px)" srcset="/images/hero/hero-background-tablet.png" />

      <img
        src="/images/hero/hero-background-mobile.png"
        alt=""
        aria-hidden="true"
        class="w-full object-cover object-center md:max-h-145 xl:max-h-200"
      />
    </picture>

    <div class="absolute -top-6 left-0 flex h-full w-full items-center justify-center md:top-0">
      <img
        srcset="/images/hero/hero-ipad-device-350w.png 350w, /images/hero/hero-ipad-device.png 864w"
        sizes="(max-width:480px) 350px, (max-width:768px) 864px"
        src="/images/hero/hero-ipad-device.png"
        alt="Painel de vendas da aplicação Posive"
        class="w-full max-w-164 px-6 lg:px-0 xl:max-w-216"
      />
    </div>
  </div>
</template>
