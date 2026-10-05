import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Heart, Minus, Plus, RotateCcw, Truck, Check } from 'lucide-react'
import Seo from '../components/Seo'
import Bottle from '../components/Bottle'
import Scene, { Flower, Sprig } from '../components/Scene'
import Accordion from '../components/Accordion'
import ProductGrid from '../components/ProductGrid'
import Reveal from '../components/Reveal'
import { SilkScene } from '../components/StorySection'
import { fmt, priceFor, products, sizes } from '../data/products'
import { useStore } from '../context/Store'
import NotFound from './NotFound'

export default function ProductPage() {
  const { id } = useParams()
  const p = products.find(x => x.id === id)
  const { addToCart, toggleWish, wishlist, setCartOpen } = useStore()
  const [ml, setMl] = useState(50); const [qty, setQty] = useState(1); const [view, setView] = useState(0)
  if (!p) return <NotFound />
  const liked = wishlist.includes(p.id)
  const related = products.filter(x => x.id !== p.id).slice(0, 4)
  const views = [
    <Scene key="a" tone="cream" className="w-full h-full grid place-items-center"><Bottle style={p.style} className="h-[82%]" title={p.name} /></Scene>,
    <Scene key="b" tone="blush" className="w-full h-full grid place-items-center"><Flower size={150} className="absolute -left-6 bottom-6" /><Flower size={90} color="#EFB9B4" className="absolute right-6 bottom-4" /><Sprig className="absolute right-8 top-0 h-40 opacity-70" /><Bottle style={p.style} className="h-[78%] relative drop-shadow-[0_24px_20px_rgba(110,60,45,.3)]" title={`${p.name} with flowers`} /></Scene>,
    <div key="c" className="w-full h-full"><SilkScene className="w-full h-full" /></div>,
  ]
  return (<>
    <Seo title={p.name} description={`${p.name} — ${p.tagline} ${p.family} eau de parfum by NEXAWEB.`} />
    <div className="container-x pt-28 md:pt-36 pb-16">
      <nav aria-label="Breadcrumb" className="text-[11px] tracking-[0.16em] text-ink/60 mb-8">
        <Link to="/" className="hover:text-espresso">HOME</Link> / <Link to="/collection" className="hover:text-espresso">COLLECTION</Link> / <span className="text-espresso">{p.name}</span>
      </nav>
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
        <div className="grid grid-cols-[64px_1fr] sm:grid-cols-[84px_1fr] gap-4 items-start">
          <div className="flex flex-col gap-3" role="tablist" aria-label="Product images">
            {views.map((v, i) => (
              <button key={i} role="tab" aria-selected={view === i} aria-label={`Image ${i + 1}`} onClick={() => setView(i)} className={`aspect-[4/5] overflow-hidden border transition-colors ${view === i ? 'border-gold' : 'border-transparent opacity-70 hover:opacity-100'}`}>
                <div className="w-full h-full pointer-events-none">{v}</div>
              </button>
            ))}
          </div>
          <div className="aspect-[4/5] lg:sticky lg:top-28 animate-fadeIn" key={view}>{views[view]}</div>
        </div>
        <div className="lg:pt-4">
          <p className="eyebrow">{p.family}</p>
          <h1 className="mt-3 text-4xl md:text-5xl leading-tight">{p.name}</h1>
          <p className="mt-3 font-serif text-xl italic text-ink/70">{p.tagline}</p>
          <p className="mt-5 text-2xl font-serif text-espresso">{fmt(priceFor(p, ml))}</p>
          <p className="mt-5 text-[15px] leading-[1.8] text-ink/85">{p.description}</p>
          <dl className="mt-7 grid grid-cols-3 gap-4 border-y border-champagne/40 py-5 text-sm">
            {([['Top notes', p.top], ['Heart notes', p.heart], ['Base notes', p.base]] as const).map(([t, n]) => (
              <div key={t}><dt className="text-[10px] tracking-[0.2em] uppercase text-gold">{t}</dt><dd className="mt-2 leading-relaxed">{n.join(', ')}</dd></div>
            ))}
          </dl>
          <fieldset className="mt-7"><legend className="text-[11px] tracking-[0.2em] uppercase mb-3">Size</legend>
            <div className="flex gap-3">
              {sizes.map(s => <button type="button" key={s.ml} aria-pressed={ml === s.ml} onClick={() => setMl(s.ml)} className={`min-w-20 px-5 py-3 text-sm border transition-colors ${ml === s.ml ? 'border-espresso bg-espresso text-ivory' : 'border-champagne/60 hover:border-espresso'}`}>{s.ml} ml</button>)}
            </div>
          </fieldset>
          <div className="mt-6 flex flex-wrap items-stretch gap-3">
            <div className="flex items-center border border-champagne/60" role="group" aria-label="Quantity">
              <button aria-label="Decrease quantity" className="px-4 py-4 hover:bg-cream" onClick={() => setQty(q => Math.max(1, q - 1))}><Minus size={14} /></button>
              <span className="w-10 text-center" aria-live="polite">{qty}</span>
              <button aria-label="Increase quantity" className="px-4 py-4 hover:bg-cream" onClick={() => setQty(q => Math.min(10, q + 1))}><Plus size={14} /></button>
            </div>
            <button className="btn-dark flex-1 min-w-[180px]" onClick={() => { addToCart(p.id, ml, qty); setCartOpen(true) }}>Add to cart — {fmt(priceFor(p, ml) * qty)}</button>
            <button onClick={() => toggleWish(p.id)} aria-pressed={liked} aria-label={liked ? 'Remove from wishlist' : 'Add to wishlist'} className="border border-champagne/60 px-4 hover:border-espresso transition-colors"><Heart size={18} strokeWidth={1.4} className={liked ? 'fill-rose text-rose' : ''} /></button>
          </div>
          <ul className="mt-6 space-y-2 text-sm text-ink/80">
            <li className="flex items-center gap-3"><Check size={16} className="text-gold" /> In stock — ships within 1–2 business days</li>
            <li className="flex items-center gap-3"><Truck size={16} strokeWidth={1.3} className="text-gold" /> Complimentary shipping over $150</li>
            <li className="flex items-center gap-3"><RotateCcw size={16} strokeWidth={1.3} className="text-gold" /> 30-day returns on unopened products</li>
          </ul>
          <div className="mt-8">
            <Accordion defaultOpen={0} items={[
              { q: 'The Fragrance', a: `${p.family} composition. Longevity: ${p.longevity}. Key ingredients: ${p.ingredients.join(', ')}.` },
              { q: 'Shipping Information', a: 'Orders ship within 1–2 business days. Standard delivery in 3–5 business days in the US; international orders arrive in 7–12 days. Orders over $150 ship free.' },
              { q: 'Returns & Refunds', a: 'Unopened bottles may be returned within 30 days for a full refund. Opened fragrances can be exchanged if you are not completely satisfied.' },
              { q: 'Ingredients & Care', a: 'Cruelty-free and vegan-friendly. Store away from direct sunlight and heat. For external use only.' },
            ]} />
          </div>
        </div>
      </div>
    </div>
    <section className="section bg-cream/60" aria-labelledby="rel-h"><div className="container-x">
      <Reveal className="text-center mb-12"><p className="eyebrow">YOU MAY ALSO LOVE</p><span className="rule mt-3 mb-4" /><h2 id="rel-h" className="text-3xl md:text-4xl">Related Fragrances</h2></Reveal>
      <ProductGrid items={related} cols="lg:grid-cols-4" />
    </div></section>
  </>)
}
