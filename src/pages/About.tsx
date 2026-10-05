import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import Scene, { Flower, Sprig } from '../components/Scene'
import Bottle from '../components/Bottle'
import { SilkScene } from '../components/StorySection'
import { IngredientArt } from './Ingredients'

const blocks = [
  { id: 'story', eyebrow: 'BRAND STORY', title: 'Born from a love of memory', text: "NEXAWEB began in a small atelier with a simple belief: a fragrance is an expression of who you are. Today, we still compose every scent by hand, pairing rare ingredients with timeless technique to bring luxury to every spray.", art: 'silk' },
  { id: 'philosophy', eyebrow: 'PHILOSOPHY', title: 'Less, but better', text: 'We design with restraint. Fewer notes, finer materials, quiet confidence. Our perfumes are made to be worn, remembered and returned to — never to shout.', art: 'bottle' },
  { id: 'craft', eyebrow: 'CRAFTSMANSHIP', title: 'Composed by hand, aged with patience', text: 'Each formula is macerated for weeks, filtered and rested before it reaches its bottle. Our glass is hand-finished and every label is applied by an artisan.', art: 'flower' },
  { id: 'ingredients', eyebrow: 'INGREDIENTS', title: 'Sourced at the source', text: 'From Bulgarian rose to Mysore sandalwood, we work directly with growers who share our respect for the land and the craft.', art: 'ing' },
  { id: 'sustain', eyebrow: 'SUSTAINABILITY', title: 'Beauty that is responsible', text: 'Cruelty-free and always will be. Our cartons are FSC-certified, our glass is refillable and our ingredients are traceable from field to flacon.', art: 'sprig' },
  { id: 'experience', eyebrow: 'LUXURY EXPERIENCE', title: 'An unboxing worth savouring', text: 'From the weight of the cap to the tissue-wrapped box, every detail is considered so that opening a NEXAWEB bottle feels like a ritual.', art: 'bottle2' },
] as const

function Art({ k, i }: { k: string; i: number }) {
  if (k === 'silk') return <SilkScene className="w-full h-full min-h-[320px]" />
  if (k === 'ing') return <IngredientArt tint="#E9BFB4" accent="#B5667A" i={i} />
  return (
    <Scene tone={k === 'bottle2' ? 'dark' : k === 'sprig' ? 'cream' : 'blush'} className="w-full h-full min-h-[320px] grid place-items-center">
      {k === 'flower' && <Flower size={200} className="absolute -left-10 bottom-0" />}
      {k === 'sprig' && <Sprig className="absolute left-8 bottom-0 h-64 opacity-80" />}
      <Bottle style={k === 'bottle2' ? 'oud' : k === 'sprig' ? 'blanc' : 'belle'} className="h-[75%] relative drop-shadow-[0_24px_20px_rgba(60,30,20,.3)]" title="NEXAWEB perfume bottle" />
    </Scene>
  )
}
export default function About() {
  return (<>
    <Seo title="About" description="The story, philosophy and craftsmanship behind NEXAWEB Perfume." />
    <PageHeader eyebrow="ABOUT NEXAWEB" title="The Art of Fine Fragrance" subtitle="Luxury in every spray, crafted with intention." />
    <div className="container-x section space-y-16 md:space-y-28">
      {blocks.map((b, i) => (
        <Reveal key={b.id} className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div id={b.id} className={`aspect-[5/4] ${i % 2 ? 'md:order-2' : ''}`}><Art k={b.art} i={i} /></div>
          <div className="max-w-md">
            <p className="eyebrow">{b.eyebrow}</p>
            <h2 className="mt-4 text-3xl md:text-[42px] leading-tight">{b.title}</h2>
            <p className="mt-5 text-[15px] leading-[1.85] text-ink/85">{b.text}</p>
          </div>
        </Reveal>
      ))}
      <div className="text-center"><Link to="/collection" className="btn-dark">Discover the collection</Link></div>
    </div>
  </>)
}
