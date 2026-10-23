const tones = {
  default: { eyebrow: 'text-accent-dark', title: 'text-ink', subtitle: 'text-ink/70' },
  inverse: { eyebrow: 'text-accent', title: 'text-white', subtitle: 'text-white/80' },
}

export function SectionTitle({ eyebrow, title, subtitle, align = 'left', tone = 'default' }) {
  const alignment = align === 'center' ? 'mx-auto items-center text-center' : 'text-left'
  const colors = tones[tone]

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignment}`}>
      {eyebrow && (
        <span className={`text-sm font-semibold uppercase tracking-wide ${colors.eyebrow}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl font-bold leading-tight md:text-4xl ${colors.title}`}>{title}</h2>
      {subtitle && <p className={`text-base md:text-lg ${colors.subtitle}`}>{subtitle}</p>}
    </div>
  )
}
