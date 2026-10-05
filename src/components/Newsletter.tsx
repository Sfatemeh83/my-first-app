import { useState, type FormEvent } from 'react'
import { Flower } from './Scene'
import { useStore } from '../context/Store'

export default function Newsletter() {
  const { notify } = useStore()
  const [email, setEmail] = useState(''); const [err, setErr] = useState(''); const [done, setDone] = useState(false)
  const submit = (e: FormEvent) => {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) { setErr('Please enter a valid email address.'); return }
    setErr(''); setDone(true); setEmail(''); notify('Thank you — you are now subscribed')
  }
  return (
    <section className="relative overflow-hidden bg-espresso text-ivory" aria-labelledby="nl-h">
      <div className="absolute inset-0 pointer-events-none opacity-40" aria-hidden="true">
        <Flower size={420} color="#7A3340" className="absolute -left-24 -top-20 rotate-12" />
        <Flower size={520} color="#5E2A33" className="absolute -right-32 -bottom-40 -rotate-12" />
        <Flower size={260} color="#8A4350" className="absolute right-1/4 -top-24 hidden md:block" />
      </div>
      <div className="relative container-x py-16 md:py-20 text-center">
        <h2 id="nl-h" className="text-3xl sm:text-4xl md:text-5xl text-ivory">Stay in the Scent of Luxury</h2>
        <p className="mt-3 text-sm text-ivory/75">Subscribe to get exclusive offers, new arrivals and scent stories.</p>
        {done ? <p className="mt-8 font-serif text-2xl text-champagne animate-fadeUp">Welcome to NEXAWEB. Your first scent story is on its way.</p> : (
          <form onSubmit={submit} noValidate className="mt-8 mx-auto flex max-w-xl flex-col sm:flex-row">
            <label htmlFor="nl-email" className="sr-only">Email address</label>
            <input id="nl-email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" aria-invalid={!!err} aria-describedby={err ? 'nl-err' : undefined}
              className="flex-1 bg-espresso/70 border border-ivory/20 px-5 py-4 text-sm text-ivory placeholder:text-ivory/50 outline-none focus:border-champagne" />
            <button type="submit" className="btn-gold">SUBSCRIBE</button>
          </form>
        )}
        {err && <p id="nl-err" role="alert" className="mt-3 text-sm text-blush">{err}</p>}
      </div>
    </section>
  )
}
