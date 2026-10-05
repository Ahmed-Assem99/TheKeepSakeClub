import { cn } from '../../lib/cn'

export type ButtonVariant = 'ribbon' | 'candy' | 'cream' | 'ink' | 'outline' | 'outline-light'
export type ButtonSize = 'md' | 'lg'

const variants: Record<ButtonVariant, string> = {
  ribbon: 'bg-keepsake-ribbon text-white border-keepsake-ribbon hover:bg-keepsake-ribbon-deep',
  candy: 'bg-keepsake-candy text-keepsake-ink border-keepsake-ink hover:bg-keepsake-bubblegum',
  cream: 'bg-keepsake-cream text-keepsake-ink border-keepsake-ink hover:bg-white',
  ink: 'bg-keepsake-ink text-keepsake-cream border-keepsake-ink hover:bg-keepsake-burgundy-deep',
  outline: 'bg-transparent text-keepsake-ink border-keepsake-ink hover:bg-keepsake-ink/5',
  'outline-light': 'bg-transparent text-keepsake-cream border-keepsake-cream/70 hover:bg-keepsake-cream/10',
}

const sizes: Record<ButtonSize, string> = {
  md: 'min-h-11 px-5 text-base gap-2',
  lg: 'min-h-13 px-7 text-lg gap-2.5',
}

export const buttonClasses = (variant: ButtonVariant = 'ribbon', size: ButtonSize = 'md', className?: string) =>
  cn(
    'inline-flex items-center justify-center rounded-full border-2 font-semibold tracking-tight lowercase whitespace-nowrap',
    'shadow-[0_4px_0_-1px_rgba(23,16,26,0.85)] transition-[transform,box-shadow,background-color] duration-150',
    'hover:-translate-y-0.5 hover:shadow-[0_6px_0_-1px_rgba(23,16,26,0.85)] active:translate-y-0.5 active:shadow-[0_1px_0_0_rgba(23,16,26,0.85)]',
    'motion-reduce:hover:translate-y-0',
    variants[variant],
    sizes[size],
    className,
  )
