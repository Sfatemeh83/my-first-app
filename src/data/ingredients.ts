export interface Ingredient { name: string; origin: string; notes: string; description: string; tint: string; accent: string }
export const ingredients: Ingredient[] = [
  { name: 'Bulgarian Rose', origin: 'Kazanlak Valley, Bulgaria', notes: 'Velvety · Honeyed · Dewy', tint: '#E9BFB4', accent: '#B5667A', description: 'Hand-picked at dawn, the damask rose yields a heart of unmatched depth and softness.' },
  { name: 'Oud', origin: 'Assam, India', notes: 'Smoky · Resinous · Deep', tint: '#6B4A3A', accent: '#2A1B14', description: 'Rare, resin-rich agarwood aged for years to release its dark, sacred character.' },
  { name: 'Jasmine', origin: 'Grasse, France', notes: 'Indolic · Radiant · White floral', tint: '#F4EBDD', accent: '#E3D3B3', description: 'Harvested by hand before sunrise, when its white blossoms are most luminous.' },
  { name: 'Sandalwood', origin: 'Mysore, India', notes: 'Creamy · Woody · Soft', tint: '#D9B58D', accent: '#9A6B3F', description: 'A creamy, milky wood that lends a smooth, lingering base to our compositions.' },
  { name: 'Vanilla', origin: 'Madagascar', notes: 'Warm · Sweet · Smooth', tint: '#EAD3A6', accent: '#8A6232', description: 'Slow-cured pods bring a rounded, sunlit sweetness that never feels heavy.' },
  { name: 'Amber', origin: 'Mediterranean Basin', notes: 'Golden · Balsamic · Warm', tint: '#D9A55F', accent: '#8F5B22', description: 'A glowing accord of resins and labdanum that wraps each scent in warmth.' },
  { name: 'Bergamot', origin: 'Calabria, Italy', notes: 'Bright · Citrus · Sparkling', tint: '#E6E0A9', accent: '#9BA05A', description: 'Cold-pressed from sun-ripened peels, the sparkling opening of our fragrances.' },
  { name: 'Musk', origin: 'Crafted in our Paris atelier', notes: 'Clean · Skin-like · Soft', tint: '#EDE3DA', accent: '#B9A596', description: 'A clean, cruelty-free musk that melts into the skin like a second touch.' },
]
