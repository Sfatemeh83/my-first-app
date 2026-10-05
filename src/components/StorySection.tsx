import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

export function SilkScene({ className = 'min-h-[300px] md:min-h-[340px]' }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img src="/img/story.jpg" alt="NEXAWEB Eau de Parfum resting on blush silk with delicate dried and white flowers" loading="lazy" decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-[62%_50%]" />
    </div>
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
