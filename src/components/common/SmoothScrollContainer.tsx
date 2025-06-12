'use client'

import { useEffect, useRef } from 'react'
import 'locomotive-scroll/dist/locomotive-scroll.css'

export default function SmoothScrollContainer({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let scroll: import('locomotive-scroll').default | null = null

    import('locomotive-scroll').then((LocomotiveScroll) => {
      if (!containerRef.current) return

      scroll = new LocomotiveScroll.default({
        el: containerRef.current,
        smooth: true,
      })
    })

    return () => {
      if (scroll) scroll.destroy()
    }
  }, [])

  return (
    <div ref={containerRef} data-scroll-container>
      {children}
    </div>
  )
}
