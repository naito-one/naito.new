<template>
  <SectionHeader v-bind="sections[0]!" />
  <div class="bg-nt1-offwhite -mt-16 dark:bg-black">
    <div
      class="dark:bg-nt1-offblack mx-2 min-h-screen bg-white px-4 py-24 sm:mx-4 sm:px-8 md:px-16 md:py-32 lg:mx-16 dark:text-white"
    >
      <ul class="flex flex-col gap-16">
        <li v-for="showcase in showcases" :key="showcase.slug">
          <Showcase v-bind="showcase" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { sections } from '~/sections'
import { showcases } from '~/showcases'
</script>
