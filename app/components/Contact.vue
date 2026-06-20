<template>
  <SectionHeader v-bind="sections[2]!" />
  <div class="bg-nt1-offwhite -mt-16 pb-2 sm:pb-4 md:pb-[10vh] dark:bg-black">
    <div
      class="dark:bg-nt1-offblack mx-2 flex flex-col items-center rounded-b-2xl bg-white px-4 pt-20 sm:mx-4 sm:px-8 md:mx-auto md:w-2xl lg:w-4xl xl:w-5xl dark:text-white"
    >
      <h4 class="mb-4 text-center text-3xl">{{ $t('contactTagLine') }}</h4>

      <div class="text-center leading-relaxed font-light">
        <template v-if="$i18n.locale === 'en'">
          <p>
            We can set up an online or in-person meeting shortly after, to
            discuss your project further.<br />
            We will gladly provide you with a non-binding, comprehensive time &
            cost estimate, free of charge.<br />
            We look forward to working with you, from simple landing page to
            complexe web application.
          </p>
        </template>
        <template v-else-if="$i18n.locale === 'fr'">
          <p>
            Nous pourrons ensuite rapidement planifier un meeting en ligne ou en
            personne, pour discuter plus en détail de votre projet.<br />
            Nous serions ravis de produire pour vous une estimation claire du
            temps & des coûts à prévoir, sans engagement et gratuitement.<br />
            Nous nous réjouissons de travailler avec vous, de la simple landing
            page à l'application web complexe.
          </p>
        </template>
      </div>
      <div class="relative inline-block">
        <img src="/images/mail.webp" alt="Mail" class="select-none" />

        <a
          href="mailto:hello@naito.one"
          class="absolute top-0 left-0 flex h-full w-full items-center justify-center text-2xl font-semibold text-white"
          ><span>hello@naito.one</span></a
        >
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { sections } from '~/sections'
</script>
