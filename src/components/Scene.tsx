import type { ReactNode } from 'react'

export function Flower({ className = '', color = '#F2C3BE', size = 120 }: { className?: string; color?: string; size?: number }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={className} aria-hidden="true">
      {Array.from({ length: 8 }).map((_, i) => (
        <ellipse key={i} cx="50" cy="26" rx="11" ry="26" fill={color} fillOpacity=".92" transform={`rotate(${i * 45} 50 50)`} />
      ))}
      <circle cx="50" cy="50" r="7" fill="#E7C98D" />
    </svg>
  )
}

export function Sprig({ className = '', color = '#B48B6A' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 80 160" className={className} aria-hidden="true" fill="none" stroke={color} strokeWidth="1.2">
      <path d="M40 160 C38 110 44 60 36 6" />
      {[18, 38, 58, 80, 102].map((y, i) => (
        <g key={y}><circle cx={i % 2 ? 50 : 28} cy={y} r="5" fill={color} fillOpacity=".4" /><path d={`M40 ${y + 14} Q${i % 2 ? 56 : 24} ${y + 4} ${i % 2 ? 50 : 28} ${y}`} /></g>
      ))}
    </svg>
  )
}

/** Warm studio backdrop used behind product imagery. Replace with photography via <img> when available. */
export default function Scene({ children, tone = 'blush', className = '' }: { children?: ReactNode; tone?: 'blush' | 'cream' | 'rose' | 'dark'; className?: string }) {
  const bg = {
    blush: 'radial-gradient(circle at 70% 25%, #FBE9E0 0%, #F1D3C7 55%, #E4BBAE 100%)',
    cream: 'radial-gradient(circle at 50% 30%, #FFFBF6 0%, #F7EEE4 70%, #EEDFD0 100%)',
    rose: 'linear-gradient(135deg, #F3D6CB 0%, #E4B9AB 55%, #D2A090 100%)',
    dark: 'radial-gradient(circle at 50% 30%, #4A2F26 0%, #2A1B16 100%)',
  }[tone]
  return <div className={`relative overflow-hidden ${className}`} style={{ background: bg }}>{children}</div>
}
