<template>
  <SectionHeader v-bind="sections[2]!" />
  <div class="bg-nt1-offwhite -mt-16">
    <div
      class="mx-2 min-h-screen bg-white px-4 py-20 sm:mx-4 sm:px-8 md:px-16 md:py-32 lg:mx-16"
    >
      <ul class="flex flex-col gap-16"></ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { sections } from '~/sections'
</script>
