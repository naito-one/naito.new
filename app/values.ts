const orange = 'from-nt1-orange-light to-nt1-orange-dark text-black/70'
const violet = 'from-nt1-violet-light to-nt1-violet-dark text-black/65'

export interface Value {
  slug: string
  icon: string
  colors: string
}

export const values: Value[] = [
  {
    slug: 'fast',
    icon: 'material-symbols:rocket-launch-outline-rounded',
    colors: orange,
  },
  {
    slug: 'safe',
    icon: 'material-symbols:security-rounded',
    colors: violet,
  },
  {
    slug: 'private',
    icon: 'material-symbols:eyeglasses-2-rounded',
    colors: orange,
  },
  {
    slug: 'future',
    icon: 'material-symbols:history-edu-outline-rounded',
    colors: violet,
  },
  {
    slug: 'inclusive',
    icon: 'material-symbols:volunteer-activism-outline-rounded',
    colors: orange,
  },
  {
    slug: 'proud',
    icon: 'material-symbols:diversity-2-outline-rounded',
    colors: violet,
  },
]
