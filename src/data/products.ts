export type BottleStyle = 'rose' | 'oud' | 'belle' | 'lumiere' | 'blanc'
export interface Product {
  id: string; name: string; price: number; family: string; tagline: string; description: string
  top: string[]; heart: string[]; base: string[]; style: BottleStyle; ingredients: string[]
  longevity: string; badge?: string
}
export const products: Product[] = [
  { id: 'rose-noir', name: 'ROSE NOIR', price: 89, family: 'Floral Amber', style: 'rose', badge: 'Bestseller',
    tagline: 'A velvet rose wrapped in warm amber.',
    description: 'Rose Noir opens with a spark of pink pepper and bergamot before unfolding into a lush heart of Bulgarian rose and jasmine. A soft trail of musk, amber and sandalwood lingers on skin for hours.',
    top: ['Pink Pepper', 'Bergamot'], heart: ['Rose', 'Jasmine'], base: ['Musk', 'Amber', 'Sandalwood'],
    ingredients: ['Bulgarian Rose', 'Jasmine', 'Bergamot', 'Amber', 'Musk', 'Sandalwood'], longevity: '8–10 hours' },
  { id: 'oud-supreme', name: 'OUD SUPRÊME', price: 99, family: 'Woody Oriental', style: 'oud',
    tagline: 'Dark, resinous and quietly commanding.',
    description: 'A noble interpretation of oud — smoky, resinous and softened with saffron and vanilla. Intense and enveloping, made for evenings that deserve to be remembered.',
    top: ['Saffron', 'Cardamom'], heart: ['Oud', 'Leather'], base: ['Vanilla', 'Amber', 'Patchouli'],
    ingredients: ['Oud', 'Vanilla', 'Amber'], longevity: '10–12 hours' },
  { id: 'belle-eclat', name: 'BELLE ÉCLAT', price: 89, family: 'Fresh Floral', style: 'belle', badge: 'New',
    tagline: 'Radiant petals and a veil of white musk.',
    description: 'Luminous and airy, Belle Éclat blends sparkling bergamot with peony and jasmine, resting on a clean, skin-like musk. An effortless everyday signature.',
    top: ['Bergamot', 'Pear Blossom'], heart: ['Peony', 'Jasmine'], base: ['White Musk', 'Cedar'],
    ingredients: ['Bergamot', 'Jasmine', 'Musk'], longevity: '6–8 hours' },
  { id: 'lumiere', name: 'LUMIÈRE', price: 84, family: 'Gourmand Amber', style: 'lumiere',
    tagline: 'Golden warmth, like sunlight on silk.',
    description: 'Lumière glows with golden amber, Madagascar vanilla and a touch of honeyed sandalwood. Warm, comforting and softly addictive.',
    top: ['Mandarin', 'Honey'], heart: ['Orange Blossom', 'Vanilla'], base: ['Amber', 'Sandalwood', 'Tonka'],
    ingredients: ['Vanilla', 'Amber', 'Sandalwood'], longevity: '8–10 hours' },
  { id: 'eternal-blanc', name: 'ETERNAL BLANC', price: 79, family: 'Clean Musk', style: 'blanc',
    tagline: 'Pure, quiet and endlessly elegant.',
    description: 'A minimalist composition of white musk, soft cedar and a whisper of bergamot. Eternal Blanc is the scent of fresh linen and sunlit skin.',
    top: ['Bergamot', 'Lemon Zest'], heart: ['Lily of the Valley', 'Iris'], base: ['White Musk', 'Cedar'],
    ingredients: ['Bergamot', 'Musk'], longevity: '6–8 hours' },
]
export const sizes = [
  { ml: 30, delta: -25 }, { ml: 50, delta: 0 }, { ml: 100, delta: 45 },
]
export const priceFor = (p: Product, ml: number) => p.price + (sizes.find(s => s.ml === ml)?.delta ?? 0)
export const fmt = (n: number) => `$${n.toFixed(2)}`
