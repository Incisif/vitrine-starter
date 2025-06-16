'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SiFacebook, SiInstagram } from 'react-icons/si'
import { FiHome } from 'react-icons/fi'
import { cn } from '@/lib/utils'
import { useLocomotiveContext } from '@/contexts/LocomotiveProvider'
import BurgerMenu from './Burger'

const SCROLL_THRESHOLD = 10

export default function Header() {
  const { scroll } = useLocomotiveContext()
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)
  const lastYRef = useRef(0)
  const headerRef = useRef<HTMLElement>(null)
  const headerHeightRef = useRef(0)

  useEffect(() => {
    if (!headerRef.current) return
    headerHeightRef.current = headerRef.current.getBoundingClientRect().height
  }, [])

  useEffect(() => {
    if (!scroll) return

    const onScroll = (args: unknown) => {
      const { scroll } = args as { scroll: { y: number } }
      const currentY = scroll.y
      const delta = currentY - lastYRef.current

      if (Math.abs(delta) < SCROLL_THRESHOLD) return

      if (delta > 0 && currentY > headerHeightRef.current) {
        setHidden(true)
      } else if (delta < 0) {
        setHidden(false)
      }

      lastYRef.current = currentY
    }

    scroll.on('scroll', onScroll)
    return () => {
      if (scroll && typeof scroll.off === 'function') {
        scroll.off('scroll', onScroll)
      }
    }
  }, [scroll])

  useEffect(() => {
    if (hidden && open) setOpen(false)
  }, [hidden, open])

  return (
    <div className="relative z-[100]">
      <header
        ref={headerRef}
        className={cn(
          'fixed top-0 left-0 w-full z-[1000] transition-transform duration-300 bg-gray-600',
          'h-[var(--header-height)] ',
          hidden ? '-translate-y-full' : 'translate-y-0'
        )}
      >
        <div className="max-w-screen-xl mx-auto px-4 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/assets/logo.png" alt="Logo" width={64} height={64} priority />
            <span className="sr-only">Retour à l’accueil</span>
          </Link>

          {/* Navigation desktop */}
          <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex gap-6 text-sm">
            <Link
              href="/"
              className="text-white relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
            >
              <FiHome className="absolute left-[-20px] top-1/2 -translate-y-1/2 text-white" />
              Accueil
            </Link>
            <Link
              href="/histoire"
              className="text-white relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
            >
              Notre histoire
            </Link>
            <Link
              href="/contact"
              className="text-white relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
            >
              Contact
            </Link>
          </nav>

          {/* Réseaux sociaux */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <SiFacebook className="w-5 h-5 text-white hover:text-blue-600" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <SiInstagram className="w-5 h-5 text-white hover:text-pink-500" />
            </Link>
          </div>

          {/* Burger */}
          <BurgerMenu open={open} onToggle={() => setOpen(!open)} />
        </div>
      </header>

      {/* Menu mobile */}
      {open && (
        <div className="fixed left-0 w-full bg-gray-900 text-white z-[999] top-[var(--header-height)] ">
          <nav className="flex flex-col items-center gap-6 py-6">
            <Link href="/" onClick={() => setOpen(false)}>
              Accueil
            </Link>
            <Link href="/histoire" onClick={() => setOpen(false)}>
              Notre histoire
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}
