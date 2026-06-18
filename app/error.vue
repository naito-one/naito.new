<template>
  <NuxtLayout>
    {{ error?.statusCode }}
    {{ error?.message }}
    <button @click="handleError">Oupsy</button>
  </NuxtLayout>
</template>
<script setup lang="ts">
import type { NuxtError } from '#app'

const { t } = useI18n()

const props = defineProps({
  error: Object as () => NuxtError,
})

const handleError = () => clearError({ redirect: '/' })

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk && titleChunk !== 'En'
      ? `${titleChunk} | ${t('nuxtSiteConfig.name')}`
      : t('nuxtSiteConfig.name')
  },
})
</script>
