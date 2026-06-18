<template>
  <div
    :id="sections[0]!.long"
    class="relative z-10 -mt-16 flex h-60 w-full items-center justify-center gap-4 bg-[url(/images/mid.webp)] bg-size-[auto_100%] bg-center text-white md:h-72"
  >
    <Icon
      class="shrink-0 text-3xl md:text-[2.5rem]"
      :name="sections[0]!.icon"
    />
    <h3 class="text-xl font-semibold md:text-3xl">
      {{ $t(sections[0]!.long) }}
    </h3>
  </div>
  <div class="bg-nt1-offwhite -mt-16">
    <div class="mx-16 min-h-screen bg-white px-16 py-32">
      <ul>
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
