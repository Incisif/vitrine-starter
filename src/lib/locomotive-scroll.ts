import 'locomotive-scroll/dist/locomotive-scroll.css'

import type { LocomotiveScrollOptions } from 'locomotive-scroll'

export async function createLocomotiveScroll(
  options: LocomotiveScrollOptions
): Promise<import('locomotive-scroll').default> {
  const LocomotiveScroll = (await import('locomotive-scroll')).default

  return new LocomotiveScroll({
    smooth: true,
    lerp: 0.4,
    ...options,
  })
}
