import { Link, NavLink, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Heart, X } from 'lucide-react'
import Logo from './Logo'
import { navLinks } from './Navbar'
import { useStore } from '../context/Store'

export default function MobileMenu() {
  const { menuOpen, setMenuOpen, wishlist } = useStore()
  const { pathname } = useLocation()
  useEffect(() => setMenuOpen(false), [pathname, setMenuOpen])
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    const k = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k)
  }, [menuOpen, setMenuOpen])
  if (!menuOpen) return null
  return (
    <div className="fixed inset-0 z-50 bg-ivory animate-slideDown flex flex-col" role="dialog" aria-modal="true" aria-label="Menu">
      <div className="flex items-center justify-between px-5 py-4">
        <Logo onClick={() => setMenuOpen(false)} />
        <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="p-2"><X size={24} strokeWidth={1.3} /></button>
      </div>
      <nav className="flex-1 flex flex-col justify-center px-8 gap-1" aria-label="Mobile">
        {navLinks.map((l, i) => (
          <NavLink key={l.to} to={l.to} end={l.to === '/'} style={{ animationDelay: `${i * 70}ms` }}
            className={({ isActive }) => `animate-fadeUp font-serif text-4xl py-3 border-b border-champagne/30 ${isActive ? 'text-gold' : 'text-espresso'}`}>
            {l.label[0] + l.label.slice(1).toLowerCase()}
          </NavLink>
        ))}
      </nav>
      <div className="px-8 py-8 flex items-center justify-between text-[11px] tracking-[0.2em] text-ink/70">
        <Link to="/wishlist" className="flex items-center gap-2"><Heart size={16} strokeWidth={1.4} /> WISHLIST ({wishlist.length})</Link>
        <Link to="/faq">FAQ</Link>
      </div>
    </div>
  )
}
