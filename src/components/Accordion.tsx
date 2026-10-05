import { useState } from 'react'
import { Plus } from 'lucide-react'
export interface AccItem { q: string; a: string }
export default function Accordion({ items, defaultOpen = -1 }: { items: AccItem[]; defaultOpen?: number }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-t border-champagne/40">
      {items.map((it, i) => {
        const isOpen = open === i
        return (
          <div key={it.q} className="border-b border-champagne/40">
            <h3 className="font-sans">
              <button id={`acc-b-${it.q}`} aria-expanded={isOpen} aria-controls={`acc-p-${i}-${it.q.length}`} onClick={() => setOpen(isOpen ? -1 : i)}
                className="w-full flex items-center justify-between gap-6 py-5 text-left font-serif text-xl text-espresso hover:text-gold transition-colors">
                {it.q}<Plus size={18} strokeWidth={1.3} className={`shrink-0 transition-transform duration-500 ${isOpen ? 'rotate-45' : ''}`} />
              </button>
            </h3>
            <div id={`acc-p-${i}-${it.q.length}`} role="region" className={`grid transition-all duration-500 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden"><p className="pb-6 pr-10 text-sm leading-relaxed text-ink/80">{it.a}</p></div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
