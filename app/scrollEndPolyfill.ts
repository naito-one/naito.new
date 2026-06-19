/*
MIT License

Copyright (c) 2019 Alex Fomin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

const SCROLL_DEBOUNCE_INTERVAL = 100

type PolyfilledTarget = HTMLElement | Window | Document

type ListenerMethod = 'addEventListener' | 'removeEventListener'

type PossibleListenerType = Parameters<PolyfilledTarget[ListenerMethod]>[1]

const SCROLLEND_EVENT = 'scrollend'

let set = false

if (
  !set &&
  typeof window !== 'undefined' &&
  !('on' + SCROLLEND_EVENT in window)
) {
  set = true

  const dispatchedEvent = new Event(SCROLLEND_EVENT)

  const pointers = new Set<number>()

  const handlersMap = new WeakMap<
    PossibleListenerType,
    ReturnType<typeof debounce>
  >()

  let lastTarget: PolyfilledTarget | null = null

  const dispatchScrollEvent = (target: PolyfilledTarget) =>
    target.dispatchEvent(dispatchedEvent)

  addEventListener(
    'touchstart',
    (e) => {
      for (const touch of e.changedTouches) {
        pointers.add(touch.identifier)
      }
    },
    { passive: true },
  )

  addEventListener(
    'touchend',
    (e) => {
      for (const touch of e.changedTouches) {
        if (pointers.delete(touch.identifier) && lastTarget && !pointers.size) {
          dispatchScrollEvent(lastTarget)
          lastTarget = null
        }
      }
    },
    { passive: true },
  )

  const debounce = (fn: () => void, delay: number) => {
    let timer: ReturnType<typeof setTimeout> | 0 = 0

    const cancel = () => clearTimeout(timer)

    const result = () => {
      cancel()
      timer = setTimeout(fn, delay)
    }

    result._cancel = cancel

    return result
  }

  const patchScrollEnd = <T extends ListenerMethod>(
    objects: readonly PolyfilledTarget[],
    method: T,
    fn: (
      this: PolyfilledTarget,
      type: string,
      listener: PossibleListenerType,
      options?: AddEventListenerOptions,
    ) => void,
  ) =>
    objects.forEach((object) => {
      const originalMethod = object[method]

      object[method] = function () {
        originalMethod.apply(this, arguments as any)
        if (arguments[0] === SCROLLEND_EVENT) {
          fn.apply(this, arguments as any)
        }
      }
    })

  const targets = [
    HTMLElement.prototype,
    window,
    document,
  ] as const satisfies readonly PolyfilledTarget[]

  patchScrollEnd(
    targets,
    'addEventListener',
    function (type, listener, options) {
      const fn = debounce(() => {
        if (pointers.size === 0) {
          dispatchScrollEvent(this)
        } else {
          lastTarget = this
        }
      }, SCROLL_DEBOUNCE_INTERVAL)

      handlersMap.set(listener, fn)
      this.addEventListener('scroll', fn, options)
    },
  )
  patchScrollEnd(
    targets,
    'removeEventListener',
    function (type, listener, options) {
      const fn = handlersMap.get(listener)
      if (fn) {
        fn._cancel()
        handlersMap.delete(listener)
        if (lastTarget === this) {
          lastTarget = null
        }
        this.removeEventListener('scroll', fn, options)
      }
    },
  )
}
