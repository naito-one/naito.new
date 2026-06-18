<script setup lang="ts">
/**
 * @credits @arashsheyda <https://github.com/arashsheyda>
 */

withDefaults(
  defineProps<{
    title?: string
    description?: string
    bg?: string
    icon?: string
    logo?: string
    image?: string
    username?: string
    socials?: { name: string; icon: string }[]
  }>(),
  {
    bg: 'linear-gradient(to bottom right, #171717, #54c0d3)',
    logo: '/favicon.svg',
    username: 'naito.one',
  },
)
</script>

<template>
  <div
    class="relative flex h-full w-full items-center justify-center bg-neutral-900 text-white"
    :style="{ backgroundImage: bg }"
  >
    <img
      v-if="image"
      class="absolute inset-0 h-full w-full object-cover opacity-15"
      :src="image"
    />
    <div class="flex flex-col items-center text-center">
      <h1
        class="flex gap-4 text-7xl font-bold"
        style="display: block; line-clamp: 2; text-overflow: ellipsis"
      >
        <Icon v-if="icon" :name="icon" />
        {{ title }}
      </h1>
      <p
        class="max-w-3xl text-2xl"
        style="display: block; line-clamp: 3; text-overflow: ellipsis"
      >
        {{ description }}
      </p>
    </div>

    <img
      v-if="logo"
      :src="logo"
      class="absolute bottom-0 left-0 p-5"
      style="height: 153px; width: 153px"
    />
    <div class="absolute right-5 bottom-5 flex gap-4">
      <div
        v-if="username"
        class="absolute right-8 bottom-12 text-2xl font-bold"
      >
        {{ username }}
      </div>
      <Icon
        v-for="social of socials"
        :key="social.name"
        :name="social.icon!"
        class="h-7 w-7"
      />
    </div>
  </div>
</template>
