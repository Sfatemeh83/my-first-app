export default function PageHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <header className="pt-32 md:pt-40 pb-12 md:pb-16 text-center bg-cream/60">
      <div className="container-x animate-fadeUp">
        <p className="eyebrow">{eyebrow}</p><span className="rule mt-3 mb-5" />
        <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[1.08]">{title}</h1>
        {subtitle && <p className="mt-5 max-w-xl mx-auto text-sm md:text-base text-ink/75 leading-relaxed">{subtitle}</p>}
      </div>
    </header>
  )
}
