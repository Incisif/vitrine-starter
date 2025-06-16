'use client'

import Image from 'next/image'

type HeroProps = {
  title?: string
  subtitle?: string
  imageSrc?: string
  alt?: string
}

export default function Hero({
  title,
  subtitle,
  imageSrc = '/hero.jpg',
  alt = 'Image de vitrine',
}: Readonly<HeroProps>) {
  return (
    <section className="relative w-full h-[var(--hero-height)]">
      <Image
        src={imageSrc}
        alt={alt}
        fill
        className="object-cover"
        priority
        quality={75} 
        sizes="(max-width: 1024px) 100vw, 1920px" 
      />

      {(title || subtitle) && (
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
          {title && <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>}
          {subtitle && <p className="mt-4 text-lg md:text-xl">{subtitle}</p>}
        </div>
      )}
    </section> 
  )
}
