import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Scene, { Flower, Sprig } from './Scene'
import Bottle from './Bottle'

export default function Hero() {
  const [y, setY] = useState(0)
  useEffect(() => {
    const on = () => setY(Math.min(window.scrollY, 600))
    window.addEventListener('scroll', on, { passive: true }); return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <section aria-labelledby="hero-h" className="relative pt-[72px]">
      <Scene tone="blush" className="min-h-[880px] sm:min-h-[640px] lg:min-h-[600px]">
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(251,240,232,.95)_0%,rgba(251,240,232,.55)_40%,transparent_65%)] z-[1] pointer-events-none" />
        <div className="relative z-[2] container-x grid lg:grid-cols-2 items-start sm:items-center min-h-[880px] sm:min-h-[640px] lg:min-h-[600px] pt-12 pb-[400px] sm:py-12">
          <div className="max-w-xl">
            <p className="eyebrow animate-fadeUp">CRAFTED TO INSPIRE</p>
            <h1 id="hero-h" className="mt-5 text-[44px] leading-[1.05] sm:text-6xl lg:text-[68px] animate-fadeUp [animation-delay:150ms]">
              Scents That<br />Leave a Lasting<br />Impression
            </h1>
            <span className="block h-px w-14 bg-champagne my-6 animate-fadeUp [animation-delay:250ms]" />
            <p className="max-w-sm text-[15px] leading-relaxed text-ink/85 animate-fadeUp [animation-delay:300ms]">
              Luxury fragrances made with the finest ingredients to evoke elegance, confidence and unforgettable memories.
            </p>
            <Link to="/collection" className="btn-dark mt-8 animate-fadeUp [animation-delay:450ms]">DISCOVER COLLECTION <ArrowRight size={14} /></Link>
          </div>
        </div>
        {/* photographic tableau (swap for a photo via <img>) */}
        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          <div className="absolute right-0 top-0 h-[55%] w-[34%] opacity-60 hidden md:block" style={{ background: 'radial-gradient(ellipse at 80% 0%, rgba(255,255,255,.6), transparent 70%)' }} />
          {/* vase */}
          <div className="absolute -right-6 sm:right-[2%] top-auto bottom-[250px] sm:top-[6%] sm:bottom-auto w-28 sm:w-44 lg:w-52 h-[200px] sm:h-[38%] rounded-t-[40%] rounded-b-[30%] bg-gradient-to-br from-[#F4E8DE] to-[#C9B3A3] shadow-[inset_-14px_-10px_30px_rgba(120,90,70,.25)]" />
          <Sprig className="absolute right-[7%] sm:right-[10%] -top-2 h-40 sm:h-56 opacity-70" color="#9B6B55" />
          {/* marble slab */}
          <div className="absolute bottom-0 right-0 w-[78%] lg:w-[52%] h-[16%] bg-gradient-to-b from-[#F7EFE8] to-[#E3D4C8]" style={{ clipPath: 'polygon(6% 0, 100% 0, 100% 100%, 0 100%)' }}>
            <svg className="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="none" viewBox="0 0 100 20"><path d="M5 18C25 10 40 16 60 6S85 8 98 2" stroke="#B49A87" strokeWidth=".3" fill="none" /><path d="M0 12C20 14 45 4 70 12" stroke="#B49A87" strokeWidth=".2" fill="none" /></svg>
          </div>
          <Flower className="absolute right-[1%] sm:right-[6%] bottom-[12%] w-24 sm:w-40 lg:w-44 opacity-90" size={170} />
          <Flower className="absolute right-[26%] sm:right-[34%] bottom-[12%] hidden sm:block" size={100} color="#EFB9B4" />
          <div className="absolute right-[10%] sm:right-[16%] lg:right-[17%] bottom-[11%] h-[330px] sm:h-[74%] animate-floaty" style={{ transform: `translateY(${-y * 0.06}px)` }}>
            <div className="h-full aspect-[200/320] animate-fadeIn [animation-delay:300ms]" style={{ filter: 'drop-shadow(0 30px 28px rgba(110,60,45,.28))' }}>
              <Bottle style="rose" className="h-full w-full" title="NEXAWEB Rose Noir Eau de Parfum" />
            </div>
          </div>
        </div>
      </Scene>
    </section>
  )
}
