<script setup lang="ts"></script>
<template>
  <Body
    class="bg-nt1-offwhite font-content text-nt1-offblack dark:bg-nt1-offblack"
  >
    <Switcher />
    <main>
      <slot />
    </main>
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
