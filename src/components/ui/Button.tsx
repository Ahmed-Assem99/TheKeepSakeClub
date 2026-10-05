import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { buttonClasses, type ButtonSize, type ButtonVariant } from './buttonStyles'

type Common = { variant?: ButtonVariant; size?: ButtonSize; children: ReactNode; className?: string }

export function Button({ variant, size, className, children, ...rest }: Common & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" className={buttonClasses(variant, size, className)} {...rest}>
      {children}
    </button>
  )
}

export function ButtonLink({ variant, size, className, children, ...rest }: Common & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={buttonClasses(variant, size, className)} {...rest}>
      {children}
    </a>
  )
}
