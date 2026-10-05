import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Heart, Menu, Search, ShoppingBag } from 'lucide-react'
import Logo from './Logo'
import { useStore } from '../context/Store'

export const navLinks = [
  { to: '/', label: 'HOME' }, { to: '/about', label: 'ABOUT' }, { to: '/collection', label: 'COLLECTION' },
  { to: '/ingredients', label: 'INGREDIENTS' }, { to: '/contact', label: 'CONTACT' },
]

export default function Navbar() {
  const { count, wishlist, setCartOpen, setSearchOpen, setMenuOpen } = useStore()
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24)
    on(); window.addEventListener('scroll', on, { passive: true }); return () => window.removeEventListener('scroll', on)
  }, [])
  const icon = 'relative p-2 text-espresso transition-colors hover:text-gold'
  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${scrolled ? 'bg-ivory/90 backdrop-blur-md shadow-[0_1px_0_rgba(196,160,106,.3)] py-2' : 'bg-ivory/70 backdrop-blur-[2px] py-4'}`}>
      <div className="container-x grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr] items-center gap-4">
        <div className="justify-self-start"><Logo /></div>
        <nav aria-label="Primary" className="hidden lg:flex items-center gap-10">
          {navLinks.map(l => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'}
              className={({ isActive }) => `group relative py-2 text-[11px] tracking-[0.2em] transition-colors ${isActive ? 'text-espresso' : 'text-ink/80 hover:text-espresso'}`}>
              {({ isActive }) => (<>{l.label}<span className={`absolute left-0 -bottom-0.5 h-px bg-champagne transition-all duration-500 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} /></>)}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center justify-self-end col-start-3 -mr-2">
          <button className={icon} onClick={() => setSearchOpen(true)} aria-label="Search"><Search size={19} strokeWidth={1.4} /></button>
          <Link to="/wishlist" className={`${icon} hidden sm:block`} aria-label={`Wishlist, ${wishlist.length} items`}>
            <Heart size={19} strokeWidth={1.4} />
            {wishlist.length > 0 && <span className="absolute top-0.5 right-0 h-3.5 min-w-3.5 px-1 rounded-full bg-rose text-[8px] text-white grid place-items-center">{wishlist.length}</span>}
          </Link>
          <button className={icon} onClick={() => setCartOpen(true)} aria-label={`Shopping bag, ${count} items`}>
            <ShoppingBag size={19} strokeWidth={1.4} />
            {count > 0 && <span className="absolute top-0.5 right-0 h-3.5 min-w-3.5 px-1 rounded-full bg-gold text-[8px] text-white grid place-items-center">{count}</span>}
          </button>
          <button className={`${icon} lg:hidden`} onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu size={22} strokeWidth={1.4} /></button>
        </div>
      </div>
    </header>
  )
}
