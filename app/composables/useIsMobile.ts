const isMobile = ref(false)
let setup = false

export function useIsMobile() {
  onMounted(() => {
    if (!setup) {
      const media = matchMedia('(pointer: fine), (hover: hover)')
      isMobile.value = !media.matches
      media.onchange = (e) => {
        isMobile.value = !e.matches
      }
      setup = true
    }
  })
  return isMobile
}
