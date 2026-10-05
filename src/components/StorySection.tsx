import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Scene, { Flower, Sprig } from './Scene'
import Bottle from './Bottle'
import Reveal from './Reveal'

export function SilkScene({ className = 'min-h-[360px] md:min-h-[460px]' }: { className?: string }) {
  return (
    <Scene tone="rose" className={className}>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <path d="M-20 220 C80 120 160 260 260 150 S380 80 430 130 L430 320 L-20 320Z" fill="#F7E1D6" opacity=".7" />
        <path d="M-20 260 C60 200 150 300 250 220 S380 180 430 220 L430 320 L-20 320Z" fill="#F0CDBE" opacity=".8" />
        <path d="M-20 160 C40 110 120 180 200 120" stroke="#fff" strokeOpacity=".5" fill="none" />
      </svg>
      <Sprig className="absolute left-[4%] bottom-0 h-44 opacity-80" color="#9B6B55" />
      <Flower size={110} className="absolute left-[12%] top-[8%]" color="#F8DCD6" />
      <Sprig className="absolute right-[6%] top-[4%] h-36 opacity-70 rotate-12" color="#B48B6A" />
      <div className="absolute inset-0 grid place-items-center"><Bottle style="rose" className="h-[78%] rotate-[-16deg] drop-shadow-[0_24px_24px_rgba(110,60,45,.3)]" title="NEXAWEB perfume resting on silk" /></div>
    </Scene>
  )
}
export default function StorySection() {
  return (
    <section aria-labelledby="story-h" className="grid md:grid-cols-2 bg-cream">
      <SilkScene />
      <Reveal className="flex items-center px-6 py-14 sm:px-12 lg:px-20">
        <div className="max-w-md">
          <p className="eyebrow">OUR STORY</p>
          <h2 id="story-h" className="mt-4 text-3xl sm:text-4xl md:text-[44px] leading-tight">The Art of Fine Fragrance</h2>
          <p className="mt-6 text-[15px] leading-[1.8] text-ink/85">At NEXAWEB, we believe fragrance is more than a scent—it's an expression of who you are. Each bottle is thoughtfully crafted using rare ingredients and timeless techniques to bring you luxury in every spray.</p>
          <Link to="/about" className="btn-dark mt-8">LEARN MORE <ArrowRight size={14} /></Link>
        </div>
      </Reveal>
    </section>
  )
}
