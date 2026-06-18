<template>
  <Landing />
  <Creations />
</template>
<script setup lang="ts">
defineOgImageComponent('NaitoOne', {
  title: $t('nuxtSiteConfig.name'),
  image: '/images/logo.png',
})
</script>
