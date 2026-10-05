import { useState, type FormEvent } from 'react'
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
    <section className="relative overflow-hidden bg-[#2a1517] text-ivory" aria-labelledby="nl-h">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <img src="/img/news-left.jpg" alt="" loading="lazy" className="absolute left-0 top-0 h-full w-[48%] object-cover opacity-90 [mask-image:linear-gradient(to_right,#000_40%,transparent)]" />
        <img src="/img/news-right.jpg" alt="" loading="lazy" className="absolute right-0 top-0 h-full w-[48%] object-cover opacity-90 [mask-image:linear-gradient(to_left,#000_40%,transparent)]" />
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
