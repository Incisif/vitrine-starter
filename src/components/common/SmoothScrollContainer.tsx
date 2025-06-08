'use client'

import { LocomotiveProvider } from '@/contexts/LocomotiveProvider'

export default function SmoothScrollContainer({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <LocomotiveProvider>{children}</LocomotiveProvider>
}
