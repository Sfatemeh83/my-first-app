import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { products, priceFor } from '../data/products'

export interface CartLine { id: string; ml: number; qty: number }
interface Toast { id: number; msg: string }
interface StoreCtx {
  cart: CartLine[]; wishlist: string[]; toasts: Toast[]
  cartOpen: boolean; searchOpen: boolean; menuOpen: boolean
  setCartOpen: (b: boolean) => void; setSearchOpen: (b: boolean) => void; setMenuOpen: (b: boolean) => void
  addToCart: (id: string, ml?: number, qty?: number) => void
  setQty: (id: string, ml: number, qty: number) => void
  removeLine: (id: string, ml: number) => void
  clearCart: () => void
  toggleWish: (id: string) => void
  notify: (msg: string) => void
  count: number; subtotal: number; shipping: number; total: number
}
const Ctx = createContext<StoreCtx>(null!)
export const useStore = () => useContext(Ctx)

function load<T>(key: string, fallback: T): T {
  try { const v = localStorage.getItem(key); return v ? (JSON.parse(v) as T) : fallback } catch { return fallback }
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>(() => load('nx-cart', []))
  const [wishlist, setWishlist] = useState<string[]>(() => load('nx-wish', []))
  const [toasts, setToasts] = useState<Toast[]>([])
  const [cartOpen, setCartOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => localStorage.setItem('nx-cart', JSON.stringify(cart)), [cart])
  useEffect(() => localStorage.setItem('nx-wish', JSON.stringify(wishlist)), [wishlist])

  const notify = useCallback((msg: string) => {
    const id = Date.now() + Math.random()
    setToasts(t => [...t, { id, msg }])
    setTimeout(() => setToasts(t => t.filter(x => x.id !== id)), 3200)
  }, [])

  const addToCart = useCallback((id: string, ml = 50, qty = 1) => {
    setCart(c => c.some(l => l.id === id && l.ml === ml)
      ? c.map(l => (l.id === id && l.ml === ml ? { ...l, qty: Math.min(l.qty + qty, 10) } : l))
      : [...c, { id, ml, qty }])
    notify(`${products.find(p => p.id === id)?.name ?? 'Item'} added to your bag`)
  }, [notify])
  const setQty = useCallback((id: string, ml: number, qty: number) =>
    setCart(c => c.map(l => (l.id === id && l.ml === ml ? { ...l, qty: Math.max(1, Math.min(qty, 10)) } : l))), [])
  const removeLine = useCallback((id: string, ml: number) => setCart(c => c.filter(l => !(l.id === id && l.ml === ml))), [])
  const clearCart = useCallback(() => setCart([]), [])
  const toggleWish = useCallback((id: string) => {
    setWishlist(w => {
      const has = w.includes(id)
      notify(has ? 'Removed from wishlist' : 'Saved to your wishlist')
      return has ? w.filter(x => x !== id) : [...w, id]
    })
  }, [notify])

  const value = useMemo(() => {
    const count = cart.reduce((n, l) => n + l.qty, 0)
    const subtotal = cart.reduce((n, l) => { const p = products.find(x => x.id === l.id); return n + (p ? priceFor(p, l.ml) * l.qty : 0) }, 0)
    const shipping = subtotal === 0 || subtotal >= 150 ? 0 : 8
    return { cart, wishlist, toasts, cartOpen, searchOpen, menuOpen, setCartOpen, setSearchOpen, setMenuOpen,
      addToCart, setQty, removeLine, clearCart, toggleWish, notify, count, subtotal, shipping, total: subtotal + shipping }
  }, [cart, wishlist, toasts, cartOpen, searchOpen, menuOpen, addToCart, setQty, removeLine, clearCart, toggleWish, notify])

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}
