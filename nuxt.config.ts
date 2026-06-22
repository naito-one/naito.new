import tailwindcss from '@tailwindcss/vite'
import { defineOrganization } from 'nuxt-schema-org/schema'
import svgLoader from 'vite-svg-loader'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
  ],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
      svgLoader({
        svgo: false,
      }),
    ],
  },

  site: { url: 'https://naito.one', name: 'Naito One' },
  icon: {
    provider: 'none',
    clientBundle: {
      scan: { globInclude: ['**\/*.{vue,jsx,tsx,md,mdc,mdx,ts}'] },
    },
    customCollections: [],
    mode: 'svg',
  },

  fonts: {
    families: [
      {
        name: 'MomoTrustSans',
        provider: 'local',
        weights: [300, 400, 500, 600],
      },
      { name: 'MomoTrustDisplay', provider: 'local', weights: [400] },
    ],
  },

  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon-32x32.png',
          sizes: '32x32',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon-16x16.png',
          sizes: '16x16',
        },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
      meta: [{ name: 'apple-mobile-web-app-title', content: 'Naito One' }],
    },
  },

  schemaOrg: {
    identity: defineOrganization({
      '@type': 'OnlineBusiness',
      name: 'Naito One',
      logo: '/images/logo.png',
      email: 'hello@naito.one',

      // Additional Business Properties, if applicable
      slogan: 'Beautiful and Efficient websites',
      keywords: [
        'web development',
        'fullstack',
        'project management',
        'webapp',
        'service',
        'IoT',
        'sensors',
      ],

      foundingDate: '2019-07-12',

      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'sales',
          email: 'hello@naito.one',
        },
      ],
    }),
  },

  i18n: {
    baseUrl: 'https://naito.one',
    strategy: 'prefix_except_default',
    defaultLocale: 'fr',
    locales: [
      {
        name: 'English',
        code: 'en',
        language: 'en-US',
        file: 'en.ts',
      },
      {
        name: 'Français',
        code: 'fr',
        language: 'fr-CH',
        file: 'fr.ts',
      },
    ],
    detectBrowserLanguage: {
      useCookie: false,
    },
  },
})
