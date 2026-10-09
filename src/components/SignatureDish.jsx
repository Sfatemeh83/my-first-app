export default function SignatureDish() {
  return (
    <section className="signature" id="signature">
      <div className="container signature-inner">
        <div className="signature-text reveal">
          <span className="eyebrow">CRAFTED WITH PASSION</span>
          <h2 className="section-heading">
            A Refined Approach to <em>Every Dish</em>
          </h2>
          <p className="section-subtext">
            Every plate brings together carefully selected ingredients, thoughtful
            preparation, and distinctive flavors. Discover a menu created to make
            every visit memorable.
          </p>
          <a href="#about" className="btn btn-outline">Discover Our Story</a>
        </div>
        <div className="signature-image-wrap reveal">
          <div className="signature-glow" />
          <div className="signature-ring" />
          <img
            src="/images/feature-dish.jpg"
            alt="Signature dish with beans and grains in an elegant presentation"
            className="signature-image"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
