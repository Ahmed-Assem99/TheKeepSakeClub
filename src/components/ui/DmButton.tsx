import { Send } from 'lucide-react'
import type { ReactNode } from 'react'
import { siteConfig } from '../../data/siteConfig'
import { whatsappEnabled, whatsappUrl } from '../../lib/order'
import { cn } from '../../lib/cn'
import { WhatsappGlyph } from '../doodles/Doodles'
import { ButtonLink } from './Button'
import type { ButtonSize, ButtonVariant } from './buttonStyles'
import { useOrder } from './useOrder'

interface DmButtonProps {
  message?: string
  children?: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  /** Also show "order on whatsapp" when a number is configured. */
  withWhatsapp?: boolean
  whatsappVariant?: ButtonVariant
  /** Extra context for screen readers, e.g. the product name. */
  srLabel?: string
  icon?: boolean
}

/** "Order via DM": copies the pre-written message, toasts, and opens the Instagram DM. */
export function DmButton({
  message = siteConfig.defaultDmMessage,
  children = 'order via dm 🎀',
  variant = 'ribbon',
  size = 'md',
  className,
  withWhatsapp = false,
  whatsappVariant = 'outline',
  srLabel,
  icon = true,
}: DmButtonProps) {
  const order = useOrder()
  const dm = (
    <ButtonLink variant={variant} size={size} className={className} {...order(message)}>
      {icon && <Send aria-hidden className="size-[1.05em] shrink-0" strokeWidth={2.4} />}
      <span>{children}</span>
      {srLabel && <span className="sr-only"> ({srLabel}, opens instagram)</span>}
    </ButtonLink>
  )
  if (!withWhatsapp || !whatsappEnabled()) return dm
  return (
    <div className={cn('flex flex-wrap gap-3')}>
      {dm}
      <ButtonLink
        variant={whatsappVariant}
        size={size}
        href={whatsappUrl(message)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsappGlyph className="size-[1.15em]" />
        <span>order on whatsapp</span>
      </ButtonLink>
    </div>
  )
}
