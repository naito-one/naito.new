<script setup lang="ts"></script>
<template>
  <Body
    class="bg-nt1-offwhite font-content h-full overflow-x-hidden overflow-y-auto text-stone-800 perspective-[1px] transform-3d"
  >
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
<style>
html {
  overflow: hidden;
  height: 100%;
}

body * {
  transform-style: inherit;
}
</style>
