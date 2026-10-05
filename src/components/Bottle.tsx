import type { BottleStyle } from '../data/products'

interface Spec { liquid: [string, string]; cap: [string, string]; label: string; ink: string; body: 'square' | 'round' | 'tall'; capShape: 'cube' | 'ball' | 'slab' | 'block'; glass: number }
const specs: Record<BottleStyle, Spec> = {
  rose:    { liquid: ['#F6C6B4', '#E79C86'], cap: ['#E8D6A6', '#A87C3C'], label: '#FBF3E7', ink: '#6B4A3C', body: 'square', capShape: 'cube', glass: 1 },
  oud:     { liquid: ['#E1A640', '#7A3F10'], cap: ['#3a3a3a', '#0a0a0a'], label: '#1c1512', ink: '#D9B26A', body: 'square', capShape: 'block', glass: 1 },
  belle:   { liquid: ['#F7D9D1', '#E9B9B0'], cap: ['#F1ECE6', '#B9B0A7'], label: '#FBF3E7', ink: '#6B4A3C', body: 'tall', capShape: 'slab', glass: 1 },
  lumiere: { liquid: ['#EBC26F', '#C48A2E'], cap: ['#EBD08E', '#A27A2F'], label: '#FBF3E7', ink: '#6B4A3C', body: 'round', capShape: 'ball', glass: 1 },
  blanc:   { liquid: ['#F4F1EE', '#DAD3CC'], cap: ['#3a3a3a', '#0a0a0a'], label: '#FBF3E7', ink: '#3A2A24', body: 'tall', capShape: 'block', glass: 0.6 },
}

export default function Bottle({ style, className = '', title }: { style: BottleStyle; className?: string; title?: string }) {
  const s = specs[style]
  const id = `b-${style}`
  const w = s.body === 'tall' ? 96 : s.body === 'round' ? 108 : 112
  const x = 100 - w / 2
  const top = s.body === 'tall' ? 96 : 110
  const bodyH = 292 - top
  const r = s.body === 'round' ? 44 : 6
  return (
    <svg viewBox="0 0 200 320" className={className} role="img" aria-label={title ?? `${style} perfume bottle`}>
      <defs>
        <linearGradient id={`${id}-l`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={s.liquid[0]} /><stop offset="1" stopColor={s.liquid[1]} /></linearGradient>
        <linearGradient id={`${id}-c`} x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor={s.cap[1]} /><stop offset=".35" stopColor={s.cap[0]} /><stop offset="1" stopColor={s.cap[1]} /></linearGradient>
        <linearGradient id={`${id}-g`} x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#fff" stopOpacity=".7" /><stop offset=".15" stopColor="#fff" stopOpacity=".05" /><stop offset=".85" stopColor="#fff" stopOpacity=".05" /><stop offset="1" stopColor="#fff" stopOpacity=".55" /></linearGradient>
        <radialGradient id={`${id}-s`}><stop offset="0" stopColor="#3A2A24" stopOpacity=".35" /><stop offset="1" stopColor="#3A2A24" stopOpacity="0" /></radialGradient>
      </defs>
      <ellipse cx="100" cy="300" rx="76" ry="9" fill={`url(#${id}-s)`} />
      {/* glass */}
      <rect x={x} y={top} width={w} height={bodyH} rx={r} fill="#fff" fillOpacity={0.55 * s.glass + 0.25} stroke="#fff" strokeOpacity=".9" />
      <rect x={x + 8} y={top + 8} width={w - 16} height={bodyH - 18} rx={Math.max(r - 4, 2)} fill={`url(#${id}-l)`} fillOpacity={style === 'blanc' ? 0.55 : 0.92} />
      {/* label */}
      <rect x={100 - 28} y={top + bodyH / 2 - 36} width="56" height="68" fill={s.label} stroke={s.ink} strokeOpacity=".35" strokeWidth=".7" />
      <rect x={100 - 25} y={top + bodyH / 2 - 33} width="50" height="62" fill="none" stroke={s.ink} strokeOpacity=".25" strokeWidth=".5" />
      <path d={`M100 ${top + bodyH / 2 - 24} c-5 -4 -6 -9 0 -13 c6 4 5 9 0 13z`} fill={style === 'oud' ? '#D9B26A' : '#B38B4D'} transform="translate(0 8)" />
      <text x="100" y={top + bodyH / 2 + 4} textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="9" fontWeight="600" letterSpacing="1" fill={s.ink}>NEXAWEB</text>
      <text x="100" y={top + bodyH / 2 + 16} textAnchor="middle" fontFamily="Jost, sans-serif" fontSize="3.6" letterSpacing="1.2" fill={s.ink}>EAU DE PARFUM</text>
      <rect x={x} y={top} width={w} height={bodyH} rx={r} fill={`url(#${id}-g)`} />
      {/* neck + collar */}
      <rect x="86" y={top - 14} width="28" height="16" fill="#fff" fillOpacity=".6" stroke="#fff" />
      <rect x="82" y={top - 22} width="36" height="10" fill={`url(#${id}-c)`} />
      {/* cap */}
      {s.capShape === 'ball' && <circle cx="100" cy={top - 56} r="34" fill={`url(#${id}-c)`} />}
      {s.capShape === 'cube' && <rect x="72" y={top - 80} width="56" height="58" rx="4" fill="#fff" fillOpacity=".7" stroke="#fff" />}
      {s.capShape === 'cube' && <rect x="80" y={top - 72} width="40" height="42" fill={`url(#${id}-c)`} fillOpacity=".25" />}
      {s.capShape === 'slab' && <rect x="76" y={top - 78} width="48" height="56" rx="3" fill={`url(#${id}-c)`} />}
      {s.capShape === 'block' && <rect x="74" y={top - 72} width="52" height="50" rx="2" fill={`url(#${id}-c)`} />}
      <rect x="80" y={top - 70} width="6" height="44" fill="#fff" fillOpacity=".25" />
    </svg>
  )
}
