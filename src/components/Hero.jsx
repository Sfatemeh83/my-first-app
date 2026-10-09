import { useState } from 'react'

const slides = [
  {
    eyebrow: 'SIGNATURE DINING EXPERIENCE',
    headline: (
      <>
        Exceptional Taste.
        <br />
        <em>Unforgettable</em> Moments.
      </>
    ),
    subtext:
      'Discover thoughtfully crafted dishes, premium ingredients, and an unforgettable dining experience in a warm and sophisticated atmosphere.',
    image: '/images/hero-burger.jpg',
    alt: 'Gourmet burger on a dark plate with warm lighting',
  },
  {
    eyebrow: 'CULINARY EXCELLENCE',
    headline: (
      <>
        Where Every Dish
        <br />
        Tells a <em>Story</em>.
      </>
    ),
    subtext:
      'Our chefs blend tradition with innovation, creating plates that delight the senses and leave a lasting impression on every guest.',
    image: '/images/feature-dish.jpg',
    alt: 'Signature plated dish with careful presentation',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((c) => (c + 1) % slides.length)
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)
  const slide = slides[current]

  return (
    <section className="hero" id="home">
      <div className="hero-bg-glow" />
      <div className="container hero-inner">
        <div className="hero-text">
          <span className="eyebrow">{slide.eyebrow}</span>
          <h1 className="hero-headline">{slide.headline}</h1>
          <p className="section-subtext">{slide.subtext}</p>
          <div className="hero-buttons">
            <a href="#menu" className="btn btn-primary">Explore Our Menu</a>
            <a href="#reservation" className="btn btn-outline">Reserve a Table</a>
          </div>
        </div>
        <div className="hero-image-wrap">
          <img
            key={current}
            src={slide.image}
            alt={slide.alt}
            className="hero-image"
            loading="eager"
            fetchpriority="high"
          />
        </div>
      </div>
      <div className="hero-controls">
        <div className="hero-controls-info">
          <span>0{current + 1}</span> / 0{slides.length} — Signature Collection
        </div>
        <div className="hero-arrows">
          <button className="btn-ghost" onClick={prev} aria-label="Previous slide">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button className="btn-ghost" onClick={next} aria-label="Next slide">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
