import { Link } from 'react-router-dom'
import { Minus, Plus, X } from 'lucide-react'
import { useStore } from '../context/Store'
import { fmt, priceFor, products } from '../data/products'
import Bottle from './Bottle'
import Scene from './Scene'

export function CartLines({ compact = false }: { compact?: boolean }) {
  const { cart, setQty, removeLine, setCartOpen } = useStore()
  if (!cart.length) return (
    <div className="text-center py-16">
      <p className="font-serif text-2xl text-espresso">Your bag is empty</p>
      <p className="text-sm text-ink/70 mt-2 mb-6">Discover a fragrance that feels like you.</p>
      <Link to="/collection" onClick={() => setCartOpen(false)} className="btn-dark">Explore collection</Link>
    </div>
  )
  return (
    <ul className="divide-y divide-champagne/30">
      {cart.map(l => {
        const p = products.find(x => x.id === l.id); if (!p) return null
        return (
          <li key={l.id + l.ml} className="flex gap-4 py-5">
            <Link to={`/product/${p.id}`} onClick={() => setCartOpen(false)} className={`${compact ? 'w-20 h-24' : 'w-24 h-28 sm:w-28 sm:h-32'} shrink-0`}>
              <Scene tone="cream" className="w-full h-full grid place-items-center"><Bottle style={p.style} className="h-[85%]" title={p.name} /></Scene>
            </Link>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between gap-2">
                <div><Link to={`/product/${p.id}`} onClick={() => setCartOpen(false)} className="font-serif text-lg text-espresso leading-tight">{p.name}</Link>
                  <p className="text-xs text-ink/60 mt-1">{l.ml} ml · Eau de Parfum</p></div>
                <button onClick={() => removeLine(l.id, l.ml)} aria-label={`Remove ${p.name}`} className="self-start p-1 text-ink/50 hover:text-espresso"><X size={16} /></button>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center border border-champagne/50">
                  <button className="p-2 hover:bg-cream" aria-label="Decrease quantity" onClick={() => setQty(l.id, l.ml, l.qty - 1)} disabled={l.qty <= 1}><Minus size={13} /></button>
                  <span className="w-8 text-center text-sm" aria-live="polite">{l.qty}</span>
                  <button className="p-2 hover:bg-cream" aria-label="Increase quantity" onClick={() => setQty(l.id, l.ml, l.qty + 1)}><Plus size={13} /></button>
                </div>
                <span className="text-sm">{fmt(priceFor(p, l.ml) * l.qty)}</span>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export function Totals() {
  const { subtotal, shipping, total } = useStore()
  const row = 'flex justify-between text-sm'
  return (
    <dl className="space-y-2">
      <div className={row}><dt className="text-ink/70">Subtotal</dt><dd>{fmt(subtotal)}</dd></div>
      <div className={row}><dt className="text-ink/70">Shipping</dt><dd>{shipping === 0 ? 'Complimentary' : fmt(shipping)}</dd></div>
      <div className={`${row} pt-3 mt-2 border-t border-champagne/40 text-base`}><dt className="font-serif text-xl text-espresso">Total</dt><dd className="font-serif text-xl text-espresso">{fmt(total)}</dd></div>
    </dl>
  )
}
