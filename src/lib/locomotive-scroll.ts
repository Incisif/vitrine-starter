import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'

export { LocomotiveScroll }

export function createLocomotiveScroll(options = {}) {
  return new LocomotiveScroll({
    smooth: true,
    lerp: 0.075,
    ...options,
  })
}