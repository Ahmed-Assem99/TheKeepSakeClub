import { siteConfig } from '../../data/siteConfig'
import { copyText } from '../../lib/clipboard'
import { useToast } from './toastContext'

/**
 * Props for an <a> that copies a pre-written message and then opens the Instagram DM.
 * The link opens natively (no popup blockers, works with middle-click); the copy runs
 * in the same click and the toast confirms it.
 */
export function useOrder() {
  const { show } = useToast()

  return (message: string = siteConfig.defaultDmMessage) => ({
    href: siteConfig.dmUrl,
    target: '_blank',
    rel: 'noopener noreferrer',
    onClick: () => {
      void copyText(message).then((ok) =>
        show(ok ? 'message copied, just paste it in the DM<3' : 'opening our dms… tell us what you’d like<3'),
      )
    },
  })
}
