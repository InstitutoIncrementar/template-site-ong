import { Container } from './Container'
import { SectionTitle } from './SectionTitle'
import { hasValue } from '../lib/utils'

export function Sobre({ sobre }) {
  const paragraphs = sobre.text.split(/\n\s*\n/).filter(hasValue)

  return (
    <section id="sobre" aria-label={sobre.title} className="bg-primary-light/60 py-20">
      <Container className="grid items-start gap-12 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <SectionTitle eyebrow={sobre.eyebrow} title={sobre.title} />
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="text-base text-ink/80 md:text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex flex-col gap-6">
          {hasValue(sobre.image) && (
            <img src={sobre.image} alt="" className="w-full rounded-3xl" />
          )}
          {hasValue(sobre.mission) && (
            <div className="rounded-2xl bg-primary p-6 text-white">
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-white/80">
                {sobre.missionTitle}
              </h3>
              <p className="text-base">{sobre.mission}</p>
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
