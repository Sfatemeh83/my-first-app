import { useState, type FormEvent } from 'react'
import { Clock, Mail, MapPin, Phone, CheckCircle2 } from 'lucide-react'
import Seo from '../components/Seo'
import PageHeader from '../components/PageHeader'

type F = { name: string; email: string; subject: string; message: string }
export default function Contact() {
  const [f, setF] = useState<F>({ name: '', email: '', subject: '', message: '' })
  const [err, setErr] = useState<Partial<F>>({}); const [sent, setSent] = useState(false); const [busy, setBusy] = useState(false)
  const set = (k: keyof F) => (e: { target: { value: string } }) => setF({ ...f, [k]: e.target.value })
  const submit = (e: FormEvent) => {
    e.preventDefault()
    const n: Partial<F> = {}
    if (f.name.trim().length < 2) n.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email)) n.email = 'Please enter a valid email.'
    if (!f.subject.trim()) n.subject = 'Please add a subject.'
    if (f.message.trim().length < 10) n.message = 'Message should be at least 10 characters.'
    setErr(n); if (Object.keys(n).length) return
    setBusy(true); setTimeout(() => { setBusy(false); setSent(true) }, 900)
  }
  const fld = (k: keyof F, label: string, type = 'text') => (
    <div>
      <label htmlFor={`c-${k}`} className="text-[11px] tracking-[0.2em] uppercase text-ink/70">{label}</label>
      {k === 'message'
        ? <textarea id="c-message" rows={5} value={f[k]} onChange={set(k)} aria-invalid={!!err[k]} aria-describedby={err[k] ? `e-${k}` : undefined} className="field resize-none" />
        : <input id={`c-${k}`} type={type} value={f[k]} onChange={set(k)} aria-invalid={!!err[k]} aria-describedby={err[k] ? `e-${k}` : undefined} className="field" />}
      {err[k] && <p id={`e-${k}`} role="alert" className="mt-1 text-xs text-[#a14b45]">{err[k]}</p>}
    </div>
  )
  const info = [[Phone, 'Phone', '+1 (234) 567-8900'], [Mail, 'Email', 'hello@nexaweb.com'], [MapPin, 'Address', '123 Fragrance Lane, New York, NY 10001'], [Clock, 'Business hours', 'Mon–Fri 9am–6pm · Sat 10am–4pm EST']] as const
  return (<>
    <Seo title="Contact" description="Contact NEXAWEB Perfume — we would love to hear from you." />
    <PageHeader eyebrow="CONTACT" title="We'd love to hear from you" subtitle="Questions about a scent, an order or a gift? Our fragrance advisors are here to help." />
    <section className="section container-x grid lg:grid-cols-[1.3fr_1fr] gap-14 lg:gap-24">
      {sent ? (
        <div className="text-center py-16 animate-fadeUp" role="status">
          <CheckCircle2 size={44} strokeWidth={1} className="mx-auto text-gold" />
          <h2 className="mt-5 text-3xl md:text-4xl">Thank you, {f.name.split(' ')[0]}</h2>
          <p className="mt-3 text-ink/75 max-w-sm mx-auto">Your message has been received. A member of our team will reply within one business day.</p>
          <button className="btn-line mt-8" onClick={() => { setSent(false); setF({ name: '', email: '', subject: '', message: '' }) }}>Send another message</button>
        </div>
      ) : (
        <form onSubmit={submit} noValidate className="space-y-7">
          <div className="grid sm:grid-cols-2 gap-7">{fld('name', 'Name')}{fld('email', 'Email', 'email')}</div>
          {fld('subject', 'Subject')}{fld('message', 'Message')}
          <button className="btn-dark" disabled={busy}>{busy ? 'Sending…' : 'Send Message'}</button>
        </form>
      )}
      <aside className="space-y-7 lg:border-l lg:border-champagne/40 lg:pl-14">
        {info.map(([Icon, t, v]) => (
          <div key={t} className="flex gap-4"><Icon size={20} strokeWidth={1.1} className="text-gold mt-1 shrink-0" /><div><p className="text-[11px] tracking-[0.2em] uppercase text-gold">{t}</p><p className="mt-1 text-[15px]">{v}</p></div></div>
        ))}
      </aside>
    </section>
  </>)
}
