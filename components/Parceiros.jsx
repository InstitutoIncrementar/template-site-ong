import { Container } from './Container'
import { SectionTitle } from './SectionTitle'
import { hasValue } from '../lib/utils'

function PartnerLogo({ partner }) {
  const logo = <img src={partner.logo} alt={partner.name} className="h-16 w-auto object-contain" />

  if (!hasValue(partner.url)) return logo

  return (
    <a href={partner.url} target="_blank" rel="noreferrer noopener" aria-label={partner.name}>
      {logo}
    </a>
  )
}

export function Parceiros({ parceiros }) {
  if (!parceiros.items?.length) return null

  return (
    <section id="parceiros" aria-label={parceiros.title} className="py-20">
      <Container className="flex flex-col gap-10">
        <SectionTitle eyebrow={parceiros.eyebrow} title={parceiros.title} align="center" />

        <ul className="flex flex-wrap items-center justify-center gap-10">
          {parceiros.items.map((partner, index) => (
            <li key={`${partner.name}-${index}`}>
              <PartnerLogo partner={partner} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
