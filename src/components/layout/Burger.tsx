'use client'

type BurgerProps = {
  open: boolean
  onToggle: () => void
}

export default function Burger({ open, onToggle }: Readonly<BurgerProps>) {
  return (
    <button
      onClick={onToggle}
      aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
      aria-expanded={open}
      className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1 z-[60] relative"
    >
      <span className={`w-6 h-0.5 bg-white transition ${open ? 'rotate-45 translate-y-[6px]' : ''}`} />
      <span className={`w-6 h-0.5 bg-white transition ${open ? 'opacity-0' : 'opacity-100'}`} />
      <span className={`w-6 h-0.5 bg-white transition ${open ? '-rotate-45 -translate-y-[6px]' : ''}`} />
    </button>
  )
}
