<template>
  <a
    :id="long"
    :href="`#${long}`"
    class="relative z-10 -mt-16 flex h-50 w-full -scroll-mt-16 items-center justify-center gap-4 bg-[url(/images/mid.webp)] bg-size-[auto_100%] bg-center text-white md:h-60"
  >
    <Icon class="shrink-0 text-3xl md:text-[2.5rem]" :name="icon" />
    <h3 class="text-xl font-semibold md:text-3xl">
      {{ $t(long) }}
    </h3>
  </a>
</template>
<script setup lang="ts">
import type { Section } from '~/sections'

defineProps<Section>()
</script>
