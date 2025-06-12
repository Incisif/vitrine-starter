'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { SiFacebook, SiInstagram } from 'react-icons/si'
import { useLocomotiveContext } from '@/contexts/LocomotiveProvider' // adapte le chemin si besoin

const HEADER_HEIGHT = 70

export default function Header() {
  const [hidden, setHidden] = useState(false)
  const [lastY, setLastY] = useState(0)
  const { scroll } = useLocomotiveContext()

  useEffect(() => {
    if (!scroll) return

    const onScroll = (args: unknown) => {
      const obj = args as { scroll: { y: number } } // ✅ cast sûr ici
      const currentY = obj.scroll.y

      if (currentY > lastY && currentY > HEADER_HEIGHT) {
        setHidden(true)
      } else if (currentY < lastY) {
        setHidden(false)
      }

      setLastY(currentY)
    }

    scroll.on('scroll', onScroll)
    return () => {
      scroll.off?.('scroll', onScroll)
    }
  }, [scroll, lastY])

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
          <Link
            href="#accueil"
            className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Accueil
          </Link>
          <Link
            href="#histoire"
            className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Notre histoire
          </Link>
          <Link
            href="#contact"
            className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </Link>
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
