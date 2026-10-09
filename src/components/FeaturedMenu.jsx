const dishes = [
  {
    image: '/images/dish-1.jpg',
    title: 'Plated Elegance',
    subtitle: 'Main Course',
    desc: 'A beautifully plated dish paired with fine wine for an elevated dining experience.',
  },
  {
    image: '/images/dish-2.jpg',
    title: 'Candlelit Bites',
    subtitle: 'Starters',
    desc: 'Small bowls of carefully curated flavors served in an intimate candlelit setting.',
  },
  {
    image: '/images/dish-3.jpg',
    title: 'Vineyard Plate',
    subtitle: 'Signature',
    desc: 'A signature plated dish complemented by a glass of selected vintage wine.',
  },
  {
    image: '/images/dish-4.jpg',
    title: 'The Final Touch',
    subtitle: 'Chef\'s Special',
    desc: 'A dramatic finishing pour of sauce that completes the dish with artistry.',
  },
]

export default function FeaturedMenu() {
  return (
    <section className="featured" id="featured">
      <div className="container">
        <div className="featured-header reveal">
          <span className="eyebrow">OUR HOUSE SPECIALTIES</span>
          <h2 className="section-heading">A Taste Worth <em>Remembering</em></h2>
          <p className="section-subtext">
            Explore a carefully curated selection of signature creations, prepared
            with attention to flavor, presentation, and detail.
          </p>
        </div>
        <div className="featured-grid">
          {dishes.map((dish, i) => (
            <article className="dish-card reveal" key={i} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="dish-card-image">
                <img src={dish.image} alt={dish.title} loading="lazy" />
              </div>
              <div className="dish-card-body">
                <span className="dish-card-subtitle">{dish.subtitle}</span>
                <h3 className="dish-card-title">{dish.title}</h3>
                <p className="dish-card-desc">{dish.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
