'use client'

import { useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'
import { useLocomotiveContext } from '@/contexts/LocomotiveProvider'
import { cn } from '@/lib/utils'
import type { ScrollEvent } from 'locomotive-scroll'

export default function ScrollToTopButton() {
  const { scroll } = useLocomotiveContext()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!scroll) return

    const onScroll = (event: ScrollEvent) => {
      setVisible(event.scroll.y > 300)
    }

    scroll.on('scroll', onScroll)
    return () => {
      scroll.off?.('scroll', onScroll)
    }
  }, [scroll])

  const handleClick = () => {
    scroll?.scrollTo(0, {
      duration: 800,
      easing: [0.25, 0.0, 0.35, 1.0],
    })
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Retour en haut"
      className={cn(
        'fixed bottom-6 right-6 z-[999] rounded-full bg-gray-700 text-white p-3 shadow-lg transition-opacity duration-300',
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      <FiArrowUp className="w-5 h-5" />
    </button>
  )
}
