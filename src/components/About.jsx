export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about-inner">
        <div className="about-text reveal">
          <span className="eyebrow">OUR STORY</span>
          <h2 className="section-heading">
            A Passion for <em>Authentic</em> Dining
          </h2>
          <p className="section-subtext">
            Born from a love of fine cuisine and warm hospitality, Noir Gourmet
            brings together the finest ingredients and a dedication to the craft of
            cooking. Every dish is a reflection of our commitment to excellence.
          </p>
          <p className="section-subtext">
            Our dining room offers an intimate, candlelit atmosphere where each
            guest is invited to slow down, savor, and experience the artistry of a
            truly memorable meal.
          </p>
          <div className="about-stats">
            <div>
              <div className="about-stat-num">15+</div>
              <div className="about-stat-label">Years of Craft</div>
            </div>
            <div>
              <div className="about-stat-num">40+</div>
              <div className="about-stat-label">Signature Dishes</div>
            </div>
            <div>
              <div className="about-stat-num">100%</div>
              <div className="about-stat-label">Fresh Ingredients</div>
            </div>
          </div>
          <a href="#menu" className="btn btn-outline">View Our Menu</a>
        </div>
        <div className="about-image-wrap reveal">
          <div className="about-image-accent" />
          <img
            src="/images/feature-dish.jpg"
            alt="Chef preparing a signature dish with careful attention to detail"
            className="about-image"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
