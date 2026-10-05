import type { BottleStyle } from '../data/products'

/** Product photography lives in /public/img — swap the files to change a product shot. */
export const bottlePhoto: Record<BottleStyle, string> = {
  rose: '/img/rose-noir.jpg', oud: '/img/oud-supreme.jpg', belle: '/img/belle-eclat.jpg',
  lumiere: '/img/lumiere.jpg', blanc: '/img/eternal-blanc.jpg',
}
export default function Bottle({ style, className = '', title }: { style: BottleStyle; className?: string; title?: string }) {
  return <img src={bottlePhoto[style]} alt={title ?? 'NEXAWEB perfume bottle'} loading="lazy" decoding="async" width={448} height={476} className={`w-auto max-w-full object-contain ${className}`} />
}
