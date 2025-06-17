'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

type CarouselProps = {
  images: string[]
  interval?: number // in ms
}

export default function Carousel({ images, interval = 5000 }: Readonly<CarouselProps>) {
  const [activeIndex, setActiveIndex] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % images.length)
    }, interval)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [activeIndex, interval, images.length])

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full flex-shrink-0  h-[var(--hero-height)] relative">
            <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-cover"
                    priority
                    quality={75} 
                    sizes="(max-width: 1024px) 100vw, 1920px" 
                  />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={cn(
              'h-2 rounded-full transition-all duration-300 bg-white/80',
              i === activeIndex ? 'w-8' : 'w-2'
            )}
          />
        ))}
      </div>
    </div>
  )
}
