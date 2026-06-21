export interface Tech {
  slug: string
  format: string
}

export const techs = {
  nuxt: {
    slug: 'nuxt',
    format: 'svg',
  } as Tech,
  vue: {
    slug: 'vue',
    format: 'svg',
  } as Tech,
  ts: {
    slug: 'ts',
    format: 'svg',
  } as Tech,
  angular: {
    slug: 'angular',
    format: 'webp',
  } as Tech,
  three: {
    slug: 'three',
    format: 'svg',
  } as Tech,
  tailwind: {
    slug: 'tailwind',
    format: 'svg',
  } as Tech,
  spring: {
    slug: 'spring',
    format: 'svg',
  } as Tech,
  postgre: {
    slug: 'postgre',
    format: 'webp',
  } as Tech,
  jooq: {
    slug: 'jooq',
    format: 'png',
  } as Tech,
  flask: {
    slug: 'flask',
    format: 'svg',
  } as Tech,
  celery: {
    slug: 'celery',
    format: 'webp',
  } as Tech,
  redis: {
    slug: 'redis',
    format: 'png',
  } as Tech,
  cgal: {
    slug: 'cgal',
    format: 'webp',
  } as Tech,
  workers: {
    slug: 'workers',
    format: 'ico',
  } as Tech,
  pages: {
    slug: 'pages',
    format: 'svg',
  } as Tech,
  drizzle: {
    slug: 'drizzle',
    format: 'svg',
  } as Tech,
  balena: {
    slug: 'balena',
    format: 'webp',
  } as Tech,
  node: {
    slug: 'node',
    format: 'svg',
  } as Tech,
  laravel: {
    slug: 'laravel',
    format: 'svg',
  } as Tech,
  docker: {
    slug: 'docker',
    format: 'svg',
  } as Tech,
  sqlite: {
    slug: 'sqlite',
    format: 'svg',
  } as Tech,
  grafana: {
    slug: 'grafana',
    format: 'svg',
  } as Tech,
  jenkins: {
    slug: 'jenkins',
    format: 'webp',
  } as Tech,
  maria: {
    slug: 'maria',
    format: 'svg',
  } as Tech,
} as const
