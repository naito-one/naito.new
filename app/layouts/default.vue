<script setup lang="ts"></script>
<template>
  <Body class="bg-nt1-offwhite font-content text-stone-800">
    <slot />
  </Body>
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
