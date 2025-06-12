declare module 'locomotive-scroll' {
  export interface LocomotiveScrollOptions {
    el: HTMLElement
    smooth?: boolean
    lerp?: number
    class?: string
    easing?: [number, number, number, number]
    multiplier?: number
    getDirection?: boolean
    getSpeed?: boolean
    scrollFromAnywhere?: boolean
    reloadOnContextChange?: boolean
    resetNativeScroll?: boolean
    smartphone?: {
      smooth?: boolean
      breakpoint?: number
    }
    tablet?: {
      smooth?: boolean
      breakpoint?: number
    }
  }

  export default class LocomotiveScroll {
    constructor(options: LocomotiveScrollOptions)

    update(): void
    destroy(): void
    scrollTo(
      target: string | HTMLElement | number,
      options?: {
        offset?: number
        duration?: number
        easing?: [number, number, number, number] | string
        disableLerp?: boolean
        callback?: () => void
      }
    ): void

    on(event: 'scroll' | string, callback: (args: unknown) => void): void
    off?(event: 'scroll' | string, callback: (args: unknown) => void): void
    stop(): void
    start(): void
  }
}
