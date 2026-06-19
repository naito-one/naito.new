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
    <div class="flex grow basis-0 flex-col-reverse gap-4 md:flex-col md:gap-0">
      <ul
        class="flex w-full snap-x snap-mandatory scrollbar-none overflow-x-auto"
        ref="slider"
      >
        <li
          v-for="(m, i) in media"
          :key="m"
          :id="`${slug}-${i + 1}`"
          class="flex w-full shrink-0 snap-start items-start justify-center scroll-smooth md:items-center"
        >
          <img :src="m" :alt="$t('showcaseMediaAlt', { name, n: i + 1 })" />
        </li>
      </ul>
      <div class="flex justify-center gap-4" v-if="media.length > 1">
        <button @click="previous()">
          <Icon
            class="size-10 shrink-0"
            name="material-symbols:arrow-left-rounded"
          />
        </button>
        <ul class="flex items-center gap-5">
          <li v-for="(m, i) in media" :key="m">
            <a
              :href="`#${slug}-${i + 1}`"
              class="block size-2.5 rounded-full transition-colors"
              :class="index === i ? 'bg-stone-800' : 'bg-stone-400'"
              @click="goTo($event, i)"
            ></a>
          </li>
        </ul>
        <button @click="next()">
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

const router = useRouter()

const props = defineProps<ShowcaseParams>()

const slider = useTemplateRef('slider')

const ratio = ref(0)
const numItems = computed(() => slider.value?.childElementCount ?? 0)
const index = ref(0)

function goTo(event: MouseEvent, i: number) {
  event.preventDefault()
  index.value = i
  scrollToCurrent()
}

function next() {
  index.value = index.value + 1
  if (index.value === numItems.value) {
    index.value = 0
  }
  scrollToCurrent()
}

function previous() {
  index.value = index.value - 1
  if (index.value === -1) {
    index.value = numItems.value - 1
  }
  scrollToCurrent()
}

function scrollToCurrent() {
  if (!slider.value) {
    return
  }
  slider.value.scrollTo({
    left: index.value * ratio.value,
    behavior: 'smooth',
  })
  saveInHash()
}

function saveInHash() {
  router.replace({ hash: `#${props.slug}-${index.value + 1}` })
}

const onresize = () => {
  ratio.value = (slider.value?.scrollWidth ?? 0) / numItems.value
}

onMounted(() => {
  window.addEventListener('resize', onresize)
  onresize()

  slider.value?.addEventListener(
    'touchend',
    () => {
      setTimeout(() => {
        index.value = Math.round((slider.value?.scrollLeft ?? 0) / ratio.value)
        saveInHash()
      }, 500)
    },
    {
      passive: true,
    },
  )
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onresize)
})
</script>
