/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'locomotive-scroll' {
  export default class LocomotiveScroll {
    constructor(options: any)
    update(): void
    destroy(): void
    scrollTo(target: string | HTMLElement | number, options?: any): void
    on(event: string, callback: (args: any) => void): void
    stop(): void
    start(): void
  }
}
