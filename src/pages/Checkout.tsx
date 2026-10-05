import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import Seo from '../components/Seo'
import PageHeader from '../components/PageHeader'
import { Totals } from '../components/Bag'
import { fmt, priceFor, products } from '../data/products'
import { useStore } from '../context/Store'

const fields: [string, string, string, string?][] = [
  ['email', 'Email', 'email', 'email'], ['name', 'Full name', 'text', 'name'], ['address', 'Address', 'text', 'street-address'],
  ['city', 'City', 'text', 'address-level2'], ['zip', 'Postal code', 'text', 'postal-code'],
  ['card', 'Card number', 'text', 'cc-number'], ['exp', 'Expiry (MM/YY)', 'text', 'cc-exp'], ['cvc', 'CVC', 'text', 'cc-csc'],
]
export default function Checkout() {
  const { cart, clearCart } = useStore()
  const [v, setV] = useState<Record<string, string>>({}); const [err, setErr] = useState<Record<string, string>>({})
  const [order, setOrder] = useState(''); const [busy, setBusy] = useState(false)
  const submit = (e: FormEvent) => {
    e.preventDefault(); const n: Record<string, string> = {}
    fields.forEach(([k, l]) => { if (!(v[k] ?? '').trim()) n[k] = `${l} is required.` })
    if (v.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email)) n.email = 'Enter a valid email.'
    if (v.card && v.card.replace(/\s/g, '').length < 12) n.card = 'Enter a valid card number.'
    setErr(n); if (Object.keys(n).length) return
    setBusy(true); setTimeout(() => { setOrder('NX-' + Math.floor(100000 + Math.random() * 900000)); clearCart(); setBusy(false) }, 1200)
  }
  if (order) return (<>
    <Seo title="Order confirmed" description="Thank you for your NEXAWEB order." />
    <div className="container-x pt-44 pb-32 text-center animate-fadeUp" role="status">
      <CheckCircle2 size={48} strokeWidth={1} className="mx-auto text-gold" />
      <h1 className="mt-5 text-4xl md:text-5xl">Thank you for your order</h1>
      <p className="mt-3 text-ink/75">Order <strong className="font-medium">{order}</strong> is confirmed. A confirmation email is on its way.</p>
      <p className="mt-1 text-xs text-ink/50">(Demo checkout — no payment was taken.)</p>
      <Link to="/collection" className="btn-dark mt-8">Continue shopping</Link>
    </div></>)
  if (!cart.length) return (<>
    <Seo title="Checkout" description="Complete your NEXAWEB order." />
    <div className="container-x pt-44 pb-32 text-center"><h1 className="text-4xl">Your bag is empty</h1><Link to="/collection" className="btn-dark mt-8">Explore collection</Link></div></>)
  return (<>
    <Seo title="Checkout" description="Complete your NEXAWEB order." />
    <PageHeader eyebrow="SECURE CHECKOUT" title="Checkout" />
    <section className="section container-x grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20">
      <form onSubmit={submit} noValidate className="grid sm:grid-cols-2 gap-x-6 gap-y-6 content-start">
        <h2 className="sm:col-span-2 text-2xl">Contact, delivery & payment</h2>
        {fields.map(([k, l, t, ac]) => (
          <div key={k} className={['email', 'address', 'card'].includes(k) ? 'sm:col-span-2' : ''}>
            <label htmlFor={`k-${k}`} className="text-[11px] tracking-[0.2em] uppercase text-ink/70">{l}</label>
            <input id={`k-${k}`} type={t} autoComplete={ac} value={v[k] ?? ''} onChange={e => setV({ ...v, [k]: e.target.value })} aria-invalid={!!err[k]} className="field" />
            {err[k] && <p role="alert" className="mt-1 text-xs text-[#a14b45]">{err[k]}</p>}
          </div>
        ))}
        <button className="btn-dark sm:col-span-2 mt-2" disabled={busy}>{busy ? 'Processing…' : 'Place order'}</button>
      </form>
      <aside className="bg-cream/60 p-6 md:p-8 self-start space-y-5">
        <h2 className="text-2xl">Your Order</h2>
        <ul className="space-y-3 text-sm">{cart.map(l => { const p = products.find(x => x.id === l.id)!; return <li key={l.id + l.ml} className="flex justify-between gap-4"><span>{p.name} <span className="text-ink/60">· {l.ml}ml × {l.qty}</span></span><span>{fmt(priceFor(p, l.ml) * l.qty)}</span></li> })}</ul>
        <div className="border-t border-champagne/40 pt-4"><Totals /></div>
      </aside>
    </section>
  </>)
}
