<template>
  <SectionHeader v-bind="sections[1]!" />
  <div class="with-bg values-bg relative flex">
    <div
      class="flex min-h-screen w-full flex-col items-center pb-20 sm:pb-32 lg:justify-center lg:pb-20"
    ></div>
  </div>
</template>
<script setup lang="ts">
import { sections } from '~/sections'
</script>
