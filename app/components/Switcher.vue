<template>
  <input type="checkbox" name="dark-mode" id="dark-mode" class="hidden" />
  <div
    class="fixed top-[90vh] right-0 z-30 flex gap-4 p-5 select-none lg:top-0"
  >
    <label
      for="dark-mode"
      class="bg-nt1-offblack dark:text-nt1-offblack dark:shadow-nt1-offwhite/10 flex items-center justify-center rounded-full text-white shadow-lg transition duration-200 hover:brightness-110 active:shadow-lg active:brightness-95 dark:bg-white"
    >
      <div :title="$t('dark')">
        <Icon
          class="m-4 size-4 dark:hidden"
          name="material-symbols:dark-mode-outline-rounded"
        />
      </div>
      <div :title="$t('light')">
        <Icon
          class="m-4 hidden size-4 dark:block"
          name="material-symbols:light-mode-outline-rounded"
        />
      </div>
    </label>
    <NuxtLink
      v-for="l in availableLocales"
      :key="l.code"
      :to="l.code === 'en' ? '/en' : '/'"
      :title="
        l.code === 'fr'
          ? `Afficher le site en ${l.name}`
          : `Display Website in ${l.name}`
      "
      class="dark:bg-nt1-offblack dark:shadow-nt1-offwhite/10 flex w-18 justify-center rounded-full bg-white px-6 py-4 leading-none font-medium shadow-lg transition duration-200 hover:brightness-110 active:shadow-lg active:brightness-95 dark:text-white"
    >
      <span class="uppercase">{{ l.code }}</span>
    </NuxtLink>
  </div>
</template>
<script setup lang="ts">
const { locale, locales } = useI18n()

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value)
})
</script>
