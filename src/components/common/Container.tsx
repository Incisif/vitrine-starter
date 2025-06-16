// components/common/Container.tsx
import { cn } from '@/lib/utils'

type ContainerProps = {
  children: React.ReactNode
  className?: string
}

export default function Container({ children, className }: Readonly<ContainerProps>) {
  return (
    <div
      className={cn(
        'w-full max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8',
        className
      )}
    >
      {children}
    </div>
  )
}
