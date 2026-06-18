<template>
  <div class="with-bg relative flex">
    <div
      class="with-overlay flex min-h-screen w-full flex-col items-center pb-20 sm:pb-32 lg:justify-center lg:pb-20"
    >
      <img
        :alt="$t('nuxtSiteConfig.name')"
        src="/images/logo.svg"
        class="mx-8 mt-8 max-w-lg select-none"
      />
      <h1
        class="mx-8 mt-4 text-center text-lg font-light sm:text-xl lg:text-2xl"
      >
        {{ $t('nuxtSiteConfig.description') }}
      </h1>

      <div
        class="flex flex-col items-center lg:mx-8 lg:mb-[4vh] lg:flex-row 2xl:gap-8"
      >
        <!-- Hero image-->
        <div class="parallax-10 relative mx-8 inline-block">
          <img
            :src="Yhrel"
            alt="Yhrel"
            class="w-full max-w-lg select-none"
          />
          <div
            class="absolute top-1/2 left-0 flex h-1/2 w-full flex-col items-center justify-center text-center text-white"
          >
            <p class="font-header">Tim Yhrel Winkelmann</p>
            <p class="font-medium">{{ $t('senior') }}</p>
            <p class="font-medium">{{ $t('ceo') }}</p>
          </div>
        </div>

        <div
          class="mx-8 flex flex-col gap-4 sm:gap-8 lg:mx-0 lg:flex-col-reverse"
        >
          <div
            class="flex flex-wrap justify-center gap-4 sm:justify-between lg:justify-start"
          >
            <a
              v-for="link in sections"
              :key="link.long"
              :href="`#${link.long}`"
              class="bg-nt1-violet-dark flex items-center rounded-xl px-6 py-3 font-medium text-white shadow-lg transition duration-200 hover:shadow-xl hover:brightness-110 active:shadow-lg active:brightness-95"
            >
              <Icon class="mr-2 shrink-0" :name="link.icon" />
              {{ $t(link.short) }}
            </a>
          </div>
          <div class="relative">
            <div
              class="auto-slide delayed-animation absolute lg:static lg:animate-none!"
            >
              <h2 class="mb-2 text-2xl lg:text-3xl">{{ $t('beautiful') }}</h2>
              <p class="mb-4 font-light">
                {{ $t('whyBeautiful1') }} <br />{{ $t('whyBeautiful2') }}
              </p>
            </div>
            <div class="auto-slide lg:animate-none!">
              <h2 class="mb-2 text-2xl lg:text-3xl">{{ $t('efficient') }}</h2>
              <p class="font-light">
                {{ $t('whyEfficient1') }} <br />{{ $t('whyEfficient2') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Yhrel from '~/assets/images/yhrel.webp'
import { sections } from '~/sections'
</script>
<style>
@reference "~/assets/css/main.css";
.with-bg::after {
  display: block;
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: url(/images/header-bg.webp);
  background-size: cover;
  background-position: center center;
  transform: translateZ(-0.5px) scale(1.6);
}

.with-overlay::after {
  display: block;
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  @apply bg-neutral-100/70;
  transform: translateZ(-0.5px) scale(1.6);
}
</style>
