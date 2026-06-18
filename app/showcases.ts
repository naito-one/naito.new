import {
  ContentBeaEn,
  ContentBeaFr,
  ContentCxEn,
  ContentCxFr,
  ContentMedisEn,
  ContentMedisFr,
  ContentMrEn,
  ContentMrFr,
  ContentViskarEn,
  ContentViskarFr,
} from '#components'
import type { Component } from 'vue'
import type { Locale } from 'vue-i18n'

export interface ShowcaseParams {
  slug: string
  name: string
  content: { [x in Locale]: Component }
  media: string[]
  link: string
  accentColor: string
  dark: boolean
  reverse: boolean
}

let count = 0
const imgRoot = '/images/showcases'

export const showcases: ShowcaseParams[] = [
  {
    slug: 'bea',
    name: 'BeatenIMMO',
    content: {
      en: ContentBeaEn,
      fr: ContentBeaFr,
    },
    media: [`${imgRoot}/bea-01.webp`, `${imgRoot}/bea-02.webp`],
    link: 'https://beatenimmo.ch',
    accentColor: '#00BBA7',
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
    media: [`${imgRoot}/medis-01.webp`],
    link: 'https://esthemedis.ch',
    accentColor: '#675A5A',
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
    media: [`${imgRoot}/cx-01.webp`],
    link: 'https://cxologue.ch',
    accentColor: '#702D5A',
    dark: true,
    reverse: ++count % 2 === 0,
  },
  {
    slug: 'viskar',
    name: 'Visual KARSYS',
    content: {
      en: ContentViskarEn,
      fr: ContentViskarFr,
    },
    media: [`${imgRoot}/viskar-01.webp`],
    link: 'https://visualkarsys.com',
    accentColor: '#F8E71C',
    dark: false,
    reverse: ++count % 2 === 0,
  },
  {
    slug: 'mr',
    name: 'Mr. Bidouille',
    content: {
      en: ContentMrEn,
      fr: ContentMrFr,
    },
    media: [`${imgRoot}/mr-01.webp`],
    link: 'https://mrbidouille.ch',
    accentColor: '#B62C6D',
    dark: true,
    reverse: ++count % 2 === 0,
  },
]
