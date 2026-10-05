import { siteConfig } from '../data/siteConfig'

export const whatsappEnabled = () => siteConfig.whatsappNumber.replace(/\D/g, '').length > 0

export const whatsappUrl = (message: string) =>
  `https://wa.me/${siteConfig.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
