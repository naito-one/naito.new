import type { RouterConfig } from '@nuxt/schema'

export default {
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (history.state?.canScroll === false) {
      return false
    }

    const behavior = from.path === to.path ? 'smooth' : 'instant'

    if (to.hash) {
      const el = document.querySelector(to.hash)
      if (el) {
        const style = getComputedStyle(el)
        return {
          el: to.hash,
          top: parseFloat(style.scrollMarginTop),
          left: parseFloat(style.scrollMarginLeft),
          behavior,
        }
      }
    }

    return { top: 0, left: 0, behavior }
  },
} satisfies RouterConfig
