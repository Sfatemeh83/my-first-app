import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import PageHeader from '../components/PageHeader'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import { useStore } from '../context/Store'
export default function Wishlist() {
  const { wishlist, addToCart, toggleWish, setCartOpen } = useStore()
  const items = products.filter(p => wishlist.includes(p.id))
  return (<>
    <Seo title="Wishlist" description="Your saved NEXAWEB fragrances." />
    <PageHeader eyebrow="WISHLIST" title="Your Favourites" subtitle={items.length ? `${items.length} saved fragrance${items.length > 1 ? 's' : ''}` : undefined} />
    <section className="section container-x">
      {items.length === 0 ? (
        <div className="text-center py-10"><p className="font-serif text-3xl text-espresso">Your wishlist is empty</p><p className="text-sm text-ink/70 mt-2 mb-6">Tap the heart on any fragrance to save it here.</p><Link to="/collection" className="btn-dark">Explore collection</Link></div>
      ) : (<>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 sm:gap-x-6 gap-y-12">
          {items.map(p => (
            <div key={p.id}><ProductCard product={p} />
              <button className="btn-line w-full mt-4 !px-3" onClick={() => { addToCart(p.id); toggleWish(p.id) }}>Move to bag</button></div>
          ))}
        </div>
        <div className="text-center mt-14"><button className="btn-dark" onClick={() => { items.forEach(p => addToCart(p.id)); setCartOpen(true) }}>Add all to bag</button></div>
      </>)}
    </section>
  </>)
}
