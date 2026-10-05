import { Check } from 'lucide-react'
import { useStore } from '../context/Store'
export default function Toasts() {
  const { toasts } = useStore()
  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[80] flex flex-col gap-2 items-center w-[92vw] max-w-sm pointer-events-none" role="status" aria-live="polite">
      {toasts.map(t => (
        <div key={t.id} className="animate-fadeUp pointer-events-auto flex items-center gap-3 bg-espresso text-ivory px-5 py-3 text-sm shadow-lg w-full">
          <Check size={16} className="text-champagne shrink-0" /> {t.msg}
        </div>
      ))}
    </div>
  )
}
