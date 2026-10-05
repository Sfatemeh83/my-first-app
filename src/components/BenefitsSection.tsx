import { Leaf, Gem, Heart, FlaskConical } from 'lucide-react'
import Reveal from './Reveal'
const items = [
  { Icon: Leaf, t: 'Premium Ingredients', d: 'We source the finest natural ingredients from around the world.' },
  { Icon: FlaskConical, t: 'Long Lasting', d: 'Our fragrances are crafted to last all day and leave a memorable trail.' },
  { Icon: Gem, t: 'Luxury Experience', d: 'Elegant packaging and premium quality for a truly luxurious feel.' },
  { Icon: Heart, t: 'Cruelty Free', d: "We never test on animals. Beauty that's ethical and responsible." },
]
export default function BenefitsSection() {
  return (
    <section className="section bg-ivory" aria-labelledby="why-h">
      <div className="container-x">
        <Reveal><h2 id="why-h" className="text-center font-sans text-[13px] tracking-[0.22em] font-normal uppercase">Why Choose NEXAWEB</h2></Reveal>
        <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10">
          {items.map(({ Icon, t, d }, i) => (
            <Reveal as="li" key={t} delay={i * 90} className={`text-center px-8 ${i > 0 ? 'lg:border-l border-champagne/40' : ''}`}>
              <Icon size={30} strokeWidth={0.9} className="mx-auto text-gold" />
              <h3 className="mt-4 font-sans text-[13px] tracking-[0.04em] font-medium text-espresso">{t}</h3>
              <p className="mt-2 mx-auto max-w-[220px] text-[13px] leading-relaxed text-ink/75">{d}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
