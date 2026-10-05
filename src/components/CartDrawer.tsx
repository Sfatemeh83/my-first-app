import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import { useStore } from '../context/Store'
import { CartLines, Totals } from './Bag'
import { fmt } from '../data/products'

export default function CartDrawer() {
  const { cartOpen, setCartOpen, cart, subtotal } = useStore()
  useEffect(() => {
    document.body.style.overflow = cartOpen ? 'hidden' : ''
    const k = (e: KeyboardEvent) => e.key === 'Escape' && setCartOpen(false)
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k)
  }, [cartOpen, setCartOpen])
  if (!cartOpen) return null
  return (
    <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="Shopping bag">
      <div className="absolute inset-0 bg-espresso/50 animate-fadeIn" onClick={() => setCartOpen(false)} />
      <aside className="absolute right-0 top-0 h-full w-full sm:w-[440px] bg-ivory flex flex-col animate-slideIn">
        <div className="flex items-center justify-between px-6 py-5 border-b border-champagne/40">
          <h2 className="font-serif text-2xl">Your Bag <span className="text-ink/50 text-lg">({cart.reduce((n, l) => n + l.qty, 0)})</span></h2>
          <button autoFocus onClick={() => setCartOpen(false)} aria-label="Close bag" className="p-2"><X size={22} strokeWidth={1.3} /></button>
        </div>
        <div className="flex-1 overflow-y-auto px-6"><CartLines compact /></div>
        {cart.length > 0 && (
          <div className="px-6 py-5 border-t border-champagne/40 bg-cream/50 space-y-4">
            <p className="text-xs text-ink/70 text-center">{subtotal >= 150 ? 'You qualify for complimentary shipping.' : `Add ${fmt(150 - subtotal)} more for complimentary shipping.`}</p>
            <Totals />
            <Link to="/checkout" onClick={() => setCartOpen(false)} className="btn-dark w-full">Proceed to checkout</Link>
            <button onClick={() => setCartOpen(false)} className="w-full text-[11px] tracking-[0.2em] uppercase text-ink/70 hover:text-espresso">Continue shopping</button>
          </div>
        )}
      </aside>
    </div>
  )
}
