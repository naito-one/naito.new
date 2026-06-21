import {
  ContentBeaEn,
  ContentBeaFr,
  ContentCxEn,
  ContentCxFr,
  ContentMedisEn,
  ContentMedisFr,
  ContentMetersEn,
  ContentMetersFr,
  ContentMrEn,
  ContentMrFr,
  ContentViskarEn,
  ContentViskarFr,
} from '#components'
import type { Component } from 'vue'
import type { Locale } from 'vue-i18n'
import { techs, type Tech } from './technologies'

export interface ShowcaseParams {
  slug: string
  name: string
  content: { [x in Locale]: Component }
  techs: Tech[]
  media: string[]
  link: string
  isContact?: boolean
  accentColor: string
  dark: boolean
  reverse: boolean
}

let count = 0
const imgRoot = '/images/showcases'

export const showcases: ShowcaseParams[] = [
  {
    slug: 'viskar',
    name: 'Visual KARSYS',
    content: {
      en: ContentViskarEn,
      fr: ContentViskarFr,
    },
    techs: [
      techs.angular,
      techs.tailwind,
      techs.ts,
      techs.three,
      techs.spring,
      techs.postgre,
      techs.jooq,
      techs.flask,
      techs.celery,
      techs.redis,
      techs.cgal,
      techs.docker,
      techs.grafana,
      techs.jenkins,
    ],
    media: [
      `${imgRoot}/viskar-01.webp`,
      `${imgRoot}/viskar-02.webp`,
      `${imgRoot}/viskar-03.webp`,
      `${imgRoot}/viskar-04.webp`,
      `${imgRoot}/viskar-05.webp`,
      `${imgRoot}/viskar-06.webp`,
    ],
    link: 'https://visualkarsys.com',
    accentColor: '#F8E71C',
    dark: false,
    reverse: ++count % 2 === 0,
  },
  {
    slug: 'meters',
    name: 'Meters',
    content: {
      en: ContentMetersEn,
      fr: ContentMetersFr,
    },
    techs: [
      techs.nuxt,
      techs.vue,
      techs.tailwind,
      techs.laravel,
      techs.maria,
      techs.balena,
      techs.node,
      techs.sqlite,
      techs.docker,
    ],
    media: [
      `${imgRoot}/meters-01.webp`,
      `${imgRoot}/meters-02.webp`,
      `${imgRoot}/meters-03.webp`,
      `${imgRoot}/meters-04.webp`,
      `${imgRoot}/meters-05.webp`,
      `${imgRoot}/meters-06.webp`,
    ],
    link: 'mailto:hello@naito.one',
    isContact: true,
    accentColor: '#3c6285',
    dark: true,
    reverse: ++count % 2 === 0,
  },
  {
    slug: 'medis',
    name: 'EstheMedis',
    content: {
      en: ContentMedisEn,
      fr: ContentMedisFr,
    },
    techs: [techs.nuxt, techs.vue, techs.tailwind, techs.ts, techs.pages],
    media: [
      `${imgRoot}/medis-01.webp`,
      `${imgRoot}/medis-02.webp`,
      `${imgRoot}/medis-03.webp`,
      `${imgRoot}/medis-04.webp`,
      `${imgRoot}/medis-05.webp`,
      `${imgRoot}/medis-06.webp`,
    ],
    link: 'https://esthemedis.ch',
    accentColor: '#675A5A',
    dark: true,
    reverse: ++count % 2 === 0,
  },
  {
    slug: 'mr',
    name: 'Mr. Bidouille',
    content: {
      en: ContentMrEn,
      fr: ContentMrFr,
    },
    techs: [techs.nuxt, techs.vue, techs.tailwind],
    media: [
      `${imgRoot}/mr-01.webp`,
      `${imgRoot}/mr-02.webp`,
      `${imgRoot}/mr-03.webp`,
      `${imgRoot}/mr-04.webp`,
      `${imgRoot}/mr-05.webp`,
      `${imgRoot}/mr-06.webp`,
    ],
    link: 'https://mrbidouille.ch',
    accentColor: '#B62C6D',
    dark: true,
    reverse: ++count % 2 === 0,
  },
  {
    slug: 'bea',
    name: 'BeatenIMMO',
    content: {
      en: ContentBeaEn,
      fr: ContentBeaFr,
    },
    techs: [
      techs.nuxt,
      techs.vue,
      techs.tailwind,
      techs.ts,
      techs.drizzle,
      techs.sqlite,
      techs.workers,
    ],
    media: [
      `${imgRoot}/bea-01.webp`,
      `${imgRoot}/bea-02.webp`,
      `${imgRoot}/bea-03.webp`,
      `${imgRoot}/bea-04.webp`,
      `${imgRoot}/bea-05.webp`,
      `${imgRoot}/bea-06.webp`,
    ],
    link: 'https://beatenimmo.ch',
    accentColor: '#00BBA7',
    dark: true,
    reverse: ++count % 2 === 0,
  },
  {
    slug: 'cx',
    name: 'C’XOLOGUE',
    content: {
      en: ContentCxEn,
      fr: ContentCxFr,
    },
    techs: [techs.nuxt, techs.vue, techs.tailwind, techs.ts],
    media: [
      `${imgRoot}/cx-01.webp`,
      `${imgRoot}/cx-02.webp`,
      `${imgRoot}/cx-03.webp`,
      `${imgRoot}/cx-04.webp`,
      `${imgRoot}/cx-05.webp`,
      `${imgRoot}/cx-06.webp`,
    ],
    link: 'https://cxologue.ch',
    accentColor: '#702D5A',
    dark: true,
    reverse: ++count % 2 === 0,
  },
]
