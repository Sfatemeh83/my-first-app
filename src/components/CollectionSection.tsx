import ProductGrid from './ProductGrid'
import Reveal from './Reveal'
export default function CollectionSection() {
  return (
    <section className="section bg-ivory" aria-labelledby="col-h">
      <div className="container-x">
        <Reveal className="text-center mb-12 md:mb-16">
          <p className="eyebrow">OUR COLLECTION</p><span className="rule mt-3 mb-5" />
          <h2 id="col-h" className="text-3xl sm:text-4xl md:text-5xl">Find Your Signature Scent</h2>
          <p className="mt-4 text-sm text-ink/75">Handcrafted fragrances for every mood and moment.</p>
        </Reveal>
        <ProductGrid />
      </div>
    </section>
  )
}
