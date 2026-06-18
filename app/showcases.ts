import { ContentBeatenimmoEn, ContentBeatenimmoFr } from '#components'
import type { Component } from 'vue'
import type { Locale } from 'vue-i18n'

export interface ShowcaseParams {
  slug: string
  content: { [x in Locale]: Component }
  media: string[]
  link: string
  accentColor: string
  dark: boolean
  reverse: boolean
}

let count = 0

export const showcases: ShowcaseParams[] = [
  {
    slug: 'bea',
    content: {
      en: ContentBeatenimmoEn,
      fr: ContentBeatenimmoFr,
    },
    media: [],
    link: 'https://beatenimmo.ch',
    accentColor: '#00BBA7',
    dark: true,
    reverse: ++count % 2 === 0,
  },
  {
    slug: 'medis',
    content: {
      en: ContentBeatenimmoEn,
      fr: ContentBeatenimmoFr,
    },
    media: [],
    link: 'https://esthemedis.ch',
    accentColor: '#675A5A',
    dark: true,
    reverse: ++count % 2 === 0,
  },
  {
    slug: 'cx',
    content: {
      en: ContentBeatenimmoEn,
      fr: ContentBeatenimmoFr,
    },
    media: [],
    link: 'https://cxologue.ch',
    accentColor: '#702D5A',
    dark: true,
    reverse: ++count % 2 === 0,
  },
  {
    slug: 'viskar',
    content: {
      en: ContentBeatenimmoEn,
      fr: ContentBeatenimmoFr,
    },
    media: [],
    link: 'https://visualkarsys.com',
    accentColor: '#F8E71C',
    dark: false,
    reverse: ++count % 2 === 0,
  },
  {
    slug: 'mr',
    content: {
      en: ContentBeatenimmoEn,
      fr: ContentBeatenimmoFr,
    },
    media: [],
    link: 'https://mrbidouille.ch',
    accentColor: '#B62C6D',
    dark: true,
    reverse: ++count % 2 === 0,
  },
]
