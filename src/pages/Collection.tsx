import { useMemo, useState } from 'react'
import Seo from '../components/Seo'
import PageHeader from '../components/PageHeader'
import ProductGrid from '../components/ProductGrid'
import { products } from '../data/products'

const families = ['All', ...Array.from(new Set(products.map(p => p.family)))]
export default function Collection() {
  const [f, setF] = useState('All'); const [sort, setSort] = useState('featured')
  const items = useMemo(() => {
    const l = products.filter(p => f === 'All' || p.family === f)
    return sort === 'low' ? [...l].sort((a, b) => a.price - b.price) : sort === 'high' ? [...l].sort((a, b) => b.price - a.price) : l
  }, [f, sort])
  return (<>
    <Seo title="Collection" description="Explore the NEXAWEB collection of handcrafted luxury eau de parfum." />
    <PageHeader eyebrow="OUR COLLECTION" title="Find Your Signature Scent" subtitle="Handcrafted fragrances for every mood and moment." />
    <section className="section container-x">
      <div className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by fragrance family">
          {families.map(x => <button key={x} aria-pressed={f === x} onClick={() => setF(x)} className={`px-4 py-2 text-[11px] tracking-[0.16em] uppercase border transition-colors ${f === x ? 'bg-espresso text-ivory border-espresso' : 'border-champagne/50 hover:border-espresso'}`}>{x}</button>)}
        </div>
        <label className="text-xs text-ink/70 flex items-center gap-3">Sort
          <select value={sort} onChange={e => setSort(e.target.value)} className="bg-transparent border-b border-espresso/30 py-1 text-sm outline-none focus:border-gold">
            <option value="featured">Featured</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option>
          </select>
        </label>
      </div>
      <ProductGrid key={f + sort} items={items} />
    </section>
  </>)
}
