import type { RouterConfig } from '@nuxt/schema'

export default {
  scrollBehavior(to, from, savedPosition) {
    if (history.state?.canScroll === false) {
      return false
    }

    const behavior = from.path === to.path ? 'smooth' : 'instant'

    if (to.hash) {
      const el = document.querySelector(to.hash)
      if (el) {
        const style = getComputedStyle(el)
        return {
          el,
          top: parseFloat(style.scrollMarginTop),
          left: parseFloat(style.scrollMarginLeft),
          behavior,
        }
      }
    }

    if (savedPosition) {
      return savedPosition
    }

    return { top: 0, left: 0, behavior }
  },
} satisfies RouterConfig
