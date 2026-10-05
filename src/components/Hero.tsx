import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Scene from './Scene'

/** Hero photograph lives at /public/hero.jpg — replace the file to change the image. */
export default function Hero() {
  return (
    <section aria-labelledby="hero-h" className="relative pt-[72px]">
      <Scene tone="blush" className="min-h-[880px] sm:min-h-[640px] lg:min-h-[600px]">
        <div className="absolute bottom-0 right-0 w-full sm:w-[95%] sm:-right-[40%] lg:w-[82%] lg:-right-[16%] h-[400px] sm:h-full">
          <img src="/hero.jpg" alt="NEXAWEB Eau de Parfum in a faceted crystal bottle on pale marble, surrounded by blush flowers"
            {...{ fetchpriority: "high" }} width={1242} height={774}
            className="w-full h-full object-cover object-[8%_50%] sm:object-left animate-fadeIn
              [mask-image:linear-gradient(to_bottom,transparent,#000_30%)] sm:[mask-image:linear-gradient(to_right,transparent,#000_28%)]" />
        </div>
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
      </Scene>
    </section>
  )
}
