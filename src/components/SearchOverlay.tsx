import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import { useStore } from '../context/Store'
import { fmt, products } from '../data/products'
import Bottle from './Bottle'
import Scene from './Scene'

export default function SearchOverlay() {
  const { searchOpen, setSearchOpen } = useStore()
  const [q, setQ] = useState('')
  const ref = useRef<HTMLInputElement>(null)
  useEffect(() => {
    document.body.style.overflow = searchOpen ? 'hidden' : ''
    if (searchOpen) setTimeout(() => ref.current?.focus(), 50); else setQ('')
    const k = (e: KeyboardEvent) => e.key === 'Escape' && setSearchOpen(false)
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k)
  }, [searchOpen, setSearchOpen])
  const results = useMemo(() => {
    const s = q.trim().toLowerCase(); if (!s) return products
    return products.filter(p => [p.name, p.family, p.tagline, ...p.ingredients, ...p.top, ...p.heart, ...p.base].join(' ').toLowerCase().includes(s))
  }, [q])
  if (!searchOpen) return null
  return (
    <div className="fixed inset-0 z-[70] bg-ivory/97 backdrop-blur-md overflow-y-auto animate-fadeIn" role="dialog" aria-modal="true" aria-label="Search">
      <div className="container-x pt-6 pb-16 max-w-4xl">
        <div className="flex justify-end"><button onClick={() => setSearchOpen(false)} aria-label="Close search" className="p-2"><X size={26} strokeWidth={1.2} /></button></div>
        <p className="eyebrow text-center mt-4">SEARCH</p>
        <div className="relative mt-6">
          <Search size={20} strokeWidth={1.3} className="absolute left-0 top-1/2 -translate-y-1/2 text-gold" />
          <label htmlFor="site-search" className="sr-only">Search products, ingredients or fragrance families</label>
          <input id="site-search" ref={ref} value={q} onChange={e => setQ(e.target.value)} placeholder="Search a scent, ingredient or family…"
            className="w-full bg-transparent border-b border-espresso/30 pl-9 py-4 font-serif text-2xl sm:text-4xl outline-none focus:border-gold placeholder:text-ink/30" />
        </div>
        <p className="mt-4 text-xs text-ink/60">{q ? `${results.length} result${results.length === 1 ? '' : 's'}` : 'Try “rose”, “oud”, “musk” or “woody”'}</p>
        {results.length === 0 ? (
          <div className="text-center py-20"><p className="font-serif text-3xl text-espresso">No results found</p><p className="text-sm text-ink/70 mt-2">Try a different name, ingredient or fragrance family.</p></div>
        ) : (
          <ul className="mt-8 divide-y divide-champagne/30">
            {results.map(p => (
              <li key={p.id}>
                <Link to={`/product/${p.id}`} onClick={() => setSearchOpen(false)} className="flex items-center gap-5 py-4 group">
                  <Scene tone="cream" className="w-16 h-20 shrink-0 grid place-items-center"><Bottle style={p.style} className="h-[85%]" title={p.name} /></Scene>
                  <div className="flex-1"><p className="font-serif text-xl text-espresso group-hover:text-gold transition-colors">{p.name}</p><p className="text-xs text-ink/60 mt-1">{p.family} · {p.ingredients.slice(0, 3).join(', ')}</p></div>
                  <span className="text-sm">{fmt(p.price)}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
