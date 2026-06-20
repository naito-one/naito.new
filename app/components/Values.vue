<template>
  <SectionHeader v-bind="sections[1]!" />
  <div class="with-bg values-bg relative -mt-16 flex py-24">
    <div class="flex min-h-screen w-full items-center justify-center px-4">
      <ul
        class="flex flex-col items-start justify-center gap-12 md:flex-row md:flex-wrap"
      >
        <li
          v-for="value in values"
          :key="value.slug"
          class="shadow-nt1-offwhite w-full overflow-hidden rounded-xl bg-white shadow-2xl sm:w-md"
          :class="value.parallax"
        >
          <div
            class="flex items-center gap-2 bg-linear-to-t from-[-20%] to-120% p-4"
            :class="value.bgClass"
          >
            <Icon :name="value.icon" class="size-6" />
            <h4 class="font-header text-xl">
              {{ $t(`allValues.${value.slug}.header`) }}
            </h4>
          </div>
          <p class="p-4 leading-relaxed">
            {{ $t(`allValues.${value.slug}.content`) }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { sections } from '~/sections'
import { values } from '~/values'
</script>
