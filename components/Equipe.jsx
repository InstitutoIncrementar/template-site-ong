import { Container } from './Container'
import { SectionTitle } from './SectionTitle'
import { hasValue } from '../lib/utils'

export function Equipe({ equipe }) {
  if (!equipe.items?.length) return null

  return (
    <section id="equipe" aria-label={equipe.title} className="bg-primary-light/60 py-20">
      <Container className="flex flex-col gap-10">
        <SectionTitle eyebrow={equipe.eyebrow} title={equipe.title} subtitle={equipe.intro} />

        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {equipe.items.map((person, index) => (
            <li key={`${person.name}-${index}`} className="flex flex-col items-center gap-3 text-center">
              {hasValue(person.photo) && (
                <img
                  src={person.photo}
                  alt=""
                  className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-sm"
                />
              )}
              <div>
                <h3 className="text-base font-semibold">{person.name}</h3>
                <p className="text-sm text-ink/70">{person.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
