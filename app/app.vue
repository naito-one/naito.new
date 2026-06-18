<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
const { t } = useI18n()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk && titleChunk !== 'En'
      ? `${titleChunk} | ${t('nuxtSiteConfig.name')}`
      : t('nuxtSiteConfig.name')
  },
})
</script>
