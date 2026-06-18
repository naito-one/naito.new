<template>
  <section :class="`flex gap-16 ${reverse ? 'flex-row-reverse' : ''}`">
    <div class="grow basis-0">
      <component :is="content[$i18n.locale]"></component>
      <a
        :href="link"
        target="__blank"
        referrerpolicy="no-referrer"
        :class="`inline-flex items-center rounded-xl px-6 py-3 font-medium shadow-lg transition duration-200 hover:shadow-xl hover:brightness-110 active:shadow-lg active:brightness-95 ${dark ? 'text-white' : ''}`"
        :style="{ backgroundColor: accentColor }"
      >
        <Icon
          class="mr-2 shrink-0"
          name="material-symbols:open-in-new-rounded"
        />
        {{ $t('visitWebsite') }}
      </a>
    </div>
    <div class="grow basis-0">
      <ul>
        <li v-for="(m, i) in media" :key="m" :id="`${slug}-${i}`">
          <img :src="m" alt="Yipi" />
        </li>
      </ul>
      <div class="flex gap-4">
        <button>
          <Icon
            class="size-10 shrink-0"
            name="material-symbols:arrow-left-rounded"
          />
        </button>
        <ul class="flex gap-5">
          <li v-for="(m, i) in media" :key="m">
            <a
              :href="`#${slug}-${i}`"
              class="size-2.5 rounded-full bg-stone-800"
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
