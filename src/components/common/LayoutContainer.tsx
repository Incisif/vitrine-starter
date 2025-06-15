import { cn } from '@/lib/utils'

type LayoutContainerProps = Readonly<{
  children: React.ReactNode
  className?: string
}>;

export default function LayoutContainer({
  children,
  className,
}: LayoutContainerProps) {
  return (
    <div className={cn('w-full max-w-screen-xl mx-auto px-4 min-h-screen', className)}>
      {children}
    </div>
  );
}
