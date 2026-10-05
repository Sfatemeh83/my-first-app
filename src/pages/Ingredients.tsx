import Seo from '../components/Seo'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import Scene, { Flower } from '../components/Scene'
import { ingredients } from '../data/ingredients'

export function IngredientArt({ tint, accent, i }: { tint: string; accent: string; i: number }) {
  return (
    <div className="relative w-full h-full overflow-hidden" style={{ background: `radial-gradient(circle at 35% 30%, #fff8 0%, ${tint} 60%, ${accent}55 100%)` }} aria-hidden="true">
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
        {Array.from({ length: 7 }).map((_, k) => <ellipse key={k} cx="50" cy="32" rx={9 + (i % 3) * 2} ry="24" fill={accent} fillOpacity=".28" transform={`rotate(${k * 51 + i * 12} 50 55)`} />)}
        <circle cx="50" cy="55" r="9" fill={accent} fillOpacity=".55" />
      </svg>
    </div>
  )
}
export default function Ingredients() {
  return (<>
    <Seo title="Ingredients" description="Discover the rare, responsibly sourced ingredients behind every NEXAWEB fragrance." />
    <PageHeader eyebrow="INGREDIENTS" title="Rare Materials, Rare Moments" subtitle="Every fragrance begins with exceptional raw materials, sourced from the world's most celebrated growers." />
    <section className="section container-x space-y-16 md:space-y-24">
      {ingredients.map((g, i) => (
        <Reveal key={g.name} className={`grid md:grid-cols-12 gap-8 md:gap-14 items-center`}>
          <div className={`md:col-span-5 aspect-[4/5] ${i % 2 ? 'md:order-2 md:col-start-8' : ''}`}><IngredientArt tint={g.tint} accent={g.accent} i={i} /></div>
          <div className={`md:col-span-6 ${i % 2 ? 'md:order-1 md:col-start-1' : 'md:col-start-7'}`}>
            <p className="eyebrow">N° {String(i + 1).padStart(2, '0')}</p>
            <h2 className="mt-3 text-4xl md:text-5xl">{g.name}</h2>
            <p className="mt-5 text-[15px] leading-[1.8] text-ink/85 max-w-md">{g.description}</p>
            <dl className="mt-6 grid grid-cols-2 gap-6 max-w-md border-t border-champagne/40 pt-5 text-sm">
              <div><dt className="text-[10px] tracking-[0.2em] uppercase text-gold">Origin</dt><dd className="mt-1">{g.origin}</dd></div>
              <div><dt className="text-[10px] tracking-[0.2em] uppercase text-gold">Character</dt><dd className="mt-1">{g.notes}</dd></div>
            </dl>
          </div>
        </Reveal>
      ))}
    </section>
  </>)
}
