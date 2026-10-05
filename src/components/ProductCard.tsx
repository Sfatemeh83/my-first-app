import { Link } from 'react-router-dom'
import { ArrowRight, Heart } from 'lucide-react'
import type { Product } from '../data/products'
import { fmt } from '../data/products'
import { useStore } from '../context/Store'
import Bottle from './Bottle'

export default function ProductCard({ product: p, large = false }: { product: Product; large?: boolean }) {
  const { wishlist, toggleWish } = useStore()
  const liked = wishlist.includes(p.id)
  return (
    <article className="group relative text-center">
      <button onClick={() => toggleWish(p.id)} aria-pressed={liked} aria-label={liked ? `Remove ${p.name} from wishlist` : `Add ${p.name} to wishlist`}
        className="absolute right-1 top-1 z-10 p-2 text-espresso/60 hover:text-rose transition-colors">
        <Heart size={18} strokeWidth={1.4} className={liked ? 'fill-rose text-rose' : ''} />
      </button>
      {p.badge && <span className="absolute left-1 top-3 z-10 text-[9px] tracking-[0.2em] uppercase text-gold">{p.badge}</span>}
      <Link to={`/product/${p.id}`} className="block" aria-label={`${p.name}, ${fmt(p.price)}`}>
        <div className="mx-auto flex aspect-[448/476] items-center justify-center overflow-hidden">
          <Bottle style={p.style} title={`${p.name} Eau de Parfum`} className="h-full transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-1" />
        </div>
        <h3 className="mt-4 text-[13px] tracking-[0.14em] font-sans font-normal text-espresso">{p.name}</h3>
        <p className="mt-1 text-[13px] text-ink/70">{fmt(p.price)}</p>
      </Link>
      <Link to={`/product/${p.id}`} className="mt-3 inline-flex items-center gap-2 text-[10px] tracking-[0.2em] text-gold transition-all group-hover:gap-3 group-hover:text-espresso">
        SHOP NOW <ArrowRight size={13} />
      </Link>
    </article>
  )
}
