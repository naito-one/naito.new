<template>
  <section
    :class="`flex flex-col items-center gap-16 xl:flex-row ${reverse ? 'xl:flex-row-reverse' : ''}`"
  >
    <div class="grow basis-0">
      <component :is="content[$i18n.locale]">
        <a
          :href="link"
          target="__blank"
          referrerpolicy="no-referrer"
          :class="`hover:shadow-xl-wide right-0 bottom-0 mt-8 inline-flex items-center rounded-xl px-6 py-3 font-medium shadow-lg transition duration-200 active:shadow-lg md:absolute md:mt-0 ${dark ? 'text-white hover:brightness-110 active:brightness-95' : 'hover:brightness-105 active:brightness-98'}`"
          :style="{ backgroundColor: accentColor }"
        >
          <Icon
            class="mr-2 shrink-0"
            name="material-symbols:open-in-new-rounded"
          />
          {{ $t('visitWebsite') }}
        </a></component
      >
    </div>
    <div class="grow basis-0">
      <ul>
        <li v-for="(m, i) in media" :key="m" :id="`${slug}-${i + 1}`">
          <img :src="m" :alt="$t('showcaseMediaAlt', { name, n: i + 1 })" />
        </li>
      </ul>
      <div class="flex justify-center gap-4" v-if="media.length > 1">
        <button>
          <Icon
            class="size-10 shrink-0"
            name="material-symbols:arrow-left-rounded"
          />
        </button>
        <ul class="flex items-center gap-5">
          <li v-for="(m, i) in media" :key="m">
            <a
              :href="`#${slug}-${i + 1}`"
              class="block size-2.5 rounded-full bg-stone-800"
            ></a>
          </li>
        </ul>
        <button>
          <Icon
            class="size-10 shrink-0"
            name="material-symbols:arrow-right-rounded"
          />
        </button>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import type { ShowcaseParams } from '~/showcases'

defineProps<ShowcaseParams>()
</script>
