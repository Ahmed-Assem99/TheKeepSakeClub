import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { Heart } from '../doodles/Doodles'
import { ToastContext } from './toastContext'

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<{ id: number; message: string } | null>(null)
  const timer = useRef<number | undefined>(undefined)

  const show = useCallback((message: string) => {
    window.clearTimeout(timer.current)
    setToast({ id: Date.now(), message })
    timer.current = window.setTimeout(() => setToast(null), 3800)
  }, [])

  useEffect(() => () => window.clearTimeout(timer.current), [])
  const api = useMemo(() => ({ show }), [show])

  return (
    <ToastContext.Provider value={api}>
      {children}
      <div
        aria-live="polite"
        role="status"
        className="pointer-events-none fixed inset-x-0 bottom-0 z-[70] flex justify-center px-4 pb-[max(1.25rem,env(safe-area-inset-bottom))]"
      >
        <AnimatePresence>
          {toast && (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 24, rotate: -2, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, rotate: -1, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 380, damping: 26 }}
              className="pointer-events-auto flex max-w-sm items-center gap-3 rounded-full border-2 border-keepsake-ink bg-keepsake-cream py-3 pr-6 pl-3 text-keepsake-ink shadow-lift"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-keepsake-bubblegum">
                <Heart className="size-5 text-keepsake-ribbon" filled />
              </span>
              <span className="font-hand text-xl leading-tight">{toast.message}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}
