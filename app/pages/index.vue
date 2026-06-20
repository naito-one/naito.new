<template>
  <Landing />
  <Creations />
  <Values />
  <Contact />
</template>
<script setup lang="ts">
const router = useRouter()

defineOgImageComponent('NaitoOne', {
  title: $t('nuxtSiteConfig.name'),
  image: '/images/logo.png',
})

onMounted(() => {
  // scroll to anchors on load if router isn't going to
  if (router.currentRoute.value.hash) {
    if (history.state?.canScroll === false) {
      document
        .querySelector(router.currentRoute.value.hash)
        ?.scrollIntoView({ behavior: 'instant' })
    }
  }
})
</script>
