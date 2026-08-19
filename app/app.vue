<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
import '~/scrollEndPolyfill'
import { findBrowserLocale } from '#i18n-kit/browser'
import { normalizedLocales } from '#build/i18n-options.mjs'
import type { Locale } from 'vue-i18n'

const { t, locale, setLocale } = useI18n()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk && titleChunk !== 'En'
      ? `${titleChunk} | ${t('nuxtSiteConfig.name')}`
      : t('nuxtSiteConfig.name')
  },
})

onMounted(() => {
  const wantedLocale = findBrowserLocale(normalizedLocales, navigator.languages) as Locale

  if (locale.value !== wantedLocale) {
    setLocale(wantedLocale)
  }
})
</script>
