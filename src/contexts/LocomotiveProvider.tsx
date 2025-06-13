'use client'

import { createContext, useContext, useEffect, useRef, useState, useMemo } from 'react'

import { createLocomotiveScroll } from '@/lib/locomotive-scroll'
import type LocomotiveScroll from 'locomotive-scroll' // 👈 pas d'import "réel", juste le type

type LocomotiveContextType = {
  scroll: LocomotiveScroll | null
}

const LocomotiveContext = createContext<LocomotiveContextType>({ scroll: null })

export function LocomotiveProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scroll, setScroll] = useState<LocomotiveScroll | null>(null)
  useEffect(() => {
    let isMounted = true
    let scrollInstance: LocomotiveScroll | null = null

    const init = async () => {
      await new Promise((resolve) => requestAnimationFrame(resolve)) 

      if (!containerRef.current) return

      const instance = await createLocomotiveScroll({
        el: containerRef.current
      })

      if (!isMounted) return
      scrollInstance = instance
      setScroll(instance)

      new ResizeObserver(() => scrollInstance?.update()).observe(containerRef.current)
    }

    init()

    return () => {
      isMounted = false
      scrollInstance?.destroy()
    }
  }, [])

  const contextValue = useMemo(() => ({ scroll }), [scroll])

  return (
    <LocomotiveContext.Provider value={contextValue}>
      <div id="scroll-container" data-scroll-container ref={containerRef}>
        {children}
      </div>
    </LocomotiveContext.Provider>
  )
}

export function useLocomotiveContext() {
  return useContext(LocomotiveContext)
}
