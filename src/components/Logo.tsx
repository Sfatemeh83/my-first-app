import { Link } from 'react-router-dom'
export function Crest({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" stroke="#B38B4D" strokeWidth="1.1" aria-hidden="true">
      <path d="M16 3c-3 4-3 8 0 11 3-3 3-7 0-11z" /><path d="M16 14c-6-1-9-5-10-8 5 0 9 2 10 8z" /><path d="M16 14c6-1 9-5 10-8-5 0-9 2-10 8z" /><path d="M16 14v12" />
    </svg>
  )
}
export default function Logo({ light = false, onClick }: { light?: boolean; onClick?: () => void }) {
  return (
    <Link to="/" onClick={onClick} aria-label="NEXAWEB Perfume — home" className="inline-flex flex-col items-center leading-none">
      <Crest className="w-5 h-5 mb-0.5" />
      <span className={`font-serif text-[22px] tracking-[0.12em] font-medium ${light ? 'text-ivory' : 'text-espresso'}`}>NEXAWEB</span>
      <span className={`text-[7px] tracking-[0.4em] mt-1 ${light ? 'text-ivory/70' : 'text-ink/70'}`}>PERFUME</span>
    </Link>
  )
}
