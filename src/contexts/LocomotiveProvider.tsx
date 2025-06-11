'use client'

import { createContext, useContext, useEffect, useRef, useState, useMemo } from 'react'
import { createLocomotiveScroll } from '@/lib/locomotive-scroll'

import LocomotiveScroll from 'locomotive-scroll'

type LocomotiveContextType = {
  scroll: LocomotiveScroll | null
}

const LocomotiveContext = createContext<LocomotiveContextType>({ scroll: null })

export function LocomotiveProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scroll, setScroll] = useState<LocomotiveScroll | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const scrollInstance = createLocomotiveScroll({
      el: containerRef.current,
    })

    setScroll(scrollInstance)

    return () => {
      scrollInstance.destroy()
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
