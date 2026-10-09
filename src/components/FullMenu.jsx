import { useState } from 'react'

const categories = ['All', 'Starters', 'Main Courses', 'Signature Dishes', 'Desserts', 'Beverages']

const menuItems = [
  { name: 'Charred Octopus', desc: 'Spanish octopus, smoked paprika, fingerling potato, citrus aioli', price: '24', category: 'Starters', tag: null },
  { name: 'Burrata & Stone Fruit', desc: 'Creamy burrata, grilled peach, basil oil, aged balsamic', price: '18', category: 'Starters', tag: 'Vegetarian' },
  { name: 'Wagyu Tartare', desc: 'Hand-cut wagyu, quail egg, capers, sourdough crisp', price: '32', category: 'Starters', tag: null },
  { name: 'Dry-Aged Ribeye', desc: '45-day dry-aged ribeye, bone marrow butter, charred onion', price: '68', category: 'Main Courses', tag: null },
  { name: 'Seared Scallops', desc: 'Pan-seared diver scallops, cauliflower purée, brown butter', price: '42', category: 'Main Courses', tag: null },
  { name: 'Duck Confit', desc: 'Slow-cooked duck leg, lentils du Puy, cherry gastrique', price: '38', category: 'Main Courses', tag: null },
  { name: 'Signature Tasting', desc: 'Chef\'s five-course tasting menu with optional wine pairing', price: '95', category: 'Signature Dishes', tag: 'Chef\'s Choice' },
  { name: 'Truffle Risotto', desc: 'Carnaroli rice, black truffle, aged parmesan, truffle butter', price: '36', category: 'Signature Dishes', tag: 'Vegetarian' },
  { name: 'Smoked Short Rib', desc: '48-hour braised short rib, smoked potato purée, red wine jus', price: '44', category: 'Signature Dishes', tag: null },
  { name: 'Dark Chocolate Soufflé', desc: 'Valrhona chocolate, crème anglaise, gold leaf', price: '16', category: 'Desserts', tag: null },
  { name: 'Vanilla Crème Brûlée', desc: 'Tahitian vanilla custard, caramelized sugar, seasonal berry', price: '14', category: 'Desserts', tag: null },
  { name: 'Affogato', desc: 'Vanilla gelato, double espresso, amaretto biscuit', price: '12', category: 'Desserts', tag: null },
  { name: 'Old Fashioned', desc: 'Bourbon, demerara, aromatic bitters, orange peel', price: '18', category: 'Beverages', tag: null },
  { name: 'Sommelier\'s Selection', desc: 'Curated glass of wine chosen by our in-house sommelier', price: '15', category: 'Beverages', tag: null },
  { name: 'Espresso Martini', desc: 'Vodka, coffee liqueur, fresh espresso, vanilla foam', price: '16', category: 'Beverages', tag: null },
]

export default function FullMenu() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? menuItems
    : menuItems.filter((item) => item.category === active)

  return (
    <section className="full-menu" id="menu">
      <div className="container">
        <div className="full-menu-header reveal">
          <span className="eyebrow">EXPLORE THE MENU</span>
          <h2 className="section-heading">The Complete <em>Experience</em></h2>
          <p className="section-subtext" style={{ margin: '0 auto' }}>
            From starters to desserts, each dish is crafted with intention and served
            with meticulous attention to detail.
          </p>
        </div>

        <div className="full-menu-filters" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${active === cat ? 'active' : ''}`}
              onClick={() => setActive(cat)}
              role="tab"
              aria-selected={active === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filtered.map((item, i) => (
            <div className="menu-item" key={i}>
              <img
                src={`/images/dish-${(i % 4) + 1}.jpg`}
                alt={item.name}
                className="menu-item-image"
                loading="lazy"
              />
              <div className="menu-item-body">
                <div className="menu-item-header">
                  <span className="menu-item-name">{item.name}</span>
                  <span className="menu-item-dots" />
                  <span className="menu-item-price">${item.price}</span>
                </div>
                <p className="menu-item-desc">{item.desc}</p>
                {item.tag && <span className="menu-item-tag">{item.tag}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
