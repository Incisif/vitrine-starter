import { cn } from '@/lib/utils'

type LayoutContainerProps = Readonly<{
  children: React.ReactNode
  className?: string
  marginTop?: string
}>

export default function LayoutContainer({ children, className,marginTop }: LayoutContainerProps) {
  return (
    <div
      className={cn(
        'w-full max-w-screen-xl mx-auto px-4 min-h-screen',
        marginTop ? `${marginTop}` : 'mt-0',
        className
      )}
    >
      {children}
    </div>
  )
}
