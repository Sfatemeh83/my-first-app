import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Newsletter from './components/Newsletter'
import MobileMenu from './components/MobileMenu'
import CartDrawer from './components/CartDrawer'
import SearchOverlay from './components/SearchOverlay'
import Toasts from './components/Toasts'
import Home from './pages/Home'
import About from './pages/About'
import Collection from './pages/Collection'
import ProductPage from './pages/ProductPage'
import Ingredients from './pages/Ingredients'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import Checkout from './pages/Checkout'
import NotFound from './pages/NotFound'

export default function App() {
  const { pathname } = useLocation()
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-espresso focus:text-ivory focus:px-4 focus:py-2">Skip to content</a>
      <Navbar /><MobileMenu /><CartDrawer /><SearchOverlay />
      <main id="main" key={pathname} className="animate-fadeIn">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Newsletter /><Footer /><Toasts />
    </>
  )
}
