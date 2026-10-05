import { Link } from 'react-router-dom'
import { Facebook, Instagram, MapPin, Mail, Phone } from 'lucide-react'
import Logo from './Logo'

const TikTok = () => <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true"><path d="M16.6 3c.3 2.3 1.7 3.8 4 4v3a7 7 0 0 1-4-1.3v6.2a5.9 5.9 0 1 1-5.9-5.9c.3 0 .6 0 .9.1v3.1a2.9 2.9 0 1 0 2 2.7V3h3z" /></svg>
const Pinterest = () => <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.6 19.3c-.1-.8-.2-2 0-2.9l1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.4 1.8-2.4.9 0 1.300.6 1.300 1.400 0 .9-.5 2.100-.8 3.300-.2 1 .5 1.800 1.500 1.800 1.800 0 3.200-1.900 3.200-4.600 0-2.400-1.700-4.100-4.200-4.100-2.800 0-4.500 2.100-4.500 4.300 0 .9.300 1.800.7 2.300l-.3 1.200c0 .2-.2.2-.4.100-1.200-.6-2-2.400-2-3.800 0-3.100 2.300-6 6.500-6 3.400 0 6.100 2.400 6.100 5.700 0 3.400-2.100 6.100-5.100 6.100-1 0-1.900-.5-2.200-1.100l-.6 2.300c-.2.900-.8 2-1.200 2.600A10 10 0 1 0 12 2z" /></svg>

const cols = [
  { h: 'QUICK LINKS', l: [['Home', '/'], ['About', '/about'], ['Collection', '/collection'], ['Ingredients', '/ingredients'], ['Contact', '/contact']] },
  { h: 'CUSTOMER CARE', l: [['FAQ', '/faq'], ['Shopping & Delivery', '/faq'], ['Returns & Refunds', '/faq'], ['Terms & Conditions', '/faq'], ['Privacy Policy', '/faq']] },
  { h: 'HELP', l: [['Track Your Order', '/faq'], ['My Account', '/checkout'], ['Wishlist', '/wishlist'], ['Store Locator', '/contact']] },
]
export default function Footer() {
  const social = [[Instagram, 'Instagram'], [Facebook, 'Facebook'], [TikTok, 'TikTok'], [Pinterest, 'Pinterest']] as const
  return (
    <footer className="bg-[#16100d] text-ivory/80">
      <div className="container-x pt-16 pb-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.3fr]">
          <div>
            <Logo light />
            <p className="mt-5 max-w-[260px] text-[13px] leading-relaxed text-ivory/65">Luxury fragrances crafted to elevate your everyday and inspire unforgettable moments.</p>
            <div className="mt-6 flex gap-3">
              {social.map(([Icon, name]) => (
                <a key={name} href="#" onClick={e => e.preventDefault()} aria-label={name} className="grid h-9 w-9 place-items-center rounded-full border border-ivory/25 transition-colors hover:border-champagne hover:text-champagne"><Icon size={15} /></a>
              ))}
            </div>
          </div>
          {cols.map(c => (
            <nav key={c.h} aria-label={c.h}>
              <h3 className="font-sans text-[11px] tracking-[0.2em] text-ivory">{c.h}</h3>
              <ul className="mt-5 space-y-3 text-[13px]">{c.l.map(([t, to]) => <li key={t}><Link to={to} className="text-ivory/65 transition-colors hover:text-champagne">{t}</Link></li>)}</ul>
            </nav>
          ))}
          <div>
            <h3 className="font-sans text-[11px] tracking-[0.2em] text-ivory">CONTACT US</h3>
            <ul className="mt-5 space-y-4 text-[13px] text-ivory/65">
              <li className="flex gap-3"><Phone size={16} strokeWidth={1.3} className="mt-0.5 shrink-0" /><a href="tel:+12345678900" className="hover:text-champagne">+1 (234) 567-8900</a></li>
              <li className="flex gap-3"><Mail size={16} strokeWidth={1.3} className="mt-0.5 shrink-0" /><a href="mailto:hello@nexaweb.com" className="hover:text-champagne">hello@nexaweb.com</a></li>
              <li className="flex gap-3"><MapPin size={16} strokeWidth={1.3} className="mt-0.5 shrink-0" /><address className="not-italic">123 Fragrance Lane<br />New York, NY 10001</address></li>
            </ul>
          </div>
        </div>
        <p className="mt-14 border-t border-ivory/10 pt-6 text-center text-xs text-ivory/50">© 2025 NEXAWEB Perfume. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
