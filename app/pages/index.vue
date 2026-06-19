<template>
  <Landing />
  <Creations />
  <Values />
  <Contact />
</template>
<script setup lang="ts">
defineOgImageComponent('NaitoOne', {
  title: $t('nuxtSiteConfig.name'),
  image: '/images/logo.png',
})
</script>
