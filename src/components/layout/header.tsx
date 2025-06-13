'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SiFacebook, SiInstagram } from 'react-icons/si'
import { cn } from '@/lib/utils'
import { useLocomotiveContext } from '@/contexts/LocomotiveProvider'

const HEADER_HEIGHT = 70
const SCROLL_THRESHOLD = 10

export default function Header() {
  const { scroll } = useLocomotiveContext()
  const [hidden, setHidden] = useState(false)
  const lastYRef = useRef(0)

  useEffect(() => {
    if (!scroll) return

    type ScrollEvent = { scroll: { y: number } }

    const onScroll = (args: unknown) => {
      if (
        typeof args === 'object' &&
        args !== null &&
        'scroll' in args &&
        typeof (args as ScrollEvent).scroll?.y === 'number'
      ) {
        const currentY = (args as ScrollEvent).scroll.y
        const lastY = lastYRef.current
        const delta = currentY - lastY

        if (Math.abs(delta) < SCROLL_THRESHOLD) return

        if (delta > 0 && currentY > HEADER_HEIGHT) {
          setHidden(true)
        } else if (delta < 0) {
          setHidden(false)
        }

        lastYRef.current = currentY
      }
    }

    scroll.on('scroll', onScroll)
    return () => scroll.off?.('scroll', onScroll)
  }, [scroll])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-transform duration-300 bg-gray-600',
        hidden ? '-translate-y-full' : 'translate-y-0'
      )}
      style={{ height: HEADER_HEIGHT }}
    >
      <div className="max-w-screen-xl mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/assets/logo.png" alt="Logo" width={64} height={64} />
          <span className="sr-only">Retour à l’accueil</span>
        </Link>

        {/* Navigation centrée */}
        <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex gap-6 text-sm">
          <Link href="#accueil" className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Accueil</Link>
          <Link href="#histoire" className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Notre histoire</Link>
          <Link href="#contact" className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Contact</Link>
        </nav>

        {/* Réseaux sociaux à droite */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="https://facebook.com" aria-label="Facebook" target="_blank">
            <SiFacebook className="w-5 h-5 text-black hover:text-blue-600 transition-colors duration-300" />
          </Link>
          <Link href="https://instagram.com" aria-label="Instagram" target="_blank">
            <SiInstagram className="w-5 h-5 text-black hover:text-pink-500 transition-colors duration-300" />
          </Link>
        </div>

        {/* Burger menu mobile */}
        <button className="md:hidden text-xl" aria-label="Menu mobile">
          ☰
        </button>
      </div>
    </header>
  )
}
