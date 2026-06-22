<script setup lang="ts">
defineProps<{
  title?: string
  description?: string
}>()
</script>

<template>
  <div
    class="text-nt1-offblack relative flex h-full w-full items-center justify-center bg-neutral-100"
  >
    <img
      class="absolute inset-0 h-full w-full object-cover opacity-30"
      src="/images/header-bg.jpg"
    />
    <div class="flex flex-col items-center text-center">
      <img
        src="/images/logo.svg"
        :alt="title"
        class="h-36 w-120 object-contain"
      />
      <p class="text-3xl">
        {{ description }}
      </p>
    </div>

    <div class="absolute right-12 bottom-12 text-2xl font-bold">naito.one</div>
  </div>
</template>
