import { useEffect, useState } from 'react'
import { products as all, type Product } from '../data/products'
import ProductCard from './ProductCard'
import Reveal from './Reveal'

export function GridSkeleton({ n = 5 }: { n?: number }) {
  return <>{Array.from({ length: n }).map((_, i) => <div key={i} aria-hidden="true"><div className="skeleton aspect-[4/5]" /><div className="skeleton h-3 w-24 mx-auto mt-4" /><div className="skeleton h-3 w-12 mx-auto mt-2" /></div>)}</>
}
export default function ProductGrid({ items = all, cols = 'lg:grid-cols-5' }: { items?: Product[]; cols?: string }) {
  const [loading, setLoading] = useState(true)
  useEffect(() => { const t = setTimeout(() => setLoading(false), 450); return () => clearTimeout(t) }, [])
  return (
    <div className={`grid grid-cols-2 sm:grid-cols-3 ${cols} gap-x-4 sm:gap-x-6 gap-y-12`}>
      {loading ? <GridSkeleton n={items.length} /> : items.map((p, i) => <Reveal key={p.id} delay={i * 80}><ProductCard product={p} /></Reveal>)}
    </div>
  )
}
