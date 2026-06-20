import { seededRand } from './util'

const bg = [
  'from-nt1-orange-light to-nt1-orange-dark text-stone-700',
  'from-nt1-violet-light to-nt1-violet-dark text-white',
] as const

const parallax = ['parallax-0', 'parallax-5', 'parallax-10'] as const

const rand = seededRand('values_2')

export interface Value {
  slug: string
  icon: string
  bgClass: string
  parallax: string
}

export const values: Value[] = [
  {
    slug: 'fast',
    icon: 'material-symbols:rocket-launch-outline-rounded',
    bgClass: bg[Math.floor(rand() * bg.length)]!,
    parallax: parallax[Math.floor(rand() * parallax.length)]!,
  },
  {
    slug: 'safe',
    icon: 'material-symbols:security-rounded',
    bgClass: bg[Math.floor(rand() * bg.length)]!,
    parallax: parallax[Math.floor(rand() * parallax.length)]!,
  },
  {
    slug: 'private',
    icon: 'material-symbols:eyeglasses-2-rounded',
    bgClass: bg[Math.floor(rand() * bg.length)]!,
    parallax: parallax[Math.floor(rand() * parallax.length)]!,
  },
  {
    slug: 'future',
    icon: 'material-symbols:history-edu-outline-rounded',
    bgClass: bg[Math.floor(rand() * bg.length)]!,
    parallax: parallax[Math.floor(rand() * parallax.length)]!,
  },
  {
    slug: 'inclusive',
    icon: 'material-symbols:volunteer-activism-outline-rounded',
    bgClass: bg[Math.floor(rand() * bg.length)]!,
    parallax: parallax[Math.floor(rand() * parallax.length)]!,
  },
  {
    slug: 'proud',
    icon: 'material-symbols:diversity-2-outline-rounded',
    bgClass: bg[Math.floor(rand() * bg.length)]!,
    parallax: parallax[Math.floor(rand() * parallax.length)]!,
  },
]
