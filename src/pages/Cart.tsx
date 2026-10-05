import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import PageHeader from '../components/PageHeader'
import { CartLines, Totals } from '../components/Bag'
import { useStore } from '../context/Store'
export default function Cart() {
  const { cart } = useStore()
  return (<>
    <Seo title="Shopping Bag" description="Review the items in your NEXAWEB shopping bag." />
    <PageHeader eyebrow="YOUR BAG" title="Shopping Bag" />
    <section className="section container-x grid lg:grid-cols-[1.6fr_1fr] gap-12 lg:gap-20">
      <CartLines />
      {cart.length > 0 && (
        <aside className="bg-cream/60 p-6 md:p-8 self-start space-y-5">
          <h2 className="text-2xl">Order Summary</h2><Totals />
          <Link to="/checkout" className="btn-dark w-full">Proceed to checkout</Link>
          <Link to="/collection" className="block text-center text-[11px] tracking-[0.2em] uppercase text-ink/70 hover:text-espresso">Continue shopping</Link>
        </aside>
      )}
    </section>
  </>)
}
